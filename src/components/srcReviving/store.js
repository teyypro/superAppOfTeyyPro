import { writable } from 'svelte/store'



export let dictionaryDS = writable(false)
export let enterText = writable('')

export let stepDS = writable('defi')

export let choice = writable('enter')

export let LisEnter = writable(["1"])

export let resWord = writable([''])

export let resMean = writable([''])

export let RightSlide = writable(0)
export let MaxSlide = writable(false)
export let MinSlide = writable(false)
export let onSide = writable(0)


export let AnsList =  writable([]) //ddc push owr buocws onMount 


// Keets quar cuar nguowif dungf
export let CusList =  writable([])

export let resScore = writable()

export let reswholekey = writable([])// ghi cả từ cả lỗi ur ans key

export let resultTF = writable()

export let choiceOpt = writable()

export let MixRes = writable()

export let onSSReviving = writable('none')
// vị trí phần tử thứ để truy xuát

export let suggestTF = writable(false)
export let suggestUpdate = writable(false)
export let listwordSug = writable([])
export let formchosedNum = writable()
export let startInput = writable()
export let endInput = writable()

export let UpdateWord = writable(false)
export let ResDater = writable(false)


export let QuickTrans = writable(false) // false is not translate, true is translate,