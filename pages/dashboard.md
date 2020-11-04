---
title: Collaboration Dashboard - Scott Harvey
layout: dashboard
permalink: /dashboard

styles:
 - /assets/css/dashboard.css
 - href: /assets/css/dashboard.css

---
<div class="hero">
    <div class="hero-content">
        <p class="date">July - Sept 2019</p>
        <h2>Workforce Sprint</h2>
        <p>Solve problems for American workers, businesses, investors, and communities by catalyzing cross-sector collaboration</p>
    </div>

{% include timeline.html %}
{% if site.search_site_handle  %} <!-- need to find a proper conditional based on passing data -->
    {% include components/timeline-week.html %}
{% endif %}
{% include problem-statement.html %}
