var g_terminalCharacter = "|";
var g_workPageText = {};
var TEXT_FIELD = 0;
var BLINK = g_outputType.BLINK;
var TEXT = g_outputType.TEXT;
var g_workPageId = "#work_page";

function RenderPage()
{
	LoadText();
	DisplayText();
}

function LoadText()
{
	g_workPageText["text1"] = "Ulises Zaragoza";
}

async function DisplayText()
{
	await RenderText();
	await InfiniteBlink();
}

async function RenderText()
{
	var textField = document.querySelector(g_workPageId);
	if (textField)
	{
		var field = textField.children[TEXT_FIELD];
		QueueOutput(field, BLINK, g_terminalCharacter);
		QueueOutput(field, BLINK, g_terminalCharacter);
		QueueOutput(field, TEXT, g_workPageText["text1"]);
		await RenderOutput();
	}	
	return new Promise((resolve) => {
        resolve("rendered");
	});
}

async function InfiniteBlink()
{
	var textField = document.querySelector(g_workPageId);
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
