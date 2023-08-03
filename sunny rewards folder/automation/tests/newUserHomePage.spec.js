const {test,expect} =require("@playwright/test");
 const HomePage = require('../pages/homePage');
const homePageData = require("../features/homePage_data.json");
test("launching url for new user",async({page})=>{
    await test.step("launching for multiple times",async()=>{
        for(let i=0; i<=2;i++){
            await page.setViewportSize({ width: 375, height: 667 }); // iPhone 6/7/
            await page.goto('https://app.dev.sunnyrewards.com/?consumer-code=cmr-377c564d44014f8680720ce78bdaec88');
            await page.waitForTimeout(1000)
           if(i<2){
            await page.locator('//button[text()="Explore actions"]').click();
            await page.waitForTimeout(2000)
            await expect(page.locator('//p[text()="Start earning rewards."]')).toBeVisible();
        }
        else{
            const homePageDetails =new HomePage(page); 
            await expect(page.locator('//p[text()="Start earning rewards."]')).toBeVisible();
            await expect(page.locator('//p[text()="Complete healthy actions to start earning up to "]'))
                        .toHaveText('Complete healthy actions to start earning up to $400 in rewards.')
            await expect(homePageDetails.semiCircle).toBeVisible();
            await expect(page.locator('//h3[@class="d-flex justify-content-center align-items-center"]')).toHaveText("$0");
            await expect(homePageDetails.availableToEarnAmount).toHaveText("$400");
            await expect(homePageDetails.availableToEarnText).toHaveText("Available to earn");
            await expect(page.locator('//h4[@class="d-flex justify-content-center align-items-center"]')).toHaveText("$ 400");
        }
          
        }
        
    })

})

