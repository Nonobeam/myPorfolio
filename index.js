let width = screen.width

function facebook(){
    location.assign("https://www.facebook.com/profile.php?id=100074324105571");
}
function instagram(){
    location.assign("https://www.instagram.com/_.hp.unicorn/");
}
function linkedin(){
    location.assign("https://www.linkedin.com/in/nguyen-huu-phuc-26a091233/");
}
function github(){
    location.assign("https://github.com/Nonobeam");
}
function scroll1(){
    window.scrollTo({
        top: 750,
        behavior: "smooth"
    })
}
function scroll2(){
    window.scrollTo({
        top: 1950,
        behavior: "smooth"
    })
}
// const content1 = document.querySelector('content1')
// const content2 = document.querySelector('content2')
// window.addEventListener('Scroll', () =>{
//     if (window.scrollY >= 40){
//         content1.classList.add('ative_content');
//         content2.classList.add('ative_content');
//     } else {
//         content1.classList.remove('ative_content');
//         content2.classList.remove('ative_content');
//     }
// })

$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    $(".container_ava img").css({
    // "-webkit-filter": "blur(" + (scroll/100) + "px)",
    filter: "blur(" + (scroll/40) + "px)"
    })
})

$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    $(".hi p").css({
    // "-webkit-filter": "blur(" + (scroll/100) + "px)",
    filter: "blur(" + (scroll/40) + "px)"
    })
})

$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    $(".individual_infor").css({
    // "-webkit-filter": "blur(" + (scroll/100) + "px)",
    filter: "blur(" + (scroll/40) + "px)"
    })
})

window.addEventListener('scroll', information);
function information(){
    var infor = document.querySelectorAll('.information');
    for (var i = 0; i < infor.length; i++){
        var windowheight = window.innerHeight;
        var infortop = infor[i] .getBoundingClientRect().top;
        var inforpoint = 420;
        
        if (infortop < windowheight - inforpoint){
            infor[i].classList.add('active');
        }else{
            infor[i].classList.remove('active');
        }
    }
}

window.addEventListener('scroll', contact_infor);
function contact_infor(){
    var contact_infors = document.querySelectorAll('.contact_infor');
    for (var i = 0; i < contact_infors.length; i++){
        var windowheight = window.innerHeight;
        var contact_infor_top = contact_infors[i] .getBoundingClientRect().top;
        var contact_infor_point = 330;
        
        if (contact_infor_top < windowheight - contact_infor_point){
            contact_infors[i].classList.add('active');
        }else{
            contact_infors[i].classList.remove('active');
        }
    }
}

// window.addEventListener('scroll', individual_infor);
// function individual_infor(){
//     var individual_infors = document.querySelectorAll('.individual_infor');
//     for (var i = 0; i < individual_infors.length; i++){
//         var windowheight = window.innerHeight;
//         var individual_infor_top = individual_infors[i] .getBoundingClientRect().top;
//         var individual_infor_point = 20;
        
//         if (individual_infor_top < windowheight - individual_infor_point){
//             individual_infors[i].classList.add('active');
//         }else{
//             individual_infors[i].classList.remove('active');
//         }
//     }
// }

var typed = new Typed(".auto-type", {
    strings: ["Phuc", "a Software Engingeer"],
    typeSpeed: 100,
    backspeed: 150,
    loop: true
})