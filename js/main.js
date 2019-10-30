
let dark = false;
let toggle = -1;

$(document).ready(function (){
    console.log("what");
    var stickydock = $('#nav').offset();
    var $window = $(window);
    $window.scroll(function() {
        if($window.scrollTop() >= stickydock.top){
            $('#nav').addClass('is-fixed-top');
            $(".navbar-menu").addClass('navbar-dark');
        } else {
            $('#nav').removeClass('is-fixed-top');
            $(".navbar-menu").removeClass('navbar-dark');
        }
    });
});

function switchmode(){
    if (dark){
        dark = false;
        setP('--background-color', 'white')
        setP('--background-secondary', "white");
        setP('--background-third', "#FBFBFB");
        setP('--box-color', "white")
        setP('--text-color', "black")
        setP('--background-image', "url('../img/2_city_light.jpg')");
        
        $(".dark-mode-icon").removeClass('fa-sun');
        $(".dark-mode-icon").addClass('fa-moon');
    } else {
        dark = true;
        /*setP('--background-color', '#222831');
        setP('--background-secondary', "#3B4048");
        setP('--background-third', "#393e45");
        setP('--box-color', "#393e46");
        */
        setP('--background-color', '#073652');
        setP('--background-secondary', "#084466");
        setP('--background-third', "#0b4769");
        setP('--box-color', "#09476b");
        setP('--text-color', "white");
        setP('--background-image', "url('../img/2_city.jpg')");

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
