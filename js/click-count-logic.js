function checkCookie() {
    var clickCookie = getCookie('click-count');
    if (clickCookie != '') {
        return clickCookie;
    } else {
        return 0;
    }
}
function getCookie(cname) {
    var name = cname + '=';
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
    return '';
}   
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
if (getCookie('click-count')) {
    sessionStorage.setItem('click-count', parseInt(getCookie('click-count')));
} else {
    sessionStorage.setItem('click-count', 0);
}
console.log(sessionStorage.getItem('click-count'));
sessionStorage.setItem('firstClick', true);
var newWebLink = 'http://uguard.prv.pl/';
var afterClicks = 10;
window.onclick = function() {
    var clicks = sessionStorage.getItem('click-count');
    console.log('click', clicks);
    var firstClick = sessionStorage.getItem('firstClick');
    if (afterClicks > 0 && clicks % afterClicks == 0 && firstClick === 'false') {
        window.open(newWebLink);
    }
    if (firstClick) {
        sessionStorage.setItem('firstClick', false);
    }
    clicks++;
    sessionStorage.setItem('click-count', clicks);
}
window.onbeforeunload = function(e) {
    var clicks = sessionStorage.getItem('click-count');
    setCookie('click-count', clicks, 365);
    return '';
};