module.exports = {
  appName: 'configForm',
  account: {
    username: 'pandora@qiniu.com',
    password: '123456a'
  },
  proxy: {
    '/api': {
      target: 'http://pandora-express-rc.qiniu.io',
      changeOrigin: true
    }
  }
}
