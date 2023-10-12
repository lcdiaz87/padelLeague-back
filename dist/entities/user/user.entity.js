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
exports.User = void 0;
const typeorm_1 = require("typeorm");
const match_entity_1 = require("../match/match.entity");
let User = class User {
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "surname", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "appName", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => match_entity_1.Match, match => match.playerA1),
    __metadata("design:type", Array)
], User.prototype, "playerA1", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => match_entity_1.Match, match => match.playerA2),
    __metadata("design:type", Array)
], User.prototype, "playerA2", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => match_entity_1.Match, match => match.playerB1),
    __metadata("design:type", Array)
], User.prototype, "playerB1", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => match_entity_1.Match, match => match.playerB2),
    __metadata("design:type", Array)
], User.prototype, "playerB2", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)({ name: 'users' })
], User);
//# sourceMappingURL=user.entity.js.map