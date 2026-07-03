import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
export declare class TodosController {
    private todos;
    constructor(todos: TodosService);
    create(req: any, dto: CreateTodoDto): import(".prisma/client").Prisma.Prisma__TodoClient<{
        id: string;
        createdAt: Date;
        title: string;
        done: boolean;
        userId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    findAll(req: any): import(".prisma/client").Prisma.PrismaPromise<{
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
