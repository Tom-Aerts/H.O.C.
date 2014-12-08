$(document).ready(function(){
		console.log("geladen");
		$("#een").click(function(){
			console.log("clicked");
			$("#twee").hide();
			$("#drie").hide();
			$("#vier").hide();
			$("#een").css("width", "100%").css("height", "100%").css("background-color","#2B2929").css("cursor","default");
			$(".terug").show();
			return false;
		});
		$("#twee").click(function(){
			console.log("clicked");
			$("#een").hide();
			$("#drie").hide();
			$("#vier").hide();
			$("#twee").css("width", "100%").css("height", "100%").css("background-color","#2B2929").css("cursor","default");
			$(".terug").show();
			return false;
		});
		$("#drie").click(function(){
			console.log("clicked");
			$("#twee").hide();
			$("#een").hide();
			$("#vier").hide();
			$("#drie").css("width", "100%").css("height", "100%").css("background-color","#2B2929").css("cursor","default");
			$(".terug").show();
			return false;
		});
		$("#vier").click(function(){
			console.log("clicked");
			$("#twee").hide();
			$("#drie").hide();
			$("#een").hide();
			$("#vier").css("width", "100%").css("height", "100%").css("background-color","#2B2929").css("cursor","default");
			$(".terug").show();
			return false;
		});
		$(".terug").click(function(){
			$("#een").show().css("width", "595px").css("height","230px");
			$("#twee").show().css("width", "595px").css("height","230px");
			$("#drie").show().css("width", "595px").css("height","230px");
			$("#vier").show().css("width", "595px").css("height","230px");
			$(".terug").hide();
			return false;
		})
	});