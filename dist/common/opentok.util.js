"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const OpenTok = require("opentok");
function createOpenTokClient(options) {
    const opentok = new OpenTok(options.apiKey, options.apiSecret);
    return opentok;
}
exports.createOpenTokClient = createOpenTokClient;
