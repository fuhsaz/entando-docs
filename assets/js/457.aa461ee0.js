(window.webpackJsonp=window.webpackJsonp||[]).push([[457],{1422:function(e,t,a){"use strict";a.r(t);var o=a(32),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"the-entando-operator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-entando-operator"}},[e._v("#")]),e._v(" The Entando Operator")]),e._v(" "),a("p",[e._v("The Entando Operator processes the custom resources in Kubernetes that represent the different "),a("RouterLink",{attrs:{to:"/v6.3/docs/concepts/"}},[e._v("components of an Entando application")]),e._v(".\nThe goal of the operator is to provide automation and a set of default configuration options to simplify and accelerate the deployment of an Entando application.")],1),e._v(" "),a("p",[e._v("The sections below provide details and assumptions that the operator makes when deploying Entando Custom Resources. If you're using OpenShift these\nsections will provide details on how to configure your deployment via the Operator Hub.")]),e._v(" "),a("p",[e._v("For details on the individual custom resources and their configuration check out the "),a("RouterLink",{attrs:{to:"/v6.3/docs/concepts/custom-resources.html"}},[e._v("custom resources documentation")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"installation-scope-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-scope-options"}},[e._v("#")]),e._v(" Installation Scope Options")]),e._v(" "),a("p",[e._v("The Entando Operator can be installed in one of two modes. Either cluster scoped or namespace scoped. In a cluster scoped deployment the operator will have\nvisibility across the cluster and will manage all of the Entando applications in the Kubernetes cluster. In a namespace scoped deployment the operator\nwill only have visibility to the namespace where it is deployed and will manage only the components in that namespace.")]),e._v(" "),a("p",[e._v("When installing the operator via OpenShift look for the "),a("code",[e._v("Installation Mode")]),e._v(" option to select the scoping for the operator.")]),e._v(" "),a("p",[e._v("When choosing how to deploy your operator there are no right or wrong answers. Think about the deployment that best fits your goals and team. Here are some items to think about.")]),e._v(" "),a("h3",{attrs:{id:"when-to-use-cluster-scoped-deployments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#when-to-use-cluster-scoped-deployments"}},[e._v("#")]),e._v(" When to use Cluster Scoped Deployments")]),e._v(" "),a("ul",[a("li",[e._v("Cluster scoped deployments are common in production clusters and in environments with strong operational support and controls.")]),e._v(" "),a("li",[e._v("A cluster scoped deployment can saves resources When you want to optimize resource consumption and share Kubernetes infrastructure.")]),e._v(" "),a("li",[e._v("When you are planning to centralize and share other infrastructure resources like Keycloak and databases a cluster scoped deployment can fit into the same management processes.\n"),a("ul",[a("li",[e._v("Sharing infrastructure resources is a recommended approach for medium or large teams and the operator can be treated like other infrastructure services.")])])]),e._v(" "),a("li",[e._v("In some cases security requirements will require that the permissions required for the operator are managed separately from the deployed applications. A cluster scoped deployment isolates the operator permissions in a separate namespace.")]),e._v(" "),a("li",[e._v("Cluster scoped deployments can simplify the deployment of an Entando app by developers or end users because they have fewer resources to manage")])]),e._v(" "),a("h3",{attrs:{id:"when-to-use-namespace-scoped-deployments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#when-to-use-namespace-scoped-deployments"}},[e._v("#")]),e._v(" When to use Namespace Scoped Deployments")]),e._v(" "),a("ul",[a("li",[e._v("Namespace scoped deployments are common in dev clusters. Or in clusters where application naemspaces come and go frequently")]),e._v(" "),a("li",[e._v("Namespace scoped deployments are useful in scenarios where you plan to, or could have, many different versions of Entando")]),e._v(" "),a("li",[e._v("Namespace scoped deployments give your teams complete team autonomy and the ability to create and destroy applications")]),e._v(" "),a("li",[e._v("When teams are small and self managing from an operational perspective a namespace scoped deployment is a simpler architecture")]),e._v(" "),a("li",[e._v("If you plan to have a small number of applications deployed in the cluster a namespace scoped deployment can be easier to manage")])]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/v6.3/tutorials/devops/installation/open-shift/openshift-install-by-operator-hub.html"}},[e._v("Click here for tutorials and instructions for deploying via operator hub")])],1),e._v(" "),a("h2",{attrs:{id:"tls-secret-creation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tls-secret-creation"}},[e._v("#")]),e._v(" TLS Secret Creation")]),e._v(" "),a("p",[e._v("When configuring and deploying Entando via the operator you will be asked to provide a secret for some of the components in the architecture. A few things to be aware of when creating and configuring a secret:")]),e._v(" "),a("ul",[a("li",[e._v("The secret is assumed to be in the same namespace as the component being created.")]),e._v(" "),a("li",[e._v("This secret is expected to have a private key, and a certificate for the hostname (or a wildcard cert) that the service\nwill be exposed on.")]),e._v(" "),a("li",[e._v("Refer to the 'ingressHostname' property in the custom resource for more information on how the hostname is\ndetermined.")]),e._v(" "),a("li",[e._v("If a secret isn't provided the Entando Operator will evaluate the value of the "),a("code",[e._v("ENTANDO_PATH_TO_TLS_KEYPAIR")]),e._v(" which is\nexpected to contain two files: tls.key and tls.crt.\n"),a("ul",[a("li",[e._v("If a key pair is found in the folder specified, it will revert to the keypair found.")]),e._v(" "),a("li",[e._v("If a key pair is not found the Entando Operator will evaluate the value of the "),a("code",[e._v("ENTANDO_USE_AUTO_CERT_GENERATION")]),e._v(".\nIf that property is set to "),a("code",[e._v("true")]),e._v(" the Entando Operator will assume that the cluster has been configured with a valid CA and leave it to\nthe Ingress controller to generate its own certificates.")])])])]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/v6.3/tutorials/devops/installation/open-shift/openshift-install-by-operator-hub.html"}},[e._v("Click here for tutorials on creating secrets and setting up TLS in your Entando Apps.")])],1),e._v(" "),a("h2",{attrs:{id:"database-deployment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#database-deployment"}},[e._v("#")]),e._v(" Database Deployment")]),e._v(" "),a("p",[e._v("Some Entando components include the ability to select a database management system (DBMS) when deploying the component.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("The DBMS field in Entando Custom Resources can be one of mysql, oracle, postgresql or embedded.")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("IMPORTANT!")]),e._v(" -- If embedded is selected for a component only 1 replica for the component can be created.")]),e._v(" "),a("li",[a("strong",[e._v("IMPORTANT!")]),e._v(" -- Oracle instances are not supported for automatic deployment in a container. You must create an Oracle instance or use an existing instance and configure it as an "),a("RouterLink",{attrs:{to:"/v6.3/tutorials/devops/external-database/"}},[e._v("external database")]),e._v(" for your Entando app")],1)])]),e._v(" "),a("li",[a("p",[e._v("If an EntandoDatabaseService has been deployed in the component's namespace, and the DBMS specified on this EntandoDatabaseService\nis the same as the DBMS specified on this EntandoApp, the Entando Operator will create dedicated\nschemas (in the case of PostgreSQL or Oracle), or databases in the case of MySQL.")]),e._v(" "),a("ul",[a("li",[e._v("If a matching EntandoDatabaseService does not exist in this namespace, the Entando Operator\nwill automatically deploy the appropriate container to host the DBMS specified. This last option is not\nyet supported for Oracle.")])])]),e._v(" "),a("li",[a("p",[e._v("For an EntandoApp three schemas/database will be created: the Entando Port DB, tne Entando Serv DB and a database for\nthe Entando Component Manager.")]),e._v(" "),a("ul",[a("li",[e._v("If the Port and Serv schemas/databases are empty, the Entando Operator  will use the underlying Entando App to populate these databases with the data backup available in the standard backup path in the WAR deployment.")]),e._v(" "),a("li",[e._v("In scenarios where the EntandoApp needs to connect to an existing database that is fully managed\nby the customer, it is best to setup the standard database connection variables using the\n"),a("code",[e._v("spec.environmentVariables")]),e._v(" property and set this property to 'none'. This will skip any database\npreparations steps in the deployment.")])])])]),e._v(" "),a("p",[e._v("When deploying a component the operator will evaluate the spec and if it supports the standard "),a("code",[e._v("spec.dbms")]),e._v("\nproperty, the value of this property will be given to the component's "),a("code",[e._v("spec.dbms")]),e._v(". Please consult\nthe documentation for each component's CRD to determine how each Entando resource uses the dbms (if any).")]),e._v(" "),a("h2",{attrs:{id:"ingress-path-generation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ingress-path-generation"}},[e._v("#")]),e._v(" Ingress Path Generation")]),e._v(" "),a("p",[e._v("When deploying an Entando Custom Resource that uses an Ingress path:")]),e._v(" "),a("ul",[a("li",[e._v("The "),a("code",[e._v("ingressHostName")]),e._v(" property defines the host path that will be used to access this\nservice from outside the cluster. The Entando Operator will\ncreate an ingress reflecting this hostname, and expose the resource at its default path.\n"),a("ul",[a("li",[a("strong",[e._v("IMPORTANT!")]),e._v(" -- If omitted, the Entando Operator will automatically generate a hostname\nusing the value of the ENTANDO_DEFAULT_ROUTING_SUFFIX environment variable that the Entando Operator was\nconfigured with. It will prefix the name and namespace of the EntandoKeycloakServer to this default routing suffix.")])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);