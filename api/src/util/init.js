function init() {
   // Scopes needed
   // SpreadsheetApp.open(file)

   const juryAppSettings = MRAACommon.getJuryAppSettings()
   const applicationSettings = MRAACommon.getApplicationSettings()

   for (const key in juryAppSettings) {
      if (juryAppSettings.hasOwnProperty(key)) {
         session.jurysettings[key] = juryAppSettings[key]
      }
   }
   for (const key in applicationSettings) {
      if (applicationSettings.hasOwnProperty(key)) {
         session.applicationsettings[key] = applicationSettings[key]
      }
   }

   session.jurysettings.imagetypelist =
      juryAppSettings.imagetypelist.split(", ")

   session.applicationsettings.distributionlist =
      applicationSettings.distributionlist.split(", ")
}
