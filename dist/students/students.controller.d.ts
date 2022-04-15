import { StudentService } from './students.service';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    loadAll(): Promise<any>;
    loadTwo(): Promise<any>;
    loadProvince(): Promise<any>;
    loadJoin(): Promise<any>;
    loadJoinTwo(): Promise<any>;
    loadCountRegister(): Promise<any>;
    loadJoinCourse(): Promise<any>;
}
