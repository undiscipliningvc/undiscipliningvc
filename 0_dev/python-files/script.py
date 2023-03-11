#!/usr/bin/python
import csv
import os

# Define the names of the CSV files and their columns
csv_filenames = {
    'syllabus-1': '1_syllabus-spreadsheet-1.csv',
    'syllabus-2': '1_syllabus-spreadsheet-2.csv',
    'syllabus-3': '1_syllabus-spreadsheet-3.csv',    
}
csv_columns = ['placeholder', 'text']

# Define the names of the HTML files to update
html_filenames = {
    'syllabus-1': '0_syllabus-template-1.html',
    'syllabus-2': '0_syllabus-template-2.html',
    'syllabus-3': '0_syllabus-template-3.html',    
}

# Loop over the CSV files and update their corresponding HTML files
for syllabus, csv_filename in csv_filenames.items():
    # Open the CSV file and read the data
    with open(csv_filename, 'r') as csvfile:
        # reader = csv.DictReader(csvfile, fieldnames=csv_columns, delimiter='\t')
        reader = csv.DictReader(csvfile, fieldnames=csv_columns)
        data = list(reader)

        # Remove the header row
        data.pop(0)

        # Read the contents of the corresponding HTML file
        html_filename = html_filenames[syllabus]
        with open(html_filename, 'r') as f:
            html = f.read()

        # Find the row with "syllabus-file-name" in column 1 and get the corresponding value in column 2
        syllabus_file_name_row = next((row for row in data if row['placeholder'] == 'syllabus-file-name'), None)
        if syllabus_file_name_row:
            new_html_filename = os.path.splitext(syllabus_file_name_row['text'])[0] + '.html'

            # Replace the placeholders in the HTML file with the data from the CSV file
            for row in data:
                html = html.replace('{{{}}}'.format(row["placeholder"]), row["text"])

            # Save the updated HTML file with the new filename
            with open(new_html_filename, 'w') as f:
                f.write(html)
