function showApplication(res) {
   const ele = document.getElementById("formapplication")
   const t = document.createElement("table")
   const tbody = document.createElement("tbody")
   const thead = document.createElement("thead")
   const tr = document.createElement("tr")
   const th = document.createElement("th")
   th.setAttribute("colspan", "2")
   th.innerText = "Application"
   tr.appendChild(th)
   thead.appendChild(tr)
   t.appendChild(thead)
   t.appendChild(tbody)
   t.classList.add("table", "table-striped")

   for (const [key, value] of Object.entries(res)) {
      let tr = document.createElement("tr")
      let tdkey = document.createElement("th")
      let tdvalue = document.createElement("td")
      tdkey.innerText = key
      tdvalue.innerText = value
      tr.appendChild(tdkey)
      tr.appendChild(tdvalue)
      tbody.appendChild(tr)
   }
   ele.innerHTML = ""
   ele.appendChild(t)
}

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
