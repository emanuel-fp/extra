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
        htmlContent += `<div style="background-color:${randomColor}; width:${size}"> <p>${i+1}</p></div>  `;
    }
    outputC.innerHTML = htmlContent
}

function selectColor () {
    let html = outputC.innerHTML;
    html = html.split("  ");
    let num = newnumber(0, html.length-1);
    html = html[num];
    html = html.split(" ");
    html[3] = `width:100%">`;
    html = html.join(" ");
    outputC.innerHTML = html;
}

async function flip () {
    let flips = newnumber(10, 20);
    for (i=0;i<flips;i++) {
        if (i%2===0) {
            coin.style = "background-color: red;"
            console.log(i)
        }else {
            coin.style = "background-color: blue;"
            console.log(i)

        }
        await sleep(1000/flips)
    }
}

flip()
generateNumber()
generateColor()