!function(){"use strict";var e=window.wp.element,t=window.wp.blocks,n=window.wp.richText,l=window.wp.blockEditor,o=window.wp.components;(0,n.registerFormatType)("my-custom-format/sample-output-2",{title:"Sample output 123",tagName:"span",className:null,edit:t=>{let{isActive:a,onChange:r,value:s}=t;return(0,e.createElement)(l.BlockControls,null,(0,e.createElement)(o.ToolbarGroup,null,(0,e.createElement)(o.ToolbarButton,{icon:"editor-code",title:"Sample output",onClick:()=>{r((0,n.toggleFormat)(s,{type:"my-custom-format/sample-output"}))},isActive:a})))}}),(0,n.registerFormatType)("my-custom-format/sample-output",{title:"Sample output",tagName:"samp",className:null,edit:t=>{let{isActive:o,onChange:a,value:r}=t;return(0,e.createElement)(l.RichTextToolbarButton,{icon:"editor-code",title:"Sample output",onClick:()=>{a((0,n.toggleFormat)(r,{type:"my-custom-format/sample-output"}))},isActive:o})}}),(0,t.registerBlockType)("gutenberg-examples/example-04-controls-esnext",{apiVersion:2,title:"Example: Controls (esnext)",icon:"universal-access-alt",category:"design",attributes:{content:{type:"string",source:"html",selector:"p"},alignment:{type:"string",default:"none"}},example:{attributes:{content:"Hello World",alignment:"right"}},edit:t=>{let{attributes:n,setAttributes:o}=t;return console.log(n),(0,e.createElement)("div",(0,l.useBlockProps)(),(0,e.createElement)(l.BlockControls,null,(0,e.createElement)(l.AlignmentToolbar,{value:n.alignment,onChange:e=>{o({alignment:void 0===e?"none":e})}})),(0,e.createElement)(l.RichText,{className:n.className,style:{textAlign:n.alignment},tagName:"p",onChange:e=>{o({content:e})},value:n.content}))},save:t=>{const n=l.useBlockProps.save();return(0,e.createElement)("div",n,(0,e.createElement)(l.RichText.Content,{className:`gutenberg-examples-align-${t.attributes.alignment}`,tagName:"p",value:t.attributes.content}))}})}();