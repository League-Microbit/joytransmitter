y = 0
x = 0
joystickbit.init_joystick_bit()
joystickbit.Vibration_Motor(200)
pins.set_audio_pin(AnalogPin.P0)
music.play(music.tone_playable(262, music.beat(BeatFraction.QUARTER)),
    music.PlaybackMode.UNTIL_DONE)
radio.set_group(1)

def on_forever():
    global x, y
    if joystickbit.get_button(joystickbit.JoystickBitPin.P12):
        basic.show_arrow(ArrowNames.WEST)
        radio.send_value("b", 0)
    elif joystickbit.get_button(joystickbit.JoystickBitPin.P13):
        basic.show_arrow(ArrowNames.NORTH)
        radio.send_value("b", 1)
    elif joystickbit.get_button(joystickbit.JoystickBitPin.P15):
        basic.show_arrow(ArrowNames.EAST)
        radio.send_value("b", 2)
    elif joystickbit.get_button(joystickbit.JoystickBitPin.P14):
        basic.show_arrow(ArrowNames.SOUTH)
        radio.send_value("b", 3)
    else:
        basic.clear_screen()
        x = Math.map(joystickbit.get_rocker_value(joystickbit.rockerType.X) - 100,
            1023,
            0,
            -2,
            2) + 2
        y = Math.map(joystickbit.get_rocker_value(joystickbit.rockerType.Y) - 100,
            1023,
            0,
            -2,
            2) + 2
        radio.send_value("x", x)
        radio.send_value("y", y)
        led.plot(x, y)
basic.forever(on_forever)
