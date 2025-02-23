const ROUTES = {
   path: function (r, callback) {
      ROUTES[r] = callback
   },
}
const testendpoint =
   "https://script.google.com/macros/s/AKfycbxnpWX3jXnfHKp079sCKFkow48s-isVIU4V6k_hsbg/dev?q=hello&p=jamesgreen.311@gmail.com"

let param = {}
// ROUTES.path("hello", helloWorld())
// ROUTES.path("world", goneMad("MAGA Insanity"))
// ROUTES.path("jurysettings", MRAACommon.getJuryAppSettings())
// ROUTES.path("applicationsettings", MRAACommon.getApplicationSettings())
// ROUTES.path("validateemail", validateEmail())
// TEST
ROUTES.path("hello", helloWorld)

// this was working, my email was passed as a parameter to the helloWorld function
function doGet(e) {
   param = e.parameter

   const data = Object.hasOwn(e.parameter, "p")
      ? ROUTES[param.q](param.p)
      : ROUTES[param.q]()
   let response = JSON.stringify(data)

   return ContentService.createTextOutput(response).setMimeType(
      ContentService.MimeType.JSON
   )
}

// function doPost(e) {
//    let result = route("post", e.parameter["q"])
// }
