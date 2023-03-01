// Aşağıdaki görevleri tamamlayın

/*
  GÖREV 1
  - Input:  Bir dosya yolunu (path) parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon, verilen bir dosya adresideki(path) dosyanın adını vermeli.
  * İpucu:  Dosya adresinin / işaretleri ile bölümlendiğine dikkat et.

  örnek input:  "C:/Users/johnsmith/Music/Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  "Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  ""
  örnek output: ""
*/
/*function dosyaAdiniBul(dosya) {
  // kodlar buraya
let ayrilmisDosyalar = [];
ayrilmisDosyalar = dosya.split("/");
let istenenDosya = ayrilmisDosyalar[ayrilmisDosyalar.length - 1];
return istenenDosya;
}*/


 function dosyaAdiniBul(dosyaYolu) {
  let dosya = [];
  dosya = dosyaYolu.split('/');

  let istenenDosya = dosya[dosya.length-1];

  return istenenDosya;
}

 
  // kodlar buraya


/*
  GÖREV 2
  - Input:  Bir sayı arrayini parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasını dönmeli.

  örnek input:  []
  örnek output: null

 
*/

function ortalamaBul(sayilar) {
  let toplam = 0;
  for(let i = 0; i<sayilar.length; i++){ 
toplam += sayilar[i];
  }
  let ortalama = toplam/sayilar.length;
  console.log(ortalama);
  return (ortalama);
}

let sayilar =[10, 20, 30, 40];
ortalamaBul(sayilar);

// GÖREV 3
// - Input:  Bir sayı arrayini ve ortalama bulmaya yarayacak bir fonksiyonu parametre olarak alacak bir fonksiyon oluştur.
// - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasından büyük ya da eşit elemanlardan oluşan bir array dönmeli.
// * Çağırırken kendi ortalama fonksiyonunla çağırabilirsin, ama parametrenin tanımlama aşamasında soyut bir ifade olduğunu unutma.
// * f(x) = 2x+5 içerisindeki x değeri gibi.
// örnek input:  []
// örnek output: null
// örnek input:  [4]
// örnek output: 4
// örnek input:  [50, -26, 153, 7]
// örnek output: [50, 153]
// örnek input:  [109, 216, 288, 143, 71, 185, -278, 194, 5]
// örnek output: [109, 216, 288, 143, 185, 194] *//

function ortalamadanBuyukleriBul(oneArray, gorevIki) {
  // kodlar buraya
  let buyukDizi = [];
  if(oneArray.length !== 0){
 for(let i = 0; i < oneArray.length; i++){
  if(oneArray[i] >= gorevIki(oneArray)){
    buyukDizi.push(oneArray[i]);
  }
}
  return buyukDizi;
 }
 else if(oneArray.length === 0){
  return null;
 }
}
  // kodlar buraya


/* !!!! Burdan aşağısını değiştirmeyin !!!! */
 function as() {
 console.log("Kodlar sorunsuz çalışıyor!");
   return "sa";
 }
 as();
 export { dosyaAdiniBul, ortalamaBul, ortalamadanBuyukleriBul, as };
