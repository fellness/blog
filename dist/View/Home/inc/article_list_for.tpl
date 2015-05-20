<% if(list && list.length){ %><ul class="article-list"><% list.forEach(function(val){ %><li><h2 class="article-list-title text-overflow"><% if(user_name){ %><div class="article-list-title-tool"><a href="<%=Url.article.edit(val.id)%>">编辑</a> | <a onclick="return confirm('确认删除吗？');" href="<%=Url.article.del(val.id)%>">删除</a></div><% } %><a href="<%=Url.article.view(val.id, val.url)%>"><%-val.title%></a></h2><div class="article-list-content"><div class="markdown-body"><%-val.markdown_content_list%></div></div><div class="article-list-more"><a href="<%=Url.article.view(val.id, val.url)%>">阅读全文 »</a></div><div class="article-list-tool clear"><ul class="fr"><li><i class="article-list-tool-hit"></i><%=val.hit%></li><li><i class="article-list-tool-time"></i><%=val.update_date%></li><% if(val.list_data){ %><li><i class="article-list-tool-class"></i><a href="<%=Url.article.list(val.list_data.id, val.list_data.url)%>"><%=val.list_data.name%></a></li><% } %><% if(val.tags_data && val.tags_data.length){ %><li><i class="article-list-tool-tag"></i><% val.tags_data.forEach(function(tags_val){ %><a href="<%=tags_val.uri%>"><%=tags_val.name%></a><% }); %></li><% } %></ul></div></li><% }); %></ul><% }else{ %><div class="ui-empty">没有数据！</div><% } %>