---
layout:     project
head:       my portfolio
id:         project
categories: [project]

hide_title: yes
feature:    yes

main_format: png
gallery_formats: [jpg, jpg, jpg, jpg]

status:     Online
intent:     Pro bono
work:       [Design, Develop, Host]
techs:      [CSS, Drupal, Markdown, Unity, XHTML]
address:    http://gpc.jamesan.ca
---
Dreamcatcher is a game prototype for the Game Prototype Challenge (GPC). The GPC is a monthly, week-long, open challenge announced mainly through Twitter to developers to create a game prototype around two keywords or themes.[^1] The GPCv1 themes were dreams and collectibles.

This was a whimsical first attempt at a game prototype. My attempt (and first attempt at using most of the software tools and first time putting into practice concepts like shaders, collisions, and meshes) was the solo mode game released Nov 22. Subsequent improvements resulted in a game featuring a human versus AI competition to collect dreams the fastest while preventing the other from winning.

The game was built on the Unity IDE and published through Unity's web player, hosted on a Drupal micro-site.

The following are sources and credits for various software, assets, and methods I used:

Software:

- [Photoshop CS4](http://www.adobe.com/products/photoshop/)
- [Blender 2.49b](http://www.blender.org/development/release-logs/blender-249/)
- [Notepad 2 4.0.22beta5](http://code.kliu.org/misc/notepad2/)
- [Unity 3.1](http://unity3d.com/unity/whats-new/unity-3.1)
- [MonoDevelop 2.4](http://monodevelop.com/Download/MonoDevelop_2.4_Released)

Assets:

- [Wall texture](http://www.molimodesign.com/wp-content/uploads/2010/07/Dynamic-And-Innovative-Company-Impronta-Ceramiche.-1.jpg) by [Molimo Design](http://www.molimodesign.com/)
- [Source](http://www.designsbuzz.com/wp-content/uploads/2009/10/texture_green_swirls_paper_by_enchantedgal_stock.jpg) for Floor, cloud, and player texture by [Designs Buzz](http://www.designsbuzz.com/).
- [Source](http://www.clker.com/clipart-2808.html) for GUI cloud icon by [OCAL](http://www.clker.com/profile-1068.html).
- [Transparent shader](http://www.unifycommunity.com/wiki/index.php?title=AlphaVertexLitZ) for the falling clouds by [NeARAZ](http://www.unifycommunity.com/wiki/index.php?title=User:NeARAZ "Aras Pranckevicius").
- [Simple smooth camera follower](http://unity3d.com/support/documentation/ScriptReference/Mathf.SmoothDampAngle.html) grabbed straight from Unity’s documentation.
- Blob shadows and particle emitters were out-of-box standard Unity assets.
- All other things, I made:
  - Models with [Blender](http://www.blender.org/development/release-logs/blender-249/ "Blender 2.49b")’s grease pencil.
  - Scripted behaviours with Unity’s Javascript.
  - Bump maps converted from sourced textures.
  - Recoloured textures from sourced textures.
  - All other textures and icons.

Website:

- Drupal 6 (Panels, Quicktabs, Pathauto, CCK + Filefield, Markdown, Typogrify, Google Analytics)
- Slightly modified Abstract theme
- Nginx + PHP 5 FastCGI + MySQL 5
- CentOS 5 hosted by Slicehost

[^1]: [Game Prototype Challenge](http://gameprototypechallenge.com/)

{% include abbrev.markdown %}
