(function () {
	$.ajax({
	type: "GET",
	url:"json/entertainment.json",
	async:false,
	success:function(data) {
		var dataObj = JSON.parse(data);
		fillData(dataObj);
	}});
}());

function fillData (dataObj) {
	var filmStr = "<ul>";
	var ktvStr  = "<ul>";
	var filmObj = dataObj.article.cinema.article;
	var ktvObj  = dataObj.article.ktv.article;
	for (var i=0; i<filmObj.length; i++) {
		filmStr += "<li>" + filmObj[i] + "</li>";
	}
	filmStr += "</ul>";
	for (var i=0; i<ktvObj.length; i++) {
		ktvStr += "<li>" + ktvObj[i] + "</li>";
	}
	ktvStr += "</ul>";
	$("title").text(dataObj.title);
	$("#title").text(dataObj.title);
	$("#subtitle").text(dataObj.subtitle);
	$("#brand").text(dataObj.navbar.brand);
	$("#index").text(dataObj.navbar.index);
	$("#studyPage").text(dataObj.navbar.study);
	$("#lifePage").text(dataObj.navbar.life);
	$("#thisPage").text(dataObj.navbar.ent);
	$("#contact").text(dataObj.footer.contact);
	$("#sub-film").text(dataObj.article.cinema.title);
	$("#sub-ktv").text(dataObj.article.ktv.title);
	$("p#film").html(filmStr);
	$("p#ktv").html(ktvStr);
}