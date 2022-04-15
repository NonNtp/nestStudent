import { Controller, Get } from '@nestjs/common';
import { StudentService } from './students.service';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get('/1')
  async loadAll(): Promise<any> {
    return this.studentService.selectAll();
  }

  @Get('/2')
  async loadTwo(): Promise<any> {
    return this.studentService.selectTwo();
  }

  @Get('/3')
  async loadProvince(): Promise<any> {
    return this.studentService.selectProvince();
  }

  @Get('/4')
  async loadJoin(): Promise<any> {
    return this.studentService.selectJoin();
  }

  @Get('/5')
  async loadJoinTwo(): Promise<any> {
    return this.studentService.selectJoinTwo();
  }

  @Get('/6')
  async loadCountRegister(): Promise<any> {
    return this.studentService.selectCountRegister();
  }

  @Get('/7')
  async loadJoinCourse(): Promise<any> {
    return this.studentService.selectJoinCourse();
  }
}
