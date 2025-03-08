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

function getFormData(id) {
   const formData = new FormData(document.getElementById(id))
   formData.append(
      "applicantEmail",
      document.getElementById("applicantemail").value
   )
   return Object.fromEntries(formData.entries())
}

function getFormRequired(id) {
   const requiredFields = document
      .getElementById(id)
      .querySelectorAll("[required]")
   const flds = {}
   requiredFields.forEach((field) => {
      flds[field.name] = field.value
   })

   return flds
}

async function sendForm(form) {
   const formData = getFormData(form)

   console.log(formData)
   return

   const url = `${EP_APPLICATION}?q=putapplicant`
   fetch(url, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
         "Content-Type": "application/json",
      },
   })
      .then((res) => res.json())
      .then((res) => {
         console.log(res)
      })
      .catch((err) => {
         console.log(err)
      })
   return
}

document
   .getElementById("formlogin")
   .addEventListener("submit", fetchEmailValidation)

document.getElementById("saveButton").addEventListener("click", (e) => {
   e.preventDefault()
   sendForm("formapplication")
})

document.addEventListener(
   "DOMContentLoaded",
   fetchSettings("applicationsettings")
)

document.addEventListener(
   "DOMContentLoaded",
   fillForm("formapplication", testData())
)
