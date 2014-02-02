// get the elements to be highlighted
var hl = document.getElementsByClassName("highlight");

// get the elements that will cause highlighting of the previous elements (the otherHover)
var li = document.getElementById("list").getElementsByTagName("li");

// highlight other elements when you hover your mouse over a list element with a span tag
function highlight(i) {
	li[i].firstChild.onmouseover = function() {
		hl[i].style.backgroundColor = "Yellow";
		// li[i].firstChild.style.backgroundColor = "Yellow";
	}
}

// un-highlight other elements when you your mouse leaves a list element with a span tag
function unlight(i) {
	li[i].firstChild.onmouseout = function() {
		hl[i].style.backgroundColor = "";
		// li[i].firstChild.style.backgroundColor = "";
	}
}

// run the functions for each element in the list you want to have your highlighting keywords in
var i;
for (i=0; i < li.length; ++i) {
	highlight(i);
	unlight(i);
}
