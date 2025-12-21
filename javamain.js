sessionStorage.setItem("Testmode",0)
// gss: Get Session Storage
// sss: Set Session Storage
// 1: Testmode  2: ISADMIN  3: User
window.c = console.log
window.getel = function getel(el) {return document.getElementById(el)}

window.gss = function gss(type) {
    if (type==1){return(Number(sessionStorage.getItem("Testmode")))}
    if (type==2){return(Number(sessionStorage.getItem("ISADMIN")))}
    if (type==3){return(sessionStorage.getItem("User"))}
}
window.sss = function sss(type, set) {
    if (type==1){return(sessionStorage.setItem("Testmode", set))}
    if (type==2){return(sessionStorage.setItem("ISADMIN", set))}
    if (type==3){return(sessionStorage.setItem("User", set))}
}

if (gss(2) === 0) {
    if (gss(1)==1){sss(2, 1)} else {sss(2, 0)}
    if (gss(1)==1){sss(3, "Admin")} else {sss(3, 0)}
}

let TopBar
let TopBar1
let TopBar2
let TopBar3

////CONTENT LOADED////
document.addEventListener("DOMContentLoaded", () => {
    if (gss(3) != 0) {localStorage.setItem("UserLocal", gss(3))}
    else {const UL=localStorage.getItem("UserLocal");if (UL != 0) {c(",,")};sss(3, UL)}
    

    const headline = document.getElementById("headline-1");
    //TopDiv = document.getElementById("topDiv");
    TopBar = document.createElement("div");
    TopBar.className = "TopBar"
    document.body.appendChild(TopBar);
    if (gss(2) === null) {
        if (gss(1)==1){sss(2, 1)} else {sss(2, 0)}
        if (gss(1)==1){sss(3, "Admin")} else {sss(3, 0)}
    }

    headline.addEventListener("mouseenter", () => {
        TopBar1 = document.createElement("div");
        TopBar2 = document.createElement("div");
        TopBar3 = document.createElement("div");
        
        TopBar1.innerHTML = '<b><a class="TopA" href="index.html">&nbsp;&nbsp;Term Calendar</a></b>';
        TopBar1.className = "TopBarEl";
        TopBar1.id = "TopBar1";
        TopBar2.innerHTML = '<b><a class="TopA" href="Games.html">&nbsp &nbsp &nbsp &nbsp &nbspGames &nbsp &nbsp &nbsp &nbsp &nbsp</a></b>';
        TopBar2.className = "TopBarEl";
        TopBar2.id = "TopBar2";
        if (gss(2)==1) {
            TopBar3.innerHTML = '<b><a class="TopA" href="Music.html">&nbsp &nbsp &nbsp &nbsp &nbsp Music &nbsp &nbsp &nbsp &nbsp &nbsp</a></b>';
            TopBar3.className = "TopBarEl";
            TopBar3.id = "TopBar3";
        }
        if (window.location.pathname.split("/").pop() == "index.html")
            {TopBar1.id="TopBar1";TopBar2.id="TopBar2";TopBar3.id="TopBar3";}
        else if (window.location.pathname.split("/").pop() == "Games.html")
            {TopBar1.id="TopBar2";TopBar2.id="TopBar1";TopBar3.id="TopBar3";}
        else {TopBar1.id="TopBar2";TopBar2.id="TopBar3";TopBar3.id="TopBar1";}
        TopBar.appendChild(TopBar1);
        TopBar.appendChild(TopBar2);
        TopBar.appendChild(TopBar3);
        TopBar.addEventListener("mouseleave", () => {
            TopBar1.remove();
            TopBar2.remove();
            TopBar3.remove();
        })
    })
})
