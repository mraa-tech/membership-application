// global session variable is created to set the default values for the jury app settings and application settings
const session = {
   jurysettings: {
      minimumvotes: -1, // -1 means no minimum, default if not set in MRAA Membership Jury, App Settings, Minimum Votes
      minimumimages: 5,
      maximagesize: 3, // in MB, default if not set in MRAA Membership Jury, App Settings, Maximum Image Size
   },
   applicationsettings: {
      distributionlist: "tech@metrorichmondart.org", // default if not set in MRAA Applicants, Settings, Distribution List
   },
}
const ROUTES = {
   path: function (r, callback) {
      ROUTES[r] = callback
   },
}
// testing new applicant email
const testendpoint =
   "https://script.google.com/macros/s/AKfycbxnpWX3jXnfHKp079sCKFkow48s-isVIU4V6k_hsbg/dev?q=validateemail&email=test@mail.com"
// test for applicant but not a member
// const testendpoint = "https://script.google.com/macros/s/AKfycbxnpWX3jXnfHKp079sCKFkow48s-isVIU4V6k_hsbg/dev?q=validateemail&email=mia.a@email.com"
// test for member but not applied
// const testendpoint = "https://script.google.com/macros/s/AKfycbxnpWX3jXnfHKp079sCKFkow48s-isVIU4V6k_hsbg/dev?q=validateemail&email=jamesgreen.311@gmail.com"
// const testendpoint = "https://script.google.com/macros/s/AKfycbxnpWX3jXnfHKp079sCKFkow48s-isVIU4V6k_hsbg/dev?q=hello"
// const testendpoint = "https://script.google.com/macros/s/AKfycbxnpWX3jXnfHKp079sCKFkow48s-isVIU4V6k_hsbg/dev?q=world"
// const testendpoint = "https://script.google.com/macros/s/AKfycbxnpWX3jXnfHKp079sCKFkow48s-isVIU4V6k_hsbg/dev?q=jurysettings"
// const testendpoint = "https://script.google.com/macros/s/AKfycbxnpWX3jXnfHKp079sCKFkow48s-isVIU4V6k_hsbg/dev?q=applicationsettings"
// const testendpoint = "https://script.google.com/macros/s/AKfycbxnpWX3jXnfHKp079sCKFkow48s-isVIU4V6k_hsbg/dev?q=getapplicant&email=jack.p@email.com"

let param = {}
ROUTES.path("hello", helloWorld)
ROUTES.path("world", goneMad)
ROUTES.path("jurysettings", getJuryAppSettings)
ROUTES.path("applicationsettings", getApplicationSettings)
ROUTES.path("validateemail", validateEmail)
ROUTES.path("getapplicant", getApplicant)

function doGet(e) {
   param = e.parameter
   init(param)

   const data = ROUTES[param["q"]]()
   let response = JSON.stringify(data)

   return ContentService.createTextOutput(response).setMimeType(
      ContentService.MimeType.JSON
   )
}

function doPost(e) {
   param = e.parameter
   init(param)

   try {
      // Parse the incoming JSON payload
      const requestData = JSON.parse(e.postData.contents)

      // Example: Extract form values
      //const name = requestData.name
      const email = requestData.email

      const data = ROUTES[param["q"]](email)
      let response = JSON.stringify(data)

      // Process the data (e.g., save to Google Sheets)
      // const sheet = SpreadsheetApp.openById(
      //    "YOUR_SPREADSHEET_ID"
      // ).getSheetByName("Responses")
      // sheet.appendRow([new Date(), name, email])

      return ContentService.createTextOutput(
         JSON.stringify({ success: true, data: response })
      ).setMimeType(ContentService.MimeType.JSON)
   } catch (error) {
      return ContentService.createTextOutput(
         JSON.stringify({ success: false, error: error.message })
      ).setMimeType(ContentService.MimeType.JSON)
   }
}

