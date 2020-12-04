import { baseUrl } from "../js/settings/api.js"

const heroUrl = baseUrl + "home/";

export async function getHeroImg() {

try{

const responses = await fetch(heroUrl);
let json = await responses.json();

const heroImg = json.hero_img;

console.log(heroImg);

const heroBanner = document.querySelector(".hero-banner");

heroBanner.innerHTML="",

heroBanner.style.backgroundImage = `url(${heroImg})`;

heroBanner.innerHTML = `<div class="hero-color-section"> </div>
                        <div class="hero-bnt-h1">
                        <h1 class="hero-h1">${json.hero_banner_alt_text}</h1>
                        <button class="btn-white hero-button">Go to shop</button>
                        </div>
`;

} catch(error) {
  console.log(error);
}

};

getHeroImg();
