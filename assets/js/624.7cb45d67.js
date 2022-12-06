(window.webpackJsonp=window.webpackJsonp||[]).push([[624],{1672:function(e,t,a){"use strict";a.r(t);var s=a(32),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"installation-on-google-kubernetes-engine-gke"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-on-google-kubernetes-engine-gke"}},[e._v("#")]),e._v(" Installation on Google Kubernetes Engine (GKE)")]),e._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("ul",[a("li",[e._v("Google Cloud account: "),a("a",{attrs:{href:"http://cloud.google.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://cloud.google.com"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("If you choose not to use the Google Cloud Shell, install the "),a("a",{attrs:{href:"https://cloud.google.com/sdk/docs#install_the_latest_cloud_tools_version_cloudsdk_current_version",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Cloud SDK"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"cluster-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cluster-setup"}},[e._v("#")]),e._v(" Cluster Setup")]),e._v(" "),a("p",[e._v("These steps only need to be completed once per cluster.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Log in to your Google Cloud account at "),a("a",{attrs:{href:"https://cloud.google.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://cloud.google.com/"),a("OutboundLink")],1)])]),e._v(" "),a("li",[a("p",[e._v("Go to "),a("code",[e._v("Kubernetes Engine")]),e._v(" → "),a("code",[e._v("Clusters")])])]),e._v(" "),a("li",[a("p",[e._v("Select an existing project or create a new one")])]),e._v(" "),a("li",[a("p",[e._v("Click "),a("code",[e._v("Enable")]),e._v(" for the "),a("code",[e._v("Kubernetes Engine API")])])]),e._v(" "),a("li",[a("p",[e._v("Once the API is enabled, click "),a("code",[e._v("Create")]),e._v(" to create a cluster")])]),e._v(" "),a("li",[a("p",[e._v("Click the "),a("code",[e._v("Configure")]),e._v(" button for the "),a("code",[e._v("GKE Standard")]),e._v(" option. Unless otherwise indicated, you do not need to change the default configuration options. (Choosing the "),a("code",[e._v("GKE Autopilot")]),e._v(" option typically results in a cluster with too few initial resources and can prolong the startup process as the cluster adds resources on demand.)")])]),e._v(" "),a("li",[a("p",[e._v("In the left menu, select "),a("code",[e._v("default-pool")]),e._v(" → "),a("code",[e._v("Nodes")])])]),e._v(" "),a("li",[a("p",[e._v('Select "e2-standard-2" as the '),a("code",[e._v("Machine Type")]),e._v(" if you are setting up a basic test cluster for a single Entando Application. Additional CPU and memory may be required for a shared cluster containing multiple Entando Applications or to improve performance. Refer to "),a("a",{attrs:{href:"#appendix-configuring-clustered-storage"}},[e._v("Appendix A")]),e._v(" for details on clustered storage.")])]),e._v(" "),a("li",[a("p",[e._v("Click "),a("code",[e._v("Create")]),e._v(". It may take a few minutes for the cluster to initialize.")])]),e._v(" "),a("li",[a("p",[e._v("Click "),a("code",[e._v("Connect")])])]),e._v(" "),a("li",[a("p",[e._v("Click "),a("code",[e._v("Run in Cloud Shell")]),e._v(". Alternatively, connect your local "),a("code",[e._v("kubectl")]),e._v(" to the GKE cluster.")])]),e._v(" "),a("li",[a("p",[e._v("Run "),a("code",[e._v("kubectl get node")]),e._v(" to verify your connection. The output should list the nodes in your cluster.")])])]),e._v(" "),a("h3",{attrs:{id:"install-the-nginx-ingress-controller"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-the-nginx-ingress-controller"}},[e._v("#")]),e._v(" Install the NGINX Ingress Controller")]),e._v(" "),a("p",[e._v("The following steps install the NGINX Ingress Controller to manage the ingresses for Entando services deployed by the operator. These are the minimum instructions to prepare the NGINX ingress using the Google Cloud Shell, which is a simple and adaptable configuration for most users and environments.")]),e._v(" "),a("p",[e._v("Users who require the GKE Ingress controller (this is rare) can follow "),a("a",{attrs:{href:"https://cloud.google.com/kubernetes-engine/docs/concepts/ingress",target:"_blank",rel:"noopener noreferrer"}},[e._v("the integration instructions provided by GKE"),a("OutboundLink")],1),e._v(" and then customize the service definition created by the Entando Operator.")]),e._v(" "),a("p",[e._v("For installation using your local "),a("code",[e._v("kubectl")]),e._v(" or to vary other settings, refer to the "),a("a",{attrs:{href:"https://kubernetes.github.io/ingress-nginx/deploy/#gce-gke",target:"_blank",rel:"noopener noreferrer"}},[e._v("NGINX Ingress Controller documentation"),a("OutboundLink")],1),e._v(" or the "),a("a",{attrs:{href:"https://cloud.google.com/community/tutorials/nginx-ingress-gke",target:"_blank",rel:"noopener noreferrer"}},[e._v("GCE-GKE tutorial"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("If you created a "),a("strong",[e._v("Private Cluster")]),e._v(", you need to configure your firewall accordingly. Refer to the "),a("a",{attrs:{href:"https://kubernetes.github.io/ingress-nginx/deploy/#gce-gke",target:"_blank",rel:"noopener noreferrer"}},[e._v("NGINX Ingress Controller documentation"),a("OutboundLink")],1),e._v(" and the "),a("a",{attrs:{href:"https://cloud.google.com/kubernetes-engine/docs/how-to/private-clusters#add_firewall_rules",target:"_blank",rel:"noopener noreferrer"}},[e._v("Adding firewall rules for specific use cases"),a("OutboundLink")],1),e._v(" GKE guide.")])]),e._v(" "),a("ol",[a("li",[e._v("Initialize your user as a cluster-admin")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("kubectl create clusterrolebinding cluster-admin-binding --clusterrole cluster-admin "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--user "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("gcloud config get-value account"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Install the ingress controller pods")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/provider/cloud/deploy.yaml\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[e._v("Once the ingress-nginx pods are running, enter the following command to return the external IP address of your ingress controller. Use "),a("code",[e._v("Ctrl+C")]),e._v(" to exit after the EXTERNAL-IP value for "),a("code",[e._v("nginx-ingress-controller")]),e._v(" is displayed.")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("kubectl get "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("service")]),e._v(" -n ingress-nginx --watch\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("NGINX is working correctly if a "),a("code",[e._v("404 Not Found")]),e._v(" NGINX error page is generated when accessing the EXTERNAL-IP from your browser. For a more complete test, you can "),a("RouterLink",{attrs:{to:"/v7.1/tutorials/devops/manage-nginx.html#verify-the-nginx-ingress-install"}},[e._v("set up a simple test application")]),e._v(" using your local "),a("code",[e._v("kubectl")]),e._v(". You can also "),a("RouterLink",{attrs:{to:"/v7.1/tutorials/devops/manage-nginx.html#customize-the-nginx-configuration"}},[e._v("customize the NGINX ingress")]),e._v(" to optimize the configuration for Entando.")],1)]),e._v(" "),a("h3",{attrs:{id:"install-the-entando-custom-resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-the-entando-custom-resources"}},[e._v("#")]),e._v(" Install the Entando Custom Resources")]),e._v(" "),a("ol",[a("li",[e._v("Download and apply the custom resource definitions (CRDs) to the cluster. This must be done once per cluster.")])]),e._v(" "),a("EntandoCode",[e._v("kubectl apply -f https://raw.githubusercontent.com/entando/entando-releases/"+e._s(e.$site.themeConfig.entando.fixpack.v71)+"/dist/ge-1-1-6/namespace-scoped-deployment/cluster-resources.yaml\n")]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v('Create a namespace for the Entando Application. If you choose a name other than "entando," update the following commands wherever a namespace is provided.')])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("kubectl create namespace entando\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[e._v("Download the "),a("code",[e._v("entando-operator-config")]),e._v(" template to configure the "),a("RouterLink",{attrs:{to:"/v7.1/tutorials/devops/entando-operator.html"}},[e._v("Entando Operator")])],1)]),e._v(" "),a("EntandoCode",[e._v('curl -sLO "https://raw.githubusercontent.com/entando/entando-releases/'+e._s(e.$site.themeConfig.entando.fixpack.v71)+'/dist/ge-1-1-6/samples/entando-operator-config.yaml"')]),e._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[e._v("Edit the "),a("code",[e._v("entando-operator-config.yaml")]),e._v(" to add two properties")])]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n   "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("entando.requires.filesystem.group.override")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"true"')]),e._v("\n   "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("entando.ingress.class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"nginx"')]),e._v("\n")])])]),a("ol",{attrs:{start:"5"}},[a("li",[e._v("Apply the "),a("code",[e._v("ConfigMap")])])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("kubectl apply -f entando-operator-config.yaml -n entando\n")])])]),a("ol",{attrs:{start:"6"}},[a("li",[e._v("Install the namespace-scoped resources")])]),e._v(" "),a("EntandoCode",[e._v("kubectl apply -n entando -f https://raw.githubusercontent.com/entando/entando-releases/"+e._s(e.$site.themeConfig.entando.fixpack.v71)+"/dist/ge-1-1-6/namespace-scoped-deployment/namespace-resources.yaml")]),e._v(" "),a("ol",{attrs:{start:"7"}},[a("li",[e._v("Use "),a("code",[e._v("kubectl get pods -n entando --watch")]),e._v(" to observe the base pods initialize. Exit this command via "),a("code",[e._v("Ctrl+C")]),e._v(".")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("$ kubectl get pods -n entando\nNAME                                   READY   STATUS    RESTARTS   AGE\nentando-k8s-service-86f8954d56-mphpr   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          95s\nentando-operator-5b5465788b-ghb25      "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          95s\n")])])]),a("h3",{attrs:{id:"configure-the-entando-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-the-entando-application"}},[e._v("#")]),e._v(" Configure the Entando Application")]),e._v(" "),a("ol",[a("li",[e._v("Download the "),a("code",[e._v("entando-app.yaml")]),e._v(" template")])]),e._v(" "),a("EntandoCode",[e._v('curl -sLO "https://raw.githubusercontent.com/entando/entando-releases/'+e._s(e.$site.themeConfig.entando.fixpack.v71)+'/dist/ge-1-1-6/samples/entando-app.yaml"')]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Edit "),a("code",[e._v("entando-app.yaml")]),e._v(". Replace "),a("code",[e._v("YOUR-HOST-NAME")]),e._v(" with "),a("code",[e._v("EXTERNAL-IP")]),e._v(" + "),a("code",[e._v(".nip.io")]),e._v(". See "),a("RouterLink",{attrs:{to:"/v7.1/docs/consume/entandoapp-cr.html"}},[e._v("the EntandoApp custom resource overview")]),e._v(" for additional options.")],1)]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("ingressHostName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" YOUR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("HOST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("NAME\n")])])]),a("p",[e._v("e.g. "),a("em",[e._v("ingressHostName: 20.120.54.243.nip.io")])]),e._v(" "),a("h2",{attrs:{id:"deploy-your-entando-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy-your-entando-application"}},[e._v("#")]),e._v(" Deploy Your Entando Application")]),e._v(" "),a("p",[e._v("You can now deploy your application to your GKE cluster.")]),e._v(" "),a("ol",[a("li",[e._v("Deploy the Entando Application")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("kubectl apply -n entando -f entando-app.yaml\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("It can take 10 minutes or more for the application to fully deploy. You can watch the pods warming up with the command below. Use "),a("code",[e._v("Ctrl+C")]),e._v(" to exit.")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("kubectl get pods -n entando --watch\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[e._v("Once all the pods are in a running state, access the Entando App Builder at the following address")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("http://YOUR-HOST-NAME/app-builder/\n")])])]),a("p",[e._v("See the "),a("RouterLink",{attrs:{to:"/v7.1/docs/getting-started/#login-to-entando"}},[e._v("Getting Started guide")]),e._v(" for helpful login instructions and next steps.")],1),e._v(" "),a("h2",{attrs:{id:"appendix-configuring-clustered-storage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#appendix-configuring-clustered-storage"}},[e._v("#")]),e._v(" Appendix: Configuring Clustered Storage")]),e._v(" "),a("p",[e._v("In order to scale an Entando Application across multiple nodes, you must provide a storage class that supports\na "),a("code",[e._v("ReadWriteMany")]),e._v(" access policy, e.g. by using a dedicated storage provider like GlusterFS.")]),e._v(" "),a("p",[e._v("The example below provides clustered storage via GCP Cloud Filestore. However, it is best practice to expose an existing clustered file solution as a StorageClass.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("You do not need clustered storage to scale an Entando Application if you schedule all instances to the same node via taints on other nodes and a "),a("code",[e._v("ReadWriteOnce (RWO)")]),e._v(" policy. Be aware of the impact to node resource allocation and to recovery, should your application fail or become unreachable. Note that if the node fails or is shutdown, your application will be unresponsive while Kubernetes reschedules the pods to a different node.")])]),e._v(" "),a("h3",{attrs:{id:"clustered-storage-using-gcp-cloud-filestore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clustered-storage-using-gcp-cloud-filestore"}},[e._v("#")]),e._v(" Clustered Storage Using GCP Cloud Filestore")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("In the left menu of the GCP portal, find the Storage section and select "),a("code",[e._v("Filestore")]),e._v(" -> "),a("code",[e._v("Instances")])])]),e._v(" "),a("li",[a("p",[e._v("Enable the Filestore, if you haven't already")])]),e._v(" "),a("li",[a("p",[e._v("Select "),a("code",[e._v("Create Instance")])])]),e._v(" "),a("li",[a("p",[e._v("Adjust the field values from the defaults as needed. Take note of your instance ID.")])]),e._v(" "),a("li",[a("p",[e._v("Once the instance is created on the Filestore main page, note the IP address of your NFS")])]),e._v(" "),a("li",[a("p",[e._v("Install the provisioner that creates the StorageClass to enable deployment of Entando Applications. Use the commands below, replacing "),a("code",[e._v("YOUR-NFS-IP")]),e._v(" and "),a("code",[e._v("YOUR-NFS-PATH")]),e._v(" with your instance ID and the IP address of your cluster.")])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("helm repo add nfs-subdir-external-provisioner https://kubernetes-sigs.github.io/nfs-subdir-external-provisioner/\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("helm install nfs-subdir-external-provisioner nfs-subdir-external-provisioner/nfs-subdir-external-provisioner \\\n    --set nfs.server=YOUR-NFS-IP \\\n    --set nfs.path=YOUR-NFS-PATH\n")])])]),a("p",[e._v("Learn about the provisioner and additional configuration options at\n"),a("a",{attrs:{href:"https://github.com/kubernetes-sigs/nfs-subdir-external-provisioner",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/kubernetes-sigs/nfs-subdir-external-provisioner"),a("OutboundLink")],1)]),e._v(" "),a("ol",{attrs:{start:"7"}},[a("li",[e._v("Verify that your client provisioned successfully. This is indicated by the presence of the storage class "),a("code",[e._v("nfs-client")]),e._v(" in the output of the following command.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl get sc\n")])])]),a("p",[e._v("Example output:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("NAME                 PROVISIONER                                     RECLAIMPOLICY   VOLUMEBINDINGMODE      ALLOWVOLUMEEXPANSION   AGE\nnfs-client           cluster.local/nfs-subdir-external-provisioner   Delete          Immediate              true                   37m\npremium-rwo          pd.csi.storage.gke.io                           Delete          WaitForFirstConsumer   true                   27h\nstandard (default)   kubernetes.io/gce-pd                            Delete          Immediate              true                   27h\nstandard-rwo         pd.csi.storage.gke.io                           Delete          WaitForFirstConsumer   true                   27h\n")])])]),a("ol",{attrs:{start:"8"}},[a("li",[e._v("Add the variables below to your operator "),a("code",[e._v("ConfigMap")])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('entando.k8s.operator.default.clustered.storage.class: "nfs-client"\nentando.k8s.operator.default.non.clustered.storage.class: "standard"\n')])])]),a("ol",{attrs:{start:"9"}},[a("li",[e._v("Deploy your Entando Application using the "),a("a",{attrs:{href:"#deploy-your-entando-application"}},[e._v("instructions above")]),e._v(". The server instances will automatically use the clustered storage.")])])],1)}),[],!1,null,null,null);t.default=o.exports}}]);