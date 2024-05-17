import { writable } from 'svelte/store'

export let moreless = writable("more")
export let taskbar = writable("no")

export let step = writable(["nothing"]) // cac buoc

export let tab = writable(["draft_1"]) //Ten tab 

export let onTab = writable(1)

export let typesFile = writable(["no"]) // Types file pdf, text, images...
export let preventReloadFile = writable([false])

//export let panelHighlight = writable(false)

export let selectedText = writable() //Cai bang luc boi den
export let selectedTextForQuickTask = writable(false)
export let selectedTextForQuickTaskPDF = writable(false)
export let coordinateMouse = writable([0,0])

export let stepDic = writable('defi') // defi, syn,ant

export let choseText = writable('')

export let dictionaryDS = writable(false)
export let stepDS = writable('defi')
export let enterText = writable()
export let captureTF = writable(false)
export let captureLink = writable()
export let nowlinkTess = writable()
export let isConvertingTess = writable(false)
export let convertedTextTess = writable('')

export let noteTF = writable(false)
// export let noteStep = writable("list")

// export let numberNotesOn = writable([])

export let imageTF = writable(false)
export let imageStep = writable('FromPC')
export let imageList = writable([])

export let DisplayImageList = writable([])
export let imageListTab = writable([]) // create image tab = add []
export let onTabImage = writable()

export let isOning = writable([true]) // false = unmount

export let nameTF = writable(true)

export let UpdateWord = writable(false)
export let ResDater = writable(false)


export let QuickTrans = writable(false) // false is not translate, true is translate,



