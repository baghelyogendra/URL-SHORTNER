let original_link = document.getElementById("original_link");
let SHORT = document.getElementById("SHORT");
let shorten_link = document.getElementById("shorten_link");
let COPY = document.getElementById("COPY");

SHORT.addEventListener('click', () => {
    let url = original_link.value;
    fetch('https://api.shrtco.de/v2/shorten?url=${url}')
    .then((resp) =>resp.json())
    .then((value) => {
        shorten_link.value = value.result.short_link;
    })
    .catch((error) => {
        shorten_link.value = "Something Went Wrong!";
    })
    
});
 
COPY.addEventListener("click", ()=> {
    navigator.clipboard.writeText(shorten_link.value);
    COPY.innerHTML = "COPIED";

    setTimeout(() => {
        COPY.innerHTML = "COPY";
    }, 1000);
})