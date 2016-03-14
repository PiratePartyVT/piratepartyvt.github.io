---
layout: page
title: contribute
icon: contribute
permalink: /contribute/
---
<div class="col-xs-12 col-sm-8">
  <h4>Developers</h4>
  <p>
  If you would like to contribute to this site please start by making your own fork. Please don't push straight to master.
  </p>
  <p>
  <h4>Basics of contributing</h4>
  New to github? You may want to start with their own <a href="https://help.github.com/desktop/guides/getting-started/" target="_blank">GitHub Desktop</a>.<br/>
  <br/>
  This site was built with <a href="https://jekyllrb.com/" target="_blanl">Jekyll</a>.<br/>
  Jekyll is a simple, blog-aware, static site generator. We use it to create templates and content for this site. If Jekyll is new to you read about it <a href="http://jekyllrb.com/" target="_blank">here</a>.
<br/>
  </p>
  <hr/>
  <h4>Writers/Artists/Speakers/Podcasters</h4>
  <p>
  You don't have to know how to code to contribute. Get in touch!
  </p>
  <hr/>
</div>

<div class="col-xs-12 col-sm-4">
  {% if site.github_username %}
    {% include icon-github.html username=site.github_username %}<br/>
  {% endif %}
  {% if site.twitter_username %}
    {% include icon-twitter.html username=site.twitter_username %}<br/>
  {% endif %}
  <span class="glyphicon glyphicon-comment" title="Freenode IRC"></span> #{{site.freenode_channel}} on freenode<br/>
</div>
