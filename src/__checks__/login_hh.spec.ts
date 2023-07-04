import { test } from '@playwright/test'
const speakeasy = require('speakeasy')
const assert = require('chai').assert

test('visit page and take screenshot', async ({ page }) => {

    const response = await page.goto(process.env.ENVIRONMENT_URL || 'https://hhtestnet.com')

    await page.click('.button_button__QYuyc')
    await page.type('input[type="email"]', 'battcamm+10@mail.com')
    await page.type('input[type="password"]', '030201Qash')
    await page.click('.button')

    var token = speakeasy.totp({
      secret: "VOFOM6KKJAVW2J5Q",
    });

    await page.type('input[type="text"]', token)
    await page.click('.button')
    assert.equal(page.url, "https://accounts.hhtestnet.com/accounts/musicgun10/edit" )


    expect(response.status(), 'should respond with correct status code').toBeLessThan(400)
})
