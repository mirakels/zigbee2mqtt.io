"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[30674],{58171:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a={key:"v-d7850b4c",path:"/devices/MIR-HE200-TY.html",title:"TuYa MIR-HE200-TY control via MQTT",lang:"en-US",frontmatter:{title:"TuYa MIR-HE200-TY control via MQTT",description:"Integrate your TuYa MIR-HE200-TY via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2021-10-30T12:58:50.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Illuminance_lux (numeric)",slug:"illuminance-lux-numeric",children:[]},{level:3,title:"Presence (binary)",slug:"presence-binary",children:[]},{level:3,title:"Occupancy (binary)",slug:"occupancy-binary",children:[]},{level:3,title:"Motion_speed (numeric)",slug:"motion-speed-numeric",children:[]},{level:3,title:"Motion_direction (enum)",slug:"motion-direction-enum",children:[]},{level:3,title:"Radar_sensitivity (numeric)",slug:"radar-sensitivity-numeric",children:[]},{level:3,title:"Radar_scene (enum)",slug:"radar-scene-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/MIR-HE200-TY.md",git:{updatedTime:1648969716e3}}},72605:(e,t,i)=>{i.r(t),i.d(t,{default:()=>o});const a=(0,i(66252).uE)('<h1 id="tuya-mir-he200-ty" tabindex="-1"><a class="header-anchor" href="#tuya-mir-he200-ty" aria-hidden="true">#</a> TuYa MIR-HE200-TY</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>MIR-HE200-TY</td></tr><tr><td>Vendor</td><td>TuYa</td></tr><tr><td>Description</td><td>Human presence sensor</td></tr><tr><td>Exposes</td><td>illuminance_lux, presence, occupancy, motion_speed, motion_direction, radar_sensitivity, radar_scene, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/MIR-HE200-TY.jpg" alt="TuYa MIR-HE200-TY"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Factory resetting by pushing the &quot;Reset-Button&quot; longer than 5 seconds or by using Touchlink factory reset.</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="illuminance-lux-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-lux-numeric" aria-hidden="true">#</a> Illuminance_lux (numeric)</h3><p>Measured illuminance in lux. Value can be found in the published state on the <code>illuminance_lux</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="presence-binary" tabindex="-1"><a class="header-anchor" href="#presence-binary" aria-hidden="true">#</a> Presence (binary)</h3><p>Indicates whether the device detected presence. Value can be found in the published state on the <code>presence</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> presence is ON, if <code>false</code> OFF.</p><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary" aria-hidden="true">#</a> Occupancy (binary)</h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="motion-speed-numeric" tabindex="-1"><a class="header-anchor" href="#motion-speed-numeric" aria-hidden="true">#</a> Motion_speed (numeric)</h3><p>Speed of movement. Value can be found in the published state on the <code>motion_speed</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="motion-direction-enum" tabindex="-1"><a class="header-anchor" href="#motion-direction-enum" aria-hidden="true">#</a> Motion_direction (enum)</h3><p>direction of movement from the point of view of the radar. Value can be found in the published state on the <code>motion_direction</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>standing_still</code>, <code>moving_forward</code>, <code>moving_backward</code>.</p><h3 id="radar-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#radar-sensitivity-numeric" aria-hidden="true">#</a> Radar_sensitivity (numeric)</h3><p>sensitivity of the radar. Value can be found in the published state on the <code>radar_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;radar_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10</code>.</p><h3 id="radar-scene-enum" tabindex="-1"><a class="header-anchor" href="#radar-scene-enum" aria-hidden="true">#</a> Radar_scene (enum)</h3><p>presets for sensitivity for presence and movement. Value can be found in the published state on the <code>radar_scene</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;radar_scene&quot;: NEW_VALUE}</code>. The possible values are: <code>default</code>, <code>area</code>, <code>toilet</code>, <code>bedroom</code>, <code>parlour</code>, <code>office</code>, <code>hotel</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',22),d={},o=(0,i(83744).Z)(d,[["render",function(e,t){return a}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,a]of t)e[i]=a;return e}}}]);