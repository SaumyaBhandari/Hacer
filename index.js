function openPage(){
    window.scrollTo(0,0);
}

function scrollPage(e){
    if (e === 1) {
        window.scrollTo(0, 730);
    }else if (e === 2){
        window.scrollTo(0, 730+700);
    }else if (e === 3){
        window.scrollTo(0, 730+720+650);
    }else if (e === 4){
        window.scrollTo(0, 730+720+650+780);
    }else if (e === 5){
        window.scrollTo(0, 730+720+650+780+700);
    }else if (e === 6){
        window.scrollTo(0, 730+720+650+700+700+1200);
    }else if (e === 7){
        window.scrollTo(0, 730+720+650+700+700+1200+600);
    }
}



function checkOffset(){
    var header = document.getElementById("header");
    var logo = document.getElementById("headerLogoContent");
    var menu = document.getElementById("ul");
    var contact = document.getElementById("contact");

    if(window.pageYOffset > 100){
        header.style.height = "60px";
        header.style.borderBottom = "2px solid #fff";
        header.style.boxShadow = "0px 1px 32px 0 rgba(0, 0, 0, 0.815)";
        header.style.backgroundColor = "rgb(21, 21, 21, 0.9)";
        logo.style.opacity = "0"
        menu.style.margin = "0px 0% 0px 0";
        contact.style.backgroundColor = "rgb(21, 21, 21, 0)";
        contact.style.color = "#fff";
        
    }else {
        header.style.height = "0px";
        logo.style.opacity = "1"
        menu.style.margin = "32px 0px 0px 0px";
        contact.style.backgroundColor = " rgb(1, 154, 192)";
        contact.style.color = "#000";
    }

    if(window.pageYOffset > 600){
        document.querySelector(".newArrivalContainer").style.animation = "appearfromtop 1s ease";
        document.querySelector(".newArrivalContainer").style.opacity = "1";
    }
    if(window.pageYOffset > 1800){
        document.querySelector(".aboutUsSection").style.animation = "appearfromtop2nd 1.5s ease";
        document.querySelector(".aboutUsSection").style.opacity = "1";
    }
    if(window.pageYOffset > 730+720+650+700+700){
        document.querySelector(".shopSection").style.animation = "grow 1.5s ease";
        document.querySelector(".shopSection").style.opacity = "1";
    }


}


function showImage(){}


