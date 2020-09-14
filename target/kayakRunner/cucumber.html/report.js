$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/ranjanabanga/eclipse-workspace/qa/kayakTestingDemo/src/test/resources/Features/searchflights.feature");
formatter.feature({
  "line": 2,
  "name": "Acceptance testing to validate search flights from origin to destination and validate",
  "description": "the searched results on next page",
  "id": "acceptance-testing-to-validate-search-flights-from-origin-to-destination-and-validate",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Search-Flights"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Search flight from origin to destination",
  "description": "",
  "id": "acceptance-testing-to-validate-search-flights-from-origin-to-destination-and-validate;search-flight-from-origin-to-destination",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am the Home Page \"https://www.kayak.com/flights\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "#When I move to the menu \"Flights\""
    }
  ],
  "line": 8,
  "name": "User enter origin city \"Origin_City\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enter destination city \"Destination_City\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enter departure date \"Deapature_Date\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enter return date \"Return_Date\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User click search buton",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see all flights related to my search",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "The page title should be \"SFO to SJO, 10/2 \u0026mdash; 10/9\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Close browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "acceptance-testing-to-validate-search-flights-from-origin-to-destination-and-validate;search-flight-from-origin-to-destination;",
  "rows": [
    {
      "cells": [
        "Origin_City",
        "Destination_City",
        "Deapature_Date",
        "Return_Date"
      ],
      "line": 18,
      "id": "acceptance-testing-to-validate-search-flights-from-origin-to-destination-and-validate;search-flight-from-origin-to-destination;;1"
    },
    {
      "cells": [
        "SFO",
        "New York",
        "08/05/2020",
        "09/20/2020"
      ],
      "line": 19,
      "id": "acceptance-testing-to-validate-search-flights-from-origin-to-destination-and-validate;search-flight-from-origin-to-destination;;2"
    },
    {
      "cells": [
        "Los Angles",
        "California",
        "08/05/2020",
        "09/20/2020"
      ],
      "line": 20,
      "id": "acceptance-testing-to-validate-search-flights-from-origin-to-destination-and-validate;search-flight-from-origin-to-destination;;3"
    },
    {
      "cells": [
        "California",
        "Navada",
        "08/05/2020",
        "09/20/2020"
      ],
      "line": 21,
      "id": "acceptance-testing-to-validate-search-flights-from-origin-to-destination-and-validate;search-flight-from-origin-to-destination;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 44791193860,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Search flight from origin to destination",
  "description": "",
  "id": "acceptance-testing-to-validate-search-flights-from-origin-to-destination-and-validate;search-flight-from-origin-to-destination;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Search-Flights"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am the Home Page \"https://www.kayak.com/flights\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "#When I move to the menu \"Flights\""
    }
  ],
  "line": 8,
  "name": "User enter origin city \"Origin_City\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enter destination city \"Destination_City\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enter departure date \"Deapature_Date\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enter return date \"Return_Date\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User click search buton",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see all flights related to my search",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "The page title should be \"SFO to SJO, 10/2 \u0026mdash; 10/9\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Close browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.kayak.com/flights",
      "offset": 20
    }
  ],
  "location": "searchFlights.i_am_the_Home_Page(String)"
});
formatter.result({
  "duration": 13408962330,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Origin_City",
      "offset": 24
    }
  ],
  "location": "searchFlights.user_enter_origin_city(String)"
});
formatter.result({
  "duration": 30775714097,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@id\u003d\u0027qKks-origin-airport-display-multi-container\u0027]\"}\n  (Session info: chrome\u003d85.0.4183.102)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ranjanabangas-MacBook-Pro.local\u0027, ip: \u0027127.0.0.1\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.6\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.102, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: /var/folders/zt/y0dj4hkn5jz...}, goog:chromeOptions: {debuggerAddress: localhost:49797}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 3171bfad9c9398a8e364bfc24c15370b\n*** Element info: {Using\u003dxpath, value\u003d//div[@id\u003d\u0027qKks-origin-airport-display-multi-container\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy20.click(Unknown Source)\n\tat kayakPages.actions.kayakHomepageAction.originCity(kayakHomepageAction.java:33)\n\tat kayakSteps.searchFlights.user_enter_origin_city(searchFlights.java:28)\n\tat ✽.And User enter origin city \"Origin_City\"(/Users/ranjanabanga/eclipse-workspace/qa/kayakTestingDemo/src/test/resources/Features/searchflights.feature:8)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Destination_City",
      "offset": 29
    }
  ],
  "location": "searchFlights.user_enter_destination_city(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Deapature_Date",
      "offset": 27
    }
  ],
  "location": "searchFlights.user_enter_departure_date(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Return_Date",
      "offset": 24
    }
  ],
  "location": "searchFlights.user_enter_return_date(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "searchFlights.user_click_search_buton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "searchFlights.i_should_see_all_flights_related_to_my_search()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SFO to SJO, 10/2 \u0026mdash; 10/9",
      "offset": 26
    }
  ],
  "location": "searchFlights.the_page_title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "searchFlights.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 2287552678,
  "status": "passed"
});
formatter.before({
  "duration": 18216113601,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Search flight from origin to destination",
  "description": "",
  "id": "acceptance-testing-to-validate-search-flights-from-origin-to-destination-and-validate;search-flight-from-origin-to-destination;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Search-Flights"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am the Home Page \"https://www.kayak.com/flights\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "#When I move to the menu \"Flights\""
    }
  ],
  "line": 8,
  "name": "User enter origin city \"Origin_City\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enter destination city \"Destination_City\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enter departure date \"Deapature_Date\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enter return date \"Return_Date\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User click search buton",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see all flights related to my search",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "The page title should be \"SFO to SJO, 10/2 \u0026mdash; 10/9\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Close browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.kayak.com/flights",
      "offset": 20
    }
  ],
  "location": "searchFlights.i_am_the_Home_Page(String)"
});
formatter.result({
  "duration": 2803055145,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Origin_City",
      "offset": 24
    }
  ],
  "location": "searchFlights.user_enter_origin_city(String)"
});
formatter.result({
  "duration": 30014310480,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@id\u003d\u0027qKks-origin-airport-display-multi-container\u0027]\"}\n  (Session info: chrome\u003d85.0.4183.102)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ranjanabangas-MacBook-Pro.local\u0027, ip: \u0027127.0.0.1\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.6\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.102, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: /var/folders/zt/y0dj4hkn5jz...}, goog:chromeOptions: {debuggerAddress: localhost:50199}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 2585872fc776202df35a7b116c074de5\n*** Element info: {Using\u003dxpath, value\u003d//div[@id\u003d\u0027qKks-origin-airport-display-multi-container\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy20.click(Unknown Source)\n\tat kayakPages.actions.kayakHomepageAction.originCity(kayakHomepageAction.java:33)\n\tat kayakSteps.searchFlights.user_enter_origin_city(searchFlights.java:28)\n\tat ✽.And User enter origin city \"Origin_City\"(/Users/ranjanabanga/eclipse-workspace/qa/kayakTestingDemo/src/test/resources/Features/searchflights.feature:8)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Destination_City",
      "offset": 29
    }
  ],
  "location": "searchFlights.user_enter_destination_city(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Deapature_Date",
      "offset": 27
    }
  ],
  "location": "searchFlights.user_enter_departure_date(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Return_Date",
      "offset": 24
    }
  ],
  "location": "searchFlights.user_enter_return_date(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "searchFlights.user_click_search_buton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "searchFlights.i_should_see_all_flights_related_to_my_search()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SFO to SJO, 10/2 \u0026mdash; 10/9",
      "offset": 26
    }
  ],
  "location": "searchFlights.the_page_title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "searchFlights.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 1231293603,
  "status": "passed"
});
formatter.before({
  "duration": 18494538823,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Search flight from origin to destination",
  "description": "",
  "id": "acceptance-testing-to-validate-search-flights-from-origin-to-destination-and-validate;search-flight-from-origin-to-destination;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Search-Flights"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am the Home Page \"https://www.kayak.com/flights\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "#When I move to the menu \"Flights\""
    }
  ],
  "line": 8,
  "name": "User enter origin city \"Origin_City\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enter destination city \"Destination_City\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enter departure date \"Deapature_Date\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enter return date \"Return_Date\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User click search buton",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see all flights related to my search",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "The page title should be \"SFO to SJO, 10/2 \u0026mdash; 10/9\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Close browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.kayak.com/flights",
      "offset": 20
    }
  ],
  "location": "searchFlights.i_am_the_Home_Page(String)"
});
formatter.result({
  "duration": 2841247250,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Origin_City",
      "offset": 24
    }
  ],
  "location": "searchFlights.user_enter_origin_city(String)"
});
formatter.result({
  "duration": 30686749439,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@id\u003d\u0027qKks-origin-airport-display-multi-container\u0027]\"}\n  (Session info: chrome\u003d85.0.4183.102)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ranjanabangas-MacBook-Pro.local\u0027, ip: \u0027127.0.0.1\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.6\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.102, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: /var/folders/zt/y0dj4hkn5jz...}, goog:chromeOptions: {debuggerAddress: localhost:50480}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: afb25d523908208e73ae44f77755add4\n*** Element info: {Using\u003dxpath, value\u003d//div[@id\u003d\u0027qKks-origin-airport-display-multi-container\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy20.click(Unknown Source)\n\tat kayakPages.actions.kayakHomepageAction.originCity(kayakHomepageAction.java:33)\n\tat kayakSteps.searchFlights.user_enter_origin_city(searchFlights.java:28)\n\tat ✽.And User enter origin city \"Origin_City\"(/Users/ranjanabanga/eclipse-workspace/qa/kayakTestingDemo/src/test/resources/Features/searchflights.feature:8)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Destination_City",
      "offset": 29
    }
  ],
  "location": "searchFlights.user_enter_destination_city(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Deapature_Date",
      "offset": 27
    }
  ],
  "location": "searchFlights.user_enter_departure_date(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Return_Date",
      "offset": 24
    }
  ],
  "location": "searchFlights.user_enter_return_date(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "searchFlights.user_click_search_buton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "searchFlights.i_should_see_all_flights_related_to_my_search()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SFO to SJO, 10/2 \u0026mdash; 10/9",
      "offset": 26
    }
  ],
  "location": "searchFlights.the_page_title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "searchFlights.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 754284627,
  "status": "passed"
});
});