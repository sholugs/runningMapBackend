import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'config/ormconfig';

import { UsersModule } from './users/users.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { UsersService } from './users/users.service';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
