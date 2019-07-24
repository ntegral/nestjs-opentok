import { Provider } from '@nestjs/common';
import { OpenTokOptions } from '../interfaces/opentok-options.interface';
import { createOpenTokClient } from '../common/opentok.util';
import { OPENTOK_TOKEN } from '../common/opentok.constants';

export function createOpenTokProviders(options: OpenTokOptions): Provider {
    return {
        provide: OPENTOK_TOKEN,
        useValue: createOpenTokClient(options)
    }
}