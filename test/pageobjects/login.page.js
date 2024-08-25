import Page from "./page";
import { $, expect, browser } from "@wdio/globals";

class LoginPage extends Page {
    get usernameTextBox() {
        return $("#user-name");
    }

    get passwordTextBox() {
        return $("#password");
    }

    get loginButton() {
        return $('//input[@type="submit"]');
    }

    // get errorMessage() {
    //     return $('//*[@id="login_button_container"]/div/form/div[3]/h3');
    // }

    async inputUsername(username) {
        await this.usernameTextBox.setValue(username);
    }

    async inputPassword(password) {
        await this.passwordTextBox.setValue(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async login(username, password) {
        await this.inputUsername(username);
        await this.inputPassword(password);
        await this.clickLoginButton();
    }

    // async validateWrongPasswordDisplayed() {
    //     await expect(this.errorMessage).toHaveText(
    //         expect.stringContaining(
    //             "Epic sadface: Username and password do not match any user in this service"
    //         )
    //     );
    // }

    open() {
        return super.open("");
    }
}

export default new LoginPage();
