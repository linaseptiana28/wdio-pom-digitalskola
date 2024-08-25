describe("test saucedemo", () => {
    it("test 1 - login successfully", async () => {
        await browser.url("https://www.saucedemo.com/");

        const usernameTextbox = await browser.$("#user-name");
        const passwordTextbox = await browser.$("#password");
        const loginButton = await browser.$('//input[@type="submit"]');

        await usernameTextbox.addValue("standard_user");
        await passwordTextbox.addValue("secret_sauce");
        await loginButton.click();

        await browser.pause(5000);
        await expect(browser).toHaveUrl(
            "https://www.saucedemo.com/inventory.html"
        );
        await expect(browser).toHaveTitle("Swag Labs");
    });

    it("test 2 - login with wrong password", async () => {
        await browser.url("https://www.saucedemo.com/");
        const usernameTextbox = await browser.$("#user-name");
        const passwordTextbox = await browser.$("#password");
        const loginButton = await browser.$('//input[@type="submit"]');

        await usernameTextbox.addValue("standard_user");
        await passwordTextbox.addValue("wrong password");
        await loginButton.click();

        const errorMessageBox = await browser.$(
            '//*[@id="login_button_container"]/div/form/div[3]/h3'
        );
        await expect(errorMessageBox).toContain(
            "Epic sadface: Username and password do not match any user in this service"
        );
    });
});
