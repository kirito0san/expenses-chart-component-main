let one = document.querySelectorAll(`.one`)
let span = document.querySelectorAll(`.days span`)
let data
let numbers = []
let fetch1 = fetch('./data.json').then((e) => e.json()).then((e) => {
    data = JSON.parse(JSON.stringify(e))
    one.forEach((e, i) => {
        e.innerHTML = data[i].amount
        numbers.push(data[i].amount)
        span[i].style.height = `${data[i].amount * 2}px`
    })
    span[numbers.indexOf(Math.max(...numbers))].style.backgroundColor = `hsl(186, 34%, 60%)`
})
