import HomePage from "../pageobjects/home.page";
import LoginPage from "../pageobjects/login.page";
import CartPage from "../pageobjects/cart.page";

describe("sauce demo", () => {
    it("test 1 - successful login - page object based", async () => {
        await LoginPage.open();
        await LoginPage.login("standard_user", "secret_sauce");
        await HomePage.validateOnHomePage();
    });

    it("test 2 - open the inventory page successfully - page object based", async () => {
        // Open inventory page
        await HomePage.open();
        await expect(browser).toHaveUrl(
            "https://www.saucedemo.com/inventory.html"
        );
    });

    it("test 3 - add item to cart - page object based", async () => {
        // Verifikasi elemen-elemen di halaman utama
        await HomePage.validateOnHomePage();

        // Tambahkan item ke keranjang
        await HomePage.addToCartButton.click();
        const btnRemove1 = await $("#remove-sauce-labs-backpack");
        await expect(btnRemove1).toBeDisplayed();
    });

    it("test 4 - validate item sukses ditambahkan ke cart - page object based", async () => {
        // Klik ikon keranjang
        await HomePage.cartIcon.click();
        await browser.pause(5000);

        // check items
        await CartPage.checkItem(
            '#item_4_title_link>div[data-test="inventory-item-name"]',
            "Sauce Labs Backpack"
        );
    });
});
