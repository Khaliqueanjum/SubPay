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
  "duration": 20242248400,
  "status": "passed"
});
formatter.match({
  "location": "SubPayUnacademy.user_clicks_on_a_particular_Course()"
});
formatter.result({
  "duration": 2112320500,
  "status": "passed"
});
formatter.match({
  "location": "SubPayUnacademy.get_Subscription_Tab_is_displayed_and_clicking_on_it_duration_of_the_course_is_also_displayed()"
});
formatter.result({
  "duration": 16411379100,
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
  "duration": 14467170600,
  "status": "passed"
});
formatter.match({
  "location": "SubPayUnacademy.user_clicks_on_different_Course_Plan()"
});
formatter.result({
  "duration": 7622371200,
  "status": "passed"
});
formatter.match({
  "location": "SubPayUnacademy.user_Enters_Apply_the_Referral_Code()"
});
formatter.result({
  "duration": 10828643600,
  "status": "passed"
});
formatter.match({
  "location": "SubPayUnacademy.user_click_to_procees_to_payment()"
});
formatter.result({
  "duration": 8990844400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "User Verifying Mobile Number and Different Payment Options",
  "description": "",
  "id": "subandpay-feature;user-verifying-mobile-number-and-different-payment-options",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "User is Redirected to Payment Page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "User Enters the Mobile Number \u003cnumber\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User clicks login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User Verify the OTP",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User verify the Different Payment Options",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "subandpay-feature;user-verifying-mobile-number-and-different-payment-options;",
  "rows": [
    {
      "cells": [
        "number"
      ],
      "line": 26,
      "id": "subandpay-feature;user-verifying-mobile-number-and-different-payment-options;;1"
    },
    {
      "cells": [
        "7979079958"
      ],
      "line": 27,
      "id": "subandpay-feature;user-verifying-mobile-number-and-different-payment-options;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 27,
  "name": "User Verifying Mobile Number and Different Payment Options",
  "description": "",
  "id": "subandpay-feature;user-verifying-mobile-number-and-different-payment-options;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "User is Redirected to Payment Page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "User Enters the Mobile Number 7979079958",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User clicks login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User Verify the OTP",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User verify the Different Payment Options",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "SubPayUnacademy.user_is_Redirected_to_Payment_Page()"
});
formatter.result({
  "duration": 20803263800,
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
  "duration": 383988800,
  "status": "passed"
});
formatter.match({
  "location": "SubPayUnacademy.user_clicks_login_button()"
});
formatter.result({
  "duration": 136189900,
  "status": "passed"
});
formatter.match({
  "location": "SubPayUnacademy.user_Verify_the_OTP()"
});
formatter.result({
  "duration": 20271307900,
  "status": "passed"
});
formatter.match({
  "location": "SubPayUnacademy.user_verify_the_Different_Payment_Options()"
});
formatter.result({
  "duration": 23665316800,
  "status": "passed"
});
formatter.match({
  "location": "SubPayUnacademy.close_the_Browser()"
});
formatter.result({
  "duration": 260483800,
  "status": "passed"
});
});