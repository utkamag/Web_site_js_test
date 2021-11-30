const slider = document.querySelectorAll(".slider__wrap")

const click = (event) => {
    console.log("event", event)
    console.log("target", event.target)
    console.log("currentTarget", event.currentTarget)
    event.stopPropagation()
}

slider.forEach(slide => {
    slide.addEventListener("click", click)

})

window.addEventListener("click", function (){
    console.log("windowClicked")
})