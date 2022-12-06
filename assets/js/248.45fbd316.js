(window.webpackJsonp=window.webpackJsonp||[]).push([[248],{1111:function(t,e,n){"use strict";n.r(e);var a=n(32),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"entando-cli"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#entando-cli"}},[t._v("#")]),t._v(" Entando CLI")]),t._v(" "),n("p",[t._v("The Entando Command Line Interface, "),n("strong",[t._v("ent")]),t._v(", provides a set of commands that accelerate common tasks such as installing a new instance of Entando, building projects, creating and deploying bundles, and composing Entando Applications. This document covers the install, command list, and a few operations to start using the ent tool.")]),t._v(" "),n("p",[t._v("For specific topics, follow these links:")]),t._v(" "),n("ol",[n("li",[n("RouterLink",{attrs:{to:"/next/docs/getting-started/ent-bundle.html"}},[t._v("Bundle Management")]),t._v(": "),n("code",[t._v("ent bundle")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/next/docs/getting-started/ent-api.html"}},[t._v("API Management")]),t._v(": "),n("code",[t._v("ent bundle api")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/next/docs/getting-started/ent-svc.html"}},[t._v("Services Management")]),t._v(": "),n("code",[t._v("ent bundle svc")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/next/docs/getting-started/ent-profile.html"}},[t._v("Profile Management")]),t._v(": "),n("code",[t._v("ent profile")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/next/docs/getting-started/ent-diag.html"}},[t._v("Diagnostics and Troubleshooting")]),t._v(": "),n("code",[t._v("ent diag")])],1)]),t._v(" "),n("h3",{attrs:{id:"prerequisites"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),n("p",[t._v("The basic requirements for the CLI vary with use case, as shown in the table below.")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"left"}},[t._v("Category")]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[t._v("Prerequisite")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("Basic Development")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("Git or "),n("a",{attrs:{href:"https://gitforwindows.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git for Windows"),n("OutboundLink")],1)])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("Install Entando in a local VM")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[n("a",{attrs:{href:"https://multipass.run/#install",target:"_blank",rel:"noopener noreferrer"}},[t._v("Multipass"),n("OutboundLink")],1)])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("Build, Package and Publish Entando Bundles")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("Docker and Docker Compose")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}}),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("A Docker Hub account for Docker images")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("Deploy an Entando Bundle")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("A Kubernetes cluster with admin access or a shared remote cluster")])])])]),t._v(" "),n("h2",{attrs:{id:"install-the-cli"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#install-the-cli"}},[t._v("#")]),t._v(" Install the CLI")]),t._v(" "),n("p",[t._v("Install the current official release of the CLI:")]),t._v(" "),n("EntandoCode",[t._v(' bash <(curl -L "https://get.entando.org/cli") --update --release="'+t._s(t.$site.themeConfig.entando.fixpack.v71)+'" ')]),t._v(" "),n("blockquote",[n("p",[t._v("The automatic option in "),n("RouterLink",{attrs:{to:"/next/docs/getting-started/"}},[t._v("Getting Started")]),t._v(" will install the CLI along with a quickstart Entando Application.")],1)]),t._v(" "),n("h2",{attrs:{id:"command-list"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#command-list"}},[t._v("#")]),t._v(" Command List")]),t._v(" "),n("p",[t._v("Use "),n("code",[t._v("ent help")]),t._v(" to review the list of available commands."),n("br"),t._v("\nUse "),n("code",[t._v("ent [command] --help")]),t._v(" for command details.")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("~~~~~~~~~~~~~~~~~~~\n Entando CLI\n~~~~~~~~~~~~~~~~~~~\n\n> Essentials:\n  - Activate using:  ~/.entando/ent/v7.1.0/cli/v7.1.0/activate\n  - Deactivate using: ~/.entando/ent/v7.1.0/cli/v7.1.0/deactivate\n\n> ent Commands:\n  - app                  => Helper for managing an Entando App\n  - app-info             => Displays information about an Entando App\n  - bundle               => Helper module for managing Docker-based (v5) bundles. (See below for more details)\n  - bundler              => Export resources from a running instance as a git-based (v1) bundle\n  - check-env            => Checks the environment for required dependencies and settings\n  - diag                 => Runs diagnostics and aggregates the related info in a .tgz file\n  - ent                  => Helper for managing the local ent installations\n  - ecr                  => Helper for managing the ECR\n  - help                 => Help information\n  - jhipster             => wrapper for the ent installation of JHipster\n  - kubectl              => Helper for using kubectl in ent managed scenarios\n  - pod                  => Displays information related to a set of pods \n  - prj                  => Helper for managing Entando git-based (v1) bundle projects (deprecated)\n  - profile              => Helper for managing an Entando App\n  - quickstart           => Helper for installing Entando instances locally\n  - run-tests            => Runs the internal tests\n> Further info about entando:\n  - ~/.entando/ent/v7.1.0/cli/v7.1.0/README.md\n  - https://www.entando.com/\n  - https://developer.entando.com/\n\n> ⚠ RECOMMENDED FIRST STEP ⚠ :\n  - Check the dependencies (ent check-env --help)\n")])])]),n("p",[n("strong",[t._v("New for Entando 7.1")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("~~~~~~~~~~~~~~~~~~~\n ent bundle CLI\n~~~~~~~~~~~~~~~~~~~\nVERSION\n  @entando/entando-bundle-cli/1.0.1 darwin-x64 node-v14.19.0\n\nUSAGE\n  $ ent bundle COMMAND\n\nTOPICS\n  api  Manage API claims\n  mfe  Micro Frontend operations\n  ms   Microservice operations\n  svc  Manage auxiliary services\n\nCOMMANDS\n  build        Build bundle components\n  deploy       Deploy a bundle to the Local Hub of an Entando Application\n  generate-cr  Generate the Entando Custom Resource (CR) for a bundle project\n  help         Display help for ent bundle.\n  info         Show status information for the bundle project\n  init         Perform the scaffolding of a bundle project\n  install      Install a bundle in the Local Hub of an Entando Application\n  list         List the available components in the bundle\n  pack         Generate the bundle Docker images\n  publish      Publish bundle Docker images\n  run          Run bundle components\n\nDEBUG MODE\n--debug        To enable debug mode for bundle operations    \n\n")])])]),n("h3",{attrs:{id:"check-the-environment"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#check-the-environment"}},[t._v("#")]),t._v(" Check the Environment")]),t._v(" "),n("p",[t._v("Verify dependencies required by your Entando installation:")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("ent check-env develop\n")])])]),n("h3",{attrs:{id:"update-the-cli"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#update-the-cli"}},[t._v("#")]),t._v(" Update the CLI")]),t._v(" "),n("p",[t._v("To update ent to the latest version and check for dependencies:")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -L "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://get.entando.org/cli"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" --update\nent check-env develop\n")])])]),n("blockquote",[n("p",[t._v("Alternatively, to perform a clean install, delete the "),n("code",[t._v("~/.entando")]),t._v(" directory via "),n("code",[t._v("rm -rf ~/.entando")]),t._v(". Then reinstall the CLI using the instructions above. This will also remove the private copies of JHipster, Entando Blueprint, etc.")])]),t._v(" "),n("h3",{attrs:{id:"enable-debug-mode"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#enable-debug-mode"}},[t._v("#")]),t._v(" Enable Debug Mode")]),t._v(" "),n("p",[t._v("To utilize the debug mode for ent bundle commands:")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v(" ent --debug bundle "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("command"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),n("h3",{attrs:{id:"customize-quickstart"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#customize-quickstart"}},[t._v("#")]),t._v(" Customize Quickstart")]),t._v(" "),n("p",[t._v("The "),n("code",[t._v("ent quickstart")]),t._v(" command accepts parameters to customize your quickstart environment. These options allow you to modify specific properties of your VM, installation versions and databases.")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"left"}},[t._v("Operation")]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[t._v("Syntax")]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("ent quickstart")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("ent quickstart --vm-reuse=YOUR-EXISTING-VM")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("Reuse an existing VM")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}}),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v('ent quickstart --release="v7.1.0"')]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("Use a specific release version for the install")])])])]),t._v(" "),n("h2",{attrs:{id:"reference"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[t._v("#")]),t._v(" Reference")]),t._v(" "),n("ul",[n("li",[t._v("Source repository: "),n("a",{attrs:{href:"https://github.com/entando/entando-cli/tree/develop",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/entando/entando-cli/tree/develop"),n("OutboundLink")],1)])])],1)}),[],!1,null,null,null);e.default=s.exports}}]);