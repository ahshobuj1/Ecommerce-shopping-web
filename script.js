const menuVar = document.querySelector(`#menu_res`);
const navbar = document.querySelector(`.header_nav`);
const closeMenu = document.querySelector(`#close_menu`);
const largeImage = document.querySelector(`#main_images`);
const smallImage = document.querySelectorAll(`.small_images`);
const shirt = document.querySelectorAll(`.shirt`);
const tShirt = document.querySelectorAll(`.t_shirt`);
const jerseys = document.querySelectorAll(`.jersey`);
const clubsJersey = document.querySelectorAll(`.jersey_club`);

/**
 * menu var for mobaile
 */
menuVar.addEventListener(`click`, () => {
    navbar.style.right = `0px`;
});

closeMenu.addEventListener(`click`, () => {
    navbar.style.right = `-300px`;
});

/**
 * convert Node list to Array & Products card dynamic
 */
var smallImages = Array.from(smallImage);

smallImages.map((value) => {
    value.addEventListener(`click`, () => {
        largeImage.src = value.src;
    });
});

/**
 * clickable products carts
 */
var shirtClick = Array.from(shirt);
shirtClick.map((y) => {
    y.addEventListener(`click`, () => {
        window.location.href = `products.html`;
    });
});

var tShirts = Array.from(tShirt);
tShirts.map((value) => {
    value.addEventListener(`click`, () => {
        window.location.href = `t-shirt.html`;
    });
});

var jersey = Array.from(jerseys);
jersey.map((value) => {
    value.addEventListener(`click`, () => {
        window.location.href = `jersey.html`;
    });
});

var clubJersey = Array.from(clubsJersey);
clubJersey.map((value) => {
    value.addEventListener(`click`, () => {
        window.location.href = `jersey-club.html`;
    });
});

/**
 * club jersey product card customize title & price
 */
const fcb = document.querySelector(`#fcb`);
const realMadrid = document.querySelector(`#real_madrid`);
const manCity = document.querySelector(`#mncity`);
const liverpool = document.querySelector(`#liverpool`);
const titleProducts = document.querySelector(`#title_pro`);
const priceProducts = document.querySelector(`#productsPrice`);

fcb.addEventListener(`click`, () => {
    titleProducts.innerHTML = `Barcelona 2024 Home jersey`;
    priceProducts.innerHTML = `$150`;
});
liverpool.addEventListener(`click`, () => {
    titleProducts.innerHTML = `Liverpool 2024 Away Jersey`;
    priceProducts.innerHTML = `$130`;
});
manCity.addEventListener(`click`, () => {
    titleProducts.innerHTML = `Manchester City 2024 Home jersey`;
    priceProducts.innerHTML = `$150`;
});
realMadrid.addEventListener(`click`, () => {
    titleProducts.innerHTML = `Real Madrid 2024 Home jersey`;
    priceProducts.innerHTML = `$140`;
});
