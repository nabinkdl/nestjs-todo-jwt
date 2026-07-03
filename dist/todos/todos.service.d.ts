import { PrismaService } from '../prisma/prisma.service';
import { CreateTodoDto } from './dto/create-todo.dto';
export declare class TodosService {
    private prisma;
    constructor(prisma: PrismaService);
    create(userId: string, dto: CreateTodoDto): import(".prisma/client").Prisma.Prisma__TodoClient<{
        id: string;
        createdAt: Date;
        title: string;
        done: boolean;
        userId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    findAll(userId: string): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        createdAt: Date;
        title: string;
        done: boolean;
        userId: string;
    }[]>;
    toggle(id: string): import(".prisma/client").Prisma.Prisma__TodoClient<{
        id: string;
        createdAt: Date;
        title: string;
        done: boolean;
        userId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    delete(id: string): import(".prisma/client").Prisma.Prisma__TodoClient<{
        id: string;
        createdAt: Date;
        title: string;
        done: boolean;
        userId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
