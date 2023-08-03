const { test, expect } = require('@playwright/test');

test.only("API post request for consumerPersonDetail", async({request})=>{

    const response= await request.post("http://k8s-bffapi-appingre-90599241d4-1481620643.us-east-2.elb.amazonaws.com/api/v1/bff/consumer-summary",{
  
      data:{

        "consumerId": 2,
      
        "consumerCode": "cmr-c69905fc68ce4f36851f877bae38f22e"
      
      }});
  
      const responseBody=await response.json();
  
      console.log(responseBody.consumerPersonDetail);
  
      expect(responseBody.consumerPersonDetail.firstName).toBe("Kailey");
      expect(responseBody.consumerPersonDetail.lastName).toBe("Joseph");
      expect(responseBody.consumerPersonDetail.memberSince).toBe("2023-06-02T17:44:54.013418");
})


test("verifying wallets in consumerWalletDetail", async({request})=>{
  await test.step("API get request for wallets in consumer wallet details",async()=>{
    const response= await request.post("http://k8s-bffapi-appingre-90599241d4-1481620643.us-east-2.elb.amazonaws.com/api/v1/bff/consumer-summary",{

    data:{

      "consumerId": 2,
    
      "consumerCode": "cmr-c69905fc68ce4f36851f877bae38f22e"
    
    }});

    const responseBody=await response.json();

    console.log(responseBody.consumerWalletDetail.wallets);
    let data = responseBody.consumerWalletDetail.wallets[0];

    // select * from wallet.wallet where wallet_id = 5;
     expect(data.walletId).toBe(5);
     expect(data.walletTypeId).toBe(1);
     expect(data.customerCode).toBe('cus-04c211b4339348509eaa870cdea59600');
     expect(data.sponsorCode).toBe('spo-c008f49aa31f4acd9aa6e2114bfb820e');
     expect(data.tenantCode).toBe('ten-ecada21e57154928a2bb959e8365b8b4');
     expect(data.walletCode).toBe('wal-1efe5b169e00463b9ab1bdd1b143790f');
     expect(data.walletName).toBe('CONSUMER_REWARD');
     expect(data.balance).toBe(100);
     expect(data.earnMaximum).toBe(500);
     expect(data.totalEarned).toBe(150);
     expect(data.leftToEarn).toBe(350);
})
})

test("verifying recentTransactions in consumerWalletDetail",async({request})=>{

  await test.step("API post request for Transactions in recentTransactions>consumerWalletDetails for transaction_id = 7",async()=>{
    const response= await request.post("http://k8s-bffapi-appingre-90599241d4-1481620643.us-east-2.elb.amazonaws.com/api/v1/bff/consumer-summary",{
  
    data:{
  
      "consumerId": 2,
    
      "consumerCode": "cmr-c69905fc68ce4f36851f877bae38f22e"
    
    }});
  
    const responseBody=await response.json();
  
    console.log(responseBody.consumerWalletDetail.recentTransactions[0].transaction);
    let data = responseBody.consumerWalletDetail.recentTransactions[0].transaction;
     expect(data.transactionId).toBe(7);
     expect(data.walletId).toBe(5);
     expect(data.transactionCode).toBe('txn-bb96c9a49a21469b97eada16817336fa');
     expect(data.transactionType).toBe('S');
     expect(data.previousBalance).toBe(200);
     expect(data.transactionAmount).toBe(50);
     expect(data.balance).toBe(150);
     expect(data.prevWalletTxnCode).toBe('5:txn-0a85d4280f9041b8aa9bb45990b260ef');



     // Transaction details of transaction_id = 7
     console.log(responseBody.consumerWalletDetail.recentTransactions[0].transactionDetail);
     let detailsData = responseBody.consumerWalletDetail.recentTransactions[0].transactionDetail;
     expect(detailsData.transactionId).toBe(7);
     expect(detailsData.transactionDetailId).toBe(7);
     expect(detailsData.transactionDetailType).toBe('REDEMPTION');
     expect(detailsData.consumerCode).toBe('cmr-c69905fc68ce4f36851f877bae38f22e');
     expect(detailsData.redemptionRef).toBe('GIFT_CARD_ORDER_ID_001');
     expect(detailsData.redemptionItemDescription).toBe('Home Depot gift card');
     expect(detailsData.taskRewardCode).toBe(null);
  })
  
  await test.step("API post request for Transactions in recentTransactions>consumerWalletDetails for transaction_id = 6",async()=>{
    const response= await request.post("http://k8s-bffapi-appingre-90599241d4-1481620643.us-east-2.elb.amazonaws.com/api/v1/bff/consumer-summary",{
  
    data:{
  
      "consumerId": 2,
    
      "consumerCode": "cmr-c69905fc68ce4f36851f877bae38f22e"
    
    }});
  
    const responseBody=await response.json();
  
    console.log(responseBody.consumerWalletDetail.recentTransactions[1].transaction);
    let data = responseBody.consumerWalletDetail.recentTransactions[1].transaction;
    expect(data.transactionId).toBe(6);
     expect(data.walletId).toBe(5);
     expect(data.transactionCode).toBe('txn-0a85d4280f9041b8aa9bb45990b260ef');
     expect(data.transactionType).toBe('A');
     expect(data.previousBalance).toBe(75);
     expect(data.transactionAmount).toBe(75);
     expect(data.balance).toBe(150);
     expect(data.prevWalletTxnCode).toBe('5:txn-32858438db464259802a448ee55e9d6f');


  // Transaction details of transaction_id = 6
  console.log(responseBody.consumerWalletDetail.recentTransactions[1].transactionDetail);
  let detailsData = responseBody.consumerWalletDetail.recentTransactions[1].transactionDetail;
  expect(detailsData.transactionId).toBe(6);
  expect(detailsData.transactionDetailId).toBe(6);
  expect(detailsData.transactionDetailType).toBe('REWARD');
  expect(detailsData.consumerCode).toBe('cmr-c69905fc68ce4f36851f877bae38f22e');
  expect(detailsData.taskRewardCode).toBe('trw-8a154edc602c49efb210d67a7bfe22b4');
  expect(detailsData.redemptionRef).toBe(null);
  expect(detailsData.redemptionItemDescription).toBe(null);
  


  })

  await test.step("API post request for Transactions in recentTransactions>consumerWalletDetails for transaction_id = 4",async()=>{
    const response= await request.post("http://k8s-bffapi-appingre-90599241d4-1481620643.us-east-2.elb.amazonaws.com/api/v1/bff/consumer-summary",{
  
    data:{
  
      "consumerId": 2,
    
      "consumerCode": "cmr-c69905fc68ce4f36851f877bae38f22e"
    
    }});
  
    const responseBody=await response.json();
  
    console.log(responseBody.consumerWalletDetail.recentTransactions[2].transaction);
    let data = responseBody.consumerWalletDetail.recentTransactions[2].transaction;
    expect(data.transactionId).toBe(4);
     expect(data.walletId).toBe(5);
     expect(data.transactionCode).toBe('txn-32858438db464259802a448ee55e9d6f');
     expect(data.transactionType).toBe('A');
     expect(data.previousBalance).toBe(0);
     expect(data.transactionAmount).toBe(75);
     expect(data.balance).toBe(75);
     expect(data.prevWalletTxnCode).toBe('5:txn-00000000000000000000000000000000');

     // Transaction details of transaction_id = 4
  console.log(responseBody.consumerWalletDetail.recentTransactions[2].transactionDetail);
  let detailsData = responseBody.consumerWalletDetail.recentTransactions[2].transactionDetail;
  expect(detailsData.transactionId).toBe(4);
  expect(detailsData.transactionDetailId).toBe(4);
  expect(detailsData.transactionDetailType).toBe('REWARD');
  expect(detailsData.consumerCode).toBe('cmr-c69905fc68ce4f36851f877bae38f22e');
  expect(detailsData.taskRewardCode).toBe('trw-dabc84b9ec21436dacc5469cdd04d771');
  expect(detailsData.redemptionRef).toBe(null);
  expect(detailsData.redemptionItemDescription).toBe(null);
  })
})


