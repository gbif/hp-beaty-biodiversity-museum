---
title: About
layout: page
permalink: /about
description: Information about the digital structure of the museum, and how this site is organized.
background: /assets/images/about-image.jpg
imageLicense: Beaty Biodiversity Museum CC BY-NC-SA 2.0 DEED
toc: true
mobiletoc: true
parallax: true
---

# The Structure of the Beaty Biodiversity Museum

Within the physical museum, specimens are organized under six collections, which may have smaller organizational components within them. This page will explain how the *digital* components (i.e. the components on this site) are organized.

## The Organizational Tree

Below is an overview of how the digital records are organized relative to each other at Beaty. 

- [Beaty Biodiversity Museum](/institution/c7d5c4da-9590-49c2-b87c-f0e7932611a6)
    - [UBC Herbarium](/collection/b44fcb7f-1227-4fa3-8ed2-de27aabb06e0)
       - [Algae](/dataset/90302970-1bc6-4865-be76-9aef1dd707f9)
       - [Bryophytes](/dataset/4edd9396-59df-4b01-9e29-dc21a59f9963)
       - [Fungi](/dataset/ca1bcd7e-7387-42f9-81ba-1470db55e3e8)
       - [Lichen](/dataset/628abbe5-dc8d-41e9-a0c7-f05efe282649)
       - [Vascular Plants](/dataset/07fd0d79-4883-435f-bba1-58fef110cd13)
    - [Cowan Tetrapod Collection](/collection/3b2ad644-b3e4-4ac9-a57f-23be3f86ed0e)
       - [Birds](/dataset/ba0c046d-52bb-4262-a495-652988c9f3f7)
       - [Herpetology](/dataset/df9c8b86-9d36-4e29-91b3-4274dff053e5)
       - [Mammals](/dataset/3ad882bb-cd21-4201-8b83-3684bfc6d830)
    - [Spencer Entomology Collection](/collection/8f5f5b6f-28c6-44b4-8f21-98c55eaae203)
       - [Spencer Entomology Collection](/dataset/9c45867f-f77d-42f3-9751-ae16bb7c9bc8)
    - [Fish Collection](/collection/5aee131f-91dd-4b78-bfee-296f86801b7f)
       - Fish
    - [Fossil Collection](/collection/1fcf0cb0-aa26-40d0-8311-fb4b6f2050f7)
       - Fossils
    - [Marine Invertebrate Collection](/collection/403e3c1f-086f-461b-9718-60537ee4ce3c)
       - Marine Invertebrates

The top level is the museum, which exists as an institution. The second level in the nesting are the collections, and the third level represent datasets. Records can be distinguished through either the UUID or [Darwin Core Triplets](https://dwc.tdwg.org/rdf/). Darwin Core Triplets follow the format `Institution_Code - Collection_Code - Catalogue Number`. For example, a record within the mammals dataset would be represented as `BBM-CTC-M000001`. When citing records, **please use persistent identifiers** such as the UUID or DOI rather than darwin triplets or catalogue numbers in isolation. The Museum commits to maintaining consistent catalogue numbers whenever possible, but does not make an absolute guarantee for their persistance or permanence. If you have an identifier that is not working as expected in finding a record, please [contact us](/contact-us) and we can assist you.

## Collections

The [collections listed on this site](/collections) match the collections present in the museum. These collections have historical context for the museum and were started by specific curatorial staff. Collections vary widely in size and scope, and as such have varying staffing levels and total record counts. The Beaty museum has six collections in total, they are:

- The Spencer Entomology Collection
- The Fish Collection
- The Fossil Collection
- The UBC Herbarium
- The Marine Invertebrate Collection
- The Cowan Tetrapod Collection
 
![collection-icons](/assets/images/about-collections-icons.png)

All collections are managed in the [Global Registry of Scientific Collections](https://scientific-collections.gbif.org/) (or GRSciColl for short). Here they are kept in sync with various resources and identifiers, such as [Index Herbariorum](https://sweetgum.nybg.org/science/ih/) and the [Global Biodiversity Information Facility (GBIF)](https://gbif.org). All of the identifiers for a collection can be found at the bottom of its respective page, under the heading "Identifiers".

**Collection pages on this site can be used to:**
- View statistics on the entire collection
- Get high level contact and persistent identifiers in a scope that matches what is present at the physical museum.

Critically, "collections" *do not* directly hold any data. Rather, the data is held within datasets, which are explained below.

## Datasets

Within each collection, there is at least one dataset. Datasets are where information is further sub-cateogorized, made available for download, and assigned a [Digital Object Identifier (DOI)](https://www.doi.org/the-identifier/what-is-a-doi/). When you download specimen records as part of a dataset, you will receive a citation for that dataset *as it was at the point in time when you downloaded it*. This is critical, as datasets evolve over time and referencing particular versions of datasets means that research maintains reproducibility. The Beaty Museum releases updates to datasets at regular intervals, and these are then pushed through various systems until they are ultimately available here to end users. As mentioned above, for a specimen to exist on this site, it *must* exist within a dataset.

**Dataset pages on this site can be used to:**
- Download specimens in bulk and have a citation for that point of download
- See citations that have been made for specimens contained within the dataset

Downloading a dataset can be done from the `Download` tab on the dataset page. The appropriate citation for the dataset can be obtained at the bottom of the `About` tab on the dataset page.

# The GBIF Hosted Portal Program

This website exists as a [GBIF hosted portal](https://www.gbif.org/hosted-portals). All of the data on this site is pulled from GBIF records via an API. This means that any record found here can also be found on [gbif.org](https://www.gbif.org) or any other GBIF hosted portal that has our records included in its scope.

# Licenses
All records hosted on this portal should have a license field attached to them, and in this case that license will apply. Most records are published under the [CC0 1.0 license](https://wiki.creativecommons.org/wiki/CC0_1.0_Universal). For specific licenses inquiries, please contact the staff listed on the dataset page.