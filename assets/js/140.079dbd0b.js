(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{1143:function(e,t,r){"use strict";r.r(t);var a=r(32),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"update-the-project-data-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-the-project-data-model"}},[e._v("#")]),e._v(" Update the Project Data Model")]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("This tutorial explains how to use the "),a("RouterLink",{attrs:{to:"/next/docs/create/component-gen-overview.html"}},[e._v("Entando Component Generator")]),e._v(" powered by "),a("a",{attrs:{href:"https://www.jhipster.tech/",target:"_blank",rel:"noopener noreferrer"}},[e._v("JHipster"),a("OutboundLink")],1),e._v(" to quickly update the data model for your Entando project.")],1),e._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("p",[e._v("A "),a("RouterLink",{attrs:{to:"/next/tutorials/create/ms/generate-microservices-and-micro-frontends.html"}},[e._v("Blueprint-generated project")])],1),e._v(" "),a("h2",{attrs:{id:"tutorial"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tutorial"}},[e._v("#")]),e._v(" Tutorial")]),e._v(" "),a("p",[e._v("The steps below assume you're working out of the root directory of the microservice, e.g. /microservices/conference-ms.")]),e._v(" "),a("ol",[a("li",[e._v("Use JHipster to extract the current application description. The resulting JHipster Domain Language (JDL) file contains your project's application configuration and entity definitions:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ent jhipster export-jdl export.jdl\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("To strip unnecessary information, create a new JDL file comprising only the elements that describe entities. If you followed the "),a("RouterLink",{attrs:{to:"/next/tutorials/create/ms/generate-microservices-and-micro-frontends.html"}},[e._v("bundle project generation tutorial")]),e._v(", that could be as simple as creating a file named "),a("code",[e._v("conference.jdl")]),e._v(" that contains the following:")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("entity Conference {\n  name String\n}\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[e._v("Enhance this definition by adding fields, entities, table mappings, field validation, etc. This is easily accomplished with the "),a("a",{attrs:{href:"https://www.jhipster.tech/jdl/intro",target:"_blank",rel:"noopener noreferrer"}},[e._v("online JDL-Studio or corresponding JHipster IDE plugins/extensions"),a("OutboundLink")],1),e._v(". For example:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("entity Conference {\n  name String required\n  location String\n  date ZonedDateTime\n}\n\nentity Session {\n  name String required\n  track Track required\n}\n\nenum Track {\n  BUSINESS, TECHNICAL\n}\n\nrelationship OneToMany {\n   Conference to Session\n}\n")])])]),a("p",[e._v("This file content adds two fields to the Conference entity, introduces the Session entity plus an enum, and creates a mapping between the two entities. Below is the updated data model in JDL-Studio:")]),e._v(" "),a("p",[a("img",{attrs:{src:r(488),alt:"conference.jdl"}})]),e._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[e._v("Import the JDL file into your application. You will be prompted with the option to generate MFEs if this was requested during project generation.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ent jhipster import-jdl conference.jdl\n")])])]),a("p",[e._v("If the default project structure has been retained, this step will update your data model, add entries to Liquibase to upgrade database schema during deployment, add service methods to your microservice, add fields to your MFEs, etc.")]),e._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[e._v("You can now build your updated project and "),a("RouterLink",{attrs:{to:"/next/tutorials/create/ms/run-local.html"}},[e._v("run it locally")]),e._v(" or "),a("RouterLink",{attrs:{to:"/next/tutorials/create/pb/publish-project-bundle.html"}},[e._v("deploy it to Entando")]),e._v(". Definition enhancement through build and test can be repeated as many times as needed.")],1)])])}),[],!1,null,null,null);t.default=n.exports},488:function(e,t,r){e.exports=r.p+"assets/img/jhipster-jdl.613b27ea.png"}}]);