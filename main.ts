input.onButtonPressed(Button.AB, function () {
    test = !(test)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.lightLevel())
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.magneticForce(Dimension.Strength))
})
let test = false
basic.showIcon(IconNames.Heart)
test = false
let light = input.lightLevel()
let strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
strip.setBrightness(25)
basic.forever(function () {
    basic.pause(500)
    if (input.magneticForce(Dimension.Strength) > 100) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        kitronik_servo_lite.driveBackwards(300)
    }
    if (input.lightLevel() > 50) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        kitronik_servo_lite.driveForwards(100)
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        kitronik_servo_lite.turnLeft(90)
    }
})
