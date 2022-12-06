(window.webpackJsonp=window.webpackJsonp||[]).push([[289],{1167:function(e,t,a){"use strict";a.r(t);var s=a(32),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"installation-on-amazon-elastic-kubernetes-service-eks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-on-amazon-elastic-kubernetes-service-eks"}},[e._v("#")]),e._v(" Installation on Amazon Elastic Kubernetes Service (EKS)")]),e._v(" "),a("p",[e._v("This tutorial walks you through installing the Entando Platform in an EKS cluster. The steps are:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#configure-an-identity-and-access-management-iam-role"}},[e._v("Configure an IAM Role")]),e._v(" to allow Kubernetes to manage the cluster")]),e._v(" "),a("li",[a("a",{attrs:{href:"#create-the-eks-cluster"}},[e._v("Create the EKS cluster")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#install-the-nginx-ingress-controller"}},[e._v("Install NGINX")]),e._v(" as an ingress controller")]),e._v(" "),a("li",[a("a",{attrs:{href:"#install-the-entando-custom-resources"}},[e._v("Install the Entando Custom Resources")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#configure-the-entando-application"}},[e._v("Configure the Entando Application")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#deploy-your-entando-application"}},[e._v("Deploy the Entando Application")])])]),e._v(" "),a("p",[e._v("If you're already comfortable setting up an EKS cluster and installing NGINX, then you may be able to skip to "),a("a",{attrs:{href:"#install-the-entando-custom-resources"}},[e._v("setting up Entando")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.aws.amazon.com/cli/",target:"_blank",rel:"noopener noreferrer"}},[e._v("AWS CLI"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("AWS account")]),e._v(" "),a("li",[e._v("kubectl")])]),e._v(" "),a("h2",{attrs:{id:"create-and-connect-the-eks-cluster"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-and-connect-the-eks-cluster"}},[e._v("#")]),e._v(" Create and Connect the EKS Cluster")]),e._v(" "),a("p",[e._v("These steps use the AWS console to create the cluster. Experienced AWS users may choose to use the equivalent CLI commands.")]),e._v(" "),a("h3",{attrs:{id:"configure-an-identity-and-access-management-iam-role"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-an-identity-and-access-management-iam-role"}},[e._v("#")]),e._v(" Configure an Identity and Access Management (IAM) Role")]),e._v(" "),a("ol",[a("li",[a("p",[a("a",{attrs:{href:"http://console.aws.amazon.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Login to AWS"),a("OutboundLink")],1),e._v(" as a non-"),a("code",[e._v("super admin")]),e._v(" user")]),e._v(" "),a("ul",[a("li",[e._v("It is not recommended to use a "),a("code",[e._v("super admin")]),e._v(" account since clusters created that way may have restrictions that complicate your installation.")]),e._v(" "),a("li",[e._v("The user account needs access to EKS and the minimum permissions to create a cluster. You may need additional policies for Amazon Route 53 or other services, depending on your configuration.")])])]),e._v(" "),a("li",[a("p",[e._v("Create an IAM role for the cluster so that AWS can provision assets")]),e._v(" "),a("ol",[a("li",[e._v("From Services, "),a("code",[e._v("IAM")]),e._v(" → "),a("code",[e._v("Create Role")])]),e._v(" "),a("li",[e._v("Select "),a("code",[e._v("AWS Service")]),e._v(" for the type of trusted entity")]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("EKS")]),e._v(" from the "),a("code",[e._v("Use cases")])]),e._v(" "),a("li",[e._v("Check "),a("code",[e._v("EKS - Cluster")])]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("Next")])]),e._v(" "),a("li",[e._v("Verify that the "),a("code",[e._v("AmazonEKSClusterPolicy")]),e._v(" is set")]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("Next")])]),e._v(" "),a("li",[e._v("Name your role (you’ll need this later), e.g. YOUR-EKS-ROLE")]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("Create role")])])])]),e._v(" "),a("li",[a("p",[e._v("Refine the role to enable "),a("code",[e._v("Node Group")]),e._v(" management and add Elastic Load Balancing (ELB) access so the cluster can deploy the load balancer for NGINX")]),e._v(" "),a("ol",[a("li",[e._v("Go to "),a("code",[e._v("IAM")]),e._v(" → "),a("code",[e._v("Roles")]),e._v(" → "),a("code",[e._v("YOUR-EKS-ROLE")])]),e._v(" "),a("li",[e._v("Under "),a("code",[e._v("Add permissions")]),e._v(", click "),a("code",[e._v("Attach policies")])]),e._v(" "),a("li",[e._v("Find each of these named policies and then click "),a("code",[e._v("Attach policies")]),e._v(" "),a("br"),e._v(" "),a("code",[e._v("AmazonEKSWorkerNodePolicy")]),e._v(" "),a("br"),e._v(" "),a("code",[e._v("AmazonEKS_CNI_Policy")]),e._v(" "),a("br"),e._v(" "),a("code",[e._v("AmazonEC2ContainerRegistryReadOnly")]),e._v(" "),a("br"),e._v(" "),a("code",[e._v("ElasticLoadBalancingFullAccess")])]),e._v(" "),a("li",[e._v("Go to "),a("code",[e._v("Trust Relationships")]),e._v(" → "),a("code",[e._v("Edit trust policy")]),e._v(" → "),a("code",[e._v("Add new statement")]),e._v(". Add "),a("code",[e._v("ec2.amazonaws.com")]),e._v(" so the cluster can manage the EC2 resources.")])])])]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[e._v("   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v('"Sid"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Statement1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v('"Effect"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Allow"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v('"Principal"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v('"Service"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"ec2.amazonaws.com"')]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v('"Action"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"sts:AssumeRole"')]),e._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("Go to "),a("a",{attrs:{href:"https://docs.aws.amazon.com/eks/latest/userguide/security-iam.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Identity Management and Access on EKS"),a("OutboundLink")],1),e._v(" for more details on roles.")]),e._v(" "),a("h3",{attrs:{id:"create-the-eks-cluster"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-the-eks-cluster"}},[e._v("#")]),e._v(" Create the EKS Cluster")]),e._v(" "),a("ol",[a("li",[e._v("Go to "),a("code",[e._v("Services")]),e._v(" and select "),a("code",[e._v("Elastic Kubernetes Service")])]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("Add cluster")]),e._v(" → "),a("code",[e._v("Create")])]),e._v(" "),a("li",[e._v("Add a cluster name, e.g. YOUR-CLUSTER-1")]),e._v(" "),a("li",[e._v("Select an "),a("a",{attrs:{href:"https://www.entando.com/page/en/compatibility-guide",target:"_blank",rel:"noopener noreferrer"}},[e._v("Entando-compatible Kubernetes version"),a("OutboundLink")],1),e._v(", e.g. "),a("code",[e._v("1.22")])]),e._v(" "),a("li",[e._v("For "),a("code",[e._v("Cluster Service Role")]),e._v(", select the role you created above, e.g. YOUR-EKS-ROLE")]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("Next")])]),e._v(" "),a("li",[e._v("Use the defaults for "),a("code",[e._v("Networking")]),e._v(" (Step 2) and click "),a("code",[e._v("Next")])]),e._v(" "),a("li",[e._v("Use the defaults for "),a("code",[e._v("Configure Logging")]),e._v(" (Step 3) and click "),a("code",[e._v("Next")])]),e._v(" "),a("li",[e._v("Review your settings and then click "),a("code",[e._v("Create")]),e._v(". Cluster provisioning may take several minutes.")])]),e._v(" "),a("p",[e._v("See "),a("a",{attrs:{href:"https://docs.aws.amazon.com/eks/latest/userguide/create-cluster.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Creating an Amazon EKS Cluster"),a("OutboundLink")],1),e._v(" for more detailed information.")]),e._v(" "),a("h3",{attrs:{id:"add-a-node-group-to-the-cluster"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-a-node-group-to-the-cluster"}},[e._v("#")]),e._v(" Add a Node Group to the Cluster")]),e._v(" "),a("ol",[a("li",[e._v("Go to "),a("code",[e._v("Services")]),e._v(" → "),a("code",[e._v("Elastic Kubernetes Service")]),e._v(" → "),a("code",[e._v("Clusters")]),e._v(" and select YOUR-CLUSTER-NAME")]),e._v(" "),a("li",[e._v("Go to "),a("code",[e._v("Compute")])]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("Add Node Group")]),e._v(" and supply the following fields\n"),a("ul",[a("li",[a("code",[e._v("Name")]),e._v(": Give your group a name, e.g. YOUR-NODE-1")]),e._v(" "),a("li",[a("code",[e._v("Node IAM Role")]),e._v(": Select the cluster role you created above. If the role doesn't appear, verify that you modified the trust policy as noted above.")]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("Next")])])])]),e._v(" "),a("li",[e._v("Review the "),a("code",[e._v("Node Group compute configuration")]),e._v(". These AWS defaults will work fine:\n"),a("ul",[a("li",[e._v("AMI type: "),a("code",[e._v("Amazon Linux 2")])]),e._v(" "),a("li",[e._v("Instance type: "),a("code",[e._v("t3.medium")])])])]),e._v(" "),a("li",[e._v("Set the "),a("code",[e._v("Maximum size")]),e._v(" to "),a("code",[e._v("5")]),e._v(". This is over-resourced for a Getting Started instance but offers capacity for adding microservices to your cluster without modifying the Node Group.\n"),a("ul",[a("li",[e._v("Click "),a("code",[e._v("Next")])])])]),e._v(" "),a("li",[e._v("For "),a("code",[e._v("Node Group network configuration")]),e._v(", the subnets should already be set up and selected")]),e._v(" "),a("li",[e._v("Select "),a("code",[e._v("Configure SSH access to nodes")]),e._v(". Follow the links to create a new SSH key pair if you don't already have one.")]),e._v(" "),a("li",[e._v("Select "),a("code",[e._v("All")]),e._v(" to allow all source IPs")]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("Next")])]),e._v(" "),a("li",[e._v("Review your settings and then click "),a("code",[e._v("Create")]),e._v(". It may take a few minutes for the Node Group to be created.")])]),e._v(" "),a("h3",{attrs:{id:"connect-to-the-cluster"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connect-to-the-cluster"}},[e._v("#")]),e._v(" Connect to the Cluster")]),e._v(" "),a("ol",[a("li",[a("em",[e._v("Note:")]),e._v(" If this is a brand new setup, you will need to configure the AWS CLI using the user account from the steps above. You'll need to provide your Access Key ID, Secret Key, and Region.")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("aws configure\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Set up your Kubernetes context")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("aws eks --region REGION-CODE update-kubeconfig --name YOUR-CLUSTER-1\n")])])]),a("p",[e._v("For example: "),a("code",[e._v("aws eks --region us-east-2 update-kubeconfig --name cluster-1")]),e._v(". More details and troubleshooting can be found here. "),a("a",{attrs:{href:"https://docs.aws.amazon.com/eks/latest/userguide/create-kubeconfig.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.aws.amazon.com/eks/latest/userguide/create-kubeconfig.html"),a("OutboundLink")],1)]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[e._v("Your current context should now be configured for your AWS cluster. Run the command below to check.")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("kubectl config current-context\n")])])]),a("p",[e._v("Your output should look something like this: "),a("code",[e._v("arn:aws:eks:us-east-2:483173223614:cluster/cluster-1")])]),e._v(" "),a("h3",{attrs:{id:"install-the-nginx-ingress-controller"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-the-nginx-ingress-controller"}},[e._v("#")]),e._v(" Install the NGINX Ingress Controller")]),e._v(" "),a("p",[e._v("Add the NGINX controller for the ingress. This step relies on your role having permissions for Elastic Load Balancing (ELB).")]),e._v(" "),a("ol",[a("li",[e._v("Create the NGINX ingress controller")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.3.0/deploy/static/provider/aws/deploy.yaml\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Get the ELB external URL for your NGINX install")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("kubectl get services -n ingress-nginx\n")])])]),a("p",[e._v("For example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("NAME                                 TYPE           CLUSTER-IP       EXTERNAL-IP                        \ningress-nginx-controller             LoadBalancer   10.100.102.83    ad234bd11a1ff4dadb44639a6bbf707e-0e0a483d966405ee.elb.us-east-2.amazonaws.com\n")])])]),a("p",[e._v("The value of the external URL (EXTERNAL-IP) should be available within a few minutes. You'll use this address for YOUR-HOST-NAME in the steps below.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("NGINX is working correctly if a "),a("code",[e._v("404 Not Found")]),e._v(" NGINX error page is generated when accessing "),a("code",[e._v("http://YOUR-HOST-NAME")]),e._v(" from your browser. For a more complete test, you can "),a("RouterLink",{attrs:{to:"/next/tutorials/devops/manage-nginx.html#verify-the-nginx-ingress-install"}},[e._v("set up a simple test application")]),e._v(" using your local "),a("code",[e._v("kubectl")]),e._v(". You can also "),a("RouterLink",{attrs:{to:"/next/tutorials/devops/manage-nginx.html#customize-the-nginx-configuration"}},[e._v("customize the NGINX ingress")]),e._v(" to optimize the configuration for Entando.")],1)]),e._v(" "),a("p",[e._v("See the "),a("a",{attrs:{href:"https://kubernetes.github.io/ingress-nginx/deploy/#aws",target:"_blank",rel:"noopener noreferrer"}},[e._v("NGINX AWS Guide"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://docs.nginx.com/nginx/deployment-guides/amazon-web-services/ingress-controller-elastic-kubernetes-services/",target:"_blank",rel:"noopener noreferrer"}},[e._v("NGINX EKS Guide"),a("OutboundLink")],1),e._v(" for more details.")]),e._v(" "),a("h3",{attrs:{id:"install-the-entando-custom-resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-the-entando-custom-resources"}},[e._v("#")]),e._v(" Install the Entando Custom Resources")]),e._v(" "),a("ol",[a("li",[e._v("Apply the cluster-scoped custom resource definitions (CRDs). This is required only once per cluster.")])]),e._v(" "),a("EntandoCode",[e._v("kubectl apply -f https://raw.githubusercontent.com/entando/entando-releases/"+e._s(e.$site.themeConfig.entando.fixpack.v71)+"/dist/ge-1-1-6/namespace-scoped-deployment/cluster-resources.yaml\n")]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Create the namespace for the Entando Application")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("kubectl create namespace entando\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[e._v("Download the "),a("code",[e._v("entando-operator-config")]),e._v(" template so you can configure the "),a("RouterLink",{attrs:{to:"/next/tutorials/devops/entando-operator.html"}},[e._v("Entando Operator")]),e._v(".")],1)]),e._v(" "),a("EntandoCode",[e._v('curl -sLO "https://raw.githubusercontent.com/entando/entando-releases/'+e._s(e.$site.themeConfig.entando.fixpack.v71)+'/dist/ge-1-1-6/samples/entando-operator-config.yaml"')]),e._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[e._v("Edit the "),a("code",[e._v("entando-operator-config.yaml")]),e._v(" to set "),a("code",[e._v('data/entando.requires.filesystem.group.override: "true"')])])]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n   "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("entando.requires.filesystem.group.override")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"true"')]),e._v("\n   "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("entando.ingress.class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"nginx"')]),e._v("\n")])])]),a("ol",{attrs:{start:"5"}},[a("li",[e._v("Apply the "),a("code",[e._v("ConfigMap")])])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("kubectl apply -f entando-operator-config.yaml -n entando\n")])])]),a("ol",{attrs:{start:"6"}},[a("li",[e._v("Apply the namespace-scoped custom resources")])]),e._v(" "),a("EntandoCode",[e._v("kubectl apply -n entando -f https://raw.githubusercontent.com/entando/entando-releases/"+e._s(e.$site.themeConfig.entando.fixpack.v71)+"/dist/ge-1-1-6/namespace-scoped-deployment/namespace-resources.yaml")]),e._v(" "),a("ol",{attrs:{start:"7"}},[a("li",[e._v("You can use "),a("code",[e._v("kubectl get pods -n entando --watch")]),e._v(" to see the initial pods start up. Use "),a("code",[e._v("Ctrl+C")]),e._v(" to exit.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ kubectl get pods -n entando\nNAME                                   READY   STATUS    RESTARTS   AGE\nentando-k8s-service-86f8954d56-mphpr   1/1     Running   0          5m53s\nentando-operator-5b5465788b-ghb25      1/1     Running   0          5m53s\n")])])]),a("h3",{attrs:{id:"configure-the-entando-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-the-entando-application"}},[e._v("#")]),e._v(" Configure the Entando Application")]),e._v(" "),a("ol",[a("li",[e._v("Download the "),a("code",[e._v("entando-app.yaml")]),e._v(" template")])]),e._v(" "),a("EntandoCode",[e._v('curl -sLO "https://raw.githubusercontent.com/entando/entando-releases/'+e._s(e.$site.themeConfig.entando.fixpack.v71)+'/dist/ge-1-1-6/samples/entando-app.yaml"')]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Edit "),a("code",[e._v("entando-app.yaml")]),e._v(" and replace YOUR-HOST-NAME with the NGINX address from above. See the "),a("RouterLink",{attrs:{to:"/next/docs/consume/entandoapp-cr.html"}},[e._v("Custom Resources overview")]),e._v(" for details on other "),a("code",[e._v("EntandoApp")]),e._v(" options.")],1)]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("ingressHostName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" YOUR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("HOST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("NAME\n")])])]),a("h2",{attrs:{id:"deploy-your-entando-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy-your-entando-application"}},[e._v("#")]),e._v(" Deploy your Entando Application")]),e._v(" "),a("ol",[a("li",[e._v("You can now deploy your application to your EKS cluster")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl apply -n entando -f entando-app.yaml\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("It can take around 10 minutes for the application to fully deploy. You can watch the pods warming up with this command:")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("kubectl get pods -n entando --watch\n")])])]),a("p",[e._v("Use "),a("code",[e._v("Ctrl+C")]),e._v(" to exit the command.")]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[e._v("Once all the pods are in a running state, access the Entando App Builder at the following address:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("http://YOUR-HOST-NAME/app-builder/\n")])])]),a("p",[e._v("Congratulations! To continue your journey with Entando, see the "),a("RouterLink",{attrs:{to:"/next/docs/getting-started/#login-to-entando"}},[e._v("Getting Started guide")]),e._v(" for helpful login instructions and next steps.")],1),e._v(" "),a("h2",{attrs:{id:"appendix-a-troubleshooting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#appendix-a-troubleshooting"}},[e._v("#")]),e._v(" Appendix A - Troubleshooting")]),e._v(" "),a("p",[e._v("IAM and Roles")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.aws.amazon.com/eks/latest/userguide/install-aws-iam-authenticator.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Installing aws-iam-authenticator"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://stackoverflow.com/questions/56863539/getting-error-an-error-occurred-accessdenied-when-calling-the-assumerole-oper",target:"_blank",rel:"noopener noreferrer"}},[e._v("AccessDenied error during AssumeRole operation"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("NGINX")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.nginx.com/nginx/deployment-guides/amazon-web-services/ingress-controller-elastic-kubernetes-services/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Using NGINX as the ingress controller on EKS"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("For more details and troubleshooting, see "),a("a",{attrs:{href:"https://docs.aws.amazon.com/eks/latest/userguide/create-kubeconfig.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Create a kubeconfig for Amazon EKS"),a("OutboundLink")],1),e._v(".")])],1)}),[],!1,null,null,null);t.default=n.exports}}]);