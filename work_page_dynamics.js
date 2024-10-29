var g_terminalCharacter = "|";
var g_workPageText = {};
var TEXT_FIELD = 0;
var P1_FIELD = 1;
var EXPERIENCE_FIELD = 3;
var BAR_FIELD_1 = 4;
var EXPERIENCE_1 = 5;
var DATE_1 = 6;
var DESCRIPTION_1 = 7;
var EXPERIENCE_2 = 9;
var DATE_2 = 10;
var DESCRIPTION_2 = 11;
var EXPERIENCE_3 = 13;
var DATE_3 = 14;
var DESCRIPTION_3 = 15;
var EXPERIENCE_4 = 17;
var DATE_4 = 18;
var DESCRIPTION_4 = 19;
var BLINK = g_outputType.BLINK;
var TEXT = g_outputType.TEXT;
var UNHIDE = g_outputType.UNHIDE;
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
	g_workPageText["work2"] = "Intel Corporation, Hillsboro, OR - Middleware Development Engineer"
	g_workPageText["date2"] = "2020 - 2024";
	g_workPageText["description2"] = "Led the development of several policies within Intel's Dynamic Tuning Technology (DTT), crucial in regulating thermals & balancing power among system components. Heavily involved in resolving critical customer issues & driving the team towards building a high quality product. 150+ features implemented & 150+ bugs resolved.";
	g_workPageText["work3"] = "Inseego Corporation, Eugene, OR - Web Development Intern"
	g_workPageText["date3"] = "2019 - 2019";
	g_workPageText["description3"] = " Led the backend migration to Amazon Web Services (AWS) for Inseego websites, allowing for quicker image retrieval and less storage overhead on servers. Automated 10+ manual tests, while uncovering/resolving key issues in the server side logic. Optimized database querying to speed up webpage loading by up to 200%.";
	g_workPageText["work4"] = "Oregon State University, Corvallis, OR - Undergraduate ML Research"
	g_workPageText["date4"] = "2017 - 2020";
	g_workPageText["description4"] = " Researched the ability of convolutional neural networks (CNN) to extract features from input data. Performed statistical analysis on datasets with the purpose of identifying high abundance species to focus research on. Executed & measured performance delta of the CNN’s extracted features against other feature collection methods.";
}

async function DisplayText()
{
	await RenderHeader();
	await RenderP1();
	await RenderExperienceText();
	await RenderBar();
	await RenderFirstExperience();
	await RenderSecondExperience();
	await RenderThirdExperience();
	await RenderFourthExperience();
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
		QueueOutput(field, BLINK, g_terminalCharacter);
		await RenderOutput();
	}	
	return new Promise((resolve) => {
        resolve("rendered");
	});
}

async function RenderBar()
{
	var textField = document.querySelector(g_workPageId);
	if (textField)
	{
		var field = textField.children[BAR_FIELD_1];
		QueueOutput(field, UNHIDE, 'block');
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

async function RenderSecondExperience()
{
	var textField = document.querySelector(g_workPageId);
	if (textField)
	{
		var field = textField.children[EXPERIENCE_2];
		QueueOutput(field, BLINK, g_terminalCharacter);
		QueueOutput(field, BLINK, g_terminalCharacter);
		QueueOutput(field, TEXT, g_workPageText["work2"]);
		QueueOutput(field, BLINK, g_terminalCharacter);
		
		field = textField.children[DATE_2];
		QueueOutput(field, BLINK, g_terminalCharacter);
		QueueOutput(field, TEXT, g_workPageText["date2"]);
		QueueOutput(field, BLINK, g_terminalCharacter);
		
		field = textField.children[DESCRIPTION_2];
		QueueOutput(field, BLINK, g_terminalCharacter);
		QueueOutput(field, TEXT, g_workPageText["description2"]);
		QueueOutput(field, BLINK, g_terminalCharacter);
		
		await RenderOutput();
	}	
	return new Promise((resolve) => {
        resolve("rendered");
	});
}

async function RenderThirdExperience()
{
	var textField = document.querySelector(g_workPageId);
	if (textField)
	{
		var field = textField.children[EXPERIENCE_3];
		QueueOutput(field, BLINK, g_terminalCharacter);
		QueueOutput(field, BLINK, g_terminalCharacter);
		QueueOutput(field, TEXT, g_workPageText["work3"]);
		QueueOutput(field, BLINK, g_terminalCharacter);
		
		field = textField.children[DATE_3];
		QueueOutput(field, BLINK, g_terminalCharacter);
		QueueOutput(field, TEXT, g_workPageText["date3"]);
		QueueOutput(field, BLINK, g_terminalCharacter);
		
		field = textField.children[DESCRIPTION_3];
		QueueOutput(field, BLINK, g_terminalCharacter);
		QueueOutput(field, TEXT, g_workPageText["description3"]);
		QueueOutput(field, BLINK, g_terminalCharacter);
		
		await RenderOutput();
	}	
	return new Promise((resolve) => {
        resolve("rendered");
	});
}

async function RenderFourthExperience()
{
	var textField = document.querySelector(g_workPageId);
	if (textField)
	{
		var field = textField.children[EXPERIENCE_4];
		QueueOutput(field, BLINK, g_terminalCharacter);
		QueueOutput(field, BLINK, g_terminalCharacter);
		QueueOutput(field, TEXT, g_workPageText["work4"]);
		QueueOutput(field, BLINK, g_terminalCharacter);
		
		field = textField.children[DATE_4];
		QueueOutput(field, BLINK, g_terminalCharacter);
		QueueOutput(field, TEXT, g_workPageText["date4"]);
		QueueOutput(field, BLINK, g_terminalCharacter);
		
		field = textField.children[DESCRIPTION_4];
		QueueOutput(field, BLINK, g_terminalCharacter);
		QueueOutput(field, TEXT, g_workPageText["description4"]);
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
