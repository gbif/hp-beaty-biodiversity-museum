---
lang-ref: home
layout: home
description: |
  The Beaty Biodiversity Museum is Vancouver's natural history museum. <span data-ajax-url="https://api.gbif.org/v1/occurrence/search?institutionCode=BBM&limit=0">641,448</span> objects across 3 collections are currently available online, showcasing biodiversity from around the world.
background: /assets/images/hero-image.jpg
imageLicense: |
  *No Title* David Gilbar, 2010 All Rights Reserved, Beaty Biodiversity Museum
height: 100vh
parallax: true
cta:
  - text: Specimens
    href: /specimen/search
    isPrimary: true
  - text: Collections
    href: /collections
permalink: /
klass: home
navbar:
    color: transparent
    hasWhiteText: true
    floating: true
composition:
  - type: heroImage # the block type
  - data: home.stats
    type: stats
  - type: features
    data: home.collectionsPreview
  - type: features
    data: home.specimens
---


 


