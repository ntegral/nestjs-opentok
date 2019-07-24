"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const opentok_util_1 = require("../common/opentok.util");
const opentok_constants_1 = require("../common/opentok.constants");
function createOpenTokProviders(options) {
    return {
        provide: opentok_constants_1.OPENTOK_TOKEN,
        useValue: opentok_util_1.createOpenTokClient(options)
    };
}
exports.createOpenTokProviders = createOpenTokProviders;
