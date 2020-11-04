---
title: Collaboration Dashboard - Scott Harvey
layout: dashboard
permalink: /dashboard

styles:
 - /assets/css/dashboard.css
 - href: /assets/css/dashboard.css

---
<div class="hero">
    <p class="date">July - Sept 2019</p>
    <h2 style="font: Oswald 50px/26px; text-transform: uppercase;">Workforce Sprint</h2>
    <p>Solve problems for American workers, businesses, investors, and communities by catalyzing cross-sector collaboration</p>
</div>

<div class="bg-primary-lighter">
    <h2>To-do for Hero</h2>
    <ol>
        <li>Change the background color of the call out box in the hero</li>
        <li>Expand the current box to cover the image? If so, will need to adjust positioning within the box. Otherwise - perhaps give the image a foreground color ;)??</li>
        <li>Change text to proper typography</li>
    </ol>
</div>

{% include timeline.html %}
{% if site.search_site_handle  %} <!-- need to find a proper conditional based on passing data -->
    {% include components/timeline-week.html %}
{% endif %}
{% include problem-statement.html %}
