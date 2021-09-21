const Page = require("./page");

class Dashboard extends Page{
    get shackbar () { return $('[id=app]') }
}

module.exports = new Dashboard();