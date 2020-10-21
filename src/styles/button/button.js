editButton.addEventListener("click", function(){

    let ico = "fa-edit";
    let text = "EDITAR";

    if(this.classList.toggle("abort")){
        this.classList.replace("button--yellow", "button--red");
        ico = "fa-ban";
        text = "ABORTAR";
        // more funtions
    }
    else{
        this.classList.replace("button--red", "button--yellow");
        ico = "fa-edit";
        text = "EDITAR";
        // more funtions
    }
    this.innerHTML = `<i class="button__ico fas ${ico}"></i>
                      <span class="button__text">${text}</span>`;
});