const Page = require("./page");

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

class RegisterPage extends Page{
    

    get inputName () { return $('[type=text]')}
    get inputEmail () { return $('[type=email]')}
    get inputOtp () { return $('[type=otp]')}
    get btnOtp () { return $('button[data-cy="btn-otp"]')}
    get inputPassword () { return $('[type=password]')}
    get inputConfirmPassword () { return $('[type=confirmPassword]')}
    get checkboxTerm () { return $('[class="v-input--selection-controls__input"]')}
    get btnSubmit () { return $('button[data-cy="btn-submit"]') }


    async register (username, email, isRealCall){
        await this.inputName.setValue(username);
        await this.inputEmail.setValue(email);
        if(isRealCall)
            await this.btnOtp.click();
        // await this.inputOtp.setValue(otp);
        // await this.inputPassword.setValue(pwd);
        // await this.inputConfirmPassword.setValue(confirmPwd);
        // await this.checkboxTerm.click();
        // await this.btnSubmit.click();
    }

    async register2 (otp, pwd, confirmPwd){
        await this.inputOtp.setValue(otp);
        await this.inputPassword.setValue(pwd);
        await this.inputConfirmPassword.setValue(confirmPwd);
        await this.checkboxTerm.click();
        await this.btnSubmit.click();
    }

    open (){
        return super.open('register');
    }
}

module.exports = new RegisterPage();