---
layout:     project
head:       my portfolio
id:         project
categories: [project]

feature:    yes

main_format: jpg
gallery_formats: [jpg, jpg, jpg]

status:     Online
intent:     Academic
work:       [Design, Develop, Research, Host]
techs:      [Apache, CSS, Drupal, Javascript, jQuery, MySQL, PHP, Subversion, XHTML]
address:    http://mosaic.jamesan.ca
---
The image mosaic generator was the upper year thesis project for Engineering Science at the University of Toronto, supervised by Prof. Karan Singh of the Department of Computer Science.

A image mosaic is a mosaic or patchwork of images that resemble a single image when seen from afar. The thesis work involved examining analytic techniques for constructing image mosaics and building a proof-of-concept generator to live-test the various algorithms that came out of the initial research.

To be effective, the generator would need access to at least tens of thousands of images to choose from and an algorithm for selecting 

The resulting generator was built on the Drupal platform as a sort of web service (currently locked from public use). It included a image fetcher that populated the image database using Flickr's API, a web UI to view the image database, and the mosaic generator that would create a mosaic based on a source image and the database of images, with which to tesselate the source image.

Using Drupal's batch API, the image fetcher and mosaic generator processes could run for extended periods of time (e.g. 20-40 minutes) to fetch thousands of images and tesselate large mosaics, respectively. The batch API works by breaking a task into a queue of sub-tasks (e.g. fetching 3000 images becomes 30 sub-tasks of fetching 100 images each time) so that the task can be processed over many page requests. This both works around PHP's timeout (typically 30s to 60s) and provides feedback updates to the user on the processing progress.

Drupal enabled this project to be rapidly prototyped while avoiding issues around code compilation and configuration management and allowing the project to be platform-agnostic for the end user. Yet, the cost was performance and speed in executing the batch processes. PHP is said to be anywhere from 20 to 100 times slower than a compiled language like C++ or Java.[^1][^2][^3]

A major extension of this project is to rewrite the heavy processing components in a compiled language and call these binaries from the project's implementation of Drupal's batch API. This way, the project benefits from having both a web UI and a speedy backend processor.

Click [here](/files/projects/thesis report.pdf) to see the full thesis report. Note that the PDF report is almost 9 MB in size due to some high resolution mosaic images in the report.

[^1]: [Which programming languages are fastest? \| Computer Language Benchmarks Game](http://shootout.alioth.debian.org/u32q/which-programming-languages-are-fastest.php?calc=chart&gpp=on&gcc=on&java=on&csharp=on&python3=on&php=on&yarv=on&perl=on)
[^2]: [C++ vs. Python vs. Perl vs. PHP performance benchmark «  /contrib/famzah](http://blog.famzah.net/2010/07/01/cpp-vs-python-vs-perl-vs-php-performance-benchmark/)
[^3]: [Performance Comparison - C++ / Java / Python / Ruby / Jython / JRuby / Groovy \| /var/log/mind](http://blog.dhananjaynene.com/2008/07/performance-comparison-c-java-python-ruby-jython-jruby-groovy/)

{% include abbrev.markdown %}
