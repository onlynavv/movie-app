module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleFileExtensions: ['js', 'jsx'],
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest"
  },
  extensionsToTreatAsEsm: [".jsx"],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': '<rootDir>/jest.mock.cjs',
    '\\.(png|jpg|jpeg|gif|svg)$': '<rootDir>/jest.mock.cjs'
  }
};
