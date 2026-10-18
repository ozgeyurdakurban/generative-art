// TAKatölye p5.js kod arşivi — 18 Ekim 2026
// Atölye etüdü: Alp Tuğan — Algoritmik Sanat ve Anadolu Türk Motifleri.
// Türkçe açıklamalar eklendi; düzenleme notları README.md içinde.
// Bu dosyayı tek başına sketch.js olarak kullanın.

// Özgün yorumda 12 daire yazsa da kod 32 daire çizer; sayı korunmuştur.
function setup() {
  createCanvas(1080, 1080);
}
function draw() {
  background(210, 222, 230);
  var xpos = width / 2;
  var ypos = height / 2; // Bütün dairelerin merkezi (540,540).
  for (let i = 0; i < 32; i++) {
    // Çap 1600'den başlar, her adımda 50 azalır; son çap 50'dir.
    // Varsayılan beyaz dolgu korunur; küçük daire büyüklerin merkezini örter.
    // Büyük daireler tuval kenarlarında kırpılır.
    circle(xpos, ypos, 1600 - 50 * i);
  }
}
