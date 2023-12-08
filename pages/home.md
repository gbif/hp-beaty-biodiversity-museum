---
lang-ref: home
layout: home
description: |
  <p class="tagLine">The Beaty Biodiversity Museum is Vancouver's natural history museum. <span data-ajax-url="https://api.gbif.org/v1/occurrence/search?institutionCode=BBM&limit=0">641,448</span> objects across 3 collections are currently available online, showcasing biodiversity from around the world.</p>

    <div class="searchWrapper">
      <!-- Tab links -->
      <div class="tab">
        <button class="tablinks active" onclick="openTab(event, 'searchTab_name')">Search by Catalogue Number</button>
        <button class="tablinks" onclick="openTab(event, 'searchTab_catalogNumber')">
          General search</button>
      </div>

      <!-- Tab content -->
      <div id="searchTab_name" class="tabcontent" style="display: block;">
        <form action="/specimen/search" method="GET">
          <input name="catalogNumber" class="input" type="text" placeholder="Try M002500 or V1" style="width: 100%;">
          <button type="submit" class="button is-ghost">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" d="M0 0h24v24H0z"></path><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
          </button>
        </form>
      </div>

      <div id="searchTab_catalogNumber" class="tabcontent">
        <form action="/specimen/search" method="GET">
          <input id="home_specimen_input" name="q" class="input" type="text" placeholder="Try Vulpes vulpes" style="width: 100%;">
          <button type="submit" class="button is-ghost" >
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" d="M0 0h24v24H0z"></path><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
          </button>
        </form>
      </div>
    </div>
    <script>
      window.setTimeout(function() {
        let a = document.getElementById('headline-offset');
        a.parentElement.style.marginLeft = '-' + a.offsetWidth + 'px';
        // a.parentElement.parentElement.style.paddingLeft = a.offsetWidth + 'px';
      }, 300);

      function openTab(evt, tabName) {
        // Declare all variables
        var i, tabcontent, tablinks;

        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }

        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
      }
    </script>
background: /assets/images/hero-image.jpg
imageLicense: |
    *No Title* David Gilbar, 2010 All Rights Reserved, Beaty Biodiversity Museum
height: 100vh
parallax: true
cta:
  - text: All records
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


 


