input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
})
input.onButtonPressed(Button.B, function () {
    if (input.lightLevel() >= 255) {
        led.setBrightness(255)
    }
    if (input.lightLevel() < 150) {
        led.setBrightness(130)
    }
    if (input.lightLevel() < 50) {
        led.setBrightness(50)
    }
    basic.showNumber(input.lightLevel())
})
basic.forever(function () {
	
})
