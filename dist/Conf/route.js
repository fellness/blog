/*xuexb_blog - v0.1.0 - 2015-06-14  01:06:35*/
"use strict";module.exports=[[/^list\/([a-zA-Z]+)\/(\d+)$/,"index/list/?url=:1&page=:2"],[/^list\/([a-zA-Z]+)$/,"index/list/?url=:1"],[/^html\/([a-zA-Z0-9\-\_]+)$/,"index/view/?url=:1"],[/^search\/([^\/]+)(?:\/(\d+))?$/,"index/search/?key=:1&page=:2"],[/^tags\/([^\/]+)(?:\/(\d+))?$/,"index/tags_list/?url=:1&page=:2"],[/^tags$/,"index/tags/"],[/^all(?:\/(\d+))?$/,"index/all/?page=:1"],[/^(list|html|search)$/,"index/all/"],[/^rss$/,"index/rss"],[/^admin\/article\/edit$/,"admin/editArticle"],[/^admin\/article\/create$/,"admin/createArticle"],[/^admin\/article\/del$/,"admin/delArticle"]];