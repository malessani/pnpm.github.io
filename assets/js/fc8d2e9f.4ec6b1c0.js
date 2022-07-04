"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2456],{9613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),d=s(n),k=l,u=d["".concat(p,".").concat(k)]||d[k]||c[k]||i;return n?a.createElement(u,o(o({ref:t},m),{},{components:n})):a.createElement(u,o({ref:t},m))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=d;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:l,o[1]=r;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9490:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>k,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(2848),l=n(9213),i=(n(9496),n(9613)),o=["components"],r={id:"pnpmfile",title:".pnpmfile.cjs"},p=void 0,s={unversionedId:"pnpmfile",id:"version-7.x/pnpmfile",title:".pnpmfile.cjs",description:"pnpm lets you hook directly into the installation process via special functions",source:"@site/versioned_docs/version-7.x/pnpmfile.md",sourceDirName:".",slug:"/pnpmfile",permalink:"/pnpmfile",draft:!1,editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/docs/pnpmfile.md",tags:[],version:"7.x",frontMatter:{id:"pnpmfile",title:".pnpmfile.cjs"},sidebar:"version-7.x/docs",previous:{title:"pnpm-workspace.yaml",permalink:"/pnpm-workspace_yaml"},next:{title:"Workspace",permalink:"/workspaces"}},m={},c=[{value:"Hooks",id:"hooks",level:2},{value:"TL;DR",id:"tldr",level:3},{value:"<code>hooks.readPackage(pkg, context): pkg | Promise&lt;pkg&gt;</code>",id:"hooksreadpackagepkg-context-pkg--promisepkg",level:3},{value:"Arguments",id:"arguments",level:4},{value:"Usage",id:"usage",level:4},{value:"Known limitations",id:"known-limitations",level:4},{value:"<code>hooks.afterAllResolved(lockfile, context): lockfile | Promise&lt;lockfile&gt;</code>",id:"hooksafterallresolvedlockfile-context-lockfile--promiselockfile",level:3},{value:"Arguments",id:"arguments-1",level:4},{value:"Usage example",id:"usage-example",level:4},{value:"Known Limitations",id:"known-limitations-1",level:4},{value:"Related Configuration",id:"related-configuration",level:2},{value:"ignore-pnpmfile",id:"ignore-pnpmfile",level:3},{value:"pnpmfile",id:"pnpmfile",level:3},{value:"global-pnpmfile",id:"global-pnpmfile",level:3}],d={toc:c};function k(e){var t=e.components,n=(0,l.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"pnpm lets you hook directly into the installation process via special functions\n(hooks). Hooks can be declared in a file called ",(0,i.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs"),"."),(0,i.kt)("p",null,"By default, ",(0,i.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," should be located in the same directory as the\nlockfile. For instance, in a ",(0,i.kt)("a",{parentName:"p",href:"/workspaces"},"workspace")," with a shared lockfile,\n",(0,i.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," should be in the root of the monorepo."),(0,i.kt)("h2",{id:"hooks"},"Hooks"),(0,i.kt)("h3",{id:"tldr"},"TL;DR"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Hook Function"),(0,i.kt)("th",{parentName:"tr",align:null},"Process"),(0,i.kt)("th",{parentName:"tr",align:null},"Uses"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"hooks.readPackage(pkg, context): pkg")),(0,i.kt)("td",{parentName:"tr",align:null},"Called after pnpm parses the dependency's package manifest"),(0,i.kt)("td",{parentName:"tr",align:null},"Allows you to mutate a dependency's ",(0,i.kt)("inlineCode",{parentName:"td"},"package.json"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"hooks.afterAllResolved(lockfile, context): lockfile")),(0,i.kt)("td",{parentName:"tr",align:null},"Called after the dependencies have been resolved."),(0,i.kt)("td",{parentName:"tr",align:null},"Allows you to mutate the lockfile.")))),(0,i.kt)("h3",{id:"hooksreadpackagepkg-context-pkg--promisepkg"},(0,i.kt)("inlineCode",{parentName:"h3"},"hooks.readPackage(pkg, context): pkg | Promise<pkg>")),(0,i.kt)("p",null,"Allows you to mutate a dependency's ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," after parsing and prior to\nresolution. These mutations are not saved to the filesystem, however, they will\naffect what gets resolved in the lockfile and therefore what gets installed."),(0,i.kt)("p",null,"Note that you will need to delete the ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," if you have already\nresolved the dependency you want to modify."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you need changes to ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," saved to the filesystem, you need to use the ",(0,i.kt)("a",{parentName:"p",href:"/cli/patch"},(0,i.kt)("inlineCode",{parentName:"a"},"pnpm patch"))," command and patch the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file.\nThis might be useful if you want to remove the ",(0,i.kt)("inlineCode",{parentName:"p"},"bin")," field of a dependency for instance."))),(0,i.kt)("h4",{id:"arguments"},"Arguments"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pkg")," - The manifest of the package. Either the response from the registry or\nthe ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json")," content."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"context")," - Context object for the step. Method ",(0,i.kt)("inlineCode",{parentName:"li"},"#log(msg)")," allows you to use\na debug log for the step.")),(0,i.kt)("h4",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Example ",(0,i.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," (changes the dependencies of a dependency):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function readPackage(pkg, context) {\n  // Override the manifest of foo@1.x after downloading it from the registry\n  if (pkg.name === 'foo' && pkg.version.startsWith('1.')) {\n    // Replace bar@x.x.x with bar@2.0.0\n    pkg.dependencies = {\n      ...pkg.dependencies,\n      bar: '^2.0.0'\n    }\n    context.log('bar@1 => bar@2 in dependencies of foo')\n  }\n  \n  // This will change any packages using baz@x.x.x to use baz@1.2.3\n  if (pkg.dependencies.baz) {\n    pkg.dependencies.baz = '1.2.3';\n  }\n  \n  return pkg\n}\n\nmodule.exports = {\n  hooks: {\n    readPackage\n  }\n}\n")),(0,i.kt)("h4",{id:"known-limitations"},"Known limitations"),(0,i.kt)("p",null,"Removing the ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts")," field from a dependency's manifest via ",(0,i.kt)("inlineCode",{parentName:"p"},"readPackage")," will\nnot prevent pnpm from building the dependency. When building a dependency, pnpm\nreads the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," of the package from the package's archive, which is not\naffected by the hook. In order to ignore a package's build, use the\n",(0,i.kt)("a",{parentName:"p",href:"/package_json#pnpmneverbuiltdependencies"},"pnpm.neverBuiltDependencies")," field."),(0,i.kt)("h3",{id:"hooksafterallresolvedlockfile-context-lockfile--promiselockfile"},(0,i.kt)("inlineCode",{parentName:"h3"},"hooks.afterAllResolved(lockfile, context): lockfile | Promise<lockfile>")),(0,i.kt)("p",null,"Allows you to mutate the lockfile output before it is serialized."),(0,i.kt)("h4",{id:"arguments-1"},"Arguments"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lockfile")," - The lockfile resolutions object that is serialized to\n",(0,i.kt)("inlineCode",{parentName:"li"},"pnpm-lock.yaml"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"context")," - Context object for the step. Method ",(0,i.kt)("inlineCode",{parentName:"li"},"#log(msg)")," allows you to use\na debug log for the step.")),(0,i.kt)("h4",{id:"usage-example"},"Usage example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title=".pnpmfile.cjs"',title:'".pnpmfile.cjs"'},"function afterAllResolved(lockfile, context) {\n  // ...\n  return lockfile\n}\n\nmodule.exports = {\n  hooks: {\n    afterAllResolved\n  }\n}\n")),(0,i.kt)("h4",{id:"known-limitations-1"},"Known Limitations"),(0,i.kt)("p",null,"There are none - anything that can be done with the lockfile can be modified via\nthis function, and you can even extend the lockfile's functionality."),(0,i.kt)("h2",{id:"related-configuration"},"Related Configuration"),(0,i.kt)("h3",{id:"ignore-pnpmfile"},"ignore-pnpmfile"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," will be ignored. Useful together with ",(0,i.kt)("inlineCode",{parentName:"p"},"--ignore-scripts")," when you\nwant to make sure that no script gets executed during install."),(0,i.kt)("h3",{id:"pnpmfile"},"pnpmfile"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},".pnpmfile.cjs")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"path")),(0,i.kt)("li",{parentName:"ul"},"Example: ",(0,i.kt)("strong",{parentName:"li"},".pnpm/.pnpmfile.cjs"))),(0,i.kt)("p",null,"The location of the local pnpmfile."),(0,i.kt)("h3",{id:"global-pnpmfile"},"global-pnpmfile"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"null")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"path")),(0,i.kt)("li",{parentName:"ul"},"Example: ",(0,i.kt)("strong",{parentName:"li"},"~/.pnpm/global_pnpmfile.cjs"))),(0,i.kt)("p",null,"The location of a global pnpmfile. A global pnpmfile is used by all projects\nduring installation."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"It is recommended to use local pnpmfiles. Only use a global pnpmfile\nif you use pnpm on projects that don't use pnpm as the primary package manager."))))}k.isMDXComponent=!0}}]);