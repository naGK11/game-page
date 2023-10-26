document.addEventListener("keyup", e=>{

    e.target.matches("#srch-bar")
    console.log(e.target.value)
    
    if (e.target.matches("srch-bar")){

        document.querySelectorAll("game__container").forEach( game=>{

            game.textContent.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
                ?game.classList.remove("filtro")
                :game.classList.add("fuiltro")                
        })
    }

})