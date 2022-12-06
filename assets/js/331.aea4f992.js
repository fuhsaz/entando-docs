(window.webpackJsonp=window.webpackJsonp||[]).push([[331],{1231:function(e,t,o){"use strict";o.r(t);var a=o(32),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"create-a-local-npm-registry-for-testing"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#create-a-local-npm-registry-for-testing"}},[e._v("#")]),e._v(" Create a local NPM registry for testing")]),e._v(" "),o("p",[e._v("As a registry you can use whatever technology you prefer. Some examples\nare the "),o("a",{attrs:{href:"https://npmjs.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("NPM official registry"),o("OutboundLink")],1),e._v(",\n"),o("a",{attrs:{href:"https://github.com/verdaccio/verdaccio",target:"_blank",rel:"noopener noreferrer"}},[e._v("Verdaccio"),o("OutboundLink")],1),e._v(" or\n"),o("a",{attrs:{href:"https://github.com/sonatype/nexus-public",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nexus"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("For development purposes, let’s start a local Nexus repository and set\nit up as NPM registry")]),e._v(" "),o("h2",{attrs:{id:"start-local-nexus-as-a-docker-container"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#start-local-nexus-as-a-docker-container"}},[e._v("#")]),e._v(" Start local nexus as a docker container")]),e._v(" "),o("p",[e._v("Start by creating a volume to host all the data you will build in nexus.\nThis is useful to save the content even if you will remove the docker\ncontainer. You can follow two different approaches here: 1. You create a\ndocker volume and mount it (that’s the sonatype recommanded approach) 2.\nYou create a folder, change the modification to 777 and use that as a\nvolume")]),e._v(" "),o("p",[e._v("By following the first approach, here are the commands you will need to\nissue in order to run Nexus as a docker container using the docker\ncommand")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("docker volume create --name nexus-data\ndocker run -d -p 8081:8081 --name nexus -v nexus-data:/nexus-data sonatype/nexus3\n")])])]),o("p",[e._v("With the second approach, create a directory (e.g. "),o("code",[e._v("nexus-data")]),e._v(") and set\nthe own to UID 200")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v('mkdir nexus-data && chown -R 200:200 nexus-data\ndocker run -d -p 8081:8081 --name nexus -v "$(pwd)/nexus-data":/nexus-data sonatype/nexus3\n')])])]),o("p",[e._v("Nexus should be available at your localhost at port 8081")]),e._v(" "),o("p",[e._v("Now you need to sign-in as an admin to configure Nexus and make it\nusable as a private npm repository. To do so, you need to get the admin\ncredential from inside the container.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("docker exec -it nexus cat /nexus-data/admin.password\n")])])]),o("p",[e._v("Now you can use the password to access your private nexus instance as an\nadmin and change the admin password to something easier for you to work\nwith.")]),e._v(" "),o("h2",{attrs:{id:"setup-a-private-npm-registry"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#setup-a-private-npm-registry"}},[e._v("#")]),e._v(" Setup a private npm registry")]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("NOTE")]),e._v(": Nexus allows you to setup both a private registry and a\nproxy to an external registry. For development purposes, having only a\nprivate registry could make sense in order to retrieve only local\nmodules and not modules available on remote registries, though feel\nfree to setup also a proxy if you want to get access to npm modules\noutside of the private registry. Check out the\n"),o("a",{attrs:{href:"https://help.sonatype.com/repomanager3/nexus-repository-administration/formats/npm-registry",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentation"),o("OutboundLink")],1),e._v("\non nexus website for further details.")])]),e._v(" "),o("p",[e._v("To setup a local repository: 1. Go to the\n"),o("code",[e._v("Server administration and configuration")]),e._v(" page 2. Go to repositories 3.\nCreate a new repository 4. Choose the "),o("strong",[e._v("npm (hosted)")]),e._v(" 5. Provide a name\nand save")]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("NOTE")]),e._v(": If you want you can also create a group repository to\nsupport search from multiple sources (local/proxies) at the same time.")])]),e._v(" "),o("h2",{attrs:{id:"setup-npm-realm-and-user-for-publishing"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#setup-npm-realm-and-user-for-publishing"}},[e._v("#")]),e._v(" Setup npm-realm and user for publishing")]),e._v(" "),o("p",[e._v("In order to be able to login and publish into a repository you need to")]),e._v(" "),o("ol",[o("li",[e._v("Create a role to enable user publishing 2. Create a user and assign\nroles to them 3. Enable the NPM realm to support "),o("code",[e._v("npm adduser")]),e._v(" or\n"),o("code",[e._v("npm login")]),e._v(" commands")])]),e._v(" "),o("h2",{attrs:{id:"create-the-role"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#create-the-role"}},[e._v("#")]),e._v(" Create the role")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Go to "),o("code",[e._v("Security > Roles > Create role > Nexus Role")])])]),e._v(" "),o("li",[o("p",[e._v("Choose a role ID and name")])]),e._v(" "),o("li",[o("p",[e._v("In the privileges, add the one required for publishing, e.g.\n"),o("code",[e._v("nx-repository-view-npm-<your-repo>-*")])])]),e._v(" "),o("li",[o("p",[e._v("Save")])])]),e._v(" "),o("h2",{attrs:{id:"create-the-user"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#create-the-user"}},[e._v("#")]),e._v(" Create the user")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Go to "),o("code",[e._v("Security > Users > Create local user")])])]),e._v(" "),o("li",[o("p",[e._v("Add the relevant informations for your user, set the user "),o("code",[e._v("Active")]),e._v("\nand add the role you created in the previous step")])])]),e._v(" "),o("h2",{attrs:{id:"enable-npm-realm-to-support-npm-adduser-or-npm-login"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#enable-npm-realm-to-support-npm-adduser-or-npm-login"}},[e._v("#")]),e._v(" Enable npm realm to support "),o("code",[e._v("npm adduser")]),e._v(" or "),o("code",[e._v("npm login")])]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Go to "),o("code",[e._v("Security > Realms")])])]),e._v(" "),o("li",[o("p",[e._v("Add "),o("code",[e._v("the npm Bearer Token Realm")]),e._v(" to the active column")])])]),e._v(" "),o("h2",{attrs:{id:"configure-npm"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configure-npm"}},[e._v("#")]),e._v(" Configure NPM")]),e._v(" "),o("h2",{attrs:{id:"config-npm-to-use-the-local-repository"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#config-npm-to-use-the-local-repository"}},[e._v("#")]),e._v(" Config npm to use the local repository")]),e._v(" "),o("p",[e._v("In order to use the private repository as default repository you need to\nconfigure npm accordingly (or use the "),o("code",[e._v("--registry=")]),e._v(" option with all your\ncommands)")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("npm config set registry http://localhost:8081/repository/<repo-name>/\n")])])]),o("blockquote",[o("p",[o("strong",[e._v("Note A")]),e._v(": The trailing slash at the end of the repository is\nrequired for the repository to work")])]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Note B")]),e._v(": This repository will be used for all the npm methods, so\nbare in mind that changing the global repository will potentially\nbreak other projects. If you want to avoid this, continue to use the\n"),o("code",[e._v("--registry")]),e._v(" option.")])]),e._v(" "),o("h2",{attrs:{id:"login-to-the-registry"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#login-to-the-registry"}},[e._v("#")]),e._v(" Login to the registry")]),e._v(" "),o("p",[e._v("You should be able to login to the registry using the login command")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("npm login --registry=http://localhost:8081/repository/<repo-name>/\n")])])]),o("h2",{attrs:{id:"good-to-go"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#good-to-go"}},[e._v("#")]),e._v(" Good to go")]),e._v(" "),o("p",[e._v("You can now publish your own npm modules to the private registry using\nthe publish command")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("npm publish --registry=http://localhost:8081/repository/<repo-name>/\n")])])]),o("h2",{attrs:{id:"set-the-publish-repository-at-package-json-level"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#set-the-publish-repository-at-package-json-level"}},[e._v("#")]),e._v(" Set the publish repository at package.json level")]),e._v(" "),o("p",[e._v("In your npm module you can also add to the "),o("code",[e._v("package.json")]),e._v(" an entry to\nmake the private repository the default for publishing. Add this to your\npackage.json file")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v('  "publishConfig": {\n    "registry": "http://localhost:8081/repository/<repo-name>/"\n  }\n')])])])])}),[],!1,null,null,null);t.default=r.exports}}]);