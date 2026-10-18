// TAKatölye p5.js kod arşivi — 18 Ekim 2026
// Atölye etüdü: Alp Tuğan — Algoritmik Sanat ve Anadolu Türk Motifleri.
// Türkçe açıklamalar eklendi; düzenleme notları README.md içinde.
// Bu dosyayı tek başına sketch.js olarak kullanın.

function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(220);
  translate(100, 100); // Yerel başlangıcı (100,100) noktasına taşır.
  fill(255, 20, 30); // Kırmızı dolgu.
  polygon(100, 70, 5); // Yatay/düşey yarıçapı farklı, beş köşeli biçim.
}
// İlk örnekte açı kipi polygon çağrısının içinde ayarlanıyordu.
// Aynı davranışı korumak için burada da çağrı içinde ayarlanır.
// Elips yarıçapları rx ve ry, köşe sayısı npoints ile çokgen üretir.
// Köşeleri elips çevresinde eşit açılarla yerleştiren çokgen yardımcısı.
// Açı kipinin DEGREES olması gerekir; cos/sin bu kipe göre hesap yapar.
function polygon(rx, ry, npoints) {
  angleMode(DEGREES); // Global açı kipini değiştirir; push/pop bunu geri almaz.
  let angle = 360 / npoints; // Ardışık köşeler arasındaki açı.
  let offset = npoints === 4 ? angle / 2 : 0; // Dörtgende yönü 45° düzeltir.
  push();
  beginShape();
  for (let a = 0; a < 360; a += angle) {
    // 90° başlangıç ofseti, köşelerin düşey yönünü belirler.
    let sx = cos(90 + a + offset) * rx;
    let sy = sin(90 + a + offset) * ry;
    vertex(sx, sy);
  }
  endShape(CLOSE); // Son köşeyi ilkine bağlar.
  pop();
}
