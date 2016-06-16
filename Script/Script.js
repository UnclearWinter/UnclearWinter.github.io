// JavaScript Document
var Laptop = "Manufacturer: Lenovo"+
"  Model: g570"+
" RAM: 4 GB"+
" CPU: Intel Pentium 8960 2.20 GHZ"+
" GPU: Intel integrated HD graphics"+
" SSD: 225 GB Kingston now SSD";
var Desktop = "Manufacturer: me"+
" Model: Raidmax Aeolus"+
" RAM: 8 GB DDR3" +
" CPU: AMD fx-6100 six core 3.8 GHZ"+
" GPU 1: MSI HD 7790"+ 
" GPU 2: MSI HD 779"+
' HDD 1: 1TB 3.5"'+
' HDD 2: 250GB 2.5"'+
" Motherboard:p";
//var Wishlist = "http://steamcommunity.com/id/k1llerk4se/wishlist/"
var IsOn = 0;
function desktop() {
    var contentId = document.getElementById("Desktop");
    if (contentId.style.display == "none") {
        document.getElementById("Desktop").innerHTML = Desktop
        contentId.style.display = "block"
    }
    else {
        contentId.style.display = "none"
    }
}
function laptop() {
    var contentId = document.getElementById("Laptop");
    if (contentId.style.display == "none") {
        document.getElementById("Laptop").innerHTML = Laptop
        contentId.style.display = "block"
    }
    else {
        contentId.style.display = "none"
    }
}
/*function wishlist() {
    var contentId = document.getElementById("Wishlist");
    if (contentId.style.display == "none") {
        document.getElementById("Wishlist").innerHTML = Wishlist
        contentId.style.display = "block"
    }
    else {
        contentId.style.display = "none"
    }
}*/