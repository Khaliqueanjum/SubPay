package TestRunner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

 

@CucumberOptions(features="src/test/resources/Feature/SubPay.feature",glue= {"stepDefinition"}
//,plugin= {"pretty","html:JunitReports/htmlreport","json:JunitReports/jsonreport.json","junit:JunitReports/xmlreport.xml"}
,monochrome=true)
public class TestngRunner extends AbstractTestNGCucumberTests{
}
 