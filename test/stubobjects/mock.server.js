class MockServer {

    async defaultRespond(){
        const strictMock = await browser.mock('**' + "/api/register")

        strictMock.respond({
            ret: "0"
        })
    }

}

module.exports = new MockServer();