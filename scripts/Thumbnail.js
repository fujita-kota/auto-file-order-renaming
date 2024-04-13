document.getElementById("FileStorage").onchange = function () {

	// 要素を取得
	let e = document.getElementById('layoutCanvas');
	// none に設定して非表示
	e.style.display = "none";

	objectUrls = [];

	var fileList = this.files;

	for (var i = 0, l = fileList.length; l > i; i++) {

		//透明な要素を重ねる(コメントは改良中)
		if (!fileList[i].type.match('image.*')) {
			var fileName = fileList[i].name;
			appendHTML('<div class="column target" id="fileBody_' + i+ '"draggable="true"><div>' + fileName + '<img src=" images/fileImage.png "  width="100%"></div></div>');
			//appendHTML('<div class="column" id="base_' + i + '" draggable="true"><div>' + fileName + '<img src=" images/fileImage.png "  width="100%"></div></div>');
			objectUrls.push(objectUrl);
		} else {
			var objectUrl = URL.createObjectURL(fileList[i]);
			var fileName = fileList[i].name;
			appendHTML('<div class="column target" id="fileBody_' + i+ '"draggable="true"><div>' + fileName + '<img src="' + objectUrl + '" width="100%"></div></div>');
			//appendHTML('<div class="column" id="base_'+ i + '"  draggable="true"><div>' + fileName + '<img src="' + objectUrl + '" width="100%"></div></div>');
			objectUrls.push(objectUrl);
		}

		/*var id1 = "fileBody" + i ;
		var id2 = "base" + i ;
		var body = document.getElementById(id1);
		var base = document.getElementById(id2);
		body.style.zIndex = "1";
		base.style.zIndex = "2";
		base.style.opacity = "0";*/
	}
}

function appendHTML(html) {
	document.getElementById("layout-tile").innerHTML += html;
}

var objectUrls = [];