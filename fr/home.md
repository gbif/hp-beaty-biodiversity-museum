---
lang-ref: home
lang: fr 
layout: home
description: |
  <p role="heading" aria-level="2" class="tagLine">Le Beaty Biodiversity Museum est le musée d'histoire naturelle de Vancouver. Vous pouvez actuellement consulter quatre collections num numériques comptant un total de <span role="heading" aria-level="2" data-ajax-url="https://api.gbif.org/v1/occurrence/search?datasetKey=07fd0d79-4883-435f-bba1-58fef110cd13&datasetKey=90302970-1bc6-4865-be76-9aef1dd707f9&datasetKey=9c45867f-f77d-42f3-9751-ae16bb7c9bc8&datasetKey=4edd9396-59df-4b01-9e29-dc21a59f9963&datasetKey=628abbe5-dc8d-41e9-a0c7-f05efe282649&datasetKey=ca1bcd7e-7387-42f9-81ba-1470db55e3e8&datasetKey=ba0c046d-52bb-4262-a495-652988c9f3f7&datasetKey=3ad882bb-cd21-4201-8b83-3684bfc6d830&datasetKey=df9c8b86-9d36-4e29-91b3-4274dff053e5&datasetKey=4caf2040-83ad-4fa7-ba13-005bced721eb&limit=0">701,768</span> objets mettant en valeur la biodiversité à travers le monde.

  <div class="searchWrapper">
      <!-- Tab links -->
      <div class="tab">
        <button class="tablinks active" onclick="openTab(event, 'searchTab_name')">
          Recherche générale</button>
        <button class="tablinks " onclick="openTab(event, 'searchTab_catalogNumber')">Recherche par numéro de catalogue</button>
      </div>

      <!-- Tab content -->
      <div id="searchTab_name" class="tabcontent" style="display: block;">
        <form action="/fr/specimen/search" method="GET">
          <input id="home_specimen_input" name="q" class="input" type="text" placeholder="Essayer Vulpes vulpes" style="width: 100%;">
          <button type="submit" class="button is-ghost" aria-label="submit the search query">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" d="M0 0h24v24H0z"></path><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
          </button>
        </form>
      </div>

      <div id="searchTab_catalogNumber" class="tabcontent">
        <form action="/fr/specimen/search" method="GET">
          <input id="catalogNumber" name="catalogNumber" class="input" type="text" placeholder="Essayer M000001 ou V1" style="width: 100%;">
          <button type="submit" class="button is-ghost" aria-label="submit the search query" >
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
        if (a !== undefined && a !== null) {
        a.parentElement.style.marginLeft = '-' + a.offsetWidth + 'px';}
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
    <p class="orSeperator">Ou</p>
background: /assets/images/hero-image.jpg
imageLicense: |
  <em>Sanguinaria canadensis</em> L. Photo by Suzanne Labbé via [iNaturalist](https://www.gbif.org/occurrence/3764124042)
height: 100vh
parallax: true
klass: home
cta:
  - text: Parcourir toutes les fiches
    href: /fr/specimen/search/
    isPrimary: true
  - text: Ensembles de données
    href: /fr/datasets
permalink: /fr
composition:
  - type: heroImage # the block type
  - data: fr.home.stats
    type: stats
  - type: features
    data: fr.home.collectionsPreview
---


