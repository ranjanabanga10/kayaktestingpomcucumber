package kayakUtils;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

public class SeleniumDriver 
{
	
	private static SeleniumDriver seleniumdriver;
	
	//init WebDriver
	
	private static WebDriver driver;
	
	private static WebDriverWait waitDriver;
	
	public final static int TIMEOUT=30;
	public final static int PAGELOAD_TIMEOUT=50;

	private SeleniumDriver() 
	{
		System.setProperty("webdriver.chrome.driver", "/Users/ranjanabanga/Downloads/chrome85");
		driver=new ChromeDriver();
		driver.manage().window().maximize();
		waitDriver=new WebDriverWait(driver,TIMEOUT);
		driver.manage().timeouts().implicitlyWait(TIMEOUT, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(PAGELOAD_TIMEOUT, TimeUnit.SECONDS);
	}
	
	public static void openpage(String url)
	{
		driver.get(url);
	}
	public static WebDriver getDriver() {
		return driver;
	}
	public static void setUpDriver() {
		if(seleniumdriver==null) {
			seleniumdriver=new SeleniumDriver();
		}
	}
	public static void tearDown() {
		if(driver!=null) {
			driver.close();
			driver.quit();
		}
		seleniumdriver=null;
	}
}
