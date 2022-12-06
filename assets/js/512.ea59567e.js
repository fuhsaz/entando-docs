(window.webpackJsonp=window.webpackJsonp||[]).push([[512],{1505:function(e,t,n){"use strict";n.r(t);var a=n(32),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"entando-blueprint-features"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#entando-blueprint-features"}},[e._v("#")]),e._v(" Entando Blueprint Features")]),e._v(" "),n("p",[e._v("The Entando Blueprint makes it easier and faster to customize your application by generating controllers, repositories, services, and micro frontends for your entity. It means generating those project files in minutes, simply by answering questions that define the parameters of your application.")]),e._v(" "),n("p",[e._v("The Entando Blueprint uses JHipster technology based on Embedded JavaScript (EJS), a templating language that provides powerful constructs for large scale file generation.")]),e._v(" "),n("h2",{attrs:{id:"the-features"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#the-features"}},[e._v("#")]),e._v(" The Features:")]),e._v(" "),n("ul",[n("li",[e._v("Backend with Spring Boot\n"),n("ul",[n("li",[e._v("Data modeling")]),e._v(" "),n("li",[e._v("JHipster Design Language (JDL) support")]),e._v(" "),n("li",[e._v("Keycloak integration")]),e._v(" "),n("li",[e._v("Liquibase integration for schema upgrade")]),e._v(" "),n("li",[e._v("Preconfigured Cross-Origin Resource Sharing (CORS) settings")]),e._v(" "),n("li",[e._v("Profiles (dev, prod)")]),e._v(" "),n("li",[e._v("Swagger/OpenAPI frontend")])])]),e._v(" "),n("li",[e._v("Frontend with React\n"),n("ul",[n("li",[e._v(".env profiles")]),e._v(" "),n("li",[e._v("Localization")]),e._v(" "),n("li",[e._v("Keycloak integration")])])])]),e._v(" "),n("p",[e._v("For more information:")]),e._v(" "),n("ul",[n("li",[e._v("Install "),n("a",{attrs:{href:"https://github.com/entando/generator-jhipster-entando/blob/master/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("JHipster Entando Blueprint"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("Try implementing an Entando Blueprint-- "),n("RouterLink",{attrs:{to:"/v7.0/tutorials/create/mfe/react.html"}},[e._v("Create microservices and micro frontents")])],1)]),e._v(" "),n("h2",{attrs:{id:"premade-widgets"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#premade-widgets"}},[e._v("#")]),e._v(" Premade Widgets")]),e._v(" "),n("p",[e._v("When you create an entity using the Entando Blueprint, it generates a few\npremade widgets. Each will be reviewed below.")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#authentication"}},[e._v("Authentication")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#custom-events"}},[e._v("Custom events")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#tests-and-mocks"}},[e._v("Tests and mocks")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#proptypes"}},[e._v("PropTypes")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#fetching-data"}},[e._v("Fetching data")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#form-widget"}},[e._v("Form widget")])])]),e._v(" "),n("p",[e._v("We will be using "),n("code",[e._v("Conference")]),e._v(" as an entity name for the example below.")]),e._v(" "),n("p",[e._v("What the widgets have in "),n("strong",[e._v("common")]),e._v(":")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("Each widget contains a README file that helps with the setup.")])]),e._v(" "),n("li",[n("p",[e._v("All generated widgets are web components created using Custom Elements\nAPI.")])]),e._v(" "),n("li",[n("p",[e._v("Each widget is displayed using the custom element tag. For example, inside the\ndetails widget folder "),n("code",[e._v("conference/detailsWidget/public/index.html")]),e._v(", you\ncan find\n"),n("code",[e._v('conference-details id="1" override-edit-handler hide-edit-button />')]),e._v(".\nThe element "),n("code",[e._v("<conference-details />")]),e._v(" is defined in the component entry\npoint at\n"),n("code",[e._v("conference/detailsWidget/src/custom-elements/ConferenceDetailsElement.js")]),e._v(".")])])]),e._v(" "),n("blockquote",[n("p",[n("strong",[e._v("Note")])]),e._v(" "),n("p",[e._v("Custom element names require a hyphen like "),n("code",[e._v("conference-details")]),e._v(" (kebab-case)--they cannot be single words.")])]),e._v(" "),n("p",[e._v("For more information about web components, custom elements and micro\nfrontends, refer to "),n("RouterLink",{attrs:{to:"/v7.0/tutorials/create/mfe/react.html"}},[e._v("Create a React micro frontend widget")]),e._v(".")],1),e._v(" "),n("h3",{attrs:{id:"authentication"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#authentication"}},[e._v("#")]),e._v(" Authentication")]),e._v(" "),n("p",[e._v("If a widget requires authentication, the component is wrapped in\n"),n("code",[e._v("KeycloakContext.Provider")]),e._v(" and the Keycloak object is fetched from the\n"),n("code",[e._v("window.entando.keycloak")]),e._v(" variable. Entando uses Keycloak as the\nauthentication provider, but you can add any provider as needed.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("ReactDOM.render(\n  <KeycloakContext.Provider value={this.keycloak}>\n    <StylesProvider jss={this.jss}>\n      <ThemeProvider theme={this.muiTheme}>{FormContainer}</ThemeProvider>\n    </StylesProvider>\n  </KeycloakContext.Provider>,\n  this.mountPoint\n);\n")])])]),n("p",[e._v("For more information about the authentication process, please refer\nto the "),n("RouterLink",{attrs:{to:"/v7.0/docs/consume/identity-management.html#authentication"}},[e._v("Authentication section")]),e._v(".")],1),e._v(" "),n("h3",{attrs:{id:"custom-events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#custom-events"}},[e._v("#")]),e._v(" Custom events")]),e._v(" "),n("p",[e._v("All widgets rely on custom events for communication.  That is why each widget contains custom event creation and removal, along with the event listener creation.  Note that when an event listener is created, it should be when\nthe element is no longer needed. It should be created in the custom\nelement’s "),n("code",[e._v("disconnectedCallback()")]),e._v(" function.")]),e._v(" "),n("p",[e._v("To add more event listeners, add the event types to\n"),n("code",[e._v("INPUT_EVENT_TYPES")]),e._v(" object at\n"),n("code",[e._v("detailsWidget/src/custom-elements/widgetEventTypes.js")]),e._v(", which adds\nit to the listener list. To remove the event, simply remove the element from the list.")]),e._v(" "),n("p",[e._v("For more information about custom events and widget communication,\nplease refer to the section on "),n("RouterLink",{attrs:{to:"/v7.0/tutorials/create/mfe/communication.html"}},[e._v("Widget communication")]),e._v(".")],1),e._v(" "),n("h3",{attrs:{id:"tests-and-mocks"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tests-and-mocks"}},[e._v("#")]),e._v(" Tests and mocks")]),e._v(" "),n("p",[e._v("Each widget has tests written for it. Entando uses\n"),n("code",[e._v("react-testing-library")]),e._v(", but developers are free to upgrade and use any\ntool desired. Tests and mocks are at "),n("code",[e._v("detailsWidget/src/components/")]),e._v(".")]),e._v(" "),n("h3",{attrs:{id:"proptypes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#proptypes"}},[e._v("#")]),e._v(" PropTypes")]),e._v(" "),n("p",[e._v("PropTypes for data used across several components are shared. You can\nsee and modify them at "),n("code",[e._v("detailsWidget/src/components/")]),e._v(". This way you can\navoid repeating the same propTypes in each component by importing them.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("import React from 'react';\nimport conferenceType from 'components/__types__/conference';\n\nconst ConferenceDetails = props => {\n  // ...\n};\n\nConferenceDetails.propTypes = {\n  conference: conferenceType,\n  t: PropTypes.func.isRequired,\n};\n\nexport default ConferenceDetails;\n")])])]),n("h3",{attrs:{id:"fetching-data"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#fetching-data"}},[e._v("#")]),e._v(" Fetching data")]),e._v(" "),n("p",[e._v("For data fetching from widgets, use Fetch API. You can find the functions for\nfetching data at "),n("code",[e._v("detailsWidget/src/api")]),e._v(", in different files for\ndifferent contexts.")]),e._v(" "),n("h2",{attrs:{id:"form-widget"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#form-widget"}},[e._v("#")]),e._v(" Form widget")]),e._v(" "),n("p",[e._v("For displaying forms within a widget, use\n"),n("a",{attrs:{href:"https://jaredpalmer.com/formik",target:"_blank",rel:"noopener noreferrer"}},[e._v("Formik"),n("OutboundLink")],1),e._v(" which helps with form state\nmanagement. For data validation, use\n"),n("a",{attrs:{href:"https://github.com/jquense/yup",target:"_blank",rel:"noopener noreferrer"}},[e._v("Yup"),n("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=r.exports}}]);