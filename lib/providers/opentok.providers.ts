import { Provider } from '@nestjs/common';
import * as OpenTok from 'opentok';
import { OpenTokOptions } from '../interfaces/opentok-options.interface';
import { createOpenTokClient } from '../common/opentok.util';
import { OPENTOK_TOKEN } from '../common/opentok.constants';

export function createOpenTokProviders(options: OpenTokOptions): Provider<OpenTok> {
    return {
        provide: OPENTOK_TOKEN,
        useValue: createOpenTokClient(options)
    }
}