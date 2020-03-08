import { sampleText, sampleFunction } from './sample'

const a = sampleText
const b = sampleFunction()

export function test(arg: any) {
    return arg
}
export function test2() {
    return { value: 'test2' }
}