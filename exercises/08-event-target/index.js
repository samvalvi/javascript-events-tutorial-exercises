window.onload = function loadFn() {
	var containerElm = document.getElementById("container");
	containerElm.addEventListener("click", function(event) {
		//you code here
		let object = event.target.attributes.id.value;
		alert(`Object id: ${object}`);
	});
};
