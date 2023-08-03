const {test,expect} =require("@playwright/test");
const HomePage = require('../pages/homePage');
const homePageData = require("../features/homePage_data.json");
//require("dotenv").config();
var responseBody;

test.beforeEach(async({page})=>{
    await test.step("launching the sunny Rewards application",async()=>{
             await page.setViewportSize({ width: 375, height: 667 }); // iPhone 6/7/
                for(let i=0; i<=2;i++){
                    await page.setViewportSize({ width: 375, height: 667 }); // iPhone 6/7/
                    await page.goto('https://app.dev.sunnyrewards.com/?consumer-code=cmr-b06c07a851064ab18d606405f6fd654a');
                    await page.waitForTimeout(5000);
                    await page.locator("//button[@class='rewards-button']").click()
                   if(i<2){
                    await page.waitForTimeout(5000);
                    await page.locator('//button[text()="Explore actions"]').click();
                }
                else{const homePageDetails =new HomePage(page);
        await homePageDetails.rewardsButtonClick.click();
       
                }
            }
        })
})

test.only("API GET request for consumer details", async({request,page})=>{

    const response= await request.post("https://api.dev.sunnyrewards.com/api/v1/bff/get-all-consumer-tasks",{
  
      data:{
        
            "tenantCode": "ten-ecada21e57154928a2bb959e8365b8b4",
            "consumerCode": "cmr-b06c07a851064ab18d606405f6fd654a"
      }});
  
       responseBody=await response.json();
        for(let i of responseBody.availableTasks){
            //console.log(i);
          console.log(i.taskReward.reward.rewardAmount)
        await page.locator("(//div[@class='main-wrap '])[1]").click();
        await expect(page.locator("//div[@class='modal-content-one text-white ']/child::h2")).toHaveText(i.taskDetail.taskHeader);
        await expect(page.locator("//div[@class='action-popup small']/h6")).toHaveText(i.taskDetail.taskDescription)
        await expect(page.locator("//div[@class='action-popup small']/h5")).toHaveText("Terms of Service")
        await expect(page.locator("//div[@class='action-popup small']/p")).toHaveText(i.taskDetail.termsOfServiceText)
        
        await page.locator('//button[text()="Read more"]').click();
         await expect(page.locator("//div[@class='action-popup half']/p")).toHaveText(i.taskDetail.termsOfServiceText)
       
        await page.locator('//button[text()="Read more"]').click();
        await expect(page.locator("//div[@class='action-popup full']/p")).toHaveText(i.taskDetail.termsOfServiceText)
        await page.locator('//button[text()="Read less"]').click();
        }
    })

test("verifying the visibility of head-start-earn title",async({page})=>{
    await test.step("verifying visibility of heading title",async()=>{
        await expect(page.locator('//p[@class="head-start-earn"]')).toHaveText('Start earning rewards.');
    })
})

test("verifying the visibility of head-start-earn sub-title",async({page})=>{
    await test.step("verifying visibility of heading sub-title",async()=>{
        await expect(page.locator('//div[@class="headings-one"]')).toHaveText('Complete healthy actions to start earning up to $500 in rewards.');
    })
})
test("verifying the 'actions for you section' ",async({page})=>{
    await test.step("verifying the visibility of 'Actions for you' title",async()=>{
        await expect(page.locator('//div[@class="trending"]/child::h2')).toHaveText('Actions for you');
    })
   
})

