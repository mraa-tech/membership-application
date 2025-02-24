const EP_APPLICATION =
   "https://script.google.com/macros/s/AKfycbw1rT82b4rwifGSWEIuLDtXly6IAoiWASnTaLkPqHkodup0YOKh57fUnpxEWghH3aIX/exec"
const EP_JURY = "jury-url-goes-here"
const TEST_EP_APPLICATION =
   "https://script.google.com/macros/s/AKfycbxnpWX3jXnfHKp079sCKFkow48s-isVIU4V6k_hsbg/dev"

function showYear() {
   const yr = new Date().getFullYear()
   const ele = document.getElementById("year")
   ele.innerText = yr
}

function fetchSettings(query) {
   const url = `${EP_APPLICATION}?q=${query}`
   fetch(url)
      .then((res) => res.json())
      .then((res) => {
         // save to session
         saveToSession(query, res)
      })
      .catch((err) => {
         console.log(err)
      })
}

async function fetchEmailValidation(event) {
   event.preventDefault()
   showChecking()
   const form = document.getElementById("formlogin")
   const formData = new FormData(form)
   const formObject = Object.fromEntries(formData.entries()) // Convert to an object

   const email = formObject.applicantemail
   const url = `${EP_APPLICATION}?q=validateemail&email=${email}`
   fetch(url)
      .then((res) => res.json())
      .then((res) => {
         const msg = `Already a member: ${res.alreadymember}, Already applied: ${res.alreadyapplied}`
         showResults(msg)
         //console.log(res)
      })
      .catch((err) => {
         console.log(err)
      })
}

document.addEventListener("DOMContentLoaded", showYear)
document
   .getElementById("formlogin")
   .addEventListener("submit", fetchEmailValidation)

document.addEventListener(
   "DOMContentLoaded",
   fetchSettings("applicationsettings")
)
