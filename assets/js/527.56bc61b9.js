(window.webpackJsonp=window.webpackJsonp||[]).push([[527],{1536:function(e,t,a){"use strict";a.r(t);var o=a(32),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"widgets-and-fragments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#widgets-and-fragments"}},[e._v("#")]),e._v(" Widgets and Fragments")]),e._v(" "),a("p",[e._v("This tutorial covers the basics of how to create an Entando widget and place it on a page. It also reviews the\nbasics of fragments, which are reusable components of a user interface.")]),e._v(" "),a("h2",{attrs:{id:"create-and-publish-a-widget"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-and-publish-a-widget"}},[e._v("#")]),e._v(" Create and Publish a Widget")]),e._v(" "),a("p",[e._v("For this example, you will use the Entando App Builder to build and display a simple widget on a page. You would create and deploy widgets differently in a production system or larger development environment, but this gives a quick introduction to the building blocks.")]),e._v(" "),a("p",[e._v("For a more advanced example, check out how to "),a("a",{attrs:{href:"../create/ms/generate-microservices-and-micro-frontends"}},[e._v("generate microservices and micro frontends")]),e._v(", which includes how to build and deploy a micro frontend as a widget in Entando.")]),e._v(" "),a("h3",{attrs:{id:"create-a-widget"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-widget"}},[e._v("#")]),e._v(" Create a widget")]),e._v(" "),a("ol",[a("li",[e._v("In the left pane of the App Builder, go to "),a("code",[e._v("Components")]),e._v(" → "),a("code",[e._v("MFE & Widgets")])]),e._v(" "),a("li",[e._v("At bottom of the page, click "),a("code",[e._v("Add")])]),e._v(" "),a("li",[e._v("Create a widget with some sample HTML code.  Enter or select the following:\n"),a("ul",[a("li",[e._v("en Title: "),a("code",[e._v("Hello World")])]),e._v(" "),a("li",[e._v("it Title: "),a("code",[e._v("Ciao Mondo")])]),e._v(" "),a("li",[e._v("Code: "),a("code",[e._v("MyHelloWorld")])]),e._v(" "),a("li",[e._v("Group: either "),a("code",[e._v("Administrators")]),e._v(" or "),a("code",[e._v("Free Access")])]),e._v(" "),a("li",[e._v("Icon: upload or select an icon of your choice")]),e._v(" "),a("li",[e._v("Custom UI: "),a("code",[e._v("<h2>Hello World</h2>")])])]),e._v(" "),a("blockquote",[a("p",[e._v("Note: the Custom UI Field is a FreeMarker template where you can enter raw HTML and include FreeMarker logic. This allows you to import JavaScript, CSS or basic HTML.")])])]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("Save")])])]),e._v(" "),a("h3",{attrs:{id:"place-the-widget-on-a-page"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#place-the-widget-on-a-page"}},[e._v("#")]),e._v(" Place the widget on a page")]),e._v(" "),a("ol",[a("li",[e._v("From the left pane of the App Builder, go to "),a("code",[e._v("Pages")]),e._v(" → "),a("code",[e._v("Settings")])]),e._v(" "),a("li",[e._v('Select a page, e.g. "Home / Service" from the “Home Page” dropdown menu')]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("Save")])]),e._v(" "),a("li",[e._v("From the left pane of the App Builder, go to "),a("code",[e._v("Pages")]),e._v(" →  "),a("code",[e._v("Management")])]),e._v(" "),a("li",[e._v('On the row with the folder named for your page (e.g. "Service"), click on the Actions icon and select "Design"')]),e._v(" "),a("li",[e._v("From the Widgets tab in the right pane, drag and drop your new widget into an open frame on the page")]),e._v(" "),a("li",[e._v("At the top of the middle pane, click "),a("code",[e._v("Preview")])]),e._v(" "),a("li",[e._v('Confirm that your page displays "Hello World"')])]),e._v(" "),a("h3",{attrs:{id:"publish-the-updated-page"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#publish-the-updated-page"}},[e._v("#")]),e._v(" Publish the updated page")]),e._v(" "),a("ol",[a("li",[e._v('Navigate back to "Design" for your page')]),e._v(" "),a("li",[e._v("At the bottom of the middle pane, click "),a("code",[e._v("Publish")]),e._v(". Note that the Status icon for your page, represented by a colored dot, has changed from yellow to green.")])]),e._v(" "),a("h2",{attrs:{id:"create-and-update-a-ux-fragment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-and-update-a-ux-fragment"}},[e._v("#")]),e._v(" Create and Update a UX Fragment")]),e._v(" "),a("p",[e._v("A UX fragment is a way to reuse snippets of frontend code across multiple pages or widgets. Common elements such as basic HTML, JavaScript or FreeMarker logic can be stored as fragments and referenced via the "),a("code",[e._v("<@wp.fragment …")]),e._v(" tag.")]),e._v(" "),a("p",[e._v("To create and update a basic UX fragment per the steps below, first "),a("a",{attrs:{href:"#create-and-publish-a-widget"}},[e._v("create and publish a widget")]),e._v(" as the basis for this exercise.")]),e._v(" "),a("h3",{attrs:{id:"create-a-new-fragment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-new-fragment"}},[e._v("#")]),e._v(" Create a new fragment")]),e._v(" "),a("ol",[a("li",[e._v("In the left pane of the App Builder, go to "),a("code",[e._v("Components")]),e._v(" → "),a("code",[e._v("UX Fragments")])]),e._v(" "),a("li",[e._v("At bottom of the page, click "),a("code",[e._v("Add")])]),e._v(" "),a("li",[e._v("Enter the following field information:\n"),a("ul",[a("li",[e._v("Code: "),a("code",[e._v("test")])]),e._v(" "),a("li",[e._v("Gui Code: "),a("code",[e._v("<h2>Hello World</h2>")])])])]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("Save")])])]),e._v(" "),a("h3",{attrs:{id:"identify-the-widget-s-page-template"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#identify-the-widget-s-page-template"}},[e._v("#")]),e._v(" Identify the widget's page template")]),e._v(" "),a("ol",[a("li",[e._v("From the left pane of the App Builder, go to "),a("code",[e._v("Pages")]),e._v(" →  "),a("code",[e._v("Management")])]),e._v(" "),a("li",[e._v('On the row with the folder named for your page (e.g. "Service"), click on the Actions icon and select "Details"')]),e._v(" "),a("li",[e._v("Click on the "),a("code",[e._v("Info")]),e._v(" button to expand the page information")]),e._v(" "),a("li",[e._v('Note the Page Template used for your page, e.g. "single_frame_page"')])]),e._v(" "),a("h3",{attrs:{id:"place-the-fragment-in-the-template"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#place-the-fragment-in-the-template"}},[e._v("#")]),e._v(" Place the fragment in the template")]),e._v(" "),a("ol",[a("li",[e._v("From the left pane of the App Builder, go to "),a("code",[e._v("Pages")]),e._v(" →  "),a("code",[e._v("Templates")])]),e._v(" "),a("li",[e._v('On the row with the page template used for your page (e.g. "single_frame_page"), click on the Actions icon and select "Edit"')]),e._v(" "),a("li",[e._v("In the "),a("code",[e._v("Template")]),e._v(" text box, add  "),a("code",[e._v('<@wp.fragment code="test"/>')]),e._v(" on a new line between the "),a("code",[e._v("<body>")]),e._v(" and "),a("code",[e._v("</body>")]),e._v(" tags")]),e._v(" "),a("li",[e._v("At the bottom of the page, click "),a("code",[e._v("Save")])])]),e._v(" "),a("h3",{attrs:{id:"view-the-page-with-the-new-fragment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#view-the-page-with-the-new-fragment"}},[e._v("#")]),e._v(" View the page with the new fragment")]),e._v(" "),a("ol",[a("li",[e._v("From the left pane of the App Builder, go to "),a("code",[e._v("Pages")]),e._v(" →  "),a("code",[e._v("Management")])]),e._v(" "),a("li",[e._v('On the row with the folder named for your page (e.g. "Service"), click on the Actions icon and select "Design"')]),e._v(" "),a("li",[e._v("At the top of the middle pane, click "),a("code",[e._v("Preview")])])]),e._v(" "),a("blockquote",[a("p",[e._v("Note: The page will display the fragment "),a("code",[e._v("<h2> This is a fragment. </h2>")]),e._v(", which includes the HTML tags. By default, HTML embedded via a fragment tag is escaped, so it renders exactly as you enter it. You’ll need to un-escape the fragment to render it correctly.")])]),e._v(" "),a("h3",{attrs:{id:"update-the-fragment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-the-fragment"}},[e._v("#")]),e._v(" Update the fragment")]),e._v(" "),a("ol",[a("li",[e._v("From the left pane of the App Builder, go to "),a("code",[e._v("Pages")]),e._v(" →  "),a("code",[e._v("Templates")])]),e._v(" "),a("li",[e._v('On the row with the page template used for your page (e.g. "single_frame_page"), click on the Actions icon and select "Edit"')]),e._v(" "),a("li",[e._v("Change the tag to "),a("code",[e._v('<@wp.fragment code="test" escapeXml=false/>')])])]),e._v(" "),a("h3",{attrs:{id:"view-the-page-with-the-updated-fragment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#view-the-page-with-the-updated-fragment"}},[e._v("#")]),e._v(" View the page with the updated fragment")]),e._v(" "),a("ol",[a("li",[e._v("From the left pane of the App Builder, go to "),a("code",[e._v("Pages")]),e._v(" →  "),a("code",[e._v("Management")])]),e._v(" "),a("li",[e._v('On the row with the folder named for your page (e.g. "Service"), click on the Actions icon and select "Design"')]),e._v(" "),a("li",[e._v("At the top of the middle pane, click "),a("code",[e._v("Preview")])]),e._v(" "),a("li",[e._v("Confirm the fragment is rendered correctly")])]),e._v(" "),a("h2",{attrs:{id:"freemarker-basics-in-entando"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#freemarker-basics-in-entando"}},[e._v("#")]),e._v(" FreeMarker Basics in Entando")]),e._v(" "),a("p",[e._v("FreeMarker is a powerful templating language that provides flexibility in how pages are rendered. It allows you to include conditional logic, inject information from the backend, check for query parameters and route to different pages. For example:")]),e._v(" "),a("ul",[a("li",[e._v("To check for a query parameter, use:\n"),a("code",[e._v("<#if RequestParameters.myParam?exists > …")])]),e._v(" "),a("li",[e._v("To check the current username, use:\n"),a("code",[e._v('<#if (Session.currentUser.username != "guest") >')])])]),e._v(" "),a("p",[e._v("Consider using "),a("a",{attrs:{href:"https://freemarker.apache.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("FreeMarker"),a("OutboundLink")],1),e._v(" for widgets that need to support dynamic behavior.")])])}),[],!1,null,null,null);t.default=r.exports}}]);