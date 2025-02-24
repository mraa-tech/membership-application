const EP_APPLICATION =
   "https://script.google.com/macros/s/AKfycbw1rT82b4rwifGSWEIuLDtXly6IAoiWASnTaLkPqHkodup0YOKh57fUnpxEWghH3aIX/exec"
const EP_JURY = "jury-url-goes-here"
const TEST_EP_APPLICATION =
   "https://script.google.com/macros/s/AKfycbxnpWX3jXnfHKp079sCKFkow48s-isVIU4V6k_hsbg/dev"
//const applicationsettings = fetchSettings("applicationsettings")

function showYear() {
   const yr = new Date().getFullYear()
   const ele = document.getElementById("year")
   ele.innerText = yr
}

function fetchSettings(query) {
   const url = `${EP_APPLICATION}?q=${query}`
   fetch(url)
      .then((res) => res.json())
      .then((data) => {
         data.type = "GET"
         console.log(data)
      })
   return data
}

document.addEventListener("DOMContentLoaded", showYear)
