const express = require('express')
// 开启gzip配置，减小文件体积，传输速度更快  可以通过服务器使用express做gzip压缩。 
// 1.安装包 npm install compression -D  2. 导入包
const compression = require('compression')

const https = require('https')
const fs = require('fs')
const app = express()

const options = {
    cert: fs.readFileSync('./full_chain.pem'),
    key: fs.readFileSync('./private.key')
}

// 一定要把这一行代码，写到静态资源托管之前    3.启用中间件 
app.use(compression())
app.use(express.static('./dist'))

app.listen(80, () => {
    console.log('server running at http://127.0.0.1');
    
})

// https.createServer(options, app).listen(443)