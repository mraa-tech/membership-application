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
   return ele
}

function showResults(id, res) {
   const messages = document.getElementById(id)
   const msg = document.getElementById(`${id}list`)
   messages.classList.remove("d-none")
   msg.innerText = res
   return messages
}

function showChecking(msglist, msgtext) {
   const messages = document.getElementById(msglist)
   const msg = document.getElementById(`${msglist}list`)
   messages.classList.remove("d-none")
   msg.innerText = msgtext
   return messages
}

function hideChecking(msglist) {
   const messages = document.getElementById(msglist)
   messages.classList.add("d-none")
   return messages
}

function clearMessages(msglist) {
   const messages = document.getElementById(msglist)
   const msg = document.getElementById(`${msglist}list`)
   msg.innerText = ""
   return messages
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
   return ele
}

function unhideFormFields(form, c) {
   const selector = `#${form} .${c}`
   const fields = document.querySelectorAll(selector)
   fields.forEach((field) => {
      field.classList.remove("hidden")
   })
   return fields
}

function hideFormFields(form, c) {
   const selector = `#${form} .${c}`
   const fields = document.querySelectorAll(selector)
   fields.forEach((field) => {
      field.classList.add("hidden")
   })
   return fields
}

function removeElement(selector) {
   const element = document.querySelector(selector)
   element.remove()
}

function disableField(field) {
   const ele = document.getElementById(field)
   ele.disabled = true
   return ele
}

function enableField(field) {
   const ele = document.getElementById(field)
   ele.disabled = false
   return ele
}