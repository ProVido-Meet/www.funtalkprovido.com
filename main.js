function signIn() {
	username = document.getElementById("name").value;
	email = document.getElementById("email").value;
	phone = document.getElementById("phone").value;

	if (username, email == "") {
		document.getElementById("er_span").innerHTML = "<i class='fa fa-warning'>&nbsp;</i>" + "Something went wrong";
	} else {
		localStorage.setItem("username", username);
		localStorage.setItem("email", email);
		localStorage.setItem("phone", phone);

		window.location = "views/home.html";
	}
}

function help() {
	window.open("mailto:teamprovid@gmail.com?Subject=Help In Fun Talk");
}