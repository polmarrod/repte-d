def on_forever():
    if input.temperature() > 22:
        basic.show_string("Calor")
    else:
        basic.show_string("Fred")
    if input.light_level() > 220:
        music._play_default_background(music.built_in_playable_melody(Melodies.ENTERTAINER),
            music.PlaybackMode.IN_BACKGROUND)
    elif input.light_level() < 50:
        music._play_default_background(music.built_in_playable_melody(Melodies.BLUES),
            music.PlaybackMode.IN_BACKGROUND)
    else:
        pass
basic.forever(on_forever)
