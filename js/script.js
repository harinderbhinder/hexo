!function(e){var t=e("#search-form-wrap"),i=!1,n=200,o=function(){i=!0},a=function(e){setTimeout(function(){i=!1,e&&e()},n)};e("#nav-search-btn").on("click",function(){i||(o(),t.addClass("on"),a(function(){e(".search-form-input").focus()}))}),e(".search-form-input").on("blur",function(){o(),t.removeClass("on"),a()}),e("body").on("click",function(){e(".article-share-box.on").removeClass("on")}).on("click",".article-share-link",function(t){t.stopPropagation();var i=e(this),n=i.attr("data-url"),o=encodeURIComponent(n),a="article-share-box-"+i.attr("data-id"),r=i.offset();if(e("#"+a).length){var s=e("#"+a);if(s.hasClass("on"))return s.removeClass("on"),void 0}else{var l=['<div id="'+a+'" class="article-share-box">','<input class="article-share-input" value="'+n+'">','<div class="article-share-links">','<a href="https://twitter.com/intent/tweet?url='+o+'" class="article-share-twitter" target="_blank" title="Twitter"></a>','<a href="https://www.facebook.com/sharer.php?u='+o+'" class="article-share-facebook" target="_blank" title="Facebook"></a>','<a href="http://pinterest.com/pin/create/button/?url='+o+'" class="article-share-pinterest" target="_blank" title="Pinterest"></a>','<a href="https://plus.google.com/share?url='+o+'" class="article-share-google" target="_blank" title="Google+"></a>',"</div>","</div>"].join(""),s=e(l);e("body").append(s)}e(".article-share-box.on").hide(),s.css({top:r.top+25,left:r.left}).addClass("on")}).on("click",".article-share-box",function(e){e.stopPropagation()}).on("click",".article-share-box-input",function(){e(this).select()}).on("click",".article-share-box-link",function(e){e.preventDefault(),e.stopPropagation(),window.open(this.href,"article-share-box-window-"+Date.now(),"width=500,height=450")}),e(".article-entry").each(function(t){e(this).find("img").each(function(){if(!e(this).parent().hasClass("fancybox")){var t=this.alt;t&&e(this).after('<span class="caption">'+t+"</span>"),e(this).wrap('<a href="'+this.src+'" title="'+t+'" class="fancybox"></a>')}}),e(this).find(".fancybox").each(function(){e(this).attr("rel","article"+t)})}),e.fancybox&&e(".fancybox").fancybox();var r=e("#container"),s=!1,l=200,c=function(){s=!0},d=function(){setTimeout(function(){s=!1},l)};e("#main-nav-toggle").on("click",function(){s||(c(),r.toggleClass("mobile-nav-on"),d())}),e("#wrap").on("click",function(){!s&&r.hasClass("mobile-nav-on")&&r.removeClass("mobile-nav-on")})}(jQuery);