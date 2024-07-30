import type { LoaderFactory, TranslationsLoaderContract } from '@adonisjs/i18n/types'

/**
 * Type for the configuration
 */
export type DbLoaderConfig = {
  connection: string
  tableName: string
}

/**
 * Loader implementation
 */
export class DbLoader implements TranslationsLoaderContract {
  constructor(public config: DbLoaderConfig) {}

  async load() {
    return {
      en: {
        'messages.greeting': 'Hello world',
      },
      fr: {
        'messages.greeting': 'Bonjour le monde',
      },
    }
  }
}

/**
 * Factory function to reference the loader
 * inside the config file.
 */
export function dbLoader(config: DbLoaderConfig): LoaderFactory {
  return () => {
    return new DbLoader(config)
  }
}
