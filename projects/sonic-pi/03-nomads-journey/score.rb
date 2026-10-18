# Nomad’s Journey / Nomad’s Journey
# Sonic Pi · 100 BPM
# Bu dosyayı tek bir Sonic Pi tamponunda çalıştırın.
# Run this file in one Sonic Pi buffer.

use_bpm 100

set_volume! 0.65

# Düzenli alçak nabız.
live_loop :universal_pulse do
  use_synth :sine

  4.times do
    play :d2, attack: 0.04, sustain: 0.04,
    release: 0.22, amp: 0.17
    sleep 1
  end
end

# Dört vuruşluk vurmalı döngüsü.
live_loop :universal_percussion do
  with_fx :lpf, cutoff: 76 do
    sample :drum_tom_lo_soft, amp: 0.12
    sleep 1

    sample :drum_tom_mid_soft, amp: 0.11
    sleep 0.5

    sample :drum_tom_hi_soft, amp: 0.065
    sleep 0.5

    sample :drum_tom_lo_soft, amp: 0.10
    sleep 1

    sample :drum_tom_mid_soft, amp: 0.10
    sleep 1
  end
end

# Tekrarlanan bas cümlesi.
live_loop :universal_bass do
  use_synth :sine

  notes = (ring :d2, :d2, :a2, :c3)

  4.times do
    play notes.tick, attack: 0.05,
    sustain: 0.34, release: 0.3,
    amp: 0.27
    sleep 1
  end
end

# Kısa modal pluck cümlesi.
live_loop :universal_ethnic do
  use_synth :pluck

  with_fx :echo, phase: 0.75, decay: 1.4,
  mix: 0.13 do
    with_fx :reverb, room: 0.65, mix: 0.3 do
      with_fx :lpf, cutoff: 88 do

        play :d4, amp: 0.27, release: 0.35
        sleep 0.75

        play :f4, amp: 0.21, release: 0.3
        sleep 0.5

        play :g4, amp: 0.23, release: 0.3
        sleep 0.75

        play :a4, amp: 0.20, release: 0.3
        sleep 1

        play :g4, amp: 0.18, release: 0.3
        sleep 1
      end
    end
  end
end

# Uzun atmosfer katmanı.
live_loop :universal_air do
  use_synth :hollow

  with_fx :reverb, room: 0.85, mix: 0.55 do
    play :d3, attack: 1.5, sustain: 5,
    release: 1.5, amp: 0.12
    sleep 8
  end
end
