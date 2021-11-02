let target;
let x = document.querySelector("#sources").children;
let y = document.querySelectorAll(".target");

[...x].forEach(element => {
    element.addEventListener("dragstart",function(e){
        target=element
        setTimeout(() => {
            this.classList.add("invisible")
        }, 0);
            
        
    });
    element.addEventListener("dragend",function(e) {
        this.classList.remove("invisible")
        
    });
});
function onDragOver(e) {
    e.preventDefault();
    this.classList.add("over")
};

function onDragLeave(e) {
    e.preventDefault();
    this.classList.remove("over")
    
};
function onDrop(e) {
    e.preventDefault();
    this.append(target)
    
};

[...y].forEach(element => {
    element.addEventListener("dragover", onDragOver)
    element.addEventListener("dragleave",onDragLeave)
    element.addEventListener("drop",function () {
        element.textContent=""
        element.append(target)
        
    })
    
});