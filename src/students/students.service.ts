import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { InjectConnection } from '@nestjs/typeorm';

@Injectable()
export class StudentService {
  constructor(@InjectConnection() private readonly connection: Connection) {}

  async selectAll() {
    return this.connection.query('SELECT * FROM student');
  }

  async selectTwo() {
    return this.connection.query('SELECT std_id , std_name FROM student');
  }

  async selectProvince() {
    return this.connection.query(
      'SELECT std_id , std_name , province FROM student WHERE province="ขอนแก่น"',
    );
  }

  async selectJoin() {
    return this.connection.query(
      'SELECT * FROM course JOIN register ON register.course_id = course.course_id WHERE std_id ="5001100348"',
    );
  }

  async selectJoinTwo() {
    return this.connection.query(
      'SELECT register.std_id , SUM(course.credit) FROM register JOIN course on register.course_id = course.course_id GROUP BY register.std_id',
    );
  }

  async selectCountRegister() {
    return this.connection.query(
      'SELECT register.course_id , count(*) AS studentCount FROM register GROUP BY register.course_id',
    );
  }

  async selectJoinCourse() {
    return this.connection.query(
      'SELECT student.std_name , register.course_id FROM student JOIN register ON student.std_id = register.std_id WHERE register.course_id = "322236"',
    );
  }
}
