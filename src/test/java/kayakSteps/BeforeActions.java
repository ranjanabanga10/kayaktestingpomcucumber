package kayakSteps;



import cucumber.api.java.Before;
import kayakUtils.SeleniumDriver;

public class BeforeActions 
{
	@Before
	public static void setup() {
		
		SeleniumDriver.setUpDriver();
	}
}
