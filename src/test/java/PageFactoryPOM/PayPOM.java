package PageFactoryPOM;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class PayPOM {
	
	WebDriver driver;
	
/******Payment*****/
	
	@FindBy(xpath="//*[@id='__next']/div[1]/div/div[1]/div/div[1]/div[2]/div/input")
	WebElement EnterMobile;
	
	@FindBy(xpath="//*[@id='__next']/div[1]/div/div[1]/div/div[1]/div[3]/button")
	WebElement Login;
	
	@FindBy(xpath="//*[@id='__next']/div[1]/div/div[1]/div/div[1]/div[2]/button")
	WebElement Verify;
	
	@FindBy(xpath="//*[@id='__next']/div[1]/div/div[1]/div[2]/div/div[1]/div[2]")
	WebElement PaymentOptionA;
	
	@FindBy(xpath="//*[@id='__next']/div[1]/div/div[1]/div[2]/div/div[1]/div[3]")
	WebElement PaymentOptionB;
	
	@FindBy(xpath="//*[@id='__next']/div[1]/div/div[1]/div[2]/div/div[1]/div[4]")
	WebElement PaymentOptionC;
	
	@FindBy(xpath="//*[@id='__next']/div[1]/div/div[1]/div[2]/div/div[1]/div[5]")
	WebElement PaymentOptionD;
	
	/********Methods*******/
	
	public PayPOM(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	public void EnterMobileNumber(String number) 
	{
		EnterMobile.sendKeys(number);

	}
	
	public void Login()
	{
		Login.click();
	}
	
	public void Verify()
	{
		Verify.click();
	}
	
	public void PaymentOptions() throws Throwable
	{
		PaymentOptionA.click();
		Thread.sleep(5000);
		PaymentOptionB.click();
		Thread.sleep(5000);
		PaymentOptionC.click();
		Thread.sleep(5000);
		PaymentOptionD.click();
		Thread.sleep(5000);
	}

}
