🔐 Fansportiz Signup and login  Page - Playwright Test

This project contains an end-to-end test using [Playwright](https://playwright.dev/) that automates the **valid user signup journey** for the [Fansportiz](https://appstag.fantasywl.in/) application.

📄 Test Scenarios Covered - Sign up page

The script performs the following steps:

1. Navigates to the signup page.
2. Fills in the username, email, mobile number, and referral code.
3. Clicks the sign-up button.
4. Enters a mock OTP.
5. Fills in and confirms a valid password.
6. Submits the form and waits for successful redirection.

📄 Test Scenarios Covered - login page

✅ Positive Test
Test Name: `Login Page - Successful Login with Valid Credentials`

1 Navigates to the login page
2 Enters a valid mobile number and password
3 Submits the login form
4 Verifies navigation to OTP verification page
5 Enters dummy OTP
6 Verifies successful redirection to the home page

❌ Negative Test *(commented out in code)*
Test Name: `Login Page - Unsuccessful Login with Invalid Credentials`

1 Enters invalid mobile number and password
2 Submits login form
3 Verifies that user remains on login page (no access granted)


# Install dependencies
npm install

Run the test
npx playwright test tests/signup.spec.js
npx playwright test tests/login.spec.js

✅ Test Requirements
Node.js (v16 or higher recommended)
Internet connection
Staging environment: https://appstag.fantasywl.in

🔐 Notes
The test currently uses a mock OTP (1234). If OTP validation is enforced, consider mocking or stubbing the OTP API for CI.
Update selectors (like #username, #otp, etc.) if the frontend changes.
The test assumes password rules like Test@123 are accepted.
