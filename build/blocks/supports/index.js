!function(){"use strict";function e(){return e=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.apply(this,arguments)}var t=window.wp.element,n=window.wp.blocks,r=window.wp.blockEditor;(0,n.registerBlockType)("gutenberg-examples/example-03-editable-esnext",{apiVersion:2,title:"Example: Basic with block supports",icon:"universal-access-alt",category:"design",attributes:{content:{type:"string",source:"html",selector:"p"}},example:{attributes:{content:"Hello World"}},edit:n=>{const{attributes:{content:s},setAttributes:a,className:o}=n,c=(0,r.useBlockProps)();return(0,t.createElement)(r.RichText,e({},c,{tagName:"p",onChange:e=>{a({content:e})},value:s}))},save:n=>{const s=r.useBlockProps.save();return(0,t.createElement)(r.RichText.Content,e({},s,{tagName:"p",value:n.attributes.content}))}})}();