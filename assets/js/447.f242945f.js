(window.webpackJsonp=window.webpackJsonp||[]).push([[447],{1403:function(e,t,r){"use strict";r.r(t);var a=r(32),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"installation-on-kubernetes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#installation-on-kubernetes"}},[e._v("#")]),e._v(" Installation on Kubernetes")]),e._v(" "),r("h2",{attrs:{id:"infrastructure-requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#infrastructure-requirements"}},[e._v("#")]),e._v(" Infrastructure Requirements")]),e._v(" "),r("p",[e._v("These are the minimum infrastructure requirements to install Entando directly on a Kubernetes (K8s) cluster:")]),e._v(" "),r("ul",[r("li",[e._v("A working DNS server configured to resolve internal and external names. If you choose to configure K8s with a global wildcard domain name for the entire cluster, be sure it points to the public IP address of the external Load Balancer of the worker nodes.")]),e._v(" "),r("li",[e._v("A default "),r("a",{attrs:{href:"https://kubernetes.io/docs/concepts/storage/storage-classes/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Storage Class"),r("OutboundLink")],1),e._v(" is needed for the Entando Operator to create the correct Persistent Volume Claims (PVC) for each pod.")]),e._v(" "),r("li",[e._v("Nginx "),r("a",{attrs:{href:"https://kubernetes.github.io/ingress-nginx/deploy/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ingress-Controller"),r("OutboundLink")],1),e._v(" is needed to expose the Entando applications.")])]),e._v(" "),r("h2",{attrs:{id:"minimum-hardware-requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#minimum-hardware-requirements"}},[e._v("#")]),e._v(" Minimum Hardware Requirements")]),e._v(" "),r("p",[e._v("The minimum hardware requirements depend on how you intend to use Entando. The more functionality you need, such as a content management system (CMS), the more you will need.")]),e._v(" "),r("h3",{attrs:{id:"for-entando-install-only"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#for-entando-install-only"}},[e._v("#")]),e._v(" For Entando install only:")]),e._v(" "),r("ul",[r("li",[e._v("6 vCPU or virtual central processing unit  (6000 millicores)")]),e._v(" "),r("li",[e._v("6 GB of RAM")]),e._v(" "),r("li",[e._v("5 GB of allocated storage distributed in many PVCs")])]),e._v(" "),r("p",[e._v("Configure a single worker node with the requirements above or designate 3 worker nodes with the minimum of 2 PVC and 4 GB of RAM each.")]),e._v(" "),r("h3",{attrs:{id:"for-entando-microservices"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#for-entando-microservices"}},[e._v("#")]),e._v(" For Entando + Microservices:")]),e._v(" "),r("ul",[r("li",[e._v("500 millicores per microservice or")]),e._v(" "),r("li",[e._v("1000 millicores per microservice with a database")])]),e._v(" "),r("p",[e._v("The tested instance was generated with a JHipster Entando blueprint.")]),e._v(" "),r("h3",{attrs:{id:"for-entando-with-cms"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#for-entando-with-cms"}},[e._v("#")]),e._v(" For Entando with CMS:")]),e._v(" "),r("p",[e._v("To install Entando with CMS, the hardware requirements depend on the complexity and number of pages and contents. The minimum requirements are:")]),e._v(" "),r("ul",[r("li",[e._v("9 vCPU for a single CMS instance. To scale up, you need 4 vCPU per replica.")]),e._v(" "),r("li",[e._v("8 GB of RAM for a single CMS instance. To scale up, you need 4 GB of RAM per replica.")]),e._v(" "),r("li",[e._v("A minimum of 50 GB of storage for all the static resources generated by the use of Entando CMS.")])]),e._v(" "),r("h2",{attrs:{id:"backup-strategies"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#backup-strategies"}},[e._v("#")]),e._v(" Backup Strategies")]),e._v(" "),r("p",[e._v("The recommended method to secure your content is to use database services that automate backups and restores on a Kubernetes cluster like Azure, Red Hat OpenShift, Google K8s Service, Tanzu K8s Grid or Amazon Elastic. If this is not an option, there are tools like "),r("a",{attrs:{href:"https://velero.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Velero"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://cloudcasa.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cloudcase"),r("OutboundLink")],1),e._v(" to manage them.")]),e._v(" "),r("p",[e._v("Note: Some DevOps teams warn against running databases inside pods in production environments.")]),e._v(" "),r("p",[e._v("If using the Entando CMS, be sure to protect related schemas ("),r("code",[e._v("port")]),e._v(" and "),r("code",[e._v("serv")]),e._v(") with a valid disaster recovery plan. Protect all volumes containing your static resources with daily snapshots.")]),e._v(" "),r("h2",{attrs:{id:"notes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[e._v("#")]),e._v(" Notes")]),e._v(" "),r("p",[e._v("See the "),r("a",{attrs:{href:"https://www.entando.com/page/en/compatibility-guide",target:"_blank",rel:"noopener noreferrer"}},[e._v("Entando compatibility guide"),r("OutboundLink")],1),e._v(" for compatible Kubernetes versions.")])])}),[],!1,null,null,null);t.default=n.exports}}]);