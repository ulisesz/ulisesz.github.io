var g_terminalCharacter = "|";
var g_aboutPageText = {};
var TEXT_FIELD = 0;
var BLINK = g_outputType.BLINK;
var TEXT = g_outputType.TEXT;

function RenderPage()
{
	LoadText();
	DisplayText();
}

function LoadText()
{
	g_aboutPageText["text1"] = "I wanted some practice creating websites & also needed a place to host current/future projects of mine.";
	g_aboutPageText["text2"] = " This site will continue to be a work in progress, but its purposes will remain the same.";
}

async function DisplayText()
{
	await RenderText();
	await InfiniteBlink();
}

async function RenderText()
{
	var textField = document.querySelector("#about_page");
	if (textField)
	{
		var field = textField.children[TEXT_FIELD];
		QueueOutput(field, BLINK, g_terminalCharacter);
		QueueOutput(field, BLINK, g_terminalCharacter);
		QueueOutput(field, TEXT, g_aboutPageText["text1"]);
		QueueOutput(field, BLINK, g_terminalCharacter);
		QueueOutput(field, TEXT, g_aboutPageText["text2"]);
		await RenderOutput();
	}	
	return new Promise((resolve) => {
        resolve("rendered");
	});
}

async function InfiniteBlink()
{
	var textField = document.querySelector("#about_page");
	if (textField)
	{
		var field = textField.children[TEXT_FIELD];
		while (true)
		{
			QueueOutput(field, BLINK, g_terminalCharacter);
			await RenderOutput();			
		}
	}	
	return new Promise((resolve) => {
        resolve("rendered");
	});
}

RenderPage();
