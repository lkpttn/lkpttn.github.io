---
layout: post
title: 'DoSomething.org Phoenix-Next'
date: 2017-04-15 17:40:28 -0400
category: projects
tags: web design
image: projects/phoenix/header.jpg
---

Early in 2017, the DoSomething team shipped an experimental new platform, internally named Phoenix-Next. You can view the live version on select DoSomething campaigns or view the source code on Github.
Introduction

DoSomething.org runs campaigns that encourage young people to take online and offline action to have an impact on a local, national, or global scale. We have more than 290 campaigns across 12 cause spaces that range from small actions like sharing facts with friends about the dangers of texting and driving to difficult, long-term actions like leading other students to petition their school administration to change unfair school discipline processes.

Our main Drupal platform is internally named Phoenix, and Phoenix-Next represented a departure in our platform philosophy, technology stack, and team composition. For this project, I served as the Product Designer and worked extremely closely with a Product Manager and three engineers in an Agile/Scrum style team.

#### Major Responsibilities

- Writing product briefs, documentation, feature specs
- Creating user flows and journeys
- Building and testing prototypes
- Conducting user research
- Presenting updates and feature plans to executives
- Visual design and branding

### Process

While not written in stone, most DoSomething products follow a consistent path. There are four major components, and each product team member overlaps with two or three of them. In order, they are: Identification, Ideation, Specification, and Implementation (Please let me know you if you know another “I” word that could replace specification)

### Identification

We usually identify potential product opportunities or deficiencies with one of two methods. We have a relatively sophisticated data infrastructure for a not-for-profit and employ multiple data analysts who can help spot larger trends over time. We also conduct qualitative research as needed, along with a quarterly survey of our members. From our quantitative analysis, we were seeing a trend where the organization would launch a new campaign, but most of the participants would be new members.

From this observation, we started qualitative research. Why were members not returning? We found that our current platform was doing a decent job of converting visitors into members but a poor job of engaging them afterwards or closing the loop with the impact of their actions. This led to lower return rates and only the most ambitious members became invested in the platform. Return to platform and recurring users became our most important metrics, and management made these our Objectives and Key Results (OKRs) for the entire organization.

Through our interviews and research, we found that the static nature of our current campaigns was lacking. A typical DoSomething campaign was a static page—mostly instructions about how to complete an action. After completing the specific action for a campaign (collecting jeans, making posters, talking to friends) a user returns to the platform to upload a reportback photoproof that she or he completed the action—a photo in the campaign gallery, and sometimes an entry into a scholarship drawing. There were no points of engagement with DoSomething or the campaign aside from the initial sign-up and the uploading of a photo, which would take upwards of a week to complete more complex offline actions. With such high barrier actions, it was unreasonable to expect a user to complete more than one campaign a month.

When taken as a sum, these problems prevented consistent engagement and led to a small number of brand ambassadors for us. I won’t go into the entire history of the old platform, but these issues had been understood for a while, and now we had the onus to explore a new platform with new interaction methods.

### Ideation

We knew that we wanted a new product/platform that was much more engaging to users. A couple of guiding principles we set as we ideated on how to provide more interesting content and activities for users. First, we wanted members to interact with each other and to build a sense of community around a campaign. Secondly, we wanted users to have authentic reasons for returning to the platform––not cheap email tricks or hidden information. These principles gave us a loose structure, but a lot of room to flex creative thinking muscles when imagining a new platform.

I first started brainstorming and doodling in July of 2016. As a team, we spent September through December 2016 in the ideation and specification stages. The Product Manager and I led rounds of brainstorming with the key stakeholders and solicited input from the entire staff. At the same time, our engineers were doing technical experimentation with different frameworks and platforms to see what options existed outside of Drupal. We tried on all types of systems looking for the right combination. We needed to appease our business development team, marketers, creative team, and campaign creators and create meaningful features that would lead users to return to the platform and inspire them to complete complex off-line actions.

#### Early notes and flows

![A screenshot of early Phoenix ideation notes](/assets/images/projects/phoenix/notes1.jpg)
![A flowchart of user engagement on the Phoenix platform](/assets/images/projects/phoenix/notes2.jpg)

### Specification

After a breakthrough session in October, we assembled a set of features that would be the basis of the new platform. In Phoenix-Next, the campaign revolves around a community tab that displays updates in a reverse chronological order. We wanted to change the structure of the campaign be primarily community focused, with a feed that displays update messaging from the campaign leader and content from other members involved. We can structure the feed for whatever the demands of the campaign are––showcasing members, partners, CTAs, updates from the campaign leads, tips, and many more.

The feed would give us a core loop to the product experience and a way to communicate the impact of the campaign back to users. It’s extensible as we develop new types of feed content and allows users see before signing up what involvement with a campaign looks like. We solved a whole slew of problems with the selected system. Nominally, we were creating a set of engagement points for users to remain in touch with the platform and content, but more importantly, we were creating an ecosystem for users to support each other. Before signing up for a campaign, users could now see plenty of photos from real members taking action in their local communities. They provide other members with positive feedback and foster a sense of community within a campaign that doesn’t require DoSomething staff to broker transactions.

#### Wireframes of early headers and feature sets

![A screenshot of initial wireframes for various Phoenix features](/assets/images/projects/phoenix/Early_1.png)
![A second early idea of the Phoenix platform](/assets/images/projects/phoenix/Early_2.png)

### Implementation

We designed a beautiful set of systems, but one of the hardest challenges was in testing our assumptions and creating the minimum viable platform we could put in front of users. From January to March 2017, we worked on our launch version. It was a harsh process, cutting important systems out to save time while maintaining the crucial components to push engagement and provide a positive experience for users. We did usability studies with groups of students who would come to the office, showing them everything from paper cards to fully functional coded prototypes. We were able to slim down our builds by eliminating features that didn’t perform well in testing or we could fake with low-engineering tests until they proved to be useful.

In March 2017, we launched Phoenix-Next with a flagship campaign fighting Islamophobia, called “Sincerely, Us.” We encouraged members to create Happy Ramadan cards for their Muslim-American neighbors, and we would distribute them to every mosque in America. The campaign was a huge success, but like most new platforms, Phoenix-Next was not without hiccups. It didn’t come with the years of optimization that Phoenix-Ashes has, but we’ve seen incredible progress in the amount of users who are returning to the platform, engaging with other users, and becoming DoSomething ambassadors.

Since the launch, we’ve been implementing features that didn’t make the 1.0 build and conducting A/B tests to optimize our CTAs, hone our messaging, and perform more innovative experiments faster than was ever possible with our old platform. For the course of the campaign, our members made more than 41,000 handmade Ramadan cards, which were delivered to every mosque in America in time for Eid al-Fitr.

<div class="full-container gallery">
<img src="/assets/images/projects/phoenix/Gallery_3.png" alt="A desktop view of a Phoenix campaign page header"/>
<img src="/assets/images/projects/phoenix/Gallery_2.png" alt="A desktop view of a Phoenix campaign community page"/>
<img src="/assets/images/projects/phoenix/Gallery_4.png" alt="A desktop view of a Phoenix campaign photo upload module"/>
</div>
