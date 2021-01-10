const loadingText = document.querySelector(".loading-text")
const bg = document.querySelector(".bg")

let loadingInt = 0;
let increment = setInterval(blurring, 100)

function blurring(){
    loadingInt++

    if(loadingInt > 99){
        clearInterval(increment)
    }
    loadingText.innerHTML = `${loadingInt}%`
}