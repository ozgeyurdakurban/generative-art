// Elips yarıçapları rx ve ry, köşe sayısı npoints ile çokgen üretir.
// Köşeleri elips çevresinde eşit açılarla yerleştiren çokgen yardımcısı.
// Açı kipinin DEGREES olması gerekir; cos/sin bu kipe göre hesap yapar.
function polygon(rx, ry, npoints) {
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
