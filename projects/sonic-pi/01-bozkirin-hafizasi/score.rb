# Bozkırın Hafızası / Memory of the Steppe
# Sonic Pi · 76 BPM
# Bu dosyayı tek bir Sonic Pi tamponunda çalıştırın.
# Run this file in one Sonic Pi buffer.

use_bpm 76

set_volume! 0.62

# Manzaranın uzun, alçak sesli zemini.
live_loop :steppe_drone do

  use_synth :hollow

  with_fx :lpf, cutoff: 65 do
    with_fx :reverb, room: 0.9, mix: 0.65 do

      play :a2, attack: 2.5, sustain: 12,
      release: 3, amp: 0.19

      play :e3, attack: 3.5, sustain: 10,
      release: 4, amp: 0.075

      sleep 18
    end
  end
end

phrase_a = [
[:a3, 0.75], [:bb3, 0.5],
[:cs4, 0.75], [:d4, 1],
[:cs4, 0.5], [:bb3, 0.5],
[:a3, 0.5], [:a3, 1],
[:e4, 0.75], [:f4, 0.5],
[:e4, 0.75], [:d4, 1],
[:cs4, 0.5], [:bb3, 0.5],
[:a3, 0.5], [:a3, 1]
]

phrase_b = [
[:e4, 1], [:g4, 0.5],
[:f4, 0.5], [:e4, 1],
[:d4, 0.75], [:cs4, 0.75],
[:bb3, 0.5], [:a3, 0.5],
[:d4, 0.5], [:e4, 0.5],
[:f4, 0.75], [:e4, 0.75],
[:cs4, 0.5], [:bb3, 0.5],
[:a3, 1], [:a3, 1]
]

# İki melodik cümlenin dönüşümlü tekrarı.
live_loop :steppe_strings do

  use_synth :pluck

  phrase = (ring phrase_a, phrase_b).tick(:folk_phrase)

  with_fx :lpf, cutoff: 78 do
    with_fx :reverb, room: 0.8, mix: 0.5 do
      with_fx :echo, phase: 0.75,
      decay: 1.5, mix: 0.12 do

        phrase.each do |event|
          note = event[0]
          duration = event[1]

          play note, release: duration * 0.8,
          amp: rrand(0.19, 0.29)

          sleep duration
        end
      end
    end
  end
end

arpeggio_a = [:e4, :cs4, :a3, :d4, :bb3, :a3]
arpeggio_b = [:g4, :e4, :d4, :cs4, :bb3, :a3]
arpeggio_c = [:f4, :d4, :a3, :e4, :cs4, :a3]

# Eşit olmayan aralıklarla inen arpejler.
live_loop :wandering_arpeggio do

  arp = (ring arpeggio_a,
  arpeggio_b, arpeggio_c).tick(:folk_arp)

  use_synth :pluck

  with_fx :lpf, cutoff: 70 do
    with_fx :reverb, room: 0.85, mix: 0.48 do

      arp.each_with_index do |note, i|

        play note, release: 0.5,
        amp: 0.12

        if i.even?
          sleep 0.75
        else
          sleep 0.5
        end
      end

      sleep 0.75
    end
  end
end

# Uzaktan cevap veren nefesli tını.
live_loop :mountain_wind do

  sleep 9 if tick(:wind_intro) == 0

  use_synth :hollow

  with_fx :reverb, room: 0.95, mix: 0.7 do
    with_fx :lpf, cutoff: 72 do

      play :g4, attack: 0.65,
      sustain: 1.1, release: 1.2,
      amp: 0.12
      sleep 2.25

      play :f4, attack: 0.6,
      sustain: 0.8, release: 1,
      amp: 0.11
      sleep 1.5

      play :e4, attack: 0.7,
      sustain: 1.2, release: 1.3,
      amp: 0.13
      sleep 2.25

      play :d4, attack: 0.6,
      sustain: 1, release: 1.3,
      amp: 0.09
      sleep 3
    end
  end
end

# 2+2+2+3 vurgusunu taşıyan yumuşak vurmalılar.
live_loop :nomadic_percussion do

  sleep 9 if tick(:drum_intro) == 0

  with_fx :lpf, cutoff: 65 do
    with_fx :reverb, room: 0.5, mix: 0.2 do

      sample :drum_tom_lo_soft, amp: 0.12
      sleep 1

      sample :drum_tom_mid_soft, amp: 0.065
      sleep 1

      sample :drum_tom_lo_soft, amp: 0.10
      sleep 1

      sample :drum_tom_mid_soft, amp: 0.08
      sleep 1.5
    end
  end
end

# Melodinin altında hareket eden alçak sesler.
live_loop :low_string_motion do

  use_synth :tri

  with_fx :lpf, cutoff: 60 do

    play :a2, attack: 0.12,
    sustain: 1.5, release: 0.9,
    amp: 0.13
    sleep 3

    play :e3, attack: 0.12,
    sustain: 0.6, release: 0.8,
    amp: 0.09
    sleep 1.5

    play :a2, attack: 0.12,
    sustain: 1.3, release: 0.8,
    amp: 0.13
    sleep 2

    play :g2, attack: 0.12,
    sustain: 0.8, release: 0.9,
    amp: 0.09
    sleep 2.5
  end
end

# Uzun aralıklarla değişen üst sesler.
live_loop :steppe_harmonics do

  tone = (ring :a4, :e4, :d4, :g4).tick(:harmonic)

  use_synth :hollow

  with_fx :reverb, room: 0.95, mix: 0.7 do
    with_fx :lpf, cutoff: 64 do

      play tone, attack: 2.5,
      sustain: 10, release: 4,
      amp: 0.065

      sleep 18
    end
  end
end
