//=====================================================================
//KONSOL
//console.log("hello javascript");
//console.log("naber");
//alert("dikkat");
//console.warn("bu bir uyaridir");
//console.error("bu bir hatadir");
//prompt("adinizi giriniz");

//========degisken tanimlama=============
//=======VAR=============================
//?ancak modern JS var keywordun kullanimi azaldi
//? cunku 
var isim="ipek"; // var public herkes ulasabilir
console.log(typeof isim);
isim=3.14;
console.log(typeof isim);

//=====Const=============================
// TODO: const ve let Modern JS ile gelmiş yeni değişken tanımlama keywordleridir.
// ! CONST: Sadece başlangıçta değer atanabilir.
// ! Sonradan değeri değiştirilemez (non-primitiveler hariç).mümkünse const, 
//!yoksa let, o da mümkün değilse var kullanılmalı. çünkü js de çok rahat 
//!değişiklik yapılıyor, var, let sıkıntı çıkarabilir.

const piSayisi=3.14;
//piSayisi=3;

const isim1="Osman";
console.log(typeof isim1);
//const numer; hatali yazim. consta null atadik
// tekrar deger atayamam
//number=4;

//====LET========================================
//? Eğerki değişkenimizin değerinin değişmesi gerekiyor ise const kullanamayız.
// ? Bunun yerine LET kullanabiliriz.
// ! LET Block-scope bir değişkendir. VAR ise global-scope bir tanımlamadır.
// * Block-scope: Sadece tanımlı olduğu alanda geçerlidir.
// var=public let=protected

let fiyat;
fiyat=10;
console.log(typeof fiyat);
fiyat="erdem";
console.log( fiyat);


//string tanimlamak icin 3 farkli karakter kullanilabilir.

let name1="Alaaddin";
let name2="Faruk";
let name3="Ogsan";
console.log(name3);

//=======Aritmetik Operatorler==========================

const kola=5;
const cips=6;
const ekmek=2;
console.log(kola+cips+ekmek);//13
console.log("toplam fiyat",kola+cips+ekmek);//13 toplama yontemi

const ad="can";
const soyad="canan";
console.log(ad+soyad); // cancanan

const s1=7;
const s2="7";
console.log(s1+s2); //77

console.log("benim adim"+" "+ ad +"benim yasim"+" "+ s1);
//! template literal seklinde yazimi var=============
console.log(`benim adım ${ad} benim yasım ${s1}`);

const taban=2;
const us=3;
console.log(taban**us); //*2*2*2=8

//mod alma%
const sayi=123; 
const birler=sayi%10;
console.log(birler);

const s3=5;
const s4="5";
console.log(s3==s4);
console.log(s3===s4);

// todo TIP DEGISIMLERI========
const para="100";
console.log(para+15); //10015
console.log(Number(para)+15); // 115

const sayi5=56;
console.log(String(sayi5)+sayi5); //5656
console.log(typeof sayi5); // number


// * =======================================================
// *                   KARAR YAPILARI
// * =======================================================

// //************************ IF-ELSE ***********************
//toplama işlemi yapmaya kalktığımızda concatination yapar o yüzden işi baştan sağlam tutalım ve prompt lara number eklemeliyiz
//bölen 0 olmayı göstermek zorunda değiliz
const s1 = Number(prompt("Birinci Sayı:"));
const islem = prompt("İslemi giriniz");
const s2 = Number(prompt("İkinci Sayı:"));
let sonuc = 0;

if (islem == "+") {
  sonuc = s1 + s2;
} else if (islem == "-") {
  sonuc = s1 - s2;
} else if (islem == "*") {
  sonuc = s1 * s2;
} else if (islem == "/") {
  !s2 ? alert("bölen 0 olamaz") : (sonuc = s1 / s2);
} else {
  console.log("yanlış işlem yaptınız");
}

console.log(`${s1} ${islem} ${s2} = ${sonuc}`);
//   mesela=> 3        +      5   =   8

// * =======================================================
// *                      TERNARY
// * =======================================================
//ornek
const name2 = prompt("Adinizi giriniz:"); //name yazınca uyarı veriyor, o yüzden name1

// const age = +prompt("Yasinizi giriniz:"); ilk yol sadece + da sıkıntı oluyor, olmasın diye
const age = Number(prompt("Yasinizi giriniz:"));
const healt = prompt("Saglikli misiniz e/h");

// age >= 18
//   ? console.log(`${name1} ehliyet alabilir`)
//   : console.log(`${name1} ehliyet alamaz`);

// const result =
//   age >= 18 && healt=="e" ? `${name1} ehliyet alabilir` : `${name1} ehliyet alamaz`;

// ! emojisense eklentisi yükle==> emoji kısayol (mac te üstte file ın yanındaki edit ->emojiler)
//eklentiden sonra alttakiler kısayol
// Mac: cmd + i;
// Linux: ctrl + alt + i;
// Windows: ctrl + i;
console.log(
  age >= 18 && healt == "e"
    ? `${name2} ehliyet alabilir 🥳`
    : `${name2} ehliyet alamaz 🥺`
);

//? üsttekini alttaki gibi bir değişkene atayıp alert le yazdırabiliriz

// const result = age > 18 && healt == "e" ? "Ehliyet Alabilir" : "Ehliyet Alamaz";
// console.log(result); // hem console da
// alert(result); //hem pop-art olarak sonucu çıkarttık


// ÖRNEK
// const borç = 0;
// const maaş = 3000;
// console.log(!borç && maaş > 2825.9 ? "Kredi Alabilir  🤑" : "Kredi Alamaz 🥺");
// !borç=> borç false ise yani mesela 0 ise
//MacOS işletim sisteminde Emoji ve Semboller penceresini açmak için; klavyeden 'control' , 'command' ve 'space' tuşlarına aynı anda basın. Ardından ilgili
//metin içeriğinde ya da sohbet penceresinde emoji klavyesi karşınıza çıkacaktır.
//Metin girişi sırasında Windows logo(pencere) tuşu + . (nokta) yazın. Emoji klavyesi görüntülenir.
//Fareyle bir emoji seçin veya kullanılabilir emojiler arasında istediğiniz emojiyi aramak için yazmaya devam edin.

//************************ SWITCH-CASE ***********************
//Girilen bir sayının onlar ve birler basamağındaki rakamlarını yazı ile yazdıran program:
//----------------------------------------------------------
var sayii = prompt("Nolur iki basamaklı bir sayı girin.");
var birler = sayii % 10;

switch (birler) {
  case 1:
    rakamIsmi = "Bir";
    break;
  case 2:
    rakamIsmi = "İki";
    break;
  case 3:
    rakamIsmi = "Üç";
    break;
  case 4:
    rakamIsmi = "Dört";
    break;
  case 5:
    rakamIsmi = "Beş";
    break;
  case 6:
    rakamIsmi = "Altı";
    break;
  case 7:
    rakamIsmi = "Yedi";
    break;
  case 8:
    rakamIsmi = "Sekiz";
    break;
  case 9:
    rakamIsmi = "Dokuz";
    break;
  case 0:
    rakamIsmi = "Sıfır";
    break;
}
console.log(rakamIsmi);

// * =======================================================
// *                     DÖNGÜLER
// * =======================================================

//************************ FOR ****************************


//************************************ */
// ORNEK: Asal sayı tespiti
const number = 10;

let asal = true;
for (let i = 2; i < number; i++) {
  if (number % i == 0) {
    asal = false;
    break;
  }
}
//const asalMi = asal ? "ASAL" : "ASAL DEGIL";
console.log(asal ? "ASAL" : "ASAL DEGIL");

//*************************** */
// TODO ÖRNEK: do- while döngüsü
let not;
do {
  not = prompt("Lütfen do-while için 0-100 arasında bir not giriniz:");
} while (not < 0 || not > 100);
console.log("Giridiğiniz not 0-100 arasındadır");

// TODO ÖRNEK: while döngüsü

// let not2 = prompt("Lütfen while için 0-100 arasında bir not giriniz:");
// while (not2 < 0 || not2 > 100) {
//   console.error("Girilen not 0-100 arasında olmalıdır.");
//   not2 = prompt("0-100 arasında bir not giriniz:");
// }
// console.log("Girdiğiniz not 0-100 arasındadır");

// ÖRNEK: klavyeden end kelimesi girilene kadar not girişi yapan bir programı döngü kullanarak yazınız.

let adi = prompt("başlat yaz enter la");
let i = 1;
while (adi != "end") {
  //true yerine 1 de yazılabilir, bunlar hep true demek.0=false olur
  adi = prompt(i + ".kisinin adını giriniz:");
  i++;
  console.log(adi);
}




