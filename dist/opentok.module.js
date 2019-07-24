"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var OpenTokModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
"use strict";
const common_1 = require("@nestjs/common");
const opentok_core_module_1 = require("./opentok-core.module");
let OpenTokModule = OpenTokModule_1 = class OpenTokModule {
    static forRoot(options) {
        return {
            module: OpenTokModule_1,
            imports: [opentok_core_module_1.OpenTokCoreModule.forRoot(options)]
        };
    }
    static forRootAsync(options) {
        return {
            module: OpenTokModule_1,
            imports: [opentok_core_module_1.OpenTokCoreModule.forRootAsync(options)],
        };
    }
};
OpenTokModule = OpenTokModule_1 = __decorate([
    common_1.Module({})
], OpenTokModule);
exports.OpenTokModule = OpenTokModule;
