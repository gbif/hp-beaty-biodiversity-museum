---
title: À propos
layout: page
permalink: /fr/about
lang: fr
lang-ref: about
description: Renseignements sur la structure numérique du musée et l’organisation de ce site.
background: /assets/images/about-image.jpg
imageLicense: Beaty Biodiversity Museum CC BY-NC-SA 2.0 DEED
toc: true
mobiletoc: true
parallax: true
---

# La structure du Beaty Biodiversity Museum

Dans le musée physique, les spécimens sont classés dans six collections différentes, qui peuvent comprendre de plus petits éléments organisationnels. Cette page explique comment sont organisés les éléments numériques (c.-à-d. les éléments du site).

## Organigramme

Voici une vue d’ensemble de l’organisation des fiches du Beaty.

- [Beaty Biodiversity Museum](/institution/c7d5c4da-9590-49c2-b87c-f0e7932611a6)
    - [L’herbier de l’UBC](/collection/b44fcb7f-1227-4fa3-8ed2-de27aabb06e0)
       - [Algues](/dataset/90302970-1bc6-4865-be76-9aef1dd707f9)
       - [Bryophytes](/dataset/4edd9396-59df-4b01-9e29-dc21a59f9963)
       - [Champignons](/dataset/ca1bcd7e-7387-42f9-81ba-1470db55e3e8)
       - [Lichens](/dataset/628abbe5-dc8d-41e9-a0c7-f05efe282649)
       - [Plantes vasculaires](/dataset/07fd0d79-4883-435f-bba1-58fef110cd13)
    - [La collection de tétrapodes Cowan](/collection/3b2ad644-b3e4-4ac9-a57f-23be3f86ed0e)
       - [Oiseaux](/dataset/ba0c046d-52bb-4262-a495-652988c9f3f7)
       - [Herpétologie](/dataset/df9c8b86-9d36-4e29-91b3-4274dff053e5)
       - [Mammifères](/dataset/3ad882bb-cd21-4201-8b83-3684bfc6d830)
    - [La collection entomologique Spencer](/collection/8f5f5b6f-28c6-44b4-8f21-98c55eaae203)
       - [La collection entomologique Spencer](/dataset/9c45867f-f77d-42f3-9751-ae16bb7c9bc8)
    - [La collection de poissons](/collection/5aee131f-91dd-4b78-bfee-296f86801b7f)
       - [Poissons](/dataset/4caf2040-83ad-4fa7-ba13-005bced721eb)
    - [La collection de fossiles](/collection/1fcf0cb0-aa26-40d0-8311-fb4b6f2050f7)
       - Fossiles
    - [La collection d’invertébrés marins](/collection/403e3c1f-086f-461b-9718-60537ee4ce3c)
       - D’invertébrés marins 

Le niveau supérieur de l’organigramme est le musée, qui existe en tant qu’établissement. Les éléments du deuxième niveau représentent les collections, et ceux du troisième niveau représentent les ensembles de données. Les fiches se différencient les unes des autres par des UUID ou des triplets Darwin Core. Les triplets Darwin Core suivent le format `Code d’établissement - Code de collection - Numéro de catalogue`. Par exemple, une fiche dans l’ensemble de données Mammifères serait représentée par le code `BBM-CTC-M000001`. Lorsque vous citez une fiche, **veuillez utiliser des codes d’identification consistants** comme des UUID ou des DOI plutôt que des triplets Darwin ou des numéros de catalogue à eux seuls. Le musée s’engage à maintenir des numéros de catalogue consistants lorsque possible, mais ne garantit pas leur persistance ni leur permanence. Si un code d’identification ne fonctionne pas comme prévu lors d’une recherche, contactez-nous et nous pourrons vous aider.

## Collections

[Les collections répertoriées sur ce site](/fr/collections) correspondent aux collections qui se trouvent au Beaty. Ces collections s’inscrivent dans un contexte historique pour le musée et ont été lancées par des conservateurs spécialisés. La taille et la portée de chaque collection varient grandement, tout comme, par conséquent, leur dotation en personnel et leur quantité totale de fiches. Le Beaty abrite six collections

- La collection entomologique Spencer
- La collection de poissons
- La collection de fossiles
- L’herbier de l’UBC
- La collection d’invertébrés marins
- La collection de tétrapodes Cowan
 
![collection-icons](/assets/images/about-collections-icons.png)

Toutes les collections sont gérées dans le [Global Registry of Scientific Collections](https://scientific-collections.gbif.org) (aussi appelé GRSciColl). Elles peuvent ainsi rester synchronisées avec différentes ressources et différents codes d’identification, comme [l’Index Herbariorum](https://sweetgum.nybg.org/science/ih) et le [Global Biodiversity Information Facility (GBIF)](https://gbif.org). Tous les codes d’identification des spécimens d’une collection se trouvent au bas de sa page respective, sous la rubrique « codes d’identification ».

**Les pages des collections de ce site peuvent être utilisées pour:** 
- Voir les statistiques de la collection entière.
- Avoir un contact de haut niveau avec des spécimens et des codes d’identification consistants correspondant aux objets présents au musée.

De façon critique, les « collections » ne contiennent pas de données. Celles-ci sont plutôt stockées dans des ensembles de données, expliqués ci-dessous.

## Datasets

Chaque collection contient au moins un ensemble de données, où les données sont sous-catégorisées davantage, téléchargeables, et possèdent un code d’identification d’objet numérique, ou DOI. Chaque téléchargement de fiche s’accompagne d’une référence pour son ensemble de données tel qu’il était au moment du téléchargement. Cette référence est essentielle, car les ensembles de données évoluent avec le temps, et le fait de référencer des versions particulières signifie que la recherche maintient une reproductibilité. Le Beaty publie des mises à jour d’ensembles de données à intervalles réguliers, et ces mises à jour passent par plusieurs systèmes avant d’être mises à la disposition des utilisateurs finaux ici. Pour qu’un spécimen existe sur ce site, il doit exister dans un ensemble de données.

**Les pages d’ensembles de données de ce site peuvent être utilisées pour:**
- Télécharger en grande quantité des fiches accompagnées d’une référence indiquant le moment du téléchargement.
- Voir les références ayant été faites pour les spécimens contenus dans l’ensemble de données.

Vous pouvez télécharger un ensemble de données via l’onglet `Télécharger` sur la page de l’ensemble de données. La référence appropriée se trouve au bas de l’onglet À propos sur la page de l’ensemble de données

# Programme de portails hébergés par GBIF

Ce site est un [portail hébergé par GBIF](https://www.gbif.org/hosted-portals). Toutes les données sont tirées de fiches GBIF via une API. Toute fiche trouvée ici se trouve donc également sur [gbif.org](https://www.gbif.org) ou sur tout autre portail hébergé par GBIF incluant nos fiches dans l’ensemble de son catalogue.

# Licences

Toutes les fiches hébergées sur ce portail doivent inclure un champ dédié à la licence, et cette licence s’applique lorsque tel est le cas. La plupart des fiches sont publiées sous la licence [CC0 1.0](https://wiki.creativecommons.org/wiki/CC0_1.0_Universal). Pour toute demande relative aux licences, contactez le personnel figurant sur la page de l’ensemble de données.