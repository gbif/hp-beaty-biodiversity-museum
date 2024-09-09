---
title: 'Archive'
description: 'Cette page contient toutes les versions antérieures des ensembles de données publiés par le musée.'
lang: fr
lang-ref: archive
layout: post
permalink: /fr/archive
---

Pour télécharger une version antérieure, cliquez sur le bouton approprié. Cette opération ouvrira la page IPT de cette version, qui contiendra les liens de téléchargement pour les données en format DwC-A, et Metadata en EML ou RTF.

{% for archive in site.data.fr.archives %}
<h1>
{{ archive.title }}
</h1>
<div class="btn-group">
{% for version in archive.versions %}
{% capture url %}
https://data.canadensys.net/ipt/resource?r={{ archive.root }}&v={{ version }}
{% endcapture %}
<a href="{{ url }}"><button>{{ version }}</button></a>
{% endfor %}
</div>
{% endfor %}