package kayakPages.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class kayakHomePageLocator {
	
//	@FindBy(how=How.XPATH,using="//*[name()='path' and contains(@d,'M20 153.33')]")
//	public WebElement FlightsSearchMenu;
//	
//	@FindBy(how=How.XPATH, using="//div[@class='uJ4I-menu-item-title uJ4I-active']")
//	public WebElement Flights;
	
	
	@FindBy(how=How.XPATH, using="//div[@id='qKks-origin-airport-display-multi-container']")
	public WebElement pressplusorigin;
	
	@FindBy(how=How.XPATH, using="//input[@id='qKks-origin-airport']")
	public WebElement originCity;
	//div[@id='qKks-destination-airport-display-multi-container']")
	public WebElement pressplusdestination;
	
	@FindBy(how=How.XPATH, using="//input[@id='qKks-destination-airport']")
	public WebElement destinitionCity;
	
	@FindBy(how=How.XPATH, using="//div[@id='c1yen-dateRangeInput-display-start-inner']")
	public WebElement departureDate;
	
	@FindBy(how=How.XPATH, using="//div[@id='c1yen-dateRangeInput-display-end-inner']")
	public WebElement arrivalDate;
	
	@FindBy(how=How.XPATH, using="//span[contains(@class,'v-c-p centre')]//span[contains(@class,'icon')]//*[local-name()='svg']//*[name()='path' and contains(@fill,'currentCol')]")
	public WebElement search;

}
