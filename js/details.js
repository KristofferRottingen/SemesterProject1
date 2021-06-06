const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "https://kristoffer-api-exam1.no/Exam/wp-json/wp/v2/posts/" + id;

const headings = document.querySelector(".exp-headings h1");
const image = document.querySelector(".details_image");
const intro = document.querySelector(".intro_details");

async function getDetails() {
    try{
        const response = await fetch(url);

        const result = await response.json();

        console.log(result);
        
        image.innerHTML = `<img src="${result.acf.image}" alt="picture of ${result.acf.h1}">`;

        headings.innerHTML = `${result.acf.h1}`;

        intro.innerHTML = `${result.acf.intro_details}`;


        if (id === "248") {
            headings.classList.add("kids");
        } else if (id === "245") {
            headings.classList.add("teachers");
        } else if (id === "242") {
            headings.classList.add("research");
        } else if (id === "239") {
            headings.classList.add("support");
        } else if (id === "236") {
            headings.classList.add("volunteer");
        } else if (id === "233") {
            headings.classList.add("internship");
        } else if (id === "230") {
            headings.classList.add("kids");
        } else if (id === "218") {
            headings.classList.add("teachers");
        }


    } catch(error) {
        console.log(error);
    }
     
}; 

getDetails();