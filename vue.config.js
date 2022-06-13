module.exports = {
  pwa: {
    name: 'Memeit',
    themeColor: '#000000',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxPluginMode: 'InjectManifest',

    workboxOptions: {
      swSrc: './src/service-worker.js'
    }
  }
}