---
layout: post
title: "Automating the Attendance Module at Work"
description: "Exploring native interaction automation on dumb office softwares, to bypass attendance system."
date: 2014-09-15
tags: python automation
republished:
  - link: https://rishiraj.svbtle.com/automating-the-attendance-module-at-work
    language: us
---
This place I work has an online portal where every employee must login with their user credentials and log their attendance for the day. The problem is, everyone forgets to do that everyday. Its super messy!

Even I do forget to do it at times. I entered office at 9.30 today and logged my attendance at 10.20, when a reminder popped up on my phone. Technically I was half an hour early to work, but I’m gonna suffer a 20 minutes delay mark in my performance sheet.

Anyways, to get over this, I have decided to hack and automate the attendance module. like a boss

So the attendance module is a form, with three key input fields: 1) Username, 2) Password, and the 3) IN button. Employees have to fill up their assigned username and password, then punch the IN button to login their attendance for the day with date and time.

Pretty easy to automate this process, at a trigger I can choose. What I can do is, simply use mechanize ( http://wwwsearch.sourceforge.net/mechanize/ ) to automate the form. That simple, yes!

The trigger can be anything. Maybe a time frame or as soon as I turn my computer on from 9am to 12pm on week days. Or maybe when I check in into my office using the Swarm app. I never forget to check in on 4sq/Swarm!

But I won’t be automating the Attendance Module. The attendance is a way I push myself to work early everyday, giving me some extra time to brainstorm or even prepare a list of things I need to get done that day. Cheerio.