# Merkezin Katmanları / Layers of a Center

[Arşive dön / Back to archive](../../README.md) · [Kod / Code](sketch.js) · [Çalıştır / Run](index.html)

## Türkçe

### Hikâye ve bakış

Bir merkez, çevresinde büyüyen sınırlarla görünür olur. Dairelerin ardışıklığı bir hedefe varışı değil, merkezin farklı uzaklıklardan yeniden kurulmasını düşündürür. Göç ile kök arasındaki ilişkinin ilk geometrik sorularından biri burada saklıdır: merkez bir yer midir, yoksa hareketlerimizin çevresinde anlaşabildiği bir ilişki mi?

### Neden bu şekiller?

Daire burada bir Anadolu motifi veya kutsal simge olarak tanımlanmaz. Merkez, ölçek ve katman ilişkileri için yalın bir etüttür. Beyaz dolgu, küçük dairelerin büyükleri örtmesini sağlar; yalnızca çizgisel halkalar çizilmez.

### Kural, hareket ve uygulama

Tuval 1080 kare, merkez (540,540). 32 daire 1600’den 50’ye azalan çaplarla çizilir. Kod durağan görünür ama draw her karede yeniden çalışır. Başlıktaki 12 daire sayısı gerçek kodu yansıtmaz.

## English

### Story and perspective

A center becomes visible through boundaries growing around it. The succession of circles suggests not arrival at a target, but the repeated construction of a center from different distances. One of the first geometric questions between migration and rootedness is held here: is a center a place, or a relation around which our movements can agree?

### Why these shapes?

The circle is not identified here as an Anatolian motif or a sacred symbol. It is a simple study of center, scale and layering. White fill allows smaller circles to cover larger ones; these are not merely unfilled rings.

### Rule, movement and implementation

The canvas is 1080 square, centered at (540,540). Thirty-two circles have diameters decreasing from 1600 to 50. The image appears static while draw redraws it each frame. The heading’s twelve-circle instruction does not describe the actual code.

## Kullanım / Running

Open index.html in a browser with internet access for the p5.js CDN, or copy sketch.js into the p5.js Web Editor. Her örnek bağımsızdır; birden fazla setup/draw aynı dosyaya birleştirilmemelidir. Each sketch is independent; do not merge multiple setup/draw definitions.

## Kaynak / Source

Atölye etüdü / Workshop study: [Alp Tuğan — Algoritmik Sanat ve Anadolu Türk Motifleri](https://alptugan.github.io/Slidev_Presentations/Workshops/Algoritmik-Sanat-Anadolu-Turk-Motifleri/#/1).
