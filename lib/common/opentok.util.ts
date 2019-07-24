import { OpenTokOptions } from '../interfaces/opentok-options.interface';
import * as OpenTok from 'opentok';

export function createOpenTokClient(options: OpenTokOptions): OpenTok {
    const opentok = new OpenTok(options.apiKey, options.apiSecret);
    return opentok;
}