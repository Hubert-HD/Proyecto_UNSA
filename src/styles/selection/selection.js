window.addEventListener("click", function(e){
    const element = e.target;
    document.querySelectorAll(".optionList--show").forEach(function (optionList){
        const selection = optionList.parentElement;
        const selecBox = selection.querySelector(".selecBox");
        const selecBox__content = selecBox.querySelector(".selecBox__content");
        const selecBox__ico = selecBox.querySelector(".selecBox__ico");
        let array = [selection, selecBox, selecBox__content, selecBox__ico];
        if(!array.includes(element)){
            optionList.classList.replace("optionList--show", "optionList--hidden");
        }
    });
});

document.querySelectorAll(".selection").forEach(function (selection) {
    const selecBox = selection.querySelector(".selecBox");
    const selecBox__content = selecBox.querySelector(".selecBox__content");
    const selecBox__ico = selecBox.querySelector(".selecBox__ico");
    const optionList = selection.querySelector(".optionList");
    const selection__input = selection.querySelector(".selection__input");

    selecBox.addEventListener("click", function(){
        if(optionList.classList.contains("optionList--hidden")){
            optionList.classList.replace("optionList--hidden", "optionList--show");
            selecBox__ico.classList.replace("selecBox__ico--down", "selecBox__ico--up");
            optionList.querySelectorAll(".optionList__option").forEach(function (option){
                option.setAttribute("tabindex", "0");
            });
        }
        else{
            optionList.classList.replace("optionList--show", "optionList--hidden");
            selecBox__ico.classList.replace("selecBox__ico--up", "selecBox__ico--down");
            optionList.querySelectorAll(".optionList__option").forEach(function (option){
                option.removeAttribute("tabindex");
            });
        }

        optionList.querySelectorAll(".optionList__option").forEach(function(option){
            option.addEventListener("click", function(e){
                selecBox__content.innerHTML = e.target.innerHTML;
                selecBox__content.classList.add("selecBox__content--full");
                selection__input.value = e.target.innerHTML;

                optionList.classList.replace("optionList--show", "optionList--hidden");
                selecBox__ico.classList.replace("selecBox__ico--up", "selecBox__ico--down");
                optionList.querySelectorAll(".optionList__option").forEach(function (option){
                    option.removeAttribute("tabindex");
                });
            });

            option.addEventListener("keydown", function(event) {
                if (event.key === "Enter") {
                    event.preventDefault();
                    event.target.click();
                }
            });
        });
    });

    selecBox.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            event.target.click();
        }
    });
});

