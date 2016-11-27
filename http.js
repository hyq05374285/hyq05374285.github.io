// 載入 http 的模組
var http = require('http');
// 引用 File System 模組
var fs = require('fs');

console.log(__dirname);

var filename = __dirname + '\\index.html';
console.log(filename);

// 讀取檔案
fs.readFile(filename,'utf8', function(err, content) {
    if (err) {
        console.log('Failed to read');
        return;
    }
var server = http.createServer(function(req, res){
    // req 是本地端請求的訊息
    // res 是主機回傳到本地端的訊息

    // 將檔案內容印出
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(content);
    res.end();
})

// 監聽 12345 port
server.listen(12345);
});
console.log('Server running at http://10.10.60.116:12345/');