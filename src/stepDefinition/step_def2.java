package stepDefinition;

import cucumber.api.java.en.Then;

public class step_def2 {

	@Then("^Message displayed UnSuccessful$")
	public void message_displayed_unsuccessful() throws Throwable {
		System.out.println("Login not uccessful");
	}
	
}
