// "my-test-output-[hash].xml",

//data-test-id="row1-report"

// const ctp_99453 = cy.get('[data-test-id="cpt-99453"]').eq(0)
// const ctp_99454 = cy.get('[data-test-id="cpt-99454"]').eq(0)
// const ctp_99457 = cy.get('[data-test-id="cpt-99457"]').eq(0)
// const ctp_99458 = cy.get('[data-test-id="cpt-99458"]').eq(0)

// cy.get('[data-test-id="cpt-container"]')
//   .find('[data-test-id="cpt-99453-status"]')

// cy.get('[data-test-id="cpt-container"]').find('[data-test-id="cpt-99453"]')

// cy.get('[data-test-id="cpt-container"]')
//   .find('[data-test-id="cpt-99453-status"]')
//   .eq(0)
//   .then((ctp_99453_Status) => {
//     if (ctp_99453_Status.find('[data-test-id="disable"]').length < 0) {
//       cy.get('[data-test-id="cpt-99453"]')
//         .eq(0)
//         .then((ctp_99453) => {
//           const ctp_99453_Number = ctp_99453.text()
//           console.log('############## ctp_99453_Number :-', ctp_99453_Number)
//         })
//     } else {
//       return console.log('CPT: 99453 Code Is Enable')
//     }
//   })
// .eq(0).contains('[data-test-id="enable"]')
// .find('[data-test-id="enable"]')
// .then(() => {

// cy.get('[data-test-id="cpt-container"]')
//   .find('[data-test-id="cpt-99454-status"]')
//   .eq(0)
//   .find('[data-test-id="enable"]')
//   .then(() => {
//     cy.get('[data-test-id="cpt-container"]')
//       .find('[data-test-id="cpt-99457-status"]')
//       .eq(0)
//       .find('[data-test-id="enable"]')
//       .then(() => {
//         cy.get('[data-test-id="cpt-container"]')
//           .find('[data-test-id="cpt-99458-status"]')
//           .eq(0)
//           .find('[data-test-id="enable"]')
//       })
//   })
// })
// ) {
//   cy.get('[data-test-id="cpt-99453"]')
//     .eq(0)
//     .then((ctp_99453) => {
//       const ctp_99453_Number = ctp_99453.text()
//       console.log('################ ctp_99453_Number :- ', ctp_99453_Number)
//     })
// // } else {
//   cy.get('[data-test-id="cpt-container"]')
//     .find('[data-test-id="cpt-99453-status"]')
//     .eq(0)
//     .find('[data-test-id="disable"]')

//   console.log('CPT-99453 Is not enable')
//   return false
// }
// .is('[data-test-id="enable"]', '[data-test-id="disable"]')
// .eq(0)
// .then((sptlenght) => {
//   const sptlenghtcount = sptlenght.text()
//   console.log('############# sptlenghtcount :-', sptlenghtcount)
// })

// ?.find('[data-test-id="cpt-99453"]')
// .then((enableStatus) => {
//   // const enableStatusInfo = enableStatus.find('[]')
//   if (enableStatus.find('[data-test-id="enable"]')) {
//     const ctp_99453_Text = enableStatus.text()
//     console.log('################## ctp_99453_Text :- ', ctp_99453_Text)
//   } else {
//     enableStatus.find('[data-test-id="disable"]')
//     console.log('########## :- CTP: 99453 is not enable')
//     return false
//   }
// })

// cy.get('[data-test-id="cpt-container"]')
//   .eq(0)
//   .find('[data-test-id="cpt-99454"]')
//   .then((enableStatus) => {
//     // const enableStatusInfo = enableStatus.find('[]')
//     if (enableStatus.is('[data-test-id="enable"]')) {
//       const ctp_99453_Text = enableStatus.text()
//       console.log('################## ctp_99454_Text :- ', ctp_99453_Text)
//       return true
//     } else {
//       enableStatus.find('[data-test-id="disable"]')
//       console.log('########## :- CTP: 99454 is not enable')
//       return false
//     }
//   })

// cy.get('[data-test-id="cpt-container"]')
//   .eq(0)
//   .find('[data-test-id="cpt-99457"]')
//   .then((enableStatus) => {
//     // const enableStatusInfo = enableStatus.find('[]')
//     if (enableStatus.is('[data-test-id="enable"]')) {
//       const ctp_99453_Text = enableStatus.text()
//       console.log('################## ctp_99457_Text :- ', ctp_99453_Text)
//     } else {
//       enableStatus.find('[data-test-id="disable"]')
//       console.log('########## :- CTP: 99457 is not enable')
//       return false
//     }
//   })

// cy.get('[data-test-id="cpt-container"]')
//   .eq(0)
//   .find('[data-test-id="cpt-99458"]')
//   .then((enableStatus) => {
//     // const enableStatusInfo = enableStatus.find('[]')
//     if (enableStatus.is('[data-test-id="enable"]')) {
//       const ctp_99453_Text = enableStatus.text()
//       console.log('################## ctp_99458_Text :- ', ctp_99453_Text)
//     } else {
//       enableStatus.find('[data-test-id="disable"]')
//       console.log('########## :- CTP: 99458 is not enable')
//       return false
//     }
//   })

// if (cy.get('[data-test-id="cpt-container"]').eq(0).find(ctp_99453)) {
//   cy.get('[data-test-id="cpt-container"]').eq(0).find('[data-test-id="enable"]')
//   ctp_99453.then((ctpCode99453) => {
//     const ctpCode99453Number = ctpCode99453.text()
//     console.log('################## ctpCode99453Number :- ', ctpCode99453Number)
//   })
// }
// else if (ctp_99454.find('[data-test-id="enable"]')) {
//   ctp_99454.then((ctpCode99454) => {
//     const ctpCode99454Number = ctpCode99454.text()
//     console.log('################## ctpCode99454Number :- ', ctpCode99454Number)
//   })
// } else if (ctp_99457.find('[data-test-id="enable"]')) {
//   ctp_99457.then((ctpCode99457) => {
//     const ctpCode99457Number = ctpCode99457.text()
//     console.log('################## ctpCode99457Number :- ', ctpCode99457Number)
//   })
// } else if (ctp_99458.find('[data-test-id="enable"]')) {
//   ctp_99458.then((ctpCode99458) => {
//     const ctpCode99458Number = ctpCode99458.text()
//     console.log('################## ctpCode99458Number :- ', ctpCode99458Number)
//   })
// }

// cy.get('[data-test-id="cpt-99453"]').then((firstPatientSetupCode) => {
//   const firstPatientSetupCodeText = firstPatientSetupCode.text()
//   console.log('################### firstPatientSetupCodeText :- ', firstPatientSetupCodeText)
// })

// cy.get('[data-test-id="enable"]').then((statusCode) => {
//   const statusCodelenght = statusCode.length
//   console.log('##################### statusCodelenght :- ', statusCodelenght)
// })

// .should(
//   'have.css',
//   'style',
//   'color: rgb(251, 67, 74); font-size: 16px;',
// )
// .eq(0)
// .then((firstPatientSetupCodeStatus) => {
//   const firstPatientSetupCodeStatusText = firstPatientSetupCodeStatus.text()
//   console.log(
//     '################## firstPatientSetupCodeStatusText :- ',
//     firstPatientSetupCodeStatusText,
//   )
// })

// 20/07/2022
// // Get manager billing Patient name
// cy.get('[data-test-id="manage-billing-name"]', { timeout: 10000 }).eq(0)

// cy.get('[data-test-id="manage-billing-name"]')
//   .eq(0)
//   .then((firstPatient) => {
//     const firstPatientName = firstPatient.text()

//     // Get manager billing Patient DOB
//     cy.get('[data-test-id="dob"]')
//       .eq(0)
//       .then((firstPatientdob) => {
//         const firstPatientdobText = firstPatientdob.text()
//         const firstPatientDateOfBirth = firstPatientdobText.replace(/ /g, '')

//         // Get manager billing ICD-10 Code
//         cy.get('[data-test-id="icd10_code"]')
//           .eq(0)
//           .then((icd10Code) => {
//             const icd10CodeText = icd10Code.text()

// Get manager billing Patient payer information
// cy.get('[data-test-id="payer-name-0"]')
// cy.get('[data-test-id="payer-info"]')
//   .eq(0)
//   .then((PatientPayer) => {
//     const firstPatientPayer = PatientPayer.text()
//     console.log('################# firstPatientPayer :-', firstPatientPayer)

// cy.get('[data-test-id="payer_info_Primary"]')
//   .eq(0)
//   .then((primaryPayerKey) => {
//     const primaryPayerKeyText = primaryPayerKey.text()
//     console.log('############# primaryPayerKeyText :- ', primaryPayerKeyText)
//     // expect(firstPatientPayer).contains(primaryPayerKeyText)
//   })
// cy.get('[data-test-id="payer_info_Third"]')
//   .eq(0)
//   .then((abcd) => {
//     const abcdText = abcd.text()
//     console.log('################# abcdText :- ', abcdText)
//   })

// cy.go('back')

//         // Get manager billing Patient All CPT Codes
//         cy.get('[data-test-id="cpt-container"]')
//           .eq(0)
//           .find('[data-testid="cpt-block-text"]')
//           .each((cpt_Codes) => {
//             const cpt_Codes_Text = cpt_Codes.text()
//             console.log('################ cpt_Codes_Text :- ', cpt_Codes_Text)

//             // Get manager billing Patient All DOS
//             cy.get('[data-test-id="cpt-container"]')
//               .eq(0)
//               .find('[data-testid="cpt-dos-text"]')
//               .each((cpt_dos) => {
//                 const cpt_dos_text = cpt_dos.text()
//                 console.log('################## cpt_dos_text :- ', cpt_dos_text)
//                 cy.wait(1000)

// Click on submit practice suite data button
// cy.get('[data-test-id="submit-practice-suite-data"]', {
//   timeout: 10000,
// })
//   .should('be.visible')
//   .click()
// cy.wait(1000)

//  Get PS - listing: Patient First Name
// cy.get('[data-test-id="first-name-0"]')
//   .eq(0)
//   .then((patientFirstName) => {
//     const patientFirstNameText = patientFirstName.text()

//     expect(firstPatientName).contains(patientFirstNameText)
//   })

// //  Get PS - listing: Patient Last Name
// cy.get('[data-test-id="last-name-0"]')
//   .eq(0)
//   .then((patientLastName) => {
//     const patientLastNameText = patientLastName.text()

//     expect(firstPatientName).contains(patientLastNameText)
//   })

// //  Get PS - listing: Patient DOB
// cy.get('[data-test-id="dob-0"]')
//   .eq(0)
//   .then((patientDos) => {
//     const patientDosText = patientDos.text()
//     expect(firstPatientDateOfBirth).to.equal(patientDosText)
//   })

// // Get PS - listing: Patient ICD-10 Code
// cy.get('[data-test-id="ps_icd10_code"]')
//   .eq(0)
//   .then((ps_icd10_code) => {
//     const ps_icd10_code_Text = ps_icd10_code.text()
//     const ps_icd10_code_Text_Trim = ps_icd10_code_Text.replace(/ /g, '')
//     expect(ps_icd10_code_Text_Trim).to.equal(icd10CodeText)
//   })

//  Get PS - listing: Patient Primary Payer information
// cy.get('[data-test-id="payer_information-value-0-0"]')
// cy.get('[data-test-id="payer_info_Primary"]')
//   .eq(0)
//   .then((primaryPayerKey) => {
//     const primaryPayerKeyText = primaryPayerKey.text()
//     console.log('############# primaryPayerKeyText :- ', primaryPayerKeyText)
//     // expect(firstPatientPayer).contains(primaryPayerKeyText)
//   })
// cy.get('[data-test-id="payer_info_Third"]')
//   .eq(0)
//   .then((abcd) => {
//     const abcdText = abcd.text()
//     console.log('################# abcdText :- ', abcdText)
//   })

// cy.wait(15000)
// cy.get('[data-test-id="payer-info"]')
//   .eq(0)
//   .then((PatientPayer) => {
//     const firstPatientPayer = PatientPayer.text()
//     console.log('################# firstPatientPayer :-', firstPatientPayer)
//   })
//         })
//     })
// })

// cy.contains('[data-testid="ps-cpt-dos-text"]', cpt_dos_text)
// cy.get('[data-testid="ps-cpt-dos-text"]')
//   .eq(0)
//   .then((firstPatientSetupCodeDos) => {
//     const firstPatientSetupCodeDosText = firstPatientSetupCodeDos.text()
//     // expect(cpt_dos_text).to.contains(firstPatientSetupCodeDosText)
//     console.log('################# :- ', firstPatientSetupCodeDosText)
//   })
// })

// Get PS - Listing: Patient CTP's CODEs
// cy.get('[data-testid="ps-cpt-block-text"]')
//   .eq(0)
//   .then((ps_cpt_Codes) => {
//     const ps_cpt_Codes_Text = ps_cpt_Codes.text()
//     console.log('############## ps_cpt_Codes_Text :- ', ps_cpt_Codes_Text)
//   })
// })
// })
