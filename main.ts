let timer = 0
input.onButtonPressed(Button.A, function () {
    timer = randint(5, 15)
    basic.showIcon(IconNames.Tortoise)
    while (0 < timer) {
        timer += -1
        basic.pause(1000)
    }
    basic.showIcon(IconNames.Skull)
    music.playMelody("- D - C C D C A ", 120)
})
basic.forever(function () {
	
})
