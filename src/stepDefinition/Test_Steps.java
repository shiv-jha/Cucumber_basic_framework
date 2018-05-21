package stepDefinition;

import java.io.File;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.*;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Test_Steps {
	public static WebDriver driver;	
	
	@Given("^User is on Login Page$")
	public void user_is_on_Login_Page() throws Throwable {
		//File file = new File("E:\\Selenium\\Generic Jars\\chromedriver.exe");
		//System.setProperty("webdriver.chrome.driver", file.getAbsolutePath());

        driver = new FirefoxDriver();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.get("http://www.newtours.demoaut.com");
		}

	@When("^User Navigate to LogIn Page$")
	public void user_Navigate_to_LogIn_Page() throws Throwable {
		driver.findElement(By.xpath(".//*[@id='account']/a")).click();
		}

	@When("^User enters UserName and Password$")
	public void user_enters_UserName_and_Password() throws Throwable {
		driver.findElement(By.name("userName")).sendKeys("mercury"); 	 
		driver.findElement(By.name("password")).sendKeys("mercury");
	    
		}
	
	@When("^User click on signin Button$")
	public void user_click_on_signin_Button() throws Throwable {
		driver.findElement(By.name("login")).click();
	    
		}

	@Then("^Message displayed Login Successfully$")
	public void message_displayed_Login_Successfully() throws Throwable {
		System.out.println("Login Successfully");
	}
	

	

}