const toggleDropdown1 = () => {
   const toggleItem = document.getElementById("features-menu1");
   toggleItem.classList.toggle("show");
   console.log(toggleItem)
}

const toggleDropdown2 = () => {
    const toggleItem = document.getElementById("features-menu2")
    toggleItem.classList.toggle("show");
    console.log(toggleItem)
}

const toggle1 = document.querySelector(".drop-item1");
const toggle2 = document.querySelector(".drop-item2");

toggle1.addEventListener("click", toggleDropdown1);
toggle2.addEventListener("click", toggleDropdown2)

window.onclick = (event) => {
    if (!event.target.matches('.drop-item1') || !event.target.matches('.drop-item2')){
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++){
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show")
            }
        }
    }
}