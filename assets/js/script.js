jQuery(function(e){e("#search-field").ghostHunter({results:"#results",result_template:'<article class="post"><h2 class="post-title"><a href="{{link}}">{{title}}</a></h2><span class="post-meta">On <span class="post-date">{{pubDate}}</span></span></article>',info_template:'<div class="header-title"><h1 class="header-name">Searchresults</h1><span class="header-meta">{{amount}} posts found</span></div>',displaySearchInfo:!0,onComplete:function(s){e("#search-field").prop("value")?(e("#searchresults").show(),e("#main").hide()):(e("#searchresults").hide(),e("#main").show())}}),e("pre code").each(function(s,a){var t=e(this),i=t.html().split(/\n/).length;if(i>1){hljs.highlightBlock(a);var n=[];for(s=1;s<i;s++)n+='<span class="line">'+s+"</span>";t.parent().addClass("codeblock").append('<div class="lines">'+n+"</div>")}}),e("#wrapper").fitVids(),function(){if("undefined"!=typeof disqus&&document.getElementById("disqus_thread")){if(window.DISQUS)return DISQUS.reset({reload:!0,config:function(){this.page.identifier=location.pathname,this.page.url=location.origin+location.pathname}});e.ajax({type:"GET",url:"//"+disqus+".disqus.com/embed.js",dataType:"script",cache:!0})}else e(".post-comments").css({display:"none"})}()});