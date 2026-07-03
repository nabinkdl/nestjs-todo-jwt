import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {}

    async register(dto: RegisterDto) {
    const existingUser = await this.prisma.user.findUnique({ where: {email: dto.email,},});
    if (existingUser) {throw new ConflictException('Email already exists');}

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    await this.prisma.user.create({
      data: {
        email: dto.email,
        password: hashedPassword,
        name: dto.name,
      },
    });

    return {
      message: 'Registration successful',
    };
}

 async login(dto: LoginDto) {
  // 1. Find user by email in database
  const user = await this.prisma.user.findUnique({
    where: { email: dto.email },
  });

  // 2. If user doesn't exist, reject login
  if (!user) throw new UnauthorizedException('Invalid credentials');

  // 3. Compare plain password with hashed password in DB
  const match = await bcrypt.compare(dto.password, user.password);

  // 4. If password doesn't match, reject login
  if (!match) throw new UnauthorizedException('Invalid credentials');

  // 5. If everything is valid, generate JWT token and return it
  return this.signToken(user.id, user.email);
}

  private signToken(userId: string, email: string) {
    return {
      access_token: this.jwt.sign({
        sub: userId,
        email,
      }),
    };
  }
}
