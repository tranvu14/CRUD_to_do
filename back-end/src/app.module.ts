import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ItemsService } from './items/items.service';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AppController, ItemsController],
  providers: [AppService, ItemsService],
})
export class AppModule { }
