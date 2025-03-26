let py = 0
let px = 0
let y = 0
let x = 0
joystickbit.initJoystickBit()
joystickbit.Vibration_Motor(200)
pins.setAudioPin(AnalogPin.P0)
music.play(music.tonePlayable(262, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.InBackground)
let RadioGroup = 1
radio.setGroup(1)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendValue("b", 0)
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendValue("b", 1)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P12)) {
        radio.sendValue("b", 2)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P13)) {
        radio.sendValue("b", 3)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P15)) {
        radio.sendValue("b", 4)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P14)) {
        radio.sendValue("b", 5)
    } else if (input.logoIsPressed()) {
        RadioGroup = (RadioGroup + 1) % 3
        radio.setGroup(RadioGroup)
        basic.showNumber(RadioGroup)
        basic.pause(1000)
    } else {
        basic.clearScreen()
        x = joystickbit.getRockerValue(joystickbit.rockerType.X)
        y = joystickbit.getRockerValue(joystickbit.rockerType.Y)
        px = Math.map(x - 100, 1023, 0, -2, 2) + 2
        py = Math.map(y - 100, 1023, 0, -2, 2) + 2
        radio.sendValue("x", x)
        radio.sendValue("y", y)
        led.plot(px, py)
        serial.writeValue("x", x)
    }
})
