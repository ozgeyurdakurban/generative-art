// TAKatölye p5.js kod arşivi — 18 Ekim 2026
// Atölye etüdü: Alp Tuğan — Algoritmik Sanat ve Anadolu Türk Motifleri.
// Türkçe açıklamalar eklendi; düzenleme notları README.md içinde.
// Bu dosyayı tek başına sketch.js olarak kullanın.

// Özgün başlıkta 12 daire isteniyordu; çalışan kod 80 kareli iki katmandır.
// İki katman, dönme sırasında optik girişim örüntüleri oluşturur.
function setup() {
  createCanvas(1080, 1080);
  rectMode(CENTER);
}
function draw() {
  background(210, 222, 230);
  noFill();
  strokeWeight(5);
  var xpos = width / 2;
  var ypos = height / 2;
  // Sabit katman: her adımda kenar uzunluğu 20 azalır; 1600..20.
  // Büyük kareler tuvalin dışına taşar; kırpılmaları beklenir.
  for (let i = 0; i < 80; i++) {
    let sz = 1600 - 20 * i;
    rect(xpos, ypos, sz, sz);
  }
  // İkinci katmanın açısı -2..2 RADYAN arasında yumuşak salınır.
  let xMov = sin(frameCount * 0.001) * 2;
  push();
  translate(xpos, ypos); // Önce merkeze taşı; dönme bu merkez çevresinde olur.
  rotate(xMov);
  for (let i = 0; i < 80; i++) {
    let sz = 1600 - 20 * i;
    rect(0, 0, sz, sz);
  }
  pop();
  // Üst üste gelen çizgiler moiré benzeri girişim örüntüleri oluşturur.
}
