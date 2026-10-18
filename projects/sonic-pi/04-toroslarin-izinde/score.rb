# Torosların İzinde / Along the Taurus Mountains
# Sonic Pi · 92 BPM
# Bu dosyayı tek bir Sonic Pi tamponunda çalıştırın.
# Run this file in one Sonic Pi buffer.

use_bpm 92
set_volume! 0.65

# 2+2+2+3 vurgulu vurmalı döngüsü.
live_loop :local_rhythm do
  with_fx :lpf, cutoff: 72 do

    sample :drum_tom_lo_soft, amp: 0.16
    sleep 1

    sample :drum_tom_mid_soft, amp: 0.09
    sleep 1

    sample :drum_tom_lo_soft, amp: 0.13
    sleep 1

    sample :drum_tom_mid_soft, amp: 0.10
    sleep 1.5
  end
end

# D merkezli, geri dönen pluck melodisi.
live_loop :local_strings do
  use_synth :pluck

  with_fx :lpf, cutoff: 82 do
    with_fx :reverb, room: 0.6, mix: 0.28 do

      play :d4, release: 0.27, amp: 0.36
      sleep 0.5

      play :eb4, release: 0.23, amp: 0.22
      sleep 0.5

      play :fs4, release: 0.27, amp: 0.32
      sleep 0.5

      play :d4, release: 0.25, amp: 0.29
      sleep 0.5

      play :g4, release: 0.35, amp: 0.26
      sleep 1

      play :fs4, release: 0.25, amp: 0.22
      sleep 0.5

      play :eb4, release: 0.25, amp: 0.20
      sleep 0.5

      play :d4, release: 0.4, amp: 0.30
      sleep 0.5
    end
  end
end

# Tekrarlanan alçak telli ses figürü.
live_loop :local_ostinato do
  use_synth :pluck

  with_fx :lpf, cutoff: 65 do
    6.times do
      play :d3, amp: 0.14, release: 0.23
      sleep 0.5
    end

    play :a3, amp: 0.13, release: 0.3
    sleep 0.5

    play :d3, amp: 0.14, release: 0.3
    sleep 1
  end
end

# Tonal merkezi tutan uzun ses.
live_loop :local_drone do
  use_synth :hollow

  with_fx :reverb, room: 0.8, mix: 0.5 do
    play :d3, attack: 1.3, sustain: 6,
    release: 1.5, amp: 0.13
    sleep 9
  end
end

# Aksak döngüye eşlik eden alçak sesler.
live_loop :local_bass do
  use_synth :sine

  play :d2, attack: 0.05,
  sustain: 0.5, release: 0.3,
  amp: 0.25
  sleep 2

  play :a2, attack: 0.05,
  sustain: 0.35, release: 0.3,
  amp: 0.17
  sleep 1

  play :d2, attack: 0.05,
  sustain: 0.65, release: 0.3,
  amp: 0.21
  sleep 1.5
end
