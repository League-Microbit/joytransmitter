
# Microbit Joystick Radio Command Documentation

This document describes the commands sent via the Microbit's radio module when specific inputs from buttons or the joystick attachment are triggered.

## Radio Command Format

All commands are sent using `radio.sendValue(name, value)`.

- **name** is always `"b"` for button/gesture commands, and `"x"` or `"y"` for joystick axis values.
- **value** is an integer representing the specific command or joystick position.

## Command Reference

| Input Condition                            | Command Sent         | Description                                  |
|-------------------------------------------|----------------------|----------------------------------------------|
| Button A is pressed                        | `radio.sendValue("b", 0)` | Button A pressed                           |
| Button B is pressed                        | `radio.sendValue("b", 1)` | Button B pressed                           |
| Joystick left button                       | `radio.sendValue("b", 2)` | Joystick button P12                         |
| Joystick up button                         | `radio.sendValue("b", 3)` | Joystick button P13                         |
| Joystick right button                      | `radio.sendValue("b", 4)` | Joystick button P15                         |
| Joystick down pressed                      | `radio.sendValue("b", 5)` | Joystick button P14                         |
| Buttons A and B are pressed together       | `radio.sendValue("b", 6)` | Button A+B combination                      |
| Shake gesture detected                     | `radio.sendValue("b", 7)` | Shake gesture detected                      |
| Logo is pressed                            | `radio.setGroup(...)`     | Changes radio group; shows group on display |
| No buttons or gestures detected            | `radio.sendValue("x", x)`<br>`radio.sendValue("y", y)` | Sends current joystick X and Y values |

## Additional Notes

- When the logo is pressed, the radio group is incremented (`RadioGroup = (RadioGroup + 1) % 9`), and the new group is shown on the LED display.
- When no specific input condition is matched, the joystick's analog `x` and `y` positions are continuously sent.
- The LED at the mapped joystick position is plotted for visual feedback.
- X values range from 0 to 1023 and are mapped to screen positions using a transformation to fit into the 5x5 LED grid.

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/jointheleague-it/joystick-example** and import

## Edit this project

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/jointheleague-it/joystick-example** and click import

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
