// TAKatölye p5.js kod arşivi — 18 Ekim 2026
// Atölye etüdü: Alp Tuğan — Algoritmik Sanat ve Anadolu Türk Motifleri.
// Türkçe açıklamalar eklendi; düzenleme notları README.md içinde.
// Bu dosyayı tek başına sketch.js olarak kullanın.

var randX;
var randY;
function setup() {
  createCanvas(400, 400);
  // Konumlar başlangıçta yalnızca bir kez seçilir.
  randX = random(-100, 300);
  randY = random(-200, 400);
  noLoop(); // Yeniden çizim yapılmadıkça rastgele seçimler sabit kalır.
}
function draw() {
  background(220);
  // Her RGB kanalı ayrı seçilir; 20 piksel kalın kontur oluşur.
  stroke(random(0, 255), random(0, 255), random(0, 255));
  strokeWeight(20);
  beginShape();
  vertex(100 + randX, 200);
  vertex(200, 300 + randX); // Burada randY değil randX kullanılması özgün koddan korunmuştur.
  vertex(100, 300);
  vertex(randX, randY); // Son köşe iki rastlantısal değere bağlıdır.
  endShape(CLOSE);
  // Dolgu ayrıca ayarlanmadığı için p5.js'in varsayılan beyaz dolgusu kullanılır.
  // Negatif/dış koordinatlar nedeniyle biçim tuval kenarında kesilebilir.
}
