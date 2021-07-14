username = localStorage.getItem("username");
email = localStorage.getItem("email");
phone = localStorage.getItem("phone");

document.getElementById("name").innerHTML = username;
document.getElementById("email").innerHTML = "Email: " + email;
document.getElementById("phone").innerHTML = "Phone no: +91 " + phone;

function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("phone");
    window.location = "../index.html";
}