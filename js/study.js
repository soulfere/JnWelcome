(function () {
	$.ajax({
	type: "GET",
	url:"json/study.json",
	async:false,
	success:function(data) {
		var dataObj = JSON.parse(data);
		$("#footer").load("template/footer.html",function(){
			fillData(dataObj);
		});
	}});
}());

function fillData (dataObj) {
	$("title").text(dataObj.title);
	$("#title").text(dataObj.title);
	$("#subtitle").text(dataObj.subtitle);
	$("#brand").text(dataObj.navbar.brand);
	$("#index").text(dataObj.navbar.index);
	$("#thisPage").text(dataObj.navbar.study);
	$("#lifePage").text(dataObj.navbar.life);
	$("#entPage").text(dataObj.navbar.ent);
	$("#sub-study").text(dataObj.article.subject.title);
	$("#sub-league").text(dataObj.article.association.title);
	$("p#english").text(dataObj.article.subject.english.content);
	$("p#math").text(dataObj.article.subject.math.content);
	$("p#league").text(dataObj.article.association.article);
	$("#contact").text(dataObj.footer.contact);
} 