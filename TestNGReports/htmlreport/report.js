$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Feature/SubPay.feature");
formatter.feature({
  "line": 1,
  "name": "SubAndPay Feature",
  "description": "",
  "id": "subandpay-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "User is on the Course Page and able toSubscription for a Course",
  "description": "",
  "id": "subandpay-feature;user-is-on-the-course-page-and-able-tosubscription-for-a-course",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User is on the Unacademy Course Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on a particular Course",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Get Subscription Tab is displayed and clicking on it duration of the course is also displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SubPayUnacademy.user_is_on_the_Unacademy_Course_Page()"
});
formatter.result({
  "duration": 10472810100,
  "status": "passed"
});
formatter.match({
  "location": "SubPayUnacademy.user_clicks_on_a_particular_Course()"
});
formatter.result({
  "duration": 424298100,
  "status": "passed"
});
formatter.match({
  "location": "SubPayUnacademy.get_Subscription_Tab_is_displayed_and_clicking_on_it_duration_of_the_course_is_also_displayed()"
});
formatter.result({
  "duration": 12046093700,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User now selects the Course Plan with Discount",
  "description": "",
  "id": "subandpay-feature;user-now-selects-the-course-plan-with-discount",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "User is now on Course Duration Page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User clicks on different Course Plan",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User Enters \u0026 Apply the Referral Code",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User click to procees to payment",
  "keyword": "Then "
});
formatter.match({
  "location": "SubPayUnacademy.user_is_now_on_Course_Duration_Page()"
});
formatter.result({
  "duration": 9083538300,
  "status": "passed"
});
formatter.match({
  "location": "SubPayUnacademy.user_clicks_on_different_Course_Plan()"
});
formatter.result({
  "duration": 7495869300,
  "status": "passed"
});
formatter.match({
  "location": "SubPayUnacademy.user_Enters_Apply_the_Referral_Code()"
});
formatter.result({
  "duration": 8060942500,
  "status": "passed"
});
formatter.match({
  "location": "SubPayUnacademy.user_click_to_procees_to_payment()"
});
formatter.result({
  "duration": 8398797300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "User Verifying Mobile Number and Different Payment Options",
  "description": "",
  "id": "subandpay-feature;user-verifying-mobile-number-and-different-payment-options",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@paymentvalid"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User is Redirected to Payment Page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User Enters the Mobile Number \u003cnumber\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User clicks login button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User Verify the OTP",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User verify the Different Payment Options",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User Select CARD as Payment and  Enters Acceptance Credentials",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "subandpay-feature;user-verifying-mobile-number-and-different-payment-options;",
  "rows": [
    {
      "cells": [
        "number"
      ],
      "line": 28,
      "id": "subandpay-feature;user-verifying-mobile-number-and-different-payment-options;;1"
    },
    {
      "cells": [
        "7979079958"
      ],
      "line": 29,
      "id": "subandpay-feature;user-verifying-mobile-number-and-different-payment-options;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 29,
  "name": "User Verifying Mobile Number and Different Payment Options",
  "description": "",
  "id": "subandpay-feature;user-verifying-mobile-number-and-different-payment-options;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@paymentvalid"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User is Redirected to Payment Page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User Enters the Mobile Number 7979079958",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User clicks login button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User Verify the OTP",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User verify the Different Payment Options",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User Select CARD as Payment and  Enters Acceptance Credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "SubPayUnacademy.user_is_Redirected_to_Payment_Page()"
});
formatter.result({
  "duration": 11534330500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7979079958",
      "offset": 30
    }
  ],
  "location": "SubPayUnacademy.user_Enters_the_Mobile_Number(String)"
});
formatter.result({
  "duration": 200960000,
  "status": "passed"
});
formatter.match({
  "location": "SubPayUnacademy.user_clicks_login_button()"
});
formatter.result({
  "duration": 113361100,
  "status": "passed"
});
formatter.match({
  "location": "SubPayUnacademy.user_Verify_the_OTP()"
});
formatter.result({
  "duration": 35201886700,
  "status": "passed"
});
formatter.match({
  "location": "SubPayUnacademy.user_verify_the_Different_Payment_Options()"
});
formatter.result({
  "duration": 10415844100,
  "status": "passed"
});
formatter.match({
  "location": "SubPayUnacademy.user_Select_CARD_as_Payment_and_Enters_Acceptance_Credentials()"
});
formatter.result({
  "duration": 3054198400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 32,
  "name": "User Verifying Mobile Number and Invalid CARD Details",
  "description": "",
  "id": "subandpay-feature;user-verifying-mobile-number-and-invalid-card-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 31,
      "name": "@paymentinvalid"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "User is in the Payment Page",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "User Inputs the Cellphone Number \u003cnumber\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "User clicks on the button Login",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User Recieves the OTP and Verify",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User Select CARD as Payment and  Enters Invalid Credentials",
  "keyword": "Then "
});
formatter.examples({
  "line": 39,
  "name": "",
  "description": "",
  "id": "subandpay-feature;user-verifying-mobile-number-and-invalid-card-details;",
  "rows": [
    {
      "cells": [
        "number"
      ],
      "line": 40,
      "id": "subandpay-feature;user-verifying-mobile-number-and-invalid-card-details;;1"
    },
    {
      "cells": [
        "7979079958"
      ],
      "line": 41,
      "id": "subandpay-feature;user-verifying-mobile-number-and-invalid-card-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 41,
  "name": "User Verifying Mobile Number and Invalid CARD Details",
  "description": "",
  "id": "subandpay-feature;user-verifying-mobile-number-and-invalid-card-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 31,
      "name": "@paymentinvalid"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "User is in the Payment Page",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "User Inputs the Cellphone Number 7979079958",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "User clicks on the button Login",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User Recieves the OTP and Verify",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User Select CARD as Payment and  Enters Invalid Credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "SubPayUnacademy.user_is_in_the_Payment_Page()"
});
formatter.result({
  "duration": 7807063900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7979079958",
      "offset": 33
    }
  ],
  "location": "SubPayUnacademy.user_Inputs_the_Cellphone_Number(String)"
});
formatter.result({
  "duration": 184481700,
  "status": "passed"
});
formatter.match({
  "location": "SubPayUnacademy.user_clicks_on_the_button_Login()"
});
formatter.result({
  "duration": 155103000,
  "status": "passed"
});
formatter.match({
  "location": "SubPayUnacademy.user_Recieves_the_OTP_and_Verify()"
});
formatter.result({
  "duration": 40156695900,
  "status": "passed"
});
formatter.match({
  "location": "SubPayUnacademy.user_Select_CARD_as_Payment_and_Enters_Invalid_Credentials()"
});
formatter.result({
  "duration": 4787275300,
  "error_message": "java.lang.AssertionError: expected [16] but found [18]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:652)\r\n\tat org.testng.Assert.assertEquals(Assert.java:662)\r\n\tat stepDefinition.SubPayUnacademy.user_Select_CARD_as_Payment_and_Enters_Invalid_Credentials(SubPayUnacademy.java:296)\r\n\tat ✽.Then User Select CARD as Payment and  Enters Invalid Credentials(src/test/resources/Feature/SubPay.feature:37)\r\n",
  "status": "failed"
});
});