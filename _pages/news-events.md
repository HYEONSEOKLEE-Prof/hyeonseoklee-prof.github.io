---
layout: archive
title: "News & Events"
permalink: /news-events/
author_profile: false
---

<p style="max-width:760px;color:#5f6f7e;line-height:1.7;">Research news, publications, conference activities, field campaigns, seminars, awards, and laboratory events from CPPL.</p>

{% include base_path %}

<h2 class="cppl-news-heading">
  <span class="cppl-lang-en">Latest News</span>
  <span class="cppl-lang-ko" lang="ko">주요 소식</span>
</h2>

<div class="cppl-news-grid">
  <article class="cppl-news-card cppl-news-card-featured">
    <div class="cppl-news-photo cppl-news-photo-pair">
      <img src="{{ base_path }}/images/news/2026-crop-science-award-ceremony.jpg" alt="Sohye Jo receiving the Best Presentation Award" loading="eager">
      <img src="{{ base_path }}/images/news/2026-crop-science-best-presentation-award.jpg" alt="Best Presentation Award certificate" loading="lazy">
    </div>
    <div class="cppl-news-copy">
      <div class="cppl-news-meta">
        <span class="cppl-news-tag">
          <span class="cppl-lang-en">Award</span>
          <span class="cppl-lang-ko" lang="ko">수상</span>
        </span>
        <span class="cppl-lang-en">Sep 9–11, 2026</span><span class="cppl-lang-ko" lang="ko">2026.09.09.–11.</span>
      </div>
      <h3>
        <span class="cppl-lang-en">Sohye Jo Receives Best Presentation Award at the 2026 Korean Society of Crop Science Conference</span>
        <span class="cppl-lang-ko" lang="ko">조소혜 학생, 2026년 한국작물학회 학술대회 우수발표상 수상</span>
      </h3>
      <p class="cppl-lang-en">Sohye Jo received the Best Presentation Award at the 2026 Korean Society of Crop Science Conference for her presentation, “Effects of Ozone Concentration on Heat-Stress Mitigation and Physiological and Transcriptomic Responses in Rice.” Congratulations!</p>
      <p class="cppl-lang-ko" lang="ko">조소혜 학생이 2026년 9월 9일부터 11일까지 열린 한국작물학회 학술대회에서 “오존 농도에 따른 벼 고온 스트레스 저감과 생리·전사체 반응” 연구로 우수발표상을 수상했습니다. 진심으로 축하합니다.</p>
    </div>
  </article>

  <article class="cppl-news-card">
    <div class="cppl-news-photo">
      <img src="{{ base_path }}/images/members/jo-sohye.jpg" alt="Sohye Jo" loading="lazy">
    </div>
    <div class="cppl-news-copy">
      <div class="cppl-news-meta">
        <span class="cppl-news-tag">
          <span class="cppl-lang-en">Scholarship</span>
          <span class="cppl-lang-ko" lang="ko">장학금</span>
        </span>
        <span>2026</span>
      </div>
      <h3>
        <span class="cppl-lang-en">Sohye Jo Selected for the 2026 KOSAF Doctoral Excellence Scholarship</span>
        <span class="cppl-lang-ko" lang="ko">조소혜 학생, 2026년 한국장학재단 박사우수장학금(이공계) 선정</span>
      </h3>
      <p class="cppl-lang-en">Sohye Jo, an incoming Ph.D. student at CPPL, has been selected for the 2026 Korea Student Aid Foundation Doctoral Excellence Scholarship in Science and Engineering. She also received a scholarship certificate and medal from the Deputy Prime Minister and Minister of Science and ICT. Congratulations on this outstanding achievement.</p>
      <p class="cppl-lang-ko" lang="ko">CPPL 박사과정 신입생 조소혜 학생이 2026년 한국장학재단 박사우수장학금(이공계) 신규장학생으로 선정되었으며, 부총리 겸 과학기술정보통신부 장관 명의의 장학증서와 메달을 받았습니다. 진심으로 축하합니다.</p>
    </div>
  </article>

  <article class="cppl-news-card">
    <div class="cppl-news-photo">
      <img src="{{ base_path }}/images/members/oh-jeongmin.jpg" alt="Jeongmin Oh" loading="lazy">
    </div>
    <div class="cppl-news-copy">
      <div class="cppl-news-meta">
        <span class="cppl-news-tag">
          <span class="cppl-lang-en">Undergraduate Research</span>
          <span class="cppl-lang-ko" lang="ko">학부연구</span>
        </span>
        <span>2026</span>
      </div>
      <h3>
        <span class="cppl-lang-en">Jeongmin Oh Selected for the 2026 Undergraduate Mini Research Project</span>
        <span class="cppl-lang-ko" lang="ko">오정민 학생, 2026년도 학부생 미니 연구 프로젝트 선정</span>
      </h3>
      <p class="cppl-lang-en">Jeongmin Oh, an undergraduate researcher at CPPL, has been selected for the 2026 Undergraduate Mini Research Project Support Program. Congratulations, and we look forward to the research ahead.</p>
      <p class="cppl-lang-ko" lang="ko">CPPL 학부연구생 오정민 학생이 2026년도 학부생 미니 연구 프로젝트 지원사업에 선정되었습니다. 선정을 축하하며 앞으로의 연구를 응원합니다.</p>
    </div>
  </article>
</div>

{% capture written_year %}'None'{% endcapture %}
{% for post in site.posts %}
  {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
  {% if year != written_year %}
    <h2 id="{{ year | slugify }}" class="archive__subtitle">{{ year }}</h2>
    {% capture written_year %}{{ year }}{% endcapture %}
  {% endif %}
  {% include archive-single.html %}
{% endfor %}
