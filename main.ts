input.onGesture(Gesture.ScreenDown, function () {
    music.playTone(988, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(100)
})
input.onGesture(Gesture.TiltRight, function () {
    music.playTone(131, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.AB, function () {
    music.playTone(587, music.beat(BeatFraction.Whole))
    basic.pause(100)
})
input.onButtonPressed(Button.B, function () {
    music.playTone(349, music.beat(BeatFraction.Whole))
    basic.pause(100)
})
input.onGesture(Gesture.TiltLeft, function () {
    music.playTone(196, music.beat(BeatFraction.Whole))
})
music.setVolume(100)
