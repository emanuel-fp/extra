const outputN = document.getElementById("outputN");
const outputC = document.getElementById("outputC");
const minN = document.getElementById("minN");
const maxN = document.getElementById("maxN");
const amountC = document.getElementById("amountC");
const coin = document.getElementById("coin")

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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
    let parts = [];
    // ajeitar o codigo
    for (let i = 0; i < walks; i++) {
        let chosen = originalHtmlArray[i % (originalHtmlArray.length - 1)];
        parts = chosen.split(" ");
        parts.splice(4, 0, "height:8em>");
        console.log(i)
        await sleep(newnumber(1500, 2000) / (walks - i + 10));
    }
    
    outputC.innerHTML = parts.join(" ");
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