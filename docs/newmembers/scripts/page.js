async function fetchEmailValidation(event) {
   event.preventDefault()
   showChecking("generalmsg", "Checking Email Address...")
   const form = document.getElementById("formlogin")
   const formData = new FormData(form)
   const formObject = Object.fromEntries(formData.entries()) // Convert to an object

   const email = formObject.applicantemail
   const url = `${EP_APPLICATION}?q=validateemail&email=${email}`
   fetch(url)
      .then((res) => res.json())
      .then((res) => {
         if (!res.alreadyapplied && !res.alreadymember) {
            hideChecking("generalmsg")
            showPageSettings()
            unhideFormFields("formapplication", "hidden")
            removeElement("#sendbutton")
            disableField("applicantemail")
         } else {
            isApplicantOrMember(res, email)
         }
      })
      .catch((err) => {
         console.log(err)
      })
}

async function isApplicantOrMember(res, email) {
   const msg =
      "Your application was accepted and you are an MRAA member. Congratulations!"
   if (res.alreadymember) {
      clearMessages("generalmsg")
      hideChecking("generalmsg")
      showResults("resultmsg", msg)
      removeElement("#sendbutton")
      disableField("applicantemail")
   } else {
      fetchApplication(email)
   }
}

async function fetchApplication(email) {
   showChecking("generalmsg", "Checking For Application ...")
   const url = `${EP_APPLICATION}?q=getapplicant&email=${email}`
   fetch(url)
      .then((res) => res.json())
      .then((res) => {
         hideFormFields("formapplication", "hidden")
         clearMessages("generalmsg")
         hideChecking("generalmsg")
         showApplication(res)
      })
      .catch((err) => {
         console.log(err)
      })
   return
}

function getFormData(form) {
   const formData = new FormData(document.getElementById(form))
   return Object.fromEntries(formData.entries())
}

function getFormRequired(form) {
   const requiredFields = document
      .getElementById(form)
      .querySelectorAll("[required]")
   console.log(requiredFields)
   return
}

document
   .getElementById("formlogin")
   .addEventListener("submit", fetchEmailValidation)

document.addEventListener(
   "DOMContentLoaded",
   fetchSettings("applicationsettings")
)
