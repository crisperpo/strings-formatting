import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  maxConcurrency: 5,
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['src'],
  testRegex: '/*.test.ts$',
  verbose: true,
};

export default config;
