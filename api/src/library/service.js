// testing passing a parameter to a function from the fetch
function helloWorld(t = "💘") {
   return "Hello World, " + t
}

// function helloWorld() {
//    return "Hello World"
// }

function goneMad(text) {
   return text
}

function validateEmail() {
   const email = param["email"]
   const isAlreadyMember = MRAACommon.isMember(email) ? true : false
   let applicationSubmitted = false
   if (!isAlreadyMember) {
      applicationSubmitted =
         MRAACommon.getApplicationDetail(email).length > 0 ? true : false
   }
   return {
      alreadymember: isAlreadyMember,
      alreadyapplied: applicationSubmitted,
   }
}

function getJuryAppSettings() {
   return session.jurysettings
}

function getApplicationSettings() {
   return session.applicationsettings
}
