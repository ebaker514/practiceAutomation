module.exports = {
    beforeEach: browser => {
        browser.url('https://alpha.yoodlize.com/')
    },
    after: browser => {
        browser.end()
    },
    'Navigate Categories': browser => {
        browser
        .useXpath()    
            .waitForElementVisible('(//*[contains(text(),"See all")])[1]')
            .assert.elementPresent('(//*[contains(text(),"See all")])[1]')  
            .click('(//*[contains(text(),"See all")])[1]')
            .waitForElementVisible('//body')
            .url('https://alpha.yoodlize.com/')
            .waitForElementVisible('(//*[contains(text(),"See all")])[2]')
            .assert.elementPresent('(//*[contains(text(),"See all")])[2]')  
            .click('(//*[contains(text(),"See all")])[2]')
            .waitForElementVisible('//body')
            .url('https://alpha.yoodlize.com/')
            .waitForElementVisible('(//*[contains(text(),"See all")])[3]')
            .assert.elementPresent('(//*[contains(text(),"See all")])[3]')  
            .click('(//*[contains(text(),"See all")])[3]')
            .waitForElementVisible('//body')
            .url('https://alpha.yoodlize.com/')
            .waitForElementVisible('(//*[contains(text(),"See all")])[4]')
            .assert.elementPresent('(//*[contains(text(),"See all")])[4]')  
            .click('(//*[contains(text(),"See all")])[4]')
            .waitForElementVisible('//body')
            .url('https://alpha.yoodlize.com/')
            .waitForElementVisible('(//*[contains(text(),"See all")])[5]')
            .assert.elementPresent('(//*[contains(text(),"See all")])[5]')  
            .click('(//*[contains(text(),"See all")])[5]')
            .waitForElementVisible('//body')
            .url('https://alpha.yoodlize.com/')
            .waitForElementVisible('(//*[contains(text(),"See all")])[6]')
            .assert.elementPresent('(//*[contains(text(),"See all")])[6]')  
            .click('(//*[contains(text(),"See all")])[6]')
            .waitForElementVisible('//body')
            .url('https://alpha.yoodlize.com/')
            .waitForElementVisible('(//*[contains(text(),"See all")])[7]')
            .assert.elementPresent('(//*[contains(text(),"See all")])[7]')  
            .click('(//*[contains(text(),"See all")])[7]')
            .waitForElementVisible('//body')
            .url('https://alpha.yoodlize.com/')
            .waitForElementVisible('(//*[contains(text(),"See all")])[8]')
            .assert.elementPresent('(//*[contains(text(),"See all")])[8]')  
            .click('(//*[contains(text(),"See all")])[8]')
            .waitForElementVisible('//body')
            .url('https://alpha.yoodlize.com/')
            .waitForElementVisible('(//*[contains(text(),"See all")])[9]')
            .assert.elementPresent('(//*[contains(text(),"See all")])[9]')  
            .click('(//*[contains(text(),"See all")])[9]')
            .waitForElementVisible('//body')
            .url('https://alpha.yoodlize.com/')
            .waitForElementVisible('(//*[contains(text(),"See all")])[10]')
            .assert.elementPresent('(//*[contains(text(),"See all")])[10]')  
            .click('(//*[contains(text(),"See all")])[10]')
            .waitForElementVisible('//body')
            .url('https://alpha.yoodlize.com/')
            .waitForElementVisible('(//*[contains(text(),"See all")])[11]')
            .assert.elementPresent('(//*[contains(text(),"See all")])[11]')  
            .click('(//*[contains(text(),"See all")])[11]')
            .waitForElementVisible('//body')
            .url('https://alpha.yoodlize.com/')
            .waitForElementVisible('(//*[contains(text(),"See all")])[12]')
            .assert.elementPresent('(//*[contains(text(),"See all")])[12]')  
            .click('(//*[contains(text(),"See all")])[12]')
            .waitForElementVisible('//body')
            .url('https://alpha.yoodlize.com/')
            .waitForElementVisible('(//*[contains(text(),"See all")])[13]')
            .assert.elementPresent('(//*[contains(text(),"See all")])[13]')  
            .click('(//*[contains(text(),"See all")])[13]')
            .waitForElementVisible('//body')
            .url('https://alpha.yoodlize.com/')
            .waitForElementVisible('(//*[contains(text(),"See all")])[14]')
            .assert.elementPresent('(//*[contains(text(),"See all")])[14]')  
            .click('(//*[contains(text(),"See all")])[14]')
            .waitForElementVisible('//body')
            .url('https://alpha.yoodlize.com/')
            .waitForElementVisible('(//*[contains(text(),"See all")])[15]')
            .assert.elementPresent('(//*[contains(text(),"See all")])[15]')  
            .click('(//*[contains(text(),"See all")])[15]')
            .waitForElementVisible('//body')            
    }
}