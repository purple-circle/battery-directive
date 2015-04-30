exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    browserName: 'chrome',
    shardTestFiles: true,
    maxInstances: 3
  },
  jasmineNodeOpts: {
    showColors: true,
    isVerbose: true
  },
  rootElement: "body",
  specs: ['specs/**/*.js']
};