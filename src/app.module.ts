import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 6603,
      database: 'nest',
      username: 'root',
      password: 'helloworld',
      synchronize: true,
      entities: ['dist/**/*.entity{.js,.ts}'],
      logging: true,
      extra: {
        connectionLimit: 20,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
