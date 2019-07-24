import { ModuleMetadata, Type } from "@nestjs/common/interfaces";

export interface OpenTokOptions {
    apiKey: string;
    apiSecret: string;
}

export interface OpenTokOptionsFactory {
    createOpenTokOptions():
      | Promise<OpenTokOptions>
      | OpenTokOptions;
  }
  
  export interface OpenTokAsyncOptions
    extends Pick<ModuleMetadata, 'imports'> {
    inject?: any[];
    useClass?: Type<OpenTokOptionsFactory>;
    useExisting?: Type<OpenTokOptionsFactory>;
    useFactory?: (
      ...args: any[]
    ) => Promise<OpenTokOptions> | OpenTokOptions;
  }
  