import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Get()
  getId() {
    return this.taskService.getId();
  }

  @Post()
  create(@Body() task: any) {
    return this.taskService.create(task);
  }
}
