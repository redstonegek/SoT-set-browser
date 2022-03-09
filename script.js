const coll = document.getElementsByClassName("collapsible");
for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener("click", function () {
		this.classList.toggle("active");
		let content = this.nextElementSibling;
		if (content.style.display === "none") {
			content.style.display = "flex";
		} else {
			content.style.display = "none";
		}
	});
}

const collmain = document.getElementsByClassName("collapsiblemain");
for (i = 0; i < collmain.length; i++) {
	collmain[i].addEventListener("click", function () {
		this.classList.toggle("active");
		let content = this.nextElementSibling;
		if (content.style.display === "none") {
			content.style.display = "block";
		} else {
			content.style.display = "none";
		}
	});
}