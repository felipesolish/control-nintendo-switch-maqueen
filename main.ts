pins.onPulsed(DigitalPin.P8, PulseValue.High, function () {
    vibrate()
    radio.sendString("stop")
    basic.showIcon(IconNames.No)
})
function vibrate () {
    pins.digitalWritePin(DigitalPin.P12, 1)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P12, 0)
}
let z = 0
let x = 0
let y = 0
radio.setGroup(1)
pins.setPull(DigitalPin.P8, PinPullMode.PullNone)
pins.setPull(DigitalPin.P13, PinPullMode.PullNone)
basic.forever(function () {
    y = pins.analogReadPin(AnalogPin.P2)
    x = pins.analogReadPin(AnalogPin.P1)
    z = pins.digitalReadPin(DigitalPin.P8)
    if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        radio.sendString("stop")
        basic.showIcon(IconNames.No)
    } else {
        radio.sendString("move")
        basic.showIcon(IconNames.Happy)
    }
    control.waitMicros(6000)
})
