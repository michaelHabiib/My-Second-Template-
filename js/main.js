// get skills smoothle when scrooling

let ourSkills = document.querySelector(".our-skills");


window.onscroll = function () {
    // window height
    let windowHeight = window.innerHeight;

    // our skills height
    let ourSkillsHeight = ourSkills.offsetHeight;

    // our skills offest top
    let ourSkillOffestTop = ourSkills.offsetTop;

    //al7ata ale anta 3mltlha scroll
    let windowScroll = window.pageYOffset;

    if (windowScroll >  (ourSkillOffestTop + ourSkillsHeight - windowHeight)) {
        console.log("u have been rich")
        let ourSkillSpan = document.querySelectorAll(".skills span")
        
        ourSkillSpan.forEach(span => {
            span.style.width = span.dataset.progress;
        })
    }
    
}
