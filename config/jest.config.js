module.exports = {
    preset: 'babel-jest',
    testEnvironment: 'jsdom',  
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
    moduleFileExtensions: ['js'],
    collectCoverageFrom: ['src/**/*.js'],
  };
  