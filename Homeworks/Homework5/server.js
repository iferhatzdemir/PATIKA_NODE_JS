const http = require("http");
const port = 5050;
const pages = ["/", "/about", "/contact", "/products"];
const reqSuccesStaus = 200;
const reqErrStatus = 404;
const server = http.createServer((req, res) => {
  // server create server ile server oluşturup request=>req responce=>res paremetrelerini verdik
  const url = req.url; //gelen isteğin url kısmına burada ulaşabildik
  console.log(pages.indexOf(url));
  console.log(url);
  if (pages.indexOf(url) > 0 && url !== "/favicon.ico") {
    res.writeHead(reqSuccesStaus, { "Content-Type": "text/html" }); // Her zaman write önce yazılmalı Dönen sonuncun statusunu ve content typenı burada belirttik
    res.write(`<h2>${url.slice(1, url.length)} sayfasina hosgeldiniz</h2>`);
  } else if (url == "/") {
    res.writeHead(reqSuccesStaus, { "Content-Type": "text/html" }); // Her zaman write önce yazılmalı Dönen sonuncun statusunu ve content typenı burada belirttik
    res.write(`<h2>index sayfasina hosgeldiniz</h2>`);
  } else {
    res.writeHead(reqErrStatus, { "Content-Type": "text/html" });
    res.write("<h2>404 Not Found</2>");
    res.end();
  }

  // if (url == "/") {
  //   res.writeHead(200, { "Content-Type": "text/html" }); // Her zaman write önce yazılmalı Dönen sonuncun statusunu ve content typenı burada belirttik
  //   res.write("<h2>index sayfasına hoşgeldiniz</h2>"); //response olarak index sayfasının bodysine h1 etiketi ile index sayfası yazdık

  //   res.end(); //requesti sonlandırır
  // } else if (url == "/contact") {
  //   res.writeHead(200, { "Content-Type": "text/html" });
  //   res.write("<h2>İletişim Sayfasına hoşgeldiniz </h2>");
  //   res.end();
  // } else if (url == "/about") {
  //   res.writeHead(200, { "Content-Type": "text/html" });
  //   res.write("<h2>Hakkımmızda Sayfasına hoşgeldiniz </h2>");
  //   res.end();
  // } else {
  //   res.write("<h2>404 Not Found</2>");
  //   res.end();
  // }
});
server.listen(port, () => {
  console.log(`Sunucu ${port} ile başlatıldı`);
});
