import { Connection } from 'typeorm';
export declare class StudentService {
    private readonly connection;
    constructor(connection: Connection);
    selectAll(): Promise<any>;
    selectTwo(): Promise<any>;
    selectProvince(): Promise<any>;
    selectJoin(): Promise<any>;
    selectJoinTwo(): Promise<any>;
    selectCountRegister(): Promise<any>;
    selectJoinCourse(): Promise<any>;
}
