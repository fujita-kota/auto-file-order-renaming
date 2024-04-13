document.getElementById("reset").onclick = function() {
	let parent = document.getElementById('layout-tile');
	let children = document.getElementsByClassName('column');
	let len = children.length;

	for (var i = 0; i < len; i++) {
		parent.removeChild(children[0]);
	}
}