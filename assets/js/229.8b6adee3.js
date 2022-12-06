(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{1084:function(t,e,a){"use strict";a.r(e);var s=a(32),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"entandodatabaseservice-custom-resource-definition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entandodatabaseservice-custom-resource-definition"}},[t._v("#")]),t._v(" EntandoDatabaseService Custom Resource Definition")]),t._v(" "),a("p",[t._v("The EntandoDatabaseService CRD directs Entando to an external, internal, or auto-provisioned database service. Currently, PostgreSQL, MySQL, and Oracle are accepted.")]),t._v(" "),a("h3",{attrs:{id:"example-entandodatabaseservice-cr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-entandodatabaseservice-cr"}},[t._v("#")]),t._v(" Example EntandoDatabaseService CR")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[t._v("EntandoDatabaseService\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("postgresql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("service\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dbms")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" postgresql\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10.0.0.13\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5432")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("databaseName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" your"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("database\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("secretName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" postgresql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("secret\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jdbcParameters")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"specifications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specifications"}},[t._v("#")]),t._v(" Specifications")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Spec Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("spec.databaseName")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The name of the database that the Entando Operator should be creating schemas in. This property is not used with MySQL DBMS.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("spec.dbms")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Valid values are "),a("code",[t._v("oracle")]),t._v(", "),a("code",[t._v("postgresql")]),t._v(" and "),a("code",[t._v("mysql")]),t._v(". With Oracle, the "),a("code",[t._v("createDeployment")]),t._v(" attribute must be set to "),a("code",[t._v("false")]),t._v(", allowing it to be set up as an external DB.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("spec.environmentVariables")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("A list of environment variables following the standard structure of Kubernetes environment variables.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("spec.host")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("IP address or hostname of the external database.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("spec.jdbcParameters")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Standard JDBC connection parameters.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("spec.port")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The port that the external database service is running on. This value is optional.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("spec.secretName")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Secret containing DB credentials capable of creating users and databases.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("spec.tablespace")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Only required for Oracle to create schemas in different tablespaces.")])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);