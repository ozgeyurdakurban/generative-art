# Anatolian Pulse / Anatolian Pulse
# Sonic Pi · 108 BPM
# Bu dosyayı tek bir Sonic Pi tamponunda çalıştırın.
# Run this file in one Sonic Pi buffer.

use_bpm 108
set_volume! 0.6

# Düzenli elektronik nabız.
live_loop :electro_pulse do
  use_synth :sine

  4.times do
    play :d2, attack: 0.035,
    sustain: 0.025, release: 0.17,
    amp: 0.23
    sleep 1
  end
end

# Senkoplu bas cümlesi.
live_loop :electro_bass do
  use_synth :sine

  play :d2, attack: 0.04, sustain: 0.3,
  release: 0.2, amp: 0.27
  sleep 0.75

  play :d2, attack: 0.04, sustain: 0.2,
  release: 0.2, amp: 0.19
  sleep 0.75

  play :a2, attack: 0.04, sustain: 0.3,
  release: 0.2, amp: 0.22
  sleep 1

  play :c3, attack: 0.04, sustain: 0.2,
  release: 0.2, amp: 0.18
  sleep 0.5

  play :d2, attack: 0.04, sustain: 0.3,
  release: 0.2, amp: 0.25
  sleep 1
end

# Kısa karşı vuruşlu synth sekansı.
live_loop :electro_sequence do
  use_synth :prophet

  with_fx :lpf, cutoff: 62 do
    8.times do
      sleep 0.25
      play :d3, attack: 0.04,
      sustain: 0.07, release: 0.18,
      amp: 0.09
      sleep 0.25
    end
  end
end

# Hicaz rengini çağrıştıran pluck motifi.
live_loop :electro_ethnic do
  use_synth :pluck

  with_fx :echo, phase: 0.5,
  decay: 1.2, mix: 0.12 do
    with_fx :lpf, cutoff: 86 do

      play :d4, release: 0.3, amp: 0.32
      sleep 0.5

      play :eb4, release: 0.23, amp: 0.22
      sleep 0.5

      play :fs4, release: 0.3, amp: 0.30
      sleep 1

      play :g4, release: 0.3, amp: 0.26
      sleep 0.5

      play :fs4, release: 0.3, amp: 0.22
      sleep 0.5

      play :d4, release: 0.4, amp: 0.30
      sleep 1
    end
  end
end

# Vuruş arasına yerleşen yumuşak tomlar.
live_loop :electro_percussion do
  with_fx :lpf, cutoff: 73 do
    4.times do
      sleep 0.5
      sample :drum_tom_mid_soft, amp: 0.08
      sleep 0.5
    end
  end
end

# Arka planı tutan uzun ses.
live_loop :electro_pad do
  use_synth :hollow

  with_fx :reverb, room: 0.8, mix: 0.45 do
    play :d3, attack: 1.5,
    sustain: 4.5, release: 2,
    amp: 0.12
    sleep 8
  end
end
