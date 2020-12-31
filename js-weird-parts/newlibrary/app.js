var g = G$("John", "Doe");

$("#login").on("click", function () {
	var loginGrtr = G$("John", "Doe");
	$("#logindiv").hide();
	loginGrtr.setLang($("#lang").val()).HTMLGreeting("#greeting", true).log();
	//console.log(loginGrtr.setLang($("#lang").val()));
});
