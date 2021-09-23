const MockServer = require('../stubobjects/mock.server.js');
const RegisterPage = require('../pageobjects/register.page.js');
const VueInputParent = require('../vueobjects/input.parent.js');


describe("Register unit test", () =>{
    it('sucessful register account', async() =>{
        await MockServer.defaultRespond();
        await RegisterPage.open();
        await RegisterPage.register("Username", "email@email.com", false);
        await RegisterPage.register2(010101, "password", "password");
        // await expect(browser).toHaveUrlContaining("error/403");
        await expect(browser).not.toHaveUrlContaining("register");
    })

    it('invalid email', async()=>{
        await RegisterPage.open();
        await RegisterPage.register("Username", "email", false);
        await RegisterPage.register2(010101, "password", "password");
        const emailParent = await VueInputParent.getParent(RegisterPage.inputEmail);
        await expect(emailParent).toHaveClass("error--text");
    })

    it('password not long enough', async()=>{
        await RegisterPage.open();
        await RegisterPage.register("Username", "email@email.com", false);
        await RegisterPage.register2(010101, "pwd", "pwd");
        const pwdParent = await VueInputParent.getParent(RegisterPage.inputPassword);
        await expect(pwdParent).toHaveClass("error--text");
        // await expect(pwdParent).toHaveAttrContaning("class", "error")
        // await expect(pwdParent).toHaveAttr("class", "error--text")
    })

    // it("use real otp", async() =>{
    //     const emailName = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    //     await RegisterPage.open();
    //     await RegisterPage.register("Username", emailName + "@email.com", true);
    //     await browser.pause(1000)
    //     await browser.newWindow('https://dev-hk-mail.usdp.io/monitor');
    //     await browser.switchWindow('Inbucket Monitor');
    //     const table = await $('tbody');
    //     const email = await ( table.$$('tr')[0]);
    //     await email.click();
    //     const otp = await $(`[style="margin: 0 auto;width: 321px;padding: 30px;color: #2733ff;text-align: center;font-size: 24px;font-weight: bold;font-family: 'Poppins', sans-serif;"]`).getText();
    //     // otp.saveScreenshot('./otp.png');
    //     console.log(otp);
    //     await browser.switchWindow('Signitory');
    //     await RegisterPage.register2(otp, "password", "password");
    //     await expect(browser).toHaveUrlContaining("dashboard");
    //     // await browser.pause(30000)

    // })
})