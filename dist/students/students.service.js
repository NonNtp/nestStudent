"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let StudentService = class StudentService {
    constructor(connection) {
        this.connection = connection;
    }
    async selectAll() {
        return this.connection.query('SELECT * FROM student');
    }
    async selectTwo() {
        return this.connection.query('SELECT std_id , std_name FROM student');
    }
    async selectProvince() {
        return this.connection.query('SELECT std_id , std_name , province FROM student WHERE province="ขอนแก่น"');
    }
    async selectJoin() {
        return this.connection.query('SELECT * FROM course JOIN register ON register.course_id = course.course_id WHERE std_id ="5001100348"');
    }
    async selectJoinTwo() {
        return this.connection.query('SELECT register.std_id , SUM(course.credit) FROM register JOIN course on register.course_id = course.course_id GROUP BY register.std_id');
    }
    async selectCountRegister() {
        return this.connection.query('SELECT register.course_id , count(*) AS studentCount FROM register GROUP BY register.course_id');
    }
    async selectJoinCourse() {
        return this.connection.query('SELECT student.std_name , register.course_id FROM student JOIN register ON student.std_id = register.std_id WHERE register.course_id = "322236"');
    }
};
StudentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectConnection)()),
    __metadata("design:paramtypes", [typeorm_1.Connection])
], StudentService);
exports.StudentService = StudentService;
//# sourceMappingURL=students.service.js.map