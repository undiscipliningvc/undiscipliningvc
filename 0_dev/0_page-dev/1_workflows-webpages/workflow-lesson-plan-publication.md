# Lesson Plan Publication Workflow

## Images

1. Open lesson plan checklist, find URL for page image, download best version of image available from site.

2. Add image to Zotero, first in own library, then in UVC group library.

3. Copy raw JPEG image to local UVC folders; keep original file name.

4. Convert JPEG image to TIFF using ImageMagick and copy to local UVC folders; keep original file name.

5. Crop TIFF image, rename, and copy to local UVC folders. Note: Crop only needed for extraneous matter (e.g., borders beyond image, etc.). Do not crop for ratio.

6. If two vertical images, merge cropped TIFF images into single TIFF file, but also keep cropped originals.

7. Generate lesson plan images and lesson plan tiles derivative images using the prefab ImageMagick code in the "/0_dev/0_page-dev/image-conversion-code-new2.txt" file in GitHub.

8. Remove any generated images that exceed dimensions of original TIFF.

9. Check images in page. Use style="object-position: 50% 50%;" on image tag and adjust percentages to position image (if needed). Use class="image-border" to add light gray border to image (if needed)

10. Commit generated images to GitHub.


## Lesson Plan Webpage

1. Open the "/0_dev/0_page-dev/2_python-files/spreadsheet-lesson-plan-0.csv" file in GitHub, make a copy, and rename it as "spreadsheet-lesson plan-1.csv".

2. Open lesson plan checklist in Word, open the ""/0_dev/0_page-dev/2_python-files/spreadsheet-lesson plan-1.csv" file in Visual Studio Code and complete all fields using the checklist except:

a. biography, which will be provided in a separate Word file (along with the lesson plan itself) and need to be converted into HTML first (see next step) or

b. works-cited and header-image-caption, which you will generate (see below).

Also note that if the image alt text contains commas, you will need to either put it in straight quotation marks or add it manually to the webpage once it's generated. For files with two images, preface each alt text with either "Left:" or "Right:", and preface the image caption text with either "(Left)" or "(Right)" in order to be consistent with existing site practices.

3. Open lesson plan Word file which contains the lesson plan and biography.

4. If the lesson plan Word file also includes any works cited lists, open Zotero, generate new versions of all works cited section, compare them against the existing sections, make any necessary to the new versions, then delete the existing versions.

5. Generate an image caption for the main page image and add it to the Word file in a separate section. Also be sure to copy over rights info, as it will not be automatically added by GitHub. Close the file.

6. Open the "/0_dev/01_workflows-other/workflow-docx-to-html" file in GitHub, find the relevant terminal code, then use that to convert the lesson plan Word file to HTML.

7. Review the HTML file, remove and/or replace any instances of <u> and other non-UVC formatting (including curly quote and n-dash code), add aria-label="External Link" to external links, fix anything else that needs it.

8. Open the "/0_dev/0_page-dev/2_python-files/spreadsheet-lesson-plan-1.csv" file in Excel. Copy and paste the sections for biography and header-image-caption from the generated lesson plan HTML file into the file in Excel, save, close.

9. Open terminal, navigate to the "/0-dev/0_page-dev/2_python-files" subdirectory and run "python lesson_plan.py" or "python3 lesson-plan.py" file as relevant. This will generate a new lesson plan HTML file in the "/0-dev/0_page-dev/2_python-files" subdirectory with the short version of the title. Review the HTML file and make any changes necessary, copy over the full lesson plan from the HTML being mindful of the need to insitute sections and headings as needed, then move the file into the "html/lesson_plans" subdirectory in GitHub. Also rename the "/0-dev/0_page-dev/2_python-files/spreadsheet-lesson-plan-1.csv" file to include name author at end of file name, then move file into the "/0-dev/0_page-dev/2_python-files/0_done" subdirectory.

10. Commit all files to GitHub.


## Closeout

1. Update "html/lesson_plans.html" page for new lesson plan(s)

2. Add new contributors to "/about/project_contributors.html"

3. Add new lesson plan(s) to "/sitemap.html"

4. Regenerate "/sitemap.xml" after new lesson plan pages appear online, add file to GitHub, commit.
