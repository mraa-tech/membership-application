async function fetchEmailValidation(event) {
   event.preventDefault()
   showChecking()
   const form = document.getElementById("formlogin")
   const formData = new FormData(form)
   const formObject = Object.fromEntries(formData.entries()) // Convert to an object

   //console.log(session.applicationsettings)
   const email = formObject.applicantemail
   const url = `${EP_APPLICATION}?q=validateemail&email=${email}`
   fetch(url)
      .then((res) => res.json())
      .then((res) => {
         const msg = `Already a member: ${res.alreadymember}, Already applied: ${res.alreadyapplied}`
         if (res.alreadymember) {
            showResults("You are already a member, what are you doing here? 🥸")
         } else if (!res.alreadymember && res.alreadyapplied) {
            fetchApplication(email)
            showResults(msg)
         } else {
            showResults(msg)
            showPageSettings()
            unhideFormFields("formapplication", "hidden")
            removeElement("#sendbutton")
            disableField("applicantemail")
         }
      })
      .catch((err) => {
         console.log(err)
      })
}

async function fetchApplication(event, email) {
   event.preventDefault()
   const form = document.getElementById("formapplication")
   const formData = new FormData(form)

   const url = `${EP_APPLICATION}?q=getapplication&email=${email}`
   fetch(url)
      .then((res) => res.json())
      .then((res) => {
         console.log(res)
      })
      .catch((err) => {
         console.log(err)
      })
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

function unhideFormFields(form, c) {
   const selector = `#${form} .${c}`
   const fields = document.querySelectorAll(selector)
   fields.forEach((field) => {
      field.classList.remove("hidden")
   })
}

function hideFormFields(form, c) {
   const selector = `#${form} .${c}`
   const fields = document.querySelectorAll(selector)
   fields.forEach((field) => {
      field.classList.add("hidden")
   })
}

function removeElement(selector) {
   const element = document.querySelector(selector)
   element.remove()
}

function disableField(field) {
   const ele = document.getElementById(field)
   ele.disabled = true
}

function enableField(field) {
   const ele = document.getElementById(field)
   ele.disabled = false
}

document
   .getElementById("formlogin")
   .addEventListener("submit", fetchEmailValidation)

document.addEventListener(
   "DOMContentLoaded",
   fetchSettings("applicationsettings")
)