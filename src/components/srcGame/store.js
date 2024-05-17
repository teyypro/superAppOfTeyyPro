import { writable } from 'svelte/store';


export let LeftContent = writable("you are a" +" "+'\u200B')
export let MiddleContent = writable("u")
export let RightContent = writable('\u200B'+" "+"speaker!")
export let displayScript = writable(true)
export let TFedit = writable(false)

export let ContentBig = writable("")
export let ExtractContent = writable()

export let prevLeft = writable("fl")
export let prevRight = writable("ent")

export let TFtool = writable(true)
export let StopCur = writable(true)

export let theme = writable(true)//true is light

