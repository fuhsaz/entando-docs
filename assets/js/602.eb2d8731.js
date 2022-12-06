(window.webpackJsonp=window.webpackJsonp||[]).push([[602],{1647:function(e,t,o){"use strict";o.r(t);var n=o(32),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"generate-microservices-and-micro-frontends"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#generate-microservices-and-micro-frontends"}},[e._v("#")]),e._v(" Generate Microservices and Micro Frontends")]),e._v(" "),o("h2",{attrs:{id:"overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),o("p",[e._v("This tutorial describes how to use the Entando Component Generator (ECG) to create microservices and micro frontends for deployment to the "),o("RouterLink",{attrs:{to:"/v7.1/docs/compose/local-hub-overview.html"}},[e._v("Local Hub")]),e._v(" of an Entando Application or a shared "),o("RouterLink",{attrs:{to:"/v7.1/docs/getting-started/landing-page.html#entando-hub"}},[e._v("Entando Hub")]),e._v(". The ECG is powered by "),o("a",{attrs:{href:"https://www.jhipster.tech/",target:"_blank",rel:"noopener noreferrer"}},[e._v("JHipster"),o("OutboundLink")],1),e._v(" and leverages the Entando Blueprint.")],1),e._v(" "),o("p",[e._v("The output of this tutorial is "),o("RouterLink",{attrs:{to:"/v7.1/docs/curate/bundle-details.html#bundle-development-process"}},[e._v("a new bundle project")]),e._v(" with several components:")],1),e._v(" "),o("ul",[o("li",[e._v("A Spring Boot microservice with CRUD operations for a single database entity")]),e._v(" "),o("li",[e._v("Three React micro frontends for displaying and managing the entity")])]),e._v(" "),o("h2",{attrs:{id:"prerequisites"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/v7.1/docs/getting-started/"}},[e._v("A working instance of Entando")])],1),e._v(" "),o("li",[e._v("Verify dependencies with the "),o("RouterLink",{attrs:{to:"/v7.1/docs/getting-started/entando-cli.html#check-the-environment"}},[e._v("Entando CLI")]),e._v(": "),o("code",[e._v("ent check-env develop")])],1)]),e._v(" "),o("h2",{attrs:{id:"set-up-a-new-bundle-project"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#set-up-a-new-bundle-project"}},[e._v("#")]),e._v(" Set Up a New Bundle Project")]),e._v(" "),o("ol",[o("li",[e._v("Create a new bundle project directory. This will add a simple "),o("code",[e._v("entando.json")]),e._v(" descriptor as a starting point.")])]),e._v(" "),o("div",{staticClass:"language-shell extra-class"},[o("pre",{pre:!0,attrs:{class:"language-shell"}},[o("code",[e._v("ent bundle init YOUR-PROJECT-NAME\n")])])]),o("h2",{attrs:{id:"generate-the-components"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#generate-the-components"}},[e._v("#")]),e._v(" Generate the Components")]),e._v(" "),o("ol",[o("li",[e._v("From the project directory, use the Entando CLI to add a basic microservice configuration to the project:")])]),e._v(" "),o("div",{staticClass:"language-shell extra-class"},[o("pre",{pre:!0,attrs:{class:"language-shell"}},[o("code",[o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" YOUR-PROJECT-NAME\nent bundle ms "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" conference-ms --stack"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("spring-boot\n")])])]),o("ol",{attrs:{start:"2"}},[o("li",[e._v("From the "),o("code",[e._v("conference-ms")]),e._v(" directory, use the Entando Blueprint (powered by JHipster) to generate the "),o("code",[e._v("conference-ms")]),e._v(" microservice:")])]),e._v(" "),o("div",{staticClass:"language-shell extra-class"},[o("pre",{pre:!0,attrs:{class:"language-shell"}},[o("code",[o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" microservices/conference-ms\nent jhipster --blueprints"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("entando\n")])])]),o("ol",{attrs:{start:"3"}},[o("li",[o("p",[e._v("You'll be presented with a series of prompts pertaining to service generation. These are echoed below, with the base values for this tutorial in parentheses. Insert the corresponding entry as identified below. Note that the "),o("code",[e._v("Enter")]),e._v(" key will select the default option.")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("Please provide the project name:")]),e._v(" (Up to you)")]),e._v(" "),o("li",[o("code",[e._v("What is the base name of your application?")]),e._v(" (Up to you)")]),e._v(" "),o("li",[o("code",[e._v("As you are running in a microservice architecture, on which port would like your server to run? It should be unique to avoid port conflicts.")]),e._v(" (8081)")]),e._v(" "),o("li",[o("code",[e._v("What is your default Java package name?")]),e._v(" (Up to you)")]),e._v(" "),o("li",[o("code",[e._v("Which *type* of database would you like to use?")]),e._v(" (SQL)\n- If no database is selected you'll be building a stateless microservice, which is a valid choice, but the rest of this tutorial won't work.")]),e._v(" "),o("li",[o("code",[e._v("Which *production* database would you like to use?")]),e._v(" (PostgreSQL)")]),e._v(" "),o("li",[o("code",[e._v("Which *development* database would you like to use?")]),e._v(" (H2 with disk-based persistence)")]),e._v(" "),o("li",[o("code",[e._v("Which cache do you want to use? (Spring cache abstraction)")]),e._v(" (Caffeine (local cache, for a single node))")]),e._v(" "),o("li",[o("code",[e._v("Do you want to use Hibernate 2nd level cache?")]),e._v(" (Yes)")]),e._v(" "),o("li",[o("code",[e._v("Which other technologies would you like to use?")]),e._v(" (Don't select any other technologies)")]),e._v(" "),o("li",[o("code",[e._v("Which BE dependencies do you want to use?")]),e._v(" (Dependencies maintained by Entando (entando/entando-bundle-bom))")]),e._v(" "),o("li",[o("code",[e._v("Would you like to generate micro frontends when creating entities?")]),e._v(" (Always)")]),e._v(" "),o("li",[o("code",[e._v("Would you like to enable internationalization support")]),e._v(" (Up to you)")]),e._v(" "),o("li",[o("code",[e._v("Please choose the native language of the application")]),e._v(" (Up to you)")]),e._v(" "),o("li",[o("code",[e._v("Besides JUnit and Jest, which testing frameworks would you like to use?")]),e._v(" (Up to you)")]),e._v(" "),o("li",[o("code",[e._v("Would you like to install other generators from the JHipster Marketplace?")]),e._v(" (No)")])])]),e._v(" "),o("li",[o("p",[e._v('Enter "Yes" when prompted with the following overwrite to resolve the conflict:')])])]),e._v(" "),o("p",[o("code",[e._v("Overwrite .gitignore?")])]),e._v(" "),o("ol",{attrs:{start:"5"}},[o("li",[e._v("Add an Entity to your microservice and create the corresponding micro frontends. In this tutorial, "),o("code",[e._v("Conference")]),e._v(" is the name of the entity that will be added to the application.")])]),e._v(" "),o("div",{staticClass:"language-shell extra-class"},[o("pre",{pre:!0,attrs:{class:"language-shell"}},[o("code",[e._v("ent jhipster entity Conference\n")])])]),o("ol",{attrs:{start:"6"}},[o("li",[o("p",[e._v("You'll be presented with a series of prompts to add fields to your entity. These are echoed below, with the base values for this tutorial in parentheses. Input your preferences, and note that the "),o("code",[e._v("Enter")]),e._v(" key will select the default option.")]),e._v(" "),o("ul",[o("li",[o("p",[o("code",[e._v("Do you want to add a field to your entity?")]),e._v(" (Yes)")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("What is the name of your field?")]),e._v(" (name)")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("What is the type of your field?")]),e._v(" (String)")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("Do you want to add validation rules to your field?")]),e._v(" (No)")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("Do you want to add a field to your entity?")]),e._v(" (Yes)")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("What is the name of your field?")]),e._v(" (location)")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("What is the type of your field?")]),e._v(" (String)")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("Do you want to add validation rules to your field?")]),e._v(" (No)")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("Do you want to add a field to your entity?")]),e._v(" (No)")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("Do you want to add a relationship to another entity?")]),e._v(" (No)")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("Do you want to use separate service class for your business logic?")]),e._v(" (Up to you)")]),e._v(" "),o("ul",[o("li",[o("p",[e._v('If "yes":')])]),e._v(" "),o("li",[o("p",[o("code",[e._v("Do you want to use a Data Transfer Object (DTO)?")]),e._v(" (Up to you)")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("Do you want to add filtering?")]),e._v(" (Up to you)")])])])]),e._v(" "),o("li",[o("p",[o("code",[e._v("Is this entity read-only?")]),e._v(" (Up to you)")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("Do you want pagination and sorting on your entity?")]),e._v(" (Yes, with infinite scroll)")])]),e._v(" "),o("li",[o("p",[e._v("(If you chose to be prompted to generate micro frontends) "),o("code",[e._v("Do you want to generate micro frontends?")]),e._v(" (Up to you)")])])])]),e._v(" "),o("li",[o("p",[e._v("Affirm each overwrite prompt to resolve conflicts as the Blueprint generates controllers, repositories, services and micro frontends for your entity. "),o("strong",[e._v('Note: Enter "a" to the initial prompt to authorize changes to all the updated files.')])]),e._v(" "),o("ul",[o("li",[o("code",[e._v("Overwrite package.json?")])])])])]),e._v(" "),o("p",[e._v("You have now generated a Spring Boot microservice with database integration and React-based micro frontends.")]),e._v(" "),o("h3",{attrs:{id:"output"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#output"}},[e._v("#")]),e._v(" Output")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("/src/main/java")]),e._v(" and "),o("code",[e._v("src/main/resources")]),e._v(" contain the microservice codebase and configuration.")]),e._v(" "),o("li",[o("code",[e._v("/ui")]),e._v(" holds the React-based micro frontends. By default, JHipster generates 3 MFEs per entity to contain the details, form, and table.")]),e._v(" "),o("li",[o("code",[e._v("/src/main/docker")]),e._v(" contains Docker files to help with local development environments.")])]),e._v(" "),o("h2",{attrs:{id:"configure-the-components"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configure-the-components"}},[e._v("#")]),e._v(" Configure the Components")]),e._v(" "),o("ol",[o("li",[e._v("From the root directory of the project, edit the "),o("code",[e._v("entando.json")]),e._v(" and update "),o("code",[e._v("microservices/conference-ms")]),e._v(" to set the "),o("code",[e._v("healthCheckPath")]),e._v(" and "),o("code",[e._v("dbms")]),e._v(":")])]),e._v(" "),o("div",{staticClass:"language-json extra-class"},[o("pre",{pre:!0,attrs:{class:"language-json"}},[o("code",[e._v("   "),o("span",{pre:!0,attrs:{class:"token property"}},[e._v('"healthCheckPath"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/management/health"')]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n   "),o("span",{pre:!0,attrs:{class:"token property"}},[e._v('"dbms"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"postgresql"')]),e._v("\n")])])]),o("ol",{attrs:{start:"2"}},[o("li",[e._v("Move the generated "),o("code",[e._v("conference-table")]),e._v(" MFE into the microfrontends directory in the bundle project. If you chose a different entity name, you'll need to adjust these commands accordingly.")])]),e._v(" "),o("div",{staticClass:"language-shell extra-class"},[o("pre",{pre:!0,attrs:{class:"language-shell"}},[o("code",[e._v("ent bundle mfe "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" conference-table\n"),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("mv")]),e._v(" microservices/conference-ms/ui/widgets/conference/tableWidget microfrontends/ "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("mv")]),e._v(" microfrontends/tableWidget microfrontends/conference-table\n")])])]),o("ol",{attrs:{start:"3"}},[o("li",[e._v("Now add an API claim to connect the "),o("code",[e._v("conference-table")]),e._v(" MFE to the "),o("code",[e._v("conference-ms")]),e._v(" microservice. The connection information is stored in "),o("code",[e._v("entando.json")]),e._v(".")])]),e._v(" "),o("div",{staticClass:"language-shell extra-class"},[o("pre",{pre:!0,attrs:{class:"language-shell"}},[o("code",[e._v("ent bundle api "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" conference-table conference-api --serviceName"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("conference-ms --serviceUrl"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("http://localhost:8081\n")])])]),o("ol",{attrs:{start:"4"}},[o("li",[e._v("Repeat the previous steps for the "),o("code",[e._v("conference-details")]),e._v(" and "),o("code",[e._v("conference-form")]),e._v(" MFEs:")])]),e._v(" "),o("div",{staticClass:"language-shell extra-class"},[o("pre",{pre:!0,attrs:{class:"language-shell"}},[o("code",[e._v("ent bundle mfe "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" conference-details\nent bundle mfe "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" conference-form\n"),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("mv")]),e._v(" microservices/conference-ms/ui/widgets/conference/detailsWidget microfrontends/ "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("mv")]),e._v(" microfrontends/detailsWidget microfrontends/conference-details\n"),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("mv")]),e._v(" microservices/conference-ms/ui/widgets/conference/formWidget microfrontends/ "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("mv")]),e._v(" microfrontends/formWidget microfrontends/conference-form\n")])])]),o("ol",{attrs:{start:"5"}},[o("li",[e._v("Finally, move the Blueprint-provided auxiliary service definitions into the "),o("code",[e._v("svc")]),e._v(" directory in the bundle project and enable the "),o("code",[e._v("keycloak")]),e._v(" service for local tests:")])]),e._v(" "),o("div",{staticClass:"language-shell extra-class"},[o("pre",{pre:!0,attrs:{class:"language-shell"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[e._v("mv")]),e._v(" microservices/conference-ms/src/main/docker/* svc/\nent bundle svc "),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("enable")]),e._v(" keycloak\n")])])]),o("h2",{attrs:{id:"next-steps"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[e._v("#")]),e._v(" Next Steps")]),e._v(" "),o("p",[e._v("Follow one of the links below to run the bundle components locally, or build and publish the bundle into an Entando Application:")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/v7.1/tutorials/create/ms/run-local.html"}},[e._v("Run Blueprint-generated components locally in dev mode")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/v7.1/tutorials/create/pb/publish-project-bundle.html"}},[e._v("Build and publish a project bundle")]),e._v(" to deploy your microservice and micro frontends to Entando")],1),e._v(" "),o("li",[e._v("Explore the benefits and features of "),o("RouterLink",{attrs:{to:"/v7.1/docs/create/blueprint-features.html"}},[e._v("the Entando Blueprint")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/v7.1/tutorials/create/ms/update-data-model.html"}},[e._v("Iterate on your data model")]),e._v(" using the JHipster Domain Language (JDL)")],1)])])}),[],!1,null,null,null);t.default=a.exports}}]);