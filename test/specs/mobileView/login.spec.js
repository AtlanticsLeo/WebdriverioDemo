const LoginPage = require('../../pageobjects/login.page');
const MiscObject = require('../../pageobjects/misc.obj.js');
const VueInputParent = require('../../vueobjects/input.parent.js')

describe('Mobile-View login', () => {
    it("Checking for layout", async() =>{
        await LoginPage.open();
        const image = await $('#body-left');
        await expect(image).not.toBeDisplayed();
    })

    it('invalid email', async () => {
        await LoginPage.open();

        await LoginPage.login('email', 'Sheraton@1');
        const emailParent = await VueInputParent.getParent(LoginPage.inputEmail);
        await expect(emailParent).toHaveClass("error--text");
    });

    it('invalid email or password', async () => {
        await LoginPage.open();

        await LoginPage.login('email@email.com', 'Sheraton@1');
        const error = MiscObject.errorText;
        await expect(await error.isExisting);
    });

    it('login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('tv001@gmail.com', 'Sheraton@1');
        await expect(browser).toHaveUrlContaining("dashboard");
    });
});


