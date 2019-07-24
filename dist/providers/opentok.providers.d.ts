import { Provider } from '@nestjs/common';
import * as OpenTok from 'opentok';
import { OpenTokOptions } from '../interfaces/opentok-options.interface';
export declare function createOpenTokProviders(options: OpenTokOptions): Provider<OpenTok>;
