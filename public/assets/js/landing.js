(function($) {
    'use strict';
    /**
        * =====================================
        * Function for windows height and width      
        * =====================================
        */
    function windowSize( el ) {
        var result = 0;
        if("height" == el)
            result = window.innerHeight ? window.innerHeight : $(window).height();
        if("width" == el)
            result = window.innerWidth ? window.innerWidth : $(window).width();
        return result; 
    }
    /**
        * =====================================
        * Function for email address validation         
        * =====================================
        */
    function isValidEmail(emailAddress) {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        return pattern.test(emailAddress);
    };
    /**
        * =====================================
        * Function for windows height and width      
        * =====================================
        */
    function deviceControll() {
        if( windowSize( 'width' ) < 768 ) {
            $('body').removeClass('desktop').removeClass('tablet').addClass('mobile');
        }
        else if( windowSize( 'width' ) < 992 ){
            $('body').removeClass('mobile').removeClass('desktop').addClass('tablet');
        }
        else {
            $('body').removeClass('mobile').removeClass('tablet').addClass('desktop');
        }
    }
    $(window).on('resize', function() {
        deviceControll();
    });
    $(document).on('ready', function() {
        deviceControll();
        /**
            * =======================================
            * Top Navigaion Init
            * =======================================
            */
        var navigation = $('#js-navbar-menu').okayNav({
            toggle_icon_class: "okayNav__menu-toggle",
            toggle_icon_content: "<span /><span /><span /><span /><span />"
        });
        /**
            * =======================================
            * Top Fixed Navbar
            * =======================================
            */
        $(document).on('scroll', function() {
            var activeClass = 'navbar-home',
                ActiveID        = '.main-navbar-top',
                scrollPos       = $(this).scrollTop();
            if( scrollPos > 10 ) {
                $( ActiveID ).addClass( activeClass );
            } else {
                $( ActiveID ).removeClass( activeClass );
            }
        });
        /**
            * =======================================
            * NAVIGATION SCROLL
            * =======================================
            */
        var TopOffsetId = '.navbar-brand';
        $('#js-navbar-menu').onePageNav({
            currentClass: 'active',
            scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
            scrollSpeed: 1000,
            scrollOffset: Math.abs( $( TopOffsetId ).outerHeight() - 1 )
        });
        $('.btn-scroll a, a.btn-scroll').on('click', function (e) {
            e.preventDefault();
            var target = this.hash,
                scrollOffset = Math.abs( $( TopOffsetId ).outerHeight() ),
                $target = ( $(target).offset() || { "top": NaN }).top;
            $('html, body').stop().animate({
                'scrollTop': $target - scrollOffset
            }, 900, 'swing', function () {
                window.location.hash = target;
            });
        });
    });
} (jQuery) );
;(function(a){if(typeof define==='function'&&define.amd){define(['jquery'],a)}else{a(jQuery)}}(function($){var j=$.scrollTo=function(a,b,c){return $(window).scrollTo(a,b,c)};j.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};j.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(f,g,h){if(typeof g=='object'){h=g;g=0}if(typeof h=='function')h={onAfter:h};if(f=='max')f=9e9;h=$.extend({},j.defaults,h);g=g||h.duration;h.queue=h.queue&&h.axis.length>1;if(h.queue)g/=2;h.offset=both(h.offset);h.over=both(h.over);return this._scrollable().each(function(){if(f==null)return;var d=this,$elem=$(d),targ=f,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}var e=$.isFunction(h.offset)&&h.offset(d,targ)||h.offset;$.each(h.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=j.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(h.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=e[pos]||0;if(h.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*h.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(h.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&h.queue){if(old!=attr[key])animate(h.onAfterFirst);delete attr[key]}});animate(h.onAfter);function animate(a){$elem.animate(attr,g,h.easing,a&&function(){a.call(this,targ,h)})}}).end()};j.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return $.isFunction(a)||typeof a=='object'?a:{top:a,left:a}};return j}));
// jquery.nav.js One Page Nav
!function(n,t,i,e){var s=function(e,s){this.elem=e,this.$elem=n(e),this.options=s,this.metadata=this.$elem.data("plugin-options"),this.$nav=this.$elem.find("a"),this.$win=n(t),this.sections={},this.didScroll=!1,this.$doc=n(i),this.docHeight=this.$doc.height()};s.prototype={defaults:{currentClass:"current",changeHash:!1,easing:"swing",filter:"",scrollSpeed:750,scrollOffset:0,scrollThreshold:.5,begin:!1,end:!1,scrollChange:!1},init:function(){var t=this;return t.config=n.extend({},t.defaults,t.options,t.metadata),""!==t.config.filter&&(t.$nav=t.$nav.filter(t.config.filter)),t.$nav.on("click.onePageNav",n.proxy(t.handleClick,t)),t.getPositions(),t.bindInterval(),t.$win.on("resize.onePageNav",n.proxy(t.getPositions,t)),this},adjustNav:function(n,t){n.$elem.find("."+n.config.currentClass).removeClass(n.config.currentClass),t.addClass(n.config.currentClass)},bindInterval:function(){var n,t=this;t.$win.on("scroll.onePageNav",function(){t.didScroll=!0}),t.t=setInterval(function(){n=t.$doc.height(),t.didScroll&&(t.didScroll=!1,t.scrollChange()),n!==t.docHeight&&(t.docHeight=n,t.getPositions())},250)},getHash:function(n){return n.attr("href").split("#")[1]},getPositions:function(){var t,i,e,s=this;s.$nav.each(function(){t=s.getHash(n(this)),e=n("#"+t),e.length&&(i=e.offset().top,s.sections[t]=Math.round(i)-s.config.scrollOffset)})},getSection:function(n){var t=null,i=Math.round(this.$win.height()*this.config.scrollThreshold);for(var e in this.sections)this.sections[e]-i<n&&(t=e);return t},handleClick:function(i){var e=this,s=n(i.currentTarget),o=s.parent(),a="#"+e.getHash(s);o.hasClass(e.config.currentClass)||(e.config.begin&&e.config.begin(),e.adjustNav(e,o),e.unbindInterval(),n.scrollTo(a,e.config.scrollSpeed,{axis:"y",easing:e.config.easing,offset:{top:-e.config.scrollOffset},onAfter:function(){e.config.changeHash&&(t.location.hash=a),e.bindInterval(),e.config.end&&e.config.end()}})),i.preventDefault()},scrollChange:function(){var n,t=this.$win.scrollTop(),i=this.getSection(t);null!==i&&(n=this.$elem.find('a[href$="#'+i+'"]').parent(),n.hasClass(this.config.currentClass)||(this.adjustNav(this,n),this.config.scrollChange&&this.config.scrollChange(n)))},unbindInterval:function(){clearInterval(this.t),this.$win.unbind("scroll.onePageNav")}},s.defaults=s.prototype.defaults,n.fn.onePageNav=function(n){return this.each(function(){new s(this,n).init()})}}(jQuery,window,document);
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(n,i){return void 0===i&&(i="undefined"!=typeof window?require("jquery"):require("jquery")(n)),e(i),i}:e(jQuery)}(function(e){function n(n,i){self=this,this.options=e.extend({},s,i),self.options=this.options,self.navigation=e(n),self.document=e(document),self.window=e(window),""==this.options.parent?this.options.parent=self.navigation.parent():"",self.nav_open=!1,self.parent_full_width=0,self.radCoef=180/Math.PI,self.sTouch={x:0,y:0},self.cTouch={x:0,y:0},self.sTime=0,self.nav_position=0,self.percent_open=0,self.nav_moving=!1,self.init()}var i="okayNav",s={parent:"",toggle_icon_class:"okayNav__menu-toggle",toggle_icon_content:"<span /><span /><span />",align_right:!0,swipe_enabled:!0,threshold:50,resize_delay:10,beforeOpen:function(){},afterOpen:function(){},beforeClose:function(){},afterClose:function(){},itemHidden:function(){},itemDisplayed:function(){}};n.prototype={init:function(){e("body").addClass("okayNav-loaded"),self.navigation.addClass("okayNav loaded").children("ul").addClass("okayNav__nav--visible"),self.options.align_right?self.navigation.append('<ul class="okayNav__nav--invisible transition-enabled nav-right" />').append('<a href="#" class="'+self.options.toggle_icon_class+' okay-invisible">'+self.options.toggle_icon_content+"</a>"):self.navigation.prepend('<ul class="okayNav__nav--invisible transition-enabled nav-left" />').prepend('<a href="#" class="'+self.options.toggle_icon_class+' okay-invisible">'+self.options.toggle_icon_content+"</a>"),self.nav_visible=self.navigation.children(".okayNav__nav--visible"),self.nav_invisible=self.navigation.children(".okayNav__nav--invisible"),self.toggle_icon=self.navigation.children("."+self.options.toggle_icon_class),self.toggle_icon_width=self.toggle_icon.outerWidth(!0),self.default_width=self.getChildrenWidth(self.navigation),self.parent_full_width=e(self.options.parent).outerWidth(!0),self.last_visible_child_width=0,self.initEvents(),self.nav_visible.contents().filter(function(){return this.nodeType=Node.TEXT_NODE&&/\S/.test(this.nodeValue)===!1}).remove(),1==self.options.swipe_enabled&&self.initSwipeEvents()},initEvents:function(){self.document.on("click.okayNav",function(n){var i=e(n.target);self.nav_open===!0&&0==i.closest(".okayNav").length&&self.closeInvisibleNav(),i.hasClass(self.options.toggle_icon_class)&&(n.preventDefault(),self.toggleInvisibleNav())});var n=self._debounce(function(){self.recalcNav()},self.options.recalc_delay);self.window.on("load.okayNav resize.okayNav",n)},initSwipeEvents:function(){self.document.on("touchstart.okayNav",function(n){if(self.nav_invisible.removeClass("transition-enabled"),1==n.originalEvent.touches.length){var i=n.originalEvent.touches[0];(i.pageX<25&&0==self.options.align_right||i.pageX>e(self.options.parent).outerWidth(!0)-25&&1==self.options.align_right||self.nav_open===!0)&&(self.sTouch.x=self.cTouch.x=i.pageX,self.sTouch.y=self.cTouch.y=i.pageY,self.sTime=Date.now())}}).on("touchmove.okayNav",function(e){var n=e.originalEvent.touches[0];self._triggerMove(n.pageX,n.pageY),self.nav_moving=!0}).on("touchend.okayNav",function(e){self.sTouch={x:0,y:0},self.cTouch={x:0,y:0},self.sTime=0,self.percent_open>100-self.options.threshold?(self.nav_position=0,self.closeInvisibleNav()):1==self.nav_moving&&(self.nav_position=self.nav_invisible.width(),self.openInvisibleNav()),self.nav_moving=!1,self.nav_invisible.addClass("transition-enabled")})},_getDirection:function(e){return self.options.align_right?e>0?-1:1:0>e?-1:1},_triggerMove:function(e,n){self.cTouch.x=e,self.cTouch.y=n;var i=Date.now(),s=self.cTouch.x-self.sTouch.x,l=self.cTouch.y-self.sTouch.y,t=l*l,o=Math.sqrt(s*s+t),a=Math.sqrt(t),f=Math.asin(Math.sin(a/o))*self.radCoef;o/(i-self.sTime);if(self.sTouch.x=e,self.sTouch.y=n,20>f){var v=self._getDirection(s),c=self.nav_position+v*o,r=self.nav_invisible.width(),d=0;0>c?d=-c:c>r&&(d=r-c);var _=r-(self.nav_position+v*o+d),p=_/r*100;self.nav_position+=v*o+d,self.percent_open=p,self.nav_invisible.css("transform","translateX("+(self.options.align_right?1:-1)*p+"%)")}},getParent:function(){return self.options.parent},getVisibleNav:function(){return self.nav_visible},getInvisibleNav:function(){return self.nav_invisible},getNavToggleIcon:function(){return self.toggle_icon},_debounce:function(e,n,i){var s;return function(){var l=this,t=arguments,o=function(){s=null,i||e.apply(l,t)},a=i&&!s;clearTimeout(s),s=setTimeout(o,n),a&&e.apply(l,t)}},openInvisibleNav:function(){self.options.enable_swipe?"":self.options.beforeOpen.call(),self.toggle_icon.addClass("icon--active"),self.nav_invisible.addClass("nav-open"),self.nav_open=!0,self.nav_invisible.css({"-webkit-transform":"translateX(0%)",transform:"translateX(0%)"}),self.options.afterOpen.call()},closeInvisibleNav:function(){self.options.enable_swipe?"":self.options.beforeClose.call(),self.toggle_icon.removeClass("icon--active"),self.nav_invisible.removeClass("nav-open"),self.options.align_right?self.nav_invisible.css({"-webkit-transform":"translateX(100%)",transform:"translateX(100%)"}):self.nav_invisible.css({"-webkit-transform":"translateX(-100%)",transform:"translateX(-100%)"}),self.nav_open=!1,self.options.afterClose.call()},toggleInvisibleNav:function(){self.nav_open?self.closeInvisibleNav():self.openInvisibleNav()},getChildrenWidth:function(n){for(var i=0,s=e(n).children(),l=0;l<s.length;l++)i+=e(s[l]).outerWidth(!0);return i},getVisibleItemCount:function(){return e("li",self.nav_visible).length},getHiddenItemCount:function(){return e("li",self.nav_invisible).length},recalcNav:function(){var n=e(self.options.parent).outerWidth(!0),i=self.getChildrenWidth(self.options.parent),s=self.navigation.outerWidth(!0),l=self.getVisibleItemCount(),t=self.nav_visible.outerWidth(!0)+self.toggle_icon_width,o=i+self.last_visible_child_width+self.toggle_icon_width,a=i-s+self.default_width;return n>a?(self._expandAllItems(),void self.toggle_icon.addClass("okay-invisible")):(l>0&&t>=s&&o>=n&&self._collapseNavItem(),n>o+self.toggle_icon_width+15&&self._expandNavItem(),void(0==self.getHiddenItemCount()?self.toggle_icon.addClass("okay-invisible"):self.toggle_icon.removeClass("okay-invisible")))},_collapseNavItem:function(){var n=e("li:last-child",self.nav_visible);self.last_visible_child_width=n.outerWidth(!0),self.document.trigger("okayNav:collapseItem",n),n.detach().prependTo(self.nav_invisible),self.options.itemHidden.call(),self.recalcNav()},_expandNavItem:function(){var n=e("li:first-child",self.nav_invisible);self.document.trigger("okayNav:expandItem",n),n.detach().appendTo(self.nav_visible),self.options.itemDisplayed.call()},_expandAllItems:function(){e("li",self.nav_invisible).detach().appendTo(self.nav_visible),self.options.itemDisplayed.call()},_collapseAllItems:function(){e("li",self.nav_visible).detach().appendTo(self.nav_invisible),self.options.itemHidden.call()},destroy:function(){e("li",self.nav_invisible).appendTo(self.nav_visible),self.nav_invisible.remove(),self.nav_visible.removeClass("okayNav__nav--visible"),self.toggle_icon.remove(),self.document.unbind(".okayNav"),self.window.unbind(".okayNav")}},e.fn[i]=function(s){var l=arguments;if(void 0===s||"object"==typeof s)return this.each(function(){e.data(this,"plugin_"+i)||e.data(this,"plugin_"+i,new n(this,s))});if("string"==typeof s&&"_"!==s[0]&&"init"!==s){var t;return this.each(function(){var o=e.data(this,"plugin_"+i);o instanceof n&&"function"==typeof o[s]&&(t=o[s].apply(o,Array.prototype.slice.call(l,1))),"destroy"===s&&e.data(this,"plugin_"+i,null)}),void 0!==t?t:this}}});