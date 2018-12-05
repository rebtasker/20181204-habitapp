//set count
if(localStorage.getItem("count") == null) {
	localStorage.setItem("count", 0)
}

//update count
function update() {
	document.getElementById("count").innerHTML = localStorage.getItem("count");
}

update();

//add one to count
function plusOne() {
	localStorage.setItem("count", (Number(localStorage.getItem("count")) + 1));
	update();
}

//minus one to count
function minusOne() {localStorage.setItem("count", (Number(localStorage.getItem("count")) - 1));
	update();
}

//reset count
function reset() {
	if (confirm("Are you sure Ryan won't get a side-by-side?")) {
    	localStorage.setItem("count",0);
		update();
	}
}