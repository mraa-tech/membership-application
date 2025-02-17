# Membership Application
**Version 2.0**
This is a rewrite of the existing membership application project. The new project will be built with an api backend hosted on Google Apps Scripts and a separate UI frontend hosted on GitHub pages.

Artists wishing to join the MRAA organization will be able to apply for membership through this application. There are currently two types of membership:
- Associate Membership
- Exhibiting Membership

Those applying for exhibiting membership will be required to submit a portfolio of their work for review by the MRAA board and other exhibiting members.

## API Folder
- This folder contains the api endpoint for the membership application and is hosted on Google Apps Scripts.
- Only this folder needs to sync to Google Apps Scripts using clasp.
- It will use the MRAA Web Common Library to handle the database and authentication.

## UI Folder
- This folder contains the UI for the membership application and is hosted on GitHub pages.
- Page design will follow other MRAA web pages using the stylesheets from the MRAA Web Common Library.
- This folder will be synced to GitHub pages using the gh-pages branch.

## Datasource
- The datasource for the membership application is the Google SpreadSheet - MRAA Applicants.
- The spreadsheet contains the following sheets:
  - Application Detail
  - To Be Juried
  - Settings
  - Application Archives (future use)
