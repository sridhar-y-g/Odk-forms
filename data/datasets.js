const datasets = {
  medical: {
    1: {
      claimNo: "20042047",
      workerName: "Madeleine Willson",
      appId: "712041",
      submittedDate: "March 28, 2024 20:43",
      prescriptionDrugs: [
        { name: "Naproxen", rxDate: "2024-02-28", purchasedDate: "2024-02-29", provider: "Dr. Best", amount: "20.00" }
      ],
      otcDrugs: [
        { name: "Advil", purchasedDate: "2024-03-28", amount: "8.00", seller: "Shoppers Drug Mart", reason: "Pain" }
      ],
      supplies: [
        { item: "Tensor", purchasedDate: "2024-02-28", prescribed: "Yes", provider: "Dr. Best", amount: "10.00", seller: "Shoppers DrugMart" }
      ],
      parking: [
        { address: "333 St Mary Ave, Winnipeg MB R3C4A5, Canada", date: "2024-03-28", amount: "10.00", meterUsed: "yes", meterNo: "12245" }
      ],
      mileage: [
        { date: "2024-03-28", facilityAddress: "HSC, 820 Sherbrook St, Winnipeg MB R3A 1R9, Canada", workplaceAddress: "WCB, 333 Broadway, Winnipeg MB R3C 4W3, Canada", km: "20" }
      ],
      busTaxi: [
        { date: "2024-03-28", startingAddress: "", facilityAddress: "HSC Winnipeg Women's Hospital, 665 William Ave, Winnipeg MB R3E 0Z2, Canada", type: "Bus", fare: "3.00" },
        { date: "2024-03-27", startingAddress: "25 Furby St, Winnipeg MB R3C 2A2, Canada", facilityAddress: "440 Edmonton St, Winnipeg MB R3B 2M4, Canada", type: "Taxi", fare: "15.00" }
      ],
      privacyChecked: true
    },
    2: {
      claimNo: "20042047-OVERFLOW",
      workerName: "Madeleine Willson (Testing Multi-page Layout)",
      appId: "712041",
      submittedDate: "July 07, 2026 13:40",
      prescriptionDrugs: [
        { name: "Naproxen", rxDate: "2024-02-28", purchasedDate: "2024-02-29", provider: "Dr. Best", amount: "20.00" },
        { name: "Amoxicillin", rxDate: "2024-03-01", purchasedDate: "2024-03-02", provider: "Dr. Best", amount: "15.50" },
        { name: "Ibuprofen 600mg", rxDate: "2024-03-05", purchasedDate: "2024-03-05", provider: "Dr. Medical", amount: "12.00" },
        { name: "Atorvastatin", rxDate: "2024-03-10", purchasedDate: "2024-03-11", provider: "Dr. Heart", amount: "45.00" },
        { name: "Metformin", rxDate: "2024-03-12", purchasedDate: "2024-03-12", provider: "Dr. Best", amount: "8.50" }
      ],
      otcDrugs: [
        { name: "Advil", purchasedDate: "2024-03-28", amount: "8.00", seller: "Shoppers Drug Mart", reason: "Pain" },
        { name: "Tylenol Extra Strength", purchasedDate: "2024-03-29", amount: "10.50", seller: "Rexall", reason: "Fever" },
        { name: "Claritin", purchasedDate: "2024-04-01", amount: "22.00", seller: "Walmart Pharmacy", reason: "Allergies" },
        { name: "Cough Syrup", purchasedDate: "2024-04-02", amount: "9.25", seller: "Shoppers Drug Mart", reason: "Cough" }
      ],
      supplies: [
        { item: "Tensor Bandage", purchasedDate: "2024-02-28", prescribed: "Yes", provider: "Dr. Best", amount: "10.00", seller: "Shoppers DrugMart" },
        { item: "Knee Brace", purchasedDate: "2024-03-05", prescribed: "Yes", provider: "Dr. Ortho", amount: "85.00", seller: "Medical Supply Co" },
        { item: "Ice Pack (Gel)", purchasedDate: "2024-03-06", prescribed: "No", provider: "", amount: "14.99", seller: "Rexall" },
        { item: "Crutches (Pair)", purchasedDate: "2024-03-10", prescribed: "Yes", provider: "HSC Clinic", amount: "40.00", seller: "Red Cross" }
      ],
      parking: [
        { address: "333 St Mary Ave, Winnipeg MB R3C4A5, Canada", date: "2024-03-28", amount: "10.00", meterUsed: "yes", meterNo: "12245" },
        { address: "HSC Parking Garage, Winnipeg MB, Canada", date: "2024-03-15", amount: "18.00", meterUsed: "no", meterNo: "" },
        { address: "St. Boniface Hospital Parking, Winnipeg MB", date: "2024-03-20", amount: "15.00", meterUsed: "yes", meterNo: "88741" },
        { address: "Medical Clinic Lot, Winnipeg MB", date: "2024-03-25", amount: "6.00", meterUsed: "yes", meterNo: "9921" }
      ],
      mileage: [
        { date: "2024-03-28", facilityAddress: "HSC, 820 Sherbrook St, Winnipeg MB R3A 1R9, Canada", workplaceAddress: "WCB, 333 Broadway, Winnipeg MB R3C 4W3, Canada", km: "20" },
        { date: "2024-03-15", facilityAddress: "St. Boniface Clinic, Winnipeg MB", workplaceAddress: "WCB, 333 Broadway, Winnipeg MB R3C 4W3, Canada", km: "15" },
        { date: "2024-03-20", facilityAddress: "Pan Am Clinic, Poseidon Bay, Winnipeg MB", workplaceAddress: "WCB, 333 Broadway, Winnipeg MB R3C 4W3, Canada", km: "34" },
        { date: "2024-03-22", facilityAddress: "Dr. Best Office, Main St, Winnipeg MB", workplaceAddress: "WCB, 333 Broadway, Winnipeg MB R3C 4W3, Canada", km: "12" }
      ],
      busTaxi: [
        { date: "2024-03-28", startingAddress: "Home", facilityAddress: "HSC Winnipeg Women's Hospital, Winnipeg MB, Canada", type: "Bus", fare: "3.00" },
        { date: "2024-03-27", startingAddress: "25 Furby St, Winnipeg MB R3C 2A2, Canada", facilityAddress: "440 Edmonton St, Winnipeg MB R3B 2M4, Canada", type: "Taxi", fare: "15.00" },
        { date: "2024-03-12", startingAddress: "Home", facilityAddress: "Winnipeg Physio Centre, Portage Ave", type: "Bus", fare: "3.25" },
        { date: "2024-03-14", startingAddress: "Physio Centre", facilityAddress: "Home", type: "Taxi", fare: "18.50" },
        { date: "2024-03-19", startingAddress: "Home", facilityAddress: "HSC Clinic, Winnipeg MB", type: "Taxi", fare: "22.00" },
        { date: "2024-03-25", startingAddress: "Home", facilityAddress: "Medical Lab, Winnipeg", type: "Bus", fare: "3.25" }
      ],
      privacyChecked: true
    }
  },
  worker: {
    1: {
      claimNo: "20042047",
      workerName: "Madeleine Willson",
      appId: "712041",
      submittedDate: "March 19, 2024 19:21",
      returnStatus: "returned",
      returnDate: "2024-03-15",
      workingDuty: "modified_reduced",
      workingDutyOther: "",
      returnComments: "Terrible. Testing Testing",
      expectedReturnDate: "",
      returnConcerns: "",
      employerContactName: "",
      employerContactDate: "",
      recoveredStatus: "fully",
      recoveryComments: "",
      painValue: "",
      continuingTreatment: "",
      continuingProviderType: "",
      lastTreatmentDate: "",
      lastTreatmentProvider: "",
      nextTreatmentDate: "",
      nextTreatmentProvider: "",
      chiropractorPhysioFrequency: "",
      medicationStatus: "",
      medicationName: "",
      exercisesStatus: "",
      exercisesList: "",
      additionalComments: "No info Testing Testing",
      certifyChecked: false,
      privacyChecked: false
    },
    2: {
      claimNo: "20042047-WK-OVERFLOW",
      workerName: "Madeleine Willson (Testing Multi-page layout with large text blocks)",
      appId: "712041",
      submittedDate: "July 07, 2026 13:45",
      returnStatus: "returned",
      returnDate: "2024-03-15",
      workingDuty: "other",
      workingDutyOther: "Gradual Return to Work program under the supervision of Dr. Best and the workplace health representative, adjusting hours weekly based on tolerance.",
      returnComments: "My return to work is going extremely slowly. I experience muscle fatigue after 2 hours of light duties. The workplace has adjusted my desk height and provided an ergonomic chair, but sitting for long periods remains a challenge. We are currently testing a schedule of 3 hours per day, 3 days a week, with breaks every 45 minutes to stretch.",
      expectedReturnDate: "2024-05-01",
      returnConcerns: "I am concerned that the constant aching in my lower back will prevent me from increasing my hours next month. The commuting by bus also adds to the fatigue before the work day even begins. I hope to get approval for specialized transport or temporary work-from-home options for a portion of the week.",
      employerContactName: "John Doe (HR Manager)",
      employerContactDate: "2024-03-18",
      recoveredStatus: "not_fully",
      recoveryComments: "The range of motion in my right shoulder has improved by approximately 45% compared to last month, but lifting objects heavier than 5 lbs still causes sharp pain. I am performing daily strength exercises at home and attending physiotherapy sessions twice a week.",
      painValue: 8,
      continuingTreatment: "continuing",
      continuingProviderType: "Chiropractor & Physiotherapist",
      lastTreatmentDate: "2024-03-18",
      lastTreatmentProvider: "Dr. Best (Winnipeg Clinic)",
      nextTreatmentDate: "2024-03-25",
      nextTreatmentProvider: "Dr. Best (Winnipeg Clinic)",
      chiropractorPhysioFrequency: "3 times per week (2 Physio, 1 Chiro)",
      medicationStatus: "taking",
      medicationName: "Naproxen 500mg (twice daily) and Cyclobenzaprine (muscle relaxant at bedtime)",
      exercisesStatus: "doing",
      exercisesList: "1. Shoulder pendulum swings (3 sets of 10)\n2. Wall crawls for range of motion (5 reps, twice daily)\n3. Resistance band external rotations (10 reps, 3 sets)\n4. Low-impact core stabilization floor exercises.",
      additionalComments: "Testing overflow and pagination. This block contains very long additional comments to push the layout of the document onto subsequent pages. The WCB case worker has been notified of the ongoing physiotherapy sessions. Receipts for medical travel and parking will be submitted separately using the Medical & Travel Expense Request Form.",
      certifyChecked: true,
      privacyChecked: true
    }
  }
};

module.exports = datasets;
