<script setup>
  const newStudent = {
    id: '',
    confirmationID: '',
    temporaryIDNumber: '',
    student: {
      lsuID: '',
      title: '',
      firstName: '',
      middleName: '',
      lastName: '',
      extensionOrSuffixName: '',
      dateOfBirth: '',
      age: '',
      birthOrder: '',
      citizenship: '',
      birthPlace: '',
      biologicalSex: '',
      nationality: '',
      religion: '',
      academicStatus: '',
      civilStatus: '',
      dateApplied: '',
      semesterOrTerm: '',
      academicYear: '',
      dateOfBirth: '',
      gender: '',
      contactNumber: '',
      learningReferenceNumberReportCard: '',
      college: '',
      courseProgram: '',
      courseYearLevel: '',
      courseMajor: '',
      lsuEmailAddress: '',
      contactEmailAddress: '',
      studentCurrentAddress: '',
      studentPermanentAddress: '',
      studentLivingHomeAddressCategory: '',
      hasFundedScholarshipOrGrantInAIDProgram: '',
      educationalInfo: [
        {
          curriculum: '',
          nameOfPreviousSchool: '',
          trackOrProgram: '',
          highestHonorsReceived: '',
          cityOrMunicipalityAndProvince: '',
          yearGraduated: '',
        }
      ],
    },
    howYouLearnAboutLSU: '',
    reasonForChoosingLSU: '',
    studentContactPerson: {
      lastName: '',
      firstName: '',
      middleName: '',
      extensionOrSuffix: '',
      relation: '',
      permamentAddress: '',
      currentAddress: '',
      contactNumber: '',
    },
    father: {
      vitalLifeStatus: '',
      lastName: '',
      firstName: '',
      middleName: '',
      extensionOrSuffix: '',
      maritalStatus: '',
      dateOfBirth: '',
      permanentAddress: '',
      currentAddress: '',
      contactNumber: '',
      contactEmailAddress: '',
      employmentInfo: '',
      highestEducationCompleted: '',
      occupationOrTitle: '',
      citizenship: '',
      sourceIncome: '',
      fatherGrossMonthlyIncome: '',
      fatherCompanyEmployer: {
        name: '',
        address: '',
        contactNumber: ''
      },
    },
    mother: {
      VitalLifeStatus: '',
      LastName: '',
      FirstName: '',
      MiddleName: '',
      ExtensionOrSuffix: '',
      MaritalStatus: '',
      DateOfBirth: '',
      PermanentAddress: '',
      CurrentAddress: '',
      ContactNumber: '',
      ContactEmailAddress: '',
      EmploymentInfo: '',
      HighestEducationCompleted: '',
      OccupationOrTitle: '',
      Citizenship: '',
      SourceIncome: '',
      GrossMonthlyIncome: '',
      CompanyEmployer: {
        name: '',
        address: '',
        contactNumber: ''
      },
    },
    legalGuardian: {
      relation: '',
      vitalLifeStatus: '',
      lastName: '',
      firstName: '',
      middleName: '',
      extensionOrSuffix: '',
      maritalStatus: '',
      dateOfBirth: '',
      permanentAddress: '',
      currentAddress: '',
      contactNumber: '',
      contactEmailAddress: '',
      citizenship: '',
      employmentInfo: '',
      highestEducationCompleted: '',
      occupationOrTitle: '',
      sourceIncome: '',
      grossMonthlyIncome: '',
      companyEmployer: {
        name: '',
        address: '',
        contactNumber: ''
      },
    },
    siblings: [
      {
        lastName: '',
        firstName: '',
        middleName: '',
        extensionOrSuffix: '',
        dateOfBirth: '',
        age: '',
        civilStatus: '',
        highestEducationalAttainment: '',
        nameOfSchoolAttendedOrCompanyEmployer: '',
      }
    ],
    choiceTrackProgram: {
      first: '',
      second: '',
      third: '' 
    },
    foreign: {
      statusInfoVisaStatus: '',
      lastDayOfAuthorizedStay: '',
      agentName: '',
      passportNumber: '',
      placeIssued: '',
      dateIssued: '',
      dateOfExpiry: '',
      ACRICARDDateIssued: '',
      ACRICARDDateOfExpiry: '',
      CRTSDateIssued: '',
      CRTSDateOfExpiry: '',
      SSPDateIssued: '',
      SSPDateOfExpiry: '',
    },
    healthCheckInSurveryInPresentTime: {
      physicalHealth: '',
      mentalHealth: '',
      mentalHealthSupport: ''
    },
    SAOPersonnel: {
      remarks: '',
      checkedVerifiedBy: '',
      dateVerified: '',
    },
    promissoryNoteApprovalStatus: {
      status: '',
      remarks: ''
    },
    documents: '',
    createdBy: '',
  }
</script>

<template>
  <div class="bg-gray-50">
    <Header />
    <div class="">
      <div class="">
        <div class="">
          <div class="pt-10 w-full bg-green-900">
            <h1
              class="font-bold uppercase text-white lg:text-2xl text-lg w-11/12 mx-auto pt-14 pb-5"
            >
              Admissions
            </h1>
          </div>
          <div class="pt-2.5 pb-3 shadow-lg">
            <ul class="flex lasalle-green-text capitalize w-11/12 mx-auto text-xs">
              <li>
                <a href="/" class="mr-1"> Home </a>
              </li>
              <li>
                <i class="fas fa-caret-right mr-1"></i>
                <a href="/enrollment" class="mr-1"> Enrollment </a>
              </li>
              <li>
                <i class="fas fa-caret-right mr-1"></i>
                <a href="/admissions" class="mr-1"> Admissions </a>
              </li>
              <li>
                <i class="fas fa-caret-right mr-1"></i>
                <a href="/admissions/continuing" class="mr-1"> Continuing Student </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Learner Management System -->
      <!-- <div>
        <h3>CERTIFICATION</h3>
        <ul>
          By clicking the button below, I certify that:

          <li>all information in this application is factually true and completely presented; </li>
          <li> I am the person submitting this form;</li>
          <li> falsification or withholding of information requested in this form automatically nullify my application and/or subject me for dismissal, even if already admitted;</li>
          <li> credentials and information filed/submitted in support of this application become the property of La Salle University - Ozamiz City. Including future collection of photographic, video, electronic images, and/or voice in class composites, yearbooks, commencement programs, brochures, websites, promotional media, and other marketing and communication materials;</li>
          <li>documents submitted are not returnable to the applicant/student, and;</li>
          <li>collection and use of this data, which may include personal information and sensitive personal information, shall be in accordance with the Data Privacy Act of 2012.</li>
        </ul>
      </div> -->
      <!-- <div>
        <p>Checking of the box below shall be interpreted as constituting a signature of certification of the above-mentioned.</p>
        <input type="checkbox" /><label>I CERTIFY</label>
      </div> -->
      <div class="w-11/12 mx-auto items-center flex lg:py-10 pt-5 mb-5 shadow-lg">
        <div class="mx-auto lg:mt-0 lg:flex lg:gap-20">
          
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.bg-green-10 {
  background: #003613;
}
.login-with-google-btn {
  border: none;
  background-image: url("https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/icons8-google-48.png");
  background-size: 30px 30px;
  background-repeat: no-repeat;
  background-position: 8% 51%;
}
</style>
