//Login to Support connect portal 
import { test, expect, devices } from '@playwright/test';

test.use({...devices['Galaxy S8'] });
test("Moile Device Emulation Testing", async ({ page }) => {

    

    await page.goto("https://hdscorp--uat.sandbox.my.site.com/SupportConnect/");
    await page.waitForTimeout(10000);
    page.getByText("Log In").click();
    const title = await page.title();
    
    await page.waitForTimeout(10000);

    
    //console.log(Object.keys(devices));

   
});