describe('Saucedemo Login test', () => {
    it('successful login ', async () => {
        await browser.url('https://www.saucedemo.com/')

        const usernameTextbox = await browser.$("#user-name")  
        const passwordTextbox = await browser.$("#password")
        const loginbutton = await browser.$("#login-button")

        await usernameTextbox.setValue("standard_user")
        await passwordTextbox.setValue("secret_sauce")
        await loginbutton.click()
        await browser.pause(5000)

        const Beradadipage = await $('.inventory_list');
        await expect(Beradadipage).toBeDisplayed();
        await browser.pause(5000)


        const tambahitem = await $('//*[@id="add-to-cart-sauce-labs-backpack"]');
        await tambahitem.click()
        await browser.pause(5000)

        const suksestambahchart = await $('.shopping_cart_badge');
        await expect(suksestambahchart).toHaveTextContaining('1');
        await browser.pause(5000)
        await browser.pause(5000)
    });
});