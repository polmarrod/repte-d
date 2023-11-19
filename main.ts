basic.forever(function on_forever() {
    if (input.temperature() > 22) {
        basic.showString("Calor")
    } else {
        basic.showString("Fred")
    }
    
    if (input.lightLevel() > 220) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.InBackground)
    } else if (input.lightLevel() < 50) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Blues), music.PlaybackMode.InBackground)
    } else {
        
    }
    
})
