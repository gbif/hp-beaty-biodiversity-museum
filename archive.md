---
title: 'Archive'
description: 'This page contains all historical versions of datasets that the museum publishes.'
lang: en
lang-ref: archive
layout: post
permalink: /archive
---

To download a previous version, click on the appropriate button. This will open up the IPT page for that version, which will have download links for the data in the DwC-A format, and Metadata as EML or RTF.

{% for archive in site.data.archives %}
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