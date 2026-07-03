import { Body, Controller, Delete, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { TodosService } from './todos.service';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { CreateTodoDto } from './dto/create-todo.dto';

@UseGuards(JwtAuthGuard)
@Controller('todos')
export class TodosController {
  constructor(private todos: TodosService) {}

  @Post()
  create(@Req() req, @Body() dto: CreateTodoDto) {
    return this.todos.create(req.user.userId, dto);
  }

  @Get()
  findAll(@Req() req) {
    return this.todos.findAll(req.user.userId);
  }

  @Post(':id/toggle')
  toggle(@Param('id') id: string) {
    return this.todos.toggle(id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.todos.delete(id);
  }
}
