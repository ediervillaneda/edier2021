module.exports = {
    configureWebpack: {
        devtool: 'source-map'
    },
    publicPath: process.env.NODE_ENV === 'production' ? '/claris2021/' : '/'

}