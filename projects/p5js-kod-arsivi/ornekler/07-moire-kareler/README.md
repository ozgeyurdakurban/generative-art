# İki Düzen Arasındaki Eşik / Between Two Orders

[Arşive dön / Back to archive](../../README.md) · [Kod / Code](sketch.js) · [Çalıştır / Run](index.html)

## Türkçe

### Hikâye ve bakış

Bir kareler bütünü sabit kalırken diğeri onun üzerinde yavaşça döner. Çizgiler karşılaşınca tek tek karelerde bulunmayan bir üçüncü görünüş doğar. Bu etüt, iki hafızanın teması için bir algı alanı açar: hiçbiri bütünüyle yok olmaz, fakat birlikte görüldüklerinde ikisi de başka türlü okunur. Psikedelik dil, yabancı bir simge eklemekten önce bakışın kendi kararsızlığında belirir.

### Neden bu şekiller?

Karelerin üst üste gelmesi, dokumadaki tekrar düşüncesiyle biçimsel bir yakınlık kurar. Kompozisyon, 80 kareden oluşan iki katmanla kurulmuştur.

### Kural, hareket ve uygulama

İki katmanda kenarlar 1600’den 20’ye küçülür. İkinci katman sin(frameCount*0.001)*2 radyanla salınır. Çizgi girişimi ve kırpılma kompozisyonun algısını belirler.

## English

### Story and perspective

One field of squares remains still while another slowly rotates across it. Their meeting produces a third appearance absent from either set alone. The study opens a perceptual space for the contact of two memories: neither disappears, yet both become readable differently together. Psychedelia begins in the instability of seeing before it requires an added symbol.

### Why these shapes?

Overlapping squares connect the moiré effect with the visual repetition of weaving. The composition uses two layers of eighty squares.

### Rule, movement and implementation

In both layers, square edges decrease from 1600 to 20. The second layer oscillates by sin(frameCount*0.001)*2 radians. Line interference and clipping determine the perceived composition.

## Kullanım / Running

Open index.html in a browser with internet access for the p5.js CDN, or copy sketch.js into the p5.js Web Editor. Her örnek bağımsızdır; birden fazla setup/draw aynı dosyaya birleştirilmemelidir. Each sketch is independent; do not merge multiple setup/draw definitions.

## Kaynak / Source

Atölye etüdü / Workshop study: [Alp Tuğan — Algoritmik Sanat ve Anadolu Türk Motifleri](https://alptugan.github.io/Slidev_Presentations/Workshops/Algoritmik-Sanat-Anadolu-Turk-Motifleri/#/1).
