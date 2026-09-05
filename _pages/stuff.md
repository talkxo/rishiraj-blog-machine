---
layout: content
title: Stuff I Use
permalink: /stuff/
---

<div class="c-summary">I've always had a thing for gadgets; they just make life more interesting and fun. But it's not just about having the latest tech for me. Ever since I read Paul Graham's essay <a href="http://www.paulgraham.com/stuff.html">Stuff</a> (which, by the way, is a great read), I've started to focus more on investing in fewer, but higher-quality tech products that really help me get things done. I also love the idea of sharing what works for me, so I've put together a list of the tech gear and software I use and recommend.
</div>

<img src="/assets/images/workspace-hero.webp" 
     alt="Workspace setup with MacBook Pro and external monitor" 
     width="800" 
     height="600" 
     loading="lazy"
     style="width: 100%; height: auto; margin-bottom: 2rem;">

<div class="c-setup-summary" style="background: rgba(0, 163, 108, 0.08); border-radius: 12px; padding: 2rem; margin-bottom: 3rem;">
  <h3 style="margin-top: 0 !important; margin-bottom: 1.25rem !important; color: var(--color-accent) !important; font-weight: 500 !important;">My current setup</h3>
  <p style="margin-bottom: 0;">I work on an <strong>LG UltraFine Display</strong> with my <strong>Apple MacBook Pro 14" M4 Max</strong>, using a <strong>Logitech MX Master 2S</strong> mouse on a self-assembled <strong>Jin Office Electric Standing Desk</strong>. My chair is the <strong>Featherlite Liberate</strong>, lit by an <strong>Ikea TÅGARP</strong> lamp.</p>
</div>

<hr>

<h2 class="c-archives__year">EDC</h2>
<section class="c-edc-grid">
  <article class="c-edc-card">
    <div class="c-edc-card__icon">{% include icon.html name="headphones" %}</div>
    <div class="c-edc-card__content">
      <h3>Headphones</h3>
      <p>Sony WH-1000XM3</p>
    </div>
  </article>
  <article class="c-edc-card">
    <div class="c-edc-card__icon">{% include icon.html name="device" %}</div>
    <div class="c-edc-card__content">
      <h3>Earphones</h3>
      <p>AirPods 3, CMF Buds 2 Pro</p>
    </div>
  </article>
  <article class="c-edc-card">
    <div class="c-edc-card__icon">{% include icon.html name="speaker" %}</div>
    <div class="c-edc-card__content">
      <h3>Speaker</h3>
      <p>Marshall Willen II</p>
    </div>
  </article>
  <article class="c-edc-card">
    <div class="c-edc-card__icon">{% include icon.html name="camera" %}</div>
    <div class="c-edc-card__content">
      <h3>Camera</h3>
      <p>Sony A6400</p>
    </div>
  </article>
  <article class="c-edc-card">
    <div class="c-edc-card__icon">{% include icon.html name="camera" %}</div>
    <div class="c-edc-card__content">
      <h3>Primary Lens</h3>
      <p>Sigma 30mm f/1.4</p>
    </div>
  </article>
  <article class="c-edc-card">
    <div class="c-edc-card__icon">{% include icon.html name="tablet" %}</div>
    <div class="c-edc-card__content">
      <h3>Others</h3>
      <p>iPad, Kindle, Apple Watch</p>
    </div>
  </article>
</section>

<hr>

<h2 class="c-archives__year">Softwares</h2>
<p style="margin-bottom: 0.5rem;">For browsing, I use <strong>Arc</strong> — after <a href="/2026/im-looking-for-a-new-browser">a long detour through every alternative worth trying</a>, I'm back, sticking with it until it's discontinued for good, though still on the lookout for a WebKit-based alternative like <strong>Nook</strong>. My email default is <strong>Apple Mail</strong>, though I've been trying <strong>Extra</strong> — the mail app from the folks behind Pinterest — and loving it so far. Everything gets launched through <strong>Raycast</strong>.</p>
<p style="margin-bottom: 0.5rem;">I take notes in <strong>Bear</strong> and handle to-dos with <strong>Apple Reminders</strong> — <a href="/2025/teuxdeux-to-apple-reminders">I switched over from TeuxDeux</a> not too long ago. <strong>Notion Calendar</strong> keeps my schedule for now. Notion has already shut down Mail, though, and will likely sunset Calendar too — so I may end up back on Apple Calendar soon. For AI assistants, it's <strong>Claude</strong> day-to-day — I'm out of both the ChatGPT and Perplexity ecosystems now — with <strong>Gemini</strong> for Workspace and collaboration.</p>
<p style="margin-bottom: 0.5rem;">Typing runs through <a href="https://github.com/FuJacob/cotabby"><strong>CoTabby</strong></a> — the open-source alternative to Cotypist — on <strong>Tabby-2-mini</strong> (a compact Qwen3.5-2B build) day-to-day. For more headroom, I switch to local inference via <a href="https://github.com/drumih/turbo-fieldfare"><strong>Turbo Fieldfare</strong></a> running <strong>Gemma 4 26B-A4B</strong> — the whole stack is basically an experiment in sustainable, fully local model inference.</p>
<p style="margin-bottom: 0.5rem;">Dictation runs through <a href="https://github.com/typewhisper/"><strong>TypeWhisper</strong></a>, built on <strong>Parakeet V3</strong> for transcription with <a href="https://superwhisper.com/blog/s1"><strong>s1-mini</strong></a> doing post-processing (via a small extension I built myself). It's basically always on now — I've gotten lazy and would rather dictate than type, so that pair runs constantly, with CoTabby taking over whenever I do type. For Hindi, Hinglish, and transliterated Hindi messaging on iPhone, I use Sarvam's <a href="https://www.sarvam.ai/blogs/asr"><strong>Saaras v3</strong></a> and I'm loving it too.</p>
<p style="margin-bottom: 3rem;">I've tried a stack of dictation apps at this point. I keep coming back to TypeWhisper not just because it's open-source, but for its workflow capabilities, extensions, and an active open-source scene that ships updates and fixes more often than the rest of the OSS dictation crowd — plus features most of them don't have. I still have a soft spot for how simple <strong>Hex</strong> was (retired now), and <a href="https://github.com/cjpais/Handy"><strong>Handy</strong></a> is solid too. What I won't do is pay a subscription for dictation apps like Superwhisper or Whispr Flow — they're not local, the privacy trade-off isn't worth it, and cloud dictation eats far too much of your machine's resources for what it does. If you need online inference, run Whisper on <strong>Groq</strong> instead. That said, credit where it's due — Superwhisper putting out <strong>s1-mini</strong> as an open-source model has been a big help for post-processing.</p>

<hr>

<h2 class="c-archives__year">Archived</h2>
<section class="c-archive-list">
  <article class="c-archive-row">
    <div class="c-archive-row__left">
      <div class="c-archive-row__icon">{% include icon.html name="mail" %}</div>
      <h3 class="c-archive-row__title">Mimestream</h3>
    </div>
    <span class="c-archive-row__badge">2026</span>
  </article>
  <article class="c-archive-row">
    <div class="c-archive-row__left">
      <div class="c-archive-row__icon">{% include icon.html name="type" %}</div>
      <h3 class="c-archive-row__title">Cotypist (local model)</h3>
    </div>
    <span class="c-archive-row__badge">2026</span>
  </article>
  <article class="c-archive-row">
    <div class="c-archive-row__left">
      <div class="c-archive-row__icon">{% include icon.html name="globe" %}</div>
      <h3 class="c-archive-row__title">Mozilla Firefox</h3>
    </div>
    <span class="c-archive-row__badge">2026</span>
  </article>
  <article class="c-archive-row">
    <div class="c-archive-row__left">
      <div class="c-archive-row__icon">{% include icon.html name="type" %}</div>
      <h3 class="c-archive-row__title">Hex (local model)</h3>
    </div>
    <span class="c-archive-row__badge">2026</span>
  </article>
  <article class="c-archive-row">
    <div class="c-archive-row__left">
      <div class="c-archive-row__icon">{% include icon.html name="laptop" %}</div>
      <h3 class="c-archive-row__title">MacBook Pro 13" (Intel)</h3>
    </div>
    <span class="c-archive-row__badge">2025</span>
  </article>
  <article class="c-archive-row">
    <div class="c-archive-row__left">
      <div class="c-archive-row__icon">{% include icon.html name="device" %}</div>
      <h3 class="c-archive-row__title">Nothing Phone 2A</h3>
    </div>
    <span class="c-archive-row__badge">2025</span>
  </article>
  <article class="c-archive-row">
    <div class="c-archive-row__left">
      <div class="c-archive-row__icon">{% include icon.html name="globe" %}</div>
      <h3 class="c-archive-row__title">Microsoft Edge</h3>
    </div>
    <span class="c-archive-row__badge">2025</span>
  </article>
  <article class="c-archive-row">
    <div class="c-archive-row__left">
      <div class="c-archive-row__icon">{% include icon.html name="calendar" %}</div>
      <h3 class="c-archive-row__title">Cron Calendar</h3>
    </div>
    <span class="c-archive-row__badge">2025</span>
  </article>
  <article class="c-archive-row">
    <div class="c-archive-row__left">
      <div class="c-archive-row__icon">{% include icon.html name="mail" %}</div>
      <h3 class="c-archive-row__title">Shortwave</h3>
    </div>
    <span class="c-archive-row__badge">2025</span>
  </article>
  <article class="c-archive-row">
    <div class="c-archive-row__left">
      <div class="c-archive-row__icon">{% include icon.html name="note" %}</div>
      <h3 class="c-archive-row__title">TeuxDeux</h3>
    </div>
    <span class="c-archive-row__badge">2025</span>
  </article>
  <article class="c-archive-row">
    <div class="c-archive-row__left">
      <div class="c-archive-row__icon">{% include icon.html name="device" %}</div>
      <h3 class="c-archive-row__title">iPhone 13 Mini</h3>
    </div>
    <span class="c-archive-row__badge">2024</span>
  </article>
  <article class="c-archive-row">
    <div class="c-archive-row__left">
      <div class="c-archive-row__icon">{% include icon.html name="device" %}</div>
      <h3 class="c-archive-row__title">Nothing Ear (1)</h3>
    </div>
    <span class="c-archive-row__badge">2024</span>
  </article>
  <article class="c-archive-row">
    <div class="c-archive-row__left">
      <div class="c-archive-row__icon">{% include icon.html name="speaker" %}</div>
      <h3 class="c-archive-row__title">Bose Soundlink Mini II</h3>
    </div>
    <span class="c-archive-row__badge">2022</span>
  </article>
  <article class="c-archive-row">
    <div class="c-archive-row__left">
      <div class="c-archive-row__icon">{% include icon.html name="device" %}</div>
      <h3 class="c-archive-row__title">Google Pixel 4A</h3>
    </div>
    <span class="c-archive-row__badge">2021</span>
  </article>
  <article class="c-archive-row">
    <div class="c-archive-row__left">
      <div class="c-archive-row__icon">{% include icon.html name="device" %}</div>
      <h3 class="c-archive-row__title">Samsung Galaxy S9</h3>
    </div>
    <span class="c-archive-row__badge">2020</span>
  </article>
  <article class="c-archive-row">
    <div class="c-archive-row__left">
      <div class="c-archive-row__icon">{% include icon.html name="device" %}</div>
      <h3 class="c-archive-row__title">AirPods 2</h3>
    </div>
    <span class="c-archive-row__badge">2020</span>
  </article>
  <article class="c-archive-row">
    <div class="c-archive-row__left">
      <div class="c-archive-row__icon">{% include icon.html name="laptop" %}</div>
      <h3 class="c-archive-row__title">MacBook Air 13" (2015)</h3>
    </div>
    <span class="c-archive-row__badge">2019</span>
  </article>
  <article class="c-archive-row">
    <div class="c-archive-row__left">
      <div class="c-archive-row__icon">{% include icon.html name="headphones" %}</div>
      <h3 class="c-archive-row__title">Sony MDR-ZX300</h3>
    </div>
    <span class="c-archive-row__badge">2016</span>
  </article>
  <article class="c-archive-row">
    <div class="c-archive-row__left">
      <div class="c-archive-row__icon">{% include icon.html name="camera" %}</div>
      <h3 class="c-archive-row__title">Nikon P510</h3>
    </div>
    <span class="c-archive-row__badge">2015</span>
  </article>
  <article class="c-archive-row">
    <div class="c-archive-row__left">
      <div class="c-archive-row__icon">{% include icon.html name="laptop" %}</div>
      <h3 class="c-archive-row__title">MacBook Pro 13" (2011)</h3>
    </div>
    <span class="c-archive-row__badge">2015</span>
  </article>
</section>

