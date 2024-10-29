/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Francisco Rocco Allegri
 * Created on: Oct 2024
 * This program ...
*/

basic.clearScreen()
let strip = neopixel.create(DigitalPin.P16, 3, NeoPixelMode.RGB)
let countdownNumber = 0

countdownNumber = 5
input.onButtonPressed(Button.A, function() {
    while (countdownNumber > 0)
    basic.showNumber(countdownNumber)
})
