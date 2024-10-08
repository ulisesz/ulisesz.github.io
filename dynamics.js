var g_outputQueue = [];
var g_outputType = {
	BLINK: "Blink",
	TEXT: "Text"
};

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
		
		if (type === g_outputType.BLINK)
		{
			await resolve1();
			field.innerHTML += content;
			
			await resolve1();
			field.innerHTML = field.innerHTML.slice(0,-1);
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
    }, 350);
  });
}

function resolve2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolve2");
    }, 40);
  });
}
