$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LogIn_Test.feature");
formatter.feature({
  "line": 1,
  "name": "Login Action",
  "description": "",
  "id": "login-action",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters UserName and Password",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User click on signin Button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Message displayed Login Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_Steps.user_is_on_Login_Page()"
});
formatter.result({
  "duration": 9515550764,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps.user_enters_UserName_and_Password()"
});
formatter.result({
  "duration": 211669628,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps.user_click_on_signin_Button()"
});
formatter.result({
  "duration": 2871579886,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps.message_displayed_Login_Successfully()"
});
formatter.result({
  "duration": 336833,
  "status": "passed"
});
});