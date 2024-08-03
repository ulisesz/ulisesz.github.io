var g_splashPageText = {};
var g_terminalCharacter = "|";

function RunStartup()
{
	LoadSplashPageText();
	RenderSplashPageText();
}

function LoadSplashPageText()
{
	var HEADER = 0;
	var P1 = 2;
	var P2 = 4;
	var homeTextField = document.querySelector("#home_text");
	if (homeTextField)
	{
		var htmlFields = homeTextField.children;
		
		g_splashPageText["header"] = htmlFields[HEADER].innerText;
		htmlFields[HEADER].innerText = "";
		
		g_splashPageText["p1"] = htmlFields[P1].innerText;
		htmlFields[P1].innerText = "";
		
		g_splashPageText["p2"] = htmlFields[P2].innerText;
		htmlFields[P2].innerText = "";
	}
}

function RenderSplashPageText()
{
}

RunStartup();