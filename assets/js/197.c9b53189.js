(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{1544:function(e,t,o){"use strict";o.r(t);var n=o(32),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"generate-microservices-and-micro-frontends"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#generate-microservices-and-micro-frontends"}},[e._v("#")]),e._v(" Generate Microservices and Micro Frontends")]),e._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),n("p",[e._v("This tutorial describes how to use the Entando Component Generator (ECG) to create microservices and micro frontends for deployment to the "),n("RouterLink",{attrs:{to:"/v7.0/docs/compose/ecr-overview.html"}},[e._v("Entando Component Repository")]),e._v(" and Entando Applications. The ECG is powered by "),n("a",{attrs:{href:"https://www.jhipster.tech/",target:"_blank",rel:"noopener noreferrer"}},[e._v("JHipster"),n("OutboundLink")],1),e._v(" and leverages the Entando Blueprint.")],1),e._v(" "),n("p",[n("img",{attrs:{src:o(892),alt:"Entando Component Generator"}})]),e._v(" "),n("p",[e._v("The general flow of component generation is:")]),e._v(" "),n("ol",[n("li",[e._v("Run the Entando Blueprint to create your components (Spring Boot microservice and optionally React micro frontends)")]),e._v(" "),n("li",[e._v("Customize and enhance your generated code")]),e._v(" "),n("li",[e._v("Build an Entando Bundle from your components")]),e._v(" "),n("li",[e._v("Deploy a "),n("RouterLink",{attrs:{to:"/v7.0/docs/consume/custom-resources.html"}},[e._v("custom resource")]),e._v(" for your bundle into Kubernetes")],1),e._v(" "),n("li",[e._v("Install your Entando Bundle into your Entando Application(s)")])]),e._v(" "),n("h2",{attrs:{id:"prerequisites"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),n("p",[e._v("Use the "),n("RouterLink",{attrs:{to:"/v7.0/docs/reference/entando-cli.html#check-the-environment"}},[e._v("Entando CLI")]),e._v(" to verify environmental dependencies (e.g. Java, npm, git, JHipster, Entando Blueprint).")],1),e._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[e._v("ent check-env develop\n")])])]),n("h2",{attrs:{id:"generate-the-project"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#generate-the-project"}},[e._v("#")]),e._v(" Generate the Project")]),e._v(" "),n("p",[e._v("Create a project with microservices.")]),e._v(" "),n("ol",[n("li",[e._v("Setup a new project directory")])]),e._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" testProject "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" testProject\n")])])]),n("ol",{attrs:{start:"2"}},[n("li",[e._v("Use "),n("code",[e._v("ent jhipster")]),e._v(" to generate the project skeleton via the Entando Blueprint")])]),e._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[e._v("ent jhipster --blueprints entando\n")])])]),n("ol",{attrs:{start:"3"}},[n("li",[e._v('This triggers a project initialization prompt. Enter "Yes" in response.')])]),e._v(" "),n("p",[n("code",[e._v("The project dir doesn't seem to be initialized, should I do it now?")]),e._v(" ("),n("strong",[e._v("Yes")]),e._v(")")]),e._v(" "),n("ol",{attrs:{start:"4"}},[n("li",[e._v('Enter "Yes" when prompted with the following overwrite to resolve the conflict:')])]),e._v(" "),n("p",[n("code",[e._v("Overwrite .gitignore?")])]),e._v(" "),n("ol",{attrs:{start:"5"}},[n("li",[n("p",[e._v("You'll be presented with a series of additional prompts pertaining to project configuration. These are echoed below, with the base values for this tutorial in parentheses. Input your preferences, except where a required entry is identified in "),n("strong",[e._v("bold")]),e._v(". Note that the "),n("code",[e._v("Enter")]),e._v(" key will select the default option.")]),e._v(" "),n("ul",[n("li",[n("p",[n("code",[e._v("Please provide the project name:")]),e._v(" (Up to you)")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("What is the base name of your application?")]),e._v(" (Up to you)")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("As you are running in a microservice architecture, on which port would like your server to run? It should be unique to avoid port conflicts.")]),e._v(" (8081)")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("What is your default Java package name?")]),e._v(" (Up to you)")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("Which *type* of database would you like to use?")]),e._v(" (SQL)\n- If no database is selected you'll be building a stateless microservice, which is a valid choice, but the rest of this tutorial won't work.")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("Which *production* database would you like to use?")]),e._v(" (PostgreSQL or MySQL)")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("Which *development* database would you like to use?")]),e._v(" (H2 with disk-based persistence)")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("Which cache do you want to use? (Spring cache abstraction)")]),e._v(" (Caffeine (local cache, for a single node))")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("Do you want to use Hibernate 2nd level cache?")]),e._v(" (Yes)")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("Which other technologies would you like to use?")]),e._v(" ("),n("strong",[e._v("Don't select any other technologies")]),e._v(")")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("Which BE dependencies do you want to use?")]),e._v(" (Dependencies maintained by Entando (entando/entando-bundle-bom))")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("What name would you give to the bundle to share on an Entando Component Repository?")]),e._v(" (Up to you)")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("Which is the organization name to use when publishing the docker image?")]),e._v(" ("),n("strong",[e._v("Enter the name of the organization where you are going to push your Docker image. If you're using your personal Docker hub account enter your username.")]),e._v(") <-- this can be changed later as needed")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("Would you like to generate micro frontends when creating entities?")]),e._v(" (Always)")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("Would you like to enable internationalization support")]),e._v(" (Up to you)")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("Please choose the native language of the application")]),e._v(" (Up to you)")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("Besides JUnit and Jest, which testing frameworks would you like to use?")]),e._v(" (Up to you)")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("Would you like to install other generators from the JHipster Marketplace?")]),e._v(" (No)")])])])]),e._v(" "),n("li",[n("p",[e._v("Next, add an Entity to your microservice and create the corresponding micro frontends. In this tutorial, "),n("code",[e._v("Conference")]),e._v(" is the name of the entity that will be added to the application.")])])]),e._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[e._v("ent jhipster entity Conference\n")])])]),n("ol",{attrs:{start:"7"}},[n("li",[n("p",[e._v("You'll be presented with a series of prompts to add fields to your entity. These are echoed below, with the base values for this tutorial in parentheses. Input your preferences, and note that the "),n("code",[e._v("Enter")]),e._v(" key will select the default option.")]),e._v(" "),n("ul",[n("li",[n("p",[n("code",[e._v("Do you want to add a field to your entity?")]),e._v(" (Yes)")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("What is the name of your field?")]),e._v(" (name)")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("What is the type of your field?")]),e._v(" (String)")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("Do you want to add validation rules to your field?")]),e._v(" (No)")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("Do you want to add a field to your entity?")]),e._v(" (Yes)")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("What is the name of your field?")]),e._v(" (location)")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("What is the type of your field?")]),e._v(" (String)")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("Do you want to add validation rules to your field?")]),e._v(" (No)")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("Do you want to add a field to your entity?")]),e._v(" (No)")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("Do you want to add a relationship to another entity?")]),e._v(" (No)")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("Do you want to use separate service class for your business logic?")]),e._v(" (Up to you)")]),e._v(" "),n("ul",[n("li",[n("p",[e._v('If "yes":')])]),e._v(" "),n("li",[n("p",[n("code",[e._v("Do you want to use a Data Transfer Object (DTO)?")]),e._v(" (Up to you)")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("Do you want to add filtering?")]),e._v(" (Up to you)")])])])]),e._v(" "),n("li",[n("p",[n("code",[e._v("Is this entity read-only?")]),e._v(" (Up to you)")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("Do you want pagination and sorting on your entity?")]),e._v(" (Yes, with infinite scroll)")])]),e._v(" "),n("li",[n("p",[e._v("(If you chose to be prompted to generate micro frontends) "),n("code",[e._v("Do you want to generate micro frontends?")]),e._v(" (Up to you)")])])])]),e._v(" "),n("li",[n("p",[e._v("Affirm each overwrite prompt (echoed below) to resolve conflicts as the Blueprint generates controllers, repositories, services and micro frontends for your entity. "),n("strong",[e._v('Note: Enter "a" in response to the initial prompt to authorize all overwrites to existing files with the necessary configuration changes.')])]),e._v(" "),n("ul",[n("li",[n("p",[n("code",[e._v("Overwrite src/main/resources/config/liquibase/master.xml?")])])]),e._v(" "),n("li",[n("p",[n("code",[e._v("Overwrite package.json?")])])]),e._v(" "),n("li",[n("p",[n("code",[e._v("Overwrite bundle/descriptor.yaml?")])])]),e._v(" "),n("li",[n("p",[n("code",[e._v("Overwrite bundle/plugins/jhipster-plugin.yaml?")])])]),e._v(" "),n("li",[n("p",[n("code",[e._v("Overwrite src/main/resources/config/liquibase/master.xml?")])])]),e._v(" "),n("li",[n("p",[n("code",[e._v("Overwrite src/main/java/com/mycompany/myapp/config/CacheConfiguration.java?")])])])])])]),e._v(" "),n("p",[e._v("You have now generated an Entando project, including a Spring Boot microservice with database integration and React-based micro frontends.")]),e._v(" "),n("h3",{attrs:{id:"project-structure"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#project-structure"}},[e._v("#")]),e._v(" Project Structure")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("/src/main/docker")]),e._v(" contains Docker files to help with local development environments.")]),e._v(" "),n("li",[n("code",[e._v("/src/main/java")]),e._v(" and "),n("code",[e._v("src/main/resources")]),e._v(" contain the microservice codebase and configuration.")]),e._v(" "),n("li",[n("code",[e._v("/ui")]),e._v(" holds the React-based micro frontends. By default, JHipster generates 3 MFEs per entity to contain the details, form, and table.")]),e._v(" "),n("li",[n("code",[e._v("/bundle")]),e._v(" is used to assemble the project code into an Entando Bundle.")])]),e._v(" "),n("h2",{attrs:{id:"next-steps"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[e._v("#")]),e._v(" Next Steps")]),e._v(" "),n("p",[e._v("Follow one of the links below to learn how to assemble and run a bundle locally or deploy it.")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/v7.0/tutorials/create/pb/publish-project-bundle.html"}},[e._v("Build and publish a project bundle")]),e._v(" to deploy your microservice and micro frontends to the Entando Component Repository")],1),e._v(" "),n("li",[e._v("Learn how to "),n("RouterLink",{attrs:{to:"/v7.0/tutorials/create/ms/run-local.html"}},[e._v("run Blueprint-generated components locally in dev mode")])],1),e._v(" "),n("li",[e._v("Discover the benefits and features of "),n("RouterLink",{attrs:{to:"/v7.0/docs/create/blueprint-features.html"}},[e._v("the Entando Blueprint")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/v7.0/tutorials/create/ms/update-data-model.html"}},[e._v("Iterate on your data model")]),e._v(" using the JHipster Domain Language (JDL)")],1)])])}),[],!1,null,null,null);t.default=r.exports},892:function(e,t,o){e.exports=o.p+"assets/img/component-gen-flow.15bc61e9.png"}}]);