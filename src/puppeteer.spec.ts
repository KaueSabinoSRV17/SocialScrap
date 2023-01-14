import { describe, expect, it } from 'vitest'
import puppeteer, { executablePath } from 'puppeteer'

describe('Puppeteer Integration', async () => {

    it('should connect sucessfully to the Linkedin page', async () => {

       const app = await puppeteer.launch()
       const page = await app.newPage()

       await page.goto('https://www.linkedin.com/in/kaue-villa%C3%A7a-de-almeida/')

       await page.waitForNavigation()

       const html = await page.$eval('html', element => element.innerHTML)

       expect(html)
        .toBeTruthy()


        
    })

})
