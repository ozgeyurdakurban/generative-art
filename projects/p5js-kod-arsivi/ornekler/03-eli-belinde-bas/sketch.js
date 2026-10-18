// TAKatölye p5.js kod arşivi — 18 Ekim 2026
// Atölye etüdü: Alp Tuğan — Algoritmik Sanat ve Anadolu Türk Motifleri.
// Türkçe açıklamalar eklendi; düzenleme notları README.md içinde.
// Bu dosyayı tek başına sketch.js olarak kullanın.

function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(220);
  push(); // Bu parçanın taşımasını diğer çizimlerden ayırır.
  translate(200, 400); // Referans noktasını tuvalin alt ortasına taşır.
  // Negatif yerel y değerleri başı bu referansın yukarısına yerleştirir.
  // Üst iki köşe -32 pikselde kaldığı için başın üstü tuval dışında kesilir.
  beginShape();
  vertex(-63, -432);
  vertex(63, -432);
  vertex(130, -313);
  vertex(0, -238);
  vertex(-130, -313);
  endShape(CLOSE);
  pop();
}
