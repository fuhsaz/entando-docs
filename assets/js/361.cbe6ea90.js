(window.webpackJsonp=window.webpackJsonp||[]).push([[361],{1280:function(e,o,t){"use strict";t.r(o);var i=t(32),n=Object(i.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"objective"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#objective"}},[e._v("#")]),e._v(" Objective")]),e._v(" "),t("p",[e._v("This tutorial will take you through the steps to install and run the Entando Component Generator powered by JHipster. At the end of the tutorial you can continue your journey by running your components locally or creating an Entando Bundle for the Entando Component Repository.")]),e._v(" "),t("h2",{attrs:{id:"prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),t("ul",[t("li",[e._v("Java 1.8")]),e._v(" "),t("li",[e._v("Maven 3.0.5+")]),e._v(" "),t("li",[e._v("npm 6+")]),e._v(" "),t("li",[e._v("git")]),e._v(" "),t("li",[e._v("Docker")]),e._v(" "),t("li",[e._v("node 12+ (or LTS)")]),e._v(" "),t("li",[e._v("A Docker Hub account or access to a docker registry")])]),e._v(" "),t("h2",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Install JHipster "),t("code",[e._v("npm install -g generator-jhipster@6.9.1")])])]),e._v(" "),t("li",[t("p",[e._v("Install the Entando Blueprint "),t("code",[e._v("npm install -g generator-jhipster-entando@6.2.0")])])]),e._v(" "),t("li",[t("p",[e._v("Create an empty directory to hold your project (this will hold your microservice and micro frontends)")])]),e._v(" "),t("li",[t("p",[e._v("On a command line "),t("code",[e._v("cd")]),e._v(" into your directory and create an Entando plugin using the blueprint "),t("code",[e._v("jhipster --blueprints entando")])])]),e._v(" "),t("li",[t("p",[e._v("You'll be presented with a series of prompts to configure your application. The list below provides a set of choices. "),t("strong",[e._v("You can select the defaults in every step of the tutorial if you want to go fast through this. Just hit Enter at each step")])])])]),e._v(" "),t("ul",[t("li",[e._v("If you want to go through the choices follow this guide. Except where noted below in bold you can choose what works best for you. Base values for the tutorial are in parentheses.\n"),t("ul",[t("li",[t("code",[e._v("What is the base name of your application?")]),e._v(" (my-app or a name of your choice)")]),e._v(" "),t("li",[t("code",[e._v("As you are running in a microservice architecture, on which port would like your server to run? It should be unique to avoid port conflicts.")]),e._v(" (8081)")]),e._v(" "),t("li",[t("code",[e._v("What is your default Java package name? ")]),e._v("(Up to you)")]),e._v(" "),t("li",[t("code",[e._v("Which *type* of database would you like to use?")]),e._v(" (SQL)\n"),t("ul",[t("li",[e._v("If you pick no database here you'll be building a stateless microservice which is a valid choice but the rest of this tutorial won't work)")])])]),e._v(" "),t("li",[t("code",[e._v("Which *production* database would you like to use?")]),e._v(" (PostgreSQL or MySQL)")]),e._v(" "),t("li",[t("code",[e._v("Which *development* database would you like to use?")]),e._v(" (H2 with disk-based persistence )")]),e._v(" "),t("li",[t("code",[e._v("Do you want to use the Spring cache abstraction?")]),e._v(" (Yes, with the Caffeine implementation)")]),e._v(" "),t("li",[t("code",[e._v(" Do you want to use Hibernate 2nd level cache?")]),e._v(" (Yes)")]),e._v(" "),t("li",[t("code",[e._v("Would you like to use Maven or Gradle for building the backend?")]),e._v(" "),t("strong",[e._v("Maven")]),e._v(" <-- this is required for Entando and is the default")]),e._v(" "),t("li",[t("code",[e._v("Which other technologies would you like to use?")]),e._v(" (Don't select any other technologies)")]),e._v(" "),t("li",[t("code",[e._v("What name would you give to the bundle to share on an Entando digital-exchange?")]),e._v(" Enter a name for your Entando Bundle or accept the default")]),e._v(" "),t("li",[t("code",[e._v("Which is the organization name to use when publishing the docker image?")]),e._v(" "),t("strong",[e._v("At this point enter the name of the organization where you are going to push your docker image. If you're using your own docker hub account you should enter your username here.")]),e._v(" (this can be changed later as needed)")]),e._v(" "),t("li",[t("code",[e._v("Would you like to generate micro frontends when creating entities?")]),e._v(" (Always)")]),e._v(" "),t("li",[t("code",[e._v("Would you like to enable internationalization support")]),e._v(" (Up to you)")]),e._v(" "),t("li",[t("code",[e._v("Please choose the native language of the application")]),e._v(" (Up to you)")]),e._v(" "),t("li",[t("code",[e._v("Please choose additional languages to install")]),e._v(" (if you picked internationalization)")]),e._v(" "),t("li",[t("code",[e._v("Besides JUnit and Jest, which testing frameworks would you like to use?")]),e._v(" (Up to you)")]),e._v(" "),t("li",[t("code",[e._v("Would you like to install other generators from the JHipster Marketplace?")]),e._v(" (No)")])])])]),e._v(" "),t("ol",{attrs:{start:"6"}},[t("li",[e._v("Next you will add an Entity to your microservice and create Micro Frontends. In your project run "),t("code",[e._v("jhipster entity Conference")]),e._v(" where Conference is the name of the entity you want to generate")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Add Fields")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("Do you want to add a field to your entity?")]),e._v(" (Yes)")]),e._v(" "),t("li",[t("code",[e._v("What is the name of your field?")]),e._v(" (Enter "),t("code",[e._v("name")]),e._v(")")]),e._v(" "),t("li",[t("code",[e._v("What is the type of your field?")]),e._v(" (Select "),t("code",[e._v("String")]),e._v(")")]),e._v(" "),t("li",[t("code",[e._v("Do you want to add validation rules to your field?")]),e._v(" (No)")]),e._v(" "),t("li",[t("code",[e._v("Do you want to add a field to your entity?")]),e._v(" (Yes)")]),e._v(" "),t("li",[t("code",[e._v("What is the name of your field?")]),e._v(" (Enter "),t("code",[e._v("location")]),e._v(")")]),e._v(" "),t("li",[t("code",[e._v("What is the type of your field?")]),e._v(" (Select "),t("code",[e._v("String")]),e._v(")")]),e._v(" "),t("li",[t("code",[e._v("Do you want to add validation rules to your field?")]),e._v(" (No)")]),e._v(" "),t("li",[t("code",[e._v("Do you want to add a field to your entity?")]),e._v(" (No)")]),e._v(" "),t("li",[t("code",[e._v("Do you want to add a relationship to another entity?")]),e._v(" (No)")]),e._v(" "),t("li",[t("code",[e._v("Do you want to use separate service class for your business logic?")]),e._v(" (Up to you)")]),e._v(" "),t("li",[t("code",[e._v("Do you want to add filtering?")]),e._v(" (Up to you or "),t("code",[e._v("Not Needed")]),e._v(" if you're unsure)")]),e._v(" "),t("li",[t("code",[e._v("Do you want pagination on your entity?")]),e._v(" (Yes, with infinite scroll)")]),e._v(" "),t("li",[e._v("At this point the blueprint will generate controllers, repositories, services, and micro frontends for your entity generation.")]),e._v(" "),t("li",[t("ul",[t("li",[t("code",[e._v("Overwrite src/main/resources/config/liquibase/master.xml?")]),e._v(" When prompted with a conflict at this stage enter "),t("code",[e._v("a")]),e._v(" for All. This will override existing files with the configuration changes needed for your new entity.")])])])])])]),e._v(" "),t("p",[e._v("At this point you have a choice:")]),e._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/v6.2/tutorials/backend-developers/build-and-deploy.html"}},[e._v("Build your Entando Bundle and deploy your microservice and micro frontends to the Entando Component Repository.")])],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/v6.2/tutorials/backend-developers/run-local.html"}},[e._v("Go to the Running Locally tutorial to run your micro frontends and microservice in your local dev environment.")])],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/v6.2/tutorials/micro-frontends/generate-micro-frontends-from-a-database-entity/"}},[e._v("Learn about the key elements included in the Blueprint generated widgets")])],1)])])}),[],!1,null,null,null);o.default=n.exports}}]);