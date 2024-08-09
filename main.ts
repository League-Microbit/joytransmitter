let y = 0
let x = 0
joystickbit.initJoystickBit()
joystickbit.Vibration_Motor(200)
pins.setAudioPin(AnalogPin.P0)
music.play(music.tonePlayable(262, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
basic.forever(function () {
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P12)) {
        basic.showArrow(ArrowNames.West)
        joystickbit.Vibration_Motor(100)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P13)) {
        basic.showArrow(ArrowNames.North)
        joystickbit.Vibration_Motor(100)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P15)) {
        basic.showArrow(ArrowNames.East)
        joystickbit.Vibration_Motor(100)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P14)) {
        basic.showArrow(ArrowNames.South)
        joystickbit.Vibration_Motor(100)
    } else {
        basic.clearScreen()
        x = Math.map(joystickbit.getRockerValue(joystickbit.rockerType.X) - 100, 1023, 0, -2, 2) + 2
        y = Math.map(joystickbit.getRockerValue(joystickbit.rockerType.Y) - 100, 1023, 0, -2, 2) + 2
        led.plot(x, y)
    }
})
