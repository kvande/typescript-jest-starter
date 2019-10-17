module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.json',
      stringifyContentPathRegex: '\\.html$',
    }
  },
  
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest'
  },
  testMatch: [
    '**/__tests__/**/*.+(ts|js)?(x)',
    '**/+(*.)+(spec|test).+(ts|js)?(x)'
  ],
  moduleNameMapper: {
    '@core/(.*)': '<rootDir>/src/app/core/$1',
    '@shared/(.*)': '<rootDir>/src/app/shared/$1'
  },
  transformIgnorePatterns: ['node_modules/(?!@ngrx)'],
  collectCoverageFrom: [
    'src/app/**/*.ts',
    '!src/app/**/*.module.ts',
    '!src/app/**/*.array.ts',
    '!src/app/fragmentTypes.ts'
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/', 'src/app/*.{js}'],
  
};