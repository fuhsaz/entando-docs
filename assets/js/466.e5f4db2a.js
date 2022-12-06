(window.webpackJsonp=window.webpackJsonp||[]).push([[466],{1440:function(t,e,a){"use strict";a.r(e);var n=a(32),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"entando-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entando-cli"}},[t._v("#")]),t._v(" Entando CLI")]),t._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),a("p",[t._v("The Entando Command Line Interface (CLI) provides a set of commands that accelerate the developer experience by assisting the developer with common tasks such as quickly installing a new copy of Entando, generating an Entando project via JHipster, deploying an Entando Bundle, etc.")]),t._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("h3",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),a("p",[t._v("The basic requirements for the CLI vary depending on the category of developer tasks. The Entando CLI is able to install secondary dependencies using the "),a("code",[t._v("ent check-env")]),t._v(" command as described "),a("a",{attrs:{href:"#check-environment"}},[t._v("here")]),t._v(".")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Category")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Prerequisite")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Basic Development")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("git or "),a("a",{attrs:{href:"https://gitforwindows.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("git for windows"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("nvm or "),a("a",{attrs:{href:"https://github.com/coreybutler/nvm-windows",target:"_blank",rel:"noopener noreferrer"}},[t._v("nvm for windows"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Install Entando in a local VM")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{href:"https://multipass.run/#install",target:"_blank",rel:"noopener noreferrer"}},[t._v("multipass"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Build and publish Entando Bundles")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("docker and docker-compose")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("a git repository for the bundle artifacts")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("a Docker Hub account (or organization) for microservice Docker images")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Deploy an Entando Bundle")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("a Kubernetes cluster with admin access. This could be a local cluster (created via the CLI or manually) or a shared remote cluster.")])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("If you follow the automated option in "),a("RouterLink",{attrs:{to:"/v6.3/docs/getting-started/"}},[t._v("Getting Started")]),t._v(", then the CLI will be  installed for you along with an Ubuntu VM containing k3s Kubernetes and a quickstart Entando application.")],1)]),t._v(" "),a("h3",{attrs:{id:"install-the-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-the-cli"}},[t._v("#")]),t._v(" Install the CLI")]),t._v(" "),a("p",[t._v("Install the current offical release of the CLI via the following command.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -L https://get.entando.org/cli "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n")])])]),a("h3",{attrs:{id:"check-environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#check-environment"}},[t._v("#")]),t._v(" Check Environment")]),t._v(" "),a("p",[t._v("Use the "),a("code",[t._v("check-env")]),t._v(" command to prepare your environment for development. This will verify the presence of additional dependencies (such as git, curl, java, JHipster, etc.) as well as the appropriate versions for your specific Entando instance. In most cases "),a("code",[t._v("check-env")]),t._v(" will automatically install those dependencies and will prompt the developer for guidance or approval as needed.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("ent check-env develop\n")])])]),a("h3",{attrs:{id:"update-the-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-the-cli"}},[t._v("#")]),t._v(" Update the CLI")]),t._v(" "),a("p",[t._v("The CLI can be updated to the latest version (corresponding to your Entando version) using the following command. You should run "),a("code",[t._v("ent check-env develop")]),t._v(" after updating the CLI in case any dependency versions have changed.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -L "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://get.entando.org/cli"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" --update\n")])])]),a("h2",{attrs:{id:"available-commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#available-commands"}},[t._v("#")]),t._v(" Available Commands")]),t._v(" "),a("p",[t._v("Use "),a("code",[t._v("ent help")]),t._v(" to review the list of available commands.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("~~~~~~~~~~~~~~~~~~~\n Entando CLI\n~~~~~~~~~~~~~~~~~~~\n\n> Essentials:\n  - Activate using:  ~/.entando/ent/quickstart/cli/v6.3.0/activate\n  - Dectivate using: ~/.entando/ent/quickstart/cli/v6.3.0/deactivate\n\n> Available commands:\n  - app                  => Helps managing an EntandoApp\n  - app-info             => Displays information about an entando app\n  - bundler              => Wrapper for the ENT private installation of the entando bundle tool.\n  - check-env            => Checks the environment for required dependencies and settings\n  - diag                 => Runs some diagnostic and collects the related info in a tgz file\n  - help                 => Helps in having help\n  - host                 => Helps managing the system that hosts the quickstart VM\n  - jhipster             => Wrapper for the ENT private installation of jhipster.\n  - kubectl              => Helper for using kubectl in ent managed scenarios\n  - npm                  => Wrapper for the ENT private installation of npm. This is mostly for internal use\n  - pod                  => Displays information related to a set of pods\n  - prj                  => Helps managing Entando bundle projects\n  - quickstart           => Helps locally installing entando instances\n  - run-tests            => Run the internal tests\n\n> Further info about entando:\n  - ~/.entando/ent/quickstart/cli/v6.3.0/README.md\n  - https://www.entando.com/\n  - https://developer.entando.com/\n\n> ⚠ RECOMMENDED FIRST STEP ⚠ :\n  - Check the dependencies (ent check-env --help)\n")])])]),a("p",[t._v("Check the help text ("),a("code",[t._v("--help")]),t._v(") for any command to see its specific options, e.g. "),a("code",[t._v("ent check-env --help")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"project-management"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#project-management"}},[t._v("#")]),t._v(" Project Management")]),t._v(" "),a("p",[t._v("These are common sequences for an Entando project.")]),t._v(" "),a("h3",{attrs:{id:"project-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#project-setup"}},[t._v("#")]),t._v(" Project Setup")]),t._v(" "),a("ol",[a("li",[t._v("Setup a project directory")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" testProject "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" testProject\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Generate the project skeleton using the JHipster-based Entando Blueprint.")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("ent jhipster --blueprints entando\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("Generate an entity and MFEs.")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("ent jhipster entity Conference\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("Build the new project. Using the "),a("code",[t._v("ent-prj")]),t._v(" wrapper saves having to build each part of the project individually. The first run can be slower due to node downloads for any MFEs.")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("ent prj build\n")])])]),a("p",[t._v("See "),a("RouterLink",{attrs:{to:"/v6.3/tutorials/backend-developers/generate-microservices-and-micro-frontends.html"}},[t._v("this tutorial")]),t._v(" for more details.")],1),t._v(" "),a("h3",{attrs:{id:"prepare-and-publish-a-bundle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prepare-and-publish-a-bundle"}},[t._v("#")]),t._v(" Prepare and Publish a Bundle")]),t._v(" "),a("p",[t._v("Use the publication system (pbs) to assemble your Entando project into a bundle that can be loaded into Kubernetes. You'll need your github credentials, a github repository to hold your bundle artifacts, and a Docker Hub account or organization.")]),t._v(" "),a("ol",[a("li",[t._v("Initialize the bundle directory")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("ent prj pbs-init\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Publish the build artifacts to github and Docker Hub")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("ent prj pbs-publish\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("Create a Kubernetes Custom Resource and apply it to your Entando instance. You can modify the target namespace parameter ("),a("code",[t._v("-n")]),t._v(") if you changed it from the default.")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("ent prj generate-cr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" ent kubectl apply -n entando -f -\n")])])]),a("p",[t._v("See "),a("RouterLink",{attrs:{to:"/v6.3/tutorials/ecr/publish-project-bundle.html"}},[t._v("this tutorial")]),t._v(" for more details.")],1),t._v(" "),a("h3",{attrs:{id:"run-a-project-locally"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-a-project-locally"}},[t._v("#")]),t._v(" Run a Project locally")]),t._v(" "),a("ol",[a("li",[t._v("Startup Keycloak. This uses docker-compose under the hood.")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("ent prj ext-keycloak start\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Startup the backend microservices")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("ent prj be-test-run\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("Startup one or more of the frontend widgets, each from its own shell.")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("ent prj fe-test-run\n")])])]),a("p",[t._v("See "),a("RouterLink",{attrs:{to:"/v6.3/tutorials/backend-developers/run-local.html"}},[t._v("this tutorial")]),t._v(" for more details.")],1),t._v(" "),a("p",[t._v("Alternatively, you can perform a completely clean install of the CLI by removing your "),a("code",[t._v("~/.entando")]),t._v(" directory and then reinstalling the CLI per the instructions above. This will also remove the private copies of JHipster, Entando Blueprint, etc.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf ~/.entando.\n")])])]),a("h2",{attrs:{id:"bundle-commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bundle-commands"}},[t._v("#")]),t._v(" Bundle Commands")]),t._v(" "),a("p",[t._v("Use the "),a("code",[t._v("ent bundler")]),t._v(" command to prepare a bundle for publication or extract a bundle from an application.")]),t._v(" "),a("ol",[a("li",[t._v("Prepare a bundle custom resource from a Git repository. The project command ("),a("code",[t._v("ent prj generate-cr")]),t._v(") provides a wrapped version of this command. See the help for options including the bundle name, description, repository, etc. The output of this command is a yaml file which can be piped to a file or directly to "),a("code",[t._v("ent kubectl")]),t._v(" for application to Kubernetes.")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("  ent bundler from-git\n")])])]),a("p",[t._v("See "),a("RouterLink",{attrs:{to:"/v6.3/tutorials/ecr/publish-simple-bundle.html"}},[t._v("this tutorial")]),t._v(" for an example using this command.")],1),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Point the bundler to an existing Entando application and extract its components (pages, content, etc.) and static assets into a custom bundle. You can use this bundle to migrate Entando components from one environment to another (e.g. Dev to QA), to provide a template for building a new Entando application, or as the skeleton of an Entando solution. The bundler provides an interactive mode which allows you to identify the components to be exported from the application. The output of this command is the same bundle folder structure created by an Entando project including a top-level descriptor file.")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("  ent bundler from-env  \n")])])]),a("p",[t._v("You will need to provide an "),a("code",[t._v("env.json")]),t._v(" file in the same directory where the bundler is run. This is used to configure the application URLs and client credentials.")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"coreBaseApi"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://<YOUR-DOMAIN-OR-IP>/entando-de-app"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"k8ssvcApi"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://<YOUR-DOMAIN-OR-IP>/k8s"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"clientId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<YOUR-CLIENT-ID>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"clientSecret"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<YOUR-CLIENT-SECRET>"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("See "),a("RouterLink",{attrs:{to:"/v6.3/tutorials/ecr/export-bundle-from-application.html"}},[t._v("this tutorial")]),t._v(" for more instructions on exporting a bundle including how to setup your "),a("code",[t._v("env.json")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"diagnostic-commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#diagnostic-commands"}},[t._v("#")]),t._v(" Diagnostic Commands")]),t._v(" "),a("p",[t._v("The following commands can be useful to more quickly understand what is happening with an Entando Application. If you followed the Getting Started steps to setup Entando then the CLI was automatically installed in the Multipass VM and you can run these commands from there.")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("ent app-info")]),t._v(" display basic information about Kubernetes and the Entando resources (e.g. namespace, pods, ingresses)")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("ent app-info\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[a("code",[t._v("ent pod-info")]),t._v(" display the "),a("code",[t._v("kubectl describe")]),t._v(" and "),a("code",[t._v("kubectl logs")]),t._v(" for each of the major Entando pods in a given namespace.")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("ent pod-info\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[a("code",[t._v("ent diag")]),t._v(" list the current pods in a given Entando namespace and prepare a diagnostic tar.gz containing "),a("code",[t._v("kubectl describe")]),t._v(" and "),a("code",[t._v("kubectl logs")]),t._v(" for each of the major Entando pods. This can be highly useful when working with Entando Support.")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("ent diag\n")])])]),a("p",[t._v("Output:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('ubuntu@entando:~$ ent diag\nPlease provide the namespace (entando):\n## DNS rebinding protection TEST\n## LOCAL INFO\n## K8S INFO\n> POD: quickstart-kc-deployer-pbyjdp1dom\n>       CONTAINER: deployer\n> POD: quickstart-eci-deployer-smectg3hxy\n>       CONTAINER: deployer\n> POD: quickstart-deployer-9ul8cyjtiq\n>       CONTAINER: deployer\n> POD: quickstart-composite-app-deployer-nlz9lxc6do\n>       CONTAINER: deployer\n> POD: quickstart-eci-k8s-svc-deployment-79c4894767-5p85d\n>       CONTAINER: k8s-svc-container\n> POD: quickstart-kc-server-deployment-85987fc84c-flrlw\n>       CONTAINER: server-container\n> POD: quickstart-operator-7bfd7fc8cd-gd774\n>       CONTAINER: operator\n> POD: quickstart-server-deployment-f69f84798-g6lx5\n>       CONTAINER: server-container\n>       CONTAINER: de-container\n>       CONTAINER: appbuilder-container\n> Collected diagdata available under "~/.entando/reports/entando-diagdata-2020-11-19T02:58:47+0000" for consultation\n> Collected diagdata available in archive "~/.entando/reports/entando-diagdata-2020-11-19T02:58:47+0000.tgz"\n')])])]),a("h2",{attrs:{id:"reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[t._v("#")]),t._v(" Reference")]),t._v(" "),a("ul",[a("li",[t._v("Source repository: "),a("a",{attrs:{href:"https://github.com/entando/entando-cli/tree/develop",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/entando/entando-cli/tree/develop"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=s.exports}}]);