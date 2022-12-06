(window.webpackJsonp=window.webpackJsonp||[]).push([[284],{1165:function(e,t,a){"use strict";a.r(t);var o=a(32),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"invoking-entando-core-apis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#invoking-entando-core-apis"}},[e._v("#")]),e._v(" Invoking Entando Core APIs")]),e._v(" "),a("p",[e._v("This tutorial describes how to set up an environment ready to invoke Entando Core APIs using Postman. Entando uses Swagger to automatically generate OpenAPI documentation that describes the available APIs.")]),e._v(" "),a("p",[e._v("Entando core APIs are accessible from a base URL such as localhost:8080/entando-de-app/api. For example, the page controller is available under /pages at the URL localhost:8080/entando-de-app/api/pages. The page template controller is available at localhost:8080/entando-de-app/api/pageModels.")]),e._v(" "),a("p",[e._v("To perform extensive testing with APIs on Postman, set up an environment and define a variable to host the access token saved with a POST request to /oauth/token. This should provide access to all API endpoints and actions for which the user is authorized.")]),e._v(" "),a("blockquote",[a("p",[e._v("Refer to "),a("RouterLink",{attrs:{to:"/next/docs/consume/identity-management.html#authorization"}},[e._v("User Management Roles")]),e._v(" for more details.")],1)]),e._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("ul",[a("li",[e._v("Basic knowledge of Postman. You can download the Postman application or use Postman on the web. The latter requires changes to the Keycloak configuration.")]),e._v(" "),a("li",[e._v("A local running copy of the Entando App Engine. For more details, refer to the "),a("a",{attrs:{href:"https://github.com/entando/entando-de-app/blob/develop/README.md#using-swagger",target:"_blank",rel:"noopener noreferrer"}},[e._v("Entando App Engine GitHub Readme"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("An enabled Swagger UI")])]),e._v(" "),a("h2",{attrs:{id:"set-up-a-postman-environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-up-a-postman-environment"}},[e._v("#")]),e._v(" Set Up a Postman Environment")]),e._v(" "),a("ol",[a("li",[e._v("Create a new Postman environment and define the following variables:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("access_token: #no value\nrefresh_token: #no value\nurl: #URL of your application (i.e. http://localhost:8080/entando-de-app)`\n")])])]),a("blockquote",[a("p",[e._v("Be careful with the URL variable and make sure you do not have a trailing slash.")])]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Set Postman to use this environment.")])]),e._v(" "),a("h2",{attrs:{id:"get-an-access-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-an-access-token"}},[e._v("#")]),e._v(" Get an Access Token")]),e._v(" "),a("ol",[a("li",[a("p",[e._v('Create a new collection. Give it an appropriate name like "Access Token."')])]),e._v(" "),a("li",[a("p",[e._v('Create a new POST request with the following parameters. Note we are calling the "URL" environment variable for convenience.')]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("URL")]),e._v(' →  "/api/oauth/token"')])]),e._v(" "),a("li",[a("p",[a("code",[e._v("Auth")]),e._v(" section")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("Type")]),e._v(" → Basic Auth")]),e._v(" "),a("li",[e._v("Enter "),a("code",[e._v("Username")]),e._v(" and "),a("code",[e._v("Password")]),e._v(". Valid Entando credentials are required. They will be the same as used for the App Builder.")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("Headers")]),e._v(" section "),a("br"),e._v("\nCreate a new "),a("code",[e._v("Key")]),e._v("-"),a("code",[e._v("Value")]),e._v(" pair as shown: "),a("br"),e._v('\n"Content-Type" : "application/x-www-form-urlencoded"')])]),e._v(" "),a("li",[a("p",[a("code",[e._v("Body")]),e._v(" section")]),e._v(" "),a("ol",[a("li",[e._v('Select "x-www-form-urlencoded" from the drop-down menu')]),e._v(" "),a("li",[e._v("Create "),a("code",[e._v("Key")]),e._v("-"),a("code",[e._v("Value")]),e._v(" pairs for username and password."),a("br"),e._v(" "),a("code",[e._v("Key")]),e._v(': "username", Value: #valid entando username such as '),a("code",[e._v("admin")]),e._v(" "),a("br"),e._v(" "),a("code",[e._v("Key")]),e._v(': "password", Value: #password of the valid user'),a("br"),e._v("\ngrant_type: "),a("code",[e._v("password")])])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("Tests")]),e._v(" section"),a("br"),e._v("\nEnter the following code so new requests can make use of the access token.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('var data = JSON.parse(responseBody);\npostman.setEnvironmentVariable("access_token", data.access_token);\n')])])]),e._v(" "),a("details",[a("summary",[e._v("Details about the code")]),e._v('The first line of code defines a variable called "data", which hosts the JSON-parsed responseBody from the POST request sent to /oauth/token. The second line sets the environment variable "access_token" to the value returned by the POST request.')])])])]),e._v(" "),a("li",[a("p",[e._v("Send the POST request.  If successful, you should get a response like this:")]),e._v(" "),a("p",[a("code",[e._v('{    "access_token": "b96096493a40b1a7364bd54a6ffb609b",    "token_type": "bearer",    "refresh_token": "79ff84062b5dc13663961a833b0788f9",    "expires_in": 3599     }')])])])]),e._v(" "),a("blockquote",[a("p",[e._v("Checking your Postman environment, you should see that the access_token and the refresh_token variable values have been updated.")])]),e._v(" "),a("h2",{attrs:{id:"prepare-a-generic-api-request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prepare-a-generic-api-request"}},[e._v("#")]),e._v(" Prepare a Generic API Request")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Create a new request with the following parameters:")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("Authorization")]),e._v(" section "),a("br"),e._v(" "),a("code",[e._v("Type")]),e._v(': "Inherit auth from parent"')])]),e._v(" "),a("li",[a("p",[a("code",[e._v("Headers")]),e._v(" section "),a("br"),e._v("\nCreate the following Key-Value pairs:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Key")]),e._v(': "Authorization", '),a("code",[e._v("Value")]),e._v(': "Bearer"')]),e._v(" "),a("li",[a("code",[e._v("Key")]),e._v(': "Content-Type", '),a("code",[e._v("Value")]),e._v(': "application/json"')])])])])]),e._v(" "),a("li",[a("p",[e._v("Select the appropriate method (GET, DELETE, POST, etc.) for your request and enter the URL with appropriate values, (i.e. localhost:8080/entando-de-app/api/pages).")])]),e._v(" "),a("li",[a("p",[e._v("Add the relevant payload in JSON format to the Body section. Remember to select raw and JSON (application/json).")])]),e._v(" "),a("li",[a("p",[e._v("Submit your test to check for the appropriate response.")])])]),e._v(" "),a("ul",[a("li",[e._v("For more information on comprehensive testing, the "),a("a",{attrs:{href:"https://learning.postman.com/docs/running-collections/intro-to-collection-runs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Collection Runner on Postman"),a("OutboundLink")],1),e._v(" enables you to run the API requests in a collection in a specified sequence.")]),e._v(" "),a("li",[e._v("For more information on creating a collection for testing with Postman, go to "),a("a",{attrs:{href:"https://learning.postman.com/docs/designing-and-developing-your-api/testing-an-api/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Testing an API"),a("OutboundLink")],1),e._v(".")])])])}),[],!1,null,null,null);t.default=n.exports}}]);