var g_terminalCharacter = "|";
var g_workPageText = {};
var TEXT_FIELD = 0;
var P1_FIELD = 1;
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
	g_workPageText["text2"] = "Product Owner for Intel's Power/Thermal framework software with +90% adoption rate on mobile platforms by industry leading OEM/ODMs."
	g_workPageText["text3"] = " Passionate for building high quality software and driving team success through collaboration, demonstration & coordination.";
}

async function DisplayText()
{
	await RenderHeader();
	await RenderP1();
	await InfiniteBlink();
}

async function RenderHeader()
{
	var textField = document.querySelector(g_workPageId);
	if (textField)
	{
		var field = textField.children[TEXT_FIELD];
		QueueOutput(field, BLINK, g_terminalCharacter);
		QueueOutput(field, BLINK, g_terminalCharacter);
		QueueOutput(field, TEXT, g_workPageText["text1"]);
		QueueOutput(field, BLINK, g_terminalCharacter);
		await RenderOutput();
	}	
	return new Promise((resolve) => {
        resolve("rendered");
	});
}

async function RenderP1()
{
	var textField = document.querySelector(g_workPageId);
	if (textField)
	{
		var field = textField.children[P1_FIELD];
		QueueOutput(field, BLINK, g_terminalCharacter);
		QueueOutput(field, BLINK, g_terminalCharacter);
		QueueOutput(field, TEXT, g_workPageText["text2"]);
		QueueOutput(field, BLINK, g_terminalCharacter);
		QueueOutput(field, TEXT, g_workPageText["text3"]);
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
		var field = textField.children[P1_FIELD];
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
