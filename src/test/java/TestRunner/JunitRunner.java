package TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/Feature/SubPay.feature"
,glue= {"stepDefinition"}
,plugin= {"pretty","html:JunitReports/htmlreport",
		"json:JunitReports/jsonreport.json",
		"junit:JunitReports/xmlreport.xml",
		"com.cucumber.listener.ExtentCucumberFormatter:JunitReports/cucumber-reports/report.html"}
,monochrome=true)
public class JunitRunner {


	
} 


