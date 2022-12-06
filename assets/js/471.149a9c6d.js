(window.webpackJsonp=window.webpackJsonp||[]).push([[471],{1447:function(e,t,o){"use strict";o.r(t);var n=o(32),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"role-based-access-controls"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#role-based-access-controls"}},[e._v("#")]),e._v(" Role Based Access Controls")]),e._v(" "),o("h2",{attrs:{id:"overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),o("p",[e._v("This tutorial guides you through adding access controls to your existing Entando project. Security experts recommend following a practice known as "),o("code",[e._v("Defense in Depth")]),e._v(" where security controls are placed in each layer of an architecture. This tutorial will help you setup such controls in both the frontend and backend of your Entando application.")]),e._v(" "),o("p",[e._v("For the purpose of this tutorial we'll use the simple Conference application from "),o("RouterLink",{attrs:{to:"/v6.3/tutorials/backend-developers/generate-microservices-and-micro-frontends.html"}},[e._v("this tutorial")]),e._v(" as a starting point. Please work through that tutorial if you have not already.")],1),e._v(" "),o("p",[e._v("The basic security setup for a blueprint-generated application allows any authenticated user to access the functionality contained in the MFEs and/or microservices. Our business requirement for this tutorial is to define two kinds of users in our application - "),o("code",[e._v("Conference Users")]),e._v(" who can view the Conferences in the tableWidget, and "),o("code",[e._v("Conference Admins")]),e._v(" who can view and also delete Conferences from the tableWidget.")]),e._v(" "),o("h2",{attrs:{id:"tutorial"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#tutorial"}},[e._v("#")]),e._v(" Tutorial")]),e._v(" "),o("p",[e._v("Let's start by securing the list of Conferences so only our two user roles can view the list.")]),e._v(" "),o("ol",[o("li",[e._v("Edit "),o("code",[e._v("ConferenceResource.java")]),e._v(" located in the "),o("code",[e._v("src/main/java/com/<ORG>/<NAME>.web.rest")]),e._v(" directory. Modify the REST API "),o("code",[e._v("Conference:getAllConferences")]),e._v(" method by adding the following annotation.")])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("    @PreAuthorize(\"hasAnyAuthority('conference-user','conference-admin')\")\n    public List<Conference> getAllConferences() {\n")])])]),o("p",[e._v("See the "),o("a",{attrs:{href:"https://spring.io/projects/spring-security",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spring Security documentation"),o("OutboundLink")],1),e._v(" for more details but this restricts use of the "),o("code",[e._v("getConference")]),e._v(" method to users who have been assigned either the "),o("code",[e._v("conference-user")]),e._v(" or the "),o("code",[e._v("conference-admin")]),e._v(" role on the Keycloak client configured for the microservice. In local testing this defaults to the "),o("code",[e._v("internal")]),e._v(" client but see notes below on how that works in production.")]),e._v(" "),o("p",[e._v("Now we should verify this security check is working.")]),e._v(" "),o("ol",{attrs:{start:"2"}},[o("li",[e._v("Start up your Keycloak, tableWidget MFE, and microservice. See "),o("RouterLink",{attrs:{to:"/v6.3/tutorials/backend-developers/run-local.html"}},[e._v("these instructions")]),e._v(" if you need a refresher but these are the basic commands using the ent CLI and Docker for keycloak.")],1)]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("ent prj ext-keycloak start\nent prj be-test-run\n")])])]),o("p",[e._v("Using a separate cmdline:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("ent prj fe-test-run\n")])])]),o("ol",{attrs:{start:"3"}},[o("li",[e._v("Access the tableWidget MFE, typically on "),o("a",{attrs:{href:"http://localhost:3000",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:3000"),o("OutboundLink")],1),e._v(", using the default admin/admin account.")])]),e._v(" "),o("p",[e._v('Once authenticated, you\'ll get the message "No conferences are available" and, if you check your browser console, you should see a '),o("code",[e._v("403 (Forbidden)")]),e._v(" error for the request made to "),o("code",[e._v("localhost:8080/services/conference/api/conferences")]),e._v(". This is expected because we have not yet granted the new role to the admin user.")]),e._v(" "),o("p",[e._v("Now let's give the admin user the correct role.")]),e._v(" "),o("ol",{attrs:{start:"4"}},[o("li",[e._v("Login to keycloak on "),o("a",{attrs:{href:"http://localhost:9080",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:9080"),o("OutboundLink")],1),e._v(" using the "),o("code",[e._v("admin/admin")]),e._v(" credentials.")])]),e._v(" "),o("p",[e._v("First we need to create the two roles per our requirements. We're going to add the roles to the "),o("code",[e._v("internal")]),e._v(" client because it's the one configured by default in the Spring Boot application.yml.")]),e._v(" "),o("ol",{attrs:{start:"5"}},[o("li",[e._v("Go to "),o("code",[e._v("Clients → internal → Roles")]),e._v(" and click "),o("code",[e._v("Add Role")])]),e._v(" "),o("li",[e._v("Fill in the "),o("code",[e._v("Role Name")]),e._v(" with "),o("code",[e._v("conference-admin")]),e._v(" and click "),o("code",[e._v("Save")])]),e._v(" "),o("li",[e._v("Repeat steps 5-6 to create the "),o("code",[e._v("conference-user")]),e._v(" role.")])]),e._v(" "),o("p",[e._v("Now we need to map this role to our user.")]),e._v(" "),o("ol",{attrs:{start:"8"}},[o("li",[e._v("Go to "),o("code",[e._v("Users → View all users → admin → Role Mappings")])]),e._v(" "),o("li",[e._v("Select "),o("code",[e._v("internal")]),e._v(" for the "),o("code",[e._v("Client Roles")]),e._v(" and then move "),o("code",[e._v("conference-user")]),e._v(" from "),o("code",[e._v("Available Roles")]),e._v(" to "),o("code",[e._v("Assigned Roles")])]),e._v(" "),o("li",[e._v("Go back to the MFE and you should now see the full list of Conferences.")])]),e._v(" "),o("p",[e._v("We've now successfully secured the "),o("code",[e._v("getAllConferences")]),e._v(" API but we have more to do. The admin user was granted just the "),o("code",[e._v("conference-user")]),e._v(" role but still has access to delete Conferences. We need to lock that down.")]),e._v(" "),o("ol",{attrs:{start:"11"}},[o("li",[e._v("Go back into the "),o("code",[e._v("ConferenceResource.java")]),e._v(" file and add this annotation to the "),o("code",[e._v("deleteConference")]),e._v(" method:")])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("    @PreAuthorize(\"hasAuthority('conference-admin')\")\n    public ResponseEntity<Void> deleteConference(@PathVariable Long id) {\n")])])]),o("p",[e._v("Here we're restricting the delete method to only the "),o("code",[e._v("conference-admin")]),e._v(" role.")]),e._v(" "),o("ol",{attrs:{start:"12"}},[o("li",[e._v("Restart the microservice. By default this will include rebuilding any changed source files.")]),e._v(" "),o("li",[e._v("Once the microservice is available, go back to the MFE and try deleting one of the Conferences in the list. You should be able to attempt the delete in the UI but you'll get a 403 error in the browser console and an error like this in the service logs:")])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("2021-03-22 15:56:16.205  WARN 3208 --- [  XNIO-1 task-3] o.z.problem.spring.common.AdviceTraits   : Forbidden: Access is denied\n")])])]),o("p",[e._v("That's exactly what we wanted! This demonstrates that a user without "),o("code",[e._v("conference-admin")]),e._v(" is unable to call the delete API.")]),e._v(" "),o("p",[e._v("Next, let's update the MFE so a user without the "),o("code",[e._v("conference-admin")]),e._v(" authority cannot even see the delete button in the UI.")]),e._v(" "),o("ol",{attrs:{start:"14"}},[o("li",[e._v("Edit the "),o("code",[e._v("ConferenceTableContainer.js")]),e._v(" under "),o("code",[e._v("ui/widgets/conference/tableWidget/src/components")]),e._v(". Replace the onDelete logic with an additional check on the user's authorities.")])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('    const isAdmin = (keycloak && keycloak.authenticate) ? keycloak.hasResourceRole("conference-admin", "internal"): false;\n    const showDelete = onDelete && isAdmin;\n\n    const Actions = ({ item }) =>\n      showDelete ? (\n')])])]),o("p",[e._v("The key logic there is the hasResourceRole call which checks whether the "),o("code",[e._v("internal")]),e._v(" client role "),o("code",[e._v("conference-admin")]),e._v(" was mapped to the current user.")]),e._v(" "),o("ol",{attrs:{start:"15"}},[o("li",[e._v("View the MFE (whch should have automatically reloaded) and you should see that the delete icon is no longer visible, matching the admin's current permissions.  We've now verified that a user with just "),o("code",[e._v("conference-user")]),e._v(" can neither see the delete action in the UI nor call its corresponding API.")])]),e._v(" "),o("p",[e._v("Next, let's promote the admin user to a full "),o("code",[e._v("conference-admin")]),e._v(" so they can delete Conferences.")]),e._v(" "),o("ol",{attrs:{start:"16"}},[o("li",[o("p",[e._v("Go back into Keycloak at "),o("a",{attrs:{href:"http://localhost:9080",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:9080"),o("OutboundLink")],1),e._v(", then go to "),o("code",[e._v("Users → View all users → admin → Role Mappings")]),e._v(", and also give the user the "),o("code",[e._v("conference-admin")]),e._v(" role.")])]),e._v(" "),o("li",[o("p",[e._v("Reload the MFE. The delete icons should now be visible and you should be able to successfully delete a Conference from the list. This satisfies our original business requirement.")])])]),e._v(" "),o("h2",{attrs:{id:"notes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[e._v("#")]),e._v(" Notes")]),e._v(" "),o("h3",{attrs:{id:"realm-roles-versus-client-authorities"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#realm-roles-versus-client-authorities"}},[e._v("#")]),e._v(" Realm Roles versus Client Authorities")]),e._v(" "),o("p",[e._v("This tutorial made use of authorities which in Keycloak are Roles mapped to a User for a specific Client. You could also make use of higher-level Realm Roles assigned directly to users, e.g. "),o("code",[e._v("ROLE_ADMIN")]),e._v(". That will work but can result in collisions between applications if they happen to use the same roles.")]),e._v(" "),o("p",[e._v("If you choose to use Realm-assigned roles then the code above would need to change. In the backend, use the following annotations: "),o("code",[e._v("@Secured('ROLE_ADMIN)")]),e._v(" or "),o("code",[e._v("@PreAuthorize(hasRole('ROLE_ADMIN'))")]),e._v(". In the frontend, use "),o("code",[e._v("keycloak.hasRealmRole")]),e._v(" instead of "),o("code",[e._v("keycloak.hasResourceRole")]),e._v(". See the "),o("a",{attrs:{href:"https://www.baeldung.com/spring-security-check-user-role",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spring Security page"),o("OutboundLink")],1),e._v(" for more examples.")]),e._v(" "),o("h3",{attrs:{id:"local-versus-kubernetes-testing"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#local-versus-kubernetes-testing"}},[e._v("#")]),e._v(" Local versus Kubernetes Testing")]),e._v(" "),o("p",[e._v("This tutorial also makes use of the "),o("code",[e._v("internal")]),e._v(" client configured in the microservice via the application.yml with roles manually created and assigned in Keycloak. In Kubernetes, Entando will automatically create client roles per the bundle plugin definition (see the plugin definition "),o("RouterLink",{attrs:{to:"/v6.3/docs/ecr/ecr-bundle-details.html"}},[e._v("here")]),e._v(" for more information). Those roles will be created for the client specific to the microservice itself, e.g. "),o("code",[e._v("<docker username>-conference-server")]),e._v(". This client name will be injected as an environment variable into the plugin container itself so the annotations noted above will work both in local and Kubernetes environments.")],1),e._v(" "),o("p",[e._v("The MFE authorization checks in the tutorial explicitly note the client id,  e.g. "),o("code",[e._v("internal")]),e._v(", which won't work in Kubernetes. There are a couple options here:")]),e._v(" "),o("ol",[o("li",[e._v("Change the application.yml clientId under "),o("code",[e._v("security.oauth2.client.registration.oidc")]),e._v(" to match the Kubernetes clientId. That's the most secure and allows the MFE checks to work the same in both local and Kubernetes environments. However, you not be be able to use the same clientId depending on how the microservice is deployed")]),e._v(" "),o("li",[e._v("An alternative is to broaden the MFE authorization check to look for a named role on any client. This could result in overlap with other clients but with appropriately named roles (e.g. prefixed by feature, e.g. "),o("code",[e._v("conference-admin")]),e._v(") this could be the most flexible option. This can be provided via a helper function, e.g. in "),o("code",[e._v("api/helpers.js")]),e._v(":")])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("//Check if the authenticated user has the clientRole for any keycloak clients\nexport const hasKeycloakClientRole = clientRole => {\n  if (getKeycloakToken()) {\n    const { resourceAccess } = window.entando.keycloak;\n    if (resourceAccess) {\n      for (const client in resourceAccess) {\n        // eslint-disable-line no-unused-vars\n        const roles = resourceAccess[client].roles;\n        if (roles && roles.includes(clientRole)) {\n          return true;\n        }\n      }\n    }\n  }\n  return false;\n};\n")])])]),o("p",[e._v("This would result in a simpler role check:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("    const isAdmin = hasKeycloakClientRole('conference-admin');\n")])])]),o("h3",{attrs:{id:"debugging"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#debugging"}},[e._v("#")]),e._v(" Debugging")]),e._v(" "),o("p",[e._v("In both local and Kubernetes environments, the default blueprint javascript will make a global variable available in the browser, e.g. "),o("code",[e._v("window.entando.keycloak")]),e._v(". Examining this variable can help diagnose issues with assigned roles and authorities. In some cases you may need to logout of Entando and re-authenticate in order to get the latest role assignments.")])])}),[],!1,null,null,null);t.default=a.exports}}]);