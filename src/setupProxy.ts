const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app: any) {
  app.use('/zentao/gantt', createProxyMiddleware({
    target: 'http://192.168.41.34:8080',
    changeOrigin: true,
    pathRewrite: { // 路径替换
      '^/api': '',
    }
  }));
};