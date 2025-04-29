import { test, expect } from "@playwright/test";

test("Signup Page - Valid User Journey", async ({ page }) => {
  //Navigate to the sign-up page
  await page.goto("https://appstag.fantasywl.in/sign-up");

  //Verify the title contains "Fansportiz"
  await expect(page).toHaveTitle(/Fansportiz/);

  //Locate input fields and signup button
  const usernameInput = page.locator("#username");
  const emailInput = page.locator("#email");
  const mobileInput = page.locator("#mobile-number");
  const referralInput = page.locator("#ReferralCode");
  const signUpButton = page.locator('button[type="submit"]');

  //Fill in valid credentials
  await usernameInput.fill("user01");
  await emailInput.fill("xyz@gmail.com");
  await mobileInput.fill("8160230115");
  await referralInput.fill("YZFC");

  //Scroll to bring the button into view 
  await signUpButton.scrollIntoViewIfNeeded();

  //Click the sign-up button after ensuring it's visible
  await signUpButton.waitFor({ state: "visible", timeout: 6000 });
  await signUpButton.click();

  //Wait for OTP input field to appear
  const otpInput = page.locator("#otp");
  await expect(otpInput).toBeVisible({ timeout: 6000 });

  //Enter dummy OTP
  await otpInput.fill("1234");

  //Define password and confirm password fields
  const passwordInput = page.locator("#password");
  const confirmPasswordInput = page.locator("#confirmPassword");
  const finalSubmitButton = page.locator('button[type="submit"]');

  //Fill in and confirm a valid password
  await passwordInput.fill("Test@123");
  await confirmPasswordInput.fill("Test@123");

  //Submit the password form
  await expect(finalSubmitButton).toBeVisible();
  await finalSubmitButton.click();

  //Wait for any post-submission navigation or completion
  await page.waitForLoadState("networkidle");
});
