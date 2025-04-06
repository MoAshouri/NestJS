import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { UtilsModule } from 'src/utils/utils.module';

@Module({
  controllers: [TasksController],
  providers: [TasksService],
  imports: [UtilsModule],
})
export class TasksModule {}
