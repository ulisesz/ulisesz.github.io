var g_splashPageText = {};
var g_terminalCharacter = "|";
var HEADER = 0;
var P1 = 2;
var P2 = 4;
var g_outputQueue = [];
var g_outputType = {
	BLINK: "Blink",
	TEXT: "Text"
};

function RunStartup()
{
	LoadSplashPageText();
	RenderSplashPageText();
}

function LoadSplashPageText()
{
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

async function RenderSplashPageText()
{
	await RenderHeader();
	await RenderP1();
	//RenderP2();
}

async function RenderHeader()
{
	var homeTextField = document.querySelector("#home_text");
	if (homeTextField)
	{
		var header = homeTextField.children[HEADER];
		QueueOutput(header, g_outputType.BLINK, g_terminalCharacter);
		QueueOutput(header, g_outputType.BLINK, g_terminalCharacter);
		QueueOutput(header, g_outputType.BLINK, g_terminalCharacter);
		QueueOutput(header, g_outputType.TEXT, g_splashPageText["header"]);
		QueueOutput(header, g_outputType.BLINK, g_terminalCharacter);
		QueueOutput(header, g_outputType.BLINK, g_terminalCharacter);
		QueueOutput(header, g_outputType.BLINK, g_terminalCharacter);
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
		QueueOutput(p1, g_outputType.BLINK, g_terminalCharacter);
		QueueOutput(p1, g_outputType.BLINK, g_terminalCharacter);
		QueueOutput(p1, g_outputType.TEXT, g_splashPageText["p1"]);
		QueueOutput(p1, g_outputType.BLINK, g_terminalCharacter);
		QueueOutput(p1, g_outputType.BLINK, g_terminalCharacter);
		await RenderOutput();
	}	
	return new Promise((resolve) => {
        resolve("rendered");
	});
}

function QueueOutput(htmlField, type, content)
{
	g_outputQueue.push({"Field": htmlField, "Type": type, "Content": content});
}

async function RenderOutput()
{
	for (const index in g_outputQueue)
	{
		var output = g_outputQueue[index];
		var type = output["Type"];
		var content = output["Content"]
		var field = output["Field"];
		var fieldText = field.innerText;
		
		if (type === g_outputType.BLINK)
		{
			await resolve1();
			field.innerText = fieldText + content;
			
			await resolve1();
			field.innerText = fieldText;
		}
		else if (type === g_outputType.TEXT)
		{
			for (const character of content)
			{
				await resolve2();
				field.textContent += character;
			}
		}
		else
		{
			console.log("Unsupported output type");
		}
	}
	
	FlushQueue();
	
	return new Promise((resolve) => {
        resolve("rendered");
	});
}

function FlushQueue()
{
	g_outputQueue = [];
}

function resolve1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolve1");
    }, 500);
  });
}

function resolve2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolve2");
    }, 100);
  });
}

RunStartup();
