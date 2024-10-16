var g_terminalCharacter = "|";
var g_workPageText = {};
var TEXT_FIELD = 0;
var P1_FIELD = 1;
var EXPERIENCE_FIELD = 3;
var EXPERIENCE_1 = 5;
var DATE_1 = 6;
var DESCRIPTION_1 = 7;
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
	g_workPageText["experience"] = "Experience";
	g_workPageText["work1"] = "Intel Corporation, Hillsboro, OR - Technical Product Owner"
	g_workPageText["date1"] = "2024 - Present";
	g_workPageText["description1"] = "Promoted to role of Product Owner of DTT, after ~4 years in role as developer. Leading a team of 6+ engineers in delivering key piece of software to help maintain Intel's position with top OEMs. Breaking down stakeholder requests into workable pieces & aligning execution timelines to overall platform milestones.";
}

async function DisplayText()
{
	await RenderHeader();
	await RenderP1();
	await RenderExperienceText();
	await RenderFirstExperience();
	//await InfiniteBlink();
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

async function RenderExperienceText()
{
	var textField = document.querySelector(g_workPageId);
	if (textField)
	{
		var field = textField.children[EXPERIENCE_FIELD];
		QueueOutput(field, BLINK, g_terminalCharacter);
		QueueOutput(field, TEXT, g_workPageText["experience"]);
		QueueOutput(field, BLINK, g_terminalCharacter);
		await RenderOutput();
	}	
	return new Promise((resolve) => {
        resolve("rendered");
	});
}

async function RenderFirstExperience()
{
	var textField = document.querySelector(g_workPageId);
	if (textField)
	{
		var field = textField.children[EXPERIENCE_1];
		QueueOutput(field, BLINK, g_terminalCharacter);
		QueueOutput(field, TEXT, g_workPageText["work1"]);
		QueueOutput(field, BLINK, g_terminalCharacter);
		
		field = textField.children[DATE_1];
		QueueOutput(field, BLINK, g_terminalCharacter);
		QueueOutput(field, TEXT, g_workPageText["date1"]);
		QueueOutput(field, BLINK, g_terminalCharacter);
		
		field = textField.children[DESCRIPTION_1];
		QueueOutput(field, BLINK, g_terminalCharacter);
		QueueOutput(field, TEXT, g_workPageText["description1"]);
		QueueOutput(field, BLINK, g_terminalCharacter);
		
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
		//var field = textField.children[P1_FIELD];
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
