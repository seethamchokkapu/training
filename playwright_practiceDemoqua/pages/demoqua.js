exports.HomePage=class Homepage{
    constructor(page){
        this.page=page;  
        this.checkBoxAction= page.getByRole('button', { name: 'Toggle' });
        this.desktopOption= page.locator('label').filter({ hasText: 'Desktop' }).locator('svg').first();
        this.yesOption= page.getByText('Yes');    
 };
     
    
    // async checkBoxActionsFunction(){
    //     await this.checkBoxAction.click();
    //     await this.desktopOption.click();
    // }
    // async radioButtonFunction(){
       
      
    //     await this.yesOption.click();
    // }
    // async webTablesFunction(){
      
    // } 
}





