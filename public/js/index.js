(function () {
	$.ajax({
	type: "GET",
	url:"json/index.json",
	async:false,
	success:function(data) {
		var dataObj = data;
		$("#footer").load("template/footer.html",function(){
			fillData(dataObj);
		});
	}});
}());

function fillData (dataObj) {
	$("title").text(dataObj.title.page_name);
	$("#brand").text(dataObj.title.brand);
	$("#thisPage").text(dataObj.title.page_name);
	$("#studyPage").text(dataObj.main_contents.study.title);
	$("#lifePage").text(dataObj.main_contents.life.title);
	$("#entPage").text(dataObj.main_contents.entertainment.title);
	$(".btn-brief").text(dataObj.main_contents.brief);
	$("#studyArticle").text(dataObj.main_contents.study.article);
	$("#lifeArticle").text(dataObj.main_contents.life.article);
	$("#entAtricle").text(dataObj.main_contents.entertainment.article);
	$("#contact").text(dataObj.footer.contact);
} 