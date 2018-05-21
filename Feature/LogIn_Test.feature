Feature: Login Action
Scenario: Successful Login with Valid Credentials
	Given User is on Login Page
	When User enters UserName and Password
	And User click on signin Button
	Then Message displayed Login Successfully