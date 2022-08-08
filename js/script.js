/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


function MenuPrincipalFuncao() {
    var x = document.getElementById("myLinks-MenuPrincipal");
    if (window.getComputedStyle(x).display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function MenuPrincipalNgeaalc() {
    var y = document.getElementById("myLinks-MenuPrincipal-Ngeaalc");
    if (window.getComputedStyle(y).display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
}

function MenuPrincipalPublicacoes() {
    var z = document.getElementById("myLinks-MenuPrincipal-Publicacoes");
    if (window.getComputedStyle(z).display === "none") {
        z.style.display = "block";
    } else {
        z.style.display = "none";
    }
}