(this["webpackJsonpmeme-in-a-giffy"]=this["webpackJsonpmeme-in-a-giffy"]||[]).push([[0],{31:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a(2),i=a.n(n),r=a(41),c=a.n(r),o=a(10),l=a(11),m=a(13),d=a(12),h=a(15),u=a(5),j=(a(31),a(26));a(48);j.a.initializeApp({apiKey:"AIzaSyAlgZj6El4zcWxBFVZITap4Sy_BB9fEsgk",authDomain:"meme-in-a-giffy-project6.firebaseapp.com",projectId:"meme-in-a-giffy-project6",storageBucket:"meme-in-a-giffy-project6.appspot.com",messagingSenderId:"1028861060339",appId:"1:1028861060339:web:0bf76cea4d32c4a2110386"});var p=j.a,b=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={headerText:"",subheaderText:""},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("header",{id:"header",children:[Object(s.jsxs)("div",{className:"container projects",children:[Object(s.jsx)("h1",{children:this.props.headerText}),Object(s.jsx)("div",{className:"overlay"})]}),Object(s.jsx)("h2",{children:this.props.subheaderText})]})}}]),a}(n.Component),x=a(27),f=a(18),g=a(17);f.b.add(g.a,g.b);var y=function(e){var t=e.topText,a=e.bottomText,n=e.tags,i=e.image,r=e.alt,c=e.likes,o=e.dislikes,l=e.totalVotes,m=e.upVoteHandler,d=e.propertyKey,h=e.downVoteHandler,u="".concat(n).replace(/[^a-zA-Z]/g," ").toLowerCase(),j="".concat(r).replace(/[^a-zA-Z]/g," ").toLowerCase(),p="".concat(t).replace(/[^a-zA-Z]/g," ").toLowerCase(),b="".concat(a).replace(/[^a-zA-Z]/g," ").toLowerCase();return Object(s.jsxs)("li",{className:"eachMemeStyleContainer ".concat(u," ").concat(j," ").concat(p," ").concat(b," "),children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{children:t}),Object(s.jsx)("img",{src:i,alt:j}),Object(s.jsx)("p",{children:a})]}),Object(s.jsxs)("div",{className:"voteButtons",children:[Object(s.jsx)("div",{children:Object(s.jsxs)("button",{className:"totalBtn",children:["Total ",l]})}),Object(s.jsxs)("div",{className:"buttonContainer",children:[Object(s.jsxs)("button",{className:"upVote","aria-label":"upvote this meme",onClick:function(){m(d,c,l)},children:[Object(s.jsx)("p",{className:"buttonText",children:c}),Object(s.jsx)(x.a,{icon:g.b})]}),Object(s.jsxs)("button",{className:"downVote","aria-label":"downvote this meme",onClick:function(){h(d,o,l)},children:[Object(s.jsx)("p",{className:"buttonText",children:o}),Object(s.jsx)(x.a,{icon:g.a})]})]})]})]})};f.b.add(g.a,g.b);var O=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleMemeInputChange=function(t){e.setState({userMemeSearch:t.target.value.toLowerCase()})},e.handleMemeSubmit=function(t){t.preventDefault();for(var a=document.getElementsByClassName("eachMemeStyleContainer"),s=0;s<a.length;s++)a[s].style.display="none";for(var n=document.getElementsByClassName("".concat(e.state.userMemeSearch)),i=0;i<n.length;i++)n[i].style.display="flex";document.getElementById("memeHeader").querySelector(".memeHeaderChange").innerHTML="".concat(e.state.userMemeSearch),e.setState({userMemeSearch:""}),document.getElementById("memeSearch").value=""},e.upVote=function(e,t,a){p.database().ref().child(e).update({memeLikes:t+1,memeTotalVotes:a+1})},e.downVote=function(e,t,a){p.database().ref().child(e).update({memeDislikes:t+1,memeTotalVotes:a-1})},e.state={ogMemeArray:[],userMemeSearch:""},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.database().ref(),p.database().ref().on("value",(function(t){var a=t.val(),s=[];for(var n in a){var i={propertyKey:n,topText:a[n].memeTopText,bottomText:a[n].memeBottomText,image:a[n].memeImage,alt:a[n].memeAltText,tags:a[n].memeTags,date:a[n].memeDate,likes:a[n].memeLikes,dislikes:a[n].memeDislikes,totalVotes:a[n].memeTotalVotes};s.push(i),s.sort((function(e,t){return new Date(t.date)-new Date(e.date)}))}e.setState({ogMemeArray:s})}))}},{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{className:"fillScreen",children:[Object(s.jsx)(b,{headerText:"Meme in a Giffy",subheaderText:""}),Object(s.jsxs)("section",{className:"wrapper",children:[Object(s.jsxs)("div",{className:"flexboxSearchGifs",children:[Object(s.jsxs)("form",{className:"flexbox searchGifForm",id:"memeSearchBar",onSubmit:this.handleMemeSubmit,children:[Object(s.jsx)("label",{htmlFor:"memeSearch",className:"srOnly",children:"Search for Meme:"}),Object(s.jsx)("input",{type:"text",id:"memeSearch",name:"userMemeSearch",placeholder:"Find Memes",required:!0,onChange:this.handleMemeInputChange}),Object(s.jsx)("button",{className:"glow-on-hover searchGifButton",children:"Search"})]}),Object(s.jsx)("div",{className:"viewMemesButtonContainer",children:Object(s.jsx)(h.b,{to:"/memecreator",children:Object(s.jsx)("button",{className:"glow-on-hover",type:"button",children:"Create New Meme"})})})]}),Object(s.jsxs)("h2",{id:"memeHeader",className:"gifHeader",children:[Object(s.jsx)("span",{className:"memeHeaderChange",children:"Most Recent"})," Memes"]}),Object(s.jsx)("ul",{className:"eachMemeStyle flexbox",children:this.state.ogMemeArray.map((function(t){return Object(s.jsx)(y,{propertyKey:t.propertyKey,topText:t.topText,bottomText:t.bottomText,image:t.image,alt:t.alt,tags:t.tags,likes:t.likes,dislikes:t.dislikes,totalVotes:t.totalVotes,upVoteHandler:e.upVote,downVoteHandler:e.downVote})}))})]})]})}}]),a}(n.Component),v=function(){return Object(s.jsx)("footer",{children:Object(s.jsxs)("p",{children:["\xa9"," | ",Object(s.jsx)("a",{href:"https://github.com/armontei",children:"Amanda Monteiro"})," | ",Object(s.jsx)("a",{href:"https://github.com/SarjeantDev",children:"Ben Sarjeant"})," | ",Object(s.jsx)("a",{href:"https://github.com/Hans-Christian",children:"Hans Christian Severino"})," | ",Object(s.jsx)("a",{href:"https://github.com/zahrapali",children:"Zahra Paliwalla"})," | "," @ ",Object(s.jsx)("a",{href:"https://junocollege.com/",children:"Juno College"})]})})},T=a(30),C=a.n(T),I=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleInputChangeTopText=function(t){e.setState({userTopText:t.target.value})},e.handleInputChangeBottomText=function(t){e.setState({userBottomText:t.target.value})},e.userGeneratedMemes=function(t){t.preventDefault();var a=p.database().ref(),s=document.getElementById("date").value=Date(),n=e.tags.value.split(/[\s,]+/),i={memeImage:e.props.gifUrlProps,memeAltText:e.props.gifAltProps,memeDate:s,memeTopText:e.topText.value,memeBottomText:e.bottomText.value,memeTags:n,memeLikes:e.state.likes,memeDislikes:e.state.dislikes,memeTotalVotes:e.state.total};e.topText.value="",e.bottomText.value="",e.tags.value="",a.push(i),e.setState({userMemes:i}),document.getElementById("selectedGif").style.display="none",document.getElementById("createMemeForm").style.display="none",document.getElementById("displayedGifsId").style.marginTop="20px",document.getElementById("searchGifId").style.display="flex",document.getElementById("postCreationMeme").style.display="flex"},e.hideCreateMemeSection=function(t){"createMemeSection"===t.target.id&&e.closeMemeSection()},e.closeMemeSection=function(){document.getElementById("createMemeSection").style.display="none",document.getElementById("header").style.display="block",document.getElementById("displayedGifsId").style.marginTop="20px",document.getElementById("searchGifId").style.display="flex"},e.clearMemeForm=function(){document.getElementById("selectedGif").style.display="none",document.getElementById("createMemeForm").style.display="none",document.getElementById("displayedGifsId").style.marginTop="20px",document.getElementById("searchGifId").style.display="flex",document.getElementById("postCreationMeme").style.display="block"},e.state={userMemes:"",userTopText:"",userBottomText:"",likes:0,dislikes:0,total:0},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(s.jsx)("div",{className:"createMemeSection",id:"createMemeSection",onClick:this.hideCreateMemeSection,children:Object(s.jsxs)("div",{className:"wrapperCreateMemePage",children:[Object(s.jsx)("div",{className:"buttonContainer",children:Object(s.jsx)("button",{className:"closeMemeButton",onClick:this.closeMemeSection,children:"X"})}),Object(s.jsxs)("div",{className:"gifAndForm",id:"gifAndForm",children:[Object(s.jsxs)("div",{className:"selectedGif",id:"selectedGif",children:[Object(s.jsx)("h5",{className:"memeText memeTextTop",children:this.state.userTopText}),Object(s.jsx)("img",{src:this.props.gifUrlProps,alt:this.props.gifAltProps}),Object(s.jsx)("h5",{className:"memeText memeTextBottom",children:this.state.userBottomText})]}),Object(s.jsxs)("div",{className:"postCreationMeme",id:"postCreationMeme",children:[Object(s.jsx)("p",{className:"creatingMemeText",children:"\u2699 Creating Your Meme Now \u2699"}),Object(s.jsx)(h.b,{to:"/search",children:Object(s.jsx)("button",{className:"glow-on-hover searchGifButton",type:"button",children:"View your Meme!"})})]}),Object(s.jsxs)("form",{action:"",onSubmit:this.userGeneratedMemes,className:"createMemeForm",id:"createMemeForm",children:[Object(s.jsx)("input",{id:"date",name:"date",className:"hiddenDate"}),Object(s.jsx)("label",{htmlFor:"topText",children:"Top Text"}),Object(s.jsx)("input",{type:"text",id:"topText",className:"userInput",required:!0,placeholder:"Top Text",maxLength:"30",ref:function(t){return e.topText=t},onChange:this.handleInputChangeTopText}),Object(s.jsx)("label",{htmlFor:"bottomText",children:"Bottom Text"}),Object(s.jsx)("input",{type:"text",id:"bottomText",className:"userInput",required:!0,placeholder:"Bottom Text",maxLength:"30",ref:function(t){return e.bottomText=t},onChange:this.handleInputChangeBottomText}),Object(s.jsx)("label",{htmlFor:"tags",children:"Tags"}),Object(s.jsx)("input",{type:"text",id:"tags",className:"userInput",required:!0,placeholder:"Separate tags by commas or spaces",ref:function(t){return e.tags=t}}),Object(s.jsx)("input",{type:"submit",className:"submit",value:"Submit!"})]})]})]})})}}]),a}(n.Component),S=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleInputChange=function(t){e.setState({userInput:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.giphyAPICall(e.state.userInput),document.getElementById("gifHeader").querySelector(".gifHeaderChange").innerHTML="".concat(e.state.userInput),e.setState({userInput:""}),document.getElementById("userGifSearch").value=""},e.giphyAPICall=function(t){C()({url:"https://api.giphy.com/v1/gifs/search",method:"GET",responseType:"json",params:{api_key:"AiDUd8ngqnIcqZ5dXnGV8r4Aymleu4wa",q:t,limit:50,rating:"g"}}).then((function(t){if(0===t.data.data.length){e.setState({displayedGifs:[{id:"123ABC",images:{downsized_large:{url:"https://media1.giphy.com/media/gfO3FcnL8ZK9wVgr6t/giphy.gif?\u20260f423ee6unrij1gzkfdf27jyfmh9v3oxbgftbq88ajrpq0&rid=giphy.gif"}}}]})}else e.setState({displayedGifs:t.data.data})}))},e.giphyTrendingAPICall=function(){C()({url:"https://api.giphy.com/v1/gifs/trending",method:"GET",responseType:"json",params:{api_key:"AiDUd8ngqnIcqZ5dXnGV8r4Aymleu4wa",limit:12,rating:"g"}}).then((function(t){e.setState({displayedGifs:t.data.data})}))},e.passUrl=function(t){null!=t.target.firstChild?e.setState({gifUrl:t.target.firstChild.src,gifAlt:t.target.firstChild.alt}):e.setState({gifUrl:t.target.src,gifAlt:t.target.alt}),document.getElementById("createMemeSection").style.display="flex",document.getElementById("selectedGif").style.display="flex",document.getElementById("createMemeForm").style.display="flex",document.getElementById("searchGifId").style.display="none",document.getElementById("header").style.display="none",document.getElementById("postCreationMeme").style.display="none",document.getElementById("displayedGifsId").style.marginTop=0},e.state={userInput:"",displayedGifs:[],gifUrl:[],gifAlt:[]},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.giphyTrendingAPICall()}},{key:"render",value:function(){var e=this;return Object(s.jsxs)(n.Fragment,{children:[Object(s.jsx)(b,{headerText:"Meme in a Giffy"}),Object(s.jsx)(I,{gifUrlProps:this.state.gifUrl,gifAltProps:this.state.gifAlt}),Object(s.jsxs)("section",{className:"wrapper",children:[Object(s.jsxs)("div",{className:"flexboxSearchGifs",id:"searchGifId",children:[Object(s.jsxs)("form",{onSubmit:this.handleSubmit,className:"flexbox searchGifForm",children:[Object(s.jsx)("label",{htmlFor:"userGifSearch",className:"srOnly",children:"Search for Gif:"}),Object(s.jsx)("input",{type:"text",id:"userGifSearch",name:"userGifSearch",placeholder:"Search Gifs",onChange:this.handleInputChange,required:!0}),Object(s.jsx)("button",{className:"glow-on-hover searchGifButton",children:"Find Gif"})]}),Object(s.jsx)("div",{className:"viewMemesButtonContainer",children:Object(s.jsx)(h.b,{to:"/search",children:Object(s.jsx)("button",{className:"glow-on-hover",type:"button",children:"View Created Memes"})})})]}),Object(s.jsxs)("h2",{id:"gifHeader",className:"gifHeader",children:[Object(s.jsx)("span",{className:"gifHeaderChange",children:"Trending"})," Gifs"]}),Object(s.jsx)("ul",{className:"gifs flexbox",id:"displayedGifsId",children:this.state.displayedGifs.map((function(t,a){return"123ABC"===t.id?Object(s.jsxs)("li",{tabIndex:a,className:"gifContainer noPointer",children:[Object(s.jsx)("p",{className:"noGifFoundText",children:"Sorry No GIFs found, search again!"}),Object(s.jsx)("img",{src:t.images.downsized_large.url,alt:t.title})]},t.id):Object(s.jsx)("li",{tabIndex:a,className:"gifContainer normalPointer",onClick:e.passUrl,onKeyPress:e.passUrl,title:"Click to create meme",children:Object(s.jsx)("img",{src:t.images.downsized_large.url,alt:t.title})},t.id)}))})]})]})}}]),a}(n.Component),M=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"fillScreen",children:[Object(s.jsx)("div",{className:"fixHeaderText",children:Object(s.jsx)(b,{headerText:"Meme in a Giffy",subheaderText:""})}),Object(s.jsxs)("main",{className:"landingPageHome",children:[Object(s.jsx)(h.b,{to:"/search",children:Object(s.jsx)("button",{className:"glow-on-hover homeButton",type:"button",children:"Search Memes!"})}),Object(s.jsx)(h.b,{to:"/memecreator",children:Object(s.jsx)("button",{className:"glow-on-hover homeButton",type:"button",children:"Create Memes!"})})]})]})}}]),a}(n.Component),N=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(s.jsxs)(h.a,{basename:"/project6AmandaHansChristianBenZahra",children:[Object(s.jsx)(u.a,{exact:!0,path:"/",component:M}),Object(s.jsx)(u.a,{path:"/memecreator",component:S}),Object(s.jsx)(u.a,{path:"/search",component:O}),Object(s.jsx)(v,{})]})}}]),a}(n.Component),B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,74)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),s(e),n(e),i(e),r(e)}))};c.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(N,{})}),document.getElementById("root")),B()}},[[73,1,2]]]);
//# sourceMappingURL=main.d7d15cba.chunk.js.map