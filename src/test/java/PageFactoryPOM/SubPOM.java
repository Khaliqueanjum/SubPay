package PageFactoryPOM;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SubPOM {
	
	WebDriver driver;
	
	
	/*****Subscription*****/
	
	@FindBy(xpath="//*[@id=\"QUQWY\"]/div/div[1]/div/div")
	WebElement SelectCourse;
	
	@FindBy(xpath="//*[@id='preSubscribedBlocks']/div/button[2]")
	WebElement GetSubscription;
	
	@FindBy(xpath="/html/body/div/div[1]/div/div[2]/div[2]/div[3]/div[1]")
	WebElement CoursePlanA;
	
	@FindBy(xpath="/html/body/div/div[1]/div/div[2]/div[2]/div[2]")
	WebElement CoursePlanB;
	
	@FindBy(xpath="/html/body/div/div[1]/div/div[2]/div[3]/div/div/div/input")
	WebElement EnterReferral;
	
	@FindBy(xpath="/html/body/div/div[1]/div/div[2]/div[3]/div/div/div/div/h6")
	WebElement ApplyReferral;
	
	@FindBy(xpath="//*[@id='__next']/div[1]/div/div[2]/div[3]/div/button")
	WebElement ProceedToPay;
	
	
	/********Methods*******/
	
	public SubPOM(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	public void SelectCourse()
	{
		SelectCourse.click();
	}
	public void PreSubscription()
	{
		GetSubscription.click();
	}
	
	public void CoursePlan() throws Throwable
	{
		CoursePlanA.click();
		Thread.sleep(4000);
		CoursePlanB.click();
		Thread.sleep(3000);
	}
	
	public void Referral(String code) throws Throwable
	{
		EnterReferral.sendKeys(code);
		Thread.sleep(4000);
		ApplyReferral.click();
	}
	
	public void ProceedPay()
	{
		ProceedToPay.click();
	}
	
	
	}
