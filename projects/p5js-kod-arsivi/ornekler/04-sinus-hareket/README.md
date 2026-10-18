# Geri Dönüşün İzi / The Trace of Return

[Arşive dön / Back to archive](../../README.md) · [Kod / Code](sketch.js) · [Çalıştır / Run](index.html)

## Türkçe

### Hikâye ve bakış

Daire düşeyde, kare yatayda gider gelir. Aynı dalganın iki ayrı bedende görünmesi, ortak hafızanın farklı yaşamlarda sürmesi için bir hareket düşüncesi sunar. Beyazın düşük opaklığı eski konumu bütünüyle silmez; şimdiki biçim, kendisinden önce geçenin izini taşır. Dönüş burada geriye gitmekten çok, önceki hareketle yeniden karşılaşmaktır.

### Neden bu şekiller?

Daire ve kare temel geometri etüdüdür; bu çalışmada geleneksel Anadolu motifleri oldukları öne sürülmez. Aynı sinüsün konuma ve boyuta uygulanması, ortak kural ile farklı görünüş arasındaki ilişkiyi araştırır.

### Kural, hareket ve uygulama

Sinüs radyan kipinde frameCount ile ilerler. İnce alpha arka plan iz bırakır. Özgün genlik nedeniyle daire çapı negatif değerlere inebilir; bu sınır davranışı düzeltilmeden belgelenmiştir.

## English

### Story and perspective

The circle moves vertically while the square moves horizontally. One wave appearing through two bodies offers a movement language for a shared memory persisting across different lives. Translucent white does not erase the previous position completely; the present shape carries a trace of what preceded it. Return becomes an encounter with an earlier motion.

### Why these shapes?

Circle and square are elementary geometric studies; they are not presented here as traditional Anatolian motifs. Applying the same sine value to position and size explores the relation between shared rule and differing appearance.

### Rule, movement and implementation

The sine progresses with frameCount in radians. A low-alpha background leaves trails. The amplitude can produce a negative circle diameter; this boundary behavior is documented rather than silently changed.

## Kullanım / Running

Open index.html in a browser with internet access for the p5.js CDN, or copy sketch.js into the p5.js Web Editor. Her örnek bağımsızdır; birden fazla setup/draw aynı dosyaya birleştirilmemelidir. Each sketch is independent; do not merge multiple setup/draw definitions.

## Kaynak / Source

Atölye etüdü / Workshop study: [Alp Tuğan — Algoritmik Sanat ve Anadolu Türk Motifleri](https://alptugan.github.io/Slidev_Presentations/Workshops/Algoritmik-Sanat-Anadolu-Turk-Motifleri/#/1).
