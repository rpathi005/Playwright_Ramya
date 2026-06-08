//Login to Support connect portal 
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.ts';
import { TestConfig } from '../test.config.ts'
import { HomePage } from '../pages/SupportConnectHomePage.ts'
import { CaseListPage } from '../pages/CaseListPage.ts';

const testConfig = new TestConfig();


test('Support Connect Product Support Case Creation', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const caseListPage = new CaseListPage(page);

    //Navigate to Support Connect URL 
    await page.goto(testConfig.appUrl);

    await loginPage.loginbtn.click();
    //Login with a method
    await loginPage.login(testConfig.email, testConfig.pwd);

    //Verify Home page Login
    const headerTitle: string | null = await loginPage.homeHeader.textContent();
    expect(headerTitle).toContain("Hitachi Vantara Support Connect");

    await homePage.clickMyAccountSubTab();

    //Clicking on New Case button
    await homePage.newCaseBtn.click();
    await caseListPage.ProductSupportCase.click();
    //Verify case creation page 1
    expect(await page.title()).toContain("Create Case");
    await caseListPage.prodSearchBox.click();
    await caseListPage.prodSearchBox.fill(testConfig.productName);
    await page.waitForTimeout(2000);
    await caseListPage.searchResults.click();
    await page.waitForTimeout(4000);
    await caseListPage.nextBtnPg1.click();
    await caseListPage.hardwareSelection(testConfig.testSummary, testConfig.testDescription);
    await caseListPage.selectOptionForBusinessImpact(testConfig.selectOptionForBusinessImpact);
    await caseListPage.selectOptionForProductionEnv(testConfig.selectOptionForProductionEnv);
    await caseListPage.selectOptionForUsersEffected(testConfig.selectOptionForUsersEffected);
    await caseListPage.nextBtnPg1.click();
    await caseListPage.selectOptionForAvailability(testConfig.availabilityOptions1);
    await caseListPage.nextBtnPg1.click();
    await caseListPage.submitBtn.click();
       
})