username = localStorage.getItem("username");
email = localStorage.getItem("email");
phone = localStorage.getItem("phone");

document.getElementById("use").innerHTML = username + "1287_fun";
document.getElementById("user").innerHTML = "kdc";
document.getElementById("email").innerHTML = "Email: " + email;
document.getElementById("phone").innerHTML = "Phone no: +91 " + phone;

function create() {
    document.getElementById("gop").style.display = "none";
    document.getElementById("gop1").style.display = "block";
}

function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("phone");
    window.location = "../index.html";
}

function go() {
    window.open("https://provido-meetings-by-gyanam.herokuapp.com/");
}