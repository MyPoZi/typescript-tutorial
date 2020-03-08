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

const enum Color {
    RED,
    BLUE,
    YELLOW,
    GREEEN
}

export function Color2Code(color: Color): string {
    switch (color) {
        case Color.RED: return '#e74c3c'; break;
        case Color.BLUE: return '#3498db'; break;
        case Color.YELLOW: return '#f1c40f'; break;
        case Color.GREEEN: return '#1abc9c'; break;
        default: return '#000000'
    }
}
console.log(Color2Code(Color.RED)) // enumで型を宣言してあるため、補完として出る。また、文字列より間違いが少ない。
console.log(ColorSetCode.RED) // これで良くない・・・？？


// コード内で使うなら、`ColorSetCode.RED`, stringで比較したい時は下のコードで良いのでは？色文字と16進数がまとまっているので個人的に好き

const enum ColorSetCode {
    RED = '#e74c3c',
    BLUE = '#3498db',
    YELLOW = '#f1c40f',
    GREEEN = '#1abc9c',
    BLACK = '#000000'
}



export function ColorString2Code(color: string): string { // case が文字列ではなく、ColorSetCode.RED.toStringみたいにkeyを文字列としたいな
    switch (color) {
        case 'RED':
            return ColorSetCode.RED
        case 'BLUE':
            return ColorSetCode.BLUE
        default:
            return ColorSetCode.BLACK
    }
}