<div class="sidebar">
    <div class="sidebar-author sidebar-box clear">
        <div class="fl">
            <a href="<% if(user_name){ %>/admin/
                <% }else{ %>/html/xiaowu.html
                <% } %>">
                <img src="http://www.xuexb.com/upload/month_1208/201208271431426663.jpg" alt="">
            </a>
        </div>
        <div class="fr">
            <h3>
                <a href="/html/xiaowu.html">前端小武</a> &nbsp; [<a href="/html/xiaowu.html#anchor-%E8%81%94%E7%B3%BB%E6%88%91">联系我</a>]
            </h3>
            <p>
                爱前端<br>爱生活
            </p>
        </div>
    </div>

    <div class="mt20 sidebar-search">
        <form id="J-form" action="/index/search/" class="clear" autocomplete="off">
            <label class="hide" for="J-key">搜索：</label>
            <input type="text" name="key" placeholder="搜点什么呢？" value="<%=key%>"autocomplete="off" accesskey="s" class="fl sidebar-search-text" id="J-key"><input class="sidebar-search-btn fr" type="submit" value="搜索">
        </form>
        <script type="text/javascript">
            (function(){
                var form = document.getElementById('J-form'),
                    text = document.getElementById('J-key');
                form.onsubmit = function(){
                    var key = text.value.replace(/(^\s*)|(\s*$)/, '');
                    if(!key){
                        text.focus();
                    } else {
                        location.href = '<%=Url.article.search("{key}")%>'.replace('{key}', key);
                    }
                    return false;
                }
            })();
        </script>
    </div>

    <% if(view_search && view_search.length){ %>
        <div class="sidebar-box mt20">
            <dl class="sidebar-article">
                <dt>
                    <% if(view_search_type === 'search'){ %>
                        关于 "<%=key%>" 的其她文章
                    <% }else{ %>
                        来试试
                    <% } %>
                </dt>
                <dd>
                    <% view_search.forEach(function(val){ %>
                        <a href="<%=Url.article.view(val.id, val.url)%>"><%=val.title%></a>
                    <% }); %>
                </dd>
            </dl>
        </div>
    <% } %>

    <% if(new_article && new_article.length){ %>
        <div class="sidebar-box mt20">
            <dl class="sidebar-article">
                <dt>
                    最近更新的文章
                </dt>
                <dd>
                    <% new_article.forEach(function(val){ %>
                        <a href="<%=Url.article.view(val.id, val.url)%>"><%=val.title%></a>
                    <% }); %>
                </dd>
            </dl>
        </div>
    <% } %>


    <% if(hot_search && hot_search.length){ %>
        <div class="sidebar-box mt20">
            <dl class="sidebar-article">
                <dt>
                    搜索最多的词
                </dt>
                <dd>
                    <% hot_search.forEach(function(val){ %>
                        <a href="<%=Url.article.search(val.name)%>" data-hit="<%=val.hit%>"><%=val.name%></a>
                    <% }); %>
                </dd>
            </dl>
        </div>
    <% } %>

    <% if(links){ %>
    <div class="sidebar-box mt20">
        <dl class="sidebar-links">
            <dt>
                名人 名博 名事迹
            </dt>
            <dd>
                <a href="http://www.dmimi.org/" data-pjax="false" title="轻量级前端类库">Dmimi</a>
                <a href="http://sentsin.com/" data-pjax="false" title="前端大神">贤心</a> 
                <a href="http://ziren.org/" data-pjax="false">前端开发-子任</a>
                <a href="http://www.pmsun.net/" data-pjax="false" title="CURD程序员一枚">暖阳丶午后</a>
                <a href="http://www.yutent.com/" title="一个迷失在前端与后台之间的PHPer" data-pjax="false">宇天</a>
                <a href="http://www.cnblogs.com/52cik/" title="叫我楼教主" data-pjax="false">乱码</a>
                <a href="http://www.wenkm.com/" title="Kevin的博客" data-pjax="false">Kevin's Blog</a>
                <a href="http://qianduanblog.com/" data-pjax="false" title="很牛气的前端，有很多前端资源">前端博客</a>
                <a href="http://www.html-js.com/" title="最专业的前端技术内容社区" data-pjax="false">前端乱炖</a>
                <a href="http://www.wufangbo.com/" title="前端开发-武方博" data-pjax="false">前端开发</a>
                <a href="http://dyy.im/" data-pjax="false">哥特复兴</a>
                <a href="http://cssha.com/" data-pjax="false" title="去哪前端大神">安·记</a>
                <a href="http://www.imququ.com/" data-pjax="false" title="JerryQu的小站">JerryQu</a>
                <!-- <a href="http://julying.com/" data-pjax="false" title="七月、前端攻城师王子墨">王子墨</a> -->
                <a href="http://www.baidufe.com/" data-pjax="false" title="Alien的笔记">Alien的笔记</a>
                <a href="http://www.welefen.com/" data-pjax="false" title="welefen的随笔">welefen的随笔</a>
                <a href="http://www.aips.me/" title="关注 WordPress 与互联网的原创IT科技博客">周良博客</a>
                <a href="http://stylechen.com/" title="关注前端与用户体验">雨夜带刀's Blog</a>
                <a href="http://yanhaijing.com/">颜海镜</a>
            </dd>
        </dl>
    </div>

    <div class="sidebar-box mt20">
        <dl class="sidebar-links">
            <dt>
                有情 有链 有情意
            </dt>
            <dd>
                <!-- <a href="http://www.zhuji91.com/" title="主机91">主机91</a> -->
                <a href="http://www.beijixingpc.com/" data-pjax="false">计算机基础知识</a>
                <a href="http://www.shenglei.org/" data-pjax="false">盛磊博客</a>
                <a href="http://www.5ivu.com/" data-pjax="false">最新笑话</a>
                <a href="http://www.nuobg.com/" data-pjax="false">网络推广</a>
                <a href="http://youxi.pw/" data-pjax="false">新博客</a>
                <a href="http://www.freehao123.com/" data-pjax="false" title="全球最新的免费资源发布区">免费资源部落</a>
                <a href="http://www.softwhy.com/" data-pjax="false" title="蚂蚁部落">div css教程</a>
                <a href="http://www.siyonli.com/">大晚</a>
            </dd>
        </dl>
    </div>
    <% } %>
</div>