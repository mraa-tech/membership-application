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

document
   .getElementById("formlogin")
   .addEventListener("submit", fetchEmailValidation)
