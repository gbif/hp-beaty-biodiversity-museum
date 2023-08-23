---
lang-ref: home
layout: home
description: |
  The Beaty Biodiversity Museum is Vancouver's natural history museum. <span data-ajax-url="https://api.gbif.org/v1/occurrence/search?publishingOrg=b542788f-0dc2-4a2b-b652-fceced449591&limit=0">1,883</span> objects across 9 collections are currently available online, showcasing biodiversity from around the world.
background: /assets/images/hero-image.jpg
imageLicense: |
  [*No Title* David Gilbar, 2010](https://beaty-biodiversity-museum.hp.gbif-staging.org/specimen/search?entity=2571118608) All Rights Reserved, Beaty Biodiversity Museum
height: 100vh
parallax: true
cta:
  - text: Specimens
    href: /specimen/search
    isPrimary: true
  - text: Collections
    href: /collection/search
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
  - type: split
    data: home.polarBear
  - type: features
    data: home.specimens
---


 


