function showResults(res) {
   const messages = document.getElementById("messages")
   messages.classList.remove("d-none")
   const msg = document.getElementById("resultmsg")
   msg.innerText = `Already a member: ${res.alreadymember}, Already applied: ${res.alreadyapplied}`
}

function showChecking() {
   const messages = document.getElementById("messages")
   messages.classList.remove("d-none")
   const msg = document.getElementById("resultmsg")
   msg.innerText = "Checking..."
   msg.classList.add("text-info")
}

function showPageSettings() {
   showValue(
      document.getElementById("associatedues"),
      session.applicationsettings.annualdues
   )
   showValue(
      document.getElementById("exhibitingdues"),
      session.applicationsettings.annualdues
   )
   showValue(
      document.getElementById("cashdiscount"),
      session.applicationsettings.cashdiscount
   )
}

function showValue(ele, value) {
   ele.innerText = value
}