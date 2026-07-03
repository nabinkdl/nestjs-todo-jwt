import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodosService {
  constructor(private prisma: PrismaService) {}

  create(userId: string, dto: CreateTodoDto) {
    return this.prisma.todo.create({
      data: {
        title: dto.title,
        userId,
      },
    });
  }

  findAll(userId: string) {
    return this.prisma.todo.findMany({
      where: { userId },
    });
  }

  toggle(id: string) {
    return this.prisma.todo.update({
      where: { id },
      data: { done: true },
    });
  }

  delete(id: string) {
    return this.prisma.todo.delete({
      where: { id },
    });
  }
}
