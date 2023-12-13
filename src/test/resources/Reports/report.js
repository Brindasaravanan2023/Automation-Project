$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Featurefile/FBloginpage.feature");
formatter.feature({
  "name": "Facebook functionlity testing",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Facebook login credential testing",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "User should enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User should enter login button",
  "keyword": "And "
});
formatter.step({
  "name": "User Should verify the success message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "password"
      ]
    },
    {
      "cells": [
        "Saravanan",
        "",
        "9791849575"
      ]
    },
    {
      "cells": [
        "Brinda",
        "",
        "Sar@1999"
      ]
    },
    {
      "cells": [
        "Nigaazhini",
        "",
        "Brin@2022"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Facebook login credential testing",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "FBloginStepdef.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter \"Saravanan\" and \"9791849575\"",
  "keyword": "When "
});
formatter.match({
  "location": "FBloginStepdef.user_should_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter login button",
  "keyword": "And "
});
formatter.match({
  "location": "FBloginStepdef.user_should_enter_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Should verify the success message",
  "keyword": "Then "
});
formatter.match({
  "location": "FBloginStepdef.user_Should_verify_the_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Facebook login credential testing",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "FBloginStepdef.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter \"Brinda\" and \"Sar@1999\"",
  "keyword": "When "
});
formatter.match({
  "location": "FBloginStepdef.user_should_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter login button",
  "keyword": "And "
});
formatter.match({
  "location": "FBloginStepdef.user_should_enter_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Should verify the success message",
  "keyword": "Then "
});
formatter.match({
  "location": "FBloginStepdef.user_Should_verify_the_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Facebook login credential testing",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "FBloginStepdef.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter \"Nigaazhini\" and \"Brin@2022\"",
  "keyword": "When "
});
formatter.match({
  "location": "FBloginStepdef.user_should_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter login button",
  "keyword": "And "
});
formatter.match({
  "location": "FBloginStepdef.user_should_enter_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Should verify the success message",
  "keyword": "Then "
});
formatter.match({
  "location": "FBloginStepdef.user_Should_verify_the_success_message()"
});
formatter.result({
  "status": "passed"
});
});