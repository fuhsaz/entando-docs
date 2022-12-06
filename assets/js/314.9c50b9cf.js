(window.webpackJsonp=window.webpackJsonp||[]).push([[314],{1210:function(e,a,t){"use strict";t.r(a);var o=t(32),n=Object(o.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"building-a-docker-image-and-deploying-a-pre-packaged-app"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#building-a-docker-image-and-deploying-a-pre-packaged-app"}},[e._v("#")]),e._v(" Building a Docker Image and Deploying a Pre-Packaged App")]),e._v(" "),t("h2",{attrs:{id:"prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Java 8")])]),e._v(" "),t("li",[t("p",[e._v("Docker installed locally\n("),t("a",{attrs:{href:"https://docs.docker.com/docker-for-windows/install/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.docker.com/docker-for-windows/install/"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("li",[t("p",[e._v("maven")])]),e._v(" "),t("li",[t("p",[e._v("Access to a docker repository (docker.io or other)")])])]),e._v(" "),t("h2",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),t("p",[e._v("This tutorial will show you how you can use an Entando application that\nyou have built as a launching point for creating new applications.")]),e._v(" "),t("p",[e._v("In this lab you’ll take a demo application previously built, install the\nbackups in a blank application, build an image from the updated app, and\ndeploy it as a new application.")]),e._v(" "),t("h2",{attrs:{id:"setup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[e._v("#")]),e._v(" Setup")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Clone the application at:\n"),t("a",{attrs:{href:"https://github.com/entando/entando-de-app",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/entando/entando-de-app"),t("OutboundLink")],1),e._v(" using")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("git clone https://github.com/entando/entando-de-app\n")])])])]),e._v(" "),t("li",[t("p",[e._v("On a command line, cd into the entando-de-app you just cloned:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("cd entando-de-app\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Take the provide zip file and unzip it in a location of your choice.")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("This zip contains all of the assets, content, and metadata\nneeded to launch an Entando application. We are going to package\nthem the assets and DB an image and")])]),e._v(" "),t("li",[t("p",[e._v("Entando will automatically instantiate and populate the app from\nthe most recent backup")])])])]),e._v(" "),t("li",[t("p",[e._v("Move the resources and protected folders from the zip file into your\n"),t("code",[e._v("entando-de-app")]),e._v(" in "),t("code",[e._v("src/main/webapp")]),e._v(" replacing any content that is\nalready there")])]),e._v(" "),t("li",[t("p",[e._v("Build a docker image from the app")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("mvn clean package -Pwildfly -Pderby docker:build\n")])])]),t("ul",[t("li",[e._v('Note that the "derby" option here is only for the initialization\nphase of the DB when deploying. It isn’t the final database\nchoice')])])]),e._v(" "),t("li",[t("p",[e._v("View the images installed on your local docker instance")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("docker images\n")])])]),t("p",[e._v("Look for")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("entando/entando-de-app:latest\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Create a repository on your docker repository to house your new\napplication")])]),e._v(" "),t("li",[t("p",[e._v("Re-tag the image you just built with your repo")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v(" docker tag entando/entando-de-app:latest <YOUR-USER>/<YOUR-REPO_NAME>:latest\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Push the Image to your Repository")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("docker push <YOUR-USER>/<YOUR-REPO_NAME>:latest\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Now we need to generate a new application for deployment to\nKubernetes using the helm chart")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("If you have an output from helm from before you can re-use it\nand just apply the changes to the config map.")])]),e._v(" "),t("li",[t("p",[e._v("Or you can re-run helm and change the output")])])])]),e._v(" "),t("li",[t("p",[e._v("Re-run the helm command for your environment (check with your\ninstructor if you don’t know what this is)")])]),e._v(" "),t("li",[t("p",[e._v("Open the output yaml file from the helm command in the text editor\nof your choice")]),e._v(" "),t("ul",[t("li",[e._v("For example: "),t("code",[e._v("vi training-alpha.yaml")])])])]),e._v(" "),t("li",[t("p",[e._v("In that file look for the "),t("code",[e._v("ConfigMap")])]),e._v(" "),t("ul",[t("li",[t("p",[e._v("The config map defines all of the images that are available as\npart of the deployment. They aren’t all used concurrently.")])]),e._v(" "),t("li",[t("p",[e._v("You can also view this config map in kubernetes/OpenShift")])])])]),e._v(" "),t("li",[t("p",[e._v("Now you need to update the deployment to use your customized Wildfly\nimage. Find "),t("code",[e._v("entando-de-app-wildfly")]),e._v(" in the config map")]),e._v(" "),t("ul",[t("li",[e._v("Note that we are changing the de-app but you could create a\ncustom version of any of the included images")])])]),e._v(" "),t("li",[t("p",[e._v("Change the version to match the version you used for your image")])]),e._v(" "),t("li",[t("p",[e._v('Change the "organization" to the name of your main image repository\norganization and if you aren’t using docker.io (DockerHub) then\nchange the registry as well.')])]),e._v(" "),t("li",[t("p",[e._v("Save the file")])]),e._v(" "),t("li",[t("p",[e._v("Follow the deployment steps you went through when you originally\ndeployed your Entando application to your Kubernetes instance")])]),e._v(" "),t("li",[t("p",[e._v("Once deployed go to the app builder in your app")])]),e._v(" "),t("li",[t("p",[e._v("Click Go To Homepage")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);