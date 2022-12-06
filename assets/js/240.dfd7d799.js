(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{1100:function(e,t,n){"use strict";n.r(t);var a=n(32),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"how-microservices-get-connected-to-entando-apps"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-microservices-get-connected-to-entando-apps"}},[e._v("#")]),e._v(" How Microservices get Connected to Entando Apps")]),e._v(" "),n("p",[e._v("In this document we will describe some of the assumptions and details related to the process of connecting a microservice part of a bundle to an Entando App.")]),e._v(" "),n("p",[e._v("In order to fully understand the concepts explained in this piece of the documentation, please make sure you have familiarity with these concepts:")]),e._v(" "),n("ol",[n("li",[n("RouterLink",{attrs:{to:"/next/docs/consume/custom-resources.html"}},[e._v("Entando custom resources")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/next/docs/getting-started/concepts-overview.html#entando-ingresses"}},[e._v("Entando ingresses")])],1)]),e._v(" "),n("h2",{attrs:{id:"how-a-microservice-from-a-bundle-gets-deployed-with-the-ecr"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-a-microservice-from-a-bundle-gets-deployed-with-the-ecr"}},[e._v("#")]),e._v(" How a Microservice from a Bundle gets Deployed with the ECR?")]),e._v(" "),n("p",[e._v("When a bundle containing a microservice is installed using the ECR, behind the scenes some actions take place.")]),e._v(" "),n("ol",[n("li",[e._v("To begin, an "),n("a",{attrs:{href:"https://github.com/entando-k8s/entando-k8s-custom-model/blob/master/src/main/resources/crd/entandoplugins.entando.org.crd.yaml",target:"_blank",rel:"noopener noreferrer"}},[e._v("EntandoPlugin custom resource"),n("OutboundLink")],1),e._v(" is generated starting from the PluginDescriptor. Some fields will be automatically generated from the provided image.")])]),e._v(" "),n("ul",[n("li",[e._v("From the "),n("code",[e._v("image")]),e._v(" field in the PluginDescriptor, we will extract the "),n("code",[e._v("organization")]),e._v(", "),n("code",[e._v("name")]),e._v(" and "),n("code",[e._v("version")]),e._v(" of the image.")]),e._v(" "),n("li",[n("code",[e._v("organization")]),e._v(", "),n("code",[e._v("name")]),e._v(" and "),n("code",[e._v("version")]),e._v(" are then converted to valid characters and composed to form the plugin name ("),n("code",[e._v("metadata.name")]),e._v("), the labels ("),n("code",[e._v("metadata.labels")]),e._v(") and the ingressPath ("),n("code",[e._v("spec.ingressPath")]),e._v(") of the custom resource.")])]),e._v(" "),n("p",[n("strong",[e._v("NOTE")]),e._v(": Two PluginDescriptors having images with the same organization, name and version will generate a custom resource with the same "),n("code",[e._v("metadata.name")]),e._v(" and "),n("code",[e._v("spec.ingressPath")]),e._v(".")]),e._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[e._v("Next, a check for a microservice with the same name is performed to verify if a new deployment is required for the microservice.")]),e._v(" "),n("li",[e._v("If a microservice with the same name is not available in the namespace where the Entando App has been deployed, a new EntandoPlugin custom resource is created and deployed in the namespace using the details defined in the bundle.")]),e._v(" "),n("li",[e._v("At the same time, an EntandoAppPluginLink custom resource is deployed in the namespace in order to expose the microservice ingress path on the EntandoApp ingress.")]),e._v(" "),n("li",[e._v("If both the EntandoPlugin custom resource and the EntandoAppPluginLink are deployed correctly, the APIs of the microservice will be available from the same domain of the EntandoApp, making it possible reach those APIs from the EntandoApp using relative urls.")])]),e._v(" "),n("p",[e._v("This is the standard flow when no other micorservice with a given name is already available in the EntandoApp namespace.")]),e._v(" "),n("p",[e._v("If there is an existing microservice with the same name as the one generated from the PluginDescriptor, the Local Hub will connect the EntandoApp to\nthe existing microservice by generating and deploying the required EntandoAppPluginLink per step 3 above.\nThis way, plugins can be reused by many applications at the same time.")]),e._v(" "),n("h2",{attrs:{id:"other-options"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#other-options"}},[e._v("#")]),e._v(" Other Options")]),e._v(" "),n("p",[e._v("The naming convention recommendations above are accurate for creating bundles and for self contained applications where the Entando operator is managing the lifecycle of your microservices. If you have a substantial API infrastructure or you intend to deploy a large number of versioned microservices you can also utilize Entando with API management infrastructure like API gateways. If you are using an API gateway or other API abstraction layer you will need to manually manage the ingress for your micro frontends in your application to point to the API gateway deployment.")]),e._v(" "),n("p",[e._v("In cases where conflicts occur bundles can easily be renamed by updating metdata.")]),e._v(" "),n("h2",{attrs:{id:"kubernetes-naming-conventions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-naming-conventions"}},[e._v("#")]),e._v(" Kubernetes naming conventions")]),e._v(" "),n("p",[e._v("Here some rules about naming conventions extracted from the "),n("a",{attrs:{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/names/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubernetes documentation on object names and ids"),n("OutboundLink")],1)]),e._v(" "),n("blockquote",[n("p",[e._v("Most resource types require a name that can be used as a DNS subdomain name as defined in RFC 1123. This means the name must:")]),e._v(" "),n("ul",[n("li",[e._v("contain no more than 253 characters")]),e._v(" "),n("li",[e._v("contain only lowercase alphanumeric characters, '-' or '.'")]),e._v(" "),n("li",[e._v("start with an alphanumeric character")]),e._v(" "),n("li",[e._v("end with an alphanumeric character")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);