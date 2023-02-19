window.addEventListener("load", function() {
	var form = document.querySelector("form");
	var submitButton = document.querySelector("input[type='submit']");

	function checkSize() {
		if (window.innerWidth < 600) {
			form.classList.add("responsive");
			submitButton.setAttribute("value", "Enviar");
		} else {
			form.classList.remove("responsive");
			submitButton.setAttribute("value", "");
		}
	}

	checkSize();

	window.addEventListener("resize", checkSize);
});
