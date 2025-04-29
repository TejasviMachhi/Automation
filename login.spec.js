import { test, expect } from '@playwright/test';

test('Login Page - Successful Login with Valid Credentials', async ({ page }) => {
  //Navigate to the login page
  await page.goto('https://appstag.fantasywl.in/login');

  //Verify the title contains "Fansportiz"
  await expect(page).toHaveTitle('Fansportiz');

  //Locate input fields and login button
  const usernameInput = page.locator('#userName');
  const passwordInput = page.locator('#password');
  const loginButton = page.locator('button[type="submit"]');

  //Fill in valid credentials
  await usernameInput.fill('8160230115');
  await passwordInput.fill('Playwright@123');

 //Click the login button after ensuring it's visible
  await loginButton.click();

  //Wait for navigation or dashboard
  await page.waitForLoadState('networkidle');
  await expect(page).toHaveURL('https://appstag.fantasywl.in/verification');
  
  await page.waitForLoadState('networkidle');
  //Wait for OTP input field to appear (OTP verification page)
  const OTPField = page.locator('#otp')
  const VerifyBtn = page.locator('button[type="submit"]');

  //Enter dummy OTP
  await OTPField.fill('1234');
  await VerifyBtn.click();
  await expect(page).toHaveURL('https://appstag.fantasywl.in/home/cricket');

});

//Negative Test: Login with invalid credentials
/*test('Login Page - Unsuccessful Login with Invalid Credentials', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://appstag.fantasywl.in/login');

  // Verify the title
  await expect(page).toHaveTitle('Fansportiz');

  // Locate input fields and login button
  const usernameInput = page.locator('#userName');
  const passwordInput = page.locator('#password');
  const loginButton = page.locator('button[type="submit"]');

  // Fill in invalid credentials
  await usernameInput.fill('8160230999');
  await passwordInput.fill('WrongPass123');

  // Attempt to login
  await loginButton.click();
  await expect(page).toHaveURL('https://appstag.fantasywl.in/login');
});
*/

