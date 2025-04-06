import { Inject, Injectable } from '@nestjs/common';
import { ID_PROVIDER } from 'src/utils/utils.module';

@Injectable()
export class TasksService {
  private tasks = [
    {
      name: 'Kitty',
      age: 2,
    },
  ];

  constructor(@Inject(ID_PROVIDER) private generateId: () => string) {}

  findAll() {
    return this.tasks;
  }

  create(task: any) {
    this.tasks.push(task);
    return task;
  }

  getId() {
    return this.generateId();
  }
}
