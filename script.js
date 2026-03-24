document.addEventListener("DOMContentLoaded", function(){
    let pathname = window.location.pathname;
    console.log(pathname);
    if (pathname.endsWith("/index.html")){
        alert("Welcome to The Band's official website! Get ready to explore our story, our journey, and the music we love.");
    } else if (pathname.endsWith("/john.html")){
        alert("Welcome! You are about to get to know John, one of the members of The Band. His story and biography await you!");
    } else if (pathname.endsWith("/kieran.html")){
        alert("Welcome! You are about to discover Karen, a key member of The Band. Dive in and learn all about her!");
    } else if (pathname.endsWith("/kimberly.html")){
        alert("Welcome! You are about to explore Kimberly's world as a member of The Band. Her story is just ahead!");
    }
});
