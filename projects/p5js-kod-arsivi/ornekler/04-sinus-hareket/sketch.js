// TAKatölye p5.js kod arşivi — 18 Ekim 2026
// Atölye etüdü: Alp Tuğan — Algoritmik Sanat ve Anadolu Türk Motifleri.
// Türkçe açıklamalar eklendi; düzenleme notları README.md içinde.
// Bu dosyayı tek başına sketch.js olarak kullanın.

var arkaPlanRengi; // Renk saklamak için tanımlanır; draw içinde kullanılmıyor.
var kirmizi = '#8b0000';
var mavi = '#2fdeff';
function setup() {
  createCanvas(800, 600);
  arkaPlanRengi = '#fff7d8'; // Özgün örnekte atanan fakat çizimde kullanılmayan değer.
  // noLoop(); // Açılırsa animasyon durur ve yalnızca tek kare çizilir.
}
function draw() {
  // Düşük alpha ile her karede beyaz ekler; önceki şekiller yavaşça silinir.
  background(255, 255, 255, 10);
  // Varsayılan RADYANS kipinde çalışır. Aralık -500..500'dür.
  // Tam döngü yaklaşık 2*PI/0.01 = 628 karedir; süre kare hızına bağlıdır.
  var deltaY = sin(frameCount * 0.01) * 500;
  fill(kirmizi);
  // Aynı sinüs hem y konumunu hem çapı değiştirir.
  // Çap -50..450 olur; negatif çap ve ekran dışına çıkma özgün davranıştan korunur.
  circle(width / 2, height / 2 + deltaY, 200 + deltaY * 0.5);
  fill(mavi);
  rectMode(CENTER); // Kare konumu sol üst köşe yerine merkezini belirtir.
  rect(width / 2 + deltaY, height / 2, 100, 100); // Yatay salınım.
}
