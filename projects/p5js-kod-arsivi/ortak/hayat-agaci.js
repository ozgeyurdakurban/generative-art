// Kullanım: colors ve polygon tanımlı, açı kipi DEGREES olmalıdır.
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
