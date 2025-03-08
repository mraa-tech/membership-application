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

function getApplicant() {
   const email = param["email"]
   const withLabels = true
   let applicationSubmitted = MRAACommon.getApplicationDetail(
      email,
      withLabels
   )[0]
   // remove applicant id and row before sending back
   if (applicationSubmitted["Applicant Id"]) {
      delete applicationSubmitted["Applicant Id"]
   }
   if (applicationSubmitted.row) {
      delete applicationSubmitted.row
   }
   return applicationSubmitted
}

function putApplicant(email) {
   const data = JSON.parse(e.postData.contents)
   const result = MRAACommon.putApplicationDetail(email, data)
   return result
}