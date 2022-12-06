(window.webpackJsonp=window.webpackJsonp||[]).push([[493],{1477:function(e,t,a){"use strict";a.r(t);var o=a(32),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"install-bundles-from-a-private-git-repository"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-bundles-from-a-private-git-repository"}},[e._v("#")]),e._v(" Install Bundles from a Private Git Repository")]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("The standard deployment of the Entando Component Repository assumes that bundles are checked out from public Git repositories. Public repositories do not require user authentication in order to access content inside the Git repository.")]),e._v(" "),a("p",[e._v("A customer may however choose to limit repository access to specific Git user accounts. This document will\ndescribe the steps that can be followed to allow the ECR to log onto the Git server when pulling content from a\nGit repository.")]),e._v(" "),a("p",[e._v("For more background information, please consult the folowing documentation:")]),e._v(" "),a("ol",[a("li",[a("RouterLink",{attrs:{to:"/v6.3/docs/concepts/custom-resources.html"}},[e._v("Entando custom resource reference")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/v6.3/docs/ecr/ecr-overview.html"}},[e._v("Entando Component Repository overview")])],1)]),e._v(" "),a("h2",{attrs:{id:"using-ssh-keys-with-git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-ssh-keys-with-git"}},[e._v("#")]),e._v(" Using SSH keys with Git")]),e._v(" "),a("p",[e._v("Entando supports SSH keys to connect to Git repositories. Following the SSH approach, a developer that\nconnects to Git would typically generate a public/private keypair. The developer would then register the public\nkey with the Git server, whilst storing the private key securely in the local filesystem. When the Git command line\nutility executes an operation that requires an authenticated user, it will automatically look for the private\nkey locally and match it with the public key provided by the server. If the two match up, then the operation is allowed to complete.")]),e._v(" "),a("p",[e._v("Entando currently allows a Kubernetes Secret containing a Git SSH private key to be mounted in the container that hosts the Entando Component Manager service. This container is deployed with the EntandoApp and can therefore be configured\nfrom the EntandoApp custom resource. The best approach to prepare such a secret is by generating the keypair on\nyour local machine using a Docker image, and creating a Secret from the directory the keypair was generated in.")]),e._v(" "),a("h2",{attrs:{id:"tutorial"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tutorial"}},[e._v("#")]),e._v(" Tutorial")]),e._v(" "),a("p",[e._v("This is the recommended flow on Linux:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Navigate to a folder in your operating system that you would like to create the Secret from")])]),e._v(" "),a("li",[a("p",[e._v("Generate the SSH keypair from the known SSH client docker image:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Run the Docker container in interactive mode, mounting the default user ssh directory to a local directory")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker run -it -v $PWD/entando_ssh:/root/.ssh kroniak/ssh-client /bin/bash \n")])])])]),e._v(" "),a("li",[a("p",[e._v("On the shell of the resulting container, generate your own keypair")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ssh-keygen\n")])])]),a("p",[e._v("Select all the default options, e.g. no passphrase, etc.")])]),e._v(" "),a("li",[a("p",[e._v("Add the fingerprint to the known_hosts file by attempting to connect to your git server:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ssh git@github.com\n")])])]),a("p",[e._v("When prompted to add it to the known hosts, type 'yes'. The command can be expected to fail and that is OK.")])]),e._v(" "),a("li",[a("p",[e._v("Run "),a("code",[e._v("exit")])])])])]),e._v(" "),a("li",[a("p",[e._v("Create the Secret. You are now back in your local operating system's shell. You will notice that a new directory has been created due\nto the previous mount that was setup in the Docker command. You may need to give yourself access to this folder before\nyou can create a Secret with the content of this folder:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Change the permissions on the folder:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo chmod ag+r entando_ssh -R\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Create a secret from the directory:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl create secret generic my-git-secret --from-file=entando_ssh -n <<your-namespace>>\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Confirm that the secret exists and has at least two keys: known_hosts, and id_rsa. Without these two keys in the\nSecret, Entando cannot log into Git.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl get secret my-git-secret -n <<your-namespace>> -o yaml\n")])])])])])]),e._v(" "),a("li",[a("p",[e._v("Link the resulting private key to the account of a user that has access to the Git repositories in question. Ideally\nthis should be a dedicated service account user with restricted read only access to the repositories in question. For Github\naccounts, you can follow the "),a("a",{attrs:{href:"https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account",target:"_blank",rel:"noopener noreferrer"}},[e._v("official Github instructions."),a("OutboundLink")],1),e._v("\nWheen you are prompted for the content of the public key, please use the one generated in the previously created\nentando_ssh directory:\n"),a("code",[e._v("entando_ssh/id_rsa.pub")])])]),e._v(" "),a("li",[a("p",[e._v("Now modify the EntandoApp resource you are deploying to mount the previously created Secret in the\n"),a("code",[e._v("spec.ecrGitSshSecretName")]),e._v(" property:")])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('      kind: "EntandoApp"\n      metadata:\n        annotations: {}\n        labels: {}\n        name: "quickstart"\n      spec:\n        dbms: none\n        replicas: 1\n        ecrGitSshSecretName: my-git-secret\n        standardServerImage: wildfly\n        ingressPath: /entando-de-app\n        ingressHostName: ampie.apps.serv.run\n        environmentVariables:\n          - name: SPRING_PROFILES_ACTIVE\n            value: "default,swagger"\n')])])])])}),[],!1,null,null,null);t.default=n.exports}}]);