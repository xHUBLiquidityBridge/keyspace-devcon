(window["webpackJsonpkeyspace-test"]=window["webpackJsonpkeyspace-test"]||[]).push([[0],{1065:function(e,t){},1067:function(e,t){},1074:function(e,t){},1076:function(e,t){},1084:function(e,t){},1088:function(e,t){},1090:function(e,t){},1097:function(e,t){},1099:function(e,t){},1158:function(e,t){},1184:function(e,t){},1190:function(e,t){},1192:function(e,t){},1352:function(e,t){},1383:function(e,t){},1385:function(e,t){},1403:function(e,t){},1405:function(e,t){},1430:function(e,t){},1432:function(e,t){},1472:function(e,t){},1486:function(e,t){},1491:function(e,t){},1493:function(e,t){},1499:function(e,t){},1501:function(e,t){},1529:function(e,t,n){"use strict";n.r(t);var r=n(73),a=n(77),s=n(106),i=n(87),c=n(105),o=n(0),u=n.n(o),d=n(107),l=n.n(d),p=n(1543),f=n(3),h=n.n(f),m=n(27),g=n(28),b=n(59),y=n(2),v=n(80),w=n.n(v),S=n(165),k=n.n(S),P=n(356),x=n.n(P),O=n(652),j=n.n(O),E=n(56),K=n(193),G=n(708),M=G.ipfsStoreJSON,A=G.ipfsFetchJSONFromCID,C=function(e){return"IPFS location of my Keyspace identity: ".concat(e)},I=k.a.struct({public:k.a.String,private:k.a.String}),L=k.a.refinement(k.a.String,(function(e){return e.length>30}),"ipfsHash");function z(e,t){return F.apply(this,arguments)}function F(){return(F=Object(m.a)(h.a.mark((function e(t,n){var r,a,s,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getAddress();case 2:return r=e.sent,e.next=5,E.generateKey({userIds:[{address:r}],curve:"p256",passphrase:t});case 5:return a=e.sent,s=a.privateKeyArmored,i=a.publicKeyArmored,e.abrupt("return",I({private:s,public:i}));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e){var t=e.address,n=e.signature,r=e.ipfsKeyHash,a=e.message;return new Promise((function(e,s){return Promise.all([x()("".concat(K.SLS_PGP_URL,"/storeHash"),{method:"post",mode:"cors",body:JSON.stringify({address:t,signature:n,ipfsHash:r,message:a})})]).then((function(e){var t=Object(g.a)(e,1)[0];return t.ok||s(t.statusText),t.text()})).then((function(t){return e(t)})).catch((function(e){s(e)}))}))}var N=function(){function e(t){var n=t.signer,a=t.signedSeed,s=t.seed,i=t.onRequestSignedSeed,c=t.onGeneratedSignedSeed,o=t.onRequestPGPKeyPair,u=t.onGeneratedPGPKeyPair;if(Object(r.a)(this,e),!n)throw new Error("This keyspace implementation requires a valid ethers.js Signer");this.onRequestSignedSeed=i.bind(this),this.onGeneratedSignedSeed=c.bind(this),this.onRequestPGPKeyPair=o.bind(this),this.onGeneratedPGPKeyPair=u.bind(this),this.seed=s,this.signedSeed=a,this.signer=n,this.ipfsHashes={},this.pgpKeys={},this.initialized=this.init()}return Object(a.a)(e,[{key:"init",value:function(){var e=Object(m.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.signer.getAddress();case 2:return this.signerAddress=e.sent.toLowerCase(),this.seed=this.seed||(t=this.signerAddress,"I'm generating my encryption keys for AirSwap ".concat(t)),e.prev=4,e.next=7,this.getHashByAddress(this.signerAddress);case 7:return this.signerIPFSHash=e.sent,e.next=10,A(this.signerIPFSHash);case 10:this.signerPGPKey=e.sent,e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(4),console.log("ipfsHash for wallet not found"),e.abrupt("return",!0);case 17:return e.abrupt("return",!0);case 18:case"end":return e.stop()}var t}),e,this,[[4,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"createSignedSeed",value:function(){var e=Object(m.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.signer.signMessage(this.seed));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getHashByAddress",value:function(){var e=Object(m.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this,e.abrupt("return",x()("".concat(K.SLS_PGP_URL,"/getHashByAddress?").concat(j.a.stringify({address:t.toLowerCase(),network:4})),{method:"get",mode:"cors"}).then(function(){var e=Object(m.a)(h.a.mark((function e(r){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.ok){e.next=2;break}throw new Error(r.statusText);case 2:return e.t0=L,e.next=5,r.text();case 5:return e.t1=e.sent,a=(0,e.t0)(e.t1),n.ipfsHashes[t.toLowerCase()]=a,e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"fetchKeyByAddress",value:function(){var e=Object(m.a)(h.a.mark((function e(t){var n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.pgpKeys[t.toLowerCase()]){e.next=2;break}return e.abrupt("return",this.pgpKeys[t.toLowerCase()]);case 2:return e.next=4,this.getHashByAddress(t.toLowerCase());case 4:return n=e.sent,e.next=7,A(n);case 7:return r=e.sent,this.pgpKeys[t.toLowerCase()]=r,e.abrupt("return",r);case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"setUpPGP",value:function(){var e=Object(m.a)(h.a.mark((function e(){var t,n,r,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.initialized;case 2:if(!this.isPGPReady()){e.next=6;break}return this.onGeneratedSignedSeed(this.signedSeed),this.onGeneratedPGPKeyPair(this.signerPGPKey),e.abrupt("return",!0);case 6:if(this.signedSeed){e.next=20;break}return this.onRequestSignedSeed(this.seed),e.prev=8,e.next=11,this.createSignedSeed();case 11:this.signedSeed=e.sent,this.onGeneratedSignedSeed(this.signedSeed),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(8),e.abrupt("return",Promise.reject(e.t0));case 18:e.next=21;break;case 20:this.onGeneratedSignedSeed(this.signedSeed);case 21:if(this.signerPGPKey){e.next=66;break}return this.onRequestPGPKeyPair(this.signerAddress),e.prev=23,e.next=26,z(this.signedSeed,this.signer);case 26:t=e.sent,e.next=32;break;case 29:return e.prev=29,e.t1=e.catch(23),e.abrupt("return",Promise.reject(e.t1));case 32:return e.prev=32,e.t2=L,e.next=36,M(t);case 36:e.t3=e.sent,n=(0,e.t2)(e.t3),e.next=43;break;case 40:return e.prev=40,e.t4=e.catch(32),e.abrupt("return",Promise.reject("Could not connect to IPFS"));case 43:return r=C(n),e.prev=44,e.next=47,this.signer.signMessage(r);case 47:a=e.sent,e.next=53;break;case 50:return e.prev=50,e.t5=e.catch(44),e.abrupt("return",Promise.reject(e.t5));case 53:return e.prev=53,e.next=56,R({signature:a,message:r,ipfsKeyHash:n,address:this.signerAddress});case 56:this.onGeneratedPGPKeyPair(t),e.next=62;break;case 59:return e.prev=59,e.t6=e.catch(53),e.abrupt("return",Promise.reject(e.t6));case 62:this.signerPGPKey=t,this.signerIPFSHash=n,e.next=67;break;case 66:this.onGeneratedPGPKeyPair(this.signerPGPKey);case 67:return e.prev=67,e.next=70,this.fetchKeyByAddress(this.signerAddress);case 70:e.next=75;break;case 72:return e.prev=72,e.t7=e.catch(67),e.abrupt("return",Promise.reject(e.t7));case 75:return e.abrupt("return",this.isPGPReady());case 76:case"end":return e.stop()}}),e,this,[[8,15],[23,29],[32,40],[44,50],[53,59],[67,72]])})));return function(){return e.apply(this,arguments)}}()},{key:"encrypt",value:function(){var e=Object(m.a)(h.a.mark((function e(t,n){var r,a,s,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchKeyByAddress(n.toLowerCase());case 2:return r=e.sent,a=r.public,e.t0=g.a,e.next=7,E.key.readArmored(this.signerPGPKey.private);case 7:return e.t1=e.sent.keys,s=(0,e.t0)(e.t1,1),i=s[0],e.next=12,i.decrypt(this.signedSeed);case 12:return e.abrupt("return",new Promise(function(){var e=Object(m.a)(h.a.mark((function e(n,r){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=E,e.t1=E.message.fromText(t),e.next=4,E.key.readArmored(a);case 4:e.t2=e.sent.keys,e.t3=[i],e.t4={message:e.t1,publicKeys:e.t2,privateKeys:e.t3},e.t5=function(e){n(e.data)},e.t6=r,e.t0.encrypt.call(e.t0,e.t4).then(e.t5).catch(e.t6);case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()));case 13:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"decrypt",value:function(){var e=Object(m.a)(h.a.mark((function e(t,n){var r,a,s,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchKeyByAddress(n.toLowerCase());case 2:return r=e.sent,a=r.public,e.t0=g.a,e.next=7,E.key.readArmored(this.signerPGPKey.private);case 7:return e.t1=e.sent.keys,s=(0,e.t0)(e.t1,1),i=s[0],e.next=12,i.decrypt(this.signedSeed);case 12:return e.abrupt("return",new Promise(function(){var e=Object(m.a)(h.a.mark((function e(n,r){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=E,e.next=3,E.message.readArmored(t);case 3:return e.t1=e.sent,e.next=6,E.key.readArmored(a);case 6:e.t2=e.sent.keys,e.t3=[i],e.t4={message:e.t1,publicKeys:e.t2,privateKeys:e.t3},e.t5=function(e){n(e.data)},e.t6=r,e.t0.decrypt.call(e.t0,e.t4).then(e.t5).catch(e.t6);case 12:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()));case 13:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"sign",value:function(){var e=Object(m.a)(h.a.mark((function e(t){var n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setUpPGP();case 2:return e.next=4,E.key.readArmored(this.signerPGPKey.private);case 4:return n=e.sent.keys[0],e.next=7,n.decrypt(this.signedSeed);case 7:return e.next=9,E.sign({message:E.cleartext.fromText(t),privateKeys:[n]}).then((function(e){return e.data}));case 9:return r=e.sent,e.abrupt("return",r);case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"validate",value:function(){var e=Object(m.a)(h.a.mark((function e(t,n){var r,a,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchKeyByAddress(n.toLowerCase());case 2:return r=e.sent,a=r.public,e.t0=E,e.next=7,E.cleartext.readArmored(t);case 7:return e.t1=e.sent,e.next=10,E.key.readArmored(a);case 10:return e.t2=e.sent.keys,e.t3={message:e.t1,publicKeys:e.t2},e.next=14,e.t0.verify.call(e.t0,e.t3);case 14:return s=e.sent,e.abrupt("return",w.a.get(s,"signatures.0.valid"));case 16:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"isPGPReady",value:function(){return this.signedSeed&&this.signerIPFSHash&&this.signerPGPKey}}]),e}(),J=n(359),H=n(1532),q=n(1551),U=n(1550),B=n(1542),D=n(195),T=n(1533);function _(){var e=Object(b.a)(["\n  //background: #2b71ff;\n  display: inline-block;\n  //color: white;\n  padding: 10px;\n  border-radius: 40px;\n  width: auto;\n  text-align: center;\n  width: 300px;\n"]);return _=function(){return e},e}var W=Object(y.default)(T.a)(_()),V=n(365),X=n(99),Q=n(109),Y=n.n(Q),Z=n(1549),$=n(1548),ee=n(1547),te=n(1546),ne=n(1540),re=n(1544),ae=n(1545),se=n(366),ie=n.n(se),ce="QmXG8yk8UJjMT6qtE2zSxzz3U7z5jSYRgVWLCUFqAVnByM",oe=function(){function e(t,n){Object(r.a)(this,e),this.node=new ie.a({repo:"./ipfs",EXPERIMENTAL:{pubsub:!0},relay:{enabled:!0,hop:{enabled:!0,active:!0}},config:{Addresses:{Swarm:["/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star"]}}}),this.node.on("ready",this._init.bind(this)),this.onNewMessage=n,this.onReady=t}return Object(a.a)(e,[{key:"_init",value:function(){var e=Object(m.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.node.pubsub.subscribe(ce,this.handleMessageReceived.bind(this));case 2:this.node.libp2p.on("peer:connect",this.handlePeerConnected.bind(this)),this.onReady();case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleMessageReceived",value:function(e){var t=e.data.toString();this.onNewMessage(t),console.log("msg received",t)}},{key:"getIPFSSwarmPeers",value:function(){var e=Object(m.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.node.swarm.peers());case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"connectToPeer",value:function(){var e=Object(m.a)(h.a.mark((function e(t){var n,r=arguments;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:"/p2p-circuit/ipfs/",e.prev=1,e.next=4,this.node.swarm.connect("".concat(n).concat(t));case 4:e.next=10;break;case 6:throw e.prev=6,e.t0=e.catch(1),e.t0;case 10:case"end":return e.stop()}}),e,this,[[1,6]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handlePeerConnected",value:function(e){e.id.toB58String()}},{key:"sendMessage",value:function(){var e=Object(m.a)(h.a.mark((function e(t){var n,r,a,s=arguments;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:ce,e.prev=1,r=JSON.stringify(t),a=ie.a.Buffer(r),e.next=6,this.node.pubsub.publish(n,a);case 6:e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(1),e.t0;case 11:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()}]),e}();function ue(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function de(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ue(n,!0).forEach((function(t){Object(V.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ue(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function le(){var e=Object(b.a)(["\n margin-bottom: 5px;\n"]);return le=function(){return e},e}function pe(){var e=Object(b.a)(["\n position: fixed;\n left: 0px;\n bottom: 0px;\n width: 100vw;\n background: white;\n padding: 5px 20px 20px 20px;\n"]);return pe=function(){return e},e}function fe(){var e=Object(b.a)(["\n  margin-bottom: 300px;\n"]);return fe=function(){return e},e}function he(){var e=Object(b.a)(["\n  //height: calc(100vh - 182px)\n"]);return he=function(){return e},e}function me(){var e=Object(b.a)(["\n  height: calc(100vh - 200px);\n  //position: absolute;\n"]);return me=function(){return e},e}function ge(){var e=Object(b.a)(["\n    position: relative;\n    top: -3px;\n"]);return ge=function(){return e},e}function be(){var e=Object(b.a)(["\n  margin: 0 13px;\n"]);return be=function(){return e},e}function ye(){var e=Object(b.a)(["\n  margin-bottom: 10px;\n"]);return ye=function(){return e},e}function ve(){var e=Object(b.a)(["\n  border-radius: 15px;\n  padding: 0 15px;\n  overflow: hidden;\n"]);return ve=function(){return e},e}var we=function(e){return{type:"introduction",from:e.from,nickname:e.nickname}},Se=function(e){return{type:"requestIntroductions",from:e.from}},ke=function(e){var t=e.message;return{type:"message",from:e.from,to:e.to,message:t}},Pe=Object(y.default)(H.a)(ve()),xe=Object(y.default)(H.a)(ye()),Oe=Object(y.default)(Z.a)(be()),je=Object(y.default)(U.a)(ge()),Ee=function(e){var t=e.from,n=e.to,r=e.message,a=e.nicknames;return u.a.createElement(xe,null,u.a.createElement(H.a,{direction:"row"},u.a.createElement(Oe,{target:"_blank",size:"xsmall",href:"https://rinkeby.etherscan.io/address/".concat(t),primary:!0,label:a[t]||t}),n?u.a.createElement(u.a.Fragment,null,u.a.createElement(je,null,"\u2192")," ",u.a.createElement(Oe,{size:"xsmall",href:"https://rinkeby.etherscan.io/address/".concat(n),primary:!0,label:a[n]||n})):null),u.a.createElement(Pe,{background:"light-3"},u.a.createElement(q.a,{size:"small"},r)))},Ke=Object(y.default)(H.a)(me()),Ge=Object(y.default)(H.a)(he()),Me=Object(y.default)(H.a)(fe()),Ae=Object(y.default)(H.a)(pe()),Ce=Object(y.default)($.a)(le()),Ie=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={peers:[],selectedPeers:[],messages:[],myMessages:[],newMessage:"",nicknames:{},discoveryMessages:[]},n}return Object(c.a)(t,e),Object(a.a)(t,[{key:"componentWillUnmount",value:function(){}},{key:"componentDidMount",value:function(){var e=this,t=this.props.address;this.broadcaster=new oe((function(){e.broadcaster.sendMessage(Se({from:t})),window.setTimeout((function(){return e.broadcaster.sendMessage(Se({from:t}))}),5e3),window.setTimeout((function(){return e.broadcaster.sendMessage(Se({from:t}))}),1e4),window.setTimeout((function(){return e.broadcaster.sendMessage(Se({from:t}))}),15e3),window.setInterval((function(){return e.broadcaster.sendMessage(Se({from:t}))}),6e4)}),(function(n){var r=JSON.parse(n);return"requestIntroductions"===r.type?(e.broadcaster.sendMessage(we({from:t,nickname:e.state.nicknames[t]})),void e.setState({discoveryMessages:[].concat(Object(X.a)(e.state.discoveryMessages),[r])})):"introduction"===r.type?(e.addIntroduction(r.from),r.nickname&&e.setState({nicknames:de(Object(V.a)({},r.from,r.nickname),e.state.nicknames)}),void e.setState({discoveryMessages:[].concat(Object(X.a)(e.state.discoveryMessages),[r])})):("message"===r.type&&r.to===t&&e.decryptMessage(r),void e.setState({messages:[].concat(Object(X.a)(e.state.messages),[r])}))}))}},{key:"addIntroduction",value:function(e){var t=this.state,n=t.peers,r=t.selectedPeers;w.a.includes(n,e.toLowerCase())||this.setState({selectedPeers:[].concat(Object(X.a)(r),[e.toLowerCase()])});var a=w.a.uniq([].concat(Object(X.a)(n),[e.toLowerCase()]));this.setState({peers:a})}},{key:"decryptMessage",value:function(){var e=Object(m.a)(h.a.mark((function e(t){var n,r,a,s,i,c,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.from,r=t.message,a=this.props.keySpace,s=this.state.myMessages,e.next=5,a.decrypt(r,n.toLowerCase());case 5:i=e.sent,c={from:n,message:i},o=[].concat(Object(X.a)(s),[c]),this.setState({myMessages:o});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"sendMessage",value:function(){var e=this,t=this.state,n=t.selectedPeers,r=t.newMessage,a=this.props,s=a.keySpace,i=a.address;n.map(function(){var t=Object(m.a)(h.a.mark((function t(n){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.encrypt(r,n.toLowerCase());case 2:a=t.sent,e.broadcaster.sendMessage(ke({from:i,to:n.toLowerCase(),message:a}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),this.setState({newMessage:""})}},{key:"togglePeerInclusion",value:function(e){var t=this.state.selectedPeers;w.a.includes(t,e)?this.setState({selectedPeers:w.a.without(t,e)}):this.setState({selectedPeers:[].concat(Object(X.a)(t),[e])})}},{key:"renderMessages",value:function(){var e=this.state,t=e.messages,n=e.myMessages,r=e.discoveryMessages,a=e.nicknames;return u.a.createElement(Me,{fill:"horizontal",flex:{grow:1}},u.a.createElement(ee.a,null,u.a.createElement(te.a,{title:Y()()?"Chat (".concat(n.length,")"):"My Decrypted Chat (".concat(n.length,")")},u.a.createElement(Ge,{pad:"medium",overflow:"scroll"},n.map((function(e){var t=e.from,n=e.message;return u.a.createElement(Ee,Object.assign({from:t,message:n},{nicknames:a}))})))),u.a.createElement(te.a,{title:Y()()?"PubSub (".concat(t.length,")"):"Encrypted PubSub Stream (".concat(t.length,")")},u.a.createElement(Ge,{pad:"medium",overflow:"scroll"},t.map((function(e){var t=e.from,n=e.to,r=e.message;return u.a.createElement(Ee,Object.assign({from:t,to:n,message:r},{nicknames:a}))})))),u.a.createElement(te.a,{title:Y()()?"Peer (".concat(r.length,")"):"Peer Discovery Protocol (".concat(r.length,")")},u.a.createElement(Ge,{pad:"medium",overflow:"scroll"},Object(X.a)(r).reverse().slice(0,20).map((function(e){var t=e.from,n=e.to,r=e.type,s=e.nickname;return u.a.createElement(Ee,Object.assign({from:t,to:n,message:"".concat(r).concat(s?", nickname: ".concat(s):"")},{nicknames:a}))}))))))}},{key:"setNickname",value:function(){var e=window.prompt("Please enter your nickname"),t=this.props.address;this.broadcaster.sendMessage(we({from:t,nickname:e}))}},{key:"renderPeers",value:function(){var e=this,t=this.props.address,n=this.state,r=n.peers,a=n.selectedPeers,s=n.nicknames,i=Y()()?"Peers (".concat(r.length,") Selected (").concat(a.length,")"):"Known Peers (".concat(r.length,") Selected Peers (").concat(a.length,")");return u.a.createElement(ne.a,null,u.a.createElement(re.a,{label:i},u.a.createElement(H.a,{pad:"small",background:"light-2",overflow:"scroll"},r.map((function(n){var r=s[n]||n;return u.a.createElement(Ce,{checked:w.a.includes(a,n),label:n===t?u.a.createElement(U.a,null,r," ",u.a.createElement(Z.a,{label:"Set Nickname",onClick:function(){return e.setNickname()}})):u.a.createElement(U.a,null," ",r," "),disabled:n===t,onChange:function(){return e.togglePeerInclusion(n)}})})))))}},{key:"render",value:function(){var e=this,t=this.state,n=t.newMessage;t.peers;return u.a.createElement(Ke,null,this.renderMessages(),u.a.createElement(Ae,null,this.renderPeers(),u.a.createElement(ae.a,{placeholder:"Send a message to the workshop's IPFS PubSub topic",value:n,onChange:function(t){return e.setState({newMessage:t.target.value})},onKeyDown:function(t){"Enter"===t.key&&e.sendMessage()}}),u.a.createElement("br",null),u.a.createElement(W,{label:"Send Message",onClick:function(){e.sendMessage()}})))}}]),t}(u.a.Component);function Le(){var e=Object(b.a)(["\n  //background: #2b71ff;\n  display: inline-block;\n  //color: white;\n  padding: 10px;\n  border-radius: 40px;\n  width: auto;\n  text-align: center;\n"]);return Le=function(){return e},e}function ze(){var e=Object(b.a)(["\n  min-height: 100vh;\n"]);return ze=function(){return e},e}var Fe,Re,Ne=function(){return new J.ethers.providers.Web3Provider(window.ethereum).getSigner()},Je=function(e){var t=e.content,n=e.label;return u.a.createElement(H.a,null,u.a.createElement(H.a,{overflow:"scroll"},u.a.createElement(q.a,{size:"small"},n)),u.a.createElement(H.a,{pad:"small",background:"light-2",overflow:"scroll"},u.a.createElement(U.a,{size:"xsmall"},t)))},He=Object(y.default)(H.a)(ze()),qe=Object(y.default)(W)(Le()),Ue=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={stage:"initial",unsignedSeed:"I'm generating my KeySpace PGP key encryption password"},n}return Object(c.a)(t,e),Object(a.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.web3&&window.web3.eth.getAccounts((function(t,n){var r=Object(g.a)(n,1)[0];r&&Object(D.getSignedSeedForAddress)(r.toLowerCase())&&e.init()}))}},{key:"init",value:function(){var e=Object(m.a)(h.a.mark((function e(){var t,n,r,a=this,s=arguments;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("metamask"!==(t=s.length>0&&void 0!==s[0]?s[0]:"metamask")){e.next=15;break}return e.prev=2,e.next=5,window.ethereum.enable();case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(2),this.setState({stage:"keyspaceInitializationError",initializationError:"Web3 not detected"}),e.abrupt("return");case 11:this.setState({stage:"web3Enabled"}),Fe=Ne(),e.next=16;break;case 15:"newWallet"===t&&(this.setState({stage:"web3Enabled"}),Fe=J.ethers.Wallet.createRandom());case 16:return e.next=18,Fe.getAddress();case 18:return n=e.sent.toLowerCase(),this.setState({walletAddress:n}),r=Object(D.getSignedSeedForAddress)(n),Re=new N({signer:Fe,signedSeed:r,seed:this.state.unsignedSeed,onRequestSignedSeed:function(e){a.setState({unsignedSeed:e,stage:"waitingForSeedSignature"})},onGeneratedSignedSeed:function(e){Object(D.storeSignedSeedForAddress)({signedSeed:e,address:n}),a.setState({signedSeed:e,stage:"seedSigned"})},onRequestPGPKeyPair:function(e){a.setState({stage:"waitingPGPPairSignature"})},onGeneratedPGPKeyPair:function(e){a.setState({stage:"pgpPairGenerated",pgpKey:e})}}),e.prev=22,e.next=25,Re.setUpPGP();case 25:e.next=31;break;case 27:return e.prev=27,e.t1=e.catch(22),this.setState({stage:"keyspaceInitializationError",initializationError:e.t1}),e.abrupt("return");case 31:case"end":return e.stop()}}),e,this,[[2,7],[22,27]])})));return function(){return e.apply(this,arguments)}}()},{key:"renderUnsignedSeed",value:function(){var e=this.state.unsignedSeed;return e?u.a.createElement(Je,{label:"Unsigned Seed",content:e}):null}},{key:"renderSignedSeed",value:function(){var e=this.state.signedSeed;return e?u.a.createElement(Je,{label:"Signed Seed (PGP key encryption password)",content:e}):null}},{key:"renderPGPKey",value:function(){var e=this.state.pgpKey;return e?u.a.createElement(u.a.Fragment,null,u.a.createElement(Je,{label:"PGP Public Key",content:e.public.split("\\r\\n").map((function(e,t){return u.a.createElement("span",{key:t},e,u.a.createElement("br",null))}))}),u.a.createElement(Je,{label:"PGP Private Key",content:e.private.split("\\r\\n").map((function(e,t){return u.a.createElement("span",{key:t},e,u.a.createElement("br",null))}))})):null}},{key:"render",value:function(){var e=this,t=this.state,n=t.stage,r=t.initializationError,a=t.walletAddress,s=null,i=null;return"initial"===n&&(s=u.a.createElement(H.a,{direction:"row"},u.a.createElement(qe,{margin:"small",onClick:function(){return e.init("newWallet")},label:"Generate Temporary Wallet"}),u.a.createElement(qe,{margin:"small",onClick:function(){return e.init("metamask")},label:"Connect To Metamask"}))),"web3Enabled"===n&&(s=u.a.createElement(U.a,null,"Initializing KeySpace")),"waitingForSeedSignature"===n&&(s=u.a.createElement(U.a,null,"Initializing KeySpace, Sign to create your seed")),"waitingPGPPairSignature"===n&&(s=u.a.createElement(U.a,null,"Sign your generated PGP key pair to authenticate it")),"pgpPairGenerated"!==n||Y()()||(i=u.a.createElement(B.a,{label:"KeySpace is ready",dropAlign:{top:"bottom",right:"right"},dropContent:u.a.createElement(H.a,{pad:"medium",margin:"medium",border:{color:"brand",size:"small",side:"all"}},u.a.createElement(H.a,null,u.a.createElement(U.a,{size:"large"},"KeySpace Parameters")),this.renderUnsignedSeed(),this.renderSignedSeed(),this.renderPGPKey())})),"keyspaceInitializationError"===n&&(s=u.a.createElement(H.a,null,u.a.createElement(U.a,null,"Keyspace Initialization Error: ".concat(Object(D.formatErrorMessage)(r))),u.a.createElement(qe,{onClick:function(){return e.init()},label:"Retry"}))),u.a.createElement(H.a,null,u.a.createElement(H.a,{pad:"large",direction:"row",alignContent:"stretch",border:{color:"brand",size:"small",side:"bottom"}},u.a.createElement(H.a,{flex:{grow:1},direction:"row"},u.a.createElement(U.a,{size:Y()()?"medium":"xlarge"},"KeySpace Devcon5 Demo")),u.a.createElement(H.a,{direction:"row"},i)),u.a.createElement(He,{direction:"row",fill:"horizontal",pad:"medium"},u.a.createElement(H.a,{width:"100%"},"pgpPairGenerated"===n?u.a.createElement(Ie,{address:a,keySpace:Re}):u.a.createElement(H.a,{align:"center"},u.a.createElement(H.a,{margin:"medium"},u.a.createElement(U.a,null,"Connect a wallet and initialize Keyspace to use the IPFS pubsub chat.")),u.a.createElement(H.a,{margin:"medium"},s)))))}}]),t}(u.a.Component),Be={global:{font:{family:"Lato"}}},De=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return u.a.createElement(p.a,{full:!0,theme:Be},u.a.createElement(Ue,null))}}]),t}(u.a.Component),Te=document.getElementById("root");l.a.render(u.a.createElement(De,null),Te)},193:function(e,t){e.exports={SLS_PGP_URL:"https://pgp.development.airswap.io"}},195:function(e,t,n){var r=n(80);e.exports={formatErrorMessage:function(e){return r.isObject(e)&&e.message?e.message.split("\n")[0]:r.isString(e)?e:""},storeSignedSeedForAddress:function(e){var t=e.address,n=e.signedSeed,r=JSON.stringify({address:t,signedSeed:n});localStorage.setItem("signedSeed",r)},getSignedSeedForAddress:function(e){var t=localStorage.getItem("signedSeed");if(t){var n=JSON.parse(t);if(n.address===e)return n.signedSeed}}}},278:function(e,t){},494:function(e,t){},673:function(e,t,n){e.exports=n(1529)},708:function(e,t,n){"use strict";n.r(t),n.d(t,"ipfsStoreJSON",(function(){return g})),n.d(t,"ipfsFetchJSONFromCID",(function(){return v}));var r=n(3),a=n.n(r),s=n(27),i=n(80),c=n.n(i),o=n(357),u=n.n(o),d=n(358),l=n.n(d),p=n(193),f=new l.a({host:"ipfs.infura.io",port:5001,protocol:"https"}),h=new l.a({host:"ipfs.airswap.io",port:443,protocol:"https"}),m=function(e){var t="".concat(p.SLS_PGP_URL,"/storePinata");return u.a.post(t,e).then((function(e){return e.data.IpfsHash}))};function g(e){return b.apply(this,arguments)}function b(){return(b=Object(s.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.a.isString(t)?JSON.stringify(JSON.parse(t)):JSON.stringify(t),e.abrupt("return",new Promise((function(e,t){var r=0;h.add(n).then(e).catch((function(e){2===++r&&t(e)})),f.add(n).then(e).catch((function(e){2===++r&&t(e)})),m(JSON.parse(n))})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y=function(e){return u.a.get("https://cloudflare-ipfs.com/ipfs/".concat(e)).then((function(e){return JSON.stringify(e.data)}))};function v(e){return w.apply(this,arguments)}function w(){return(w=Object(s.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,n){if(t){var r=0;h.cat(t).then(e).catch((function(e){3===++r&&n(e)})),f.cat(t).then(e).catch((function(e){3===++r&&n(e)})),y(t).then(e).catch((function(e){3===++r&&n(e)}))}else e(void 0)}));case 2:return n=e.sent,e.abrupt("return",JSON.parse(n));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},834:function(e,t){},845:function(e,t){},859:function(e,t){},861:function(e,t){},955:function(e,t){},957:function(e,t){}},[[673,1,2]]]);
//# sourceMappingURL=main.eed1698a.chunk.js.map