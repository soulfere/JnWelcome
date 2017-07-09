(function () {
	$.ajax({
	type: "GET",
	url:"json/life.json",
	async:false,
	success:function(data) {
		var dataObj = JSON.parse(data);
		fillData(dataObj);
	}});
}());

function fillData (dataObj) {
	$("title").text(dataObj.title);
	$("#title").text(dataObj.title);
	$("#subtitle").text(dataObj.subtitle);
	$("#brand").text(dataObj.navbar.brand);
	$("#index").text(dataObj.navbar.index);
	$("#studyPage").text(dataObj.navbar.study);
	$("#thisPage").text(dataObj.navbar.life);
	$("#entPage").text(dataObj.navbar.ent);
	$("#sub-eating").text(dataObj.article.eating.title);
	$("#sub-living").text(dataObj.article.living.title);
	$("p#eating").text(dataObj.article.eating.article);
	$("p#living").text(dataObj.article.living.article);
	$("#contact").text(dataObj.footer.contact);
} 