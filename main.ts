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
input.calibrateCompass()
basic.showIcon(IconNames.Asleep)
let light = input.lightLevel()
test = false
basic.forever(function () {
    basic.pause(500)
    if (input.magneticForce(Dimension.Strength) > 100) {
        basic.showIcon(IconNames.Sad)
        kitronik_servo_lite.driveBackwards(100)
        kitronik_servo_lite.turnRight(90)
    }
    if (input.lightLevel() > 50) {
        basic.showIcon(IconNames.Happy)
        kitronik_servo_lite.driveForwards(100)
    } else {
        basic.showIcon(IconNames.Asleep)
        kitronik_servo_lite.turnLeft(90)
    }
})
