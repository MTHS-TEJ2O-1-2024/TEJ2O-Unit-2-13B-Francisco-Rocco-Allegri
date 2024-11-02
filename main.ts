/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Francisco Rocco Allegri
 * Created on: Oct 2024
 * This program makes a countdown from 4 to 0, and by each value of number, the number of neopixels lighting up
*/

basic.clearScreen()
let neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)

input.onButtonPressed(Button.A, function () {
    let countdownNumber: number = 4

    while (countdownNumber >= 0) {
        basic.showNumber(countdownNumber)
        neopixelStrip.clear()

        if (countdownNumber > 0) neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        if (countdownNumber > 1) neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        if (countdownNumber > 2) neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        if (countdownNumber > 3) neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))

        neopixelStrip.show()

        basic.pause(1000)
        countdownNumber -= 1
    }

    basic.clearScreen()
    neopixelStrip.clear()
    neopixelStrip.show()
})
