const {test,expect} =require("@playwright/test");
const HomePage = require('../pages/homePage');
const homePageData = require("../features/homePage_data.json");
//require("dotenv").config();

test.beforeEach(async({page})=>{
    await test.step("launching the sunny Rewards application",async()=>{
        await page.setViewportSize({ width: 375, height: 667 }); // iPhone 6/7/
        await page.goto("https://app.dev.sunnyrewards.com/?consumer-code=cmr-c69905fc68ce4f36851f877bae38f22e");  
        const homePageDetails =new HomePage(page);
        await homePageDetails.rewardsButtonClick.click();
        await page.waitForTimeout(15000)
    })
})
test("clicking on rewards button",async()=>{
    await test.step('clicking on the "Rewards button"',async()=>{
       const homePageDetails =new HomePage(page);
           await homePageDetails.rewardsButtonClick.click();
           await page.waitForTimeout(15000)
       })
    })
    
  
test("Verifying data present in 'Available to spend'section",async({page})=>{   
    const homePageDetails =new HomePage(page); 
    await test.step("Verifying the visibility of 'Available to spend' text",async()=>{
       
         await expect(homePageDetails.availableToSpend).toHaveText("Available to spend");
     });
     await test.step("Verifying the 'Available to Spend' amount",async()=>{
        await expect(homePageDetails.availableAmount).toHaveText(homePageData.ActionsForYou.availableAmount);
        

    })
    await test.step("Verifying the visibility of 'Spend' button",async()=>{
        await expect(homePageDetails.spendBtn).toBeVisible();
    })
    await test.step("Verifying the visibility of 'Available to earn' graph",async()=>{
        await expect(homePageDetails.semiCircle).toBeVisible();
    })  
       
    await test.step("Verifying the'initial amount'in Available to earn section",async()=>{
        await expect(homePageDetails.initialAmount).toHaveText(homePageData.ActionsForYou.initialAmount);
    })  
        
    await test.step("Verifying the 'Available to earn' amount ",async()=>{
        await expect(homePageDetails.availableToEarnAmount).toHaveText(homePageData.ActionsForYou.availableToEarnAmount);
    })  
    
    await test.step("Verifying the visibility of 'Available to earn' text ",async()=>{
        await expect(homePageDetails.availableToEarnText).toHaveText("Available to earn");
    }) 

    await test.step("Verifying the'final amount'in Available to earn section",async()=>{
        await expect(homePageDetails.finalAmount).toHaveText(homePageData.ActionsForYou.finalAmount);
    }) 
 })

 test('verifying "Spend" section',async({page})=>{
            const homePageDetails =new HomePage(page); 
  
    await test.step("Click on 'Spend' button",async()=>{ 
        await homePageDetails.spendBtn.click();       
    })  
    await test.step("verifying the visibility of 'available balance'",async()=>{
        
        await page.waitForTimeout(20000);
       
       await expect(homePageDetails.availableBalanceText).toBeVisible();
    })  
    await test.step(" checking the visibility of the exit button",async()=>{
        await page.waitForTimeout(20000)
        await expect(homePageDetails.exitButton).toBeVisible();
    })
    await test.step("click on the exit button",async()=>{
           await page.waitForTimeout(2000)
           await homePageDetails.exitButton.click();
    })

 })

 test.only("Verifying data present in 'Actions for you' section",async({page})=>{   
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
             await expect(homePageDetails.mainTitle(i.title)).toBeVisible();
             
              // verifies the description of the main title.
             await expect(homePageDetails.mainTitleDataSmall).toHaveText(i.titleData);

             // clicks on read more btn
             await homePageDetails.readMoreBtn.click();

             // verifies half increased popup for description of main title
             await expect(homePageDetails.mainTitleDataHalf).toHaveText(i.titleData);

             // clicks on read more btn
             await homePageDetails.readMoreBtn.click()
          
             // verifies fully increased popup for description of main title
             await expect(homePageDetails.mainTitleDataFull).toHaveText(i.titleData);
            
              await page.waitForTimeout(3000)
              await homePageDetails.mainTitleDataFull.scrollIntoViewIfNeeded();
              // verifies the sub title.
              await expect(homePageDetails.subTitle).toHaveText(i.subTitle);
            
              // verifies the description of the sub title.
               await expect(homePageDetails.subTitleData).toHaveText(i.subTitleData);

               await expect(homePageDetails.earningAmountForActions(i.num)).toHaveText(i.actionEarningAmount)
               
               // clicks on read more btn
               await homePageDetails.readLessBtn.click()
               
               // visibility of enroll btn
               await expect(homePageDetails.enrollNowBtn).toBeVisible();
              
               // clicking on "Enroll now button".
              await homePageDetails.enrollNowBtn.click();
              // verifying enroll section
              await expect(homePageDetails.enrollTitle).toHaveText(i.title);
              await expect(homePageDetails.enrollTaskAmount).toHaveText(i.enrollEarningAmount);
              await expect(homePageDetails.expiryDate).toHaveText(i.ExpiryDate);
              await expect(homePageDetails.enrollTaskDescription).toHaveText(i.titleData);
              await page.waitForTimeout(2000);
              await homePageDetails.backArrowBtn.click();   
           }
          await expect(homePageDetails.seeAllActions).toBeVisible();
    });
})
