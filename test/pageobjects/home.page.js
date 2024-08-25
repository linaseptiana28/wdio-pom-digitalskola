import Page from "./page";
import { $, expect, browser } from "@wdio/globals";

class HomePage extends Page {
    get cartIcon() {
        return $("#shopping_cart_container");
    }
    get addToCartButton() {
        return $("#add-to-cart-sauce-labs-backpack");
    }
    get productImage() {
        return $("#item_4_img_link");
    }

    async validateOnHomePage() {
        await expect(this.productImage).toBeExisting();
        await expect(this.cartIcon).toBeExisting();
        await expect(this.addToCartButton).toBeExisting();
    }

    open() {
        return super.open("inventory.html");
    }

    async checkItem(tag, text) {
        const element = await $(tag);
        await expect(element).toBeDisplayed();
        await expect(element).toHaveText(text);
    }
}

export default new HomePage();
