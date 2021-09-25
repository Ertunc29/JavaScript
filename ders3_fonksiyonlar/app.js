/*==================================
             FONKSIYONLAR
=================================*/

//! 1.yontem:function declaration
//DECLARATION yontemi ile fonksiyonun tanimlanmasi cagrilmasindan
//once veya sonra yazilabilir






//fonksiyonun tanimlanmasi sonra
function yazdirAd(){
    console.log("Hakan");
}
//fonksiyonun cagrilmasi 
yazdirAd();//hakan 
//ornek : klavyeden girilen sayinin tek mi cift mi oldgunu 
// gosteren bir fonk yaziniz

const sayiniz=prompt("sayi giriniz");

console.log(tekCift(sayiniz));


function tekCift(sayimiz) {


 return sayimiz%2==0?`${sayimiz}cifttir`:`${sayimiz}tektir`
    
}

//!2.YONTEM:FUNCTION EXPRESSION (bu yontem daha yaygin)

const tekCift1=function(sayi) {
return sayi%2==0?"CIFT":"TEK";
}
console.log(tekCift1(5));


//ornek2: verilen 3 sayidan en buyuk sayiyi bulma

let buyukBul=function(a,b,c) {
    let enBuyuk;

    if(a>b&& a>c) {enBuyuk=a;
}else if(b>c&& b>a){
    enBuyuk=b;
}else if(c>a&& c>b){
    enBuyuk=c;
} return enBuyuk;
}
console.log(buyukBul(5,8,9));

//! 3.YONTEM:FUNCTION ARROW (ok)

const ciftMi=(num)=>(num%2==0?`${num}=Cift`:`${num}=Tek`);

console.log("Sayi"+" "+ ciftMi(7));

// ornek2

const taban=prompt("taban gir");
const us=prompt("us giriniz");

const usAl=(taban,us)=>taban**us;

console.log(usAl(taban,us));
