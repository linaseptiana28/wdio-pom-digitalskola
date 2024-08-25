import Page from "./page";
import { $, expect, browser } from "@wdio/globals";

class CartPage extends Page {
    get checkoutButton() {
        return $("checkout");
    }
    get continueShoppingButton() {
        cart_footer;
    }

    open() {
        return super.open("cart.html");
    }

    async checkItem(tag, text) {
        const element = await $(tag);
        await expect(element).toBeDisplayed();
        await expect(element).toHaveText(text);
    }
}

export default new CartPage();
