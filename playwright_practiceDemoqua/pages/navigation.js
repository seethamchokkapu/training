exports.NavigationPage = class NavigationPage {
  constructor(page) {
    this.page = page;
    this.webOptions = (linkText) =>
      page.getByRole("listitem").filter({ hasText: `${linkText}` });
    this.textBox = page.getByRole("listitem").filter({ hasText: "Text Box" });
    this.firstName = page.getByPlaceholder("Full Name");
    this.email = page.getByPlaceholder("name@example.com");
    this.currentAdress = page.getByPlaceholder("Current Address");
    this.perminentAdress = page.locator("#permanentAddress");
    this.submitButton = page.getByRole("button", { name: "Submit" });
  }

  async registration(linkText) {
    await this.webOptions(linkText).click();
  }
  async fillOptions() {
    await this.firstName.fill("seethamnaidu");
    await this.email.fill("naidu@12345");
    await this.currentAdress.fill("1-72");
    await this.perminentAdress.fill("1-72");
    await this.submitButton.click();
  }
};
