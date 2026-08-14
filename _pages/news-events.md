---
layout: archive
title: "News & Events"
permalink: /news-events/
author_profile: false
---

<p style="max-width:760px;color:#5f6f7e;line-height:1.7;">Research news, publications, conference activities, field campaigns, seminars, awards, and laboratory events from CPPL.</p>

{% include base_path %}
{% capture written_year %}'None'{% endcapture %}
{% for post in site.posts %}
  {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
  {% if year != written_year %}
    <h2 id="{{ year | slugify }}" class="archive__subtitle">{{ year }}</h2>
    {% capture written_year %}{{ year }}{% endcapture %}
  {% endif %}
  {% include archive-single.html %}
{% endfor %}

{% if site.posts.size == 0 %}
<div style="padding:24px;border:1px solid #e1e8ee;border-radius:14px;background:#f8fafb;margin-top:24px;">
  <strong>CPPL News &amp; Events</strong>
  <p style="margin-bottom:0;color:#667684;">New laboratory activities and research updates will be added here.</p>
</div>
{% endif %}
