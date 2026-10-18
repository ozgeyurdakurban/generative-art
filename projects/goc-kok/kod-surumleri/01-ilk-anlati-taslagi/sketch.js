/* GÖÇ / KÖK
 * 900 × 900 tuvalde 90 saniyelik kök–ayrılma–göç–yeniden bağlanma döngüsü.
 * Merkezdeki bereket, eli belinde, koçboynuzu ve gözün birleşiminden oluşur.
 * Göçte bu parçaların aralığı açılır; bütün sağa ilerlerken kurt ağızları eşlik eder.
 * Su yolu bordürleri akışı, noise ile çizilen patikalar araziyi kurar.
 * Hayat ağacı yeniden bağlanmada görünür; çengeller merkez çevresinde birlik kurar.
 * Sinüs ölçeğe ve konuma nefes verir; yumuşak eşikler evreleri birbirine bağlar.
 * Kırmızı merkezi figürü, sarı göz ve su yolunu, yeşil ağacı ve çevre bağlarını vurgular.
 * SPACE: durdur/devam | R: başa dön | S: PNG kaydet
 */
const PALET = {
  zemin: '#efe2c2', kirmizi: '#8b0000', sari: '#c9962c',
  yesil: '#5a6b3c', koyu: '#302b25'
};
const DONGU = 90000; // Bir anlatı döngüsü: 90 saniye.
let zaman = 0;
let duraklat = false;

function setup() {
  createCanvas(900, 900);
  pixelDensity(1);
  angleMode(RADIANS); // Bu dosyadaki tüm açı hesapları radyandır.
  strokeJoin(MITER);
  strokeCap(SQUARE);
  noiseSeed(24); // Aynı patika her döngüde aynı hafızayı taşır.
  textFont('Georgia');
}

function draw() {
  if (!duraklat) zaman += min(deltaTime, 100); // Sekme dönüşünde ani sıçramayı sınırla.
  const t = (zaman % DONGU) / DONGU;
  const tur = floor(zaman / DONGU);
  background(PALET.zemin);

  // 0–.20 KÖK, .20–.38 AYRILMA, .38–.62 GÖÇ,
  // .62–.84 YENİDEN BAĞLANMA, .84–1 YENİ KÖK.
  const ayrilma = gecis(t, .20, .38);
  const donus = gecis(t, .62, .84);
  const goc = ayrilma * (1 - donus); // Göçün görsel ağırlığı, 0..1.
  const kok = 1 - goc;

  baslik(t, tur);
  push();
  translate(0, 45); // Sanat alanını üst yazıdan uzaklaştır.

  // Eski yerleşimde merkezdeki bereket ve çevresindeki çengeller bir bütündür.
  // Göçte bu bağların görünürlüğü azalır; izleri tamamen silinmez.
  baglar(kok);
  suYolu(goc, zaman);
  patika(goc);

  // Yolcu insan siluetiyle değil, bir bereket motifiyle temsil edilir.
  // Eski merkezin x=450 konumundan sağa yürür, sonra yeni köke bağlanır.
  // Döngü kapanırken yeniden aynı merkezde olduğundan keskin konum sıçraması olmaz.
  const ilerleme = gecis(t, .24, .62);
  const x = lerp(450, 690, ilerleme) * (1 - donus) + 450 * donus;
  const y = 390 + sin(ilerleme * PI) * 32 * (1 - donus);
  const nefes = 1 + sin(zaman * .0015) * .015;
  push();
  translate(x, y);
  scale(lerp(1, .72, goc) * nefes);
  bereket(goc, donus);
  pop();

  // Koruyucu kurt ağzı motifleri yolcunun çevresinde çift halinde yürür.
  // Konumları değişir; karşılıklı çene geometrisi sabit kalır.
  for (let yon of [-1, 1]) {
    push();
    translate(x + yon * lerp(185, 105, goc), y + 100 + 18 * goc);
    scale(.65);
    boya(PALET.koyu, 55 + goc * 180);
    kurtAgzi();
    pop();
  }

  // Yeni kökte ağaç belirir. Sonraki döngüde önceki kökün silik izi kalır.
  // Son 8 saniyede yeni ağaç yumuşakça hafıza düzeyine iner: döngü kesilmez.
  const agacGucu = max(donus * (1 - gecis(t, .91, 1)), tur > 0 ? .15 : 0);
  push();
  translate(450, 260);
  hayatAgaci(agacGucu);
  pop();

  // Çengeller birlikte yaşam bağını taşır: yeni kökte daha geniş bir yerleşim.
  for (let i = 0; i < 6; i++) {
    const a = TWO_PI * i / 6 - HALF_PI;
    const r = lerp(225, 285, goc);
    push();
    translate(450 + cos(a) * r, 390 + sin(a) * r * .80);
    rotate(a + HALF_PI);
    boya(i % 2 ? PALET.yesil : PALET.sari, 30 + kok * 180);
    cengel();
    pop();
  }
  pop();
  altyazi(t);
}

// Yumuşak eşik: bir olayın aniden açılıp kapanmasını önler.
function gecis(t, bas, son) {
  const k = constrain((t - bas) / (son - bas), 0, 1);
  return k * k * (3 - 2 * k);
}
function boya(hex, alpha = 255) {
  const c = color(hex);
  c.setAlpha(alpha);
  stroke(c);
  noFill();
}

function bereket(acilma, yeniden) {
  // Bereket: eli belinde + koçboynuzu ilişkisi ve merkezde koruyucu göz.
  // İki figürün arasındaki açıklık, göçün ilerleyişiyle 18 birimden 63 birime büyür.
  // Göçte iki bileşen uzaklaşır ama görünürlüklerini ve biçimlerini korur.
  const ara = 18 + acilma * 45;
  push();
  translate(0, -ara);
  scale(.17);
  eliBelinde();
  pop();
  push();
  translate(0, ara + 28);
  boya(PALET.kirmizi);
  strokeWeight(7);
  kocboynuzu();
  pop();
  // Ortadaki iç içe eşkenar dörtgenler: göz / korunma.
  boya(PALET.sari, 240);
  strokeWeight(3);
  eskenar(0, 0, 13 + yeniden * 3);
  eskenar(0, 0, 5);
}

function eliBelinde() {
  // Baş, gövde, kol ve etek ayrı geometrilerden kurulur.
  noStroke();
  fill(PALET.kirmizi);
  beginShape();
  vertex(-63,-432); vertex(63,-432); vertex(130,-313);
  vertex(0,-238); vertex(-130,-313); endShape(CLOSE);
  rect(-23,-252,46,28);
  rect(-183,-224,366,35);
  quad(-120,-189,120,-189,34,-40,-34,-40);
  kol();
  push(); scale(-1,1); kol(); pop(); // Dikey eksende aynalama.
  rect(-34,-40,68,45);
  quad(-34,5,34,5,281,433,-281,433);
  fill(PALET.zemin); // Etek boşlukları zemin rengiyle açılır.
  for (let i=0;i<4;i++) {
    const d=i*85;
    triangle(0,20+d,-84,167+d,84,167+d);
  }
}
function kol() {
  beginShape();
  vertex(-183,-224); vertex(-283,-49); vertex(-147,30);
  vertex(-92,-67); vertex(-232,-67); vertex(-162,-189);
  vertex(-183,-189); endShape(CLOSE);
}
function kocboynuzu() {
  // İki karşılıklı içe kıvrılan köşeli kanca; aynalanmış iki yarım.
  for (let yon of [-1,1]) {
    push(); scale(yon,1);
    beginShape();
    vertex(0,0); vertex(48,0); vertex(68,-27);
    vertex(48,-48); vertex(24,-48); vertex(24,-25); vertex(39,-25);
    endShape(); pop();
  }
}
function eskenar(x,y,r) {
  beginShape();
  vertex(x,y-r); vertex(x+r,y); vertex(x,y+r); vertex(x-r,y);
  endShape(CLOSE);
}
function cengel() {
  // Z/S biçimli kancanın uçları merkez çevresinde 180° dönme ilişkisi kurar.
  strokeWeight(5);
  beginShape();
  vertex(-22,-21); vertex(-9,-31); vertex(16,-10);
  vertex(-16,10); vertex(9,31); vertex(22,21);
  endShape();
}
function kurtAgzi() {
  // Ortak yatay eksende birbirine bakan iki üçgen çene.
  strokeWeight(5);
  for (let yon of [-1,1]) {
    push(); scale(yon,1);
    beginShape(); vertex(0,-20); vertex(32,0); vertex(0,20); endShape();
    line(32,0,51,0); pop();
  }
}
function hayatAgaci(alpha) {
  // Dikey eksen + aynalanan dallar + katmanlı tekrar.
  if(alpha<=0)return;
  boya(PALET.yesil, alpha*200);
  strokeWeight(4);
  line(0, -105, 0, 300);
  for(let i=0;i<5;i++) {
    const yy=240-i*67;
    const uzunluk=95-i*12;
    for(let yon of [-1,1]) {
      beginShape(); vertex(0,yy); vertex(yon*uzunluk,yy-45);
      vertex(yon*uzunluk,yy-68); endShape();
      eskenar(yon*uzunluk,yy-77,9);
    }
  }
  eskenar(0,-118,12);
}
function suYolu(goc, ms) {
  // Su yolu bir çerçeve süsünden anlatının yürüyen sürekliliğine dönüşür.
  // Zikzak birimi aynı kalır, yalnızca yatay fazı ve görünürlüğü değişir.
  boya(PALET.sari,100+goc*95);
  strokeWeight(2.5);
  const kayma = (ms*.006*goc)%40;
  for(let yy of [92,686]) {
    push();
    drawingContext.save();
    drawingContext.beginPath(); drawingContext.rect(82,yy-20,736,40);
    drawingContext.clip(); // Bordürü sınırları içinde tut.
    beginShape();
    for(let i=-1;i<40;i++) vertex(82+i*20-kayma, yy+(i%2===0?-9:9));
    endShape();
    drawingContext.restore();
    pop();
  }
}
function patika(goc) {
  // noise örnekleri dört topoğrafik hattın yüksekliğini belirler.
  for(let j=0;j<4;j++) {
    boya(j%2?PALET.yesil:PALET.koyu,goc*65);
    strokeWeight(1.2);
    beginShape();
    for(let x=95;x<=805;x+=14) {
      const y=230+j*103+(noise(x*.005,j*2)-.5)*120;
      vertex(x,y);
    }
    endShape();
  }
  // Geçmişin izi: merkez ile yolcunun yeni konumu arasında silik bir yol.
  boya(PALET.kirmizi, goc*95);
  beginShape();
  for(let x=175;x<740;x+=12) vertex(x,390+sin(x*.012)*18);
  endShape();
}
function baglar(kok) {
  boya(PALET.koyu,15+kok*35);
  strokeWeight(1);
  for(let i=0;i<6;i++) {
    const a=TWO_PI*i/6-HALF_PI;
    line(450,390,450+cos(a)*225,390+sin(a)*180);
  }
}
function baslik(t,tur) {
  noStroke(); fill(PALET.koyu); textAlign(CENTER,CENTER);
  textSize(23); text('GÖÇ / KÖK',450,40);
  textSize(12); text('Hafızanın dokusu · Toprağın ritmi',450,66);
}
function altyazi(t) {
  let ad, metin;
  if(t<.20){ad='KÖK';metin='Birlikte yaşamın dokusu: bereket ve bağ.';}
  else if(t<.38){ad='AYRILMA';metin='Bir parça ayrılır; taşıdığı anlamlar onunla yürür.';}
  else if(t<.62){ad='GÖÇ';metin='Su yolu sürer. Korunma ve hafıza yolcuya eşlik eder.';}
  else if(t<.84){ad='YENİDEN BAĞLANMA';metin='Taşınan anlamlar, yeni ilişkiler kurar.';}
  else{ad='YENİ KÖK';metin='Hayat sürer; her kök yeni bir göçün hafızasıdır.';}
  noStroke(); fill(PALET.koyu); textAlign(CENTER,CENTER);
  textSize(17); text(ad,450,813);
  textSize(13); text(metin,450,840);
  textSize(11);text('BOŞLUK: durdur / devam    R: başa dön    S: kaydet',450,873);
}
function keyPressed() {
  if(key===' '){duraklat=!duraklat;return false;}
  if(key==='r'||key==='R')zaman=0;
  if(key==='s'||key==='S')saveCanvas('goc-kok-taslak','png');
}
