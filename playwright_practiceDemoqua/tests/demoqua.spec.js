const {test,expect}=require("@playwright/test");
const {HomePage}=require("../pages/demoqua");
require("dotenv").config();
const optionsData=require("../fixtures/data/data.json");
const { NavigationPage } = require("../pages/navigation");
test("test",async({page})=>{
    const homePage=new HomePage(page);
    await page.goto(process.env.BASE_URL);
   
    for (const iterator of optionsData.data) {
        console.log(iterator);
        await page.pause();
        const navigationPage=new NavigationPage(page)
        await navigationPage.registration(iterator);
        // await navigationPage.fillOptions();
        //  await homePage.checkBoxActionsFunction();
        // await homePage.radioButtonFunction();
        // await homePage.webTablesFunction();
    }
})