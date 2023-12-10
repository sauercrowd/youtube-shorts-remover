console.info("youtube shorts remover loaded");

function main(){
    // home view
    Array.from(document.getElementsByClassName("ytd-rich-shelf-renderer"))
        .filter(el => el.innerText === "Shorts")
        .forEach(el => el.closest(".ytd-rich-shelf-renderer")?.remove());

    // search results
    Array.from(document.getElementsByTagName("ytd-reel-shelf-renderer"))
        .forEach(el => el.remove())
}

window.onload = main;
