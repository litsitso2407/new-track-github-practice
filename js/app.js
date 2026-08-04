function displaycontent(){
	const name = document.getElementById("name").value;
	const email = document.getElementById("email").value;
	const gender = document.querySelector('input[name="gender"]:checked')?.value;
	const date = document.getElementById("date").value;
	const study = document.getElementById("Study").value;
	const comments = document.getElementById("Comments").value;
	const agreed = document.querySelector('input[name="checkbox"]').checked;

	if (!name || !email) {
		alert("Please fill in your name and email.");
		return;
	}

	if (!agreed) {
		alert("Please agree to the Terms and Conditions.");
		return;
	}

	const summary =
		"Name: " + name + "\n" +
		"Email: " + email + "\n" +
		"Gender: " + (gender || "Not selected") + "\n" +
		"Date of Birth: " + date + "\n" +
		"Year of Study: " + study + "\n" +
		"Comments: " + comments;

	alert(summary);
}