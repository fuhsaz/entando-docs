(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{1329:function(e,t,n){"use strict";n.r(t);var o=n(32),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"entando-component-manager"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#entando-component-manager"}},[e._v("#")]),e._v(" Entando Component Manager")]),e._v(" "),o("p",[e._v("​​An Entando Application is composed of the "),o("RouterLink",{attrs:{to:"/v6.3.2/docs/compose/app-builder.html"}},[e._v("Entando App Builder")]),e._v(", "),o("RouterLink",{attrs:{to:"/v6.3.2/docs/getting-started/concepts-overview.html#entando-app-engine"}},[e._v("Entando App Engine")]),e._v(", and Entando Component Manager. The Entando Component Manager (ECM) provides functionality to build and organize micro frontends and widgets from within the App Builder. It also manages the connections between an application and the installed plugins.")],1),e._v(" "),o("p",[e._v("The Component Manager is a service that links the "),o("RouterLink",{attrs:{to:"/v6.3.2/docs/compose/ecr-overview.html"}},[e._v("Entando Component Repository")]),e._v(" (ECR) of the App Builder to the core application instance. It appears as "),o("code",[e._v("quickstart-cm-deployment")]),e._v(" in the Kubernetes pod list:")],1),e._v(" "),o("p",[o("img",{attrs:{src:n(664),alt:"pods.png"}})]),e._v(" "),o("p",[e._v("The ECM communicates with the Kubernetes service to populate the ECR with the bundles available as "),o("RouterLink",{attrs:{to:"/v6.3.2/docs/consume/custom-resources.html"}},[e._v("Custom Resources")]),e._v(" in the Entando namespace. These bundles can be installed in the application and managed from within the ECR.")],1),e._v(" "),o("p",[o("img",{attrs:{src:n(665),alt:"ecm-flow.png"}})]),e._v(" "),o("p",[e._v("In the flow pictured above:")]),e._v(" "),o("ol",[o("li",[e._v("A user visits the ECR page in the App Builder")]),e._v(" "),o("li",[e._v("The ECR makes a REST call to the "),o("code",[e._v("digital-exchange")]),e._v(" endpoint")]),e._v(" "),o("li",[e._v("The Component Manager receives the "),o("code",[e._v("digital-exchange")]),e._v(" request")]),e._v(" "),o("li",[e._v("The Component Manager calls the "),o("code",[e._v("k8s-service")]),e._v(" to return the list of available "),o("code",[e._v("EntandoDeBundles")]),e._v(" in the namespace")])]),e._v(" "),o("p",[e._v("A similar process occurs when bundles are installed or uninstalled. The "),o("RouterLink",{attrs:{to:"/v6.3.2/docs/consume/operator-intro.html"}},[e._v("Entando Operator")]),e._v(" performs actions based on lifecycle events for affected Entando Custom Resources.")],1),e._v(" "),o("h3",{attrs:{id:"key-features"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#key-features"}},[e._v("#")]),e._v(" Key Features:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Manages the installation and removal of project bundles")])]),e._v(" "),o("li",[o("p",[e._v("Makes components available in the App Builder through the Component Repository")])]),e._v(" "),o("li",[o("p",[e._v("Handles versioning of component bundles for sharing and collaborating")])])])])}),[],!1,null,null,null);t.default=a.exports},664:function(e,t,n){e.exports=n.p+"assets/img/pods.432103e9.png"},665:function(e,t,n){e.exports=n.p+"assets/img/ecm-flow.5e59945f.png"}}]);