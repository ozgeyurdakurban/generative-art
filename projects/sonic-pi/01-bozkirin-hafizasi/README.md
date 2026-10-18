# Bozkırın Hafızası / Memory of the Steppe

[Sonic Pi eserleri / Music index](../README.md) · [Kod / Code](score.rb)

## Türkçe

### Hikâye

Bir yolculuğun en çok geride kalan seslerini düşünüyorum: uzak bir uğultu, aralıklı bir adım, bir süre duyulup sonra kaybolan kısa bir cümle. Bozkırın Hafızası’nda sesleri bu mesafenin içine yerleştirdim. Uzun katmanlar manzarayı tutarken telli tınılar aynı yerde durmuyor; yükselip geri dönen cümleler, hatırlamanın kesintili hareketini taşıyor. GÖÇ / KÖK’ün Reel kaydında bu parçayı kullandım. Görüntünün yoğun dönüşümlerinin yanında daha ağır yürüyen sesin kalmasını istedim.

### Ses ve yapı

76 BPM. A merkezli, Hicaz rengini çağrıştıran eşit aralıklı notalar kullanılır; belirli bir makam icrasının birebir aktarımı değildir. hollow katmanları uzun zeminler, pluck cümleleri ve arpejler telli bir doku kurar. low-pass filtreler tizleri yumuşatır; reverb ve echo mesafe hissi verir. Vurmalı döngüde 1+1+1+1.5 vuruşluk beklemeler, sekizlik alt bölümlerde 2+2+2+3 vurgusuna karşılık gelir. Her melodik döngünün aynı uzunlukta olduğu varsayılmamalıdır.

### Çalıştırma

Sonic Pi’da boş bir tampon açın, score.rb içeriğini yapıştırın ve Run düğmesine basın. Başka bir parçaya geçerken önce Stop kullanın; aksi halde önceki live_loop katmanları çalmaya devam edebilir. Sesler Sonic Pi’ın yerleşik synth, sample ve efektlerinden oluşur. Ses kaydı almak için Rec → Run → Stop → yankıların bitmesini bekle → Rec sırasını izleyin ve WAV olarak kaydedin.

## English

### Story

I think about the sounds a journey leaves behind: a distant hum, an intermittent footstep, a short phrase heard for a moment before it disappears. In Memory of the Steppe, I placed sounds within that distance. Sustained layers hold the landscape while plucked phrases rise and return, carrying the interrupted motion of remembering. This is the soundtrack used in the GÖÇ / KÖK Reel. Beside the image’s dense transformations, I wanted a slower musical pace to remain.

### Sound and structure

76 BPM. Equal-tempered notes around A suggest a Hicaz-like color without reproducing a particular makam performance. Hollow synth layers provide sustained ground, while plucked phrases and arpeggios suggest strings. Low-pass filters soften the high end; reverb and echo create distance. Percussion sleeps of 1+1+1+1.5 beats correspond to a 2+2+2+3 grouping of eighth-note subdivisions. The melodic loops should not all be assumed to have identical lengths.

### Running

Paste score.rb into an empty Sonic Pi buffer and press Run. Stop the previous piece before switching: its live_loop layers may otherwise continue playing. The piece uses Sonic Pi’s built-in synths, samples and effects. To record: Rec → Run → Stop → allow effects to decay → Rec, then save as WAV.

## Dosya / File

The notes, timing and synthesis settings are preserved. Only comments and blank-line layout were edited. Notalar, zamanlama ve ses ayarları korunmuştur; yalnızca yorumlar ve boş satır düzeni değişmiştir.
