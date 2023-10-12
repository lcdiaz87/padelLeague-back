"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const user_service_1 = require("./services/user/user.service");
const match_controller_1 = require("./controller/match/match.controller");
const user_controller_1 = require("./controller/user/user.controller");
const match_service_1 = require("./services/match/match.service");
const match_entity_1 = require("./entities/match/match.entity");
const user_entity_1 = require("./entities/user/user.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'root1234',
                database: 'padelLeague',
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                synchronize: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, match_entity_1.Match]),
        ],
        controllers: [app_controller_1.AppController, user_controller_1.UserController, match_controller_1.MatchController],
        providers: [app_service_1.AppService, user_service_1.UserService, match_service_1.MatchService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map