const basePath = process.cwd();
const { startCreating, buildSetup } = require(`${basePath}/src/main.js`);

// 실행 함수
(() => {
  buildSetup();
  startCreating();
})();
