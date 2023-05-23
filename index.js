let heading = document.getElementById('heading');
let span = document.getElementById('span');
let para = document.getElementById('para')

let time = [10 + "pm", 11 + "pm", 12 + "pm", 1 + "am", 2 + "am", 3 + "am",];


for (let index = 0; index < time.length; index++) {
    setTimeout(function (){
        span.innerHTML = time[index]
        para.style.display = "none"
    }, index*1000)
}

setTimeout(function (){
    heading.style.display = "none"   
    heading.style.display = "none"
    para.style.display = "block"
}, 6000)

let letter = "123456789ABCDEF";


function randomcolor(){
    let hash = "#";
    for (let index = 0; index < 6; index++) {
      hash += letter[Math.floor(Math.random()*letter.length)]
    }
    return hash
}

span.style.color = randomcolor();
