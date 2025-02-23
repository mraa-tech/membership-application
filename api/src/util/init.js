function init(p) {
   // Scopes needed
   // SpreadsheetApp.open(file)

   if (p["q"] == "jurysettings") {
      const juryAppSettings = MRAACommon.getJuryAppSettings()
      for (const key in juryAppSettings) {
         if (juryAppSettings.hasOwnProperty(key)) {
            session.jurysettings[key] = juryAppSettings[key]
         }
      }
      session.jurysettings.imagetypelist =
         juryAppSettings.imagetypelist.split(", ")
   } else if (p["q"] == "applicationsettings") {
      const applicationSettings = MRAACommon.getApplicationSettings()
      for (const key in applicationSettings) {
         if (applicationSettings.hasOwnProperty(key)) {
            session.applicationsettings[key] = applicationSettings[key]
         }
      }
      session.applicationsettings.distributionlist =
         applicationSettings.distributionlist.split(", ")
   }
   // const juryAppSettings = MRAACommon.getJuryAppSettings()
   // const applicationSettings = MRAACommon.getApplicationSettings()
}
