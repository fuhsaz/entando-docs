(window.webpackJsonp=window.webpackJsonp||[]).push([[359],{1277:function(e,t,a){"use strict";a.r(t);var o=a(32),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"entando-6-2-0-release-notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entando-6-2-0-release-notes"}},[e._v("#")]),e._v(" Entando 6.2.0 Release Notes")]),e._v(" "),a("h2",{attrs:{id:"new-features-and-major-fixes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-features-and-major-fixes"}},[e._v("#")]),e._v(" New Features and Major Fixes")]),e._v(" "),a("h3",{attrs:{id:"infrastructure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#infrastructure"}},[e._v("#")]),e._v(" Infrastructure")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Initial support for deployment on Google GKE, Azure AKS, and Amazon EKS.")])]),e._v(" "),a("li",[a("p",[e._v("k3s 1.8.X is now the official choice for developer installations")])]),e._v(" "),a("li",[a("p",[e._v("The only fully supported and tested production database is PostgreSQL at the moment")])]),e._v(" "),a("li",[a("p",[e._v("Entando now fully relies on Keycloak for identity management. The previous native authentication is no longer supported.")])])]),e._v(" "),a("h3",{attrs:{id:"security"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#security"}},[e._v("#")]),e._v(" Security")]),e._v(" "),a("ul",[a("li",[e._v("Fixed CSRF vulnerability discovered in 6.1")])]),e._v(" "),a("h3",{attrs:{id:"quickstart"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quickstart"}},[e._v("#")]),e._v(" Quickstart:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Support for embedded databases (derby)")])]),e._v(" "),a("li",[a("p",[e._v("Now capable to reuse existing external databases created by a previous installation")])]),e._v(" "),a("li",[a("p",[e._v("Reduced the memory footprint and improved the startup times")])]),e._v(" "),a("li",[a("p",[e._v("Documented "),a("RouterLink",{attrs:{to:"/v6.2/tutorials/devops/local-tips-and-tricks.html#hyper-v-ip-changes"}},[e._v("two workarounds")]),e._v(" for the IP change issue, e.g. an Entando quickstart installation fails to restart when the IP of the VM changes. A more structured solution will come with the next release.")],1)])]),e._v(" "),a("h3",{attrs:{id:"entando-component-repository-ecr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entando-component-repository-ecr"}},[e._v("#")]),e._v(" Entando Component Repository (ECR)")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("ECR now relies only on GIT repositories for the distribution of bundles")])]),e._v(" "),a("li",[a("p",[e._v("Enabled support for bundles with multiple versions")])]),e._v(" "),a("li",[a("p",[e._v("Reliability improvements in the installation/uninstallation process, e.g. ability to install/uninstall a specific bundle version")])]),e._v(" "),a("li",[a("p",[e._v("Fixes and improvements to the web interface")])]),e._v(" "),a("li",[a("p",[e._v("Updated documentation, e.g. common use cases, uninstall flow, CRDs, ingresses and a troubleshooting guide")])]),e._v(" "),a("li",[a("p",[e._v("Temporarily disabled support for Pages in bundles (introduced with 6.1) due to problems during uninstallation")])]),e._v(" "),a("li",[a("p",[e._v("Added full support for composite CMS attributes")])])]),e._v(" "),a("h3",{attrs:{id:"entando-app-builder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entando-app-builder"}},[e._v("#")]),e._v(" Entando App Builder")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Fixed the role-based UX so the UI properly accounts for the current user role.")])]),e._v(" "),a("li",[a("p",[e._v("UX improvements and nomenclature updates")])]),e._v(" "),a("li",[a("p",[e._v("Reliability improvements and rationalization in several areas, e.g. user management, page design, content management, asset management, error messaging")])]),e._v(" "),a("li",[a("p",[e._v("Essential plugins are now part of the base distribution, e.g. SEO, Content Versioning, Content Workflow, Content Scheduler, email.")])]),e._v(" "),a("li",[a("p",[e._v("A new React-based UX was implemented for SEO and Content Versioning")])]),e._v(" "),a("li",[a("p",[e._v("Included a set of additional default widgets, content types, content templates, and page templates")])])]),e._v(" "),a("h3",{attrs:{id:"entando-component-generator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entando-component-generator"}},[e._v("#")]),e._v(" Entando Component Generator")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Improved Microsoft Windows Support (specifically Windows 10 Professional)")])]),e._v(" "),a("li",[a("p",[e._v("Support for the Italian Locale")])]),e._v(" "),a("li",[a("p",[e._v("Added ability to skip MFE generation")])]),e._v(" "),a("li",[a("p",[e._v("Completed support for all possible field types of an entity")])]),e._v(" "),a("li",[a("p",[e._v("Added support for entity deletion")])]),e._v(" "),a("li",[a("p",[e._v("Added support for missing attribute types")])]),e._v(" "),a("li",[a("p",[e._v("Fixed support for complex attribute configurations")])]),e._v(" "),a("li",[a("p",[e._v("Several fixes in code generation and build")])])]),e._v(" "),a("h2",{attrs:{id:"key-open-issues"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key-open-issues"}},[e._v("#")]),e._v(" Key Open Issues")]),e._v(" "),a("h3",{attrs:{id:"keycloak-rce"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keycloak-rce"}},[e._v("#")]),e._v(" Keycloak RCE")]),e._v(" "),a("ul",[a("li",[e._v("The keycloak version used by Entando has a security vulnerability - "),a("a",{attrs:{href:"https://github.com/keycloak/keycloak/pull/7138",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/keycloak/keycloak/pull/7138"),a("OutboundLink")],1),e._v(". This issue has been fixed in the latest version of keycloak and will be included in the next version of Entando. This vulnerability can only be exploited if you have a way to obtain a valid token, e.g. via a valid username/password.")])]),e._v(" "),a("h2",{attrs:{id:"other-open-issues"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-open-issues"}},[e._v("#")]),e._v(" Other Open Issues")]),e._v(" "),a("p",[a("strong",[e._v("General")])]),e._v(" "),a("ul",[a("li",[e._v("Support for older versions of Oracle is not yet complete")]),e._v(" "),a("li",[a("code",[e._v("Documentation")]),e._v(" and "),a("code",[e._v("Tutorials")]),e._v(" have been updated to reflect 6.2 but some work remains")])]),e._v(" "),a("p",[a("strong",[e._v("Entando App Builder")])]),e._v(" "),a("ul",[a("li",[e._v("There are a few visual issues with the redesigned UX/UI")]),e._v(" "),a("li",[e._v("The user is unable to set their personal profile data from the "),a("code",[e._v("My profile")]),e._v(" screen")]),e._v(" "),a("li",[e._v("In "),a("code",[e._v("Content - Assets")]),e._v(", deleting a duplicate image results in the removal of the original image")]),e._v(" "),a("li",[e._v("In "),a("code",[e._v("Content - Management")]),e._v(", some built-in content types will not function correctly if "),a("code",[e._v("Content Template = Default")]),e._v(". Users will need to explicitly select the Content Template.")])]),e._v(" "),a("p",[a("strong",[e._v("Entando Component Generator")])]),e._v(" "),a("ul",[a("li",[e._v("Lack of support for generation of microservices with no backend")]),e._v(" "),a("li",[e._v("Support of old versions of Oracle not complete yet")])]),e._v(" "),a("h2",{attrs:{id:"previous-releases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#previous-releases"}},[e._v("#")]),e._v(" Previous Releases")]),e._v(" "),a("p",[e._v("Please see the "),a("code",[e._v("Versions")]),e._v(" list in the main navigation menu above to access documentation and release notes for previous versions of Entando.")])])}),[],!1,null,null,null);t.default=n.exports}}]);