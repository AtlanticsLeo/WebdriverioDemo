const MockServer = require('../stubobjects/mock.server.js');
const RegisterPage = require('../pageobjects/register.page.js');
const VueInputParent = require('../vueobjects/input.parent.js');


describe("Register with real", () =>{

    it("use real otp", async() =>{
        const emailName = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
        await RegisterPage.open();
        await RegisterPage.register("Username", emailName + "@email.com", true);
        await browser.pause(1000)
        await browser.newWindow('https://dev-hk-mail.usdp.io/monitor');
        await browser.switchWindow('Inbucket Monitor');
        const table = await $('tbody');
        const email = await ( table.$$('tr')[0]);
        await email.click();
        const otp = await $(`[style="margin: 0 auto;width: 321px;padding: 30px;color: #2733ff;text-align: center;font-size: 24px;font-weight: bold;font-family: 'Poppins', sans-serif;"]`).getText();
        // otp.saveScreenshot('./otp.png');
        console.log(otp);
        await browser.switchWindow('Signitory');
        await RegisterPage.register2(otp, "password", "password");
        await expect(browser).toHaveUrlContaining("dashboard");

    })
})