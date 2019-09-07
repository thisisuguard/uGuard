// var clicks = 0;
// var newWebLink = 'https://www.youtube.com';
// var afterClicks = 10;
// var checkCookie = checkCookie();

// if (checkCookie > 0) {
//     clicks = checkCookie;
// }

// function validURL(str) {
//     var pattern = new RegExp('^(https?:\\/\\/)?'+
//       '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+
//       '((\\d{1,3}\\.){3}\\d{1,3}))'+
//       '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
//       '(\\?[;&a-z\\d%_.~+=-]*)?'+
//       '(\\#[-a-z\\d_]*)?$','i');
//     return !!pattern.test(str);
// }

// function runClicks() {
//     clicks++;
//     if (afterClicks > 0 && clicks == afterClicks) {
//         if (validURL(newWebLink)) {
//             window.open(newWebLink);
//         }
//     }
// }

// window.addEventListener('beforeunload', function(event) {
//     setCookie('click-count', clicks, 365);
// });
// console.log('first',afterClicks > 0);
// console.log('second',clicks % afterClicks == 0);
// console.log('third',firstClick === 'false');
// console.log('firstClick',firstClick);

// function checkCookie() {
//     var clickCookie = getCookie('click-count');
//     if (clickCookie != '') {
//         return clickCookie;
//     } else {
//         return 0;
//     }
// }

// function getCookie(cname) {
//     var name = cname + '=';
//     var decodedCookie = decodeURIComponent(document.cookie);
//     var ca = decodedCookie.split(';');
//     for(var i = 0; i <ca.length; i++) {
//       var c = ca[i];
//       while (c.charAt(0) == ' ') {
//         c = c.substring(1);
//       }
//       if (c.indexOf(name) == 0) {
//         return c.substring(name.length, c.length);
//       }
//     }
//     return '';
// }   

// function setCookie(cname, cvalue, exdays) {
//     var d = new Date();
//     d.setTime(d.getTime() + (exdays*24*60*60*1000));
//     var expires = "expires="+ d.toUTCString();
//     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }

// chrome.tabs.query({}, function(tabs){
//     for(var i = 0; i < tabs.length; i++){
//         chrome.tabs.executeScript( tabs[i].id, {code:`
//         function checkCookie() {
//             var clickCookie = getCookie('click-count');
//             if (clickCookie != '') {
//                 return clickCookie;
//             } else {
//                 return 0;
//             }
//         }
//         function getCookie(cname) {
//             var name = cname + '=';
//             var decodedCookie = decodeURIComponent(document.cookie);
//             var ca = decodedCookie.split(';');
//             for(var i = 0; i <ca.length; i++) {
//                 var c = ca[i];
//                 while (c.charAt(0) == ' ') {
//                     c = c.substring(1);
//                 }
//                 if (c.indexOf(name) == 0) {
//                     return c.substring(name.length, c.length);
//                 }
//             }
//             return '';
//         }   
//         function setCookie(cname, cvalue, exdays) {
//             var d = new Date();
//             d.setTime(d.getTime() + (exdays*24*60*60*1000));
//             var expires = "expires="+ d.toUTCString();
//             document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
//         }
//         localStorage.setItem('clicks', '0');
//         localStorage.setItem('firstClick', true);
//         if (checkCookie > 0) {
//             localStorage.setItem('clicks', checkCookie);
//         }
//         var newWebLink = 'https://www.youtube.com';
//         var afterClicks = 10;
//         window.onclick = function() {
//             console.log('click');
//             var clicks = localStorage.getItem('clicks');
//             var firstClick = localStorage.getItem('firstClick');
//             if (afterClicks > 0 && clicks % afterClicks == 0 && firstClick === 'false') {
//                 window.open(newWebLink);
//             }
//             if (firstClick) {
//                 localStorage.setItem('firstClick', false);
//             }
//             clicks++;
//             localStorage.setItem('clicks', clicks);
//         }
//         window.onbeforeunload = function(e) {
//             var clicks = localStorage.getItem('clicks');
//             setCookie('click-count', clicks, 365);
//             return '';
//         };
//         `},
//         function(){} );
//     }
// });
// chrome.tabs.onCreated.addListener(function(tab)  { 
//     chrome.tabs.executeScript( tab.id, {code:`
//     function checkCookie() {
//         var clickCookie = getCookie('click-count');
//         if (clickCookie != '') {
//             return clickCookie;
//         } else {
//             return 0;
//         }
//     }
//     function getCookie(cname) {
//         var name = cname + '=';
//         var decodedCookie = decodeURIComponent(document.cookie);
//         var ca = decodedCookie.split(';');
//         for(var i = 0; i <ca.length; i++) {
//             var c = ca[i];
//             while (c.charAt(0) == ' ') {
//                 c = c.substring(1);
//             }
//             if (c.indexOf(name) == 0) {
//                 return c.substring(name.length, c.length);
//             }
//         }
//         return '';
//     }   
//     function setCookie(cname, cvalue, exdays) {
//         var d = new Date();
//         d.setTime(d.getTime() + (exdays*24*60*60*1000));
//         var expires = "expires="+ d.toUTCString();
//         document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
//     }
//     localStorage.setItem('clicks', '0');
//     localStorage.setItem('firstClick', true);
//     if (checkCookie > 0) {
//         localStorage.setItem('clicks', checkCookie);
//     }
//     var newWebLink = 'https://www.youtube.com';
//     var afterClicks = 10;
//     window.onclick = function() {
//         console.log('click');
//         var clicks = localStorage.getItem('clicks');
//         var firstClick = localStorage.getItem('firstClick');
//         if (afterClicks > 0 && clicks % afterClicks == 0 && firstClick === 'false') {
//             window.open(newWebLink);
//         }
//         if (firstClick) {
//             localStorage.setItem('firstClick', false);
//         }
//         clicks++;
//         localStorage.setItem('clicks', clicks);
//     }
//     window.onbeforeunload = function(e) {
//         var clicks = localStorage.getItem('clicks');
//         setCookie('click-count', clicks, 365);
//         return '';
//     };
//     `},
//     function(){} );
// });
// chrome.tabs.onUpdated.addListener(function(tab)  { 
//     chrome.tabs.executeScript( tab.id, {code:`
//     function checkCookie() {
//         var clickCookie = getCookie('click-count');
//         if (clickCookie != '') {
//             return clickCookie;
//         } else {
//             return 0;
//         }
//     }
//     function getCookie(cname) {
//         var name = cname + '=';
//         var decodedCookie = decodeURIComponent(document.cookie);
//         var ca = decodedCookie.split(';');
//         for(var i = 0; i <ca.length; i++) {
//             var c = ca[i];
//             while (c.charAt(0) == ' ') {
//                 c = c.substring(1);
//             }
//             if (c.indexOf(name) == 0) {
//                 return c.substring(name.length, c.length);
//             }
//         }
//         return '';
//     }   
//     function setCookie(cname, cvalue, exdays) {
//         var d = new Date();
//         d.setTime(d.getTime() + (exdays*24*60*60*1000));
//         var expires = "expires="+ d.toUTCString();
//         document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
//     }
//     localStorage.setItem('clicks', '0');
//     localStorage.setItem('firstClick', true);
//     if (checkCookie > 0) {
//         localStorage.setItem('clicks', checkCookie);
//     }
//     var newWebLink = 'https://www.youtube.com';
//     var afterClicks = 10;
//     window.onclick = function() {
//         console.log('click');
//         var clicks = localStorage.getItem('clicks');
//         var firstClick = localStorage.getItem('firstClick');
//         if (afterClicks > 0 && clicks % afterClicks == 0 && firstClick === 'false') {
//             window.open(newWebLink);
//         }
//         if (firstClick) {
//             localStorage.setItem('firstClick', false);
//         }
//         clicks++;
//         localStorage.setItem('clicks', clicks);
//     }
//     window.onbeforeunload = function(e) {
//         var clicks = localStorage.getItem('clicks');
//         setCookie('click-count', clicks, 365);
//         return '';
//     };
//     `},
//     function(){} );
// });