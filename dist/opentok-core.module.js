"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var OpenTokCoreModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
"use strict";
const common_1 = require("@nestjs/common");
const opentok_providers_1 = require("./providers/opentok.providers");
const common_2 = require("./common");
let OpenTokCoreModule = OpenTokCoreModule_1 = class OpenTokCoreModule {
    static forRoot(options) {
        const provider = opentok_providers_1.createOpenTokProviders(options);
        return {
            exports: [provider,],
            module: OpenTokCoreModule_1,
            providers: [provider]
        };
    }
    static forRootAsync(options) {
        const provider = {
            inject: [common_2.OPENTOK_MODULE_OPTIONS],
            provide: common_2.OPENTOK_TOKEN,
            useFactory: (options) => common_2.createOpenTokClient(options),
        };
        return {
            exports: [provider],
            imports: options.imports,
            module: OpenTokCoreModule_1,
            providers: [...this.createAsyncProviders(options), provider]
        };
    }
    static createAsyncProviders(options) {
        if (options.useExisting || options.useFactory) {
            return [this.createAsyncOptionsProvider(options)];
        }
        const useClass = options.useClass;
        return [
            this.createAsyncOptionsProvider(options),
            {
                provide: useClass,
                useClass,
            },
        ];
    }
    static createAsyncOptionsProvider(options) {
        if (options.useFactory) {
            return {
                inject: options.inject || [],
                provide: common_2.OPENTOK_MODULE_OPTIONS,
                useFactory: options.useFactory,
            };
        }
        const inject = [
            (options.useClass || options.useExisting),
        ];
        return {
            provide: common_2.OPENTOK_MODULE_OPTIONS,
            useFactory: (optionsFactory) => __awaiter(this, void 0, void 0, function* () { return yield optionsFactory.createOpenTokOptions(); }),
            inject,
        };
    }
};
OpenTokCoreModule = OpenTokCoreModule_1 = __decorate([
    common_1.Global(),
    common_1.Module({})
], OpenTokCoreModule);
exports.OpenTokCoreModule = OpenTokCoreModule;
