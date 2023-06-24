let but = document.getElementById('but')
let in1 = document.getElementById('in1')
let text = document.getElementById('text')
let out = document.getElementById('out')

but.onclick = f1


let content = 'О пашни, пашни, пашни Коломенская грусть.На сердце день вчерашний,А в сердце светит Русь.Как птицы свищут версты  Из-под копыт коня.И брызжет солнце горстью Свой дождик на меня.'


console.log(content.length)





function f1() {
    let c = in1.value
    b = content.replaceAll(c, 'word')
    text.innerText = b
    console.log(b)
    f2(b)
}
function f2(b) {
    res = 0
    cnt=0

while (res != -1) {
    res = b.indexOf('word', res + 1)
    console.log(res)
    cnt++

}
out.innerText=cnt-1
}
