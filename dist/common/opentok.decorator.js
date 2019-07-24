"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const opentok_constants_1 = require("./opentok.constants");
function InjectOpenTok() {
    return common_1.Inject(opentok_constants_1.OPENTOK_TOKEN);
}
exports.InjectOpenTok = InjectOpenTok;
