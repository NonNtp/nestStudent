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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentController = void 0;
const common_1 = require("@nestjs/common");
const students_service_1 = require("./students.service");
let StudentController = class StudentController {
    constructor(studentService) {
        this.studentService = studentService;
    }
    async loadAll() {
        return this.studentService.selectAll();
    }
    async loadTwo() {
        return this.studentService.selectTwo();
    }
    async loadProvince() {
        return this.studentService.selectProvince();
    }
    async loadJoin() {
        return this.studentService.selectJoin();
    }
    async loadJoinTwo() {
        return this.studentService.selectJoinTwo();
    }
    async loadCountRegister() {
        return this.studentService.selectCountRegister();
    }
    async loadJoinCourse() {
        return this.studentService.selectJoinCourse();
    }
};
__decorate([
    (0, common_1.Get)('/1'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "loadAll", null);
__decorate([
    (0, common_1.Get)('/2'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "loadTwo", null);
__decorate([
    (0, common_1.Get)('/3'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "loadProvince", null);
__decorate([
    (0, common_1.Get)('/4'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "loadJoin", null);
__decorate([
    (0, common_1.Get)('/5'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "loadJoinTwo", null);
__decorate([
    (0, common_1.Get)('/6'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "loadCountRegister", null);
__decorate([
    (0, common_1.Get)('/7'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "loadJoinCourse", null);
StudentController = __decorate([
    (0, common_1.Controller)('students'),
    __metadata("design:paramtypes", [students_service_1.StudentService])
], StudentController);
exports.StudentController = StudentController;
//# sourceMappingURL=students.controller.js.map