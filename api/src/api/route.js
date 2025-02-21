const ROUTES = {
   path: function (r, callback) {
      ROUTES[r] = callback
   },
}
ROUTES.path("hello", helloWorld())
ROUTES.path("world", goneMad("MAGA Insanity"))

function doGet(e) {
   let response = JSON.stringify(ROUTES[e.parameter["q"]])

   return ContentService.createTextOutput(response).setMimeType(
      ContentService.MimeType.JSON
   )
}

function doPost(e) {
   let result = route("post", e.parameter["q"])
}

function helloWorld() {
   return "Hello World"
}

function goneMad(text) {
   return text
}
