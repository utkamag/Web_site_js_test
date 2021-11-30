document.addEventListener("DOMContentLoaded", function (){

    function skrollHeader () {

        const header = document.querySelector(".header")

        let preSkroll = pageYOffset
        let countSkroll

        window.addEventListener("scroll", () => {

            countSkroll = pageYOffset

            if (countSkroll > preSkroll){
                header.classList.add("header_hiden")
            }
            if (countSkroll < preSkroll){
                header.classList.remove("header_hiden")
            }

            preSkroll = countSkroll
        })

    }

    skrollHeader()
})