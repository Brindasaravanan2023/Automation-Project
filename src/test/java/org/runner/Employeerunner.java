package org.runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\resources\\Featurefile\\Employeedetails.feature",

		glue = "org.stepdef", 
		monochrome = true, 
		plugin = { "pretty",
				"html:src\\test\\resources\\Reports\\result.html" }, 
		dryRun = false

)


public class Employeerunner {
	
	@AfterClass
	public static void output() {

		System.out.println("Success");

	}
	

}
