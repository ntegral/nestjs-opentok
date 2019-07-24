import {
    Module,
    Global,
    Provider,
    Type,
    DynamicModule,
  } from '@nestjs/common';
import { OpenTokOptions, OpenTokAsyncOptions, OpenTokOptionsFactory } from './interfaces/opentok-options.interface';
import { createOpenTokProviders } from './providers/opentok.providers'
import { OPENTOK_MODULE_OPTIONS, OPENTOK_TOKEN, createOpenTokClient } from './common';

@Global()
@Module({})
export class OpenTokCoreModule {
    public static forRoot(options: OpenTokOptions): DynamicModule {
        const provider = createOpenTokProviders(options);

        return {
            exports: [provider,],
            module: OpenTokCoreModule,
            providers: [provider]
        }
    }

    public static forRootAsync(options: OpenTokAsyncOptions): DynamicModule {
        const provider: Provider = {
            inject: [OPENTOK_MODULE_OPTIONS],
            provide: OPENTOK_TOKEN,
            useFactory: (options: OpenTokOptions) => createOpenTokClient(options),
        };

        return {
            exports: [provider],
            imports: options.imports,
            module: OpenTokCoreModule,
        }
    }

    private static createAsyncProviders(
        options: OpenTokAsyncOptions,
      ): Provider[] {
        if (options.useExisting || options.useFactory) {
          return [this.createAsyncOptionsProvider(options)];
        }
        const useClass = options.useClass as Type<OpenTokOptionsFactory>;
        return [
          this.createAsyncOptionsProvider(options),
          {
            provide: useClass,
            useClass,
          },
        ];
      }
    
      private static createAsyncOptionsProvider(
        options: OpenTokAsyncOptions,
      ): Provider {
        if (options.useFactory) {
          return {
            inject: options.inject || [],
            provide: OPENTOK_MODULE_OPTIONS,
            useFactory: options.useFactory,
          };
        }
        const inject = [
          (options.useClass || options.useExisting) as Type<OpenTokOptionsFactory>,
        ];
        return {
          provide: OPENTOK_MODULE_OPTIONS,
          useFactory: async (optionsFactory: OpenTokOptionsFactory) =>
            await optionsFactory.createOpenTokOptions(),
          inject,
        };
      }
}