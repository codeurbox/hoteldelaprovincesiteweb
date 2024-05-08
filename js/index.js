// const dropdownElement = document.querySelector(".dropdown");
// const dropdown = dropdownElement ? dropdownElement : null;

// if(dropdown){
//     const dropdownlist = document.querySelector(".dropdown-menu");
//     dropdown.addEventListener("mouseleave", () => {
//     setTimeout(function(){
//         dropdownlist.classList.add('hidden');
//     }, 500);
// })

//     dropdown.addEventListener("mouseenter", () => {
//         function hideDropDown(){
//             dropdownlist.classList.remove('hidden');
//         }
//         hideDropDown();
// })
// }
const menubtn = document.querySelector(".menu");
const header = document.getElementsByTagName("header")[0];
const blurFilter = document.querySelector(".blur-filter");

let isOpen = false
menubtn.addEventListener("click", () => {
    if(!isOpen){
    header.classList.add("mobile_v");
    isOpen = true;
    blurFilter.style.display = "flex";
    }
    else{
        header.classList.remove("mobile_v");
        isOpen = false;
        blurFilter.style.display = "none";
    }
})

blurFilter.addEventListener("click", () => {
    header.classList.remove("mobile_v");
    isOpen = false;
    blurFilter.style.display = "none";
})
