package kayakPages.actions;



import org.openqa.selenium.Keys;
//import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

import kayakPages.locators.kayakHomePageLocator;
import kayakUtils.SeleniumDriver;

public class kayakHomepageAction 
{
	kayakHomePageLocator khpl=null;
	
	public kayakHomepageAction() {
		this.khpl=new kayakHomePageLocator();
		PageFactory.initElements(SeleniumDriver.getDriver(),khpl);
	}
	
//	public void searchMenu() {
//		khpl.FlightsSearchMenu.click();
//		
//	}
//	
//	public void clickonFlights() {
//		khpl.Flights.click();
//		
//	}
	
	public void originCity(String originCity) {
		//khpl.originCity.sendKeys(Keys.RETURN);
		khpl.pressplusorigin.click();
		//khpl.originCity.click();
		khpl.originCity.sendKeys(originCity);
	}
	public void destinationCity(String destinationCity) {
		//khpl.destinitionCity.sendKeys(Keys.RETURN);
		khpl.pressplusdestination.click();
		//khpl.destinitionCity.click();
		khpl.destinitionCity.sendKeys(destinationCity);
	}
	public void departureDate(String departureDate) {
		khpl.departureDate.sendKeys(departureDate);
	}
	public void arrivalDate(String arrivalDate) {
		khpl.arrivalDate.sendKeys(arrivalDate);
	}
	public void searchButton() {
		khpl.search.click();
	}
}
