(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{1245:function(e,t,n){"use strict";n.r(t);var a=n(32),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"tutorial-create-a-react-micro-frontend-widget"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tutorial-create-a-react-micro-frontend-widget"}},[e._v("#")]),e._v(" Tutorial: create a react micro frontend widget")]),e._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("p",[e._v("Use last stable node version (at the time of writing "),a("strong",[e._v("v13.8.0")]),e._v("). We\nsuggest using "),a("a",{attrs:{href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer"}},[e._v("nvm"),a("OutboundLink")],1),e._v(" to handle node\ninstallations.")]),e._v(" "),a("h2",{attrs:{id:"bootstrap-a-react-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bootstrap-a-react-app"}},[e._v("#")]),e._v(" Bootstrap a react app")]),e._v(" "),a("p",[e._v("In this tutorial we use "),a("a",{attrs:{href:"https://create-react-app.dev/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Create React\nApp"),a("OutboundLink")],1),e._v(", but feel free to adopt whatever\nboilerplate you like.")]),e._v(" "),a("p",[a("code",[e._v("npx create-react-app my-widget --use-npm")])]),e._v(" "),a("p",[e._v("This is the expected output:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("my-widget\n├── README.md\n├── node_modules\n├── package.json\n├── .gitignore\n├── public\n│   ├── favicon.ico\n│   ├── index.html\n│   ├── logo192.png\n│   ├── logo512.png\n│   ├── manifest.json\n│   └── robots.txt\n└── src\n    ├── App.css\n    ├── App.js\n    ├── App.test.js\n    ├── index.css\n    ├── index.js\n    ├── logo.svg\n    ├── serviceWorker.js\n    └── setupTests.js\n")])])]),a("p",[e._v("Now, type "),a("code",[e._v("cd my-widget")]),e._v(" and "),a("code",[e._v("npm start")]),e._v(" to start the app.")]),e._v(" "),a("h2",{attrs:{id:"wrap-the-react-app-in-a-custom-element"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wrap-the-react-app-in-a-custom-element"}},[e._v("#")]),e._v(" Wrap the react app in a custom element")]),e._v(" "),a("p",[e._v("Let’s add a new file "),a("code",[e._v("WidgetElement.js")]),e._v(", containing the custom element\nthat will wrap the entire React app under the "),a("code",[e._v("src")]),e._v(" folder.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("import React from 'react';\nimport ReactDOM from 'react-dom';\nimport App from './App';\n\nclass WidgetElement extends HTMLElement {\n  connectedCallback() {\n    this.mountPoint = document.createElement('div');\n    this.appendChild(this.mountPoint);\n    ReactDOM.render(<App />, this.mountPoint);\n  }\n}\n\ncustomElements.define('my-widget', WidgetElement);\n\nexport default WidgetElement;\n")])])]),a("blockquote",[a("p",[a("strong",[e._v("Note")])]),e._v(" "),a("p",[a("code",[e._v("connectedCallback")]),e._v(" is a lifecycle hook method of custom elements,\npart of the web components spec.")])]),e._v(" "),a("p",[e._v("Then, the "),a("code",[e._v("index.js")]),e._v(" file should be updated. Starting from this:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("import React from 'react';\nimport ReactDOM from 'react-dom';\nimport './index.css';\nimport App from './App';\nimport * as serviceWorker from './serviceWorker';\n\nReactDOM.render(<App />, document.getElementById('root'));\n\n// If you want your app to work offline and load faster, you can change\n// unregister() to register() below. Note this comes with some pitfalls.\n// Learn more about service workers: https://bit.ly/CRA-PWA\nserviceWorker.unregister();\n")])])]),a("p",[e._v("replace the whole file with these two lines")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("import './index.css';\nimport './WidgetElement';\n")])])]),a("p",[e._v("You only have to import "),a("code",[e._v("WidgetElement")]),e._v(" plus the css, if needed.")]),e._v(" "),a("p",[e._v("We assume we don’t need a service worker for the widget, so we can\ndelete serviceWorker.js.")]),e._v(" "),a("p",[e._v("Now, to ensure our custom element is working we have to edit\n"),a("code",[e._v("public/index.html")]),e._v(". Remove "),a("code",[e._v('<div id="root"></div>')]),e._v(" from the "),a("code",[e._v("body")]),e._v(" (we\nprogrammatically generated the react root in the "),a("code",[e._v("connectedCallback")]),e._v("\nmethod of "),a("code",[e._v("WidgetElement")]),e._v(") and add our custom element "),a("code",[e._v("<my-widget />")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <title>React App</title>\n  </head>\n  <body>\n    <my-widget />\n  </body>\n</html>\n')])])]),a("blockquote",[a("p",[a("strong",[e._v("Note")])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("the custom element name ("),a("code",[e._v("my-widget")]),e._v(" in this tutorial) "),a("em",[e._v("must")]),e._v("\nmatch the first parameter of "),a("code",[e._v("customElements.define")]),e._v(" method")])]),e._v(" "),a("li",[a("p",[e._v("custom element names "),a("a",{attrs:{href:"https://stackoverflow.com/questions/22545621/do-custom-elements-require-a-dash-in-their-name",target:"_blank",rel:"noopener noreferrer"}},[e._v("require a dash to be used in\nthem"),a("OutboundLink")],1),e._v("\n(kebab-case) - they can’t be single words.")])])])]),e._v(" "),a("p",[e._v("Page should auto reload and…​ congrats! You’re running a barebones\nEntando 6 widget in isolation.")]),e._v(" "),a("h2",{attrs:{id:"build-the-widget"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-the-widget"}},[e._v("#")]),e._v(" Build the widget")]),e._v(" "),a("p",[e._v("In order to avoid path issues, we should set up a one line "),a("code",[e._v(".env")]),e._v(" file\nin the CRA project root:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("PUBLIC_URL=http://localhost:8080/entando/resources/static/my-widget\n")])])]),a("p",[e._v("Where `` is the path of the Entando 6 instance containing the widget.")]),e._v(" "),a("p",[e._v("Ready to build now! From the react project root, type")]),e._v(" "),a("p",[a("code",[e._v("npm run build")])]),e._v(" "),a("p",[e._v("and a "),a("code",[e._v("build")]),e._v(" dir will be generated. Now rename")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("a file like "),a("code",[e._v("static/js/runtime~main.c7dcdf0b.js")]),e._v(" to\n"),a("code",[e._v("static/js/runtime.js")]),e._v(" (bootstrapping logic)")])]),e._v(" "),a("li",[a("p",[e._v("a file like "),a("code",[e._v("static/js/2.230b21ef.chunk.js")]),e._v(" to "),a("code",[e._v("static/js/vendor.js")]),e._v("\n(third-party libraries)")])]),e._v(" "),a("li",[a("p",[e._v("a file like "),a("code",[e._v("static/js/main.1fd3965a.chunk.js")]),e._v(" to\n"),a("code",[e._v("static/js/main.js")]),e._v(" (app)")])]),e._v(" "),a("li",[a("p",[e._v("a file like "),a("code",[e._v("static/css/main.d1b05096.chunk.js")]),e._v(" to\n"),a("code",[e._v("static/css/main.css")]),e._v(" (stylesheet)")])])]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note")])]),e._v(" "),a("p",[e._v("you could keep the original names in order to avoid potential caching\nissues, but then you will have to update the "),a("em",[e._v("Custom UI")]),e._v(" field in the\nApp Builder widget screen every time a new version of the widget is\ndeployed. DE bundles can help with this and are covered in another\nlab.")])]),e._v(" "),a("h2",{attrs:{id:"create-the-entando-6-widget-in-app-builder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-the-entando-6-widget-in-app-builder"}},[e._v("#")]),e._v(" Create the Entando 6 widget in App Builder")]),e._v(" "),a("p",[e._v("For the purposes of this tutorial we are going to load the widget to the\nApp builder manually. In a live system you would include this in an\nEntando app, load via API, or via a Component Repository bundle.")]),e._v(" "),a("p",[e._v("Open the Entando App Builder")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Go to Configuration → File Browser")])]),e._v(" "),a("li",[a("p",[e._v("Click public")])]),e._v(" "),a("li",[a("p",[e._v("Click Create Folder")])]),e._v(" "),a("li",[a("p",[e._v("Enter "),a("code",[e._v("my-widget")])])]),e._v(" "),a("li",[a("p",[e._v("Click save")])]),e._v(" "),a("li",[a("p",[e._v("Click "),a("code",[e._v("my-widget")]),e._v(" folder")])]),e._v(" "),a("li",[a("p",[e._v("Recreate the same folder structure (my-widget/static/js,\nmy-widget/static/css)")])]),e._v(" "),a("li",[a("p",[e._v("Upload files from js and css folders in the corresponding folders in\nfile browser")])])]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note")])]),e._v(" "),a("p",[e._v("You can also embed the widget directly in a local copy of an Entando\napp. Copy it into the Entando 6 instance under\n"),a("code",[e._v("src\\main\\webapp\\resources\\my-widget")])])]),e._v(" "),a("p",[e._v("Now create the widget in the App Builder")]),e._v(" "),a("p",[e._v("go to UX Patterns → Widgets and click on the "),a("em",[e._v("New")]),e._v(" button.")]),e._v(" "),a("p",[e._v("You’ll see a screen like this one")]),e._v(" "),a("p",[a("img",{attrs:{src:n(361),alt:"New widget screen"}})]),e._v(" "),a("p",[e._v("Fill the form, e.g.:")]),e._v(" "),a("ul",[a("li",[a("p",[a("em",[e._v("my_widget")]),e._v(" as widget code (dashes are not allowed in a widget\ncode)")])]),e._v(" "),a("li",[a("p",[a("em",[e._v("My Widget")]),e._v(" as title for all the languages")])]),e._v(" "),a("li",[a("p",[a("em",[e._v("Free access")]),e._v(" as group")])]),e._v(" "),a("li",[a("p",[e._v("the following code as "),a("em",[e._v("Custom UI")])])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('<#assign wp=JspTaglibs[ "/aps-core"]>\n<link rel="stylesheet" type="text/css" href="<@wp.resourceURL />my-widget/static/css/main.css">\n<script async src="<@wp.resourceURL />my-widget/static/js/runtime.js"><\/script>\n<script async src="<@wp.resourceURL />my-widget/static/js/vendor.js"><\/script>\n<script async src="<@wp.resourceURL />my-widget/static/js/main.js"><\/script>\n<my-widget />\n')])])]),a("p",[e._v("Update the paths to match what you loaded to the app builder in the\nsteps above. And save the widget.")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note")])]),e._v(" "),a("p",[a("code",[e._v('<#assign wp=JspTaglibs[ "/aps-core"]>')]),e._v(" is needed for your widget code\nto have access to "),a("code",[e._v("@wp")]),e._v(" object which provides access to environment\nvariables.")])]),e._v(" "),a("p",[e._v("Then, configure a page (let’s assume it’s called "),a("em",[e._v("mypage")]),e._v(") and drag the\nwidget "),a("em",[e._v("mywidget")]),e._v(" in the page model. Publish, load the page (its url\nshould be ``) and "),a("em",[e._v("voilà")]),e._v(", here’s our react app embedded as a widget.\nDone!")])])}),[],!1,null,null,null);t.default=o.exports},361:function(e,t,n){e.exports=n.p+"assets/img/new-widget-screen.983cd1f9.png"}}]);