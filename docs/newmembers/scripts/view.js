function showResults(m) {
   // const messages = document.getElementById("messages")
   // messages.classList.remove("d-none")
   const msg = document.getElementById("resultmsg")
   msg.innerText = m
   msg.classList.remove("d-none")
}

function showChecking() {
   const messages = document.getElementById("messages")
   messages.classList.remove("d-none")
   const msg = document.getElementById("resultmsg")
   msg.innerText = "Checking..."
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
   showValue(
      document.getElementById("associateduescash"),
      session.applicationsettings.annualdues -
         session.applicationsettings.cashdiscount
   )
   showValue(
      document.getElementById("exhibitingduescash"),
      session.applicationsettings.annualdues -
         session.applicationsettings.cashdiscount
   )
   showValue(
      document.getElementById("proratedamt"),
      session.applicationsettings.proratedamount
   )
   showValue(
      document.getElementById("exhibitingduesprorated"),
      session.applicationsettings.proratedamount
   )
   showValue(
      document.getElementById("associateduesprorated"),
      session.applicationsettings.proratedamount
   )
}

function showValue(ele, value) {
   ele.innerText = value
}
