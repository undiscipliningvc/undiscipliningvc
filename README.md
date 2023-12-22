# Undisciplining the Victorian Classroom

This is the main repository for the [Undisciplining the Victorian Classroom](https://undiscipliningvc.org/) (UVC) site, structured as follows:

## Levels
* **Level 1:** The home page of UVC (/index.html)

* **Level 2:** Cluster pages, i.e., pages for the main sections of the site, including /html/about.html, /html/assessments.html, /html/lesson_plans.html, /html/syllabi.html, /html/zoomcasts.html

* **Level 3:** Content pages, i.e., pages that present the content of the site, in particular all files in the following subdirectories: /html/about, /html/assessments, /html/lesson_plans, /html/syllabi, /html/zoomcasts; also includes two standalone files in the root directory: /404.html and /sitemap.html

* **Level 4:** Downloadable files, i.e., all the files that appear in /pdf

## Subdirectories in the Root Directory
* **0_dev:** Files needed for developing the site. These include a set of empty directories (used to generate derivative images), icons, a sample annotated HTML file, and the UVC peer review stamp. Also includes workflows, Python scripts, corresponding CSV and HTML, and misc other files used to generate content pages. Also see the /pdf directory for guidelines and checklists for contributors.

* **bash:** Scripts to develop the site. These include scripts to run a local server in Python and to push changes from the dev to production branches.

* **common:** HTML fragment files that are injected via jQuery into all the HTML files of the site. These include files for site navigation and the footer.

* **css:** All the site's CSS files. Each file is annotated for function and to indicate, as relevant, sources of code.

* **fonts:** At present just the font to create the main UVC logo.

* **html:** All the site's HTML files, except for those in the "common" and root directories. See levels 2 and 3, above.

* **img:** All the site's images. These include the site's social media image and images divided into subdirectories that correspond to the parts of the site where the images are used.

* **js:** All the site's JS files. Each file is annotated for function and to indicate, as relevant, sources of code.

* **pdf:** All the site's publicly downloadable files. See level 4, above. These include .docx, .pdf, and .txt files. A subdirectory called "guidelines" includes checklists for contributors for preparing assessments, lesson plans, syllabi, and zoomcasts for publication plus the UVC house style guidelines. Also see the /0_dev directory for files used by developers in building the site.

## Loose Files in the Root Directory
* **404.html:** Users are directed to this page when they try to access a page of the UVC site that doesn't exist.

* **CNAME:** Contains the domain name of the site.

* **favicon.ico:** Link to the icon used by browser tabs. See 0_dev/icons-for-resizing for the original of this fie.

* **index.html:** The site's home page.

* **README.md:** The current page.

* **robots.txt:** Tells search engine crawlers which site page should be indexed and followed.

* **site.webmanifest:** A metadata file that includes items such as the site's name, description, icons, and background/theme colors

* **sitemap.html:** A site map in HTML format.

* **sitemap.xml:** A site map in XML format. Automatically generated by [Free Online Sitemap Generator](www.xml-sitemaps.com).