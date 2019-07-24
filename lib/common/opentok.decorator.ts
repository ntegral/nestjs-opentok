import { Inject } from '@nestjs/common';
import { OPENTOK_TOKEN } from './opentok.constants';

export function InjectOpenTok() {
    return Inject(OPENTOK_TOKEN);
}