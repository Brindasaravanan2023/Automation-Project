package org.stepdef;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class FBloginStepdef {
	
static WebDriver driver;
	
	@Given("User is on the login page")
	public void user_is_on_the_login_page() {
		
		ChromeOptions co = new ChromeOptions();
		co.addArguments("--remote-allow-origins=*");
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver(co);
	    driver.get("https://www.facebook.com/");
	   driver.manage().window().maximize();
	  
	}
	       
	       
	  @When("User should enter {string} and {string}")
	  public void user_should_enter_and(String username, String password) {
		  WebElement user = driver.findElement(By.id("email"));
		  WebElement pass = driver.findElement(By.id("pass"));
		  user.sendKeys(username);
		  pass.sendKeys(password);
	}

	@When("User should enter login button")
	public void user_should_enter_login_button() {
		
		WebElement btn = driver.findElement(By.name("login"));
		
		btn.click();
	    
	}

	@Then("User Should verify the success message")
	public void user_Should_verify_the_success_message() {
	    
		System.out.println("Success");
}

}
