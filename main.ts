let py = 0
let px = 0
let y = 0
let x = 0
joystickbit.initJoystickBit()
joystickbit.Vibration_Motor(200)
pins.setAudioPin(AnalogPin.P0)
music.play(music.tonePlayable(262, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.InBackground)
radio.setGroup(1)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . # # . .
            # . . # .
            # # # # .
            # . . # .
            # . . # .
            `)
        radio.sendValue("b", 0)
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            # # # . .
            # . . # .
            # # # . .
            # . . # .
            # # # # .
            `)
        radio.sendValue("b", 1)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P12)) {
        basic.showArrow(ArrowNames.West)
        radio.sendValue("b", 2)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P13)) {
        basic.showArrow(ArrowNames.North)
        radio.sendValue("b", 3)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P15)) {
        basic.showArrow(ArrowNames.South)
        radio.sendValue("b", 4)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P14)) {
        basic.showArrow(ArrowNames.East)
        radio.sendValue("b", 5)
    } else {
        basic.clearScreen()
        x = joystickbit.getRockerValue(joystickbit.rockerType.X)
        y = joystickbit.getRockerValue(joystickbit.rockerType.Y)
        px = Math.map(x - 100, 1023, 0, -2, 2) + 2
        py = Math.map(y - 100, 1023, 0, -2, 2) + 2
        radio.sendValue("x", x)
        radio.sendValue("y", y)
        led.plot(px, py)
    }
})
