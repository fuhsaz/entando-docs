(window.webpackJsonp=window.webpackJsonp||[]).push([[525],{1529:function(e,t,a){"use strict";a.r(t);var i=a(32),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"content-attributes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#content-attributes"}},[e._v("#")]),e._v(" Content Attributes")]),e._v(" "),a("p",[e._v("An attribute is a well-defined property characterized by an attribute type and a set of applicable parameters. One or more attributes establish the definition of a content type comprise the information provided by content. This section describes the different attribute types supported by Entando.")]),e._v(" "),a("h2",{attrs:{id:"attribute-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#attribute-types"}},[e._v("#")]),e._v(" Attribute Types")]),e._v(" "),a("p",[e._v("Attribute types can be broken into two categories: simple and composed. A simple attribute type consists of a single piece of information, e.g. an image. A composed attribute type is a collection of simple attribute types, e.g. a set of images.")]),e._v(" "),a("h3",{attrs:{id:"simple-attribute-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-attribute-types"}},[e._v("#")]),e._v(" Simple Attribute Types")]),e._v(" "),a("p",[a("strong",[e._v("Attach")])]),e._v(" "),a("ul",[a("li",[e._v("Represents a file attached to the content")]),e._v(" "),a("li",[e._v("Consists of the URL of the file in the system’s resources and a text entry containing the file name or description")]),e._v(" "),a("li",[e._v("Rendered as a "),a("em",[a("strong",[e._v("button")])]),e._v(" called "),a("code",[e._v("Add")]),e._v(". Clicking "),a("code",[e._v("Add")]),e._v(" prompts the user to select a file from the system's Digital Assets attachment list.")])]),e._v(" "),a("p",[a("strong",[e._v("Boolean")])]),e._v(" "),a("ul",[a("li",[e._v("Represents a boolean value which can be either true or false")]),e._v(" "),a("li",[e._v("Rendered as a "),a("em",[a("strong",[e._v("radio button")])]),e._v(" with options labeled “Yes” and “No”")]),e._v(" "),a("li",[e._v("Alternative to the "),a("strong",[e._v("check box")]),e._v(" attribute")])]),e._v(" "),a("p",[a("strong",[e._v("Check box")])]),e._v(" "),a("ul",[a("li",[e._v("Represents a boolean value which can be either true or false")]),e._v(" "),a("li",[e._v("Rendered as a "),a("em",[a("strong",[e._v("check box")])]),e._v(" labeled “Yes” or “No”")]),e._v(" "),a("li",[e._v("Alternative to the "),a("strong",[e._v("boolean")]),e._v(" attribute")])]),e._v(" "),a("p",[a("strong",[e._v("Date")])]),e._v(" "),a("ul",[a("li",[e._v("Represents a date")]),e._v(" "),a("li",[e._v("Provides time tracking capabilities")]),e._v(" "),a("li",[e._v("Often used to filter content by publication date, etc.")]),e._v(" "),a("li",[e._v("Rendered as a "),a("em",[a("strong",[e._v("datepicker")])])])]),e._v(" "),a("p",[a("strong",[e._v("Timestamp")])]),e._v(" "),a("ul",[a("li",[e._v("A specialized instance of the "),a("strong",[e._v("date")]),e._v(" attribute")]),e._v(" "),a("li",[e._v("The hour, minute and second can be specified")]),e._v(" "),a("li",[e._v("Rendered as a "),a("em",[a("strong",[e._v("datepicker")])]),e._v(" for the date and a "),a("em",[a("strong",[e._v("select")])]),e._v(" for hours, minutes and seconds")])]),e._v(" "),a("p",[a("strong",[e._v("Enumerator")])]),e._v(" "),a("ul",[a("li",[e._v("Represents textual information using a predefined set of options")]),e._v(" "),a("li",[e._v("Defined by:\n"),a("ul",[a("li",[e._v("Mandatory elements declaring the set of available options")]),e._v(" "),a("li",[e._v("An optional separator declaring the character to separate the enumerator arguments. The default separator is a comma.")]),e._v(" "),a("li",[e._v("An ExtractorBean parameter naming the Spring bean that processes the enumerator. The value of ExtractorBean must exactly match the bean ID as defined in the Spring configuration file.")])])]),e._v(" "),a("li",[e._v("Rendered as a "),a("em",[a("strong",[e._v("select list")])])])]),e._v(" "),a("p",[a("strong",[e._v("Enumerator Map")])]),e._v(" "),a("ul",[a("li",[e._v("Represents textual information using a predefined set of options")]),e._v(" "),a("li",[e._v("Defined by:\n"),a("ul",[a("li",[e._v("Elements comprising a separated list of key-value pairs")]),e._v(" "),a("li",[e._v("An optional separator declaring the character to separate the key-value pairs. The default separator is a comma.")]),e._v(" "),a("li",[e._v("Rendered as a "),a("em",[a("strong",[e._v("select list")])])])])])]),e._v(" "),a("p",[a("strong",[e._v("Hypertext")])]),e._v(" "),a("ul",[a("li",[e._v("Holds HTML-tagged text")]),e._v(" "),a("li",[e._v("Retains a single value for all languages")]),e._v(" "),a("li",[e._v("Rendered as a "),a("em",[a("strong",[e._v("text area")])]),e._v(" on the page to edit content")])]),e._v(" "),a("blockquote",[a("p",[e._v("Notes: It is best practice to only enter meaningful HTML tags. Avoid those which are decorative or add graphics. If the CKEditor is active, additional functionalities are accessible from a dedicated editor’s toolbar (e.g.table insertion, table manipulation, special character insertion, string formatting, links creation).")])]),e._v(" "),a("p",[a("strong",[e._v("Image")])]),e._v(" "),a("ul",[a("li",[e._v("Binds an image resource to the content")]),e._v(" "),a("li",[e._v("The user must specify a description to accompany the image")]),e._v(" "),a("li",[e._v("Images are rarely indexed or used to filter content")]),e._v(" "),a("li",[e._v("Rendered as a "),a("em",[a("strong",[e._v("button")])]),e._v(" called "),a("code",[e._v("Add")]),e._v(". Clicking "),a("code",[e._v("Add")]),e._v(" prompts the user to select an image from the Digital Assets image list.")]),e._v(" "),a("li",[e._v("Selecting an image presents the user with a thumbnail preview and parameters:\n"),a("ul",[a("li",[e._v("Text (mandatory) that defaults to the name of the selected image")]),e._v(" "),a("li",[e._v("Legend (optional)")]),e._v(" "),a("li",[e._v("Alt tag (optional)")]),e._v(" "),a("li",[e._v("Description (optional)")]),e._v(" "),a("li",[e._v("Title (optional)")])])])]),e._v(" "),a("p",[a("strong",[e._v("Link")])]),e._v(" "),a("ul",[a("li",[e._v("Represents an hypertext link")]),e._v(" "),a("li",[e._v("Normally used to include a link within content")]),e._v(" "),a("li",[e._v("It is possible to define up to three different types of links:\n"),a("ol",[a("li",[e._v("External link: Points to a location external to the Entando instance")]),e._v(" "),a("li",[e._v("Page link: Points to a page of the Entando instance")]),e._v(" "),a("li",[e._v("Content link: Points to other content within the Entando instance")])])]),e._v(" "),a("li",[e._v("Rendered as a "),a("em",[a("strong",[e._v("button")])]),e._v(" called "),a("code",[e._v("Add")]),e._v(". Clicking "),a("code",[e._v("Add")]),e._v(" opens a modal window from which the user can select the link type.")])]),e._v(" "),a("p",[a("strong",[e._v("Longtext")])]),e._v(" "),a("ul",[a("li",[e._v("Represents simple unformatted text")]),e._v(" "),a("li",[e._v("Supports several languages and the optional parameters of minimum length, maximum length and regular expressions")]),e._v(" "),a("li",[e._v("Normally used for a brief description when a short string is insufficient")]),e._v(" "),a("li",[e._v("Rendered as a "),a("em",[a("strong",[e._v("text area")])])])]),e._v(" "),a("p",[a("strong",[e._v("Monotext")])]),e._v(" "),a("ul",[a("li",[e._v("Represents information in textual form")]),e._v(" "),a("li",[e._v("Supports only one language and the optional parameters of minimum length, maximum length and regular expressions")]),e._v(" "),a("li",[e._v("Used for fields that do not require localization")]),e._v(" "),a("li",[e._v("Rendered as a "),a("em",[a("strong",[e._v("text field")])])])]),e._v(" "),a("p",[a("strong",[e._v("Number")])]),e._v(" "),a("ul",[a("li",[e._v("Holds an integer number")]),e._v(" "),a("li",[e._v("Retains a single value for all languages")]),e._v(" "),a("li",[e._v('Supports the optional parameters "From," "To" and "Equal to"')]),e._v(" "),a("li",[e._v("Rendered as a "),a("em",[a("strong",[e._v("text field")])])])]),e._v(" "),a("p",[a("strong",[e._v("Text")])]),e._v(" "),a("ul",[a("li",[e._v("Holds a string")]),e._v(" "),a("li",[e._v("Retains a single value for all languages")]),e._v(" "),a("li",[e._v("Supports minimum length, maximum length and regular expressions as optional parameters")]),e._v(" "),a("li",[e._v("Rendered as a "),a("em",[a("strong",[e._v("text field")])])])]),e._v(" "),a("p",[a("strong",[e._v("ThreeState")])]),e._v(" "),a("ul",[a("li",[e._v("Conceptually similar to the "),a("strong",[e._v("boolean")]),e._v(' attribute, with "Both" as a third status option')]),e._v(" "),a("li",[e._v("Rendered as a "),a("em",[a("strong",[e._v("radio button")])]),e._v(' with options labeled “Yes," "No” and "Both"')])]),e._v(" "),a("h3",{attrs:{id:"composed-attribute-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#composed-attribute-types"}},[e._v("#")]),e._v(" Composed Attribute Types")]),e._v(" "),a("p",[e._v("Simple attributes types can only retain a single type of information, whereas composed attribute types aggregate\ndifferent types of information into one attribute.")]),e._v(" "),a("p",[e._v("It is functionally legal to build a content type where all attributes are specified back-to-back: Although formally complete, this is logically insufficient, as attributes would appear mutually unrelated and their relationships to one another would not be explicitly defined.")]),e._v(" "),a("p",[e._v("Entando offers three types of composed attributes: List, Monolist, and Composite.")]),e._v(" "),a("p",[a("strong",[e._v("List")])]),e._v(" "),a("ul",[a("li",[e._v("Represents a set of independent and homogeneous elementary attribute types")]),e._v(" "),a("li",[e._v("Each attribute type is associated with only one of the languages defined in the system, limiting the "),a("strong",[e._v("list")]),e._v(" attribute to mono-language attributes")]),e._v(" "),a("li",[e._v("Rendered as a "),a("em",[a("strong",[e._v("button")])]),e._v(" called "),a("code",[e._v("Add")]),e._v(". Clicking "),a("code",[e._v("Add")]),e._v(" prompts the user to select or define the single elements which compose the list.")])]),e._v(" "),a("p",[a("strong",[e._v("Monolist")])]),e._v(" "),a("ul",[a("li",[e._v("Represents a list that is common to all of the languages defined in the system, allowing the "),a("strong",[e._v("monolist")]),e._v(" attribute to handle both mono-language and multi-language attributes")]),e._v(" "),a("li",[e._v("Rendered as a "),a("em",[a("strong",[e._v("button")])]),e._v(" called "),a("code",[e._v("Add")]),e._v(". Clicking "),a("code",[e._v("Add")]),e._v(" prompts the user to select or define the single elements which compose the monolist.")])]),e._v(" "),a("p",[a("strong",[e._v("Composite")])]),e._v(" "),a("ul",[a("li",[e._v("Represents an aggregate of different, non-homogeneous, simple attributes types")]),e._v(" "),a("li",[e._v("The aggregation of different types is treated as a single unit")]),e._v(" "),a("li",[e._v("Rendered as a combination of the elementary attribute types, where each attribute type presents the proper rendering")])])])}),[],!1,null,null,null);t.default=n.exports}}]);