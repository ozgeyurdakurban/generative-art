// Tuval kaydı: arayüz öğeleri captureStream içine girmez.
// Dosya yerelde oluşturulur; herhangi bir servise yüklenmez.
let videoRecorder = null, videoStream = null, videoTimer = null, videoURL = null;
let videoParcalari = [], videoBaslangic = 0, oncekiDuraklat = false;
async function videoyuIndir() {
  const buton = document.getElementById('video-baslat');
  const durum = document.getElementById('video-durum');
  const bitir = document.getElementById('video-bitir');
  const link = document.getElementById('video-link');
  const canvas = document.querySelector('canvas');
  if (!canvas) { durum.textContent = 'Görsel henüz yüklenmedi.'; return; }
  if (!canvas.captureStream || !window.MediaRecorder) { durum.textContent = 'Bu tarayıcı video kaydını desteklemiyor. Chrome veya Edge ile açın.'; return; }
  const tip = ['video/webm;codecs=vp9','video/webm;codecs=vp8','video/webm','video/mp4'].find(t => MediaRecorder.isTypeSupported(t));
  if (!tip) { durum.textContent = 'Desteklenen video biçimi bulunamadı.'; return; }
  buton.disabled = true; link.hidden = true; bitir.hidden = false;
  videoParcalari = [];
  if(videoURL) { URL.revokeObjectURL(videoURL); videoURL = null; }
  // Kayıt başlarken döngüyü sıfırla ve duraklatmayı kaldır.
  oncekiDuraklat = duraklat;
  zaman = 0; duraklat = false;
  try {
    videoStream = canvas.captureStream(30); // 900x900 piksel, hedef 30 fps.
    videoRecorder = new MediaRecorder(videoStream, {mimeType:tip,videoBitsPerSecond:8000000});
    videoRecorder.ondataavailable = e => { if(e.data.size) videoParcalari.push(e.data); };
    videoRecorder.onerror = e => { durum.textContent = 'Kayıt hatası: '+(e.error?.message || 'Bilinmeyen hata'); kaydiBitir(); };
    videoRecorder.onstop = () => {
      clearInterval(videoTimer);
      videoStream.getTracks().forEach(t => t.stop());
      duraklat = oncekiDuraklat;
      buton.disabled = false; bitir.hidden = true;
      if(!videoParcalari.length) { durum.textContent = 'Video oluşturulamadı.'; return; }
      const gercekTip = videoRecorder.mimeType || tip;
      const blob = new Blob(videoParcalari, {type:gercekTip});
      videoURL = URL.createObjectURL(blob);
      link.href = videoURL;
      link.download = 'goc-kok-psikedelik.'+(gercekTip.includes('mp4')?'mp4':'webm');
      link.hidden = false;
      durum.textContent = 'Video hazır.';
      link.click(); // İndirme engellenirse görünür bağlantıdan elle kaydedilebilir.
      videoParcalari = [];
    };
    videoRecorder.start(1000);
    videoBaslangic = performance.now();
    videoTimer = setInterval(() => {
      const gecen = (performance.now()-videoBaslangic)/1000;
      durum.textContent = 'Kaydediliyor: '+Math.min(90, Math.floor(gecen))+' / 90 sn — sekmeyi açık tutun';
      if(gecen >= 90) kaydiBitir();
    },250);
  } catch(e) {
    clearInterval(videoTimer);
    videoStream?.getTracks().forEach(t=>t.stop());
    duraklat = oncekiDuraklat;
    buton.disabled = false; bitir.hidden = true;
    durum.textContent = 'Kayıt başlatılamadı: '+e.message;
  }
}
function kaydiBitir() {
  if(videoRecorder && videoRecorder.state !== 'inactive') videoRecorder.stop();
}
// Kayıt sırasında sekme arka plana alınırsa tarayıcı kare hızını azaltabilir.
document.addEventListener('visibilitychange',()=>{
  if(document.hidden && videoRecorder?.state === 'recording') document.getElementById('video-durum').textContent='Kayıt sürüyor; düzgün hareket için bu sekmeye dönün.';
});
