var g_terminalCharacter = "|";
var g_pageText = {};
var CONTACT_FIELD = 0;
var BLINK = g_outputType.BLINK;
var TEXT = g_outputType.TEXT;

function GetPageObject()
{
	return document.querySelector("#contact_page");
}

function RenderPage()
{
	LoadText();
	DisplayText();
}

function LoadText()
{
	g_pageText["text1"] = "contact:";
	g_pageText["text2"] = " https://www.linkedin.com/in/ulises-zaragoza ";
}

async function DisplayText()
{
	await RenderText();
	await CreateContactHyperlink();
	await InfiniteBlink();
}

async function RenderText()
{
	var textField = GetPageObject();
	if (textField)
	{
		var field = textField.children[CONTACT_FIELD];
		QueueOutput(field, BLINK, g_terminalCharacter);
		QueueOutput(field, BLINK, g_terminalCharacter);
		QueueOutput(field, TEXT, g_pageText["text1"]);
		QueueOutput(field, BLINK, g_terminalCharacter);
		
		field = textField.children[CONTACT_FIELD];
		QueueOutput(field, TEXT, g_pageText["text2"]);
		await RenderOutput();
	}	
	return new Promise((resolve) => {
        resolve("rendered");
	});
}

async function CreateContactHyperlink()
{
	var textField = GetPageObject();
	if (textField)
	{
		var field = textField.children[CONTACT_FIELD];
		var content = field.innerHTML;
		var urlPattern = /\b(https?:\/\/[^\s]+)\b/g;
		var newContent = content.replace(urlPattern, '<a href="$1">$1</a>');
		field.innerHTML = newContent;
	}
}

async function InfiniteBlink()
{
	var textField = GetPageObject();
	if (textField)
	{
		var field = textField.children[CONTACT_FIELD];
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


