<script setup>
const router = useRouter();

const newFirstYearStudent = () => {
    router.push("/admissions/form/new/new-first-year-student");
}

const transfereeStudent = () => {
    router.push("/admissions/form/new/transferee-student"); 
}

const secondDegreeHolderStudent = () => {
    router.push("/admissions/form/new/second-degree-holder-student");
}

const continuingStudent = () => {
    router.push("/admissions/form/continuing");
}

const newStudentStatus = ref(false);
const instructionsSteps = ref(true);

const newStudentSelection = () => {
    // router.push("/admissions/form/new");
    instructionsSteps.value = false;
    newStudentStatus.value = true;
}

const toggle = ref({
    one: true,
    two: false,
    three: false,
    four: false,
    five: false
})

const toggleInfo = (a, b, c, d, e) => {
    toggle.value = {
        one: a,
        two: b,
        three: c,
        four: d,
        five: e
    }
}


const firstNext = () => {
  // if(staticNewStudentTexts.value.data_privacy_notice_consent.proceed.read_above_statements_terms_and_conditions === false) {

  // } else {
    toggleInfo(false, true, false, false)
  // }
}


const staticNewStudentTexts = ref({
    data_privacy_notice_consent: {
        proceed: {
          read_above_statements_terms_and_conditions: false,
          is_eighteen_years_old_or_above: false,
        },
        text: [
            'Data Privacy Notice',
            'La Salle University Ozamiz upholds the Republic Act No. 10173 known as "Data Privacy Act of 2012" which declares the policy of the State to protect the fundamental human right of privacy while ensuring free flow of information to promote innovation and growth.',
            'In line with this, we would like to have your consent to collect and process all relevant personal information. This may include the student’s personal identifiable information such as name, age, sex at birth, address, contact details, and other relevant (previous) school records, that are relevant for LSU Admissions and Scholarships Center processes. This may include endorsement of student data (if requested) to other Lasallian Schools, DLSP, CHED, Dep-Ed and other legitimate (government/non-government) agencies. Rest assured that information you share with us will be treated with utmost confidentiality.',
            'If you agree to the abovementioned, kindly click the agree button below siginfying your consent and willingness to participate in the process of the collection, use and release of your information to the authorized personnel for legitimate purposes stated above.',
            'Should you wish to withdraw your consent, please get in touch with us through our website www.lsu.edu.ph or email us at president@lsu.edu.ph.',
            'I have READ and UNDERSTOOD the above statements and AGREE to all its terms and conditions',
            'I am 18 years old or above'
        ]
    }
})
</script>

<template>
    <div class="bg-gray-50">
        <Header />
        <div class="">
            <div class="">
                <div class="">
                    <div class="pt-10 w-full bg-green-900">
                        <h1 class="font-bold uppercase text-white lg:text-2xl text-lg w-11/12 mx-auto pt-14 pb-5">
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
                        </ul>
                    </div>
                </div>
            </div>
            
            <div v-if="instructionsSteps">
                            
            <div v-show="toggle.one">
               <div class="w-11/12 mx-auto lg:my-10 my-5 shadow-lg">
                <div class="border-b-4">
                    <h2 class="lg:text-base text-xs px-10 uppercase py-2 font-bold bg-green-900 text-white text-center lg:mb-10 mb-3">
                            {{ staticNewStudentTexts.data_privacy_notice_consent.text[0] }}
                        </h2>
                    <div class="lg:mb-10 mb-5 lg:px-10 px-3">
                        
                        <p class="text-green-900 leading-tight tracking-tight lg:text-sm text-xs mb-2">
                            {{ staticNewStudentTexts.data_privacy_notice_consent.text[1] }}
                        </p>
                        <p class="text-green-900 leading-tight tracking-tight lg:text-sm text-xs mb-2">
                            {{ staticNewStudentTexts.data_privacy_notice_consent.text[2] }}
                        </p>
                        <p class="text-green-900 leading-tight tracking-tight lg:text-sm text-xs mb-2">
                            {{ staticNewStudentTexts.data_privacy_notice_consent.text[3] }}
                        </p>
                        <p class="text-green-900 leading-tight tracking-tight lg:text-sm text-xs mb-2">
                            {{ staticNewStudentTexts.data_privacy_notice_consent.text[4] }}
                        </p>
                    </div>
                    <div class="lg:px-10 px-3 lg:mb-10 mb-5">
                        <div class="flex items-center my-2">
                            <input type="checkbox"
                                v-model="staticNewStudentTexts.data_privacy_notice_consent.proceed.read_above_statements_terms_and_conditions"
                                class="mr-2" />
                            <label
                                class="lg:text-sm text-xs leading-tight tracking-tight font-bold text-green-900">
                                {{ staticNewStudentTexts.data_privacy_notice_consent.text[5] }}
                            </label>
                        </div>
                        <div class="flex items-center">
                            <input type="checkbox"
                                v-model="staticNewStudentTexts.data_privacy_notice_consent.proceed.is_eighteen_years_old_or_above"
                                class="mr-2" />
                            <label
                                class="lg:text-sm text-xs leading-tight tracking-tight font-bold text-green-900">
                                {{ staticNewStudentTexts.data_privacy_notice_consent.text[6] }}
                            </label>
                        </div>
                    </div>
                </div>
                <div class="py-5">
                    <div class="w-fit mr-0 ml-auto flex">
                        <div class="cursor-pointer py-1 uppercase px-4 shadow bg-green-800 text-white 
                        hover:bg-white hover:text-green-800 rounded-lg mx-2" 
                        @click="firstNext()">
                        Next <i class="fa fa-angle-double-right pl-2"></i>
                        </div>
                    </div>
                </div>
               </div>
            </div>
            
        
            <div v-show="toggle.two">
                <div class="w-11/12 mx-auto lg:my-10 my-5 shadow-lg">
                    <div class="">
                        <p class="text-base text-white font-bold bg-green-900 text-center py-2 lg:px-10 px-3">
                            Lasallian Greetings of Peace!
                        </p>
                        <p class="font-bold text-green-800 uppercase lg:text-sm text-xs px-2 lg:pt-7 pt-5 pb-5 text-center">PLEASE READ CAREFULLY THE FOLLOWING INSTRUCTIONS BEFORE YOU CONTINUE WITH YOUR APPLICATION.</p>

                        <ul class="list-decimal lg:ml-14 ml-7 text-sm pb-5 pr-5">
                            <li class="mb-2 pl-1 lg:text-sm text-xs">
                            
                                As part of your admission to La Salle University (LSU), all fields in the Application Form for Admission to Undergraduate Program for new and continuing students must be provided completely and accurately by the applicant. Otherwise, click or type N/A for questions that are not applicable to you.
                            </li>

                            <li class="mb-2 pl-1 lg:text-sm text-xs">
                            
                                Credentials that will be submitted in support of your application must be submitted in original copies and become the property of LSU and will not be returned to the applicant. You are highly advised to keep a photocopy of each of the documentary requirement before submitting them to the <span class="font-bold text-green-800">Admissions and Scholarships Center</span>.
                            </li>
                            <li class="mb-2 pl-1 lg:text-sm text-xs">
                                Misrepresentation of information requested in this application will be sufficient reason for refusal of admission and exclusion.
                            </li>
                            <li class="mb-2 pl-1 lg:text-sm text-xs">
                                To ensure a smooth flow of your registration on the day of your enrollment, continuing students are instructed to make sure to settle all their financial obligations first. An overdue outstanding balance may subject students to registration holds if not cleared by the Finance and Accounting Services.
                            </li>
                                <li class="mb-2 pl-1 lg:text-sm text-xs">                                                                              
                                    Transfer student must present first their academic records to their assigned college for evaluation and/or course crediting prior to step 2 of the enrollment procedures.    
                            </li>
                            <li class="mb-2 pl-1 lg:text-sm text-xs">
                                Continuing students who intend to shift to a different degree program must first undergo career re-assessment at CCC prior to step 2 of the enrollment procedures. 
                            </li>

                            <li class="mb-2 pl-1 lg:text-sm text-xs">
                                The University reserves the right to change the flow of the enrollment procedures and items in this page from time to time. In case of changes, the revisions will be incorporated in the current form and will take effect immediately.     
                            </li>


                            <li class="mb-2 pl-1 lg:text-sm text-xs">
                                You will need a valid email address for logging on to your application account and for receiving notifications about your application status.
                            </li>

                            <li class="mb-2 pl-1 lg:text-sm text-xs">
                                Do not submit multiple applications as these will cause much delay in accessing your application and make sure you have a stable internet connection when accomplishing the application form.
                            </li>
                            <li class="mb-2 pl-1 lg:text-sm text-xs">
                                Visit <a class="font-bold text-green-900" href="https://lsu.edu.ph/enrollment/tracking" target="_blank">Enrollment Tracking Page</a>  and check your email regularly for announcements and updates regarding
                                your application for admission
                                </li>
                        </ul>
                    </div>
                    <div class="py-5 border-t-4">
                        <div class="justify-between flex">
                          <div @click="toggleInfo(true, false, false, false)" class="cursor-pointer py-1 uppercase px-4 shadow bg-green-800 text-white hover:bg-white hover:text-green-800 rounded-lg mx-2">
                            <i class="fa fa-angle-double-left pr-2"></i> Prev
                          </div>
                          <div class="cursor-pointer py-1 uppercase px-4 shadow bg-green-800 text-white hover:bg-white hover:text-green-800 rounded-lg mx-2" @click="toggleInfo(
                            false, false, true, false)">Next <i class="fa fa-angle-double-right pl-2"></i>
                          </div>
                        </div>
                    </div>
                </div>
            </div>



            <div v-show="toggle.three">
                <div class="w-11/12 mx-auto lg:my-10 my-3 shadow-lg">
                    <div>
                        <div>
                            <div class="shadow-lg">
                                <div class="bg-green-800 text-white flex items-center">
                                    <div class="w-9/12 lg:text-center px-3 font-bold border-r border-black py-1 lg:text-sm text-xs">
                                        ADMISSION REQUIREMENTS
                                    </div>
                                    <div class="w-3/12 text-center font-bold py-1 lg:text-sm text-xs">
                                        WHERE TO SECURE
                                    </div>
                                </div>
                                <div class="bg-green-900 text-white flex items-center lg:py-1">
                                    <div class="w-9/12 px-3 font-bold lg:text-sm text-xs">
                                        NEW FRESHMEN
                                    </div>
                                    <div class="text-green-900 w-3/12 px-3">
                                        -
                                    </div>
                                </div>
                                <div class="flex border-t border-black">
                                    <div class="w-9/12 px-3 border-r border-black border-b py-1 lg:text-sm text-xs">
                                        1. Completed Online Application Form for Admission to Undergraduate Program
                                    </div>
                                    <div class="w-3/12 px-3 border-b border-black py-1 text-center lg:text-sm text-xs">
                                        LSU
                                    </div>
                                </div>
                                <div class="flex border-t border-black">
                                    <div class="w-9/12 px-3 border-r border-black border-b py-1 lg:text-sm text-xs">
                                        2. Placement Test
                                    </div>
                                    <div class="w-3/12 px-3 border-b border-black py-1 text-center lg:text-sm text-xs">
                                        LSU
                                    </div>
                                </div>
                                <div class="flex border-t border-black">
                                    <div class="w-9/12 px-3 border-r border-black border-b py-1 lg:text-sm text-xs">
                                        3. Academic Records
                                        <ul class="list-disc lg:pl-10 pl-5">
                                            <li class="lg:text-sm text-xs">
                                                School Form 9/Learner's Progress Report Card (aka Form 138, 
                                                applicable to SHS graduates)
                                            </li>
                                            <li class="lg:text-sm text-xs">
                                                Certificate of Completion (applicable to ALS Passers)
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="w-3/12 flex items-center justify-center px-3 border-b border-black py-1 text-center">
                                        <span class="lg:text-sm text-xs">
                                            Last School Attended
                                        </span>
                                    </div>
                                </div>
                                <div class="flex border-t border-black">
                                    <div class="w-9/12 px-3 border-r border-black border-b py-1 lg:text-sm text-xs">
                                        4. Certificate of Good Moral Character (applicable to non-LSU graduates only) 
                                    </div>
                                    <div class="w-3/12 px-3 border-b border-black py-1 text-center lg:text-sm text-xs">
                                        Last School Attended
                                    </div>
                                </div>
                                <div class="flex border-t border-black">
                                    <div class="w-9/12 px-3 border-r border-black border-b py-1 lg:text-sm text-xs">
                                        5. PSA-issued Birth Certificate
                                    </div>
                                    <div class="w-3/12 px-3 border-b border-black py-1 text-center lg:text-sm text-xs">
                                        PSA
                                    </div>
                                </div>
                                <div class="flex border-t border-black">
                                    <div class="w-9/12 px-3 border-r border-black border-b py-1 lg:text-sm text-xs">
                                        6. 2x2 Photo ID (formal photo in white background, taken within the last 3 months)
                                    </div>
                                    <div class="w-3/12 px-3 border-b border-black py-1 text-center lg:text-sm text-xs">
                                        Applicant
                                    </div>
                                </div>

                                <div class="flex border-t border-black">
                                    <div class="w-9/12 px-3 border-r border-black border-b py-1 lg:text-sm text-xs">
                                        7. PHP 150 (placement test fee)
                                    </div>
                                    <div class="w-3/12 px-3 border-b border-black py-1 text-center lg:text-sm text-xs">
                                        Applicant
                                    </div>
                                </div>
                                <div class="flex border-t border-black">
                                    <div class="w-9/12 px-3 border-r border-black border-b py-1 lg:text-sm text-xs">
                                        8. PHP 3,000 (downpayment for tuition and fees)
                                    </div>
                                    <div class="w-3/12 px-3 border-b border-black py-1 text-center lg:text-sm text-xs">
                                        Applicant
                                    </div>
                                </div>
                                <div class="bg-green-900 text-white flex pt-1.5 pb-0.5">
                                    <div class="lg:w-9/12 px-3 font-bold lg:text-sm text-xs">
                                        TRANSFER STUDENTS & SECOND DEGREE HOLDERS
                                    </div>
                                    <div class="text-green-900 w-3/12 px-3">
                                        -
                                    </div>
                                </div>
                                <div class="flex border-t border-black">
                                    <div class="w-9/12 px-3 border-r border-black border-b py-1 lg:text-sm text-xs">
                                        1. Completed Online Application Form for Admission to Undergraduate Program
                                    </div>
                                    <div class="w-3/12 px-3 border-b border-black py-1 text-center lg:text-sm text-xs">
                                        LSU
                                    </div>
                                </div>
                                <div class="flex border-t border-black">
                                    <div class="w-9/12 px-3 border-r border-black border-b py-1 lg:text-sm text-xs">
                                        2. Placement Test
                                    </div>
                                    <div class="w-3/12 px-3 border-b border-black py-1 text-center lg:text-sm text-xs">
                                        LSU
                                    </div>
                                </div>
                                <div class="flex border-t border-black">
                                    <div class="w-9/12 px-3 border-r border-black border-b py-1 lg:text-sm text-xs">
                                        3. Academic Records
                                        <ul class="list-disc lg:pl-10 pl-5">
                                            <li class="lg:text-sm text-xs">
                                                Transcript of Records (TOR)
                                            </li>
                                            <li class="lg:text-sm text-xs">
                                                Certificate of Transfer Credential
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="w-3/12 flex items-center justify-center px-3 border-b border-black py-1 text-center lg:text-sm text-xs">
                                        <span>
                                            Last School Attended
                                        </span>
                                    </div>
                                </div>
                                <div class="flex border-t border-black">
                                    <div class="w-9/12 px-3 border-r border-black border-b py-1 lg:text-sm text-xs">
                                        4. Certificate of Good Moral Character (applicable to non-LSU graduates only) 
                                    </div>
                                    <div class="w-3/12 px-3 border-b border-black py-1 text-center lg:text-sm text-xs">
                                        Last School Attended
                                    </div>
                                </div>
                                <div class="flex border-t border-black">
                                    <div class="w-9/12 px-3 border-r border-black border-b py-1 lg:text-sm text-xs">
                                        5. PSA-issued Birth Certificate
                                    </div>
                                    <div class="w-3/12 px-3 border-b border-black py-1 text-center lg:text-sm text-xs">
                                        PSA
                                    </div>
                                </div>
                                <div class="flex border-t border-black">
                                    <div class="w-9/12 px-3 border-r border-black border-b py-1 lg:text-sm text-xs">
                                        6. 2x2 Photo ID (formal photo in white background, taken within the last 3 months)
                                    </div>
                                    <div class="w-3/12 px-3 border-b border-black py-1 text-center lg:text-sm text-xs">
                                        Applicant
                                    </div>
                                </div>
                            
                                <div class="flex border-t border-black">
                                    <div class="w-9/12 px-3 border-r border-black border-b py-1 lg:text-sm text-xs">
                                        7. PHP 150 (placement test fee)
                                    </div>
                                    <div class="w-3/12 px-3 border-b border-black py-1 text-center lg:text-sm text-xs">
                                        Applicant
                                    </div>
                                </div>
                                <div class="flex border-t border-black">
                                    <div class="w-9/12 px-3 border-r border-black border-b py-1 lg:text-sm text-xs">
                                        8. PHP 3,000 (downpayment for tuition and fees)
                                    </div>
                                    <div class="w-3/12 px-3 border-b border-black py-1 text-center lg:text-sm text-xs">
                                        Applicant
                                    </div>
                                </div>
                                <div class="bg-green-900 text-white flex py-1">
                                    <div class="w-9/12 px-3 font-bold lg:text-sm text-xs">
                                        CONTINUING STUDENTS
                                    </div>
                                    <div class="text-green-900 w-3/12 px-3 lg:text-sm text-xs">
                                        -
                                    </div>
                                </div>
                                <div class="flex border-t border-black">
                                    <div class="w-9/12 px-3 border-r border-black border-b py-1 lg:text-sm text-xs">
                                        1. Completed Online Application Form for Admission to Undergraduate Program
                                    </div>
                                    <div class="w-3/12 px-3 border-b border-black py-1 text-center lg:text-sm text-xs">
                                        LSU
                                    </div>
                                </div>
                                <div class="flex border-t border-black">
                                    <div class="w-9/12 px-3 border-r border-black border-b py-1 lg:text-sm text-xs">
                                        2. PHP 3,000 (downpayment for tuition and fees)
                                    </div>
                                    <div class="w-3/12 px-3 border-b border-black py-1 text-center lg:text-sm text-xs">
                                        Applicant
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="shadow-lg mt-10">
                                <div class="bg-green-800 text-white">
                                    <div class="text-center font-bold w-full py-1">
                                        PROCEDURES IN APPLYING FOR ADMISSION TO UNDERGRADUATE PROGRAM 
                                        FOR NEW STUDENTS
                                    </div>
                                </div>
                                <div class="bg-green-500 text-white flex py-1">
                                    <div class="w-8/12 px-3 font-bold">
                                        STEP 1: ADMISSION
                                    </div>
                                    <div class="w-4/12 px-3 font-bold border-l">
                                        Admissions and Scholarships Center (ASC)
                                    </div>
                                </div>
                            </div> -->
                        </div>
                        <div class="py-5 border-t-4 lg:mt-10 mt-5">
                            <div class="justify-between flex">
                            <div @click="toggleInfo(
                                false, true, false, false)" class="cursor-pointer py-1 uppercase px-4 shadow bg-green-800 text-white hover:bg-white hover:text-green-800 rounded-lg mx-2">
                                <i class="fa fa-angle-double-left pr-2"></i> Prev
                            </div>
                            <div class="cursor-pointer py-1 uppercase px-4 shadow bg-green-800 text-white hover:bg-white hover:text-green-800 rounded-lg mx-2" @click="toggleInfo(
                                false, false, false, true)">Next <i class="fa fa-angle-double-right pl-2"></i>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div v-show="toggle.four">
                <div class="w-11/12 mx-auto lg:my-10 my-2 shadow-lg">
                    <div>
                        <div class="shadow lg:px-8 px-3 lg:py-7 py-5 lg:mt-10 mt-3 lg:mb-3">
                            <h1 class="font-bold lg:text-2xl text-xs text-green-800 text-center">
                                APPLICATION FOR ADMISSION TO LA SALLE UNIVERSITY FOR UNDERGRADUATE STUDENTS
                            </h1>
                            <!-- <p class="font-bold lg:text-2xl text-xs text-green-800 text-center">2nd Semester Academic Year 2024 to 2025</p> -->
                        </div>
                        <div class="lg:py-10 py-2">
                            <div class="w-11/12 mx-auto">
                                <h2 class="w-full font-bold uppercase text-center pt-4 text-green-800 text-xl">
                                    Applying as
                                </h2>
                                <div class="flex items-center justify-center lg:py-10">
                                    <div class="lg:flex mx-auto lg:w-6/12 w-full lg:gap-10 gap-5">
                                        <div class="w-full">
                                            <div @click="newStudentSelection()"
                                            class="text-lg bg-green-800 text-white font-bold w-full border-2 border-green-800 text-center 
                                            rounded-lg lg:py-3 py-1 my-4 px-3 hover:bg-white hover:text-green-900 lg:whitespace-nowrap cursor-pointer">
                                                New Student
                                            </div>
                                        </div>
                                        <div class="w-full">
                                            <div @click="continuingStudent()"
                                            class="text-lg bg-green-800 text-white font-bold w-full border-2 border-green-800 text-center 
                                            rounded-lg lg:py-3 py-1 my-4 px-3 hover:bg-white hover:text-green-900 lg:whitespace-nowrap cursor-pointer">
                                                Continuing
                                            </div>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            </div>


            <div v-if="newStudentStatus">
                <div class="shadow-lg w-11/12 mx-auto lg:mb-10 mb-3">
                    <div class="shadow lg:px-8 px-2 lg:py-7 py-5 lg:mt-10 mt-3 lg:mb-3">
                    <h1 class="font-bold lg:text-2xl text-xs text-green-800 text-center">
                        APPLICATION FOR ADMISSION TO LA SALLE UNIVERSITY FOR UNDERGRADUATE STUDENTS
                    </h1>
                    <!-- <p class="font-bold lg:text-2xl text-xs text-green-800 text-center">2nd Semester Academic Year 2024 to 2025</p> -->
                </div>
                <div class="lg:py-10 py-2">
                    <div class="w-11/12 mx-auto">
                        <h2 class="w-full font-bold uppercase text-center pt-4 text-green-800 text-xl">
                            New Student Status
                        </h2>
                        <div class="flex items-center justify-center lg:py-10 py-2">
                            <div class="lg:flex mx-auto lg:w-10/12 w-full lg:gap-10 gap-5">
                                <div @click="newFirstYearStudent()"
                                    class="hover:text-green-800 text-gray-50">
                                    <p class="lg:text-lg text-sm bg-green-800 text-white font-bold w-full border-2 border-green-800 text-center 
                                    rounded-lg lg:py-3 py-2 my-4 lg:px-3 hover:bg-white hover:text-green-900 lg:whitespace-nowrap cursor-pointer">
                                        New First Year Student
                                    </p>
                                    <p class="text-center cursor-help lg:block hidden">
                                        A student who is eligible for admission to an undergaduate program after the completion of the K to 12 curriculum or its equivalent.
                                    </p>
                                </div>
                                <div @click="transfereeStudent()"
                                    class="hover:text-green-800 text-gray-50">
                                    
                                    <p class="lg:text-lg text-sm bg-green-800 text-white font-bold w-full border-2 border-green-800 text-center 
                                    rounded-lg lg:py-3 py-2 my-4 lg:px-3 hover:bg-white hover:text-green-900 lg:whitespace-nowrap cursor-pointer">
                                        Transferee Student
                                    </p>
                                    <p class="text-center cursor-help lg:block hidden">
                                        An undergraduate student known to have attended a different college/university prior to seeking admission to the University.                                                                        
                                    </p>
                                </div>
                                <div @click="secondDegreeHolderStudent()"
                                    class="hover:text-green-800 text-gray-50">
                                    
                                    <p class="lg:text-lg text-sm bg-green-800 text-white font-bold w-full border-2 border-green-800 text-center 
                                    rounded-lg lg:py-3 py-2 my-4 lg:px-3 hover:bg-white hover:text-green-900 lg:whitespace-nowrap cursor-pointer">
                                        Second Degree Holder Student
                                    </p>
                                    <p class="text-center cursor-help lg:block hidden">
                                        A student who have already completed a bachelor's degree but is seeking admission to another degree program as a second degree.       
                                    </p>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>  
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

select {
    color: #000000;
}

option:not(:first-of-type) {
    color: black;
}

input[type='radio'] {
    color: #005715;
    outline: none;
    box-shadow: none;
}

input[type='checkbox'] {
    color: #005715;
    outline: none;
    box-shadow: none;
}
</style>