const outputN = document.getElementById("outputN");
const outputC = document.getElementById("outputC");
const minN = document.getElementById("minN");
const maxN = document.getElementById("maxN");
const amountC = document.getElementById("amountC");
const coin = document.getElementById("coin")

let coinAnimPlaying = false
let numAnimPlaying = false

//fazer o resto do codigo mais bonito

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const log = (...msg) => console.log(...msg)

function newnumber (min, max) {
    min = Number(min)
    max = Number(max)
    return Math.floor((Math.random() * (max - min+1)+min));
}

async function generateNumber (animation) {
    if (numAnimPlaying) {return}
    numAnimPlaying = true
    if(animation) {
        let walks = newnumber(30, 50)
        for (i=0;i<walks;i++) {
            outputN.innerText = newnumber(minN.value, maxN.value);
            await sleep(newnumber(1500, 2000) / (walks - i + 10))
        }
    }else {
        outputN.innerText = newnumber(minN.value, maxN.value);
    }
    await sleep(500)
    numAnimPlaying = false
}

function generateColor () {
    
    let htmlContent = "";
    for (i=0;i < amountC.value;i++) {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let randomColor = `rgb(${r}, ${g},${b})`;
        let size = `${100/amountC.value}%`
        htmlContent += `<div style="background-color:${randomColor}; width:${size};"> <p>${i+1}</p></div>  `;
    }
    outputC.innerHTML = htmlContent
}

async function selectColor() {
    let divs = outputC.querySelectorAll("div")
    if (divs.length == 1) {
        return
    }
    let walks = newnumber(divs.length*2, divs.length*3);
    let target
    for (i = 0; i < walks; i++) {
        target = divs[i%divs.length]

        target.style.height = "7em"

        await sleep(newnumber(1500, 2000) / (walks - i + 10));
        if (i<walks-1) {
            target.style.height = ""
        }

    }
    await sleep(500)
    for (i = 0; i < divs.length; i++) {
        let instance = divs[i%divs.length]

        if (instance != target) {
            instance.remove()
        }

    }
    target.style.height = ""
    target.style.transitionDuration = "500ms"
    target.style.width = "100%"
}
async function flip (animation) {
    if (coinAnimPlaying) {return}
    coinAnimPlaying = true

    let flips = newnumber(30, 50);
    if (animation) {
        let size = 50
        coin.style.height = size + "vh"
        coin.style.width = size + "vh"

        for (i=0;i<flips;i++) {
            if (i%2===0) {
                coin.style.backgroundColor = "gold"
                coin.innerHTML = "<p>H</p>"
            }else {
                coin.style.backgroundColor = "goldenrod"
                coin.innerHTML = "<p>T</p>"
            }
            size = 40/(flips-i)
            coin.style.height = size + "vh"
            coin.style.width = size + "vh"
            await sleep(newnumber(1500, 2000)/(flips-i+10))
        }
    } else {
        let n = newnumber(1, 2)
        if (n==1) {
                coin.style.backgroundColor = "gold"
                coin.innerHTML = "<p>H</p>"

        } else {
                coin.style.backgroundColor = "goldenrod"
                coin.innerHTML = "<p>T</p>"
        }
    }
    await sleep(500)
    coinAnimPlaying = false
}

flip()
generateNumber()
generateColor()