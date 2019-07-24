import { DynamicModule } from '@nestjs/common';
import { OpenTokOptions, OpenTokAsyncOptions } from './interfaces/opentok-options.interface';
export declare class OpenTokModule {
    static forRoot(options?: OpenTokOptions): DynamicModule;
    static forRootAsync(options: OpenTokAsyncOptions): DynamicModule;
}
