import { writable } from 'svelte/store'



export let dictionaryDS = writable(false)

export let enterText = writable('')

export let stepDS = writable('defi')

export let editBoard = writable(false)

export let numWord = writable()
export let lenWord = writable()
export let ongoingText = writable()

export let result = writable([])

export let finalanswerTF = writable(false)

export let testAns = writable([])

export let UpdateWord = writable(false)
export let ResDater = writable(false)


export let QuickTrans = writable(false) // false is not translate, true is translate,