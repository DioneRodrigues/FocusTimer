import state from "./state.js"
import * as timer from "./timer.js"
import * as elements from "./elements.js"
import * as sounds from "./sound.js"

export function toggleRunning(){
    state.isRunning = document.documentElement.classList.toggle('running')
    timer.countDown()

    toggleMusic()

    sounds.buttonPressAudio.play()
}

export function set(){
    console.log("estamos no set")
    elements.minutes.setAttribute('contenteditable', true)
    elements.minutes.focus()

}

export function reset(){
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()

    sounds.buttonPressAudio.play()
}

export function toggleMusic(){
    state.isMute = document.documentElement.classList.toggle('music-on')
    console.log(state.isMute)
    if (state.isMute){
        sounds.bgAudio.play()
        return
    }
    sounds.bgAudio.pause()
}