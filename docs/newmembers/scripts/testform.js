function testData() {
   const data = {
      applicantEmail: "patty.p@email.com",
      firstName: "Peppermint",
      lastName: "Patty",
      streetAddress1: "123 Main St",
      streetAddress2: "Apt 1",
      city: "Anytown",
      state: "CA",
      zipCode: "12345",
      contactNumber: "123-456-7890",
      mediums: "Oil, Acrylics",
      reasonForInterest:
         "I am interested in joining MRAA to meet and network with other artists.",
      artistSignature: "Patty Peppermint",
      artEducationBackground: "BFA, MFA",
      artAssociatedMemberships: "Artists Guild",
      exhibitions: "Art Show 2020",
      websites: "http://www.peppermintfineart.com",
      businessName: "Peppermint Art",
      socialMediaLinks: "instagram@peppermint",
   }
   return data
}

function fillForm(form, data) {
   const formFields = document.getElementById(form).querySelectorAll("input")
   const textAreas = document.getElementById(form).querySelectorAll("textarea")
   textAreas.forEach((field) => {
      field.value = data[field.name]
   })
   formFields.forEach((field) => {
      if (field.type === "radio") {
         if (field.id === "associateMembership") {
            field.checked = true
         } else {
            field.checked = false
         }
      } else {
         field.value = data[field.name]
      }
   })
   return
}
