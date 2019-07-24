import { DynamicModule } from '@nestjs/common';
import { OpenTokOptions, OpenTokAsyncOptions } from './interfaces/opentok-options.interface';
export declare class OpenTokCoreModule {
    static forRoot(options: OpenTokOptions): DynamicModule;
    static forRootAsync(options: OpenTokAsyncOptions): DynamicModule;
    private static createAsyncProviders;
    private static createAsyncOptionsProvider;
}
