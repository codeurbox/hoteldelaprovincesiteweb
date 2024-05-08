const tableRaws = document.querySelectorAll(".reservation_table tbody .raw");
const closePreviewbtns = document.querySelectorAll(".close-preview");

tableRaws.forEach((item) => {
    item.addEventListener("click", function(){
        console.log(item)
        const preview = this.querySelector('.reservation_preview');
        console.log(preview)
    })
});

closePreviewbtns.forEach((item) => {
    item.addEventListener("click", function(){
    const divParent = this.parentElement;
    divParent.style.display = "none"
})
});