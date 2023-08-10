let Top_meno = document.querySelector("#Top_meno");

window.onscroll= function(){
    let SCROLL = scrollY;
    if(SCROLL>=100){
        Top_meno.classList.add("new_top")
    }else{
        Top_meno.classList.remove("new_top")
    }
}
console.log(Top_meno)