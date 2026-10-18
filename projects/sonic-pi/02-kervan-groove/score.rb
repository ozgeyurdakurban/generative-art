# Kervan Groove / Caravan Groove
# Sonic Pi · 110 BPM
# Bu dosyayı tek bir Sonic Pi tamponunda çalıştırın.
# Run this file in one Sonic Pi buffer.

use_bpm 110

set_volume! 0.6

# Dört vuruşlu düzenli elektronik nabız.
live_loop :house_pulse do

  use_synth :sine

  4.times do

    play :c2, attack: 0.05,
    sustain: 0.035, release: 0.18,
    amp: 0.18

    sleep 1
  end
end

bass_roots = (ring :c2, :d2, :e2, :b1)

# Akora göre değişen senkoplu bas.
live_loop :groove_bass do

  root = bass_roots.tick(:bass_harmony)

  use_synth :tri

  with_fx :lpf, cutoff: 58 do

    play root, attack: 0.04,
    sustain: 0.22, release: 0.2,
    amp: 0.23
    sleep 0.75

    play root, attack: 0.04,
    sustain: 0.15, release: 0.16,
    amp: 0.13
    sleep 0.75

    play root + 12, attack: 0.04,
    sustain: 0.18, release: 0.2,
    amp: 0.12
    sleep 1

    play root, attack: 0.04,
    sustain: 0.28, release: 0.2,
    amp: 0.2
    sleep 0.75

    play root + 12, attack: 0.04,
    sustain: 0.12, release: 0.16,
    amp: 0.09
    sleep 0.75
  end
end

chord_sequence = [
chord(:c3, :major7),
chord(:d3, :major),
chord(:e3, :minor7),
chord(:b2, :minor7)
]

# Dört akorun sıralı tekrarı.
live_loop :floating_chords do

  current_chord = chord_sequence.tick(:chord_progression)

  use_synth :prophet

  with_fx :lpf, cutoff: 63 do
    with_fx :reverb, room: 0.72, mix: 0.44 do

      play current_chord, attack: 0.6,
      sustain: 2.6, release: 1,
      amp: 0.12

      sleep 4
    end
  end
end

arp_chords = [
chord(:c4, :major7),
chord(:d4, :major),
chord(:e4, :minor7),
chord(:b3, :minor7)
]

# On altı adımlı pluck arpeji.
live_loop :liquid_arpeggio do

  arp_notes = arp_chords.tick(:arp_harmony)

  use_synth :pluck

  with_fx :lpf, cutoff: 83 do
    with_fx :echo, phase: 0.375,
    decay: 1.3, mix: 0.15 do
      with_fx :reverb, room: 0.58, mix: 0.27 do

        16.times do |i|

          index_pattern = (ring 0, 1, 2, 1,
          3, 2, 1, 2, 0, 2, 3, 1, 2, 3, 1, 0)

          note = arp_notes[index_pattern[i] % arp_notes.length]

          velocity = (ring 0.16, 0.09, 0.12, 0.08,
          0.14, 0.08, 0.11, 0.07,
          0.15, 0.08, 0.12, 0.08,
          0.13, 0.08, 0.1, 0.07)

          play note, release: 0.17,
          amp: velocity[i]

          sleep 0.25
        end
      end
    end
  end
end

# Vuruş aralarına yerleşen tom sesleri.
live_loop :organic_offbeats do

  with_fx :lpf, cutoff: 69 do

    4.times do

      sleep 0.5

      sample :drum_tom_mid_soft,
      amp: 0.085

      sleep 0.5
    end
  end
end

# Alçak seviyeli, filtrelenmiş shaker dokusu.
live_loop :groove_shaker do

  with_fx :lpf, cutoff: 69 do

    8.times do |i|

      volume = i.even? ? 0.022 : 0.045

      sample :drum_cymbal_closed,
      amp: volume,
      rate: 0.65

      sleep 0.5
    end
  end
end

counter_notes = (ring :e4, :g4, :a4, :b4,
:a4, :g4, :e4, :d4)

# Ana arpeje cevap veren kısa melodi.
live_loop :ethnic_countermelody do

  sleep 16 if tick(:counter_intro) == 0

  use_synth :pluck

  with_fx :reverb, room: 0.7, mix: 0.4 do
    with_fx :lpf, cutoff: 77 do

      8.times do

        note = counter_notes.tick(:counter_note)

        play note, release: 0.32,
        amp: 0.16

        sleep 0.5
      end
    end
  end
end

# Karşı vuruşlu kısa akorlar.
live_loop :soft_stabs do

  sleep 8 if tick(:stab_intro) == 0

  use_synth :prophet

  with_fx :lpf, cutoff: 56 do
    with_fx :reverb, room: 0.5, mix: 0.27 do

      sleep 0.5

      play chord(:c4, :major7),
      attack: 0.08, sustain: 0.08,
      release: 0.27, amp: 0.07

      sleep 1.5

      play chord(:d4, :major),
      attack: 0.08, sustain: 0.08,
      release: 0.27, amp: 0.07

      sleep 2
    end
  end
end

# Uzun süreli arka plan sesleri.
live_loop :world_atmosphere do

  note = (ring :c4, :b3, :e4, :d4).tick(:atmosphere)

  use_synth :hollow

  with_fx :lpf, cutoff: 67 do
    with_fx :reverb, room: 0.88, mix: 0.59 do

      play note, attack: 1.7,
      sustain: 5.2, release: 1.1,
      amp: 0.09

      sleep 8
    end
  end
end

# Seyrek, üst bölgede zil tınıları.
live_loop :distant_shimmer do

  use_synth :pretty_bell

  with_fx :lpf, cutoff: 64 do
    with_fx :reverb, room: 0.9, mix: 0.65 do

      play :fs5, release: 2,
      amp: 0.045
      sleep 8

      play :e5, release: 2,
      amp: 0.04
      sleep 8
    end
  end
end
