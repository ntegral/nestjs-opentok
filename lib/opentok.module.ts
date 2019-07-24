import { DynamicModule, Module } from '@nestjs/common';
import { OpenTokOptions, OpenTokAsyncOptions } from './interfaces/opentok-options.interface';
import { OpenTokCoreModule } from './opentok-core.module';

@Module({})
export class OpenTokModule {
    public static forRoot(options?: OpenTokOptions): DynamicModule {
        return {
            module: OpenTokModule,
            imports: [ OpenTokCoreModule.forRoot(options as OpenTokOptions) ]
        };
    }

    public static forRootAsync(options: OpenTokAsyncOptions): DynamicModule {
        return {
          module: OpenTokModule,
          imports: [OpenTokCoreModule.forRootAsync(options)],
        };
      }
}