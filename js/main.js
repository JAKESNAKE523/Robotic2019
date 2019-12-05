
let dark = false;
let toggle = -1;

let mode = getCookie("mode");

let doImove = false;

if(mode==='dark'){
    setDark();
} else if(mode==='light'){
    setLight();
} else {
    document.cookie = "mode=light; path=/"; 
}

$('#share').click(function () {
    if(navigator.share){
        navigator.share({
            title: "Take a look at the Icebreaker's Robotics Website!",
            url: "icebreakers.ga"
        }).then(() => {
            console.log('Share success').catch((error) => {
                console.log('error sharing...');
            });
        });
    } else{
        
    }
})

$(document).ready(function (){

    var stickydock = $('#nav').offset();
    var $window = $(window);

    //Determines if the navbar should be watched annd moved throughout the page.  Removes the jumpy behavior exhibited on some pages
    doImove = !($('nav').hasClass('is-fixed-top'));

    $window.scroll(function() {
        if(doImove){
            if($window.scrollTop() >= stickydock.top){
                $('#nav').addClass('is-fixed-top');
                $('.nav-placeholder').addClass('is-shown');
                $(".navbar-menu").addClass('navbar-dark');
                $(".dropdown").removeClass('is-up')
            } else{//Watch this
                $('#nav').removeClass('is-fixed-top');
                $('.nav-placeholder').removeClass('is-shown');
                $(".navbar-menu").removeClass('navbar-dark');
                $(".dropdown").addClass('is-up')
            }
        }
    });
});
function setLight(){
    dark = false;
    document.cookie = "mode=light; path=/"; 
    setP('--background-color', '#4E98BB')
    setP('--background-secondary', "white");
    setP('--background-third', "#FBFBFB");
    setP('--box-color', "white")
    setP('--text-color', "black")
    setP('--background-image', "url('../img/3_city_light_final.png')");
    $('.splash').removeClass('dark');
    $(".dark-mode-icon").removeClass('fa-sun');
    $(".dark-mode-icon").addClass('fa-moon');
}
function setDark(){
    dark = true;
    document.cookie = "mode=dark; path=/"; 
    /*setP('--background-color', '#222831');
    setP('--background-secondary', "#3B4048");
    setP('--background-third', "#393e45");
    setP('--box-color', "#393e46");
    primary:#073652
    */
    $('.splash').addClass('dark');
    setP('--background-color', '#053853');
    setP('--background-secondary', "#084466");
    setP('--background-third', "#0b4769");
    setP('--box-color', "#09476b");
    setP('--text-color', "white");
    setP('--background-image', "url('../img/2_city_final_new.png'),url('../img/snowcircles.png')");
    $(".dark-mode-icon").removeClass('fa-moon');
    $(".dark-mode-icon").addClass('fa-sun');
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function switchmode(){
    if (dark){
        setLight();
    } else {
        setDark();
    }
}

function setP(property, value){
    document.documentElement.style.setProperty(property, value);
}

function openDropdown(){
    if($("#menu").hasClass('is-active')){
        $("#menu").removeClass('is-active');
    }else {
        $("#menu").addClass('is-active');
    }
    
    let dropmenu = $('#dropdownMenu');
    if(toggle === 1){
        dropmenu.removeClass('clicked');
    }else{
        dropmenu.addClass('clicked');
    }
    toggle *= -1;
}
