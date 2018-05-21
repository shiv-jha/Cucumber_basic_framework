$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LogIn_Test.feature");
formatter.feature({
  "line": 1,
  "name": "Login Action",
  "description": "",
  "id": "login-action",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "User enters UserName and Password",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User click on signin Button",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Message displayed Login Successfully",
  "keyword": "Then "
});
});