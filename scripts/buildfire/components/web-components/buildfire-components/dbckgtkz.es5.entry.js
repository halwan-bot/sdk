/*! Built with http://stenciljs.com */
BuildfireComponents.loadBundle('dbckgtkz',['exports'],function(t){var e,i=window.BuildfireComponents.h;!function(t){t[t.grid=0]='grid',t[t.list=1]='list';}(e||(e={}));var n=function(){function t(){this.images=[],this.viewState=e.grid;}return t.prototype.handleBack=function(t){this.viewState!=e.grid&&(this.viewState=e.grid);},t.prototype.showList=function(t){this.viewState===e.grid&&(this.viewState=e.list);},t.prototype.render=function(){return i('div',null,this.viewState==e.grid?i('bf-image-grid',{images:this.images,token:this.token,onClick:this.showList.bind(this)}):i('bf-image-list',{images:this.images,token:this.token}));},Object.defineProperty(t,'is',{get:function(){return'bf-grid';},enumerable:!0,configurable:!0}),Object.defineProperty(t,'encapsulation',{get:function(){return'shadow';},enumerable:!0,configurable:!0}),Object.defineProperty(t,'properties',{get:function(){return{images:{type:'Any',attr:'images'},token:{type:String,attr:'token'},viewState:{state:!0}};},enumerable:!0,configurable:!0}),Object.defineProperty(t,'events',{get:function(){return[{name:'imageSelected',method:'imageSelected',bubbles:!0,cancelable:!0,composed:!0}];},enumerable:!0,configurable:!0}),Object.defineProperty(t,'listeners',{get:function(){return[{name:'body:backClick',method:'handleBack'}];},enumerable:!0,configurable:!0}),Object.defineProperty(t,'style',{get:function(){return'.wrapper{display:grid;grid-gap:2px}.box{margin:2vh 0}.row-1{grid-template-columns:100%}.row-2{grid-template-columns:50% 50%}.row-3{grid-template-columns:33% 33% 33%}.row-4{grid-template-columns:25% 25% 25% 25%}.row-5{grid-template-columns:20% 20% 20% 20% 20%}';},enumerable:!0,configurable:!0}),t;}(),r=function(){function t(){}return t.prototype.watchHandler=function(){this.setItemCount(),this.calculateWidth();},t.prototype.calculateWidth=function(){var t=window.innerWidth,e=window.innerHeight;this.imageCount>0&&(this.imageWidth=Math.floor(t/this.imageCount)-4,this.imageHeight=Math.floor(e/4));},t.prototype.setItemCount=function(){this.imageCount=this.images&&this.images.length?this.images.length:0;},t.prototype.componentWillLoad=function(){this.setItemCount(),this.calculateWidth();},t.prototype.render=function(){var t=this;return i('div',{class:'wrapper row-'+this.imageCount},this.images.map(function(e){return i('bf-img',{token:t.token,operation:'crop',width:t.imageWidth.toString(),height:t.imageHeight.toString(),url:e});}));},Object.defineProperty(t,'is',{get:function(){return'bf-image-grid';},enumerable:!0,configurable:!0}),Object.defineProperty(t,'encapsulation',{get:function(){return'shadow';},enumerable:!0,configurable:!0}),Object.defineProperty(t,'properties',{get:function(){return{imageCount:{state:!0},imageHeight:{state:!0},images:{type:'Any',attr:'images',watchCallbacks:['watchHandler']},imageWidth:{state:!0},token:{type:String,attr:'token'}};},enumerable:!0,configurable:!0}),Object.defineProperty(t,'listeners',{get:function(){return[{name:'window:resize',method:'calculateWidth',passive:!0}];},enumerable:!0,configurable:!0}),Object.defineProperty(t,'style',{get:function(){return'.wrapper{display:grid;grid-gap:2px}.box{margin:2vh 0}.row-1{grid-template-columns:100%}.row-2{grid-template-columns:50% 50%}.row-3{grid-template-columns:33% 33% 33%}.row-4{grid-template-columns:25% 25% 25% 25%}.row-5{grid-template-columns:20% 20% 20% 20% 20%}';},enumerable:!0,configurable:!0}),t;}(),o=function(){function t(){this.images=[];}return t.prototype.componentWillLoad=function(){this.setItemCount(),this.calculateWidth();},t.prototype.componentDidLoad=function(){},t.prototype.calculateWidth=function(){var t=window.innerWidth,e=window.innerHeight;this.listImageWidth=t,this.listImageHeight=Math.floor(e/3);},t.prototype.setItemCount=function(){this.imageCount=this.images&&this.images.length?this.images.length:0;},t.prototype.selectImage=function(t,e){var i=this.images.map(function(e){return{name:e,selected:e===t};});this.imageSelected.emit(i);},t.prototype.render=function(){var t=this;return this.images.map(function(e){return i('div',{class:'box'},i('bf-img',{token:t.token,onClick:t.selectImage.bind(t,e),operation:'width',width:t.width?t.width.toString():t.listImageWidth.toString(),url:e}));});},Object.defineProperty(t,'is',{get:function(){return'bf-image-list';},enumerable:!0,configurable:!0}),Object.defineProperty(t,'encapsulation',{get:function(){return'shadow';},enumerable:!0,configurable:!0}),Object.defineProperty(t,'properties',{get:function(){return{height:{type:Number,attr:'height'},imageCount:{state:!0},images:{type:'Any',attr:'images'},listImageHeight:{state:!0},listImageWidth:{state:!0},token:{type:String,attr:'token'},width:{type:Number,attr:'width'}};},enumerable:!0,configurable:!0}),Object.defineProperty(t,'events',{get:function(){return[{name:'imageSelected',method:'imageSelected',bubbles:!0,cancelable:!0,composed:!0}];},enumerable:!0,configurable:!0}),Object.defineProperty(t,'listeners',{get:function(){return[{name:'window:resize',method:'calculateWidth',passive:!0}];},enumerable:!0,configurable:!0}),Object.defineProperty(t,'style',{get:function(){return'.box{margin:2vh 0;max-width:100%;overflow:hidden}';},enumerable:!0,configurable:!0}),t;}(),a=function(){function t(){this.suffix='https://{token}.cloudimg.io',this.filterDefault='n',this.operations={cdn:'cdn',cdno:'cdno',width:'width',height:'height',crop:'crop'},this.defaultOperation=this.operations.cdn,this.quality=100;}return t.prototype.getOperation=function(){var t=this.operation?this.operation:this.defaultOperation;return!this.operation&&this.width&&(t=this.operations.width),!this.operation&&this.height&&(t=this.operations.height),this.width&&this.height&&(t=this.operations.crop),t;},t.prototype.getSize=function(){var t='n';return this.height&&this.width?t=this.width+'x'+this.height:this.width?t=''+this.width:this.height&&(t=''+this.height),t;},t.prototype.buildUrl=function(){var t=this.getOperation(),e=this.getSize(),i=this.quality?'q'+this.quality.toString():this.filterDefault;return this.suffix.replace('{token}',this.token)+'/'+t+'/'+e+'/'+i+'/'+this.url;},t.prototype.componentWillUpdate=function(){this.realSrc=this.buildUrl();},t.prototype.componentDidLoad=function(){this.realSrc=this.buildUrl();},t.prototype.render=function(){return i('img',{src:this.realSrc});},Object.defineProperty(t,'is',{get:function(){return'bf-img';},enumerable:!0,configurable:!0}),Object.defineProperty(t,'encapsulation',{get:function(){return'shadow';},enumerable:!0,configurable:!0}),Object.defineProperty(t,'properties',{get:function(){return{height:{type:String,attr:'height'},operation:{type:String,attr:'operation'},quality:{type:Number,attr:'quality'},realSrc:{state:!0},token:{type:String,attr:'token'},url:{type:String,attr:'url'},width:{type:String,attr:'width'}};},enumerable:!0,configurable:!0}),Object.defineProperty(t,'style',{get:function(){return'';},enumerable:!0,configurable:!0}),t;}();t.BfGrid=n,t.BfImageGrid=r,t.BfImageList=o,t.BfImg=a,Object.defineProperty(t,'__esModule',{value:!0});});