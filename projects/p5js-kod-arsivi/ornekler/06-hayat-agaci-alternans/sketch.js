// TAKatölye p5.js kod arşivi — 18 Ekim 2026
// Atölye etüdü: Alp Tuğan — Algoritmik Sanat ve Anadolu Türk Motifleri.
// Türkçe açıklamalar eklendi; düzenleme notları README.md içinde.
// Bu dosyayı tek başına sketch.js olarak kullanın.

// Temsilî Anadolu/Türk motif paleti; tarihsel boya standardı değildir.
const colors = {
  madderRed: '#a8322d', // Kök boya / tuğla kırmızısı.
  indigo: '#1f3a5f', // Çivit mavisi.
  iznikTurquoise: '#2e8b8b', // Turkuaz.
  ottomanGold: '#c9962c', // Hardal / altın sarısı.
  oliveGreen: '#5a6b3c', // Zeytin yeşili.
  mauvePlum: '#6e4c5e', // Erik moru.
  burntOrange: '#b65c2e', // Yanık turuncu.
  ivory: '#ede3d0', // Fildişi zemin; maske rengi de budur.
  walnutBrown: '#5b3a29', // Ceviz kahvesi.
  charcoal: '#2b2420', // Koyu kömür.
};
function setup() {
  createCanvas(1080, 1080);
  angleMode(DEGREES);
  noLoop(); // Bu düzen hareketli değildir.
}
function draw() {
  background(colors.ivory);
  var numFig = 23; // Satır başına denenen figür sayısı; bir kısmı tuval dışında kalır.
  var cx = 0;
  var cy = height;
  push();
  for (let j = 0; j < 8; j++) { // Dış döngü sekiz satır kurar.
    cy = height - 80 * (2 * j + 1) + 105; // Satırlar 160 birim aralıklıdır.
    cx = j % 2 == 0 ? 91 : 0; // Tek/çift satırları şaşırtır.
    for (let i = 0; i < numFig; i++) { // İç döngü satırdaki motifleri kurar.
      push();
      if (i % 2 == 0) {
        translate(cx, cy);
        scale(0.3); // Çift indeks: daha büyük, düz ağaç.
        rotate(0);
      } else {
        translate(cx, cy - 30);
        scale(0.17); // Tek indeks: daha küçük, ters ağaç.
        rotate(180);
      }
      cx = cx + 90; // Sıradaki motifin yatay konumu.
      hayatAgaci();
      pop();
    }
  }
  pop();
  // random() yoktur: görünen çeşitlilik tek/çift indeks kuralından gelir.
}
function keyPressed() {
  if (key === 's') save('hayat-agaci.jpg'); // Küçük s ile JPG çıktısı.
}
// Tek ağacı, çağrıldığı yerin yerel koordinatlarıyla kurar.
// numBranch, dal katmanlarının sayısını belirler.
function hayatAgaci() {
  push();
  // dal() tuval merkezine göre yazıldığı için bu taşıma merkezi geri alır.
  translate(-width * 0.5, -height * 0.5);
  let numBranch = 3;
  for (let i = 0; i < numBranch; i++) {
    push();
    translate(0, 115 * (numBranch - 2) - i * 115); // Dalları 115 birim aralıkla dizer.
    dal();
    pop();
  }
  push();
  translate(0, -115 * 2); // En üst dalın konumu.
  dal(false); // Tepede iki yan yaprağı çizme; ortada tek yaprak olacak.
  push();
  noFill();
  stroke(colors.madderRed);
  strokeWeight(9);
  translate(width / 2, height / 2 - 75);
  rotate(45);
  polygon(20, 20, 4); // Tepe yaprağı.
  pop();
  pop();
  pop();
}

// Dal modülü: kalın kontur + zemin rengi maske + merkez parçası + yapraklar.
function dal(yaprakCiz = true) {
  push();
  noFill();
  stroke(colors.madderRed);
  strokeWeight(40);
  translate(width / 2, height / 2 - 50);
  rotate(45);
  polygon(100, 100, 4); // Kalın döndürülmüş dörtgen dalın ana hatlarını verir.
  pop();

  // Üst kısmı zemin rengiyle kapatır; gerçek saydamlık/alpha maskesi değildir.
  push();
  fill(colors.ivory);
  noStroke();
  translate(width / 2, height / 2 - 120);
  polygon(190, 100, 4);
  pop();

  // Dalın orta önündeki küçük konturlu parça.
  push();
  noFill();
  stroke(colors.madderRed);
  strokeWeight(18);
  translate(width / 2, height / 2);
  rotate(45);
  polygon(30, 30, 4);
  pop();

  if (yaprakCiz === true) {
    // İki yan yaprak aynı biçimdedir; yalnızca yatay konum değişir.
    for (let yon of [-1, 1]) {
      push();
      noFill();
      stroke(colors.madderRed);
      strokeWeight(9);
      translate(width / 2 + yon * 98, height / 2 - 75);
      rotate(45);
      polygon(20, 20, 4);
      pop();
    }
  }
}
// Elips yarıçapları rx ve ry, köşe sayısı npoints ile çokgen üretir.
// Bu yardımcı fonksiyon p5.js'in yerleşik komutu değildir.
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
