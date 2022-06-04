module.exports = {
  preset: 'ts-jest',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  // setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  transform: {
    // "^.+\\.svg$": "<rootDir>/svgTransform.js",
  },
  testEnvironment: 'jsdom',
}
