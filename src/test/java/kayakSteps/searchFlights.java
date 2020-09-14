package kayakSteps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import kayakPages.actions.kayakHomepageAction;
import kayakUtils.SeleniumDriver;


public class searchFlights 
{
	kayakHomepageAction kayakHomepageActionref=new  kayakHomepageAction();
	
	
	@Given("^I am the Home Page \"([^\"]*)\"$")
	public void i_am_the_Home_Page(String websiteURL) throws Throwable {
		SeleniumDriver.openpage(websiteURL);
	}

//	@When("^I move to the menu \"([^\"]*)\"$")
//	public void i_move_to_the_menu(String flights) throws Throwable {
//		kayakHomepageActionref.clickonFlights();
//	}

	@And("^User enter origin city \"([^\"]*)\"$")
	public void user_enter_origin_city(String origin) throws Throwable {
		kayakHomepageActionref.originCity(origin);
	    
	}

	@And("^User enter destination city \"([^\"]*)\"$")
	public void user_enter_destination_city(String destination) throws Throwable {
		kayakHomepageActionref.destinationCity(destination);
	  
	}

	@And("^User enter departure date \"([^\"]*)\"$")
	public void user_enter_departure_date(String departure_date) throws Throwable {
		kayakHomepageActionref.departureDate(departure_date);
	}

	@And("^User enter return date \"([^\"]*)\"$")
	public void user_enter_return_date(String return_date) throws Throwable {
		kayakHomepageActionref.arrivalDate(return_date);
	  
	}

	@And("^User click search buton$")
	public void user_click_search_buton() throws Throwable {
		kayakHomepageActionref.searchButton();
	   
	}

	@Then("^I should see all flights related to my search$")
	public void i_should_see_all_flights_related_to_my_search() throws Throwable {
	  System.out.println("Page opened");
	}

	@And("^The page title should be \"([^\"]*)\"$")
	public void the_page_title_should_be(String arg1) throws Throwable {
		System.out.println("Title vefified");
	    
	}
	@Then("^Close browser$")
	public void close_browser() throws Throwable {
		SeleniumDriver.tearDown();
	}

}
