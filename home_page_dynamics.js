var g_terminalCharacter = "|";
var g_splashPageText = {};
var HEADER = 0;
var P1 = 2;
var P2 = 4;
var BLINK = g_outputType.BLINK;
var TEXT = g_outputType.TEXT;

function RenderHomepage()
{
	LoadSplashPageText();
	RenderSplashPageText();
}

function LoadSplashPageText()
{
	g_splashPageText["header"] = "Welcome!";
	g_splashPageText["p1"] = "I'm glad you've found your way to this page!";
	g_splashPageText["p2"] = " While you're here, please take a look around & reach out for any inquiries.";
	g_splashPageText["p3"] = "- Ulises";
}

async function RenderSplashPageText()
{
	await RenderHeader();
	await RenderP1();
	await RenderP2();
	await InfiniteBlink();
}

async function RenderHeader()
{
	var homeTextField = document.querySelector("#home_text");
	if (homeTextField)
	{
		var header = homeTextField.children[HEADER];
		QueueOutput(header, BLINK, g_terminalCharacter);
		QueueOutput(header, BLINK, g_terminalCharacter);
		QueueOutput(header, TEXT, g_splashPageText["header"]);
		QueueOutput(header, BLINK, g_terminalCharacter);
		QueueOutput(header, BLINK, g_terminalCharacter);
		await RenderOutput();
	}	
	return new Promise((resolve) => {
        resolve("rendered");
	});
}

async function RenderP1()
{
	var homeTextField = document.querySelector("#home_text");
	if (homeTextField)
	{
		var p1 = homeTextField.children[P1];
		QueueOutput(p1, BLINK, g_terminalCharacter);
		QueueOutput(p1, BLINK, g_terminalCharacter);
		QueueOutput(p1, TEXT, g_splashPageText["p1"]);
		QueueOutput(p1, BLINK, g_terminalCharacter);
		QueueOutput(p1, BLINK, g_terminalCharacter);
		QueueOutput(p1, TEXT, g_splashPageText["p2"]);
		QueueOutput(p1, BLINK, g_terminalCharacter);
		await RenderOutput();
	}	
	return new Promise((resolve) => {
        resolve("rendered");
	});
}

async function RenderP2()
{
	var homeTextField = document.querySelector("#home_text");
	if (homeTextField)
	{
		var p2 = homeTextField.children[P2];
		QueueOutput(p2, BLINK, g_terminalCharacter);
		QueueOutput(p2, TEXT, g_splashPageText["p3"]);
		await RenderOutput();
	}	
	return new Promise((resolve) => {
        resolve("rendered");
	});
}

async function InfiniteBlink()
{
	var homeTextField = document.querySelector("#home_text");
	if (homeTextField)
	{
		var p2 = homeTextField.children[P2];
		while (true)
		{
			QueueOutput(p2, BLINK, g_terminalCharacter);
			await RenderOutput();			
		}
	}	
	return new Promise((resolve) => {
        resolve("rendered");
	});
}

RenderHomepage();
