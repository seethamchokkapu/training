const {test,expect} =require("@playwright/test");
const HomePage = require('../pages/homePage');
const homePageData = require("../features/homePage_data.json");
require("dotenv").config();
test.beforeEach(async({page})=>{
    await test.step("launching the sunny Rewards application",async()=>{
        await page.setViewportSize({ width: 375, height: 667 }); // iPhone 6/7/
        await page.goto("https://app.dev.sunnyrewards.com/?consumer-code=cmr-8bad59d5a468476d9f54135e6fb57e32");
        await page.waitForTimeout(5000)
    })
})


test("Verifying data present in 'Available to spend'section",async({page})=>{   
    const homePageDetails =new HomePage(page); 

    await test.step("verifying backgrond colour Available to earn section",async()=>{
        await expect(homePageDetails.backgroundColor).toHaveCSS("background-color","rgb(30, 121, 53)")
    })
     await test.step("Verifying the visibility of 'Available to spend' text",async()=>{
         await expect(homePageDetails.availableToSpend).toHaveText("Available to spend");
     });
     await test.step("Verifying the 'Available to Spend' amount",async()=>{
        await expect(homePageDetails.availableAmount).toHaveText("$90");
    })
    await test.step("Verifying the visibility of 'Spend' button",async()=>{
        await expect(homePageDetails.spendBtn).toBeVisible();
    })  
    await test.step("Verifying the visibility of 'Available to earn' graph",async()=>{
        await expect(homePageDetails.semiCircle).toBeVisible();
    })  
       
    await test.step("Verifying the'initial amount'in Available to earn section",async()=>{
        await expect(homePageDetails.initialAmount).toHaveText("$0");
    })  
        
    await test.step("Verifying the 'Available to earn' amount ",async()=>{
        await expect(homePageDetails.availableToEarnAmount).toHaveText("$100");
    })  
    
    await test.step("Verifying the visibility of 'Available to earn' text ",async()=>{
        await expect(homePageDetails.availableToEarnText).toHaveText("Available to earn");
    }) 

    await test.step("Verifying the'final amount'in Available to earn section",async()=>{
        await expect(homePageDetails.finalAmount).toHaveText("$200");
    }) 
 })


 test("Verifying data present in 'Actions for you' section",async({page})=>{   
    const homePageDetails =new HomePage(page); 
   
    await test.step("Verifying the visibility of 'Actions for you' heading",async()=>{
       await expect(homePageDetails.actionsForYou).toHaveText('Actions for you');
    });
    await test.step("for trail",async()=>{
        
           for(let i of homePageData.ActionsForYou.actionDetails){
              await page.waitForTimeout(3000)
            
              // checks the visibility of actions for you section logos .
              await expect(homePageDetails.actionsForyouLogos(i.num)).toBeVisible();
             
              // clicks on actions. .
             await homePageDetails.clickOnActions(i.num).click();
           
             // verifies the main title.
             await page.waitForTimeout(2000)
            // await expect(homePageDetails.mainTitle(i.title)).toBeVisible();
           
             // verifies the description of the main title.
             await expect(homePageDetails.mainTitleData).toHaveText(i.titleData);
          
              // verifies the sub title.
              await expect(homePageDetails.subTitle).toHaveText(i.subTitle);
            
              // verifies the description of the sub title.
               await expect(homePageDetails.subTitleData).toHaveText(i.subTitleData);

               await expect(homePageDetails.earningAmountForActions(i.num)).toHaveText(i.actionEarningAmount)
               
               await expect(homePageDetails.enrollNowBtn).toBeVisible();
               
               await page.waitForTimeout(2000);
             // clicking on close.
               await homePageDetails.clickOnClose.click();

              
           }
           await expect(homePageDetails.seeAllActions).toBeVisible();
    });
})
