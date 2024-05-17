import { writable } from 'svelte/store'

export let stepHomePage = writable('welcome')

export let stepDask = writable('home')

export let stepDay = writable()