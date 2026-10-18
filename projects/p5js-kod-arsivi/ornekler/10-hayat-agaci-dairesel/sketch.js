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
  createCanvas(800, 800);
  angleMode(DEGREES); // sin/cos/atan2/rotate derece kipinde çalışır.
}
function draw() {
  background(colors.ivory);
  // Merkez motifi özgün kodda kapalıdır; açmak için aşağıdaki satırı etkinleştir.
  push();
  translate(width / 2, height / 2 - 20);
  scale(0.26);
  // hayatAgaci();
  pop();
  var sx = width / 2;
  var sy = height / 2;
  var rad = 240;
  // İsteğe bağlı: zamanla yarıçapı değiştirir; özgün kodda etkin değildi.
  // DEGREES kipi millis()*0.021 ifadesi için de geçerlidir.
  // rad += sin(millis() * 0.021) * 45;
  var numFig = 7;
  push();
  translate(sx, sy);
  rotate(frameCount * 0.04); // Her karede 0.04° ilerleyen bütünsel dönme.
  for (let i = 0; i < numFig; i++) {
    var angle = (360 / numFig) * i; // Çemberi yedi eşit açıya böl.
    push();
    let cx = cos(angle) * rad;
    let cy = sin(angle) * rad;
    let rotVal = atan2(cy, cx); // O noktaya giden yarıçapın yönünü bul.
    translate(cx, cy);
    rotate(rotVal + 90); // Ağacın yerel yukarı yönünü dışarıya çevir.
    scale(0.35);
    hayatAgaci();
    pop();
  }
  pop();
}
// Tek ağacı, çağrıldığı yerin yerel koordinatlarıyla kurar.
// numBranch, dal katmanlarının sayısını belirler.
function hayatAgaci() {
  push();
  // dal() tuval merkezine göre yazıldığı için bu taşıma merkezi geri alır.
  translate(-width * 0.5, -height * 0.5);
  let numBranch = 6;
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
