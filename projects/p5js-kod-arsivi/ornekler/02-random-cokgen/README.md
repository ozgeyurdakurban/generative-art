# Karşılaşmanın Kıyısı / The Edge of Encounter

[Arşive dön / Back to archive](../../README.md) · [Kod / Code](sketch.js) · [Çalıştır / Run](index.html)

## Türkçe

### Hikâye ve bakış

Her açılışta dört köşe başka bir uzlaşma arar. Bir kenarın beklenmedik uzaması, biçimin güvenli sınırlarını bozar. Bu etüt, göç hikâyesindeki karşılaşmaların ön çalışması gibi okunabilir: yol her seferinde aynı niyetle başlar, fakat aynı izde kapanmaz. Tesadüf burada hafızanın yerine geçmez; bir sonraki biçimin doğabileceği açıklığı yaratır.

### Neden bu şekiller?

Kapalı, serbest bir çokgen kullanılır; tarihsel bir Anadolu motifi olarak adlandırılmaz. Konturun kalınlığı, tesadüfi sınırı görünür kılar. Rastgele renklerin burada yöresel sembolizmi yoktur.

### Kural, hareket ve uygulama

randX ve randY setup içinde bir kez seçilir; noLoop görüntüyü dondurur. İkinci köşenin düşey konumunda randX kullanımı korunur. Çokgen kesişebilir ve tuvalin dışına taşabilir.

## English

### Story and perspective

At each opening, four vertices seek a different arrangement. An unexpectedly extended edge disturbs the shape’s secure limits. The study can be read as a rehearsal for encounters within the migration narrative: a journey may begin with the same intention without closing along the same trace. Chance does not replace memory; it opens a space from which another form may arise.

### Why these shapes?

The work uses a closed irregular polygon, not a named historical Anatolian motif. Its heavy outline makes the contingent boundary visible. The random colors carry no regional symbolic claim.

### Rule, movement and implementation

randX and randY are sampled once in setup; noLoop freezes the result. The second vertex deliberately retains the use of randX for its vertical position. The polygon may intersect itself or extend beyond the canvas.

## Kullanım / Running

Open index.html in a browser with internet access for the p5.js CDN, or copy sketch.js into the p5.js Web Editor. Her örnek bağımsızdır; birden fazla setup/draw aynı dosyaya birleştirilmemelidir. Each sketch is independent; do not merge multiple setup/draw definitions.

## Kaynak / Source

Atölye etüdü / Workshop study: [Alp Tuğan — Algoritmik Sanat ve Anadolu Türk Motifleri](https://alptugan.github.io/Slidev_Presentations/Workshops/Algoritmik-Sanat-Anadolu-Turk-Motifleri/#/1).
