(window.webpackJsonp=window.webpackJsonp||[]).push([[616],{1664:function(e,a,t){"use strict";t.r(a);var n=t(32),s=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"tutorial-connecting-to-an-external-database"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tutorial-connecting-to-an-external-database"}},[e._v("#")]),e._v(" Tutorial: Connecting to an External Database")]),e._v(" "),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),t("p",[e._v("This document provides a guide to connecting an Entando Application to an external database. In\nmany production configurations, it is recommended to use a DBMS\noutside of the cluster where your Entando Application is running to\nsimplify maintenance, minimize duplication of resources, and establish a\nbackup workflow to scale with your application.")]),e._v(" "),t("h2",{attrs:{id:"prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("An environment to install your Entando Application")])]),e._v(" "),t("li",[t("p",[e._v("A running PostgreSQL, MySQL, or Oracle environment")])]),e._v(" "),t("li",[t("p",[e._v("Administrator access to the database")])]),e._v(" "),t("li",[t("p",[e._v("Network access from your Kubernetes cluster to your database")])])]),e._v(" "),t("h2",{attrs:{id:"tutorial"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tutorial"}},[e._v("#")]),e._v(" Tutorial")]),e._v(" "),t("ol",[t("li",[e._v("Create and install a secret or secrets for your database credentials")]),e._v(" "),t("li",[e._v("Edit the EntandoApp and EntandoKeycloakServer custom resources.")]),e._v(" "),t("li",[e._v("Set the value for "),t("code",[e._v("dbms")]),e._v(" to "),t("code",[e._v("none")]),e._v(" in both resources.")]),e._v(" "),t("li",[e._v("Under "),t("code",[e._v("environmentVariables")]),e._v(", you will need to provide database connection information for two Entando server databases and one connection for the Entando Component Repository. Example connection information for each of those databases is provided below:")])]),e._v(" "),t("h4",{attrs:{id:"ecr"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ecr"}},[e._v("#")]),e._v(" ECR")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("- name: SPRING_DATASOURCE_URL\n  value: {ECRDB_URL}\n- name: SPRING_DATASOURCE_USERNAME\n  valueFrom:\n    secretKeyRef:\n      name: {ECRDB_DBMS_SECRET_NAME}\n      key: username\n      optional: false\n- name: SPRING_DATASOURCE_PASSWORD\n  valueFrom:\n    secretKeyRef:\n      name: {ECRDB_DBMS_SECRET_NAME}\n      key: password\n      optional: false\n- name: SPRING_JPA_DATABASE_PLATFORM\n  value: {ECRDB_DIALECT}\n")])])]),t("h4",{attrs:{id:"portal-db"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#portal-db"}},[e._v("#")]),e._v(" Portal DB")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("- name: PORTDB_URL\n  value: {PORTDB_URL}\n- name: PORTDB_USERNAME\n  valueFrom:\n    secretKeyRef:\n      name: {PORTDB_DBMS_SECRET_NAME}\n      key: username\n      optional: false\n- name: PORTDB_PASSWORD\n  valueFrom:\n    secretKeyRef:\n      name: {PORTDB_DBMS_SECRET_NAME}\n      key: password\n      optional: false\n- name: PORTDB_CONNECTION_CHECKER\n  value: {PORTDB_CONNECTION_CHECKER}\n- name: PORTDB_EXCEPTION_SORTER\n  value: {PORTDB_EXCEPTION_SORTER}\n")])])]),t("h4",{attrs:{id:"server-db"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#server-db"}},[e._v("#")]),e._v(" Server DB")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("- name: SERVDB_URL\n  value: {SERVDB_URL}\n- name: SERVDB_USERNAME\n  valueFrom:\n    secretKeyRef:\n      name: {SERVDB_DBMS_SECRET_NAME}\n      key: username\n      optional: false\n- name: SERVDB_PASSWORD\n  valueFrom:\n    secretKeyRef:\n      name: {SERVDB_DBMS_SECRET_NAME}\n      key: password\n      optional: false\n- name: SERVDB_CONNECTION_CHECKER\n  value: {SERVDB_CONNECTION_CHECKER}\n- name: SERVDB_EXCEPTION_SORTER\n  value: {SERVDB_EXCEPTION_SORTER}\n")])])]),t("p",[e._v("Set the values for placeholders in the templates above based on your database configuration. Here are examples:")]),e._v(" "),t("h4",{attrs:{id:"postgresql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#postgresql"}},[e._v("#")]),e._v(" Postgresql")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("XXX_URL:                      jdbc:postgresql://{DBMS_ADDRESS}:{DBMS_PORT}/{DBMS_DBNAME}\nXXX_CONNECTION_CHECKER:        org.jboss.jca.adapters.jdbc.extensions.postgres.PostgreSQLValidConnectionChecker\nXXX_EXCEPTION_SORTER:         org.jboss.jca.adapters.jdbc.extensions.postgres.PostgreSQLExceptionSorter\nSPRING_JPA_DATABASE_PLATFORM: org.hibernate.dialect.PostgreSQLDialect\n")])])]),t("h4",{attrs:{id:"mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[e._v("#")]),e._v(" MySql")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("XXX_URL:                      jdbc:mysql://{DBMS_ADDRESS}:{DBMS_PORT}/{DBMS_DBNAME}\nXXX_CONNECTON_CHECKER:        org.jboss.jca.adapters.jdbc.extensions.mysql.MySQLValidConnectionChecker\nXXX_EXCEPTION_SORTER:         org.jboss.jca.adapters.jdbc.extensions.mysql.MySQLExceptionSorter\nSPRING_JPA_DATABASE_PLATFORM: org.hibernate.dialect.MySQLDialect \n")])])]),t("h4",{attrs:{id:"oracle"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#oracle"}},[e._v("#")]),e._v(" Oracle")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("XXX_URL:                      jdbc:oracle:{driver_type}:@//{DBMS_ADDRESS}:{DBMS_PORT}/{DBMS_SERVICE_NAME}\nXXX_CONNECTON_CHECKER:        org.jboss.jca.adapters.jdbc.extensions.oracle.OracleValidConnectionChecker\nXXX_EXCEPTION_SORTER:         org.jboss.jca.adapters.jdbc.extensions.oracle.OracleExceptionSorter\nSPRING_JPA_DATABASE_PLATFORM: org.hibernate.dialect.OracleDialect \n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);