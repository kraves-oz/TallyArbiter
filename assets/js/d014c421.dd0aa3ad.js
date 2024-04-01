"use strict";(self.webpackChunktallyarbiter_docs=self.webpackChunktallyarbiter_docs||[]).push([[573],{8111:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var i=o(5893),t=o(1151);const n={sidebar_position:2},r="Sources",l={id:"usage/sections/sources",title:"Sources",description:"Sources represent all of the tally data that is generated. This is usually your video switcher or mixing software. Multiple sources can be added and they can all be different types.",source:"@site/docs/usage/sections/sources.md",sourceDirName:"usage/sections",slug:"/usage/sections/sources",permalink:"/TallyArbiter/docs/usage/sections/sources",draft:!1,unlisted:!1,editUrl:"https://github.com/josephdadams/TallyArbiter/edit/master/docs/docs/usage/sections/sources.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Devices",permalink:"/TallyArbiter/docs/usage/sections/devices"},next:{title:"Remote Tally Viewing (Listener Clients)",permalink:"/TallyArbiter/docs/usage/sections/listener-clients"}},a={},d=[{value:"TSL 3.1 UDP/TCP",id:"tsl-31-udptcp",level:2},{value:"Blackmagic ATEM",id:"blackmagic-atem",level:2},{value:"Blackmagic VideoHub",id:"blackmagic-videohub",level:2},{value:"OBS Studio",id:"obs-studio",level:2},{value:"StudioCoast VMix",id:"studiocoast-vmix",level:2},{value:"Roland Smart Tally",id:"roland-smart-tally",level:2},{value:"Roland VR-50HD-MKII",id:"roland-vr-50hd-mkii",level:2},{value:"Ross Carbonite Models",id:"ross-carbonite-models",level:2},{value:"Newtek Tricaster",id:"newtek-tricaster",level:2},{value:"Open Sound Control (OSC)",id:"open-sound-control-osc",level:2},{value:"Panasonic AV-HS410",id:"panasonic-av-hs410",level:2},{value:"Analog Way Livecore Image Processors",id:"analog-way-livecore-image-processors",level:2}];function c(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"sources",children:"Sources"}),"\n",(0,i.jsx)(s.p,{children:"Sources represent all of the tally data that is generated. This is usually your video switcher or mixing software. Multiple sources can be added and they can all be different types."}),"\n",(0,i.jsx)(s.p,{children:"The following source types are supported:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"TSL 3.1/5.0 UDP/TCP (Ross switchers, Streamstar, FOR-A, etc. - any device that uses the TSL UMD protocol)"}),"\n",(0,i.jsx)(s.li,{children:"Blackmagic ATEM"}),"\n",(0,i.jsx)(s.li,{children:"Blackmagic VideoHub"}),"\n",(0,i.jsx)(s.li,{children:"OBS Studio"}),"\n",(0,i.jsx)(s.li,{children:"StudioCoast VMix"}),"\n",(0,i.jsx)(s.li,{children:"Roland Smart Tally"}),"\n",(0,i.jsx)(s.li,{children:"Roland VR-50HD-MKII"}),"\n",(0,i.jsx)(s.li,{children:"Ross Carbonite/Carbonite Black/Carbonite Black Solo/Carbonite Ultra/Graphite"}),"\n",(0,i.jsx)(s.li,{children:"Newtek Tricaster"}),"\n",(0,i.jsx)(s.li,{children:"Open Sound Control (OSC)"}),"\n",(0,i.jsx)(s.li,{children:"Panasonic AV-HS410"}),"\n",(0,i.jsx)(s.li,{children:"Analog Way Livecore Image Processors"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"When you add a source and the connection to the tally source (video switcher, software, etc.) is successfully made, the source will be green. If there is an error, the source will be red. Look at the logs for more error information."}),"\n",(0,i.jsx)(s.h2,{id:"tsl-31-udptcp",children:"TSL 3.1 UDP/TCP"}),"\n",(0,i.jsx)(s.p,{children:"Your switcher or service that uses this protocol must be configured to send the data to Tally Arbiter at the port you specify."}),"\n",(0,i.jsx)(s.h2,{id:"blackmagic-atem",children:"Blackmagic ATEM"}),"\n",(0,i.jsx)(s.p,{children:"You will need the IP address of the ATEM. The ATEM can only have 5 simultaneous connections, so you may need to disconnect another connection in order for Tally Arbiter to connect to the ATEM."}),"\n",(0,i.jsx)(s.h2,{id:"blackmagic-videohub",children:"Blackmagic VideoHub"}),"\n",(0,i.jsx)(s.p,{children:"You will need the IP address of the VideoHub. You can choose to have any destination be configured as a preview bus, program bus, or both. Enter multiple destination routes by separating them with commas."}),"\n",(0,i.jsx)(s.h2,{id:"obs-studio",children:"OBS Studio"}),"\n",(0,i.jsxs)(s.p,{children:["For OBS Studio v27 (or older) the ",(0,i.jsx)(s.code,{children:"obs-websockets"})," plugin must be installed and configured in order for Tally Arbiter to connect. You can get the plugin here: ",(0,i.jsx)(s.a,{href:"https://github.com/Palakis/obs-websocket/releases",children:"https://github.com/Palakis/obs-websocket/releases"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["For OBS Studio v28 and later is ",(0,i.jsx)(s.code,{children:"obs-websockets"})," included with OBS Studio. Note that the included ",(0,i.jsx)(s.code,{children:"obs-websockets"})," in OBS Studio uses port 4455. This will cause a port conflict with TallyArbiter. In OBS Studion can an alternative port be configured in Tools -> WebSocket Server Settings. An alternative is to re-configure Tally Aribiter with another port by editing the ",(0,i.jsx)(s.a,{href:"/TallyArbiter/docs/usage/control-interface",children:"config file"}),"."]}),"\n",(0,i.jsx)(s.p,{children:"You will need to supply the IP address, port, and password configured in the OBS Websockets plugin."}),"\n",(0,i.jsx)(s.h2,{id:"studiocoast-vmix",children:"StudioCoast VMix"}),"\n",(0,i.jsx)(s.p,{children:"You will need the IP address of the computer running VMix."}),"\n",(0,i.jsx)(s.h2,{id:"roland-smart-tally",children:"Roland Smart Tally"}),"\n",(0,i.jsx)(s.p,{children:"You will need the IP address of the Roland switcher."}),"\n",(0,i.jsx)(s.h2,{id:"roland-vr-50hd-mkii",children:"Roland VR-50HD-MKII"}),"\n",(0,i.jsx)(s.p,{children:"You will need the IP address of the Roland switcher."}),"\n",(0,i.jsx)(s.h2,{id:"ross-carbonite-models",children:"Ross Carbonite Models"}),"\n",(0,i.jsx)(s.p,{children:'You will need the IP address of the Ross Carbonite switcher. Your Carbonite must be configured to send the data to Tally Arbiter at the port you specify. All Ross products use the TSL 3.1/5.0 protocols, however this specific source type allows you to process tally information by specific supported busses (ME1, MME1, Auxes, etc.) regardless of the "OnAir" setting that is configured on the Carbonite itself.'}),"\n",(0,i.jsx)(s.h2,{id:"newtek-tricaster",children:"Newtek Tricaster"}),"\n",(0,i.jsx)(s.p,{children:"You will need the IP address of the Tricaster."}),"\n",(0,i.jsx)(s.h2,{id:"open-sound-control-osc",children:"Open Sound Control (OSC)"}),"\n",(0,i.jsx)(s.p,{children:"Incoming OSC data can be used to trigger device tally states. Configure the port as desired."}),"\n",(0,i.jsx)(s.p,{children:"OSC paths must be one of the following:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"/tally/preview_on"}),": Puts the device in Preview mode."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"/tally/preview_off"}),": Turns off Preview mode for the device."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"/tally/program_on"}),": Puts the device in Program mode."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"/tally/program_off"}),": Turns off Program mode for the device."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"/tally/previewprogram_on"}),": Puts the device in both Preview and Program mode."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"/tally/previewprogram_off"}),": Turns off both Preview and Program Program mode for the device."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"The device source address should be sent as an integer or a string. Send one argument of any type (integer, float, or string). If you send multiple arguments, they will be ignored."}),"\n",(0,i.jsx)(s.h2,{id:"panasonic-av-hs410",children:"Panasonic AV-HS410"}),"\n",(0,i.jsx)(s.p,{children:"You will need the IP address of the switcher."}),"\n",(0,i.jsx)(s.h2,{id:"analog-way-livecore-image-processors",children:"Analog Way Livecore Image Processors"}),"\n",(0,i.jsx)(s.p,{children:"You will need the IP address of the device, and the port (standard port is 10600)."})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,s,o)=>{o.d(s,{Z:()=>l,a:()=>r});var i=o(7294);const t={},n=i.createContext(t);function r(e){const s=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(n.Provider,{value:s},e.children)}}}]);