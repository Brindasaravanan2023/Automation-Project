package org.runner;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;


@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\resources\\Featurefile\\FBloginpage.feature",

		glue = "org.stepdef", 
		monochrome = true, 
		plugin = { "pretty",
				"html:src\\test\\resources\\Reports\\result.html" },
		dryRun = false

)

public class FBloginrunner {
	
	@AfterClass
	public static void output() {
		System.out.println("Sucess");

	}
		

	}

