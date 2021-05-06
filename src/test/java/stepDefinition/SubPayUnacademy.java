package stepDefinition;


import java.io.File;
import java.io.FileInputStream;
import java.util.concurrent.TimeUnit;

import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import PageFactoryPOM.PayPOM;
import PageFactoryPOM.SubPOM;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;



public class SubPayUnacademy {
	WebDriver driver;

	@BeforeClass
	@Given("^User is on the Unacademy Course Page$")
	public void user_is_on_the_Unacademy_Course_Page() throws Throwable
	{
		System.setProperty("webdriver.chrome.driver", "F:\\CAPGEMINI\\Module 4\\Selenium Software\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		driver.get("https://unacademy.com/manage-goals");
		
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	driver.manage().window().maximize();
	}
	
	@Test(priority=2)
	@When("^User clicks on a particular Course$")
	public void user_clicks_on_a_particular_Course() throws Throwable 
	{
		String title=driver.getTitle();
		System.out.println(title);
		Assert.assertEquals(title, "Goals | Unacademy");
		 
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		SubPOM objA = PageFactory.initElements(driver,SubPOM.class );
	objA.SelectCourse();
		 driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		 
	 }
	
	@Test(priority=3)
	@Then("^Get Subscription Tab is displayed and clicking on it duration of the course is also displayed$")
 public void get_Subscription_Tab_is_displayed_and_clicking_on_it_duration_of_the_course_is_also_displayed() throws Throwable 
	{
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		SubPOM objA = PageFactory.initElements(driver,SubPOM.class );
		objA.PreSubscription();
		Thread.sleep(5000);
		driver.close();
		
	 }
	@Test(priority=4)
	@Given("^User is now on Course Duration Page$")
	public void user_is_now_on_Course_Duration_Page() throws Throwable 
	{
		System.setProperty("webdriver.chrome.driver", "F:\\CAPGEMINI\\Module 4\\Selenium Software\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.get("https://unacademy.com/goal/upsc-optional/NYHNH/subscribe");
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.manage().window().maximize();
		
		
	    
	}
	@Test(priority=5)
	@When("^User clicks on different Course Plan$")
	public void user_clicks_on_different_Course_Plan() throws Throwable 
	{
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		SubPOM objA = PageFactory.initElements(driver,SubPOM.class );
		
		 objA.CoursePlan(); 
	    
	    
	}
	@Test(priority=6)
	@When("^User Enters & Apply the Referral Code$")
	public void user_Enters_Apply_the_Referral_Code() throws Throwable 
	{
		SubPOM objA = PageFactory.initElements(driver,SubPOM.class );
		File credentials=new File("F:\\CAPGEMINI\\Module 4\\Selenium Software\\data.xlsx");
		FileInputStream fis=new FileInputStream(credentials);
		
		XSSFWorkbook wb=new XSSFWorkbook(fis);
		XSSFSheet sheet1=wb.getSheetAt(0);
		
		String code=sheet1.getRow(0).getCell(0).getStringCellValue();
		
		objA.Referral(code);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	 
	}

	@Test(priority=7)
	@Then("^User click to procees to payment$")
	public void user_click_to_procees_to_payment() throws Throwable {
		SubPOM objA = PageFactory.initElements(driver,SubPOM.class );
		objA.ProceedPay();
		Thread.sleep(8000);
		driver.close();
	   }

	@Test(priority=8)
	 @Given("^User is Redirected to Payment Page$")
 	public void user_is_Redirected_to_Payment_Page() throws Throwable {
	 	System.setProperty("webdriver.chrome.driver", "F:\\CAPGEMINI\\Module 4\\Selenium Software\\chromedriver_win32\\chromedriver.exe");
	 	driver = new ChromeDriver();
	 	driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	 	driver.get("https://unacademy.com/goal/upsc-optional/NYHNH/subscribe/XFB6EKCE4Q?referral_code=SAVE10");
	 	driver.manage().window().maximize();
	 	driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	    
	 }

	 
//	 @Test(priority=9)
//	@When("^User Enters the Mobile Number$")
//	public void user_Enters_the_Mobile_Number() throws Throwable {
//		 PayPOM objB = PageFactory.initElements(driver,PayPOM.class );
//		 objB.EnterMobileNumber();  
//		 driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
//	   
//	}
	 
	 @Test(priority=9)
	 @When("^User Enters the Mobile Number (\\d+)$")
	 public void user_Enters_the_Mobile_Number(String number) throws Throwable {
		 PayPOM objB = PageFactory.initElements(driver,PayPOM.class );
		 objB.EnterMobileNumber(number);  
		 driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	     
	 }
	 
	

	@Test(priority=10)
	 @When("^User clicks login button$")
	 public void user_clicks_login_button() throws Throwable 
	 {
		PayPOM objB = PageFactory.initElements(driver,PayPOM.class );
		objB.Login();
	    
	 }

	@Test(priority=11)
	 @When("^User Verify the OTP$")
	 public void user_Verify_the_OTP() throws Throwable 
	 {
	 	Thread.sleep(20000);
	 	PayPOM objB = PageFactory.initElements(driver,PayPOM.class );
	 	objB.Verify();
	 	driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	    
	    
	 }
 
	
	@Test(priority=12)
	 @When("^User verify the Different Payment Options$")
	 public void user_verify_the_Different_Payment_Options() throws Throwable 
	 {
		 PayPOM objB = PageFactory.initElements(driver,PayPOM.class );
	     objB.PaymentOptions();
	    
	 }

	
	@AfterClass
	 @Then("^Close the Browser$")
 	public void close_the_Browser() throws Throwable 
	 {
 	     driver.close();
 	}

}