---
layout: post
title: 'Design Systems Masterclass'
date: 2017-11-15 17:40:28 -0400
category: projects
tags: design speaking
image: projects/masterclass/header.jpg
---

After giving a lightning talk at the NYC Design Systems Coalition Meetup, I was approached about turning it into a full webinar for UXPin. I gladly accepted and was able to expand my initial idea into a full talk, [Scaling Your Product With Design Systems](https://www.uxpin.com/studio/webinars/scaling-product-design-systems-2/). The crux of the talk is about how DoSomething.org manages to maintain a robust product ecosystem with a small (sometimes singular) design team. You can watch the [full webinar](https://www.uxpin.com/studio/webinars/scaling-product-design-systems-2/), view the [slides](https://speakerdeck.com/lkpttn/uxpin-scaling-your-product-with-design-systems) or read my short recap below.

### Recap

DoSomething is a non-profit that operates as a tech company. We're open-source by default and build our own platforms, services and APIs. We employ about 15 full-time software engineers and one product designer. It's pretty clear how this could become an issue. Luckily, we have a design system.

Forge is our design system. At it’s core, Forge is a set of components and styles we import to all of our products. It exists as a Sketch file for our design team and the code version is distributed with npm to each of our projects. Forge does three important things for us. First, it allows us to maintain consistency across a whole ecosystem of products. We don’t have to worry about the color of links, the spacing of buttons, etc. Secondly, it empowers our engineers to build without being constrained by design bandwidth. Third, it allows us to scale our design and engineering philosophies.

Forge was originally built to house a style library as we started adding more people to the front-end of our applications. It was a simple style set that we could pass around between engineers. It also allowed us to create a style guide in Sketch for quickly mocking up pages and features.

The natural extension of this is allowing engineers to build on their own with the styles and blocks you’ve created. This is one of the powers of the design system. When we were building a new administrative tool, we were able to build the entire interface out of a design system we already had, without a product designer spending more than a week with the team. Engineers and the project manager can build prototypes and tools without having to wait on a designer. We’ve freed up teams to create prototypes and experiments on their own.

This kind of scaling is the crucial component of Forge that allows us to maintain a whole ecosystem. We’re not talking about scale as the number of users or conversion growth. We’re talking about bandwidth and queue growth. The ability for your team to work on more projects, faster, easier. One of the ways to measure the efficiency of your team is to keep track of your queue, to see how long it takes an idea to make it from conception to completion. A design system is essentially a multiplicative effect on a product team’s bandwidth (both design and code) and allows you to turn over your queue of important work much faster.

In addition to scale, we're talking about consistency. Maintaining consistency of both functional code and visual style is probably the core responsibility of any design system. Design consistency is the visible aspect, making sure that cards, buttons, titles and more are unambiguous and properly implemented across a product. But code quality can benefit too. With a design system, you’re integrating code and components directly into it. You get to have a collaborative code environment to solidify your best practices. You don’t want to repeat your code, a design system is the best way to do that. Your senior engineers can set best practices and have that information and expertise flow down to junior engineers.

We have one person with a job title of “Product Designer”, but lot of people who contribute to a system and that system designs and builds products. Scaling a team around one designer isn't easy or advisable, but it is possible. You need a couple things in place to start seeing success across multiple teams. The key outcome is an infrastructure that allows for a designer to move in and out of the team’s orbit as their individual bandwidth waxes and wanes.
If I had to wrap everything up one last time, this is what I would want you to walk away with. If you are a small or mid size company, investing in a design system can do a lot of things for you. Use it to stretch your resources. Use it so you can build once and use everywhere. And as your team and your offerings grow, use it to scale your philosophies. We’re able to ship and maintain exponentially more products and only had to increase hiring for one side of the organization. And if you do have the ability to hire more designers for your team you’re just expanding that multiplicative effect.
