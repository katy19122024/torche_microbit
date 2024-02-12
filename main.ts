bluetooth.onBluetoothConnected(function () {
    bluetooth.startUartService()
    basic.showString("C")
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showString("D")
})
input.onButtonPressed(Button.A, function () {
    bluetooth.uartWriteNumber(1)
})
input.onButtonPressed(Button.B, function () {
    bluetooth.uartWriteNumber(0)
})
basic.showLeds(`
    . # . # .
    # . # . #
    # . . . #
    . # . # .
    . . # . .
    `)
basic.pause(200)
basic.clearScreen()
