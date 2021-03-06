$(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() >= window.innerHeight ) {
            $('nav').addClass('stickytop');
        }
        else {
            $('nav').removeClass('stickytop');
        }
    });
});

!function(a,b){"use strict";function c(a){this.callback=a,this.ticking=!1}function d(b){return b&&"undefined"!=typeof a&&(b===a||b.nodeType)}function e(a){if(arguments.length<=0)throw new Error("Missing arguments in extend function");var b,c,f=a||{};for(c=1;c<arguments.length;c++){var g=arguments[c]||{};for(b in g)f[b]="object"!=typeof f[b]||d(f[b])?f[b]||g[b]:e(f[b],g[b])}return f}function f(a){return a===Object(a)?a:{down:a,up:a}}function g(a,b){b=e(b,g.options),this.lastKnownScrollY=0,this.elem=a,this.debouncer=new c(this.update.bind(this)),this.tolerance=f(b.tolerance),this.classes=b.classes,this.offset=b.offset,this.scroller=b.scroller,this.initialised=!1,this.onPin=b.onPin,this.onUnpin=b.onUnpin,this.onTop=b.onTop,this.onNotTop=b.onNotTop}var h={bind:!!function(){}.bind,classList:"classList"in b.documentElement,rAF:!!(a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame)};a.requestAnimationFrame=a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame,c.prototype={constructor:c,update:function(){this.callback&&this.callback(),this.ticking=!1},requestTick:function(){this.ticking||(requestAnimationFrame(this.rafCallback||(this.rafCallback=this.update.bind(this))),this.ticking=!0)},handleEvent:function(){this.requestTick()}},g.prototype={constructor:g,init:function(){return g.cutsTheMustard?(this.elem.classList.add(this.classes.initial),setTimeout(this.attachEvent.bind(this),100),this):void 0},destroy:function(){var a=this.classes;this.initialised=!1,this.elem.classList.remove(a.unpinned,a.pinned,a.top,a.initial),this.scroller.removeEventListener("scroll",this.debouncer,!1)},attachEvent:function(){this.initialised||(this.lastKnownScrollY=this.getScrollY(),this.initialised=!0,this.scroller.addEventListener("scroll",this.debouncer,!1),this.debouncer.handleEvent())},unpin:function(){var a=this.elem.classList,b=this.classes;(a.contains(b.pinned)||!a.contains(b.unpinned))&&(a.add(b.unpinned),a.remove(b.pinned),this.onUnpin&&this.onUnpin.call(this))},pin:function(){var a=this.elem.classList,b=this.classes;a.contains(b.unpinned)&&(a.remove(b.unpinned),a.add(b.pinned),this.onPin&&this.onPin.call(this))},top:function(){var a=this.elem.classList,b=this.classes;a.contains(b.top)||(a.add(b.top),a.remove(b.notTop),this.onTop&&this.onTop.call(this))},notTop:function(){var a=this.elem.classList,b=this.classes;a.contains(b.notTop)||(a.add(b.notTop),a.remove(b.top),this.onNotTop&&this.onNotTop.call(this))},getScrollY:function(){return void 0!==this.scroller.pageYOffset?this.scroller.pageYOffset:void 0!==this.scroller.scrollTop?this.scroller.scrollTop:(b.documentElement||b.body.parentNode||b.body).scrollTop},getViewportHeight:function(){return a.innerHeight||b.documentElement.clientHeight||b.body.clientHeight},getDocumentHeight:function(){var a=b.body,c=b.documentElement;return Math.max(a.scrollHeight,c.scrollHeight,a.offsetHeight,c.offsetHeight,a.clientHeight,c.clientHeight)},getElementHeight:function(a){return Math.max(a.scrollHeight,a.offsetHeight,a.clientHeight)},getScrollerHeight:function(){return this.scroller===a||this.scroller===b.body?this.getDocumentHeight():this.getElementHeight(this.scroller)},isOutOfBounds:function(a){var b=0>a,c=a+this.getViewportHeight()>this.getScrollerHeight();return b||c},toleranceExceeded:function(a,b){return Math.abs(a-this.lastKnownScrollY)>=this.tolerance[b]},shouldUnpin:function(a,b){var c=a>this.lastKnownScrollY,d=a>=this.offset;return c&&d&&b},shouldPin:function(a,b){var c=a<this.lastKnownScrollY,d=a<=this.offset;return c&&b||d},update:function(){var a=this.getScrollY(),b=a>this.lastKnownScrollY?"down":"up",c=this.toleranceExceeded(a,b);this.isOutOfBounds(a)||(a<=this.offset?this.top():this.notTop(),this.shouldUnpin(a,c)?this.unpin():this.shouldPin(a,c)&&this.pin(),this.lastKnownScrollY=a)}},g.options={tolerance:{up:0,down:0},offset:0,scroller:a,classes:{pinned:"headroom--pinned",unpinned:"headroom--unpinned",top:"headroom--top",notTop:"headroom--not-top",initial:"headroom"}},g.cutsTheMustard="undefined"!=typeof h&&h.rAF&&h.bind&&h.classList,a.Headroom=g}(window,document);

// grab an element
var myElement = document.querySelector("nav");	
var headroom  = new Headroom(myElement);

// initialise
headroom.init();


$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});

// HAMBURGLERv2

function togglescroll () {
  $('body').on('touchstart', function(e){
    if ($('body').hasClass('noscroll')) {
      e.preventDefault();
    }
  });
}

$(document).ready(function () {
    togglescroll()
    $(".icon").click(function () {
        $(".mobilenav").fadeToggle(500);
        $(".top-menu").toggleClass("top-animate");
        $("body").toggleClass("noscroll");
        $(".mid-menu").toggleClass("mid-animate");
        $(".bottom-menu").toggleClass("bottom-animate");
    });
});

// PUSH ESC KEY TO EXIT

$(document).keydown(function(e) {
    if (e.keyCode == 27) {
        $(".mobilenav").fadeOut(500);
        $(".top-menu").removeClass("top-animate");
        $("body").removeClass("noscroll");
        $(".mid-menu").removeClass("mid-animate");
        $(".bottom-menu").removeClass("bottom-animate");
    }
});

var links = document.getElementsByClassName('js-nav-links')
var totalWidth = 0

for (i = 0; i < links.length; i++) {
  totalWidth += links[i].offsetWidth;
  checkNavWidth();
}

window.addEventListener('resize', checkNavWidth);

function checkNavWidth() {
		if (totalWidth + 30 > window.innerWidth - 100 || totalWidth + 30 > 1000 ) {
			$(".nav").addClass("mobilenav");
			$(".icon").addClass("show");

		}
		else {
			$(".nav").removeClass("mobilenav");
			$(".icon").removeClass("show");

		}
}

 // SLUGIFY


function slugify(text)
{
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

// MODAL

!function(t,n){"function"==typeof define&&define.amd?define(["jquery"],function(e){return n(t,e)}):"object"==typeof exports?n(t,require("jquery")):n(t,t.jQuery||t.Zepto)}(this,function(t,n){"use strict";function e(t){if(E&&"none"===t.css("animation-name")&&"none"===t.css("-webkit-animation-name")&&"none"===t.css("-moz-animation-name")&&"none"===t.css("-o-animation-name")&&"none"===t.css("-ms-animation-name"))return 0;var n,e,a,i,o=t.css("animation-duration")||t.css("-webkit-animation-duration")||t.css("-moz-animation-duration")||t.css("-o-animation-duration")||t.css("-ms-animation-duration")||"0s",s=t.css("animation-delay")||t.css("-webkit-animation-delay")||t.css("-moz-animation-delay")||t.css("-o-animation-delay")||t.css("-ms-animation-delay")||"0s",r=t.css("animation-iteration-count")||t.css("-webkit-animation-iteration-count")||t.css("-moz-animation-iteration-count")||t.css("-o-animation-iteration-count")||t.css("-ms-animation-iteration-count")||"1";for(o=o.split(", "),s=s.split(", "),r=r.split(", "),i=0,e=o.length,n=Number.NEGATIVE_INFINITY;e>i;i++)a=parseFloat(o[i])*parseInt(r[i],10)+parseFloat(s[i]),a>n&&(n=a);return a}function a(){if(n(document.body).height()<=n(window).height())return 0;var t,e,a=document.createElement("div"),i=document.createElement("div");return a.style.visibility="hidden",a.style.width="100px",document.body.appendChild(a),t=a.offsetWidth,a.style.overflow="scroll",i.style.width="100%",a.appendChild(i),e=i.offsetWidth,a.parentNode.removeChild(a),t-e}function i(){if(!N){var t,e,i=n("html"),o=l("is-locked");i.hasClass(o)||(e=n(document.body),t=parseInt(e.css("padding-right"),10)+a(),e.css("padding-right",t+"px"),i.addClass(o))}}function o(){if(!N){var t,e,i=n("html"),o=l("is-locked");i.hasClass(o)&&(e=n(document.body),t=parseInt(e.css("padding-right"),10)-a(),e.css("padding-right",t+"px"),i.removeClass(o))}}function s(t,n,e,a){var i=l("is",n),o=[l("is",$.CLOSING),l("is",$.OPENING),l("is",$.CLOSED),l("is",$.OPENED)].join(" ");t.$bg.removeClass(o).addClass(i),t.$overlay.removeClass(o).addClass(i),t.$wrapper.removeClass(o).addClass(i),t.$modal.removeClass(o).addClass(i),t.state=n,!e&&t.$modal.trigger({type:n,reason:a},[{reason:a}])}function r(t,a,i){var o=0,s=function(t){t.target===this&&o++},r=function(t){t.target===this&&0===--o&&(n.each(["$bg","$overlay","$wrapper","$modal"],function(t,n){i[n].off(v+" "+C)}),a())};n.each(["$bg","$overlay","$wrapper","$modal"],function(t,n){i[n].on(v,s).on(C,r)}),t(),0===e(i.$bg)&&0===e(i.$overlay)&&0===e(i.$wrapper)&&0===e(i.$modal)&&(n.each(["$bg","$overlay","$wrapper","$modal"],function(t,n){i[n].off(v+" "+C)}),a())}function c(t){t.state!==$.CLOSED&&(n.each(["$bg","$overlay","$wrapper","$modal"],function(n,e){t[e].off(v+" "+C)}),t.$bg.removeClass(t.settings.modifier),t.$overlay.removeClass(t.settings.modifier).hide(),t.$wrapper.hide(),o(),s(t,$.CLOSED,!0))}function d(t){var n,e,a,i,o={};for(t=t.replace(/\s*:\s*/g,":").replace(/\s*,\s*/g,","),n=t.split(","),i=0,e=n.length;e>i;i++)n[i]=n[i].split(":"),a=n[i][1],("string"==typeof a||a instanceof String)&&(a="true"===a||("false"===a?!1:a)),("string"==typeof a||a instanceof String)&&(a=isNaN(a)?a:+a),o[n[i][0]]=a;return o}function l(){for(var t=g,n=0;n<arguments.length;++n)t+="-"+arguments[n];return t}function m(){var t,e,a=location.hash.replace("#","");if(a){try{e=n("[data-"+h+'-id="'+a+'"]')}catch(i){}e&&e.length&&(t=n[h].lookup[e.data(h)],t&&t.settings.hashTracking&&t.open())}else u&&u.state===$.OPENED&&u.settings.hashTracking&&u.close()}function p(t,e){var a=n(document.body),i=this;i.settings=n.extend({},O,e),i.index=n[h].lookup.push(i)-1,i.state=$.CLOSED,i.$overlay=n("."+l("overlay")),i.$overlay.length||(i.$overlay=n("<div>").addClass(l("overlay")+" "+l("is",$.CLOSED)).hide(),a.append(i.$overlay)),i.$bg=n("."+l("bg")).addClass(l("is",$.CLOSED)),i.$modal=t.addClass(g+" "+l("is-initialized")+" "+i.settings.modifier+" "+l("is",$.CLOSED)).attr("tabindex","-1"),i.$wrapper=n("<div>").addClass(l("wrapper")+" "+i.settings.modifier+" "+l("is",$.CLOSED)).hide().append(i.$modal),a.append(i.$wrapper),i.$wrapper.on("click."+g,"[data-"+h+'-action="close"]',function(t){t.preventDefault(),i.close()}),i.$wrapper.on("click."+g,"[data-"+h+'-action="cancel"]',function(t){t.preventDefault(),i.$modal.trigger(y.CANCELLATION),i.settings.closeOnCancel&&i.close(y.CANCELLATION)}),i.$wrapper.on("click."+g,"[data-"+h+'-action="confirm"]',function(t){t.preventDefault(),i.$modal.trigger(y.CONFIRMATION),i.settings.closeOnConfirm&&i.close(y.CONFIRMATION)}),i.$wrapper.on("click."+g,function(t){var e=n(t.target);e.hasClass(l("wrapper"))&&i.settings.closeOnOutsideClick&&i.close()})}var u,f,h="remodal",g=t.REMODAL_GLOBALS&&t.REMODAL_GLOBALS.NAMESPACE||h,v=n.map(["animationstart","webkitAnimationStart","MSAnimationStart","oAnimationStart"],function(t){return t+"."+g}).join(" "),C=n.map(["animationend","webkitAnimationEnd","MSAnimationEnd","oAnimationEnd"],function(t){return t+"."+g}).join(" "),O=n.extend({hashTracking:!0,closeOnConfirm:!0,closeOnCancel:!0,closeOnEscape:!0,closeOnOutsideClick:!0,modifier:""},t.REMODAL_GLOBALS&&t.REMODAL_GLOBALS.DEFAULTS),$={CLOSING:"closing",CLOSED:"closed",OPENING:"opening",OPENED:"opened"},y={CONFIRMATION:"confirmation",CANCELLATION:"cancellation"},E=function(){var t=document.createElement("div").style;return void 0!==t.animationName||void 0!==t.WebkitAnimationName||void 0!==t.MozAnimationName||void 0!==t.msAnimationName||void 0!==t.OAnimationName}(),N=/iPad|iPhone|iPod/.test(navigator.platform);p.prototype.open=function(){var t,e=this;e.state!==$.OPENING&&e.state!==$.CLOSING&&(t=e.$modal.attr("data-"+h+"-id"),t&&e.settings.hashTracking&&(f=n(window).scrollTop(),location.hash=t),u&&u!==e&&c(u),u=e,i(),e.$bg.addClass(e.settings.modifier),e.$overlay.addClass(e.settings.modifier).show(),e.$wrapper.show().scrollTop(0),e.$modal.focus(),r(function(){s(e,$.OPENING)},function(){s(e,$.OPENED)},e))},p.prototype.close=function(t){var e=this;e.state!==$.OPENING&&e.state!==$.CLOSING&&(e.settings.hashTracking&&e.$modal.attr("data-"+h+"-id")===location.hash.substr(1)&&(location.hash="",n(window).scrollTop(f)),r(function(){s(e,$.CLOSING,!1,t)},function(){e.$bg.removeClass(e.settings.modifier),e.$overlay.removeClass(e.settings.modifier).hide(),e.$wrapper.hide(),o(),s(e,$.CLOSED,!1,t)},e))},p.prototype.getState=function(){return this.state},p.prototype.destroy=function(){var t,e=n[h].lookup;c(this),this.$wrapper.remove(),delete e[this.index],t=n.grep(e,function(t){return!!t}).length,0===t&&(this.$overlay.remove(),this.$bg.removeClass(l("is",$.CLOSING)+" "+l("is",$.OPENING)+" "+l("is",$.CLOSED)+" "+l("is",$.OPENED)))},n[h]={lookup:[]},n.fn[h]=function(t){var e,a;return this.each(function(i,o){a=n(o),null==a.data(h)?(e=new p(a,t),a.data(h,e.index),e.settings.hashTracking&&a.attr("data-"+h+"-id")===location.hash.substr(1)&&e.open()):e=n[h].lookup[a.data(h)]}),e},n(document).ready(function(){n(document).on("click","[data-"+h+"-target]",function(t){t.preventDefault();var e=t.currentTarget,a=e.getAttribute("data-"+h+"-target"),i=n("[data-"+h+'-id="'+a+'"]');n[h].lookup[i.data(h)].open()}),n(document).find("."+g).each(function(t,e){var a=n(e),i=a.data(h+"-options");i?("string"==typeof i||i instanceof String)&&(i=d(i)):i={},a[h](i)}),n(document).on("keydown."+g,function(t){u&&u.settings.closeOnEscape&&u.state===$.OPENED&&27===t.keyCode&&u.close()}),n(window).on("hashchange."+g,m)})});


