// TAKatölye p5.js kod arşivi — 18 Ekim 2026
// Atölye etüdü: Alp Tuğan — Algoritmik Sanat ve Anadolu Türk Motifleri.
// Türkçe açıklamalar eklendi; düzenleme notları README.md içinde.
// Bu dosyayı tek başına sketch.js olarak kullanın.

// Parçaları ayrı kurulan motif, eliBelinde(x,y,s,renk) ile yeniden kullanılabilir.
let zemin = '#efe2c2';
let kirmizi = '#8b0000';
function setup() {
  createCanvas(800, 800);
  noLoop(); // Durağan kompozisyonu bir kez çiz.
}
function draw() {
  background(zemin);
  eliBelinde(width / 2, height / 2, 0.8, kirmizi);
}
function eliBelinde(x, y, s, renk) {
  push();
  translate(x, y); // Motif merkezini yerleştir.
  scale(s); // Yaklaşık 865 birim yüksekliği orantılı küçült.
  noStroke();
  fill(renk);
  // 1. Baş: insan formunun üstünü belirleyen beşgen.
  beginShape();
  vertex(-63, -432);
  vertex(63, -432);
  vertex(130, -313);
  vertex(0, -238);
  vertex(-130, -313);
  endShape(CLOSE);
  rect(-23, -252, 46, 28); // 2. Boyun.
  rect(-183, -224, 366, 35); // 3. Omuz.
  quad(-120, -189, 120, -189, 34, -40, -34, -40); // 4. Daralan gövde.
  kol(); // 5–6. Sol kol ve el.
  push();
  scale(-1, 1); // Dikey eksene göre yatay aynalama: sol kol sağa geçer.
  kol(); // 7–8. Sağ kol ve el, aynı fonksiyondan üretilir.
  pop();
  rect(-34, -40, 68, 45); // 9. Bel.
  quad(-34, 5, 34, 5, 281, 433, -281, 433); // 10. Genişleyen alt gövde.
  // 11–14. Zemin rengindeki üçgenler dolgu üzerinde boşluk görünümü verir.
  // Gerçek saydamlık değildir; zemin değişirse bu renk de değiştirilmelidir.
  fill(zemin);
  for (let i = 0; i < 4; i++) {
    let dy = i * 85; // Her üçgen 85 birim aşağı ötelenir.
    triangle(0, 20 + dy, -84, 167 + dy, 84, 167 + dy);
  }
  pop();
}
// Omuzdan aşağı inip bele yönelen sol kol ve elin birleşik dış sınırı.
function kol() {
  beginShape();
  vertex(-183, -224);
  vertex(-283, -49);
  vertex(-147, 30);
  vertex(-92, -67);
  vertex(-232, -67);
  vertex(-162, -189);
  vertex(-183, -189);
  endShape(CLOSE);
}
