//Single Thread
//Asenkron Javascript
/*
const func1 = () => {
  console.log("Func 1 Console Log 1");

  console.log("Func 1 Console Log 2");

  alert("Alert Message");
};

const func2 = () => {
  console.log("Func 2 Console Log 1");

  console.log("Func 1 Console Log 2");
};

//alert de ki ok butonuna basınca çalışır func2 çalışır burada sekron çalıştığı için basmazsak eğer func2 çalışmaz. burada func için mantıklı gibi görünsede genel bakış açısıyla baktığımızda burada blocking yapıyoruz. bu yüzden asenkron yapmamız gerekiyor.
func1();
func2();

let x = 0;
console.log(x);

setTimeout(() => {
  x = x + 5;
}, 1000);
console.log(x);
x = x + 5;
console.log(x);
//asekron çalıştığı için 0 0 10 olur. 1 saniye bekledikten sonra 5 ekler.
//setTimeout 1 saniye bekletir.
//sekron çalıştığı için  gecikmekden kaynaklı eksik veriler elde ederiz.
// sekron çalıştığı için bloklanma  ve  yavaş çalıştırma gibi sorunlar olur.
*/

//call stack fonksiyonların çalışma sırasını gösterir.
// function func1() {
//   console.log("Func 1");
//   func2();
//   console.log("Ben tekrar Func 1");
// }

// function func2() {
//   console.log("Func 2");
//   func3();
//   console.log("Ben tekrar Func 2");
// }
// function func3() {
//   console.log("Func 3");
// }
// func1();

// function sum(x, y) {
//   return x + y;
// }
// function avg(x, y) {
//   return sum(x, y) / 2;
// }
//
// let x = avg(parameters[0] * 1, parameters[1] * 1);

// console.log(x);

// function task(message) {
//   let n = 10000000000;
//   while (n > 0) {
//     n--;
//   }
//   console.log(message);
// }
// console.log("1");
// console.log("2");
// setTimeout(() => {
//   console.log("3");
// }, 1000);

// console.log("4");
// console.log("5");
// const parameters = process.argv.slice(2);
// task(parameters[0]);
// setTimeout(() => {
//   console.log("232");
// }, 2000);
// task(parameters[1]);
//önce normal fonksiyonlar çalışır sonra callback fonksiyonlar  çalışır.
// event loop  call stack  ve  callback queue  arasında  görev alır.
// call stack  boşaldığında  callback queue  içindeki  fonksiyonları  call stack  e  atar.
// callback queue  içindeki  fonksiyonlar  call stack  e  atıldığında  çalışmaya  başlar.
//calb back bildirim fonksiyonudur. bir  işlem  bittiğinde  çalışması  için  kullanılır.

// const myName = () => {
//   console.log("My Name is Ferhat");
// };
// setTimeout(myName, 5000);
// const btn = document.querySelector("button");
// btn.addEventListener("click", () => {
//   alert("You clicked me!");
//   let pElem = document.createElement("p");
//   pElem.textContent = "This is a newly-added paragraph.";
//   document.body.appendChild(pElem);
// });
// let h1Elem = document.createElement("h1");
// h1Elem.textContent = "HEADER";
// document.body.appendChild(h1Elem);

// const books = [
//   { name: "Pinball 1973", author: "Haruki Murakami" },
//   { name: "Ozgiirliik", author: "Zygmunt Bauman" },
//   { name: "Turkiye'de Cagdaslasma", author: "Niyazi Berkes" },
// ];
// const listBooks = () => {
//   books.map((book, index) => {
//     console.log(book, index);
//   });
// };

// listBooks();
// const addedBooks = (newBook, callback) => {
//   books.push(newBook);
//   console.log("Yeni kitap eklendi:", newBook.name);
//   callback();
// };
// addedBooks({ name: " Berlin Hatıraları", author: "Martin Boyle" }, listBooks());
const books = [
  { name: "Pinball 1973", author: "Haruki Murakami" },
  { name: "Özgürlük", author: "Zygmunt Bauman" },
  { name: "Turkiye'de Çağdaşlaşma", author: "Niyazi Berkes" },
];

const listBooks = () => {
  books.map((book, index) => {
    console.log(book, index);
  });
};

const addNewBook = (newBook, callback) => {
  books.push(newBook);
  console.log("Yeni kitap eklendi:", newBook.name);
  callback();
};

addNewBook({ name: "Berlin Hatıralım", author: "Hüsrev Gerede" }, listBooks);
