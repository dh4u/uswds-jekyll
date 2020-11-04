---
title: Home
permalink: /

layout: home

hero:
  image: /assets/uswds/img/hero.png
  callout:
    alt: "Hero callout:"
    text: Bring attention to a current priority
  button:
    href: /callout/
    text: Call to action
  link:
    text: Link to more about that priority
    href: /link/
  content: Support the callout with some short explanatory text. You don't need more than a couple of sentences.

tagline: A tagline highlights your approach.
intro: |
  The tagline should inspire confidence and interest, [focusing on the value](javascript:void(0);) that your overall approach offers to your audience. Use a heading typeface and keep your tagline to just a few words, and don’t confuse or mystify.

  Use the right side of the grid to explain the tagline a bit more. What are your goals? How do you do your work? Write in the present tense, and stay brief here. People who are interested can find details on internal pages.

graphics:
  - image:
      src: /assets/uswds/img/circle-124.png
      alt: ""
    title: Graphic headings can vary.
    description: Graphic headings can be used a few [different ways](javascript:void(0);), depending on what your landing page is for. Highlight your values, specific program areas, or results.
  - image:
      src: /assets/uswds/img/circle-124.png
      alt: ""
    title: Stick to 6 or fewer words.
    description: Keep body text to about 30. They can be shorter, but try to be somewhat balanced across all four. It creates a clean appearance with good spacing.
  - image:
      src: /assets/uswds/img/circle-124.png
      alt: ""
    title: Never highlight anything without a goal.
    description: For anything you want to highlight here, understand what your users know now, and what activity or impression you want from them after they see it.
  - image:
      src: /assets/uswds/img/circle-124.png
      alt: ""
    title: Could also have 2 or 6.
    description: In addition to your goal, find out your users’ goals. [What do they want to know](https://18f.gsa.gov/) or do that supports your mission? Use these headings to show those.
---

## Section heading

{:.font-heading-xl.margin-y-0"}

Timeline
<ul>
  {% for week in site.data.home.timeline %}
    {% assign current-week = week.week %}
    <div>
        <h4>{{ current-week.week.dates }}</h4>
        {% for event in current-week.events %}
        {% assign current-event = event.event %}
          <h5>{{ current-event.headline }}</h5>
          <p>{{ current-event.text }}</p>
        {% endfor %}
    </div>
  {% endfor %}
</ul>

<!-- https://designsystem.digital.gov/utilities/layout-grid/ -->
{% for statement in site.data.home.problem_statements %}
  {% assign current-statement = statement.statement %}
  <div class="grid-container">
    <hr class="" />
    <div class="grid-row">{{ current-statement.heading }}</div>
    <div class="grid-row">{{ current-statement.subheading }}</div>
    <div class="grid-row">{{ current-statement.call-out }}</div>
    <div class="grid-row">
      <div class="grid-column grid-col-4">
        <div>
          <p>Executive Champion</p>
          <p>
          {{ current-statement.executive-champion }}
          {% if current-statement.executive-director != "" %}
            <br />{{ current-statement.executive-director }}
          {% endif %}
          </p>
          <br><br>
          {% if current-statement.product-advisors.size and current-statement.product-advisors.size != 0 %}
            <p>Product Advisors</p>
            <ul>
              {% for advisor in current-statement.product-advisors %}
                <li>{{ advisor }}</li>
              {% endfor %}
            </ul>
          {% endif %}
        </div>
      </div>
      <div class="grid-container">  
        <div class="grid-column grid-container">
          <div>
            {% if current-statement.tech-teams.size and current-statement.tech-teams.size != 0 %}
              <p>Tech Teams</p>
              <ul>
              {% for team in current-statement.tech-teams %}
              <li>{{ team }}</li>
              {% endfor %}
              </ul>
            {% endif %}
          </div>
          <div>
            {% if current-statement.user-advocates.size and current-statement.user-advocates.size != 0 %}
              <p>User Advocates</p>
              <ul>
              {% for advocate in current-statement.user-advocates %}
              <li>{{ advocate }}</li>
              {% endfor %}
              </ul>
            {% endif %}
          </div>
        </div>
      </div>
    </div>
  </div>
{% endfor %}

Everything up to this point [should help people](<javascript:void(0);>) understand your agency or project: who you are, your goal or mission, and how you approach it. Use this section to encourage them to act. Describe why they should get in touch here, and use an active verb on the button below. “Get in touch,” “Learn more,” and so on.
{:.usa-intro }

[Call to action](#){: .usa-button.usa-button--big }
