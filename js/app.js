function displaycontent(){
	const name = document.getElementById("name").value;
	const email = document.getElementById("email").value;
	const gender = document.querySelector('input[name="gender"]:checked')?.value;
	const date = document.getElementById("date").value;
	const study = document.getElementById("Study").value;
	const comments = document.getElementById("Comments").value;

	console.log(name, email, gender, date, study, comments);
}