(window.webpackJsonp=window.webpackJsonp||[]).push([[606],{1653:function(e,t,a){"use strict";a.r(t);var n=a(32),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"build-and-publish-a-bundle-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-and-publish-a-bundle-project"}},[e._v("#")]),e._v(" Build and Publish a Bundle Project")]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("This tutorial describes how to deploy an existing Entando project directory into the "),a("RouterLink",{attrs:{to:"/v7.1/docs/getting-started/concepts-overview.html#entando-local-hub"}},[e._v("Local Hub")]),e._v(". Following the steps below will:")],1),e._v(" "),a("ul",[a("li",[e._v("Build Docker images for the bundle and any microservices")]),e._v(" "),a("li",[e._v("Push the Docker images to a Docker registry")]),e._v(" "),a("li",[e._v("Apply the bundle custom resource to Kubernetes")]),e._v(" "),a("li",[e._v("Install the bundle into an Entando Application")])]),e._v(" "),a("p",[e._v("The Entando Bundle CLI tool ("),a("strong",[e._v("ent bundle")]),e._v(") automates many of the tasks involved in deploying an Entando project bundle.")]),e._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("ul",[a("li",[e._v("Verify dependencies with the "),a("RouterLink",{attrs:{to:"/v7.1/docs/getting-started/entando-cli.html#check-the-environment"}},[e._v("Entando CLI")]),e._v(": "),a("code",[e._v("ent check-env develop")])],1),e._v(" "),a("li",[e._v("Authenticated Docker credentials")]),e._v(" "),a("li",[e._v("A Docker repository")]),e._v(" "),a("li",[e._v("A running Entando instance with your profile attached. To check or configure your profile, see the "),a("RouterLink",{attrs:{to:"/v7.1/docs/getting-started/ent-profile.html"}},[e._v("ent Profile Management page")]),e._v(".")],1),e._v(" "),a("li",[e._v("An Entando project directory. You can create this "),a("RouterLink",{attrs:{to:"/v7.1/tutorials/create/pb/publish-simple-bundle.html"}},[e._v("from scratch")]),e._v(" or "),a("RouterLink",{attrs:{to:"/v7.1/tutorials/create/ms/generate-microservices-and-micro-frontends.html"}},[e._v("with the Entando Component Generator")]),e._v(".")],1)]),e._v(" "),a("h2",{attrs:{id:"create-and-deploy-a-bundle-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-and-deploy-a-bundle-project"}},[e._v("#")]),e._v(" Create and Deploy a Bundle Project")]),e._v(" "),a("p",[e._v("The following steps leverage the Entando "),a("code",[e._v("ent bundle")]),e._v(" command and its convenience methods.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("From the root bundle directory, generate the Docker image:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("ent bundle pack\n")])])]),a("p",[e._v("This builds the bundle components and Docker images.")])]),e._v(" "),a("li",[a("p",[e._v("Publish the Docker image to a Docker registry:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("ent bundle publish\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Deploy the bundle to your Entando Application:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("ent bundle deploy\n")])])]),a("p",[e._v("Your bundle will appear in the Local Hub of your Entando instance, accessible from "),a("code",[e._v("App Builder")]),e._v(" → "),a("code",[e._v("Hub")]),e._v(", and show a status of DEPLOYED.")])]),e._v(" "),a("li",[a("p",[e._v("Install the bundle in your Entando Application from "),a("code",[e._v("App Builder")]),e._v(" → "),a("code",[e._v("Hub")]),e._v(" or with the following command:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("ent bundle "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n")])])]),a("p",[e._v("Your bundle will now show a status of INSTALLED.")])])]),e._v(" "),a("h2",{attrs:{id:"notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[e._v("#")]),e._v(" Notes")]),e._v(" "),a("p",[e._v("The Entando Platform downloads and installs the Docker images for microservices and installs the micro frontends into the Entando Application. You can add micro frontend widgets to a page or page template provided by Entando, or to one you create yourself following the "),a("RouterLink",{attrs:{to:"/v7.1/tutorials/compose/page-management.html"}},[e._v("Page Management tutorial")]),e._v(".")],1),e._v(" "),a("p",[e._v("An application based on the Entando Blueprint expects a user to be authenticated. If your project bundle was generated using the Entando Component Generator, your widget can only be added to a page template that includes the UX fragment "),a("code",[e._v("keycloak_auth")]),e._v(".")])])}),[],!1,null,null,null);t.default=o.exports}}]);