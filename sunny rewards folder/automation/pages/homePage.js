
//const homePageData = require("../features/homePage_data.json");
class HomePage{
   constructor(page){
     this.page=page;
     // rewards button
     this.rewardsButtonClick = page.locator('//button[@class="rewards-button"]');

     // 'Available to spend' section locators.
        this.backgroundColor = page.locator('//section[@class="main-wrapper"]');
        this.availableToSpend = page.locator("//p[text()='Available to spend']");
        this.availableAmount = page.locator('//div[@class="side-left"]/child::h2');
        this.spendBtn = page.locator('//button[@class="send-btn"]');
        this.semiCircle = page.locator('//div[@class="semicircle-container"]');
        this.initialAmount = page.locator('//div[@class="d-flex justify-content-between position-relative"]/child::h3');
        this.availableToEarnAmount = page.locator('//h2[@class="mb-1"]');
        this.availableToEarnText = page.locator('//p[text()="Available to earn"]');
        this.finalAmount = page.locator('//div[@class="d-flex justify-content-between position-relative"]/child::h4');
       
        // 'Actions for you' section locators
        this.actionsForYou = page.locator('//h2[text()="Actions for you"]');
        this.clickOnActions = (num) => page.locator(`//div[@class='part-two'][${num}]`); 
        this.actionsForyouLogos = (logos)=>page.locator(`(//div[@class="img-fifth"])[${logos}]`);
        this.mainTitle =(title)=> page.locator(`//h2[text()="${title}"]`);
        this.readMoreBtn = page.locator('//button[text()="Read more"]');
        this.readLessBtn = page.locator('//button[text()="Read less"]');
        this.mainTitleDataSmall = page.locator("//div[@class='action-popup small']/h6");
        this.mainTitleDataHalf = page.locator("//div[@class='action-popup half']/h6");
        this.mainTitleDataFull = page.locator("//div[@class='action-popup full']/h6");
        this.subTitle = page.locator('//h5[text()="Terms of Service"]');
        this.subTitleData = page.locator('//div[@class="scroll"]//child::p');
        this.earningAmountForActions = (actionEarningAmount)=> page.locator(`(//div[@class="text border-green text-center"])[${actionEarningAmount}]`);
        this.enrollNowBtn = page.locator('//button[text()="Enroll now"]');
        this.seeAllActions = page.locator('//p[text()="See all actions"]');
        
        // enroll btn section

        this.enrollTitle = page.locator("//div[@class='Enroll-second']/h2");
        this.enrollTaskAmount = page.locator("//h3/h6");
        this.expiryDate = page.locator("//h3/h5[@class='mr-1 ml-1']");
        this.enrollTaskDescription = page.locator("//div[@class='enroll-second-section']/h6");
        this.backArrowBtn = page.locator("//div[@class='Enroll-first']");


        // spend button section
        this.availableUserBalance = page.frameLocator('iframe').getByText('Available balance$45.00Sidebar navigation');
        this.exitButton = page.locator('//button[@data-testid="exit-button"]');
       this.availableBalanceText = page.locator('//section//p[text()="Available balance"]');
    }
}
module.exports=HomePage ;