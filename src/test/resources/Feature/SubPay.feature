Feature: SubAndPay Feature



Scenario: User is on the Course Page and able toSubscription for a Course
Given User is on the Unacademy Course Page
When User clicks on a particular Course
Then Get Subscription Tab is displayed and clicking on it duration of the course is also displayed


Scenario: User now selects the Course Plan with Discount
Given User is now on Course Duration Page
When User clicks on different Course Plan
And User Enters & Apply the Referral Code 
Then User click to procees to payment

@paymentvalid
Scenario Outline: User Verifying Mobile Number and Different Payment Options
Given User is Redirected to Payment Page
When User Enters the Mobile Number <number>
And User clicks login button
And User Verify the OTP
And User verify the Different Payment Options
Then User Select CARD as Payment and  Enters Acceptance Credentials


Examples:
|	number	 |
|7979079958|		

@paymentinvalid
Scenario Outline: User Verifying Mobile Number and Invalid CARD Details
Given User is in the Payment Page
When User Inputs the Cellphone Number <number>
And User clicks on the button Login
And User Recieves the OTP and Verify
Then User Select CARD as Payment and  Enters Invalid Credentials

Examples:
|	number	 |
|7979079958|

