const http = require("http"); //http kütüphanesini dahil ettik

const server = http.createServer((req, res) => {
  // server create server ile server oluşturup request=>req responce=>res paremetrelerini verdik
  const url = req.url; //gelen isteğin url kısmına burada ulaşabildik
  if (url == "/") {
    res.writeHead(200, { "Content-Type": "text/html" }); // Her zaman write önce yazılmalı Dönen sonuncun statusunu ve content typenı burada belirttik vebunun sayesinde html etiketleri çalışır
    res.write("<h1>index sayfası</h1>"); //response olarak index sayfasının bodysine h1 etiketi ile index sayfası yazdık

    res.end(); //requesti sonlandırır
  } else if (url == "/contact") {
    res.write("İletişim Sayfası");
    res.end();
  } else if (url == "/about") {
    res.write("Hakkımmızda Sayfası");
    res.end();
  } else {
    res.write("404 Not Found");
    res.end();
  }
});

const port = 3300; // sunucunun istekleri kabul edeceği portu belirledik
server.listen(port, () => {
  //listen ile bu porta gelen istekleri dinlemeye başladık
  console.log(`Sunucu ${port} ile başlatıldı`);
});
