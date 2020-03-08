import { sampleText, sampleFunction } from './sample'

const a = sampleText
const b = sampleFunction()

export function test(arg: any) {
    return arg
}
export function test2() {
    return { value: 'test2' }
}

export function test3() {
    let myObject: { 'foo': string } = {
        foo: ''
    }
    let anotherObject: typeof myObject = { foo: '' }
    anotherObject['foo'] = 'value'
    // anotherObject['foo'] = 1 // Error
    // anotherObject['bar'] = 'value' // Error!
    console.log(myObject)
}

export function keyofTest() {
    const myObject = {
        foo: 'FOO',
        bar: 'BAR',
        baz: 'BAZ'
    }
    type keyObject = {
        foo: string
        bar: string
    }
    let someKey: keyof keyObject
    someKey = 'foo'

    let myObjectKey: keyof typeof myObject
    myObjectKey = 'bar'
    myObjectKey = 'foo'
    // myObjectkey = 'qux' // Error!
}