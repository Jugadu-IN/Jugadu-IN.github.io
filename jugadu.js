// NAVBAR TOGGLER
let burger = document.getElementById("toggle")
let nav = document.getElementById("navbarMenuHeroB");
burger.addEventListener ("click", () => {
    nav.classList.toggle("is-active")
    burger.classList.toggle("is-active");
});
let buildOptions = ["Websites", "Mobile Apps", "Softwares", "SEO & SMO", "IOT Applications", "Branding", "Much more..."]
let whatCanWeBuildForYou = document.getElementById("whatCanWeBuildForYou")

// GET STARTED BUTTON
document.getElementById('getStartedBtn').onclick = function() {
window.location.href = "#services"
}



// Contact form submit AJAX

var formData
let formSubmitLink = "https://docs.google.com/forms/u/1/d/e/1FAIpQLSeg_DaPu2jSjUBYmta4T7gIob3F5lgWHS4Zyalq6m31ho2rPw/formResponse"
let contact_form = document.querySelector("form")
let form_success = document.getElementById("form-success-msg")
contact_form.addEventListener('submit', (event) => {
event.preventDefault()
formData = new FormData(contact_form) 
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    contact_form.classList.add('hidden-elem')
    form_success.classList.remove('hidden-elem')
    if (this.readyState == 4 && this.status == 200) {
    contact_form.classList.add('hidden-elem')
    form_success.classList.remove('hidden-elem')
    }
};
xhttp.open("POST", formSubmitLink, true);
xhttp.send(formData);
})