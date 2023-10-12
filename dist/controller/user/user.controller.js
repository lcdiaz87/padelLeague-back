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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const express_1 = require("express");
const user_dto_1 = require("../../dto/user-dto/user-dto");
const user_service_1 = require("../../services/user/user.service");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    create(userDto) {
        this.userService.create(userDto).then(user => {
            console.log(user);
            express_1.response.status(common_1.HttpStatus.CREATED);
        }).catch(err => {
            console.log(err);
            express_1.response.status(common_1.HttpStatus.FORBIDDEN).json({ message: 'error in create' });
        }).finally(() => console.log('finally'));
    }
    ;
    getAll() {
        this.userService.getAll().then(users => {
            console.log(users);
            express_1.response.status(common_1.HttpStatus.OK).json(users);
        }).catch(err => {
            console.log(err);
            express_1.response.status(common_1.HttpStatus.FORBIDDEN).json({ message: 'error in getAll' });
        }).finally(() => console.log('finally'));
    }
    update(userDto, response, idUser) {
        this.userService.update(idUser, userDto).then(user => {
            console.log(user);
            response.status(common_1.HttpStatus.OK).json(user);
        }).catch(err => {
            console.log(err);
            response.status(common_1.HttpStatus.FORBIDDEN).json({ message: 'error in update' });
        }).finally(() => console.log('finally'));
    }
    delete(response, idUser) {
        this.userService.delete(idUser).then(res => {
            console.log(res);
            response.status(common_1.HttpStatus.OK).json(res);
        }).catch(err => {
            console.log(err);
            response.status(common_1.HttpStatus.FORBIDDEN).json({ message: 'error in delete' });
        }).finally(() => console.log('finally'));
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getAll", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Param)(':id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto, Object, Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)(':id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "delete", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map