const outputN = document.getElementById("outputN");
const outputC = document.getElementById("outputC");
const minN = document.getElementById("minN");
const maxN = document.getElementById("maxN");
const amountC = document.getElementById("amountC");
const coin = document.getElementById("coin")

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const log = (...msg) => console.log(...msg)

function newnumber (min, max) {
    min = Number(min)
    max = Number(max)
    return Math.floor((Math.random() * (max - min+1)+min));
}

function generateNumber () {
    outputN.innerText = newnumber(minN.value, maxN.value);
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
    let walks = newnumber(30, 50);
    let originalHtmlArray = outputC.innerHTML.split("  ");
    let part = [];
    for (i = 0; i < walks; i++) {
        let item = i % (originalHtmlArray.length - 1)
        part = originalHtmlArray[item];

        part = part.split(" ");
        log(part)
        part.splice(3, 0, "height:8em;");
        log(part)
        part = part.join(" ")
        log(part)
        originalHtmlArray.splice(item, 1, part)
        outputC.innerHTML = originalHtmlArray;
        
        log("-----------------")
        await sleep(newnumber(1500, 2000) / (walks - i + 10));
        if (i<walks-1) {
            part = part.split(" ");
            part.splice(3, 1);
            part = part.join(" ")
            originalHtmlArray.splice(item, 1, part)
            outputC.innerHTML = originalHtmlArray;
        }

    }
    await sleep(1000)
    part = part.split(" ");
    part.splice(4, 1, "width:100%;>");
    log(part)
    part = part.join(" ")
    log(part)
    outputC.innerHTML = part;
}
async function flip (animation) {
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
}

flip()
generateNumber()
generateColor()