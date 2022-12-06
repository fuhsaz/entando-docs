(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{1601:function(e,t,n){"use strict";n.r(t);var a=n(32),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"bundle-component-descriptors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bundle-component-descriptors"}},[e._v("#")]),e._v(" Bundle Component Descriptors")]),e._v(" "),a("p",[e._v("Elements such as pages, content, simple widgets, fragments, and static resources are classified as platform components on Entando. This page describes each of these elements with an example.")]),e._v(" "),a("p",[e._v("Currently, Entando supports the following component types:")]),e._v(" "),a("p",[a("img",{attrs:{src:n(955),alt:"component-types.png"}})]),e._v(" "),a("p",[e._v("Each component is defined by a descriptor YAML located in the bundle "),a("code",[e._v("platform")]),e._v(" directory, inside the corresponding type as listed below. During the bundle pack phase, the descriptors are added to build the Docker images for the bundle.")]),e._v(" "),a("p",[e._v("Here is an example structure of a bundle project:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("bundle-project/\n...\n  platform/\n    assets/\n    categories/\n    contentTemplates/\n    contentTypes/\n    contents/\n    fragments/\n    groups/\n    labels/\n    pageTemplates/\n      my-page-template.yaml\n    pages/\n      my-page.yaml\n    widgets/\n      my-widget.yaml\n    resources/\n      css/\n        my-css-format.css\n  ...\n  entando.json\t\t<= Bundle project descriptor\n")])])]),a("blockquote",[a("p",[e._v("Note: Older names "),a("code",[e._v("pageModels")]),e._v(" and "),a("code",[e._v("contentModels")]),e._v(" for "),a("code",[e._v("pageTemplates")]),e._v(" and "),a("code",[e._v("contentTemplates")]),e._v(", respectively, are still supported on Entando 7.1 but may be removed in a future release.")])]),e._v(" "),a("h2",{attrs:{id:"widgets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#widgets"}},[e._v("#")]),e._v(" Widgets")]),e._v(" "),a("p",[a("strong",[e._v("widgets-descriptor.yaml")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("code: my-widget # Name of widget\n\ntitles: # Widget's titles\n  en: Example Widget # Title in English\n  it: Widget d'esempio # Title in Italian\n\ngroup: free # The owner group of my-widget\n\n# Optional. The UI path, where the widget.ftl file will have the customUi content\ncustomUiPath: widget.ftl\n\n# Optional. The Custom UI\ncustomUi: >-\n    <h1>Hi from my_widget- Custom Widget UI</h1>\n\n# Optional. The configUI\nconfigUi:\n  customElement: my-widget-config # The name of the custom element used to render the configUi\n  resources:\n    - <bundleid>/static/js/main.js # The resources necessary for the custom element to render the configUI, like the code  \n")])])]),e._v(" "),a("h2",{attrs:{id:"fragments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fragments"}},[e._v("#")]),e._v(" Fragments")]),e._v(" "),a("p",[a("strong",[e._v("fragments-descriptor.yaml")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('code: my_fragment # Fragment name\n\n# Optional. The fragment content\nguiCode: >-\n  "<div>Here is the content</div>"\n\n# Optional. A path to a FreeMarker file containing the fragment content\nguiCodePath: my_fragment.ftl  \n')])])]),a("h2",{attrs:{id:"page-templates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#page-templates"}},[e._v("#")]),e._v(" Page Templates")]),e._v(" "),a("p",[a("strong",[e._v("pageTemplate-descriptor.yaml")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('code: my_page_template # The page template identification\ndescription:  Basic page template # The page template description\n\ntitles: # my_page_template\'s titles\n  en: my_page_template # Title in English\n  it: il_mio_modello # Title in Italian\n\n# The page template configuration\nconfiguration:\n  frames: # All frames\n    - pos: 0 # Frame position\n      description: Header # Frame description\n      sketch: # Frame sketch configuration\n        x1: 0\n        y1: 0\n        x2: 11\n        y2: 1\n      defaultWidget:\n        code: my-widget # The widget code to apply when using the button "apply default widgets" in the page configuration UI\n\n    # A simplified way to define frames\n    - pos: 1\n      description: Breadcrumb\n      sketch: { x1: 0, y1: 0, x2: 11, y2: 1 }\n\n# Optional. Define the page template in a separate file or inside the descriptor file with `template`\ntemplatePath: page.ftl\n\n# Optional. Define the page template as below or in a separate file with `templatePath`\ntemplate: >-\n  <#assign wp=JspTaglibs[\\"/aps-core\\"]>\n  <!DOCTYPE HTML PUBLIC \\"-//W3C//DTD HTML 4.0 Transitional//EN\\">\n  <html>\n      <head>\n          <title><@wp.currentPage param=\\"title\\" /></title>\n      </head>\n      <body>\n          <h1><@wp.currentPage param=\\"title\\" /></h1>\n          <a href=\\"<@wp.url page=\\"homepage\\"/>\\">Home</a><br>\n          <div>\n              <h1>Bundle 1 Page Template</h1>\n              <@wp.show frame=0 />\n          </div>\n      </body>\n  </html>\n')])])]),a("h2",{attrs:{id:"pages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pages"}},[e._v("#")]),e._v(" Pages")]),e._v(" "),a("p",[e._v("This descriptor creates a page for a bundle. The page layout can be fully configured with a configuration widget. Page status can be "),a("code",[e._v("published")]),e._v(" or "),a("code",[e._v("draft")]),e._v(".")]),e._v(" "),a("p",[e._v("Groups in a page descriptor are configured by "),a("code",[e._v("ownerGroup")]),e._v(" and "),a("code",[e._v("joinGroups")]),e._v(". The "),a("code",[e._v("ownerGroup")]),e._v(" property specifies the group of users who can manage the entity in the App Builder. The "),a("code",[e._v("joinGroups")]),e._v(" property specifies those who can view or access the page. For example, setting "),a("code",[e._v("ownerGroup")]),e._v(' to "free" means anyone with access to the App Builder can manage the page, whereas setting '),a("code",[e._v("joinGroup")]),e._v(' to "free" means any end user can view the page in the application.')]),e._v(" "),a("p",[a("strong",[e._v("pages-descriptor.yaml")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("code: my-dashboard\nparentCode: homepage\ntitles:\n  en: my dashboard\n  it: La mia Dashboard\npageModel: dashboard\nownerGroup: free\njoinGroups: []\ndisplayedInMenu: true\nseo: false\ncharset: utf-8\n\n# ECR will publish the page according to this property\nstatus: published|draft\n\n# Page Configuration\nwidgets:\n  - code: Brand-Logo\n    config: null\n    pos: 0\n  - code: Login_buttons\n    config: null\n    pos: 2\n  - code: seeds_card\n    config:\n      cardname: creditcard\n    pos: 6\n  - code: list_item\n    config:\n      icon: managealerts\n      count: '0'\n      title: Alerts\n    pos: 7\n  - code: list_item\n    config:\n      icon: viewstatements\n      count: '0'\n      title: View Statements\n    pos: 11\n  - code: seedscard-transaction-table\n    config: null\n    pos: 13\n")])])]),a("h2",{attrs:{id:"assets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#assets"}},[e._v("#")]),e._v(" Assets")]),e._v(" "),a("p",[e._v("The CMS asset descriptor contains the metadata required for uploading and updating bundle assets.")]),e._v(" "),a("p",[a("strong",[e._v("assets-descriptor.yaml")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("correlationCode: 'my-reference-code'\ntype: image\n\n# This file should be placed in the same folder as the descriptor.yaml\nname: 113f4437cac3b3f3d4db7229f12287a4_d3.png\ndescription: 113f4437cac3b3f3d4db7229f12287a4_d3.png\ngroup: free\ncategories: []\n")])])]),a("h2",{attrs:{id:"content-templates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#content-templates"}},[e._v("#")]),e._v(" Content Templates")]),e._v(" "),a("p",[a("strong",[e._v("contentTemplates-descriptor.yaml")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("id: 8880003\ncontentType: CNG\ndescription: Demo Content Template\n\n# Optional. Define the content template shape in a separate file or inside the descriptor file with `contentShape`\ncontentShapePath:\n\n# Optional. Define the content template shape as shown below or in a separate file with `contentShapePath`\ncontentShape: >-\n  <article>\n    <h1>$content.Title.text</h1>\n    <h2>Demo content template</h2>\n    #if ( $content.MainBody.text != \"\" )\n    $content.MainBody.text\n    #end\n  </article>\n\nwidgets:\n  - code: Brand-Logo\n    config: null\n    pos: 0\n  - code: Login_buttons\n    config: null\n    pos: 2\n  - code: seeds_card\n    config:\n      cardname: creditcard\n    pos: 6\n  - code: list_item\n    config:\n      icon: managealerts\n      count: '0'\n      title: Alerts\n    pos: 7\n  - code: list_item\n    config:\n      icon: viewstatements\n      count: '0'\n      title: View Statements\n    pos: 11\n  - code: seedscard-transaction-table\n    config: null\n    pos: 13\n")])])]),a("h2",{attrs:{id:"content-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#content-types"}},[e._v("#")]),e._v(" Content Types")]),e._v(" "),a("p",[e._v("For more details on content type properties, refer to the "),a("RouterLink",{attrs:{to:"/v7.1/tutorials/compose/content-types-tutorial.html"}},[e._v("Content Type documentation")]),e._v(".")],1),e._v(" "),a("p",[a("strong",[e._v("contentTypes.yaml")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("code: CNG\nname: Demo\nstatus: 0\n\nattributes:\n  - code: title\n    type: Text\n    name: Title\n    roles:\n      - code: jacms:title\n        descr: The main title of a Content\n    disablingCodes: []\n    mandatory: true\n    listFilter: false\n    indexable: false\n\n    enumeratorStaticItems: string\n    enumeratorStaticItemsSeparator: string\n    enumeratorExtractorBean: string\n\n    validationRules:\n      minLength: 0\n      maxLength: 100\n      regex: string\n      rangeStartString: string\n      rangeEndString: string\n      rangeStartStringAttribute: string\n      rangeEndStringAttribute: string\n      equalString: string\n      equalStringAttribute: string\n      rangeStartDate: string\n      rangeEndDate: string\n      rangeStartDateAttribute: string\n      rangeEndDateAttribute: string\n      equalDate: string\n      equalDateAttribute: string\n      rangeStartNumber: 0\n      rangeStartNumberAttribute: string\n      rangeEndNumber: 0\n      rangeEndNumberAttribute: string\n      equalNumber: 0\n      equalNumberAttribute:\n      ognlValidation:\n        applyOnlyToFilledAttr: false\n        errorMessage: Something\n        keyForErrorMessage: some\n        keyForHelpMessage: thing\n        ognlExpression: string\n")])])]),a("h2",{attrs:{id:"contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),a("p",[e._v("This descriptor enables content to be created and published via a bundle, according to the "),a("code",[e._v("status")]),e._v(" property. The content ID is optional and enables linking from other components, like content widgets. It can be auto-generated or explicitly declared.")]),e._v(" "),a("p",[e._v("Groups in a content descriptor are configured by the owner group "),a("code",[e._v("mainGroup")]),e._v(" and the join group "),a("code",[e._v("groups")]),e._v(". The owner group consists of users who can manage the content within the App Builder, while the join group consists of users who can view the content.")]),e._v(" "),a("p",[a("strong",[e._v("contents-descriptor.yaml")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("id: NWS650\ntypeCode: NWS\ndescription: Dealing with a financial emergency\nmainGroup: free\ngroups:\n  - free\nstatus: PUBLIC\nattributes:\n  - code: date\n    value: '2020-04-23 00:00:00' # the date should be in ISO-8601 format\n  - code: title\n    values:\n      en: Dealing with a financial emergency\n  - code: subtitle\n    values:\n      en: |\n        <p>How to tackle financial stress</p>\n  - code: body\n    values:\n      en: |\n        <p>For many people, financial concerns are their number one stress point. Here are 6 ways to help reduce your money stress and get motivated to take control of your finances.</p>\n  - code: img\n    values:\n      en:\n        correlationCode: '651'\n        name: bank_750xx684385064_d0.jpg\n  - code: links\n    elements:\n      - code: links\n        value:\n          symbolicDestination: '#!U;http://www.yoursite.com/!#'\n          destType: 1\n          urlDest: 'http://www.yoursite.com/'\n          pageDest: null\n          contentDest: null\n          resourceDest: null\n        values:\n          en: vostro sito\n      - code: links\n        value:\n          symbolicDestination: '#!U;http://www.yoursite.com/!#'\n          destType: 1\n          urlDest: 'http://www.yoursite.com/'\n        values:\n          en: vostro sito 2\n  - code: attaches\n    elements:\n      - code: attaches\n        values:\n          en:\n            correlationCode: '205'\n            name: Entando_Admin_Console_Overview_4.3.3_EN.pdf\n")])])]),a("h2",{attrs:{id:"categories"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#categories"}},[e._v("#")]),e._v(" Categories")]),e._v(" "),a("p",[e._v("This descriptor contains a list of categories.")]),e._v(" "),a("p",[a("strong",[e._v("categories-descriptor.yaml")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('- code: my-category # Category name\n  parentCode: home # The parent category; home is the base category\n  titles:\n    it: "Una nuova categoria" # Category name in Italian\n    en: "New category" # Category name in English\n')])])]),a("h2",{attrs:{id:"groups"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#groups"}},[e._v("#")]),e._v(" Groups")]),e._v(" "),a("p",[e._v("This descriptor contains a list of groups.")]),e._v(" "),a("p",[a("strong",[e._v("groups-descriptor.yaml")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('- code: my_group # Identifies the group\n  name: "My group" # The name of the group\n')])])]),a("h2",{attrs:{id:"labels"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#labels"}},[e._v("#")]),e._v(" Labels")]),e._v(" "),a("p",[e._v("This descriptor contains a list of labels.")]),e._v(" "),a("p",[a("strong",[e._v("labels-descriptor.yaml")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("- key: my-first-label # Identifies the label\n  titles: # The titles for the label\n    it: Vostro Titolo # The title in Italian\n    en: Your Title # The title in English\n")])])]),a("h2",{attrs:{id:"languages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#languages"}},[e._v("#")]),e._v(" Languages")]),e._v(" "),a("p",[e._v("This descriptor contains a list of languages to enable during the installation process.")]),e._v(" "),a("p",[a("strong",[e._v("languages-descriptor.yaml")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("- code: en\n  description: English\n- code: it\n  description: Italian\n")])])]),a("h2",{attrs:{id:"static-resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#static-resources"}},[e._v("#")]),e._v(" Static Resources")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("resources")]),e._v(" folder in the "),a("code",[e._v("platform")]),e._v(" directory contains all static resources. These files will be uploaded to Entando using the same structure, found in the App Builder File Browser public folder.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("platform/ \n   ...\n   resources/  \n       css/  \n         styles.css  \n       js/  \n         script.js  \n       images/  \n         favicon.ico  \n         logo.png  \n       page.html\n")])])]),a("h3",{attrs:{id:"accessing-static-resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accessing-static-resources"}},[e._v("#")]),e._v(" Accessing Static Resources")]),e._v(" "),a("p",[e._v("To use static files in a Widget or Page Template, use the FTL tag "),a("code",[e._v("<@wp.resourceURL />")]),e._v(" with YOUR-BUNDLE-CODE. This code is a unique identifier that provides access to each bundle's resources.")]),e._v(" "),a("h4",{attrs:{id:"determine-your-bundle-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#determine-your-bundle-code"}},[e._v("#")]),e._v(" Determine YOUR-BUNDLE-CODE")]),e._v(" "),a("ol",[a("li",[e._v("Use the ent CLI to fetch YOUR-BUNDLE-ID to formulate the code:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ent ecr get-bundle-id repo=url\n")])])]),a("p",[e._v("It should return an 8 digit string of numbers and letters, e.g. bundle-id=8785d979.")]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[e._v("YOUR-BUNDLE-CODE is YOUR-BUNDLE-NAME-YOUR-BUNDLE-ID:")]),e._v(" "),a("p",[e._v("If YOUR-BUNDLE-NAME=first-bundle and YOUR-BUNDLE-ID=8785d979, then\nYOUR-BUNDLE-CODE=first-bundle-8785d979")])])]),e._v(" "),a("h4",{attrs:{id:"samples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#samples"}},[e._v("#")]),e._v(" Samples")]),e._v(" "),a("p",[e._v("Here are example tags to access static resources in a typical bundle:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('  <img src="<@wp.resourceURL />bundles/YOUR-BUNDLE-CODE/images/logo.png">\n  <link rel="stylesheet" href="<@wp.resourceURL />bundles/YOUR-BUNDLE-CODE/resources/css/styles.css">\n  <link rel="shortcut icon" href="<@wp.resourceURL />bundles/YOUR-BUNDLE-CODE/images/favicon.ico" type="image/x-icon"/>\n  <script type="application/javascript" src="<@wp.resourceURL />bundles/YOUR-BUNDLE-CODE/js/script.js"><\/script>\n')])])])])}),[],!1,null,null,null);t.default=s.exports},955:function(e,t,n){e.exports=n.p+"assets/img/component-types.daa42b26.png"}}]);