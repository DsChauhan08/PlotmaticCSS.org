(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{334:function(t,s,a){"use strict";a.r(s);var e=a(12),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"motion-effects"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#motion-effects"}},[t._v("#")]),t._v(" Motion Effects")]),t._v(" "),s("p",[t._v("Motion effects enhance your charts when users interact with elements using "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/:hover",target:"_blank",rel:"noopener noreferrer"}},[t._v("mouse"),s("OutboundLink")],1),t._v(" or "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action",target:"_blank",rel:"noopener noreferrer"}},[t._v("touch"),s("OutboundLink")],1),t._v(" events. The simplest example is CSS hover effects. You can add motion effects when the mouse hovers over the entire chart or an individual inner element. Use your imagination and CSS skills to create beautiful interaction effects.")]),t._v(" "),s("p",[t._v("Here are some basic examples leveraging CSS "),s("code",[t._v(":hover")]),t._v(" pseudo-class.")]),t._v(" "),s("h2",{attrs:{id:"data-hover-effect"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#data-hover-effect"}},[t._v("#")]),t._v(" Data Hover Effect")]),t._v(" "),s("p",[t._v("A simple background color change when the user hovers over data items:")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#motion-effect tr")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition-duration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0.3s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#motion-effect tr:hover")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rgba")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0.2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#motion-effect tr:hover th")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rgba")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0.4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #fff"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("code-example",{attrs:{"code-example-id":"motion-effect-example-1"},scopedSlots:t._u([{key:"css-code",fn:function(){return[t._v("\n#motion-effect-example-1 {\n  height: 200px;\n  max-width: 300px;\n  margin: 0 auto;\n}\n#motion-effect-example-1 tr {\n  transition-duration: 0.3s;\n}\n#motion-effect-example-1 tr:hover {\n  background-color: rgba(0, 0, 0, 0.2);\n}\n#motion-effect-example-1 tr:hover th {\n  background-color: rgba(0, 0, 0, 0.4);\n  color: #fff;\n}\n")]},proxy:!0},{key:"html-code",fn:function(){return[s("table",{staticClass:"charts-css column show-labels show-primary-axis show-5-secondary-axes data-spacing-5 hide-data",attrs:{id:"motion-effect-example-1"}},[s("caption",[t._v(" Motion Effect Example #1 ")]),t._v(" "),s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[t._v(" Year ")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v(" Progress ")])])]),t._v(" "),s("tbody",[s("tr",[s("th",{attrs:{scope:"row"}},[t._v(" 2016 ")]),t._v(" "),s("td",{staticStyle:{"--size":"0.2"}},[s("span",{staticClass:"data"},[t._v(" 20 ")])])]),t._v(" "),s("tr",[s("th",{attrs:{scope:"row"}},[t._v(" 2017 ")]),t._v(" "),s("td",{staticStyle:{"--size":"0.4"}},[s("span",{staticClass:"data"},[t._v(" 40 ")])])]),t._v(" "),s("tr",[s("th",{attrs:{scope:"row"}},[t._v(" 2018 ")]),t._v(" "),s("td",{staticStyle:{"--size":"0.6"}},[s("span",{staticClass:"data"},[t._v(" 60 ")])])]),t._v(" "),s("tr",[s("th",{attrs:{scope:"row"}},[t._v(" 2019 ")]),t._v(" "),s("td",{staticStyle:{"--size":"0.4"}},[s("span",{staticClass:"data"},[t._v(" 40 ")])])]),t._v(" "),s("tr",[s("th",{attrs:{scope:"row"}},[t._v(" 2020 ")]),t._v(" "),s("td",{staticStyle:{"--size":"0.2"}},[s("span",{staticClass:"data"},[t._v(" 20 ")])])])])])]},proxy:!0}])}),t._v(" "),s("h2",{attrs:{id:"dataset-opacity-effect"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dataset-opacity-effect"}},[t._v("#")]),t._v(" Dataset Opacity Effect")]),t._v(" "),s("p",[t._v("Reverse opacity effect when hovering over datasets:")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#motion-effect td")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition-duration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0.3s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("opacity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0.5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#motion-effect td:hover")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("opacity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("code-example",{attrs:{"code-example-id":"motion-effect-example-2"},scopedSlots:t._u([{key:"css-code",fn:function(){return[t._v("\n#motion-effect-example-2 {\n  height: 200px;\n  max-width: 500px;\n  margin: 0 auto;\n}\n#motion-effect-example-2 td {\n  transition-duration: 0.3s;\n  opacity: 0.5;\n}\n#motion-effect-example-2 td:hover {\n  opacity: 1;\n}\n")]},proxy:!0},{key:"html-code",fn:function(){return[s("table",{staticClass:"charts-css column multiple show-primary-axis show-data-axes data-spacing-20 hide-data",attrs:{id:"motion-effect-example-2"}},[s("caption",[t._v(" Motion Effect Example #2 ")]),t._v(" "),s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[t._v(" Year ")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v(" Progress 1 ")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v(" Progress 2 ")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v(" Progress 3 ")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v(" Progress 4 ")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v(" Progress 5 ")])])]),t._v(" "),s("tbody",[s("tr",[s("th",{attrs:{scope:"row"}},[t._v(" 2010 ")]),t._v(" "),s("td",{staticStyle:{"--size":"0.2"}},[s("span",{staticClass:"data"},[t._v(" 20 ")])]),t._v(" "),s("td",{staticStyle:{"--size":"0.5"}},[s("span",{staticClass:"data"},[t._v(" 50 ")])]),t._v(" "),s("td",{staticStyle:{"--size":"1.0"}},[s("span",{staticClass:"data"},[t._v(" 100 ")])]),t._v(" "),s("td",{staticStyle:{"--size":"0.7"}},[s("span",{staticClass:"data"},[t._v(" 70 ")])]),t._v(" "),s("td",{staticStyle:{"--size":"0.4"}},[s("span",{staticClass:"data"},[t._v(" 40 ")])])]),t._v(" "),s("tr",[s("th",{attrs:{scope:"row"}},[t._v(" 2020 ")]),t._v(" "),s("td",{staticStyle:{"--size":"0.9"}},[s("span",{staticClass:"data"},[t._v(" 90 ")])]),t._v(" "),s("td",{staticStyle:{"--size":"0.6"}},[s("span",{staticClass:"data"},[t._v(" 60 ")])]),t._v(" "),s("td",{staticStyle:{"--size":"0.4"}},[s("span",{staticClass:"data"},[t._v(" 40 ")])]),t._v(" "),s("td",{staticStyle:{"--size":"0.7"}},[s("span",{staticClass:"data"},[t._v(" 70 ")])]),t._v(" "),s("td",{staticStyle:{"--size":"1.0"}},[s("span",{staticClass:"data"},[t._v(" 100 ")])])])])])]},proxy:!0}])}),t._v(" "),s("h2",{attrs:{id:"scale-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scale-data"}},[t._v("#")]),t._v(" Scale Data")]),t._v(" "),s("p",[t._v("You can scale the data when hovering over the chart.")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#motion-effect td .data")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition-duration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0.6s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("scale")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#motion-effect td:hover .data")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("scale")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("code-example",{attrs:{"code-example-id":"motion-effect-example-3"},scopedSlots:t._u([{key:"css-code",fn:function(){return[t._v("\n#motion-effect-example-3 {\n  height: 200px;\n  max-width: 300px;\n  margin: 0 auto;\n}\n#motion-effect-example-3 td .data {\n  transition-duration: 0.6s;\n  transform: scale(0);\n}\n#motion-effect-example-3 td:hover .data {\n  transform: scale(1);\n}\n")]},proxy:!0},{key:"html-code",fn:function(){return[s("table",{staticClass:"charts-css column show-primary-axis show-5-secondary-axes data-spacing-5",attrs:{id:"motion-effect-example-3"}},[s("caption",[t._v(" Motion Effect Example #3 ")]),t._v(" "),s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[t._v(" Year ")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v(" Progress ")])])]),t._v(" "),s("tbody",[s("tr",[s("th",{attrs:{scope:"row"}},[t._v(" 2016 ")]),t._v(" "),s("td",{staticStyle:{"--size":"0.2"}},[s("span",{staticClass:"data"},[t._v(" 20 ")])])]),t._v(" "),s("tr",[s("th",{attrs:{scope:"row"}},[t._v(" 2017 ")]),t._v(" "),s("td",{staticStyle:{"--size":"0.4"}},[s("span",{staticClass:"data"},[t._v(" 40 ")])])]),t._v(" "),s("tr",[s("th",{attrs:{scope:"row"}},[t._v(" 2018 ")]),t._v(" "),s("td",{staticStyle:{"--size":"0.6"}},[s("span",{staticClass:"data"},[t._v(" 60 ")])])]),t._v(" "),s("tr",[s("th",{attrs:{scope:"row"}},[t._v(" 2019 ")]),t._v(" "),s("td",{staticStyle:{"--size":"0.8"}},[s("span",{staticClass:"data"},[t._v(" 80 ")])])]),t._v(" "),s("tr",[s("th",{attrs:{scope:"row"}},[t._v(" 2020 ")]),t._v(" "),s("td",{staticStyle:{"--size":"1.0"}},[s("span",{staticClass:"data"},[t._v(" 100 ")])])])])])]},proxy:!0}])}),t._v(" "),s("h2",{attrs:{id:"grayscale-chart"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grayscale-chart"}},[t._v("#")]),t._v(" Grayscale Chart")]),t._v(" "),s("p",[t._v("My favorite effect is the grayscale effect. The chart becomes colorful only when the user hovers over chart.")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#motion-effect")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition-duration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("filter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grayscale")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("100%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#motion-effect:hover")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("filter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("code-example",{attrs:{"code-example-id":"motion-effect-example-4"},scopedSlots:t._u([{key:"css-code",fn:function(){return[t._v("\n#motion-effect-example-4 {\n  height: 200px;\n  max-width: 300px;\n  margin: 0 auto;\n  transition-duration: 1s;\n  filter: grayscale(100%);\n}\n#motion-effect-example-4:hover {\n  filter: none;\n}\n")]},proxy:!0},{key:"html-code",fn:function(){return[s("table",{staticClass:"charts-css column show-primary-axis show-5-secondary-axes data-spacing-10 hide-data",attrs:{id:"motion-effect-example-4"}},[s("caption",[t._v(" Motion Effect Example #4 ")]),t._v(" "),s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[t._v(" Year ")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v(" Progress ")])])]),t._v(" "),s("tbody",[s("tr",[s("th",{attrs:{scope:"row"}},[t._v(" 2016 ")]),t._v(" "),s("td",{staticStyle:{"--size":"0.2"}},[s("span",{staticClass:"data"},[t._v(" 20 ")])])]),t._v(" "),s("tr",[s("th",{attrs:{scope:"row"}},[t._v(" 2017 ")]),t._v(" "),s("td",{staticStyle:{"--size":"0.4"}},[s("span",{staticClass:"data"},[t._v(" 40 ")])])]),t._v(" "),s("tr",[s("th",{attrs:{scope:"row"}},[t._v(" 2018 ")]),t._v(" "),s("td",{staticStyle:{"--size":"0.6"}},[s("span",{staticClass:"data"},[t._v(" 60 ")])])]),t._v(" "),s("tr",[s("th",{attrs:{scope:"row"}},[t._v(" 2019 ")]),t._v(" "),s("td",{staticStyle:{"--size":"0.8"}},[s("span",{staticClass:"data"},[t._v(" 80 ")])])]),t._v(" "),s("tr",[s("th",{attrs:{scope:"row"}},[t._v(" 2020 ")]),t._v(" "),s("td",{staticStyle:{"--size":"1.0"}},[s("span",{staticClass:"data"},[t._v(" 100 ")])])])])])]},proxy:!0}])})],1)}),[],!1,null,null,null);s.default=n.exports}}]);