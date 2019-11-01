
let dark = false;
let toggle = -1;

$(document).ready(function (){
    console.log("what");
    var stickydock = $('#nav').offset();
    var $window = $(window);
    $window.scroll(function() {
        if($window.scrollTop() >= stickydock.top){
            $('#nav').addClass('is-fixed-top');
            $('.nav-placeholder').addClass('is-shown');
            $(".navbar-menu").addClass('navbar-dark');
            $(".dropdown").removeClass('is-up')
        } else {
            $('#nav').removeClass('is-fixed-top');
            $('.nav-placeholder').removeClass('is-shown');
            $(".navbar-menu").removeClass('navbar-dark');
            $(".dropdown").addClass('is-up')
        }
    });
});

function switchmode(){
    if (dark){
        dark = false;
        setP('--background-color', '#4E98BB')
        setP('--background-secondary', "white");
        setP('--background-third', "#FBFBFB");
        setP('--box-color', "white")
        setP('--text-color', "black")
        setP('--background-image', "url('../img/3_city_light.jpg')");
        $('.splash').removeClass('dark');
        $(".dark-mode-icon").removeClass('fa-sun');
        $(".dark-mode-icon").addClass('fa-moon');
    } else {
        dark = true;
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
        setP('--background-image', "url('../img/2_city.jpg'),url('../img/snowcircles.png')");
        $(".dark-mode-icon").removeClass('fa-moon');
        $(".dark-mode-icon").addClass('fa-sun');
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
