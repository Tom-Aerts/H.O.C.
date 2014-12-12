$(document).ready(function(){
		console.log("geladen");
		$("#een").click(function(){
			console.log("clicked");
			$("#een").hide();
			$("#tekst1").show();
			$("#twee").hide();
			$("#drie").hide();
			$("#vier").hide();
			$("#tekst1").css("width", "100%").css("height", "100%").css("background-color","#2B2929").css("cursor","default").css("display, block");
			$(".terug").show();
			return false;
		});
		$("#twee").click(function(){
			console.log("clicked");
			$("#een").hide();
			$("#twee").hide();
			$("#drie").hide();
			$("#vier").hide();
			$("#tekst2").show();
			$("#tekst2").css("width", "100%").css("height", "100%").css("background-color","#2B2929").css("cursor","default");
			$(".terug").show();
			return false;
		});
		$("#drie").click(function(){
			console.log("clicked");
			$("#twee").hide();
			$("#een").hide();
			$("#drie").hide();
			$("#vier").hide();
			$("#tekst3").show();
			$("#tekst3").css("width", "100%").css("height", "100%").css("background-color","#2B2929").css("cursor","default");
			$(".terug").show();
			return false;
		});
		$("#vier").click(function(){
			console.log("clicked");
			$("#twee").hide();
			$("#vier").hide();
			$("#tekst4").show();
			$("#drie").hide();
			$("#een").hide();
			$("#tekst4").css("width", "100%").css("height", "100%").css("background-color","#2B2929").css("cursor","default");
			$(".terug").show();
			return false;
		});
		$(".terug").click(function(){
			$("#een").show().css("width", "595px").css("height","230px");
			$("#twee").show().css("width", "595px").css("height","230px");
			$("#drie").show().css("width", "595px").css("height","230px");
			$("#vier").show().css("width", "595px").css("height","230px");
			$("#tekst1").hide().css("width", "595px").css("height","230px");
			$("#tekst2").hide().css("width", "595px").css("height","230px");
			$("#tekst3").hide().css("width", "595px").css("height","230px");
			$("#tekst4").hide().css("width", "595px").css("height","230px");
			$(".terug").hide();
			return false;
		})
	});