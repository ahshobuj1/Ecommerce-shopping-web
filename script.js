const menuVar = document.querySelector(`#menu_res`);
const navbar = document.querySelector(`.header_nav`);
const closeMenu = document.querySelector(`#close_menu`);

menuVar.addEventListener(`click`, () => {
    navbar.style.right = `0px`;
});

closeMenu.addEventListener(`click`, () => {
    navbar.style.right = `-300px`;
});

// Normal ways

// if (menuVar) {
//     menuVar.addEventListener(`click`, () => {
//         // navbar.classList.add(`menubar_active`);
//         navbar.style.right = `0px`;
//     });
// }
// if (closeMenu) {
//     closeMenu.addEventListener(`click`, () => {
//         // navbar.classList.remove(`menubar_active`);
//         navbar.style.right = `-300px`;
//     });
// }
