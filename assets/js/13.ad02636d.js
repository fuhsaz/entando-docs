(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1179:function(t,e,a){"use strict";a.r(e);var n=a(32),i=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"entando-strapi"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#entando-strapi"}},[t._v("#")]),t._v(" Entando Strapi")]),t._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),n("p",[t._v("Entando 7.1 offers Strapi integration to provide the flexibility and customization of a leading open source and headless CMS. Users are able to create and organize application content through the seamless incorporation of Strapi into the App Builder experience.")]),t._v(" "),n("p",[t._v("Strapi configuration is achieved using the Strapi packaged business capability (PBC) available on the Entando Cloud Hub. This tutorial covers:")]),t._v(" "),n("ol",[n("li",[n("a",{attrs:{href:"#prerequisites"}},[t._v("Prerequisites")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#installation"}},[t._v("Installation")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#configuration"}},[t._v("Configuration")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#next-steps"}},[t._v("Next Steps")])])]),t._v(" "),n("h2",{attrs:{id:"prerequisites"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/docs/getting-started/"}},[t._v("A working instance of Entando")])],1),t._v(" "),n("li",[t._v("Verify dependencies with the "),n("RouterLink",{attrs:{to:"/next/docs/getting-started/entando-cli.html#check-the-environment"}},[t._v("Entando CLI")]),t._v(": "),n("code",[t._v("ent check-env develop")])],1)]),t._v(" "),n("h2",{attrs:{id:"installation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),n("p",[t._v("Entando's Strapi implementation is available from the Entando Cloud Hub via 3 bundles, which must be installed in the Local Hub of the App Builder.")]),t._v(" "),n("ol",[n("li",[t._v("Create a file named "),n("code",[t._v("strapi-pvc.yaml")]),t._v(" with this content:")])]),t._v(" "),n("div",{staticClass:"language-yaml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" PersistentVolumeClaim\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("fe9131bb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ca5e5232"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("entando"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("strapi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("server"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pvc\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("accessModes")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ReadWriteOnce\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("resources")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("requests")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("storage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2Gi\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("storageClassName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" csi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("cinder"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("high"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("speed\n")])])]),n("ol",{attrs:{start:"2"}},[n("li",[t._v("Create the persistent volume claim (PVC) using this command:")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("kubectl apply -f strapi-pvc.yaml -n entando\n")])])]),n("ol",{attrs:{start:"3"}},[n("li",[t._v("Using the ent CLI, apply the Custom Resource Definitions for the Strapi bundles:")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("ent ecr deploy --repo=https://github.com/Entando-Hub/entando-strapi-bundle.git\nent ecr deploy --repo=https://github.com/Entando-Hub/entando-strapi-config-bundle.git\nent ecr deploy --repo=https://github.com/Entando-Hub/entando-strapi-widgets-bundle.git\n")])])]),n("ol",{attrs:{start:"4"}},[n("li",[t._v("Install the bundles into your Local Hub:")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("ent ecr install entando-strapi-bundle\nent ecr install entando-strapi-config-bundle\nent ecr install entando-strapi-widgets-bundle\n")])])]),n("h3",{attrs:{id:"roles"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#roles"}},[t._v("#")]),t._v(" Roles")]),t._v(" "),n("h4",{attrs:{id:"entando-strapi-content-template-application"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#entando-strapi-content-template-application"}},[t._v("#")]),t._v(" Entando Strapi Content Template Application")]),t._v(" "),n("p",[t._v("To add Keycloak role mapping for the "),n("code",[t._v("entando-strapi-config")]),t._v(" and "),n("code",[t._v("entando-strapi-templates")]),t._v(" clients:")]),t._v(" "),n("ol",[n("li",[n("RouterLink",{attrs:{to:"/next/docs/consume/identity-management.html#logging-into-your-keycloak-instance"}},[t._v("Login to your Keycloak instance")]),t._v(" as an admin")],1),t._v(" "),n("li",[t._v("From the left menu, select "),n("code",[t._v("Users")])]),t._v(" "),n("li",[t._v("Click on the ID associated with the admin username")]),t._v(" "),n("li",[t._v("Click on the tab "),n("code",[t._v("Role Mappings")])]),t._v(" "),n("li",[t._v("From the "),n("code",[t._v("Client Roles")]),t._v(' drop-down, select the role ending in "strapi-config-server"\n'),n("ul",[n("li",[t._v("Select all "),n("code",[t._v("Available Roles")]),t._v(" and add them to "),n("code",[t._v("Client Default Roles")])])])]),t._v(" "),n("li",[t._v("From the "),n("code",[t._v("Client Roles")]),t._v(' drop-down, select the role ending in "strapi-template-server"\n'),n("ul",[n("li",[t._v("Select all "),n("code",[t._v("Available Roles")]),t._v(" and add them to "),n("code",[t._v("Client Default Roles")])])])])]),t._v(" "),n("p",[n("img",{attrs:{src:a(548),alt:"strapi-keycloak-settings.png"}})]),t._v(" "),n("h4",{attrs:{id:"entando-strapi-application"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#entando-strapi-application"}},[t._v("#")]),t._v(" Entando Strapi Application")]),t._v(" "),n("p",[t._v("To access the Strapi APIs, the App Builder user is given the Super Admin role. The existing Entando Keycloak token is used for authentication.")]),t._v(" "),n("h3",{attrs:{id:"registration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#registration"}},[t._v("#")]),t._v(" Registration")]),t._v(" "),n("p",[t._v("Strapi registration must occur after bundle installation to use Strapi within the Entando Platform. The Strapi PBC creates a new Strapi instance for your Entando Application and does not provide a mechanism to link an existing Strapi instance.")]),t._v(" "),n("p",[t._v("To log in to your Entando Strapi:")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("Open a browser tab and enter your App Builder base URL followed by "),n("code",[t._v("/entando-strapi/admin/")]),t._v(", e.g. "),n("code",[t._v("http://YOUR-SERVER-URL/entando-strapi/admin/")])])]),t._v(" "),n("li",[n("p",[t._v("Enter the following credentials:")]),t._v(" "),n("ul",[n("li",[t._v("username: strapi@entando.local")]),t._v(" "),n("li",[t._v("password: adminadmin")])])])]),t._v(" "),n("p",[n("img",{attrs:{src:a(549),alt:"strapi-registration.png"}})]),t._v(" "),n("h2",{attrs:{id:"configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),n("p",[t._v("The URL to access the Strapi instance must be provided before content can be managed. Note that the configuration of content templates relies on existing Strapi content.")]),t._v(" "),n("p",[t._v("Perform the steps in the following sections to properly prepare your Entando Application to use your Strapi instance:")]),t._v(" "),n("ol",[n("li",[t._v("Create Strapi content for use by the Strapi Content Template Widget")]),t._v(" "),n("li",[t._v("Configure the Strapi Config Widget with the URL of your Strapi instance")]),t._v(" "),n("li",[t._v("Configure the Strapi Content Template Widget using existing Strapi content")])]),t._v(" "),n("h3",{attrs:{id:"create-content-in-strapi"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#create-content-in-strapi"}},[t._v("#")]),t._v(" Create Content in Strapi")]),t._v(" "),n("p",[t._v("Before you can configure the Strapi Content Template Widget, you must add content to your Strapi instance. Refer to the Strapi "),n("a",{attrs:{href:"https://docs.strapi.io/developer-docs/latest/getting-started/quick-start.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Quick Start Guide"),n("OutboundLink")],1),t._v(" for a tutorial on content creation. Additional information is available in the "),n("a",{attrs:{href:"https://docs.strapi.io/user-docs/latest/getting-started/introduction.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Strapi user guide"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("h3",{attrs:{id:"configure-the-strapi-config-widget"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configure-the-strapi-config-widget"}},[t._v("#")]),t._v(" Configure the Strapi Config Widget")]),t._v(" "),n("p",[t._v("The Strapi Config Widget provides the Strapi Content Template, Strapi Content and Strapi Content List widgets with the application URL of the Strapi instance. The URL is managed from a single field entry, which must be defined prior to using the 3 dependent widgets.")]),t._v(" "),n("p",[t._v("Follow the steps below to publish the Strapi Config Widget to a page in your Entando Application and expose the Strapi URL.")]),t._v(" "),n("ol",[n("li",[n("RouterLink",{attrs:{to:"/next/tutorials/compose/page-management.html#create-a-page"}},[t._v("Create a page")]),t._v(" in your Entando Application dedicated to the Strapi Config Widget")],1),t._v(" "),n("li",[t._v("Go to  "),n("code",[t._v("App Builder")]),t._v(" → "),n("code",[t._v("Pages")]),t._v(" → "),n("code",[t._v("Management")])]),t._v(" "),n("li",[t._v("Find the Strapi configuration page in the page tree and click on the three dots representing the "),n("code",[t._v("Actions")]),t._v(" icon")]),t._v(" "),n("li",[t._v("Select "),n("code",[t._v("Design")]),t._v(" from the drop-down")]),t._v(" "),n("li",[t._v("Click on the "),n("code",[t._v("Widgets")]),t._v(" tab in the right panel and expand the "),n("code",[t._v("User")]),t._v(" section")]),t._v(" "),n("li",[t._v("Drag and drop the Strapi Config Widget into an empty frame in the Page Designer")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(550),alt:"strapi-config-page-designer.png"}})]),t._v(" "),n("ol",{attrs:{start:"7"}},[n("li",[t._v("Click "),n("code",[t._v("Publish")])]),t._v(" "),n("li",[t._v("Click "),n("code",[t._v("View Published Page")])]),t._v(" "),n("li",[t._v("On the published page, enter the URL of the Strapi instance, which is your App Builder base URL followed by "),n("code",[t._v("/entando-strapi")]),t._v(", e.g. "),n("code",[t._v("http://hubdev.okd-entando.org/entando-strapi")])])]),t._v(" "),n("p",[n("img",{attrs:{src:a(551),alt:"strapi-url.png"}})]),t._v(" "),n("h3",{attrs:{id:"configure-the-strapi-content-template-widget"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configure-the-strapi-content-template-widget"}},[t._v("#")]),t._v(" Configure the Strapi Content Template Widget")]),t._v(" "),n("p",[t._v("An Entando Strapi instance must include one or more content templates before content can be managed via the Strapi Content and Strapi Content List widgets (TODO: add link to content tutorial(s)). These templates are selected as part of content creation to provide the content with a type and attributes.")]),t._v(" "),n("p",[t._v("Follow the steps below to create and modify content templates with the Strapi Content Template Widget.")]),t._v(" "),n("h4",{attrs:{id:"create-a-content-template"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#create-a-content-template"}},[t._v("#")]),t._v(" Create a Content Template")]),t._v(" "),n("ol",[n("li",[n("RouterLink",{attrs:{to:"/next/tutorials/compose/page-management.html#create-a-page"}},[t._v("Create a page")]),t._v(" in your Entando Application dedicated to the Strapi Content Template Widget")],1),t._v(" "),n("li",[t._v("Go to  "),n("code",[t._v("App Builder")]),t._v(" → "),n("code",[t._v("Pages")]),t._v(" → "),n("code",[t._v("Management")])]),t._v(" "),n("li",[t._v("Find the Strapi template page in the page tree and click on the "),n("code",[t._v("Actions")]),t._v(" icon")]),t._v(" "),n("li",[t._v("Select "),n("code",[t._v("Design")]),t._v(" from the drop-down")]),t._v(" "),n("li",[t._v("Click on the "),n("code",[t._v("Widgets")]),t._v(" tab in the right panel and expand the "),n("code",[t._v("User")]),t._v(" section")]),t._v(" "),n("li",[t._v("Drag and drop the Strapi Content Template Widget into an empty frame in the middle panel")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(552),alt:"strapi-template-page-designer.png"}})]),t._v(" "),n("ol",{attrs:{start:"7"}},[n("li",[t._v("Click "),n("code",[t._v("Publish")])]),t._v(" "),n("li",[t._v("Click "),n("code",[t._v("View Published Page")])]),t._v(" "),n("li",[t._v("Click "),n("code",[t._v("Add")]),t._v(" on the right")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(553),alt:"strapi-add-template.png"}})]),t._v(" "),n("ol",{attrs:{start:"10"}},[n("li",[t._v("Add a content template, where the following fields are mandatory:")])]),t._v(" "),n("ul",[n("li",[t._v("Content type: The drop-down displays "),n("a",{attrs:{href:"#create-content-in-strapi"}},[t._v("existing content types")])]),t._v(" "),n("li",[t._v("Name: Name of the template associated with the selected content type")]),t._v(" "),n("li",[t._v("Attributes: Pre-populated from the Strapi definition of the content type")]),t._v(" "),n("li",[t._v("HTML Model: HTML code for the template, which is guided by clicking "),n("code",[t._v("Inline editing assist")])])]),t._v(" "),n("p",[n("img",{attrs:{src:a(554),alt:"strapi-content-template-fields.png"}})]),t._v(" "),n("ol",{attrs:{start:"11"}},[n("li",[t._v("Click "),n("code",[t._v("Save")])])]),t._v(" "),n("h4",{attrs:{id:"edit-a-content-template"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#edit-a-content-template"}},[t._v("#")]),t._v(" Edit a Content Template")]),t._v(" "),n("ol",[n("li",[t._v("Go to  "),n("code",[t._v("App Builder")]),t._v(" → "),n("code",[t._v("Pages")]),t._v(" → "),n("code",[t._v("Management")])]),t._v(" "),n("li",[t._v("Find the Strapi template page in the page tree and click on the "),n("code",[t._v("Actions")]),t._v(" icon")]),t._v(" "),n("li",[t._v("Select "),n("code",[t._v("Design")]),t._v(" from the drop-down")]),t._v(" "),n("li",[t._v("Click "),n("code",[t._v("View Published Page")])]),t._v(" "),n("li",[t._v("Click on the three dots on the right of the line listing the template")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(555),alt:"strapi-template-listed.png"}})]),t._v(" "),n("ol",{attrs:{start:"6"}},[n("li",[t._v("Select "),n("code",[t._v("Edit")]),t._v(" to edit the Name, HTML Model and/or Style Sheet fields")]),t._v(" "),n("li",[t._v("Click "),n("code",[t._v("Save")])])]),t._v(" "),n("blockquote",[n("p",[t._v("Notes:")]),t._v(" "),n("ul",[n("li",[t._v("You may not modify the content type")]),t._v(" "),n("li",[t._v("Editing the template will not change the ID of the content template")])])]),t._v(" "),n("h4",{attrs:{id:"delete-a-content-template"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#delete-a-content-template"}},[t._v("#")]),t._v(" Delete a Content Template")]),t._v(" "),n("ol",[n("li",[t._v("Go to  "),n("code",[t._v("App Builder")]),t._v(" → "),n("code",[t._v("Pages")]),t._v(" → "),n("code",[t._v("Management")])]),t._v(" "),n("li",[t._v("Find the Strapi template page in the page tree and click on the "),n("code",[t._v("Actions")]),t._v(" icon")]),t._v(" "),n("li",[t._v("Select "),n("code",[t._v("Design")]),t._v(" from the drop-down")]),t._v(" "),n("li",[t._v("Click "),n("code",[t._v("View Published Page")])]),t._v(" "),n("li",[t._v("Click on the three dots on the right of the line listing the template")]),t._v(" "),n("li",[t._v("Select "),n("code",[t._v("Delete")])]),t._v(" "),n("li",[t._v("Click "),n("code",[t._v("Delete")]),t._v(" in the pop-up box to confirm")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(556),alt:"strapi-delete-template.png"}})]),t._v(" "),n("h2",{attrs:{id:"next-steps"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[t._v("#")]),t._v(" Next Steps")]),t._v(" "),n("p",[t._v("You are now able to develop your Entando Application using Strapi! To learn how to apply and manage content, check out the following tutorials:")]),t._v(" "),n("ul",[n("li",[t._v("TODO: Strapi Content Widget")]),t._v(" "),n("li",[t._v("TODO: Strapi Content List Widget")])])])}),[],!1,null,null,null);e.default=i.exports},548:function(t,e,a){t.exports=a.p+"assets/img/strapi-keycloak-settings.1a2f0c4e.png"},549:function(t,e,a){t.exports=a.p+"assets/img/strapi-registration.ee3a3aaa.png"},550:function(t,e,a){t.exports=a.p+"assets/img/strapi-config-page-designer.296d6262.png"},551:function(t,e,a){t.exports=a.p+"assets/img/strapi-url.b6ab9411.png"},552:function(t,e,a){t.exports=a.p+"assets/img/strapi-template-page-designer.01695d01.png"},553:function(t,e,a){t.exports=a.p+"assets/img/strapi-add-template.00859dcc.png"},554:function(t,e,a){t.exports=a.p+"assets/img/strapi-content-template-fields.ee27afb2.png"},555:function(t,e,a){t.exports=a.p+"assets/img/strapi-template-listed.70488d52.png"},556:function(t,e,a){t.exports=a.p+"assets/img/strapi-delete-template.af7ff56c.png"}}]);