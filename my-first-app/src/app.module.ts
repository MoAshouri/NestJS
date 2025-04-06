import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { UtilsModule } from './utils/utils.module';

@Module({
  imports: [TasksModule, UtilsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
