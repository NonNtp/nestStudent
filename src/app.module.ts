import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { StudentController } from './students/students.controller';
import { StudentModule } from './students/students.module';
import { StudentService } from './students/students.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'student',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    StudentModule,
  ],
  controllers: [AppController, StudentController],
  providers: [AppService, StudentService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
