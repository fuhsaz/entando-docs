(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{1348:function(t,e,s){"use strict";s.r(e);var a=s(32),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"getting-started-with-entando"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started-with-entando"}},[t._v("#")]),t._v(" Getting Started with Entando")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[a("strong",[t._v("Mac:")]),t._v(" Entando 6 is not currently compatible with the Apple M1 ARM64 architecture found in some newer Macs.")])]),t._v(" "),a("h2",{attrs:{id:"try-entando"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#try-entando"}},[t._v("#")]),t._v(" Try Entando")]),t._v(" "),a("p",[t._v("Set up Entando using two simple steps or install manually for your specific needs. Then try the platform with a simple widget or walk through the "),a("strong",[t._v("Welcome Wizard")]),t._v(" in our App Builder. For a more in-depth experience, check out our "),a("strong",[t._v("Standard Banking Demo")]),t._v(".")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#automatic-install"}},[t._v("Automatic Install")]),t._v(": The fastest way to locally install and start up Entando in Kubernetes.")]),t._v(" "),a("li",[a("a",{attrs:{href:"#manual-install"}},[t._v("Manual Install")]),t._v(": Useful if you want a shared cluster or a custom local instance.")])]),t._v(" "),a("p",[t._v("Once you're setup, check out:")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/v6.3.2/tutorials/create/pb/publish-simple-bundle.html"}},[t._v("Build a simple Bundle and create an App")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/v6.3.2/docs/compose/welcome-wizard.html"}},[t._v("Welcome Wizard")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/v6.3.2/tutorials/solution/install-standard-demo.html"}},[t._v("Install our Standard Banking Demo")])],1)]),t._v(" "),a("h2",{attrs:{id:"learn-about-entando"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#learn-about-entando"}},[t._v("#")]),t._v(" Learn about Entando")]),t._v(" "),a("p",[t._v("Learn about what Entando can do top down or explore the elements that make developing applications on Kubernetes faster and easier.")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/v6.3.2/docs/"}},[t._v("Introduction to Entando ")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/v6.3.2/tutorials/#learning-paths"}},[t._v("Learning Paths")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/v6.3.2/docs/getting-started/concepts-overview.html"}},[t._v("Concepts Overview")])],1)]),t._v(" "),a("h2",{attrs:{id:"automatic-install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#automatic-install"}},[t._v("#")]),t._v(" Automatic Install")]),t._v(" "),a("p",[t._v("Automatically install Entando via the Entando command-line interface (CLI) and prepare a local developer environment with default settings.\nThe following steps launch an Ubuntu VM via Multipass, install Kubernetes, then deploy Entando to it.")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Install "),a("a",{attrs:{href:"https://multipass.run/#install",target:"_blank",rel:"noopener noreferrer"}},[t._v("Multipass"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("Install Entando into Kubernetes on Ubuntu using the "),a("RouterLink",{attrs:{to:"/v6.3.2/docs/reference/entando-cli.html"}},[t._v("Entando CLI")])],1)])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -sfL https://get.entando.org "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("The progress of the install will be displayed on the console. Installation can take 10+ minutes depending on how long the Docker images take to download. The sequence of steps performed by the CLI is identical to the manual steps below; to understand what the CLI does, review the manual steps.")]),t._v(" "),a("li",[t._v("The URL to access the "),a("code",[t._v("Entando App Builder")]),t._v(" will print to the console once the install completes.")]),t._v(" "),a("li",[t._v("Login with username:"),a("code",[t._v("admin")]),t._v(" and password: "),a("code",[t._v("adminadmin")]),t._v(". Refer to "),a("a",{attrs:{href:"#log-in-to-entando"}},[t._v("Log in to Entando")]),t._v(" for more information and next steps.")])]),t._v(" "),a("h2",{attrs:{id:"manual-install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manual-install"}},[t._v("#")]),t._v(" Manual Install")]),t._v(" "),a("p",[t._v("Configure a shared cluster or customize a local developer environment. This is a learn-as-you-go approach. It will give you a working knowledge of Kubernetes as you get Entando up and running in a local environment. The process is as follows:")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"#install-kubernetes"}},[t._v("Install Kubernetes")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#prepare-kubernetes"}},[t._v("Prepare Kubernetes Environment")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#deploy-entando"}},[t._v("Deploy Entando")])])]),t._v(" "),a("p",[t._v("Note: For advanced or long-time Entando users, check out our "),a("a",{attrs:{href:"quick-reference"}},[t._v("Quick Reference")]),t._v(" install guide for just the steps.")]),t._v(" "),a("p",[t._v("We've tested a variety of Kubernetes implementations, including Minikube, Minishift, CodeReady Containers, K3s, and Microk8s, to find the optimal combination of low cpu/memory usage, fast startup times, and minimal configuration. After downloading the necessary files, you'll have your own instance of Kubernetes up and running in <60 seconds.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("What's Needed to Run Kubernetes?")]),t._v(" "),a("p",[t._v("Kubernetes is a container orchestrator designed to manage a server cluster. It requires at least one master node running a Linux OS. A lightweight ubuntu VM can be created in seconds with Multipass. Choosing a Type 1 hypervisor eliminates a guest OS, maximizing speed and performance.")])]),t._v(" "),a("h3",{attrs:{id:"install-kubernetes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-kubernetes"}},[t._v("#")]),t._v(" Install Kubernetes")]),t._v(" "),a("h4",{attrs:{id:"enable-hypervisor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable-hypervisor"}},[t._v("#")]),t._v(" Enable Hypervisor")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Why a Hypervisor?")]),t._v(" "),a("p",[t._v("Hypervisors allow you to create and run virtual machines. Virtualization software that run on top of your operating system like VirtualBox or VMWare Workstation are Type 2 hypervisors. Type 1 hypervisors run on bare metal.")])]),t._v(" "),a("p",[t._v("Let's install a Type 1 hypervisor for optimal performance.")]),t._v(" "),a("p",[a("strong",[t._v("Mac:")]),t._v(" Install "),a("code",[t._v("hyperkit")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("brew "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" hyperkit\n")])])]),a("p",[a("strong",[t._v("Windows:")]),t._v(" "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v?redirectedfrom=MSDN",target:"_blank",rel:"noopener noreferrer"}},[t._v("Install Hyper-V"),a("OutboundLink")],1)]),t._v(" "),a("hr"),t._v(" "),a("details",[a("summary",[t._v("What if my machine doesn't support hyperkit or Hyper-V?")]),t._v(" "),a("p",[t._v("Use a Type 2 hypervisor that runs on top of your operating system")]),t._v(" "),a("ul",[a("li",[t._v("Install Virtual Box:\n"),a("a",{attrs:{href:"https://multipass.run/docs/installing-on-macos",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mac"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://multipass.run/docs/installing-on-windows",target:"_blank",rel:"noopener noreferrer"}},[t._v("Windows"),a("OutboundLink")],1)])])]),t._v(" "),a("hr"),t._v(" "),a("br"),t._v(" "),a("h4",{attrs:{id:"launch-ubuntu-vm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#launch-ubuntu-vm"}},[t._v("#")]),t._v(" Launch Ubuntu VM")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Why Multipass?")]),t._v(" "),a("p",[t._v("Multipass is a cross-platform tool developed by the publishers of Ubuntu to create lightweight Ubuntu VMs in seconds.")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Install "),a("a",{attrs:{href:"https://multipass.run/#install",target:"_blank",rel:"noopener noreferrer"}},[t._v("Multipass"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("Launch VM")])])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("multipass launch --name ubuntu-lts --cpus "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" --mem 8G --disk 20G\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("Open VM shell")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("multipass shell ubuntu-lts\n")])])]),a("h4",{attrs:{id:"run-kubernetes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-kubernetes"}},[t._v("#")]),t._v(" Run Kubernetes")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Why K3s?")]),t._v(" "),a("p",[t._v("K3s is a certified Kubernetes distribution designed for production workloads in resource-constrained environments.")]),t._v(" "),a("p",[t._v("It's packaged as a single <50MB binary that reduces the dependencies and steps needed to install, run, and auto-update a production Kubernetes cluster.")])]),t._v(" "),a("ol",[a("li",[t._v("Install "),a("code",[t._v("K3s")])])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -sfL https://get.k3s.io "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" -\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Check for "),a("code",[t._v("Ready")]),t._v(" "),a("code",[t._v("STATUS")])])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" kubectl get "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("node")]),t._v("\n")])])]),a("hr"),t._v(" "),a("details",[a("summary",[t._v("What's running out of the box?")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" kubectl get pods -A\n")])])])]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Congratulations!")]),t._v(" "),a("p",[t._v("You now have a local instance of Kubernetes up and running.")])]),t._v(" "),a("p",[t._v("Now that Kubernetes is running, you can set up kubectl to send commands directly to K3s from the host machine, rather than from within the VM. See the instructions "),a("a",{attrs:{href:"https://rancher.com/docs/k3s/latest/en/cluster-access/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"prepare-kubernetes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prepare-kubernetes"}},[t._v("#")]),t._v(" Prepare Kubernetes")]),t._v(" "),a("p",[t._v("To install Entando, we'll add "),a("code",[t._v("Custom Resources")]),t._v(", create a "),a("code",[t._v("Namespace")]),t._v(", download a "),a("code",[t._v("Helm")]),t._v(" chart, and configure external access to our cluster.")]),t._v(" "),a("h4",{attrs:{id:"create-namespace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-namespace"}},[t._v("#")]),t._v(" Create Namespace")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("What are Namespaces?")]),t._v(" "),a("p",[t._v("Kubernetes supports multiple virtual clusters backed by the same physical cluster. These virtual clusters are called "),a("a",{attrs:{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/",target:"_blank",rel:"noopener noreferrer"}},[t._v("namespaces"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("You can use namespaces to allocate resources and set cpu/memory limits for individual projects or teams. They can also encapsulate projects from one another.")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" kubectl create namespace entando\n")])])]),a("h4",{attrs:{id:"add-custom-resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-custom-resources"}},[t._v("#")]),t._v(" Add Custom Resources")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Why Custom Resources?")]),t._v(" "),a("p",[t._v("Standard resources in Kubernetes include things like "),a("code",[t._v("Pods")]),t._v(", which are groups of one or more containers, "),a("code",[t._v("Services")]),t._v(", the way to call or access pods, and "),a("code",[t._v("Ingresses")]),t._v(", to enable external access to Services.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Custom resources"),a("OutboundLink")],1),t._v(" let you store and retrieve structured data. Combining a custom resource with a custom controller allows you to define a desired state to automate the running of your applications or services in a Kubernetes cluster.")])]),t._v(" "),a("p",[t._v("Examples of custom resources in Entando are:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Entando App Engine")])]),t._v(" "),a("li",[a("code",[t._v("Entando Identity Management System")])])]),t._v(" "),a("p",[t._v("From your Ubuntu shell")]),t._v(" "),a("ol",[a("li",[t._v("Download and install custom resource definitions")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" kubectl apply -f https://raw.githubusercontent.com/entando/entando-releases/v6.3.2/dist/ge-1-1-6/namespace-scoped-deployment/cluster-resources.yaml\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Install namespace scoped resources")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" kubectl apply -n entando -f https://raw.githubusercontent.com/entando/entando-releases/v6.3.2/dist/ge-1-1-6/namespace-scoped-deployment/orig/namespace-resources.yaml\n")])])]),a("h4",{attrs:{id:"download-helm-chart"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#download-helm-chart"}},[t._v("#")]),t._v(" Download Helm Chart")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("What is Helm?")]),t._v(" "),a("p",[t._v("Helm is a package manager for Kubernetes that helps you define, install, and upgrade Kubernetes applications.\nThis "),a("em",[t._v("Getting Started")]),t._v(" guide uses a Helm-generated file with a number of default values to help get you started faster,\ne.g. use embedded databases, exclude OpenShift support, etc. If you want to change any of those defaults, please see "),a("a",{attrs:{href:"https://github.com/entando-k8s/entando-helm-quickstart",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/entando-k8s/entando-helm-quickstart"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("ol",[a("li",[t._v("Install Helm")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" snap "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" helm --classic\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Download the Entando Helm template")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -sfL https://github.com/entando-k8s/entando-helm-quickstart/archive/v6.3.2.tar.gz "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" xvz\n")])])]),a("h4",{attrs:{id:"configure-access-to-your-cluster"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-access-to-your-cluster"}},[t._v("#")]),t._v(" Configure Access to Your Cluster")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("What about Networking?")]),t._v(" "),a("p",[t._v("Entando sets up "),a("a",{attrs:{href:"https://kubernetes.io/docs/concepts/services-networking/ingress/",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Ingresses")]),a("OutboundLink")],1),t._v(" in Kubernetes to expose HTTP routes from outside the cluster to services within the cluster. We'll use this to access Entando from a local browser.")]),t._v(" "),a("p",[t._v("If you run into network issues during startup, or if you are using Windows for your local development instance, please see "),a("RouterLink",{attrs:{to:"/v6.3.2/docs/reference/local-tips-and-tricks.html#network-issues"}},[t._v("the tips")]),t._v(". Symptoms can include Entando failing to completely start the first time or a working Entando instance failing to restart later.")],1)]),t._v(" "),a("p",[t._v("To set up external access to your cluster, you'll need to replace the value of\n"),a("code",[t._v("entando.default.routing.suffix")]),t._v(" with your Ubuntu IP.")]),t._v(" "),a("ol",[a("li",[t._v("Get the IP address of your Ubuntu VM")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hostname")]),t._v(" -I "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{print $1}'")]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Save that value for the deployment steps below")])]),t._v(" "),a("h3",{attrs:{id:"deploy-entando"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy-entando"}},[t._v("#")]),t._v(" Deploy Entando")]),t._v(" "),a("p",[t._v("To speed up the "),a("em",[t._v("Getting Started")]),t._v(" environment, embedded databases are used by default for these components.\nSee "),a("RouterLink",{attrs:{to:"/v6.3.2/tutorials/devops/default-database.html"}},[t._v("this tutorial")]),t._v(" for more information on how to change your\ndatabase connection.")],1),t._v(" "),a("ol",[a("li",[t._v("Enter the Helm quickstart directory")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" entando-helm-quickstart-6.3.2\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Edit the file in "),a("code",[t._v("sample-configmaps/entando-operator-config.yaml")]),t._v(" by uncommenting the value for "),a("code",[t._v("entando.default.routing.suffix:")]),t._v(" and setting the value to the IP address of your Ubuntu VM plus "),a("code",[t._v(".nip.io")]),t._v(". For example, "),a("code",[t._v("entando.default.routing.suffix: 192.168.64.21.nip.io")]),t._v(". Pay attention to yaml spacing.")])]),t._v(" "),a("p",[t._v("Reduced network speed or Docker Hub traffic controls may cause the Entando install to timeout. Use the ConfigMap settings below to increase the thresholds for image downloads.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("entando.pod.completion.timeout.seconds: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1200"')]),t._v("\nentando.pod.readiness.timeout.seconds: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1200"')]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("Deploy your config map")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" kubectl apply -f sample-configmaps/entando-operator-config.yaml  -n entando\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("Run Helm and deploy your Entando application")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" helm template quickstart ./ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" kubectl apply -n entando -f -\n")])])]),a("hr"),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[t._v("Use the "),a("code",[t._v("get pods --watch")]),t._v(" command to observe Entando starting up")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" kubectl -n entando get pods --watch\n")])])]),a("details",[a("summary",[t._v("What does a successful startup look like?")]),t._v(" "),a("ul",[a("li",[t._v("First, you'll see the Entando operator: "),a("code",[t._v("ContainerCreating")]),t._v(" > "),a("code",[t._v("Running")])]),t._v(" "),a("li",[t._v("Next, the Entando composite app deployer: "),a("code",[t._v("Pending")]),t._v(" > "),a("code",[t._v("ContainerCreating")]),t._v(" > "),a("code",[t._v("Running")])]),t._v(" "),a("li",[t._v("Then, Keycloak: "),a("code",[t._v("kc-deployer")]),t._v(" > "),a("code",[t._v("kc-db-deployment")])])]),t._v(" "),a("p",[a("strong",[t._v("Jobs / Deployments")])]),t._v(" "),a("ul",[a("li",[t._v("Jobs, like "),a("code",[t._v("kc-db-preparation-job")]),t._v(", run once and are "),a("code",[t._v("Completed")]),t._v(": "),a("code",[t._v("0/1")])]),t._v(" "),a("li",[t._v("Database deployments, like "),a("code",[t._v("kc-db-deployment")]),t._v(", should end up as "),a("code",[t._v("Running")]),t._v(": "),a("code",[t._v("1/1")])]),t._v(" "),a("li",[t._v("The Keycloak server deployment, "),a("code",[t._v("kc-server-deployment")]),t._v(", should end up as "),a("code",[t._v("Running")]),t._v(": "),a("code",[t._v("1/1")])]),t._v(" "),a("li",[t._v("The deployment is done when the "),a("code",[t._v("quickstart-composite-app-deployer")]),t._v(" pod has a status of "),a("code",[t._v("Completed")])])]),t._v(" "),a("p",[a("strong",[t._v("Lifecycle Events")])]),t._v(" "),a("ul",[a("li",[t._v("Each line represents an event: "),a("code",[t._v("Pending")]),t._v(", "),a("code",[t._v("ContainerCreating")]),t._v(", "),a("code",[t._v("Running")]),t._v(" or "),a("code",[t._v("Completed")])]),t._v(" "),a("li",[t._v("Restarts should ideally be "),a("code",[t._v("0")]),t._v("; otherwise, there was a problem with your cluster, and Kubernetes is trying to self-heal")])]),t._v(" "),a("div",{staticClass:"language-shell-session extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell-session"}},[a("code",[a("span",{pre:!0,attrs:{class:"token command"}},[a("span",{pre:!0,attrs:{class:"token info punctuation"}},[a("span",{pre:!0,attrs:{class:"token user"}},[t._v("ubuntu@test-vm")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token path"}},[t._v("~")])]),a("span",{pre:!0,attrs:{class:"token shell-symbol important"}},[t._v("$")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token bash language-bash"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" kubectl get pods -n entando --watch")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token output"}},[t._v("NAME                                   READY   STATUS              RESTARTS   AGE\nNAME                                     READY   STATUS              RESTARTS   AGE\nentando-operator-5cdf787869-t5xrg        1/1     Running             0          65s\nquickstart-composite-app-deployer-0547   1/1     Running             0          8s\nquickstart-kc-deployer-7879              0/1     ContainerCreating   0          2s\nquickstart-kc-deployer-7879              1/1     Running             0          2s\nquickstart-kc-server-deployment-5f9d7897c6-7jnq5   0/1     Pending             0          0s\nquickstart-kc-server-deployment-5f9d7897c6-7jnq5   0/1     Pending             0          3s\nquickstart-kc-server-deployment-5f9d7897c6-7jnq5   0/1     ContainerCreating   0          3s\nquickstart-kc-server-deployment-5f9d7897c6-7jnq5   0/1     Running             0          5s\nquickstart-kc-server-deployment-5f9d7897c6-7jnq5   0/1     Running             0          99s\nquickstart-kc-server-deployment-5f9d7897c6-7jnq5   1/1     Running             0          107s\nquickstart-kc-deployer-7879                        0/1     Completed           0          2m16s\nquickstart-kc-deployer-7879                        0/1     Terminating         0          2m16s\nquickstart-kc-deployer-7879                        0/1     Terminating         0          2m16s\nquickstart-eci-deployer-7439                       0/1     Pending             0          0s\nquickstart-eci-deployer-7439                       0/1     Pending             0          0s\nquickstart-eci-deployer-7439                       0/1     ContainerCreating   0          0s\nquickstart-eci-deployer-7439                       1/1     Running             0          2s\nquickstart-eci-k8s-svc-deployment-699b47595d-wxmmb   0/1     Pending             0          0s\nquickstart-eci-k8s-svc-deployment-699b47595d-wxmmb   0/1     Pending             0          0s\nquickstart-eci-k8s-svc-deployment-699b47595d-wxmmb   0/1     ContainerCreating   0          0s\nquickstart-eci-k8s-svc-deployment-699b47595d-wxmmb   0/1     Running             0          2s\nquickstart-eci-k8s-svc-deployment-699b47595d-wxmmb   0/1     Running             0          35s\nquickstart-eci-k8s-svc-deployment-699b47595d-wxmmb   1/1     Running             0          43s\nquickstart-eci-deployer-7439                         0/1     Completed           0          51s\nquickstart-eci-deployer-7439                         0/1     Terminating         0          52s\nquickstart-eci-deployer-7439                         0/1     Terminating         0          52s\nquickstart-deployer-2922                             0/1     Pending             0          0s\nquickstart-deployer-2922                             0/1     Pending             0          0s\nquickstart-deployer-2922                             0/1     ContainerCreating   0          0s\nquickstart-deployer-2922                             1/1     Running             0          1s\nquickstart-server-deployment-75bb794647-bt6xk        0/1     Pending             0          0s\nquickstart-server-deployment-75bb794647-bt6xk        0/1     Pending             0          3s\nquickstart-server-deployment-75bb794647-bt6xk        0/1     ContainerCreating   0          3s\nquickstart-server-deployment-75bb794647-bt6xk        0/1     Running             0          4s\nquickstart-server-deployment-75bb794647-bt6xk        0/1     Running             0          2m19s\nquickstart-server-deployment-75bb794647-bt6xk        1/1     Running             0          2m21s\nquickstart-ab-deployment-7d78b79c-q7r6z              0/1     Pending             0          0s\nquickstart-ab-deployment-7d78b79c-q7r6z              0/1     Pending             0          0s\nquickstart-ab-deployment-7d78b79c-q7r6z              0/1     ContainerCreating   0          0s\nquickstart-ab-deployment-7d78b79c-q7r6z              0/1     Running             0          1s\nquickstart-ab-deployment-7d78b79c-q7r6z              0/1     Running             0          12s\nquickstart-ab-deployment-7d78b79c-q7r6z              1/1     Running             0          15s\nquickstart-cm-deployment-86bc545b6f-vtg2c            0/1     Pending             0          0s\nquickstart-cm-deployment-86bc545b6f-vtg2c            0/1     Pending             0          3s\nquickstart-cm-deployment-86bc545b6f-vtg2c            0/1     ContainerCreating   0          3s\nquickstart-cm-deployment-86bc545b6f-vtg2c            0/1     Running             0          5s\nquickstart-cm-deployment-86bc545b6f-vtg2c            0/1     Running             0          98s\nquickstart-cm-deployment-86bc545b6f-vtg2c            1/1     Running             0          99s\nquickstart-deployer-2922                             0/1     Completed           0          4m28s\nquickstart-deployer-2922                             0/1     Terminating         0          4m29s\nquickstart-deployer-2922                             0/1     Terminating         0          4m29s\nquickstart-composite-app-deployer-0547               0/1     Completed           0          7m44s\nquickstart-composite-app-deployer-0547               0/1     Terminating         0          8m13s\nquickstart-composite-app-deployer-0547               0/1     Terminating         0          8m13s\n")])])])])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("Press "),a("code",[t._v("Ctrl-C")]),t._v(" to exit the watch command once everything is up and running.")]),t._v(" "),a("hr"),t._v(" "),a("details",[a("summary",[t._v("What pods come out of the box?")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" kubectl get pods -n entando\n")])])]),a("div",{staticClass:"language-shell-session extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell-session"}},[a("code",[a("span",{pre:!0,attrs:{class:"token output"}},[t._v("NAME                                                 READY   STATUS    RESTARTS   AGE\nentando-operator-5cdf787869-t5xrg                    1/1     Running   0          10m\nquickstart-kc-server-deployment-5f9d7897c6-7jnq5     1/1     Running   0          9m20s\nquickstart-eci-k8s-svc-deployment-699b47595d-wxmmb   1/1     Running   0          7m2s\nquickstart-server-deployment-75bb794647-bt6xk        1/1     Running   0          6m10s\nquickstart-ab-deployment-7d78b79c-q7r6z              1/1     Running   0          3m48s\nquickstart-cm-deployment-86bc545b6f-vtg2c            1/1     Running   0          3m30s\n\n")])])])])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("Get the URL to access Entando from your local browser")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" kubectl get ingress -n entando -o "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("jsonpath")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{.items[2].spec.rules[*].host}{.items[2].spec.rules[*].http.paths[1].path}{\"\\n\"}'")]),t._v("\n")])])]),a("ul",[a("li",[t._v("Example URL")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("quickstart-entando.192.168.64.33.nip.io/app-builder/\n")])])]),a("hr"),t._v(" "),a("h2",{attrs:{id:"log-in-to-entando"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#log-in-to-entando"}},[t._v("#")]),t._v(" Log in to Entando")]),t._v(" "),a("p",[t._v("Now that we've installed Entando, let's log in to the "),a("code",[t._v("Entando App Builder")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(679),alt:"entando-login.png"}})]),t._v(" "),a("ul",[a("li",[t._v("Username: "),a("code",[t._v("admin")])]),t._v(" "),a("li",[t._v("Password: "),a("code",[t._v("adminadmin")])])]),t._v(" "),a("p",[t._v("After login, change your password to activate your account.")]),t._v(" "),a("ul",[a("li",[t._v("Note: If the login process hangs for more than 5 seconds, refresh the browser.")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(680),alt:"entando-app-builder.png"}})]),t._v(" "),a("p",[t._v("The App Builder is where we'll compose our micro frontends alongside CMS pages and content.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Congratulations!")]),t._v(" "),a("p",[t._v("We now have Entando up and running on Kubernetes in our local environment.")])]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"next-steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[t._v("#")]),t._v(" Next Steps")]),t._v(" "),a("p",[t._v("Choose one of the following actions to continue your journey with Entando!")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("Build Your First Application:")]),t._v(" Use the "),a("RouterLink",{attrs:{to:"/v6.3.2/docs/compose/welcome-wizard.html"}},[t._v("Welcome Wizard")]),t._v(" to build your first application via guided prompts.")],1)]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Try a Tutorial:")]),t._v(" Take advantage of the "),a("RouterLink",{attrs:{to:"/v6.3.2/tutorials/#learning-paths"}},[t._v("Learning Paths")]),t._v(", which organize a few of the most popular tutorials by user type.")],1)]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Dig Deeper into Entando Concepts:")]),t._v(" Review the "),a("RouterLink",{attrs:{to:"/v6.3.2/docs/"}},[t._v("Docs")]),t._v(" sections to more deeply understand the Entando building blocks.")],1)]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Learn about the Quickstart Environment:")]),t._v(" See the "),a("RouterLink",{attrs:{to:"/v6.3.2/docs/reference/local-tips-and-tricks.html"}},[t._v("Quickstart Tips")]),t._v(" for more information on how to manage your Getting Started or quickstart environment.")],1)])]),t._v(" "),a("hr")])}),[],!1,null,null,null);e.default=n.exports},679:function(t,e,s){t.exports=s.p+"assets/img/entando-login.0d7dcc2a.png"},680:function(t,e,s){t.exports=s.p+"assets/img/entando-app-builder.129380b5.png"}}]);