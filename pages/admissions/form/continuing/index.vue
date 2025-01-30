<script setup>
  import {
    useUserStore
  } from "@/stores/user";
  import courseOrProgramJSON from "../backup/courseProgram.json";
  import programOnlyJSON from "../backup/courseProgramOnly.json";

  import moment from "moment";
  import _ from "lodash";
  const userStore = useUserStore();
  const endpoint = ref(userStore.mainDevServer);
  const stepsTab = ref(true)
  const submitAndCheckEmailTab = ref(false)
  const infoText = ref(false);
  const pleaseFillUpAllRequiredFields = ref(false);

  const courseOrProgramData = ref(courseOrProgramJSON);
  const programDataOnly = ref(programOnlyJSON);
  const studentAlienStatusInformationToggle = ref(false);
  const fatherInfo = ref(false);
  const motherInfo = ref(false);

  const educationalActiveTabFilter = ref();
  const currentEducationalTab = ref();

  // onMounted(() => {
  //   addSibling()
  // })
  const staticNewStudentTexts = ref({
    has_health_condition: {
      text: ['Support for Students with Health Conditions:', 'Sharing the current state of your health will provide relevant information for us to understand your needs, and help us provide the necessary support for you to succeed at the University, and in life. The University, through the Career and Counseling Center (CCC) would like to provide further support by asking if you have needs due to any of the following disabilities consistent with the pertinent definitions used in the Implementing Rules and Regulations of RA 9442 and RA 7277 (otherwise known as the Magna Carta for Disabled Persons and for other Purposes)', '(1) Psychosocial and behavioral disability, (2) Chronic illness with disability, (3) Learning (cognitive or intellectual) disability, (4) Mental disability, (5) Visual/seeing disability, (6) Orthopedic/moving, and (7) Communication disability.', 'Depending on the outcome of the initial interview, a confidential meeting with the appropriate school members may be arranged in order to discuss possible support for you.', 'PLEASE NOTE THAT YOU MAY CHOOSE TO SKIP THIS ITEM. THE UNIVERSITY RESPECT EACH LEARNER S DESIRE FOR CONFIDENTIALITY.', 'I have a health condition and I am interested in the student support service(s) offered by the University.'],
    },
    hereby_certification: {
      text: ['By clicking the box below, I hereby:', 'Certify that all information  written in this application is complete and accurate. If accepted as  a student, I agree that my admission, registration, and graduation are subject to  the rules and regulations of La Salle University - Ozamiz.', 'I have READ, UNDERSTOOD  the above statements and AGREE to all its terms and conditions. I understand that checking of the box shall be interpreted as constituting a signature of certification of the above-mentioned. '],
    },
    media_release_consent: {
      text: ['By clicking the AGREE box below,', 'I hereby:', 'Give my consent to LSU the right to take and use photographs/film of me in all forms, media, and manner, in conjunction with my name or anonymize the data, for advertising, trade, promotion, exhibition, in the pursuit of promoting the projects and activities of LSU.', 'Examples of LSU school-related activities/events and publications include but are not limited to:', 'Subject to my right to withdraw and cancel my consent and permission as provided below, I waive any right to review, approve or disapprove the use of the photographs/films/videos for the promotion of the projects and activities of LSU, now and in the future, regardless of whether that use of manner is known to me.', 'I consent to the provisions of this form and acknowledge the ownership by the LSU of the contents to be uploaded to the official websites, family, student, and employee portals, as well as official social media accounts of the LSU and Lasallian Formation and Mission Department s affiliated social media accounts.', 'I understand that I will not be given to the media/press or public without my prior consent. I also understand that I have the right to withdraw and cancel my consent and permission at any time by notice in writing to president@lsu.edu.ph. Beginning from the date of my withdrawal of consent, LSU will take all reasonable steps to ensure that the photographs/films/videos of my child will no longer be used for the promotion of LSU projects and activities.', 'I agree to use any media containing information of other persons, such as photos and videos during School event/s, for purely personal uses and purposes, with no connection to any professional, business, official, or commercial activity, and in compliance with the Data Privacy Act of the Philippines and any of its amendments and implementing rules and regulations.', 'I agree to use any media containing information of other persons, such as photos and videos during School event/s, for purely personal uses and purposes, with no connection to any professional, business, official, or commercial activity, and in compliance with the Data Privacy Act of the Philippines and any of its amendments and implementing rules and regulations.', 'By providing LSU your permission, the student’s names and/or likenesses, photos, video, and/or audio may be used in LSU school-related publication in print, analog or digital media.', 'I have READ, UNDERSTOOD  the above statements and to all its terms and conditions. I understand that checking of the box shall be interpreted as constituting a signature of consent of the above-mentioned.'],
      list: ['Audio and video recordings for cultural, formation, spiritual, and sports events such as PEP Rally and Vision Mission Week, or school events', 'Officially recognized activities and events the Lasallian Mission and Office of the University Chancellor, student clubs, and student organizations', 'Seminars-Workshops, Talks, and Training,', 'Retreat, Recollection, Outreach/In-Reach, Service Learning, and Volunteer Activities', 'Awards Ceremonies', 'Cultural Production like concerts and plays', 'Sports activity programs or sheets, such as for basketball, showing the weight and height of students', 'Student Publication', 'Name and picture in the LSU yearbook', 'Honor roll and other recognition lists and programs', 'Graduation programs and announcements', 'Student photographs for classroom, teacher, or reports for school use', 'Graduation Ball/Party', 'Marketing Brochures', 'Websites', 'LSU Official Social Media Accounts Posts', 'Videos for internal or external use, promotional media (local and national news), and other marketing and communication materials', ],
    },
  })






  
  let newStudent = ref({
    tracking_id: "-",
    student_lsu_id_number: "-",
    lastname: "",
    firstname: "",
    middlename: "",
    extension_or_suffix_name: "",
    birth_sex: "",
    birth_date: "",
    citizenship: "",
    college: "",
    program: "",
    contact_primary_number: "",
    contact_alternate_number: "",
    contact_personal_email_address: "",
    contact_lsu_email_address: "",
    last_term_enrolled: "",
    last_academic_year_enrolled: "",
    alien_status_information_citizenship: "-",
    alien_status_information_visa_status: "-",
    alien_status_information_last_day_of_authorized_stay: "-",
    alien_status_information_agent_name: "-",
    alien_status_information_passport_number: "-",
    alien_status_information_passport_place_issued: "-",
    alien_status_information_passport_date_issued: "-",
    alien_status_information_passport_date_of_expiry: "-",
    alien_status_information_acricard_date_issued: "-",
    alien_status_information_acricard_date_of_expiry: "-",
    alien_status_information_crts_date_issued: "-",
    alien_status_information_crts_date_of_expiry: "-",
    alien_status_information_ssp_date_issued: "-",
    alien_status_information_ssp_date_of_expiry: "-",
    media_release_consent: "-",
    has_health_condition: false,
    hereby_certification: "-",
    evaluation_submitted: 'no',
    receipt_image_url: "https://lsu-media-styles.sgp1.digitaloceanspaces.com/storage-bucket-name/folder-location/files/admissions/sample.jpg",
    receipt_submitted: 'no',
    receipt_confirm: 'no',
    former_lsu_student: "-",
    shiftee_placement_details: 'Placement (Career re-assessment for Shiftee)',
    shiftee_placement_department: 'Career & Counseling Center',
    shiftee_placement_recommendation_status: "-",
    shiftee_placement_accepting_college: "-",
    shiftee_placement_approval_status: "-",
    enrollment_tracking_status_admissions_is_complete: "-",
    enrollment_tracking_status_advising_is_complete: "-",
    enrollment_tracking_status_accounting_is_complete: "-",
    enrollment_tracking_status_validation_is_complete: "-",
    returnee_student: {
      is_student_returnee: '',
      question: 'Reason(s) for dropping out of college (Check all that apply.)',
      reason_dropping_out_college: [{
        label: 'Financial Difficulties',
        value: false,
        description: ''
      }, {
        label: 'Academic Challenges',
        value: false,
        description: ''
      }, {
        label: 'Health Issues',
        value: false,
        description: ''
      }, {
        label: 'Others',
        value: false,
        description: ''
      }],
      reasons_for_returning_lsu: '',
    },
    shiftee_student_is_student_shiftee: "-",
    shiftee_student_college: "-",
    shiftee_student_program: "-",
    credential_student_portal_username: "-",
    credential_student_portal_password: "-",
    credential_student_lsu_email_username: "-",
    credential_student_lsu_email_password: "-",
    credential_student_canvas_username: "-",
    credential_student_canvas_password: "-" 
  // enrollment_tracking_status: [{
    //   track_name: 'admissions',
    //   label: 'Admissions',
    //   details: 'Student Detailed Information',
    //   date_checked: '-',
    //   check_by: '-',
    //   status: 'ongoing',
    //   remarks: 'Checking ...'
    // }, {
    //   track_name: 'advising',
    //   label: 'Per Colleges',
    //   details: 'Course Subjects ',
    //   date_checked: '-',
    //   check_by: '-',
    //   status: '',
    //   remarks: ''
    // }, {
    //   track_name: 'accounting',
    //   label: 'Accounting',
    //   details: 'Enrollment Fee',
    //   date_checked: '-',
    //   check_by: '-',
    //   status: '',
    //   remarks: ''
    // }, {
    //   track_name: 'validation',
    //   label: 'CITS or NPCC',
    //   details: 'Student Portal & LSU Gmail Activation',
    //   date_checked: '-',
    //   check_by: '-',
    //   status: '',
    //   remarks: ''
    // }],
  })



















  const newStudentFull = ref({
    primary_info_tracking_id : "-",
    primary_info_student_lsu_id_number : "-",
    primary_info_title : "-",
    primary_info_lastname : "-",
    primary_info_firstname : "-",
    primary_info_middlename : "-",
    primary_info_extension_or_suffix_name : "-",
    primary_info_birth_sex : "-",
    primary_info_birth_date : "-",
    primary_info_birth_order : "-",
    primary_info_birth_place : "-",
    primary_info_religion : "-",
    primary_info_citizenship : "-",
    primary_info_civil_status : "-",
    primary_info_nationality : "-",
    primary_info_ethnicity : "-",
    primary_info_college : "-",
    primary_info_program : "-",
    primary_info_contact_primary_number : "-",
    primary_info_contact_alternate_number : "-",
    primary_info_contact_personal_email_address : "-",
    primary_info_contact_lsu_email_address : "-",
    how_you_learn_about_lsu: {
        question: 'How did you first/initially learn about LSU?',
        list_items: [
            {
                label: 'Family or Friends',
                value: false,
                description: ''
            },
            {
                label: 'Career Talk or School Visit',
                value: false,
                description: ''
            },
            {
                label: 'Internet',
                value: false,
                description: ''
            },
            {
                label: 'Others',
                value: false,
                description: ''
            }
        ],
    },
    reasons_for_choosing_lsu: {
        question: 'Reason(s) for choosing LSU?',
        list_items: [
            {
                label: 'Quality Education',
                value: false,
                description: ''
            },
            {
                label: 'To Boost Career Prospects',
                value: false,
                description: ''
            },
            {
                label: 'Offers Scholarships',
                value: false,
                description: ''
            },
            {
                label: 'Others',
                value: false,
                description: ''
            }
        ],
    },
    household_capacity_and_access_to_distance_learning: [
        {
            question: '1. How do you go to school? (Check all that apply.)',
            list_items: [
                {
                    label: 'Walking',
                    value: false,
                    description: ''
                },
                {
                    label: 'Public Commute (water/land)',
                    value: false,
                    description: ''
                },
                {
                    label: 'Family-Owned Vehicle',
                    value: false,
                    description: ''
                },
                {
                    label: 'Others',
                    value: false,
                    description: ''
                }
            ],
        },
        {
            question: '2. Do you have access to the internet?',
            list_items: [
                {
                    label: 'Yes',
                    value: false,
                    description: ''
                }
            ],
        },
        {
            question: '3. How do you connect to the internet? (Check all that apply.)',
            list_items: [
                {
                    label: 'Own broadband internet (e.g. DSL)',
                    value: false,
                    description: ''
                },
                {
                    label: 'Own mobile data',
                    value: false,
                    description: ''
                },
                {
                    label: 'Others',
                    value: false,
                    description: ''
                }
            ],
        },
        {
            question: '4. What devices are available at home you can use for learning? (Check all that apply.)',
            list_items: [
                {
                    label: 'Desktop Computer',
                    value: false,
                    description: ''
                },
                {
                    label: 'Laptop',
                    value: false,
                    description: ''
                },
                {
                    label: 'Tablet',
                    value: false,
                    description: ''
                },
                {
                    label: 'Smartphone',
                    value: false,
                    description: ''
                },
                {
                    label: 'Others',
                    value: false,
                    description: ''
                }
            ],
        },
        {
            question: '5. Living arrangement while attending/enrolled in LSU. (Check all that apply.)',
            list_items: [
                {
                    label: 'Own House',
                    value: false,
                    description: ''
                },
                {
                    label: 'Boarding House',
                    value: false,
                    description: ''
                },
                {
                    label: 'With a Relative',
                    value: false,
                    description: ''
                },
                {
                    label: 'University dormitory',
                    value: false,
                    description: ''
                },
                {
                    label: 'Others',
                    value: false,
                    description: 'Apartment'
                }
            ],
        },
        {
            question: '6. Who among the household members can provide you with instructional support during distance learning? (Check all that apply.)',
            list_items: [
                {
                    label: 'Parents/Guardians',
                    value: false,
                    description: ''
                },
                {
                    label: 'Older siblings',
                    value: false,
                    description: ''
                },
                {
                    label: 'Extended member(s) of the family',
                    value: false,
                    description: ''
                },
                {
                    label: 'Able to do independent learning',
                    value: false,
                    description: ''
                },
                {
                    label: 'Others',
                    value: false,
                    description: ''
                }
            ],
        },
        {
            question: '7. Please indicate if you have experienced any of these challenges with distance learning. (Check all that apply.)',
            list_items: [
                {
                    label: 'Conflict with other responsibilities in the house (e.g., taking care of a family member, house chores).',
                    value: false,
                    description: ''
                },
                {
                    label: 'Problems with technology (e.g., lack of internet access, unreliable device/ internet, issues with log in, inssuficient load allowance, etc.).',
                    value: false,
                    description: ''
                },
                {
                    label: 'Distractions (e.g. noise from community/neighbor, social media etc.)',
                    value: false,
                    description: ''
                },
                {
                    label: 'Difficulty in independent learning',
                    value: false,
                    description: ''
                },
                {
                    label: 'High electrical consumption',
                    value: false,
                    description: ''
                },
                {
                    label: 'Others',
                    value: false,
                    description: ''
                }
            ],
        },
        {
            question: '8. Please indicate if you have experienced any of these positive experiences with distance learning. (Check all that apply.)',
            list_items: [
                {
                    label: 'My parents/caregivers/siblings helped me with homework.',
                    value: false,
                    description: ''
                },
                {
                    label: 'I was able to learn better than I did with traditional full in-person classes.',
                    value: false,
                    description: ''
                },
                {
                    label: 'I was not tired from having to travel to and from school.',
                    value: false,
                    description: ''
                },
                {
                    label: 'Reduced overall expenses (meals, transportation, etc.)',
                    value: false,
                    description: ''
                },
                {
                    label: 'Others',
                    value: false,
                    description: ''
                }
            ],
        }
    ],
    stud_tribal_or_indigenous_community_option: 'no',
    stud_tribal_or_indigenous_community_name: '-',    
    stud_cnt_info_perm_lvng_h_adr_ctgry_street_or_purok: "-",
    stud_cnt_info_perm_lvng_h_adr_ctgry_barangay_or_village: "-",
    stud_cnt_info_perm_lvng_h_adr_ctgry_city_or_municipality: "-",
    stud_cnt_info_perm_lvng_h_adr_ctgry_zipcode: "-",
    stud_cnt_info_perm_lvng_h_adr_ctgry_province_or_state: "-",
    stud_cnt_info_perm_lvng_h_adr_ctgry_region: "-",
    stud_cnt_info_perm_lvng_h_adr_ctgry_country: "-",
    stud_cnt_info_the_same_address_question: 'Is your current address the same as your permanent address entered above? Type below your current address if the answer is no.',
    stud_cnt_info_the_same_address_answer: 'no',
    stud_cnt_info_c_or_p_lvng_h_adr_ctgry_street_or_purok: "-",
    stud_cnt_info_c_or_p_lvng_h_adr_ctgry_barangay_or_village: "-",
    stud_cnt_info_c_or_p_lvng_h_adr_ctgry_city_or_municipality: "-",
    stud_cnt_info_c_or_p_lvng_h_adr_ctgry_zipcode: "-",
    stud_cnt_info_c_or_p_lvng_h_adr_ctgry_province_or_state: "-",
    stud_cnt_info_c_or_p_lvng_h_adr_ctgry_region: "-",
    stud_cnt_info_c_or_p_lvng_h_adr_ctgry_country: "-",
    f_personal_info_vital_life_status: "-",
    f_personal_info_lastname: "-",
    f_personal_info_firstname: "-",
    f_personal_info_middlename: "-",
    f_personal_info_birth_date: "-",
    f_personal_info_age: "-",
    f_personal_info_civil_status: "-",
    f_cont_info_perm_lvng_h_add_ctgry_street_or_purok: "-",
    f_cont_info_perm_lvng_h_add_ctgry_barangay_or_village: "-",
    f_cont_info_perm_lvng_h_add_ctgry_city_or_municipality: "-",
    f_cont_info_perm_lvng_h_add_ctgry_zipcode: "-",
    f_cont_info_perm_lvng_h_add_ctgry_province_or_state: "-",
    f_cont_info_perm_lvng_h_add_ctgry_region: "-",
    f_cont_info_perm_lvng_h_add_ctgry_country: "-", 
    f_cont_info_the_same_adr_question: 'Is current address the same as permanent address entered above? Type below current address if the answer is no.',
    f_cont_info_the_same_adr_answer: 'no',
    f_cont_info_curnt_or_pr_lvng_h_adr_ctgy_street_or_purok: "-",
    f_cont_info_curnt_or_pr_lvng_h_adr_ctgy_barangay_or_village: "-",
    f_cont_info_curnt_or_pr_lvng_h_adr_ctgy_city_or_municipality: "-",
    f_cont_info_curnt_or_pr_lvng_h_adr_ctgy_zipcode: "-",
    f_cont_info_curnt_or_pr_lvng_h_adr_ctgy_province_or_state: "-",
    f_cont_info_curnt_or_pr_lvng_h_adr_ctgy_region: "-",
    f_cont_info_curnt_or_pr_lvng_h_adr_ctgy_country: "-", 
    f_contact_info_contact_number: '-',
    f_contact_info_contact_email_address: '-',
    f_emp_info_highest_education_completed: "-",
    f_emp_info_occupation: "-",
    f_emp_info_employment_status: "-",
    f_emp_info_gross_monthly_income: "-",
    f_emp_info_employer_or_company: "-",
    m_personal_info_vital_life_status: "-",
    m_personal_info_lastname: "-",
    m_personal_info_firstname: "-",
    m_personal_info_middlename: "-",
    m_personal_info_birth_date: "-",
    m_personal_info_age: "-",
    m_personal_info_civil_status: "-",
    m_contact_info_perm_lvng_home_add_ctgy_street_or_purok: "-",
    m_contact_info_perm_lvng_home_add_ctgy_barangay_or_village: "-",
    m_contact_info_perm_lvng_home_add_ctgy_city_or_municipality: "-",
    m_contact_info_perm_lvng_home_add_ctgy_zipcode: "-",
    m_contact_info_perm_lvng_home_add_ctgy_province_or_state: "-",
    m_contact_info_perm_lvng_home_add_ctgy_region: "-",
    m_contact_info_perm_lvng_home_add_ctgy_country: "-",
    m_contact_info_the_same_address_question: 'Is current address the same as permanent address entered above? Type below current address if the answer is no.',
    m_contact_info_the_same_address_no: 'no', 
    m_cont_info_crnt_or_prst_lvng_h_adr_ctgry_street_or_purok: "-",
    m_cont_info_crnt_or_prst_lvng_h_adr_ctgry_barangay_or_village: "-",
    m_cont_info_crnt_or_prst_lvng_h_adr_ctgry_city_or_municipality: "-",
    m_cont_info_crnt_or_prst_lvng_h_adr_ctgry_zipcode: "-",
    m_cont_info_crnt_or_prst_lvng_h_adr_ctgry_province_or_state: "-",
    m_cont_info_crnt_or_prst_lvng_h_adr_ctgry_region: "-",
    m_cont_info_crnt_or_prst_lvng_h_adr_ctgry_country: "-",
    m_cont_info_contact_number: "-",
    m_cont_info_contact_email_address: "-",  
    m_emp_info_highest_education_completed: "-",
    m_emp_info_occupation: "-",
    m_emp_info_employment_status: "-",
    m_emp_info_gross_monthly_income: "-",
    m_emp_info_employer_or_company: "-",
    lg_prsnl_info_relation_to_student: "-",
    lg_prsnl_info_lastname: "-",
    lg_prsnl_info_firstname: "-",
    lg_prsnl_info_middlename: "-",
    lg_prsnl_info_birth_date: "-",
    lg_prsnl_info_age: "-",
    lg_prsnl_info_civil_status: "-",
    lg_cont_info_perm_lvng_h_adr_ctgy_street_or_purok: "-",
    lg_cont_info_perm_lvng_h_adr_ctgy_barangay_or_village: "-",
    lg_cont_info_perm_lvng_h_adr_ctgy_city_or_municipality: "-",
    lg_cont_info_perm_lvng_h_adr_ctgy_zipcode: "-",
    lg_cont_info_perm_lvng_h_adr_ctgy_province_or_state: "-",
    lg_cont_info_perm_lvng_h_adr_ctgy_region: "-",
    lg_cont_info_perm_lvng_h_adr_ctgy_country: "-",  
    lg_cont_info_the_same_address_question: 'Is current address the same as permanent address entered above? Type below current address if the answer is no.',
    lg_cont_info_the_same_address_answer: 'no',
    lg_cont_info_crnt_or_prst_lvng_h_adr_ctry_street_or_purok: "-",
    lg_cont_info_crnt_or_prst_lvng_h_adr_ctry_barangay_or_village: "-",
    lg_cont_info_crnt_or_prst_lvng_h_adr_ctry_city_or_municipality: "-",
    lg_cont_info_crnt_or_prst_lvng_h_adr_ctry_zipcode: "-",
    lg_cont_info_crnt_or_prst_lvng_h_adr_ctry_province_or_state: "-",
    lg_cont_info_crnt_or_prst_lvng_h_adr_ctry_region: "-",
    lg_cont_info_crnt_or_prst_lvng_h_adr_ctry_country: "-",
    lg_cont_info_contact_number: "-",
    lg_cont_info_contact_email_address: "-",
    lg_emp_info_highest_education_completed: "-",
    lg_emp_info_occupation: "-",
    lg_emp_info_employment_status: "-",
    lg_emp_info_gross_monthly_income: "-",
    lg_emp_info_employer_or_company: "-",
    stud_emrgcy_cont_info_p_info_title: "-",
    stud_emrgcy_cont_info_p_info_lastname: "-",
    stud_emrgcy_cont_info_p_info_firstname: "-",
    stud_emrgcy_cont_info_p_info_middlename: "-",
    stud_emrgcy_cont_info_p_info_extension_or_suffix_name: "-",
    stud_emrgcy_cont_info_p_info_relation_to_student: "-", 
    stud_emrgcy_cont_info_adr_street_or_purok: "-",
    stud_emrgcy_cont_info_adr_barangay_or_village: "-",
    stud_emrgcy_cont_info_adr_city_or_municipality: "-",
    stud_emrgcy_cont_info_adr_zipcode: "-",
    stud_emrgcy_cont_info_adr_province_or_state: "-",
    stud_emrgcy_cont_info_adr_region: "-",
    stud_emrgcy_cont_info_adr_country: "-",
    stud_emrgcy_cont_info_cnt_primary_number: "-",
    stud_emrgcy_cont_info_cnt_alternate_number: "-",
    stud_emrgcy_cont_info_cnt_email_address: "-",
    stud_choice_trck_prog_one_course_program: "-",
    stud_choice_trck_prog_two_course_program: "-",
    stud_choice_trck_prog_three_course_program: "-",
    // // siblings: [],
    student_educational_info: {
        tab: [
            'PRESCHOOL',
            'ELEMENTARY',
            'JUNIOR HIGH',
            'ALS',
            'SENIOR HIGH',
            'COLLEGE',
            'GRADUATE STUDIES'
        ],
        details: [
          {
              education_level: 'PRESCHOOL',
              name_of_previous_school: "-",
              track_or_program: "-",
              highest_honors_received: "-",
              city_or_municipality_and_province: "-",
              year_graduated_or_attended: "-",
          },
        ],
    },
    student_education_info_num_learner_reference_number:"-",
    student_education_info_num_ched_award_number: "-",
    student_education_info_num_dswd_household_number: "-"
  })

















  
  
  
  
  
  
  
  
  
  
  
  
  const expandEducationalDetails = (tab) => {
    if (newStudentFull.value.student_educational_info.details.find(param => param.education_level === tab)) {
        educationalActiveTabFilter.value = newStudentFull.value.student_educational_info.details.filter(param => param.education_level === tab)
        currentEducationalTab.value = tab;
    }
    else {
        newStudentFull.value.student_educational_info.details.push(
            {
                education_level: tab,
                name_of_previous_school: "",
                track_or_program: "",
                highest_honors_received: "",
                city_or_municipality_and_province: "",
                year_graduated_or_attended: "",
            }
        )
    }
  }
  // @change
  let requiredFields = ref(false);
  const firstNext = () => {
  if(
      newStudent.value.student_lsu_id_number === null ||
      newStudent.value.student_lsu_id_number === '' ||
      newStudent.value.lastname === null ||
      newStudent.value.lastname === '' ||
      newStudent.value.firstname === null ||
      newStudent.value.firstname === '' ||
      newStudent.value.middlename === null ||
      newStudent.value.middlename === '' ||
      newStudent.value.extension_or_suffix_name === null ||
      newStudent.value.extension_or_suffix_name === '' ||
      newStudent.value.birth_sex === null ||
      newStudent.value.birth_sex === '' ||
      newStudent.value.birth_date === null ||
      newStudent.value.birth_date === '' ||
      newStudent.value.citizenship === null ||
      newStudent.value.citizenship === '' ||
      newStudent.value.college === null ||
      newStudent.value.college === '' ||
      newStudent.value.program === null ||
      newStudent.value.program === '' ||
      newStudent.value.contact_primary_number === null ||
      newStudent.value.contact_primary_number === '' ||
      newStudent.value.contact_alternate_number === null ||
      newStudent.value.contact_alternate_number === '' ||
      newStudent.value.contact_personal_email_address === null ||
      newStudent.value.contact_personal_email_address === '' ||
      newStudent.value.contact_lsu_email_address === null ||
      newStudent.value.contact_lsu_email_address === '' ||
      newStudent.value.returnee_student_is_student_returnee === null ||
      newStudent.value.returnee_student_is_student_returnee === '' ||
      newStudent.value.shiftee_student_is_student_shiftee === null ||
      newStudent.value.shiftee_student_is_student_shiftee === ''
    ) {
      requiredFields.value = true;
      // console.log(newStudent.value)
      setTimeout(() => {
        requiredFields.value = false;
      }, 3000)
    } 
    else if(newStudent.value.returnee_student_is_student_returnee === 'yes'
      && (newStudent.value.returnee_student_reasons_for_returning_lsu === null ||
      newStudent.value.returnee_student_reasons_for_returning_lsu === '' ||
      newStudent.value.last_term_enrolled === null ||
      newStudent.value.last_term_enrolled === '' ||
      newStudent.value.last_academic_year_enrolled === null ||
      newStudent.value.last_academic_year_enrolled === ''
    )) {
      requiredFields.value = true;
      // console.log(newStudent.value)
      setTimeout(() => {
        requiredFields.value = false;
      }, 3000)
    }

    else if(newStudent.value.shiftee_student_is_student_shiftee === 'yes'
      && (newStudent.value.shiftee_student_college === null ||
      newStudent.value.shiftee_student_college === '' ||
      newStudent.value.shiftee_student_program === null ||
      newStudent.value.shiftee_student_program === ''
    )) {
      requiredFields.value = true;
      // console.log(newStudent.value)
      setTimeout(() => {
        requiredFields.value = false;
      }, 3000)
    }
    
    else {
      toggleInfo(false, true, false, false, false)
    }
  }
  const courseSelection = ref('Select Course Program');
  const courseSelectionShiftee = ref('Select Course Program');
  const ageRange = ref(['18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50'])
  const birthOrderList = ref([
    'Eldest',
    'Middle Child',
    'Youngest',
    'Only Child'
  ])
  const civilStatusList = ref(['Single', 'Married', 'Separated', 'Divorced', 'Widowed'])
  const citizenshipList = ref(['filipino', 'non-filipino'])
  const titleList = ref(['Mr.', 'Mrs.', 'Ms.', 'Miss'])

  const lastTermEnrolled = ref([
    '1st Semester', 
    '2nd Semester',
    'Summer'
  ])
  const lastAcademicYearEnrolled = ref([
    'A.Y. 2010 to 2011', 
    'A.Y. 2011 to 2012', 
    'A.Y. 2012 to 2013', 
    'A.Y. 2013 to 2014',
    'A.Y. 2014 to 2015',
    'A.Y. 2015 to 2016',
    'A.Y. 2016 to 2017',
    'A.Y. 2017 to 2018',
    'A.Y. 2018 to 2019',
    'A.Y. 2019 to 2020',
    'A.Y. 2020 to 2021',
    'A.Y. 2021 to 2022',
    'A.Y. 2022 to 2023',
    'A.Y. 2023 to 2024'
  ])
  const suffixName = ref(['Jr.', 'Sr.', 'I', 'II', 'III', 'IV', 'N/A'])
  const religionList = ref([
    'Aglipay',
    'Bible Baptist Church',
    'Church of Christ',
    'Iglesia FIlipina Independiente',
    'Iglesia ni Cristo',
    'Islam',
    'Jehovas Witness',
    'Philippine Independent Church',
    'Roman Catholic',
    'Seventh-Day Adventist',
    'The Church of Jesus Christ of Latter-Day Saints',
    'United Church of Christ in the Philippines',
    'Not Applicable',
  ])
  const ethnicityList = ref([
    'Bicol',
    'Bisaya',
    'Cebuano',
    'Foreign Ethnicity',
    'Ilocano',
    'Ilonggo',
    'Kapampangan',
    'Maguidanao',
    'Pangasinan',
    'Tagalog',
    'Waray',
    'Not Applicable'
  ])
  const languagesSpokenList = ref(['Tagalog', 'English', 'Bisaya or Cebuano'])
  const dropdowns = ref({
    prefix_name_title_list: [],
    birth_order_list: ['1st', '2nd', '3rd', '4th', '5th', 'Nth'],
    religion_list: [],
    citizenship_list: ['filipino', 'non-filipino'],
    civil_status_list: ['Single', 'Married', 'Separated', 'Divorced', 'Widowed'],
    languages_spoken_list: ['Tagalog', 'English', 'Bisaya or Cebuano'],
    ethnicity_list: ['Bicol', 'Bisaya', 'Cebuano', ],
    barangay: [],
    village: [],
    city: [],
  })
  const toggle = ref({
    one: true,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
  })
  const toggleInfo = (a, b, c, d, e, f) => {
    toggle.value = {
      one: a,
      two: b,
      three: c,
      four: d,
      five: e,
      six: f
    }
  }
  let assignCollege = () => {
    newStudent.value.college = courseSelection.value.college
    newStudent.value.program = courseSelection.value.program
  }
  let assignCollegeShiftee = () => {
    newStudent.value.shiftee_student_college = courseSelectionShiftee.value.college || ''
    newStudent.value.shiftee_student_program = courseSelectionShiftee.value.program || ''
  }
  // const siblingForm = ref(true);
  // const onlyChildBtn = () => {
  //   siblingForm.value = false
  //   newStudentFull.value.siblings = []
  // }
  // const addSibling = () => {
  //   siblingForm.value = true;
  //   newStudentFull.value.siblings.push(
  //     {
  //       lastname: "",
  //       firstname: "",
  //       middlename: "",
  //       birth_date: "",
  //       age: "",
  //       civil_status: "",
  //       grade_or_year_level: "",
  //       school_or_graduated_from: "",
  //       highest_education_completed: "",
  //       occupation: "",
  //       employer_or_company: "",
  //     }
  //   )
  // }

  const vitalLifeStatusSelection = () => {
    if (newStudentFull.value.f_personal_info_vital_life_status === 'living') {
        fatherInfo.value = true;
    }
    if (newStudentFull.value.f_personal_info_vital_life_status === 'deceased') {
        fatherInfo.value = false;
    }
    if (newStudentFull.value.m_personal_info_vital_life_status === 'living') {
        motherInfo.value = true;
    }
    if (newStudentFull.value.m_personal_info_vital_life_status === 'deceased') {
        motherInfo.value = false;
    }
  }
  // const removeRowSibling = (obj) => {
  //   if (newStudentFull.value.siblings.length > 1) {
  //       _.pull(newStudentFull.value.siblings, obj);
  //   }
  // }


  const theSameAddressBtn = (choice) => {
    if (choice === 'yesStudentContactInfo') {
      newStudentFull.value.stud_cnt_info_the_same_address_answer = 'yes'
    
      newStudentFull.value.stud_cnt_info_c_or_p_lvng_h_adr_ctgry_street_or_purok = newStudentFull.value.stud_cnt_info_perm_lvng_h_adr_ctgry_street_or_purok
    
      newStudentFull.value.stud_cnt_info_c_or_p_lvng_h_adr_ctgry_barangay_or_village = newStudentFull.value.stud_cnt_info_perm_lvng_h_adr_ctgry_barangay_or_village
      
      newStudentFull.value.stud_cnt_info_c_or_p_lvng_h_adr_ctgry_city_or_municipality = newStudentFull.value.stud_cnt_info_perm_lvng_h_adr_ctgry_city_or_municipality

      newStudentFull.value.stud_cnt_info_c_or_p_lvng_h_adr_ctgry_zipcode = newStudentFull.value.stud_cnt_info_perm_lvng_h_adr_ctgry_zipcode

      newStudentFull.value.stud_cnt_info_c_or_p_lvng_h_adr_ctgry_province_or_state = newStudentFull.value.stud_cnt_info_perm_lvng_h_adr_ctgry_province_or_state

      newStudentFull.value.stud_cnt_info_c_or_p_lvng_h_adr_ctgry_region = newStudentFull.value.stud_cnt_info_perm_lvng_h_adr_ctgry_region

      newStudentFull.value.stud_cnt_info_c_or_p_lvng_h_adr_ctgry_country = newStudentFull.value.stud_cnt_info_perm_lvng_h_adr_ctgry_country




    }
    if (choice === 'noStudentContactInfo') {
      newStudentFull.value.stud_cnt_info_the_same_address_answer = 'no'

      newStudentFull.value.stud_cnt_info_c_or_p_lvng_h_adr_ctgry_street_or_purok = null
      newStudentFull.value.stud_cnt_info_c_or_p_lvng_h_adr_ctgry_barangay_or_village = null
      newStudentFull.value.stud_cnt_info_c_or_p_lvng_h_adr_ctgry_city_or_municipality = null
      newStudentFull.value.stud_cnt_info_c_or_p_lvng_h_adr_ctgry_zipcode = null
      newStudentFull.value.stud_cnt_info_c_or_p_lvng_h_adr_ctgry_province_or_state = null
      newStudentFull.value.stud_cnt_info_c_or_p_lvng_h_adr_ctgry_region = null
      newStudentFull.value.stud_cnt_info_c_or_p_lvng_h_adr_ctgry_country = null
    }
    if (choice === 'yesFatherContactInfo') {
        newStudentFull.value.f_cont_info_the_same_adr_answer = 'yes'

        newStudentFull.value.f_cont_info_curnt_or_pr_lvng_h_adr_ctgy_street_or_purok = newStudentFull.value.f_cont_info_perm_lvng_h_add_ctgry_street_or_purok

        newStudentFull.value.f_cont_info_curnt_or_pr_lvng_h_adr_ctgy_barangay_or_village = newStudentFull.value.f_cont_info_perm_lvng_h_add_ctgry_barangay_or_village

        newStudentFull.value.f_cont_info_curnt_or_pr_lvng_h_adr_ctgy_city_or_municipality = newStudentFull.value.f_cont_info_perm_lvng_h_add_ctgry_city_or_municipality

        newStudentFull.value.f_cont_info_curnt_or_pr_lvng_h_adr_ctgy_zipcode = newStudentFull.value.f_cont_info_perm_lvng_h_add_ctgry_zipcode

        newStudentFull.value.f_cont_info_curnt_or_pr_lvng_h_adr_ctgy_province_or_state = newStudentFull.value.f_cont_info_perm_lvng_h_add_ctgry_province_or_state

        newStudentFull.value.f_cont_info_curnt_or_pr_lvng_h_adr_ctgy_region = newStudentFull.value.f_cont_info_perm_lvng_h_add_ctgry_region

        newStudentFull.value.f_cont_info_curnt_or_pr_lvng_h_adr_ctgy_country = newStudentFull.value.f_cont_info_perm_lvng_h_add_ctgry_country

       
       
        // console.log(newStudentFull.value)
    }
    if (choice === 'noFatherContactInfo') {
        newStudentFull.value.f_cont_info_the_same_adr_answer = 'no'  
        newStudentFull.value.f_cont_info_curnt_or_pr_lvng_h_adr_ctgy_street_or_purok = null
        newStudentFull.value.f_cont_info_curnt_or_pr_lvng_h_adr_ctgy_barangay_or_village = null
        newStudentFull.value.f_cont_info_curnt_or_pr_lvng_h_adr_ctgy_city_or_municipality = null
        newStudentFull.value.f_cont_info_curnt_or_pr_lvng_h_adr_ctgy_zipcode = null
        newStudentFull.value.f_cont_info_curnt_or_pr_lvng_h_adr_ctgy_province_or_state = null
        newStudentFull.value.f_cont_info_curnt_or_pr_lvng_h_adr_ctgy_region = null
        newStudentFull.value.f_cont_info_curnt_or_pr_lvng_h_adr_ctgy_country = null
    }
    if (choice === 'yesMotherContactInfo') {
        newStudentFull.value.m_contact_info_the_same_address_no = 'yes'

        newStudentFull.value.m_cont_info_crnt_or_prst_lvng_h_adr_ctgry_street_or_purok = newStudentFull.value.m_contact_info_perm_lvng_home_add_ctgy_street_or_purok


        newStudentFull.value.m_cont_info_crnt_or_prst_lvng_h_adr_ctgry_barangay_or_village = newStudentFull.value.m_contact_info_perm_lvng_home_add_ctgy_barangay_or_village

        newStudentFull.value.m_cont_info_crnt_or_prst_lvng_h_adr_ctgry_city_or_municipality = newStudentFull.value.m_contact_info_perm_lvng_home_add_ctgy_city_or_municipality


        newStudentFull.value.m_cont_info_crnt_or_prst_lvng_h_adr_ctgry_zipcode = newStudentFull.value.m_contact_info_perm_lvng_home_add_ctgy_zipcode


        newStudentFull.value.m_cont_info_crnt_or_prst_lvng_h_adr_ctgry_province_or_state = newStudentFull.value.m_contact_info_perm_lvng_home_add_ctgy_province_or_state

        newStudentFull.value.m_cont_info_crnt_or_prst_lvng_h_adr_ctgry_region = newStudentFull.value.m_contact_info_perm_lvng_home_add_ctgy_region

        newStudentFull.value.m_cont_info_crnt_or_prst_lvng_h_adr_ctgry_country = newStudentFull.value.m_contact_info_perm_lvng_home_add_ctgy_country

        // console.log(newStudentFull.value)
    }
    if (choice === 'noMotherContactInfo') {
        newStudentFull.value.m_contact_info_the_same_address_no = 'no'
        newStudentFull.value.m_cont_info_crnt_or_prst_lvng_h_adr_ctgry_street_or_purok = null
        newStudentFull.value.m_cont_info_crnt_or_prst_lvng_h_adr_ctgry_barangay_or_village = null
        newStudentFull.value.m_cont_info_crnt_or_prst_lvng_h_adr_ctgry_city_or_municipality = null
        newStudentFull.value.m_cont_info_crnt_or_prst_lvng_h_adr_ctgry_zipcode = null
        newStudentFull.value.m_cont_info_crnt_or_prst_lvng_h_adr_ctgry_province_or_state = null
        newStudentFull.value.m_cont_info_crnt_or_prst_lvng_h_adr_ctgry_region = null
        newStudentFull.value.m_cont_info_crnt_or_prst_lvng_h_adr_ctgry_country = null
    }
    if (choice === 'yesGuardianContactInfo') {
        newStudentFull.value.lg_cont_info_the_same_address_answer = 'yes'

        newStudentFull.value.lg_cont_info_crnt_or_prst_lvng_h_adr_ctry_street_or_purok = newStudentFull.value.lg_cont_info_perm_lvng_h_adr_ctgy_street_or_purok

        newStudentFull.value.lg_cont_info_crnt_or_prst_lvng_h_adr_ctry_barangay_or_village = newStudentFull.value.lg_cont_info_perm_lvng_h_adr_ctgy_barangay_or_village

        newStudentFull.value.lg_cont_info_crnt_or_prst_lvng_h_adr_ctry_city_or_municipality = newStudentFull.value.lg_cont_info_perm_lvng_h_adr_ctgy_city_or_municipality

        newStudentFull.value.lg_cont_info_crnt_or_prst_lvng_h_adr_ctry_zipcode = newStudentFull.value.lg_cont_info_perm_lvng_h_adr_ctgy_zipcode

        newStudentFull.value.lg_cont_info_crnt_or_prst_lvng_h_adr_ctry_province_or_state = newStudentFull.value.lg_cont_info_perm_lvng_h_adr_ctgy_province_or_state

        newStudentFull.value.lg_cont_info_crnt_or_prst_lvng_h_adr_ctry_region = newStudentFull.value.lg_cont_info_perm_lvng_h_adr_ctgy_region

        newStudentFull.value.lg_cont_info_crnt_or_prst_lvng_h_adr_ctry_country = newStudentFull.value.lg_cont_info_perm_lvng_h_adr_ctgy_country
        // console.log(newStudentFull.value)
    }
    if (choice === 'noGuardianContactInfo') {
        newStudentFull.value.lg_cont_info_the_same_address_answer = 'no'
        newStudentFull.value.lg_cont_info_crnt_or_prst_lvng_h_adr_ctry_street_or_purok = null
        newStudentFull.value.lg_cont_info_crnt_or_prst_lvng_h_adr_ctry_barangay_or_village = null
        newStudentFull.value.lg_cont_info_crnt_or_prst_lvng_h_adr_ctry_city_or_municipality = null
        newStudentFull.value.lg_cont_info_crnt_or_prst_lvng_h_adr_ctry_zipcode = null
        newStudentFull.value.lg_cont_info_crnt_or_prst_lvng_h_adr_ctry_province_or_state = null
        newStudentFull.value.lg_cont_info_crnt_or_prst_lvng_h_adr_ctry_region = null
        newStudentFull.value.lg_cont_info_crnt_or_prst_lvng_h_adr_ctry_country = null
    }
  }



  const submitToAPI = async () => {
    await $fetch(endpoint.value + "/api/admissions-second-sem-dev/create/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: newStudent.value,
    }).then((response) => {
      console.log(response);
      console.log(response.errors);
      stepsTab.value = false
      submitAndCheckEmailTab.value = true
      submitNewStudentToGmail()
      console.log(newStudentFull.value)
      submitToStudentProfile()
    })
  }
  const submitToStudentProfile = async () => {
    await $fetch(endpoint.value + "/api/admissions-second-sem-dev/student-profile/create/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: newStudentFull.value,
    }).then((response) => {
      console.log(newStudentFull.value)
      console.log(response);
      console.log(response.errors);
    })
  }

  let primaryInfo = () => {
    newStudentFull.value.primary_info_tracking_id = newStudent.value.tracking_id 
    newStudentFull.value.primary_info_student_lsu_id_number = newStudent.value.student_lsu_id_number 
    newStudentFull.value.primary_info_lastname = newStudent.value.lastname 
    newStudentFull.value.primary_info_firstname = newStudent.value.firstname 
    newStudentFull.value.primary_info_middlename = newStudent.value.middlename 
    newStudentFull.value.primary_info_extension_or_suffix_name = newStudent.value.extension_or_suffix_name 
    newStudentFull.value.primary_info_birth_sex = newStudent.value.birth_sex 
    newStudentFull.value.primary_info_birth_date = newStudent.value.birth_date 
    newStudentFull.value.primary_info_citizenship = newStudent.value.citizenship 
    newStudentFull.value.primary_info_college = newStudent.value.college 
    newStudentFull.value.primary_info_program = newStudent.value.program 
    newStudentFull.value.primary_info_contact_primary_number = newStudent.value.contact_primary_number 
    newStudentFull.value.primary_info_contact_alternate_number = newStudent.value.contact_alternate_number 
    newStudentFull.value.primary_info_contact_personal_email_address = newStudent.value.contact_personal_email_address 
    newStudentFull.value.primary_info_contact_lsu_email_address = newStudent.value.contact_lsu_email_address 
  }
  const submitFunc = () => {
    assignCollege()
    primaryInfo()

    // if(newStudentFull.value.siblings.length === 0) {
    //   newStudentFull.value.siblings.push(
    //   {
    //     lastname: "",
    //     firstname: "",
    //     middlename: "",
    //     birth_date: "",
    //     age: "",
    //     civil_status: "",
    //     grade_or_year_level: "",
    //     school_or_graduated_from: "",
    //     highest_education_completed: "",
    //     occupation: "",
    //     employer_or_company: "",
    //   }
    // )
    // }
    if (newStudent.value.shiftee_student_is_student_shiftee === 'yes') {
      newStudent.value.tracking_id = "TIDSS" + moment().valueOf()
      newStudent.value.last_term_enrolled = 'N/A'
      newStudent.value.last_academic_year_enrolled = 'N/A'
      primaryInfo()
      assignCollegeShiftee()
      submitToAPI();
      // console.log(newStudent.value)
    } else if (newStudent.value.returnee_student_is_student_returnee === 'yes') {
      newStudent.value.tracking_id = "TIDR" + moment().valueOf()
      primaryInfo()
      // console.log(newStudent.value)
      submitToAPI();
    } 
    else if (newStudent.value.returnee_student_is_student_returnee === 'yes' && newStudent.value.shiftee_student_is_student_shiftee === 'yes') {
      newStudent.value.tracking_id = "TIDRS" + moment().valueOf()
      primaryInfo()
      assignCollegeShiftee()
      console.log(newStudent.value)
      submitToAPI();
    } 
    else {
      newStudent.value.tracking_id = "TID" + moment().valueOf()
      newStudent.value.last_term_enrolled = 'N/A'
      newStudent.value.last_academic_year_enrolled = 'N/A'
      primaryInfo()
      // console.log(newStudent.value)
      submitToAPI();
    }
  }
  const submitNewStudentToGmail = async () => {
    await $fetch(endpoint.value + "/api/admissions-second-sem-dev/submit-new-student-to-gmail/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: {
        tracking_id: newStudent.value.tracking_id,
        student_lsu_id_number: newStudent.value.student_lsu_id_number,
        firstname: newStudent.value.firstname,
        email: newStudent.value.contact_personal_email_address,
        lsu_email: newStudent.value.contact_lsu_email_address,
      },
    }).then((response) => {
      console.log(response);
    })
  }
  const submitForm = () => {
    if (
      newStudent.value.media_release_consent === '' || 
      newStudent.value.hereby_certification === '') {
      pleaseFillUpAllRequiredFields.value = true;
      setTimeout(() => {
        pleaseFillUpAllRequiredFields.value = false;
      }, 5000)
    } else {
      submitFunc()
    }
  }
</script>
<template>
  <div class="bg-gray-50">
    <Header />
    <div class="">
      <div class="">
        <div class="">
          <div class="pt-10 w-full bg-green-900">
            <h1 class="font-bold uppercase text-white lg:text-2xl text-lg w-11/12 mx-auto pt-14 pb-5"> Admissions </h1>
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
                <a href="/admissions/form" class="mr-1"> Admissions </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div class="w-11/12 mx-auto shadow px-8 lg:py-7 py-2 lg:mt-10 mt-3 lg:mb-3">
          <h1 class="font-bold lg:text-2xl text-xs text-green-800 text-center"> APPLICATION FOR UNDERGRADUATE STUDENTS : Continuing Status </h1>
        </div>
        <div v-if="stepsTab">
          <div class="w-11/12 mx-auto items-center flex lg:pt-5 lg:pb-10 justify-center">
            <div class="mt-3 w-full">
              <div class="">
                <ul class="flex justify-between">
                  <li class="w-full ">
                    <span class=" text-white  bg-green-900 rounded-lg lg:px-3 px-2 lg:py-2 pt-0 pb-1 h-10 w-10 text-center">
                      <i class="lg:text-sm text-xs fa fa-user" aria-hidden="true"></i>
                    </span>
                    <span class="bg-green-900 h-0.5 w-full block -mt-2.5"></span>
                    <p class="text-left lg:text-xs text-[10px]  mt-5  text-green-800 lg:whitespace-nowrap lg:flex hidden"> Student Registration </p>
                  </li>
                  <li class="w-full ">
                    <span class=" text-white  bg-red-800 rounded-full lg:px-3 px-2 lg:py-2 pt-0 pb-1 h-10 w-10 text-center">
                      <i class="lg:text-sm text-xs fa fa-list" aria-hidden="true"></i>
                    </span>
                    <span class="bg-green-900 h-0.5 w-full block -mt-2.5"></span>
                    <p class="text-left lg:text-xs text-red-800 text-[10px]  mt-5   lg:whitespace-nowrap lg:flex hidden"> Detailed Student Profile </p>
                  </li>
                  <li class="w-full">
                    <span class=" text-white  bg-green-900 rounded-lg lg:px-3 px-1.5 lg:py-2 pt-0 pb-1 h-10 w-10 text-center">
                      <i class="lg:text-sm text-xs fa fa-camera"></i>
                    </span>
                    <span class="bg-green-900 h-0.5 w-full block -mt-2.5"></span>
                    <p class="text-left lg:text-xs text-[10px] mt-5  text-green-800 lg:whitespace-nowrap lg:flex hidden"> Media Release Consent </p>
                  </li>
                  <li class="w-full">
                    <span class=" text-white  bg-green-900 rounded-lg lg:px-3 px-2 lg:py-2 pt-0 pb-1 h-10 w-10 text-center">
                      <i class="lg:text-sm text-xs fa fa-heartbeat"></i>
                    </span>
                    <span class="bg-green-900 h-0.5 w-full block -mt-2.5"></span>
                    <p class="text-left lg:text-xs text-[10px] mt-5  text-green-800 lg:whitespace-nowrap lg:flex hidden"> Health Information </p>
                  </li>
                  <li class="">
                    <span class=" text-white  bg-green-900 rounded-lg lg:px-3 px-1.5 lg:py-2 pt-0 pb-1 h-10 w-10 text-center">
                      <i class="lg:text-sm text-xs fa fa-paper-plane" aria-hidden="true"></i>
                    </span>
                    <p class="text-left lg:text-xs text-[10px] -ml-24  mt-3  text-green-800 lg:whitespace-nowrap lg:flex hidden"> Submit and Check Email </p>
                  </li>
                </ul>
              </div>
              <div>
                <form v-on:submit.prevent="submitForm">
                  <div class="border-t-2 border-green-700 my-5 shadow-lg" v-show="toggle.one">
                    <div>
                      <h2 class="lg:text-base text-xs px-10 uppercase py-2 font-bold bg-green-900 text-white text-center"> Student Information </h2>
                      <div class="border-y-4">
                        <div class=" text-center px-3 uppercase font-bold lg:text-sm  text-xs py-2  cursor-pointer border-b"> Personal Details </div>
                        <div class="mt-3 pb-5 lg:px-5 px-2">
                          <div>
                            <div class="lg:flex gap-3">
                              <div class="mb-3 w-full">
                                <div class="lg:flex w-full gap-3">
                                  <div class="lg:flex gap-3 w-full lg:mb-0 mb-3">
                                    <div class="w-full">
                                        <label class="lg:text-xs text-[10px] text-gray-900 lg:block  pb-1">Last Name</label>
                                        <input type="text" class="w-full px-2 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" placeholder="Last Name" v-model="newStudent.lastname" />
                                      </div>
                                      <div class="w-full">
                                        <label class="lg:text-xs text-[10px] text-gray-900 lg:block  pb-1">First Name</label>
                                        <input type="text" class="w-full px-2 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" placeholder="First Name" v-model="newStudent.firstname" />
                                      </div>
                                      <div class="w-full">
                                        <label class="lg:text-xs text-[10px] text-gray-900 lg:block  pb-1">Middle Name</label>
                                        <input type="text" class="w-full px-2 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" placeholder="Middle Name" v-model="newStudent.middlename" />
                                      </div>
                                  </div>
                          
                                  <div class="lg:flex gap-3">
                                  <div class="flex gap-3">
                                    <div class="w-6/12">
                                      <label class="lg:text-xs text-[10px] text-gray-900 lg:block  pb-1"> 
                                        Suffix Name </label>
                                      <div class="flex">
                                        <select class="lg:w-24 w-full px-3 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" 
                                          v-model="newStudent.extension_or_suffix_name">
                                          <option value="" disabled selected> Suffix </option>
                                          <option :value="j" v-for="(j, i) in suffixName" :key="i">{{ j }}
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                    <div class="w-full">
                                      <label class="lg:text-xs text-[10px] text-gray-900 lg:block pb-1"> 
                                        Birth Sex </label>
                                      <div class="flex lg:w-fit gap-5 pt-2.5 pb-[8.5px] lg:pl-4 pl-3 lg:pr-5 shadow-lg bg-white border-b-2 border-green-700">
                                        <div class="flex mr-3">
                                          <input type="radio" 
                                            value="Female" 
                                            v-model="newStudent.birth_sex" 
                                            class="lg:mr-2 mr-1" />
                                          <label class="lg:text-xs text-[10px]"> Female </label>
                                        </div>
                                        <div class="flex">
                                          <input type="radio" 
                                            value="Male" 
                                            v-model="newStudent.birth_sex" 
                                            class="lg:mr-2 mr-1" />
                                          <label class="lg:text-xs text-[10px] pr-3"> Male </label>
                                        </div>
                                      </div>
                                    </div>

                                  </div>
                                   <div class="flex gap-3">
                                    <div class="w-full">
                                      <label class="lg:text-xs text-[10px] text-gray-900 lg:block pb-1"> 
                                        Birth Date </label>
                                      <div>
                                        <input type="date" 
                                          class="lg:w-44 px-2 w-full border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" 
                                          placeholder="Date of Birth" 
                                          v-model="newStudent.birth_date" />
                                      </div>
                                    </div>
                                    <div class="w-full lg:flex gap-3 grid lg:grid-cols-2">
                                      <div>
                                        <label class="lg:text-xs text-[10px] text-gray-900 lg:block  pb-1"> Citizenship </label>
                                        <div>
                                          <select class="lg:w-32 w-full px-3 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" 
                                          v-model="newStudent.citizenship">
                                            <option value="" disabled selected > Citizenship </option>
                                            <option :value="j" v-for="(j, i) in citizenshipList" :key="i">{{ j }}
                                            </option>
                                          </select>
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
                      </div>
                      <div class="border-b-4">
                        <div class=" px-3  uppercase font-bold lg:text-sm  text-xs text-center cursor-pointer border-b py-2"> Contact Information </div>
                        <div class="mt-3 lg:pb-5 pb-3 lg:px-5 px-2">
                          <div class="lg:flex gap-3">
                            <div class="flex w-full gap-3">
                              <div class="w-full lg:mb-0 mb-3">
                                <label class="lg:text-xs text-[10px] text-gray-900 lg:block  pb-1"> 
                                  Primary Contact Number</label>
                                <div>
                                  <input type="text" class="w-full lg:text-xs text-[10px] px-3 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9" 
                                    placeholder="(+63) XXX-XXX-XXXX" 
                                    v-model="newStudent.contact_primary_number" />
                                </div>
                              </div>
                              <div class="w-full lg:mb-0 mb-3">
                                <label class="lg:text-xs text-[10px] text-gray-900 lg:block  pb-1"> 
                                  Alternate Contact Number</label>
                                <div>
                                  <input type="text" class="w-full lg:text-xs text-[10px] px-3 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9" 
                                    placeholder="(+63) XXX-XXX-XXXX" 
                                    v-model="newStudent.contact_alternate_number" />
                                </div>
                              </div>
                            </div>
                            <div class="lg:w-10/12 w-full lg:mb-0 mb-3">
                              <label class="lg:text-xs text-[10px] text-gray-900 lg:block  pb-1"> 
                                Personal Email Address </label>
                              <div>
                                <input type="email" class="w-full lg:text-xs text-[10px] px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9" 
                                  placeholder="e.g name7@gmail.com" 
                                  v-model="newStudent.contact_personal_email_address" required />
                              </div>
                            </div>
                            <div class="lg:w-10/12 w-full lg:mb-0 mb-3">
                              <label class="lg:text-xs text-[10px] text-gray-900 lg:block pb-1"> LSU Email</label>
                              <div class="flex items-center rounded-sm w-full">
                                <!-- <input type="email"
                                      class="focus:ring-0 focus:w-full focus:border-green-700 pl-3 w-[150px] text-sm h-9 text-right border-t-0 border-x-0 border-b-2 border-green-700 pr-0 shadow-lg "
                                      placeholder="e.g firstname.lastname"
                                      v-model="newStudent.contact_lsu_email_address"
                                      required /><span class="bg-white text-green-800 h-9 pr-5 border-b-2 pt-2 border-green-700 text-sm shadow-lg ">@lsu.edu.ph</span> -->
                                <input type="email" class="w-full lg:text-xs text-[10px] px-3 border-b-2 
                                border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9" 
                                placeholder="e.g firstname.lastname@lsu.edu.ph" 
                                v-model="newStudent.contact_lsu_email_address" />
                              </div>
                            </div>
                            <div class="lg:mb-0 mb-3">
                              <div class="flex items-center">
                                <label class="lg:text-xs text-[10px] text-gray-900 lg:block  pb-1"> LSU Student ID Number <span class="text-red-600">*</span></label>
                              </div>
                              <div class="flex">
                                <input type="text" 
                                class="lg:w-[140px] w-full lg:text-xs text-[10px] px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9" 
                                placeholder="e.g 221123265"
                                v-model="newStudent.student_lsu_id_number" />
                                <span @click="infoText = !infoText" 
                                class="text-center cursor-pointer bg-green-800 font-bold border border-green-900 text-white rounded-full px-1.5 
                                  h-5 w-5 ml-2 mt-2">
                                  <i class="fa fa-question mt-0.5 -ml-[1px] flex"></i>
                                </span>
                              </div>
                              <div v-if="infoText" class="text-green-900 text-xs mt-3 leading-tight min-w-[250px]"> Enter your ID number as registered on your account or as shown on your Student ID Card </div>
                            </div>
                          </div>
                          <div class="lg:flex gap-3 mt-5 border-t-4 pt-5 lg:pb-6 border-gray">
                            <div class="lg:w-8/12 flex gap-3">
                            <div class="lg:w-full lg:mb-0 mb-3">
                              <label class="lg:text-xs text-[10px] mb-1 text-black lg:block lg:font-bold"> 
                                Academic Year </label>
                              <div>
                                <input type="text" 
                                  disabled 
                                  class="w-full text-xs bg-gray-100 px-3 border-b-2 border-t-0 border-x-0  shadow-lg rounded-sm h-9" 
                                  value="A.Y. 2024 to 2025" />
                              </div>
                            </div>
                            <div class="lg:w-full lg:mb-0 mb-3">
                              <label class="lg:text-xs text-[10px] mb-1 text-black lg:block lg:font-bold"> 
                                Term </label>
                              <div>
                                <input type="text" disabled 
                                class="w-full text-xs bg-gray-100 px-3 border-b-2 border-t-0 border-x-0  shadow-lg rounded-sm h-9" 
                                value="Second Semester" />
                              </div>
                            </div>

                           </div>
                            <div class="w-full lg:mb-0 mb-3">
                              <label class="lg:text-xs text-[10px] mb-1 text-black lg:block lg:font-bold">Degree Program</label>
                              <select v-model="courseSelection" @change="assignCollege"
                                class="w-full px-3 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm text-black h-9 text-xs" required>
                                <option value="Select Course Program" disabled selected>Select Course Program</option>
                                <option :value="cp" v-for="(cp, i) in courseOrProgramData" :key="i">
                                  {{ cp.college }} | {{ cp.program }}
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="border-b-4" v-if="newStudent.citizenship === 'non-filipino'">
                        <div @click="studentAlienStatusInformationToggle = !studentAlienStatusInformationToggle" class="flex justify-center px-5 items-center cursor-pointer" :class="studentAlienStatusInformationToggle ? 'bg-white text-green-900 border-b-4 border-green-800' : 'bg-green-600 text-white'">
                          <p class="uppercase font-bold lg:text-xs text-[10px] pr-5"> Alien status information </p>
                          <span>
                            <i class="fa text-2xl" :class="studentAlienStatusInformationToggle ? 'fa-caret-up pt-1' : 'fa-caret-down'"></i>
                          </span>
                        </div>
                        <div class="mt-3 px-5 lg:pb-7 pb-5" v-if="studentAlienStatusInformationToggle">
                          <div class="lg:flex grid grid-cols-2 gap-3 mb-2">
                            <div class="w-full">
                              <label class="text-[10px] text-black"> Citizenship</label>
                              <input type="text" class="w-full px-3 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" v-model="newStudent.alien_status_information_citizenship" placeholder="Citizenship" />
                            </div>
                            <div class="w-full">
                              <label class="text-[10px] text-black"> Visa Status </label>
                              <input type="text" class="w-full px-3 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" v-model="newStudent.alien_status_information_visa_status" placeholder="Visa Status" />
                            </div>
                            <div class="w-full">
                              <label class="text-[10px] text-black"> Last Day Authorized Stay </label>
                              <input type="text" class="w-full px-3 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" v-model="newStudent.alien_status_information_last_day_of_authorized_stay" placeholder="Last Day of Authorized Stay" />
                            </div>
                            <div class="w-full">
                              <label class="text-[10px] text-black"> Agent Name </label>
                              <input type="text" class="w-full px-3 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" v-model="newStudent.alien_status_information_agent_name" placeholder="Agent Name" />
                            </div>
                          </div>
                          <div class="lg:flex grid grid-cols-2 gap-3 mb-2">
                            <div class="w-full">
                              <label class="text-[10px] text-black"> Passport Number </label>
                              <input type="text" class="w-full px-3 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" v-model="newStudent.alien_status_information_passport_number" placeholder="Passport Number" />
                            </div>
                            <div class="w-full">
                              <label class="text-[10px] text-black"> Passport: Place Issued </label>
                              <input type="text" class="w-full px-3 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" v-model="newStudent.alien_status_information_passport_place_issued" placeholder="Passport: Place Issued" />
                            </div>
                            <div class="w-full">
                              <label class="text-[10px] text-black"> Passport: Date Issued </label>
                              <input type="date" class="w-full px-3 uppercase border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" v-model="newStudent.alien_status_information_passport_date_issued" placeholder="Passport: Date Issued" />
                            </div>
                            <div class="w-full">
                              <label class="text-[10px] text-black"> Passport: Date of Expiry </label>
                              <input type="date" class="w-full px-3 uppercase border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" v-model="newStudent.alien_status_information_passport_date_of_expiry" placeholder="Passport: Date of Expiry" />
                            </div>
                          </div>
                          <div class="lg:flex grid grid-cols-2 gap-2">
                            <div class="w-full">
                              <label class="text-[10px] text-black"> ACR: I-CARD: Date Issued </label>
                              <input type="date" class="w-full px-3 uppercase border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" v-model="newStudent.alien_status_information_acricard_date_issued" placeholder="ACRICARD Date Issued" />
                            </div>
                            <div class="w-full">
                              <label class="text-[10px] text-black"> ACR: I-CARD: Expiry Date </label>
                              <input type="date" class="w-full px-3 uppercase border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" v-model="newStudent.alien_status_information_acricard_date_of_expiry" placeholder="ACRICARD Date of Expiry" />
                            </div>
                            <div class="w-full">
                              <label class="text-[10px] text-black"> CRTS: Date Issued </label>
                              <input type="date" class="w-full px-3 uppercase border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" v-model="newStudent.alien_status_information_crts_date_issued" placeholder="CRTS Date Issued" />
                            </div>
                            <div class="w-full">
                              <label class="text-[10px] text-black"> CRTS: Date of Expiry </label>
                              <input type="date" class="w-full px-3 uppercase border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" v-model="newStudent.alien_status_information_crts_date_of_expiry" placeholder="CRTS Date of Expiry" />
                            </div>
                            <div class="w-full">
                              <label class="text-[10px] text-black"> SSP: Date Issued </label>
                              <input type="date" class="w-full px-3 uppercase border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" v-model="newStudent.alien_status_information_ssp_date_issued" placeholder="SSP Date Issued" />
                            </div>
                            <div class="w-full">
                              <label class="text-[10px] text-black"> SSP: Date of Expiry </label>
                              <input type="date" class="w-full px-3 uppercase border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" v-model="newStudent.alien_status_information_ssp_date_of_expiry" placeholder="SSP Date of Expiry" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="">
                        <div class="border-b-4">
                          <div class="lg:flex cursor-pointer lg:px-5 px-2 pt-3 pb-3 border-b">
                            <div class="flex items-center">
                              <label class="text-xs font-bold pr-5">Are you a returning student?</label>
                              <div class="flex">
                                <div class="flex items-center lg:mr-6 mr-3">
                                  <input type="radio" value="yes" v-model="newStudent.returnee_student.is_student_returnee" class="mr-1" />
                                  <label class="text-xs"> Yes </label>
                                </div>
                                <div class="flex items-center">
                                  <input type="radio" value="no" v-model="newStudent.returnee_student.is_student_returnee" class="mr-1" />
                                  <label class="text-xs"> No </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="lg:text-xs text-[10px] py-3 text-black lg:px-5 px-2"> 
                            Returnee refers to an undergraduate student of LSU whose studies was discontinued for at least one (1) semester and is seeking 
                            re-admission to the University. </div>
                          <div class="lg:px-5 px-2 border-t" v-if="newStudent.returnee_student.is_student_returnee === 'yes'">
                            <div class="lg:flex gap-3 lg:mt-8 mt-5 mb-5">
                              <div class="lg:flex w-full gap-3">
                                <div class="lg:w-6/12 lg:mb-0 mb-5">
                                  <label class="lg:text-xs text-[10px] text-black w-fit whitespace-nowrap pr-10 pb-1 block"> Last Term Enrolled </label>
                                  <div>
                                    <select v-model="newStudent.last_term_enrolled" class="w-full px-3 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs">
                                      <option value="" disabled selected hidden> Last Term Enrolled </option>
                                      <option :value="j" v-for="(j, i) in lastTermEnrolled" :key="i">{{ j }}
                                      </option>
                                    </select>
                                </div>
                                </div>
                                <div class="lg:w-6/12 lg:mb-0 mb-5">
                                  <label class="lg:text-xs text-[10px] text-black w-fit whitespace-nowrap pr-10 pb-1 block"> 
                                    Last Academic Year Enrolled </label>
                                  <div>
                                    <select v-model="newStudent.last_academic_year_enrolled" class="w-full px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs">
                                      <option value="" disabled selected hidden> Last Academic Year Enrolled </option>
                                      <option :value="j" v-for="(j, i) in lastAcademicYearEnrolled" :key="i">{{ j }}
                                      </option>
                                    </select>
                                  </div>
                                </div>
                                <div class="w-full lg:mb-0 mb-5">
                                  <div class="block">
                                    <p class="lg:text-xs text-[10px] text-black w-fit lg:whitespace-nowrap pr-10 pb-1">
                                      {{ newStudent.returnee_student.question }}
                                    </p>
                                    <div class="lg:flex items-center  bg-white w-full px-3 lg:py-0 py-2 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm lg:h-9 h-auto text-xs">
                                      <ul class="lg:flex items-center justify-between gap-10 bg-white w-full">
                                        <li v-for="(li, i) in newStudent.returnee_student.reason_dropping_out_college" :key="i" class="lg:whitespace-nowrap flex items-center lg:mb-0 mb-2">
                                          <input v-model="li.value" :value="li.label" type="checkbox" class="mr-1.5" />
                                          {{ li.label }}
                                          <input v-model="li.description" placeholder="please specify" :class="li.label === 'Others' && li.value ? '' : 'hidden'" class="ml-3 border-b lg:w-44 w-10/12 px-3 capitalize py-1 border-t-0 border-x-0border-green-700 rounded-sm h-full text-xs" />
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="w-full lg:mb-8 mb-5">
                              <p class="lg:text-xs text-[10px] text-black w-fit lg:whitespace-nowrap pr-5 pb-1"> 
                                Reason(s) for returning to LSU. </p>
                              <textarea class="w-full px-3 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-auto text-xs py-2.5" rows="1" v-model="newStudent.returnee_student.reasons_for_returning_lsu" placeholder="answer here ..."></textarea>
                            </div>
                          </div>
                        </div>
                        <div class="w-full flex items-center justify-center lg:px-5 px-2 py-3.5 border-b-4">
                          <div class="lg:flex items-center gap-3 w-full">
                            <div class="cursor-pointer w-full flex items-center">
                              <div class="lg:flex flex-wrap items-center gap-3">
                                <label class="text-xs lg:flex leading-tight lg:pr-1">
                                  <span class="font-bold lg:pr-1 text-xs"> Do you intent to apply for a change of degree program? </span> 
                                  (applicable to shiftees) </label>
                                <div class="flex lg:mt-0 mt-3 lg:mx-0 mx-auto lg:w-auto w-fit">
                                  <div class="flex items-center mr-5">
                                    <input type="radio" value="yes" v-model="newStudent.shiftee_student_is_student_shiftee" class="mr-1" />
                                    <label class="text-sm"> Yes </label>
                                  </div>
                                  <div class="flex items-center">
                                    <input type="radio" value="no" v-model="newStudent.shiftee_student_is_student_shiftee" class="mr-1" />
                                    <label class="text-sm"> No </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div v-if="newStudent.shiftee_student_is_student_shiftee === 'yes'" class="w-full lg:mt-0 mt-3 pt-1.5 pb-2.5">
                              <div class="">
                                <label class="lg:text-xs text-[10px] mb-1 text-green-800 block"> Please enter below the degree program you are applying, if your answer is <span class="font-bold">YES.</span>
                                </label>
                                <select v-model="courseSelectionShiftee" @change="assignCollegeShiftee" class="w-full lg:px-3 px-1 border-b-2 border-t-0 border-x-0 border-green-700 
                                  shadow-lg rounded-sm text-black h-9 text-xs">
                                  <option value="Select Course Program" disabled>Select Course Program</option>
                                  <option :value="cp" v-for="(cp, i) in courseOrProgramData" :key="i">
                                    {{ cp.college }} | {{ cp.program }}
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="py-5">
                        <div class="w-fit mr-0 ml-auto flex">
                          <div
                          class="cursor-pointer py-1 uppercase px-4 shadow bg-green-800 text-white hover:bg-white hover:text-green-800 rounded-lg mx-2" 
                            @click="firstNext()">Next <i class="fa fa-angle-double-right pl-2"></i>
                          </div>
                        </div>
                      </div>

                      <div v-if="requiredFields" class="my-10 text-white bg-red-500 font-bold text-center py-1 px-5 block lg:text-xs text-[10px]"> 
                        Must complete all information. Otherwise, type N/A if not applicable. </div>
                    </div>
                  </div>


                  <div class="border-t-2 border-green-700 my-5 shadow-lg" v-show="toggle.two">
                    <div>
                      <div class="">
                        <h2 class="lg:text-base text-xs px-10 uppercase py-2 font-bold bg-red-900 text-white text-center"> Detailed Student Profile </h2>
                      </div>
                      <div class="pb-5">
                        <div class="">
                          <div class=" text-center px-3 uppercase font-bold lg:text-sm  text-xs py-2  cursor-pointer border-y"> Personal Details </div>
                          <div class="mt-3 lg:pb-5 px-2 lg:px-5">
                            <div>
                              <div class="lg:flex gap-3">
                                <div class="mb-3 w-full">
                                  <div class="lg:flex w-full gap-3">
                                    <div class="lg:flex gap-3 w-full lg:mb-0 mb-3">
                                      <div class="w-fit">
                                        <label class="text-[10px] text-gray-900 block  pb-1">Title</label>
                                        <select class="w-fit px-3 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                          v-model="newStudentFull.primary_info_title">
                                          <option value="" disabled selected>Title</option>
                                          <option :value="j" v-for="(j, i) in titleList" :key="i">{{ j }}
                                          </option>
                                        </select>
                                      </div>
                                      <div class="w-full">
                                        <label class="text-[10px] text-gray-900 lg:block  pb-1">Last Name</label>
                                        <input type="text" class="px-2 w-full capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" placeholder="Last Name" v-model="newStudent.lastname" />
                                      </div>
                                      <div class="w-full">
                                        <label class="text-[10px] text-gray-900 lg:block  pb-1">First Name</label>
                                        <input type="text" class="px-2 w-full capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" placeholder="First Name" v-model="newStudent.firstname" />
                                      </div>
                                      <div class="w-full">
                                        <label class="text-[10px] text-gray-900 lg:block  pb-1">Middle Name</label>
                                        <input type="text" class="px-2 w-full capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" placeholder="Middle Name" v-model="newStudent.middlename" />
                                      </div>
                                    </div>
                                    <div class="lg:flex gap-3">
                                      <div>
                                        <label class="text-[10px] text-gray-900 lg:block  pb-1"> 
                                          Suffix Name </label>
                                        <div class="flex">
                                          <select class="lg:w-24 px-3 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" 
                                            v-model="newStudent.extension_or_suffix_name">
                                            <option value="" disabled selected> Suffix </option>
                                            <option :value="j" v-for="(j, i) in suffixName" :key="i">{{ j }}
                                            </option>
                                          </select>
                                        </div>
                                      </div>
                                      <div class="">
                                        <label class="lg:text-xs text-[10px] text-gray-900 lg:block pb-1"> Birth Sex </label>
                                        <div class="flex lg:w-fit lg:gap-5 pt-2.5 pb-2 lg:pl-4 pl-1 lg:pr-5 pr-1 shadow-lg bg-white border-b-2 border-green-700">
                                          <div class="flex mr-3">
                                            <input type="radio" value="Female" v-model="newStudent.birth_sex" class="lg:mr-2 mr-1" />
                                            <label class="text-[10px]"> Female </label>
                                          </div>
                                          <div class="flex">
                                            <input type="radio" value="Male" v-model="newStudent.birth_sex" class="lg:mr-2 mr-1" />
                                            <label class="text-[10px] pr-3"> Male </label>
                                          </div>
                                        </div>
                                      </div>
                                      <div>
                                        <label class="text-[10px] text-gray-900 lg:block  pb-1"> Birth Date </label>
                                        <div>
                                          <input type="date" class="lg:w-44 px-2 w-full border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" placeholder="Date of Birth" v-model="newStudent.birth_date" />
                                        </div>
                                      </div>
                                      <div class="lg:flex gap-3 grid grid-cols-2">
                                        <div>
                                          <label class="text-[10px] text-gray-900 lg:block  pb-1"> Citizenship </label>
                                          <div>
                                            <select class="lg:w-32 w-full px-3 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" v-model="newStudent.citizenship">
                                              <option value="" disabled selected> Citizenship </option>
                                              <option :value="j" v-for="(j, i) in citizenshipList" :key="i">{{ j }}
                                              </option>
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="pb-5 lg:px-5 px-2">
                            <div>
                              <div class="flex gap-3">
                                <div class="w-full">
                                  <div class="lg:flex w-full gap-3">
                                    <div class="lg:flex gap-3 w-full">
                                      <div>
                                        <label class="text-[10px] text-gray-900 lg:block  pb-1"> Birth Order </label>
                                        <div>
                                          <select class="lg:w-fit w-full px-3 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" v-model="newStudentFull.primary_info_birth_order">
                                            <option value="" disabled selected>Birth Order </option>
                                            <option :value="j" v-for="(j, i) in birthOrderList" :key="i">{{ j }}
                                            </option>
                                          </select>
                                        </div>
                                      </div>
                                      <div class="w-full">
                                        <label class="text-[10px] text-gray-900 lg:block  pb-1">Birth Place</label>
                                        <div>
                                          <input type="text" class="w-full px-3 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" v-model="newStudentFull.primary_info_birth_place" placeholder="Birth Place" />
                                        </div>
                                      </div>
                                      <div class="mb-3 w-full">
                                        <label class="text-[10px] text-gray-900 lg:block  pb-1"> 
                                          Religion</label>
                                        <div class="flex">
                                          <select class="w-full px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" 
                                            v-model="newStudentFull.primary_info_religion">
                                            <option value="" disabled selected>Select a Religion</option>
                                            <option :value="j" v-for="(j, i) in religionList" :key="i">{{ j }}
                                            </option>
                                          </select>
                                        </div>
                                      </div>
                                      <div>
                                        <label class="text-[10px] text-gray-900 lg:block  pb-1"> Civil Status </label>
                                        <div>
                                          <select class="lg:w-44 w-full px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" v-model="newStudentFull.primary_info_civil_status">
                                            <option value="" disabled selected>Civil Status </option>
                                            <option :value="j" v-for="(j, i) in civilStatusList" :key="i">{{ j }}
                                            </option>
                                          </select>
                                        </div>
                                      </div>
                                      <!-- <div>
                                        <label class="text-[10px] text-gray-900 lg:block  pb-1"> Languages Spoken </label>
                                        <div>
                                          <select class="lg:w-44 w-full px-3 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" v-model="newStudentFull.primary_info_nationality">
                                            <option value="" disabled selected> Languages Spoken </option>
                                            <option :value="j" v-for="(j, i) in languagesSpokenList" :key="i">
                                              {{ j }}
                                            </option>
                                          </select>
                                        </div>
                                      </div> -->
                                      <div>
                                        <label class="text-[10px] text-gray-900 lg:block  pb-1">Ethnicity</label>
                                        <div>
                                          <select class="lg:w-44 w-full px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" v-model="newStudentFull.primary_info_ethnicity">
                                            <option value="" disabled selected>Ethnicity</option>
                                            <option :value="j" v-for="(j, i) in ethnicityList" :key="i">
                                              {{ j }}
                                            </option>
                                          </select>
                                        </div>
                                      </div>

                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div class="border-y py-5 flex px-5 gap-3">
                              <div class="lg:flex items-center w-11/12">
                                <p class="text-xs lg:mb-0 mb-3 lg:mr-5 text-green-900">Do you belong to a Tribal/Indigenous Community?</p>
                                <div class="flex items-center">
                                  <span class="flex items-center">
                                    <input type="radio" value="yes" v-model="newStudentFull.stud_tribal_or_indigenous_community_option" />
                                    <label class="text-xs px-1"> Yes </label>
                                    <span class="flex items-center whitespace-nowrap" :class="newStudentFull.stud_tribal_or_indigenous_community_option === 'yes' ? '' : 'hidden'">
                                      <input type="text" v-model="newStudentFull.stud_tribal_or_indigenous_community_name" placeholder="Name of Tribe" class="w-fit px-3 ml-2 mr-1 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" />
                                    </span>
                                  </span>
                                  <span class="flex items-center mx-1">
                                    <input type="radio" value="no" v-model="newStudentFull.stud_tribal_or_indigenous_community_option" />
                                    <label class="text-xs px-1"> No </label>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="">
                          <div class=" px-3  uppercase font-bold lg:text-sm  text-xs text-center cursor-pointer border-y py-2"> Contact Information </div>
                          <div class="mt-3 lg:pb-5 pb-3 lg:px-5 px-2">
                          <div class="lg:flex gap-3">
                            <div class="flex w-full gap-3">
                              <div class="w-full lg:mb-0 mb-3">
                                <label class="text-[10px] text-gray-900 lg:block  pb-1"> Primary Contact Number</label>
                                <div>
                                  <input type="text" class="w-full text-xs px-3 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9" placeholder="(+63) XXX-XXX-XXXX" v-model="newStudent.contact_primary_number" />
                                </div>
                              </div>
                              <div class="w-full lg:mb-0 mb-3">
                                <label class="text-[10px] text-gray-900 lg:block  pb-1"> Alternate Contact Number</label>
                                <div>
                                  <input type="text" class="w-full text-xs px-3 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9" placeholder="(+63) XXX-XXX-XXXX" v-model="newStudent.contact_alternate_number" />
                                </div>
                              </div>
                            </div>
                            <div class="w-full lg:mb-0 mb-3">
                              <label class="text-[10px] text-gray-900 lg:block  pb-1"> Personal Email Address </label>
                              <div>
                                <input type="email" class="w-full text-xs px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9" 
                                placeholder="e.g name7@gmail.com" v-model="newStudent.contact_personal_email_address" required />
                              </div>
                            </div>
                            <div class="w-full lg:mb-0 mb-3"  v-if="newStudent.former_lsu_student === 'yes'">
                              <label class="text-[10px] text-gray-900 lg:block  pb-1"> LSU Email</label>
                              <div>
                                <input type="email" class="w-full text-xs px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9" placeholder="e.g firstname.lastname@lsu.edu.ph" v-model="newStudent.contact_lsu_email_address" />
                              </div>
                            </div>
                            <div class="lg:mb-0 mb-3">
                              <label class="text-[10px] text-gray-900 lg:block  pb-1 whitespace-nowrap"> Are you a former student of LSU-Ozamiz? <span class="text-red-600">*</span></label>
                              <div class="flex justify-center lg:w-auto lg:gap-5 pt-2.5 pb-2 lg:pl-4 pl-1 pr-1 shadow bg-green-100 border-b-2 border-green-700">
                                <div class="flex mr-3">
                                  <input type="radio" value="yes" v-model="newStudent.former_lsu_student" class="lg:mr-2 mr-1" />
                                  <label class="text-[10px]"> Yes </label>
                                </div>
                                <div class="flex">
                                  <input type="radio" value="no" v-model="newStudent.former_lsu_student" class="lg:mr-2 mr-1" />
                                  <label class="text-[10px] pr-3"> No </label>
                                </div>
                              </div>
                            </div>
                            <div class="lg:mb-0 mb-3" v-if="newStudent.former_lsu_student === 'yes'">
                              <div class="flex items-center">
                                <label class="text-[10px] text-gray-900 lg:block  pb-1"> LSU Student ID Number <span class="text-red-600">*</span></label>
                              </div>
                              <div class="flex">
                                <input type="text" class="w-[120px] text-xs px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9" 
                                  placeholder="e.g 221123265" v-model="newStudent.student_lsu_id_number"/>
                                <span @click="infoText = !infoText" class="text-center cursor-pointer bg-green-800 font-bold border border-green-900 text-white rounded-full px-1.5 h-5 w-5 ml-2 mt-2">
                                  <i class="fa fa-question mt-0.5 -ml-[1px] flex"></i>
                                </span>
                              </div>
                              <div v-if="infoText" class="text-green-900 text-xs mt-3 leading-tight min-w-[250px]"> Enter your ID number as registered on your account or as shown on your Student ID Card </div>
                            </div>
                            <div class="lg:mb-0 mb-3" v-if="newStudent.former_lsu_student === 'no'">
                              <div class="flex items-center">
                                <label class="text-[10px] text-gray-900 lg:block  pb-1"> LSU Student ID </label>
                              </div>
                              <div class="flex">
                                <input type="text" 
                                value="N/A"
                                class="w-[70px] bg-gray-100 text-xs border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-center" 
                                 disabled/>
                              </div>
                            </div>
                          </div>
                       
                        </div>
                        </div>

                        <div class="">
                          <h1 class="lg:px-5 px-2 font-bold text-base">Contact Address</h1>
                          <div class="lg:px-5 lg:pt-3 lg:pb-5 px-2">
                            <div class="gap-3">
                                                    <div class="lg:flex gap-3">
                                                        <div class="w-full lg:mb-0 mb-3">
                                                            <label class="text-[10px]  lg:block ">
                                                                Street or Purok
                                                            </label>
                                                            <input type="text"
                                                                class="w-full px-3  border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                v-model="newStudentFull.stud_cnt_info_perm_lvng_h_adr_ctgry_street_or_purok"
                                                                placeholder="Street or Purok" />
                                                        </div>
                                                        <div class="w-full lg:mb-0 mb-3">
                                                            <label class="text-[10px]  lg:block ">
                                                                Barangay or Village
                                                            </label>
                                                            <input type="text"
                                                                class="w-full px-3  border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                v-model="newStudentFull.stud_cnt_info_perm_lvng_h_adr_ctgry_barangay_or_village"
                                                                placeholder="Barangay or Village" />
                                                        </div>
                                                        <div class="w-full lg:mb-0 mb-3">
                                                            <label class="text-[10px]  lg:block ">
                                                                City or Municipality
                                                            </label>
                                                            <input type="text"
                                                                class="w-full px-3  border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                v-model="newStudentFull.stud_cnt_info_perm_lvng_h_adr_ctgry_city_or_municipality"
                                                                placeholder="City or Municipality" />
                                                        </div>
                                                        <div class="w-full lg:mb-0 mb-3">
                                                            <label class="text-[10px]  lg:block ">
                                                                Zip Code
                                                            </label>
                                                            <input type="text"
                                                                class="w-full px-3  border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                v-model="newStudentFull.stud_cnt_info_perm_lvng_h_adr_ctgry_zipcode"
                                                                placeholder="Zip Code" />
                                                        </div>
                                                        <div class="w-full lg:mb-0 mb-3">
                                                            <label class="text-[10px]  lg:block ">
                                                                Province or State
                                                            </label>
                                                            <input type="text"
                                                                class="w-full px-3  border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                v-model="newStudentFull.stud_cnt_info_perm_lvng_h_adr_ctgry_province_or_state"
                                                                placeholder="Province or State" />
                                                        </div>
                                                        <div class="w-full lg:mb-0 mb-3">
                                                            <label class="text-[10px]  lg:block ">
                                                                Region
                                                            </label>
                                                            <input type="text"
                                                                class="w-full px-3  border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                v-model="newStudentFull.stud_cnt_info_perm_lvng_h_adr_ctgry_region"
                                                                placeholder="Region" />
                                                        </div>

                                                        <div class="w-full lg:mb-0 mb-3">
                                                            <label class="text-[10px]  lg:block ">
                                                                Country
                                                            </label>
                                                            <input type="text"
                                                                class="w-full px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                v-model="newStudentFull.stud_cnt_info_perm_lvng_h_adr_ctgry_country"
                                                                placeholder="Country" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="mb-3 lg:flex items-center lg:pt-3">
                                                    <p
                                                        class="text-xs text-green-900 mr-3 lg:pt-1 lg:text-left text-center">
                                                        {{ newStudentFull.stud_cnt_info_the_same_address_question }}
                                                    </p>


                                                    <div
                                                        class="flex gap-3 pt-1 lg:mx-0 mx-auto w-fit lg:mb-0 mb-4 lg:mt-0 mt-2">
                                                        <div @click="theSameAddressBtn('yesStudentContactInfo')"
                                                            class="text-xs capitalize cursor-pointer px-3 rounded-lg hover:text-green-800 hover:bg-white border-2 border-green-800"
                                                            :class="newStudentFull.stud_cnt_info_the_same_address_answer === 'yes' ? 'text-white bg-green-800' : 'text-green-800 bg-white border-2'">
                                                            yes</div>


                                                        <div @click="theSameAddressBtn('noStudentContactInfo')"
                                                            class="text-xs capitalize cursor-pointer  px-3 rounded-lg hover:text-red-800 hover:bg-white border-2 border-red-800"
                                                            :class="newStudentFull.stud_cnt_info_the_same_address_answer === 'no' ? 'text-white bg-red-800' : 'text-red-800 bg-white border-2'">
                                                            no</div>
                                                    </div>

                                                </div>
                                                <div class="gap-3 mb-3"
                                                    :class="newStudentFull.stud_cnt_info_the_same_address_answer === 'yes' ? 'hidden' : ''">
                                                    <div class="lg:flex gap-3">
                                                        <div class="w-full lg:mb-0 mb-3">
                                                            <label class="text-[10px]  lg:block ">
                                                                Street or Purok
                                                            </label>
                                                            <input type="text"
                                                                class="w-full px-3  border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                v-model="newStudentFull.stud_cnt_info_c_or_p_lvng_h_adr_ctgry_street_or_purok"
                                                                placeholder="Street or Purok" />
                                                        </div>
                                                        <div class="w-full lg:mb-0 mb-3">
                                                            <label class="text-[10px]  lg:block ">
                                                                Barangay or Village
                                                            </label>
                                                            <input type="text"
                                                                class="w-full px-3  border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                v-model="newStudentFull.stud_cnt_info_c_or_p_lvng_h_adr_ctgry_barangay_or_village"
                                                                placeholder="Barangay or Village" />
                                                        </div>
                                                        <div class="w-full lg:mb-0 mb-3">
                                                            <label class="text-[10px]  lg:block ">
                                                                City or Municipality
                                                            </label>
                                                            <input type="text"
                                                                class="w-full px-3  border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                v-model="newStudentFull.stud_cnt_info_c_or_p_lvng_h_adr_ctgry_city_or_municipality"
                                                                placeholder="City or Municipality" />
                                                        </div>
                                                        <div class="w-full lg:mb-0 mb-3">
                                                            <label class="text-[10px]  lg:block ">
                                                                Zip Code
                                                            </label>
                                                            <input type="text"
                                                                class="w-full px-3  border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                v-model="newStudentFull.stud_cnt_info_c_or_p_lvng_h_adr_ctgry_zipcode"
                                                                placeholder="Zip Code" />
                                                        </div>
                                                        <div class="w-full lg:mb-0 mb-3">
                                                            <label class="text-[10px]  lg:block ">
                                                                Province or State
                                                            </label>
                                                            <input type="text"
                                                                class="w-full px-3  border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                v-model="newStudentFull.stud_cnt_info_c_or_p_lvng_h_adr_ctgry_province_or_state"
                                                                placeholder="Province or State" />
                                                        </div>
                                                        <div class="w-full lg:mb-0 mb-3">
                                                            <label class="text-[10px]  lg:block ">
                                                                Region
                                                            </label>
                                                            <input type="text"
                                                                class="w-full px-3  border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                v-model="newStudentFull.stud_cnt_info_c_or_p_lvng_h_adr_ctgry_region"
                                                                placeholder="Region" />
                                                        </div>
                                                        <div class="w-full lg:mb-0 mb-3">
                                                            <label class="text-[10px]  lg:block ">
                                                                Country
                                                            </label>
                                                            <input type="text"
                                                                class="w-full px-3  border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                v-model="newStudentFull.stud_cnt_info_c_or_p_lvng_h_adr_ctgry_country"
                                                                placeholder="Country" />
                                                        </div>
                                                    </div>
                                                </div>
                                            
                          </div>
                        </div>

                        <div class="lg:flex gap-3 border-t-4 pb-3 border-gray lg:pt-6 pt-3 lg:px-5 px-2">
                            <div class="lg:w-3/12 lg:mb-0 mb-3">
                              <label class="text-sm mb-1 text-black lg:block  font-bold"> 
                                Academic Year </label>
                              <div>
                                <input type="text" disabled class="w-full text-xs bg-gray-100 px-3 border-b-2 border-t-0 border-x-0  shadow-lg rounded-sm h-9" value="A.Y. 2024 to 2025" />
                              </div>
                            </div>
                            <div class="lg:w-3/12 lg:mb-0 mb-3">
                              <label class="text-sm mb-1 text-black lg:block  font-bold"> Academic Term </label>
                              <div>
                                <input type="text" disabled class="w-full text-xs bg-gray-100 px-3 border-b-2 border-t-0 border-x-0  shadow-lg rounded-sm h-9" value="Second Semester" />
                              </div>
                            </div>
                            <div class="w-full lg:mb-0 mb-3">
                              <label class="text-sm mb-1 text-black lg:block  font-bold">Degree Program</label>
                              <select v-model="courseSelection" class="w-full px-3 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm text-black h-9 text-xs" required>
                                <option value="Select Course Program" selected disabled>Select Course Program</option>
                                <option :value="cp" v-for="(cp, i) in courseOrProgramData" :key="i">
                                  {{ cp.college }} | {{ cp.program }}
                                </option>
                              </select>
                            </div>
                          </div>

                              <div class="parents">
                                <div>
                                        <div class="parents lg:flex">
                                            <div class="border-b-4 lg:px-5 px-3 lg:py-5 lg:w-4/12 w-full">
                                                <div>
                                                    <div>
                                                        <p
                                                            class="text-green-800 uppercase font-bold mb-3 whitespace-nowrap">
                                                            Father Information
                                                        </p>
                                                    </div>
                                                    <div
                                                        class="flex bg-green-600 text-white py-2 px-4 font-bold tracking-widest uppercase">
                                                        <div class="flex w-full">
                                                            <input type="radio" value="living"
                                                                v-model="newStudentFull.f_personal_info_vital_life_status"
                                                                class="mr-2" @change="vitalLifeStatusSelection" />
                                                            <label class="text-[10px] ">
                                                                Living
                                                            </label>
                                                        </div>
                                                        <div class="flex">
                                                            <input type="radio" value="deceased"
                                                                v-model="newStudentFull.f_personal_info_vital_life_status"
                                                                @change="vitalLifeStatusSelection" class="mr-2" />
                                                            <label class="text-[10px] ">
                                                                Deceased
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="">
                                                    <div class="py-5">
                                                        <div>
                                                            <p class="lg:mb-3 font-bold text-green-800">
                                                                Father's Complete Name
                                                            </p>
                                                        </div>
                                                        <div class="lg:grid lg:grid-cols-3 gap-3">
                                                            <div class="lg:mb-0 mb-3">
                                                                <label
                                                                    class="text-xs lg:block ">
                                                                    Last Name</label>
                                                                <input type="text"
                                                                    class="w-full px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                    v-model="newStudentFull.f_personal_info_lastname"
                                                                    placeholder="Last Name" />
                                                            </div>
                                                            <div class="lg:mb-0 mb-3">
                                                                <label
                                                                    class="text-xs lg:block ">
                                                                    First Name</label>
                                                                <input type="text"
                                                                    class="w-full px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                    v-model="newStudentFull.f_personal_info_firstname"
                                                                    placeholder="First Name" />
                                                            </div>
                                                            <div class="lg:mb-0 mb-3">
                                                                <label
                                                                    class="text-xs lg:block ">
                                                                    Middle Name</label>
                                                                <input type="text"
                                                                    class="w-full px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                    v-model="newStudentFull.f_personal_info_middlename"
                                                                    placeholder="Middle Name" />
                                                            </div>
                                                            <div v-if="fatherInfo" class="lg:mb-0 mb-3">
                                                                <label
                                                                    class="text-xs lg:block ">
                                                                    Birth Date
                                                                </label>
                                                                <input type="text"
                                                                    class="w-full px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                    v-model="newStudentFull.f_personal_info_birth_date"
                                                                    placeholder="Birth Date" />
                                                            </div>
                                                            <div class="lg:mb-0 mb-3" v-if="fatherInfo">
                                                                <label
                                                                    class="text-xs lg:block ">
                                                                    Age</label>
                                                                <input type="text"
                                                                    class="w-full px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                    v-model="newStudentFull.f_personal_info_age"
                                                                    placeholder="Age" />
                                                            </div>
                                                            <div class="lg:mb-0 mb-3" v-if="fatherInfo">
                                                                <label
                                                                    class="text-xs lg:block ">
                                                                    Civil Status
                                                                </label>
                                                                <input type="text"
                                                                    class="w-full px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                    v-model="newStudentFull.f_personal_info_civil_status"
                                                                    placeholder="Civil Status" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="lg:pb-5" v-if="fatherInfo">
                                                        <p class="lg:mb-3 font-bold text-green-800 text-base ">
                                                          Father Contact Details
                                                        </p>
                                                        <div class="">
                                                            <div>
                                                                <label
                                                                    class="text-base text-black lg:block mb-3">
                                                                    Father Permanent Address
                                                                </label>
                                                                <div class="lg:grid grid-cols-3 gap-3">
                                                                  <div class="lg:mb-0">
                                                                    <label
                                                                      class="text-xs lg:block ">
                                                                      Street or Purok
                                                                  </label>
                                                                    <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.f_cont_info_perm_lvng_h_add_ctgry_street_or_purok"
                                                                        placeholder="Street or Purok" />
                                                                  </div>
                                                                 
                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs lg:block ">
                                                                      Barangay or Village
                                                                  </label>
                                                                    <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.f_cont_info_perm_lvng_h_add_ctgry_barangay_or_village"
                                                                        placeholder="Barangay or Village" />
                                                                  </div>

                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs lg:block ">
                                                                      City or Municipality
                                                                  </label>
                                                                    <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.f_cont_info_perm_lvng_h_add_ctgry_city_or_municipality"
                                                                        placeholder="City or Municipality" />

                                                                  </div>
                                                                  
                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs lg:block ">
                                                                      Zip Code
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.f_cont_info_perm_lvng_h_add_ctgry_zipcode"
                                                                        placeholder="Zip Code" />
                                                                  </div>
                                                                     
                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs lg:block ">
                                                                      Province or State
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.f_cont_info_perm_lvng_h_add_ctgry_province_or_state"
                                                                        placeholder="Province or State" />
                                                                  </div>
             
                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs lg:block ">
                                                                      Region
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.f_cont_info_perm_lvng_h_add_ctgry_region"
                                                                        placeholder="Region" />
                                                                  </div>

                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs lg:block ">
                                                                      Country
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.f_cont_info_perm_lvng_h_add_ctgry_country"
                                                                        placeholder="Country" />
                                                                  </div>
                                                                    


                                                                </div>
                                                            </div>
                                                            <div class="mb-3 lg:flex items-center lg:pt-3">
                                                                <p
                                                                    class="text-xs text-green-900 mr-3 lg:pt-1 lg:text-left text-center">
                                                                    {{
                                                                        newStudentFull.f_cont_info_the_same_adr_question
                                                                    }}
                                                                </p>
                                                                <div
                                                                    class="flex gap-3 pt-1 lg:mx-0 mx-auto w-fit lg:mb-0 mb-4 lg:mt-0 mt-2">
                                                                    <div @click="theSameAddressBtn('yesFatherContactInfo')"
                                                                        class="text-xs capitalize cursor-pointer px-3 rounded-lg hover:text-green-800 hover:bg-white border-2 border-green-800"
                                                                        :class="newStudentFull.f_cont_info_the_same_adr_answer === 'yes' ? 'text-white bg-green-800' : 'text-green-800 bg-white border-2'">
                                                                        yes</div>
                                                                    <div @click="theSameAddressBtn('noFatherContactInfo')"
                                                                        class="text-xs capitalize cursor-pointer  px-3 rounded-lg hover:text-red-800 hover:bg-white border-2 border-red-800"
                                                                        :class="newStudentFull.f_cont_info_the_same_adr_answer === 'no' ? 'text-white bg-red-800' : 'text-red-800 bg-white border-2'">
                                                                        no</div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                :class="newStudentFull.f_cont_info_the_same_adr_answer === 'yes' ? 'hidden' : ''">
                                                                <label
                                                                    class="text-base  lg:block ">
                                                                    Father Current Address
                                                                </label>
                                                                <div class="lg:grid grid-cols-3 gap-3">
                                                                  
                                                                  <div class="lg:mb-0">
                                                                    <label
                                                                      class="text-xs  lg:block ">
                                                                      Street or Purok
                                                                  </label>
                                                                    <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.f_cont_info_curnt_or_pr_lvng_h_adr_ctgy_street_or_purok"
                                                                        placeholder="Street or Purok" />
                                                                  </div>
                                                                 
                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs  lg:block ">
                                                                      Barangay or Village
                                                                  </label>
                                                                    <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.f_cont_info_curnt_or_pr_lvng_h_adr_ctgy_barangay_or_village"
                                                                        placeholder="Barangay or Village" />
                                                                  </div>

                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs  lg:block ">
                                                                      City or Municipality
                                                                  </label>
                                                                    <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.f_cont_info_curnt_or_pr_lvng_h_adr_ctgy_city_or_municipality"
                                                                        placeholder="City or Municipality" />

                                                                  </div>
                                                                  
                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs  lg:block ">
                                                                      Zip Code
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.f_cont_info_curnt_or_pr_lvng_h_adr_ctgy_zipcode"
                                                                        placeholder="Zip Code" />
                                                                  </div>
                                                                     
                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs  lg:block ">
                                                                      Province or State
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.f_cont_info_curnt_or_pr_lvng_h_adr_ctgy_province_or_state"
                                                                        placeholder="Province or State" />
                                                                  </div>
             
                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs  lg:block ">
                                                                      Region
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.f_cont_info_curnt_or_pr_lvng_h_adr_ctgy_region"
                                                                        placeholder="Region" />
                                                                  </div>

                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs  lg:block ">
                                                                      Country
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.f_cont_info_curnt_or_pr_lvng_h_adr_ctgy_country"
                                                                        placeholder="Country" />
                                                                  </div>

                                                                </div>
                                                            </div>
                                                            <div class="lg:flex gap-3">
                                                                <div class="w-full mb-3">
                                                                    <label
                                                                        class="text-xs text-black lg:block ">
                                                                        Contact Number
                                                                    </label>
                                                                    <input type="text"
                                                                        class="w-full px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.f_contact_info_contact_number"
                                                                        placeholder="Contact Number" />
                                                                </div>
                                                                <div class="w-full">
                                                                    <label
                                                                        class="text-xs text-black lg:block ">
                                                                        Email Address
                                                                    </label>
                                                                    <input type="email"
                                                                        class="w-full px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.f_contact_info_contact_email_address"
                                                                        placeholder="Email Address" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="pb-5" v-if="fatherInfo">
                                                        <p class="lg:mb-3 mb-2 font-bold text-green-800">
                                                            Father Employment
                                                            Details</p>
                                                        <div class="lg:grid lg:grid-cols-2 gap-3">
                                                            <div class=" block">
                                                                <label
                                                                    class="text-xs lg:block ">
                                                                    Highest Education Completed
                                                                </label>
                                                                <input type="text"
                                                                    class="w-full px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                    v-model="newStudentFull.f_emp_info_highest_education_completed"
                                                                    placeholder="Highest Education Completed" />
                                                            </div>
                                                            <div class=" block">
                                                                <label
                                                                    class="text-xs lg:block ">
                                                                    Occupation
                                                                </label>
                                                                <input type="text"
                                                                    class="w-full px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                    v-model="newStudentFull.f_emp_info_occupation"
                                                                    placeholder="Occupation" />
                                                            </div>
                                                            <div class=" block">
                                                                <label
                                                                    class="text-xs lg:block ">
                                                                    Employment Status
                                                                </label>
                                                                <input type="text"
                                                                    class="w-full px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                    v-model="newStudentFull.f_emp_info_employment_status"
                                                                    placeholder="Employment Status" />
                                                            </div>
                                                            <div class=" block">
                                                                <label
                                                                    class="text-xs lg:block ">
                                                                    Gross Monthly Income
                                                                </label>
                                                                <input type="text"
                                                                    class="w-full px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                    v-model="newStudentFull.f_emp_info_gross_monthly_income"
                                                                    placeholder="Gross Monthly Income" />
                                                            </div>
                                                            <div class=" block">
                                                                <label
                                                                    class="text-xs lg:block ">
                                                                    Employer or Company
                                                                </label>
                                                                <input type="text"
                                                                    class="w-full px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                    v-model="newStudentFull.f_emp_info_employer_or_company"
                                                                    placeholder="Employer or Company" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="border-b-4 lg:px-5 px-3 py-5 lg:w-4/12 w-full">
                                                <div>
                                                    <div>
                                                        <p
                                                            class="text-green-800 uppercase font-bold mb-3 whitespace-nowrap">
                                                            Mother Information
                                                        </p>
                                                    </div>
                                                    <div
                                                        class="flex bg-green-600 text-white py-2 px-4 font-bold tracking-widest uppercase">
                                                        <div class="flex w-full">
                                                            <input type="radio" value="living"
                                                                v-model="newStudentFull.m_personal_info_vital_life_status"
                                                                class="mr-2" @change="vitalLifeStatusSelection" />
                                                            <label class="text-[10px] ">
                                                                Living
                                                            </label>
                                                        </div>
                                                        <div class="flex">
                                                            <input type="radio" value="deceased"
                                                                v-model="newStudentFull.m_personal_info_vital_life_status"
                                                                @change="vitalLifeStatusSelection" class="mr-2" />
                                                            <label class="text-[10px] ">
                                                                Deceased
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="">
                                                    <div class="py-5">
                                                      <div>
                                                            <p class="lg:mb-3 font-bold text-green-800">
                                                                Mother's Complete Name (Name Before Marriage)
                                                            </p>
                                                        </div>
                                                       
                                                        <div class="lg:grid lg:grid-cols-3 gap-3">
                                                            <div>
                                                                <label
                                                                    class="text-xs lg:block ">
                                                                    Last Name</label>
                                                                <input type="text"
                                                                    class="w-full  px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                    v-model="newStudentFull.m_personal_info_lastname"
                                                                    placeholder="Last Name" />
                                                            </div>
                                                            <div>
                                                                <label
                                                                    class="text-xs lg:block ">
                                                                    First Name</label>
                                                                <input type="text"
                                                                    class="w-full  px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                    v-model="newStudentFull.m_personal_info_firstname"
                                                                    placeholder="First Name" />
                                                            </div>
                                                            <div>
                                                                <label
                                                                    class="text-xs lg:block ">
                                                                    Middle Name</label>
                                                                <input type="text"
                                                                    class="w-full  px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                    v-model="newStudentFull.m_personal_info_middlename"
                                                                    placeholder="Middle Name" />
                                                            </div>
                                                            <div v-if="motherInfo">
                                                                <label
                                                                    class="text-xs lg:block ">
                                                                    Birth Date
                                                                </label>
                                                                <input type="text"
                                                                    class="w-full  px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                    v-model="newStudentFull.m_personal_info_birth_date"
                                                                    placeholder="Birth Date" />
                                                            </div>
                                                            <div v-if="motherInfo">
                                                                <label
                                                                    class="text-xs lg:block ">
                                                                    Age</label>
                                                                <input type="text"
                                                                    class="w-full  px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                    v-model="newStudentFull.m_personal_info_age"
                                                                    placeholder="Age" />
                                                            </div>
                                                            <div v-if="motherInfo">
                                                                <label
                                                                    class="text-xs lg:block ">
                                                                    Civil Status
                                                                </label>
                                                                <input type="text"
                                                                    class="w-full  px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                    v-model="newStudentFull.m_personal_info_civil_status"
                                                                    placeholder="Civil Status" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="pb-5" v-if="motherInfo">
                                                        <p class="lg:mb-3 mb-2 font-bold text-green-800">
                                                          Mother Contact Details
                                                        </p>
                                                        <div class="">
                                                          <div class="">
                                                            <div>
                                                                <label
                                                                    class="text-base text-black lg:block mb-3">
                                                                    Mother Permanent Address
                                                                </label>
                                                                <div class="lg:grid grid-cols-3 gap-3">
                                                                  <div class="lg:mb-0">
                                                                    <label
                                                                      class="text-xs lg:block ">
                                                                      Street or Purok
                                                                  </label>
                                                                    <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.m_contact_info_perm_lvng_home_add_ctgy_street_or_purok"
                                                                        placeholder="Street or Purok" />
                                                                  </div>
                                                                 
                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs lg:block ">
                                                                      Barangay or Village
                                                                  </label>
                                                                    <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.m_contact_info_perm_lvng_home_add_ctgy_barangay_or_village"
                                                                        placeholder="Barangay or Village" />
                                                                  </div>

                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs lg:block ">
                                                                      City or Municipality
                                                                  </label>
                                                                    <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.m_contact_info_perm_lvng_home_add_ctgy_city_or_municipality"
                                                                        placeholder="City or Municipality" />

                                                                  </div>
                                                                  
                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs lg:block ">
                                                                      Zip Code
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.m_contact_info_perm_lvng_home_add_ctgy_zipcode"
                                                                        placeholder="Zip Code" />
                                                                  </div>
                                                                     
                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs lg:block ">
                                                                      Province or State
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.m_contact_info_perm_lvng_home_add_ctgy_province_or_state"
                                                                        placeholder="Province or State" />
                                                                  </div>
             
                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs lg:block ">
                                                                      Region
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.m_contact_info_perm_lvng_home_add_ctgy_region"
                                                                        placeholder="Region" />
                                                                  </div>

                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs lg:block ">
                                                                      Country
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.m_contact_info_perm_lvng_home_add_ctgy_country"
                                                                        placeholder="Country" />
                                                                  </div>
                                                                    


                                                                </div>
                                                            </div>
                                                            <div class="mb-3 lg:flex items-center lg:pt-3">
                                                                <p
                                                                    class="text-xs text-green-900 mr-3 lg:pt-1 lg:text-left text-center">
                                                                    {{
                                                                        newStudentFull.m_contact_info_the_same_address_question
                                                                    }}
                                                                </p>
                                                                <div
                                                                    class="flex gap-3 pt-1 lg:mx-0 mx-auto w-fit lg:mb-0 mb-4 lg:mt-0 mt-2">
                                                                    <div @click="theSameAddressBtn('yesMotherContactInfo')"
                                                                        class="text-xs capitalize cursor-pointer px-3 rounded-lg hover:text-green-800 hover:bg-white border-2 border-green-800"
                                                                        :class="newStudentFull.m_contact_info_the_same_address_no === 'yes' ? 'text-white bg-green-800' : 'text-green-800 bg-white border-2'">
                                                                        yes</div>
                                                                    <div @click="theSameAddressBtn('noMotherContactInfo')"
                                                                        class="text-xs capitalize cursor-pointer  px-3 rounded-lg hover:text-red-800 hover:bg-white border-2 border-red-800"
                                                                        :class="newStudentFull.m_contact_info_the_same_address_no === 'no' ? 'text-white bg-red-800' : 'text-red-800 bg-white border-2'">
                                                                        no</div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                :class="newStudentFull.m_contact_info_the_same_address_no === 'yes' ? 'hidden' : ''">
                                                                <label
                                                                    class="text-base  lg:block mb-3">
                                                                    Mother Current Address
                                                                </label>
                                                                <div class="lg:grid grid-cols-3 gap-3">
                                                                  
                                                                  <div class="lg:mb-0">
                                                                    <label
                                                                      class="text-xs  lg:block ">
                                                                      Street or Purok
                                                                  </label>
                                                                    <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.m_cont_info_crnt_or_prst_lvng_h_adr_ctgry_street_or_purok"
                                                                        placeholder="Street or Purok" />
                                                                  </div>
                                                                 
                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs  lg:block ">
                                                                      Barangay or Village
                                                                  </label>
                                                                    <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.m_cont_info_crnt_or_prst_lvng_h_adr_ctgry_barangay_or_village"
                                                                        placeholder="Barangay or Village" />
                                                                  </div>

                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs  lg:block ">
                                                                      City or Municipality
                                                                  </label>
                                                                    <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.m_cont_info_crnt_or_prst_lvng_h_adr_ctgry_city_or_municipality"
                                                                        placeholder="City or Municipality" />

                                                                  </div>
                                                                  
                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs  lg:block ">
                                                                      Zip Code
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.m_cont_info_crnt_or_prst_lvng_h_adr_ctgry_zipcode"
                                                                        placeholder="Zip Code" />
                                                                  </div>
                                                                     
                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs  lg:block ">
                                                                      Province or State
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.m_cont_info_crnt_or_prst_lvng_h_adr_ctgry_province_or_state"
                                                                        placeholder="Province or State" />
                                                                  </div>
             
                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs  lg:block ">
                                                                      Region
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.m_cont_info_crnt_or_prst_lvng_h_adr_ctgry_region"
                                                                        placeholder="Region" />
                                                                  </div>

                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs  lg:block ">
                                                                      Country
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.m_cont_info_crnt_or_prst_lvng_h_adr_ctgry_country"
                                                                        placeholder="Country" />
                                                                  </div>

                                                                </div>
                                                            </div>
                                                            <div class="lg:flex gap-3">
                                                                <div class="w-full mb-3">
                                                                    <label
                                                                        class="text-xs text-black lg:block ">
                                                                        Contact Number
                                                                    </label>
                                                                    <input type="text"
                                                                        class="w-full px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.m_cont_info_contact_number"
                                                                        placeholder="Contact Number" />
                                                                </div>
                                                                <div class="w-full">
                                                                    <label
                                                                        class="text-xs text-black lg:block ">
                                                                        Email Address
                                                                    </label>
                                                                    <input type="email"
                                                                        class="w-full px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.m_cont_info_contact_email_address"
                                                                        placeholder="Email Address" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    <div class="pb-5" v-if="motherInfo">
                                                        <p class="lg:mb-3 mb-2 font-bold text-green-800">
                                                          Mother Employment
                                                            Details</p>
                                                        <div class="lg:grid lg:grid-cols-2 gap-3">
                                                            <div>
                                                                <label
                                                                    class="text-xs lg:block ">
                                                                    Highest Education Completed
                                                                </label>
                                                                <input type="text"
                                                                    class="w-full px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                    v-model="newStudentFull.m_emp_info_highest_education_completed"
                                                                    placeholder="Highest Education Completed" />
                                                            </div>
                                                            <div>
                                                                <label
                                                                    class="text-xs lg:block ">
                                                                    Occupation
                                                                </label>
                                                                <input type="text"
                                                                    class="w-full px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                    v-model="newStudentFull.m_emp_info_occupation"
                                                                    placeholder="Occupation" />
                                                            </div>
                                                            <div>
                                                                <label
                                                                    class="text-xs lg:block ">
                                                                    Employment Status
                                                                </label>
                                                                <input type="text"
                                                                    class="w-full px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                    v-model="newStudentFull.m_emp_info_employment_status"
                                                                    placeholder="Employment Status" />
                                                            </div>
                                                            <div>
                                                                <label
                                                                    class="text-xs lg:block ">
                                                                    Gross Monthly Income
                                                                </label>
                                                                <input type="text"
                                                                    class="w-full px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                    v-model="newStudentFull.m_emp_info_gross_monthly_income"
                                                                    placeholder="Gross Monthly Income" />
                                                            </div>
                                                            <div>
                                                                <label
                                                                    class="text-xs lg:block ">
                                                                    Employer or Company
                                                                </label>
                                                                <input type="text"
                                                                    class="w-full px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                    v-model="newStudentFull.m_emp_info_employer_or_company"
                                                                    placeholder="Employer or Company" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="border-b-4 lg:px-5 px-3 py-5 lg:w-4/12 w-full">
                                                <div>
                                                    <div>
                                                        <p class="text-green-800 uppercase font-bold m-3">
                                                            Guardian Information
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <div class="flex items-center">
                                                            <label class="text-[10px] mr-3">
                                                                Relation
                                                            </label>
                                                            <input type="text"
                                                                class="w-fit px-3 py-2 border-b border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm text-xs"
                                                                v-model="newStudentFull.lg_prsnl_info_relation_to_student"
                                                                placeholder="Relation" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="">
                                                    <div class="pb-5">
                                                        <p class="lg:my-3 my-2 font-bold text-green-800">
                                                           Guardian 
                                                           Personal
                                                            Details</p>
                                                        <div class="">
                                                            <div class="lg:grid grid-cols-3 gap-3">
                                                                <div>
                                                                    <label
                                                                        class="text-xs lg:block ">
                                                                        Last Name</label>
                                                                    <input type="text"
                                                                        class="w-full mb-3 px-3 border-b-2 border-t-0 border-x-0 
                                                                        border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.lg_prsnl_info_lastname"
                                                                        placeholder="Last Name" />
                                                                </div>

                                                                <div>
                                                                    <label
                                                                        class="text-xs lg:block ">
                                                                        First Name</label>
                                                                    <input type="text"
                                                                        class="w-full mb-3 px-3 border-b-2 border-t-0 border-x-0 
                                                                        border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.lg_prsnl_info_firstname"
                                                                        placeholder="First Name" />
                                                                </div>
                                                                <div>
                                                                    <label
                                                                        class="text-xs lg:block ">
                                                                        Middle Name</label>
                                                                    <input type="text"
                                                                        class="w-full mb-3 px-3 border-b-2 border-t-0 border-x-0 
                                                                        border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.lg_prsnl_info_middlename"
                                                                        placeholder="Middle Name" />
                                                                </div>

                                                                <div>
                                                                    <label
                                                                        class="text-xs lg:block ">
                                                                        Birth Date
                                                                    </label>
                                                                    <input type="text"
                                                                        class="w-full mb-3 px-3 border-b-2 border-t-0 border-x-0 
                                                                        border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.lg_prsnl_info_birth_date"
                                                                        placeholder="Birth Date" />
                                                                </div>
                                                                <div>
                                                                    <label
                                                                        class="text-xs lg:block ">
                                                                        Age</label>
                                                                    <input type="text"
                                                                        class="w-full mb-3 px-3 border-b-2 border-t-0 border-x-0 
                                                                        border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.lg_prsnl_info_age"
                                                                        placeholder="Age" />
                                                                </div>
                                                                <div>
                                                                    <label
                                                                        class="text-xs lg:block ">
                                                                        Civil Status
                                                                    </label>
                                                                    <input type="text"
                                                                        class="w-full mb-3 px-3 border-b-2 border-t-0 border-x-0 
                                                                        border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.lg_prsnl_info_civil_status"
                                                                        placeholder="Civil Status" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                             
                                                    <div class="pb-5">
                                                        <p class="lg:mb-3 mb-2 font-bold text-green-800">
                                                          
                                                          Guardian Contact Details
                                                        </p>
                                                        <div class="">
                                                          <div class="">
                                                            <div>
                                                                <label
                                                                    class="text-base text-black lg:block mb-3">
                                                                    Guardian Permanent Address
                                                                </label>
                                                                <div class="lg:grid grid-cols-3 gap-3">
                                                                  
                                                                  <div class="lg:mb-0">
                                                                    <label
                                                                      class="text-xs  lg:block ">
                                                                      Street or Purok
                                                                  </label>
                                                                    <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.lg_cont_info_perm_lvng_h_adr_ctgy_street_or_purok"
                                                                        placeholder="Street or Purok" />
                                                                  </div>
                                                                 
                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs  lg:block ">
                                                                      Barangay or Village
                                                                  </label>
                                                                    <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.lg_cont_info_perm_lvng_h_adr_ctgy_barangay_or_village"
                                                                        placeholder="Barangay or Village" />
                                                                  </div>

                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs  lg:block ">
                                                                      City or Municipality
                                                                  </label>
                                                                    <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.lg_cont_info_perm_lvng_h_adr_ctgy_city_or_municipality"
                                                                        placeholder="City or Municipality" />

                                                                  </div>
                                                                  
                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs  lg:block ">
                                                                      Zip Code
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.lg_cont_info_perm_lvng_h_adr_ctgy_zipcode"
                                                                        placeholder="Zip Code" />
                                                                  </div>
                                                                     
                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs  lg:block ">
                                                                      Province or State
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.lg_cont_info_perm_lvng_h_adr_ctgy_province_or_state"
                                                                        placeholder="Province or State" />
                                                                  </div>
             
                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs  lg:block ">
                                                                      Region
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.lg_cont_info_perm_lvng_h_adr_ctgy_region"
                                                                        placeholder="Region" />
                                                                  </div>

                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs  lg:block ">
                                                                      Country
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.lg_cont_info_perm_lvng_h_adr_ctgy_country"
                                                                        placeholder="Country" />
                                                                  </div>

                                                                </div>

                                                            </div>
                                                            <div class="mb-3 lg:flex items-center lg:pt-3">
                                                                <p
                                                                    class="text-xs text-green-900 mr-3 lg:pt-1 lg:text-left text-center">
                                                                    {{
                                                                        newStudentFull.lg_cont_info_the_same_address_question
                                                                    }}
                                                                </p>
                                                                <div
                                                                    class="flex gap-3 pt-1 lg:mx-0 mx-auto w-fit lg:mb-0 mb-4 lg:mt-0 mt-2">
                                                                    <div @click="theSameAddressBtn('yesGuardianContactInfo')"
                                                                        class="text-xs capitalize cursor-pointer px-3 rounded-lg hover:text-green-800 hover:bg-white border-2 border-green-800"
                                                                        :class="newStudentFull.lg_cont_info_the_same_address_answer === 'yes' ? 'text-white bg-green-800' : 'text-green-800 bg-white border-2'">
                                                                        yes</div>
                                                                    <div @click="theSameAddressBtn('noGuardianContactInfo')"
                                                                        class="text-xs capitalize cursor-pointer  px-3 rounded-lg hover:text-red-800 hover:bg-white border-2 border-red-800"
                                                                        :class="newStudentFull.lg_cont_info_the_same_address_answer === 'no' ? 'text-white bg-red-800' : 'text-red-800 bg-white border-2'">
                                                                        no</div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                :class="newStudentFull.lg_cont_info_the_same_address_answer === 'yes' ? 'hidden' : ''">
                                                                <label
                                                                    class="text-base  lg:block mb-2">
                                                                    Guardian Current Address
                                                                </label>
                                                    





                                                                <div class="lg:grid grid-cols-3 gap-3">
                                                                  <div class="lg:mb-0">
                                                                    <label
                                                                      class="text-xs lg:block ">
                                                                      Street or Purok
                                                                  </label>
                                                                    <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.lg_cont_info_crnt_or_prst_lvng_h_adr_ctry_street_or_purok"
                                                                        placeholder="Street or Purok" />
                                                                  </div>
                                                                 
                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs lg:block ">
                                                                      Barangay or Village
                                                                  </label>
                                                                    <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.lg_cont_info_crnt_or_prst_lvng_h_adr_ctry_barangay_or_village"
                                                                        placeholder="Barangay or Village" />
                                                                  </div>

                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs lg:block ">
                                                                      City or Municipality
                                                                  </label>
                                                                    <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.lg_cont_info_crnt_or_prst_lvng_h_adr_ctry_city_or_municipality"
                                                                        placeholder="City or Municipality" />

                                                                  </div>
                                                                  
                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs lg:block ">
                                                                      Zip Code
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.lg_cont_info_crnt_or_prst_lvng_h_adr_ctry_zipcode"
                                                                        placeholder="Zip Code" />
                                                                  </div>
                                                                     
                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs lg:block ">
                                                                      Province or State
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.lg_cont_info_crnt_or_prst_lvng_h_adr_ctry_province_or_state"
                                                                        placeholder="Province or State" />
                                                                  </div>
             
                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs lg:block ">
                                                                      Region
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.lg_cont_info_crnt_or_prst_lvng_h_adr_ctry_region"
                                                                        placeholder="Region" />
                                                                  </div>

                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs lg:block ">
                                                                      Country
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.lg_cont_info_crnt_or_prst_lvng_h_adr_ctry_country"
                                                                        placeholder="Country" />
                                                                  </div>
                                                                    


                                                                </div>
                                                            </div>
                                                            <div class="lg:flex gap-3">
                                                                <div class="w-full mb-3">
                                                                    <label
                                                                        class="text-xs  lg:block ">
                                                                        Contact Number
                                                                    </label>
                                                                    <input type="text"
                                                                        class="w-full px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.lg_cont_info_contact_number"
                                                                        placeholder="Contact Number" />
                                                                </div>
                                                                <div class="w-full">
                                                                    <label
                                                                        class="text-xs  lg:block ">
                                                                        Email Address
                                                                    </label>
                                                                    <input type="email"
                                                                        class="w-full px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.lg_cont_info_contact_email_address"
                                                                        placeholder="Email Address" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    <div class="pb-5">
                                                        <p class="lg:mb-3 mb-2 font-bold text-green-800">
                                                          Guardian
                                                          Employment
                                                            Details</p>
                                                        <div class="lg:grid lg:grid-cols-2 gap-3">
                                                            <div>
                                                                <label
                                                                    class="text-xs  lg:block ">
                                                                    Highest Education Completed
                                                                </label>
                                                                <input type="text" class="w-full px-3 border-b-2 border-t-0 border-x-0 
                                                                    border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                    v-model="newStudentFull.lg_emp_info_highest_education_completed"
                                                                    placeholder="Highest Education Completed" />
                                                            </div>
                                                            <div>
                                                                <label
                                                                    class="text-xs  lg:block ">
                                                                    Occupation
                                                                </label>
                                                                <input type="text" class="w-full px-3 border-b-2 border-t-0 border-x-0 
                                                                    border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                    v-model="newStudentFull.lg_emp_info_occupation"
                                                                    placeholder="Occupation" />
                                                            </div>
                                                            <div>
                                                                <label
                                                                    class="text-xs  lg:block ">
                                                                    Employment Status
                                                                </label>
                                                                <input type="text" class="w-full px-3 border-b-2 border-t-0 border-x-0 
                                                                    border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                    v-model="newStudentFull.lg_emp_info_employment_status"
                                                                    placeholder="Employment Status" />
                                                            </div>
                                                            <div>
                                                                <label
                                                                    class="text-xs  lg:block ">
                                                                    Gross Monthly Income
                                                                </label>
                                                                <input type="text" class="w-full px-3 border-b-2 border-t-0 border-x-0 
                                                                    border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                    v-model="newStudentFull.lg_emp_info_gross_monthly_income"
                                                                    placeholder="Gross Monthly Income" />
                                                            </div>
                                                            <div>
                                                                <label
                                                                    class="text-xs  lg:block ">
                                                                    Employer or Company
                                                                </label>
                                                                <input type="text" class="w-full px-3 border-b-2 border-t-0 border-x-0 
                                                                    border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                    v-model="newStudentFull.lg_emp_info_employer_or_company"
                                                                    placeholder="Employer or Company" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="guardian">
                                            <div class="border-b-4 lg:px-5 px-3 py-5">
                                                <p class="text-green-800 uppercase font-bold mb-3 tracking-tighter ">
                                                    Emergency Contact Information
                                                </p>
                                                <div class="">
                                                    <div class="lg:grid grid-cols-6 gap-3">
                                                        <div class="w-full">
                                                            <label class="text-xs lg:block ">
                                                                Title</label>

                                                            <input type="text" class="w-full px-3 border-b-2 border-t-0 border-x-0 
                                                                border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                v-model="newStudentFull.stud_emrgcy_cont_info_p_info_title"
                                                                placeholder="Title" />
                                                        </div>
                                                        <div class="w-full">
                                                            <label class="text-xs lg:block ">
                                                                Last Name</label>

                                                            <input type="text" class="w-full px-3 border-b-2 border-t-0 border-x-0 
                                                                border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                v-model="newStudentFull.stud_emrgcy_cont_info_p_info_lastname"
                                                                placeholder="Last Name" />
                                                        </div>
                                                        <div class="w-full">
                                                            <label class="text-xs lg:block ">
                                                                First Name</label>

                                                            <input type="text" class="w-full px-3 border-b-2 border-t-0 border-x-0 
                                                                border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                v-model="newStudentFull.stud_emrgcy_cont_info_p_info_firstname"
                                                                placeholder="First Name" />
                                                        </div>
                                                        <div class="w-full">
                                                            <label class="text-xs lg:block ">
                                                                Middle Name</label>

                                                            <input type="text" class="w-full px-3 border-b-2 border-t-0 border-x-0 
                                                                border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                v-model="newStudentFull.stud_emrgcy_cont_info_p_info_middlename"
                                                                placeholder="Middle Name" />
                                                        </div>
                                                        <div class="w-full">
                                                            <label class="text-xs lg:block ">
                                                                Extension or Suffix Name</label>

                                                            <input type="text" class="w-full px-3 border-b-2 border-t-0 border-x-0 
                                                                border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                v-model="newStudentFull.stud_emrgcy_cont_info_p_info_extension_or_suffix_name"
                                                                placeholder="Extension or Suffix Name" />
                                                        </div>

                                                        <div class="w-full">
                                                            <label class="text-xs lg:block ">
                                                                Relation to Student</label>
                                                            <input type="text" class="w-full px-3 border-b-2 border-t-0 border-x-0 
                                                                border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                v-model="newStudentFull.stud_emrgcy_cont_info_p_info_relation_to_student"
                                                                placeholder="Relation to Student" />
                                                        </div>
                                                    </div>

                                                    <div class="pt-5 pb-2">
                                                        <p class="mb-2 font-bold text-green-800">Emergency Contact Info Details</p>
                                                        <div class="">
                                                            <h1 class="font-bold text-base mb-2">Address</h1>
                                                            <div class="mb-2">
                                                                
                                                                <div class="lg:flex gap-3">
                                                                  <div class="w-full lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs text-black lg:block ">
                                                                      Street or Purok
                                                                  </label>
                                                                    <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.stud_emrgcy_cont_info_adr_street_or_purok"
                                                                        placeholder="Street or Purok" />
                                                                  </div>
                                                                 
                                                                  <div class="w-full lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs text-black lg:block ">
                                                                      Barangay or Village
                                                                  </label>
                                                                    <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.stud_emrgcy_cont_info_adr_barangay_or_village"
                                                                        placeholder="Barangay or Village" />
                                                                  </div>

                                                                  <div class="w-full lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs text-black lg:block ">
                                                                      City or Municipality
                                                                  </label>
                                                                    <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.stud_emrgcy_cont_info_adr_city_or_municipality"
                                                                        placeholder="City or Municipality" />

                                                                  </div>
                                                                  
                                                                  <div class="w-full lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs text-black lg:block ">
                                                                      Zip Code
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.stud_emrgcy_cont_info_adr_zipcode"
                                                                        placeholder="Zip Code" />
                                                                  </div>
                                                                     
                                                                  <div class="w-full lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs text-black lg:block ">
                                                                      Province or State
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.stud_emrgcy_cont_info_adr_province_or_state"
                                                                        placeholder="Province or State" />
                                                                  </div>
             
                                                                  <div class="w-full lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs text-black lg:block ">
                                                                      Region
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.stud_emrgcy_cont_info_adr_region"
                                                                        placeholder="Region" />
                                                                  </div>

                                                                  <div class="w-full lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs text-black lg:block ">
                                                                      Country
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.stud_emrgcy_cont_info_adr_country"
                                                                        placeholder="Country" />
                                                                  </div>
                                                                    


                                                                </div>
                                                            </div>
                                                           
                                                            <div class="lg:flex gap-3">
                                                                <div class="w-full">
                                                                    <label
                                                                        class="text-xs  lg:block font-bold mb-2">
                                                                        Primary Contact Number
                                                                    </label>
                                                                    <input type="text"
                                                                        class="w-full px-3 border-b-2 border-t-0 border-x-0 
                                                                        border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.stud_emrgcy_cont_info_cnt_primary_number"
                                                                        placeholder="Primary Contact Number" />
                                                                </div>
                                                                <div class="w-full">
                                                                    <label
                                                                        class="text-xs  lg:block font-bold mb-2">
                                                                        Alternate Contact Number
                                                                    </label>
                                                                    <input type="text"
                                                                        class="w-full px-3 border-b-2 border-t-0 border-x-0 
                                                                        border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.stud_emrgcy_cont_info_cnt_alternate_number"
                                                                        placeholder="Alternate Contact Number" />
                                                                </div>
                                                                <div class="w-full">
                                                                    <label
                                                                        class="text-xs  lg:block font-bold mb-2">
                                                                        Email Address
                                                                    </label>
                                                                    <input type="email"
                                                                        class="w-full px-3 border-b-2 border-t-0 border-x-0 
                                                                        border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="newStudentFull.stud_emrgcy_cont_info_cnt_email_address"
                                                                        placeholder="Email Address" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- <div class="border-b-4 lg:px-5 px-3 py-5">
                                            <p class="text-green-800 uppercase font-bold mb-3">Sibling Information</p>
                                            <div>
                                                <div class="lg:ml-2">
                                                    <div class="hover:text-green-800 text-white border border-green-800 cursor-pointer w-fit mb-3 hover:bg-white bg-green-800 font-bold uppercase text-xs rounded-md px-3 py-2 text-center lg:-ml-2"
                                                        @click="onlyChildBtn()">
                                                        Only Child
                                                    </div>
                                                </div>
                                                <div>
                                                    <div v-if="siblingForm"
                                                        class="lg:flex lg:shadow rounded-xl lg:p-5 mt-2 mb-3 relative"
                                                        v-for="(b, i) in newStudentFull.siblings" :key="i">
                                                        <div class="flex items-center mr-3">
                                                            <div
                                                                class="flex items-center lg:mr-3 mt-3 font-bold justify-center bg-green-900 text-white rounded-full h-8 w-8 py-2 px-2.5 text-sm mb-2">
                                                                {{ i + 1 }}
                                                            </div>
                                                        </div>
                                                        <div class="w-full">
                                                            <div class="lg:flex personal-details mb-4 gap-3">
                                                                <div class="w-full lg:mb-0 mb-2">
                                                                    <label
                                                                        class="text-[10px] text-gray-300 lg:block ">
                                                                        Last Name
                                                                    </label>
                                                                    <input
                                                                        class="w-full px-3 border-b-2 border-t-0 border-x-0 
                                                                        border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        placeholder="Last Name" type="text"
                                                                        v-model="b.lastname" />
                                                                </div>
                                                                <div class="w-full lg:mb-0 mb-2">
                                                                    <label
                                                                        class="text-[10px] text-gray-300 lg:block ">
                                                                        First Name
                                                                    </label>
                                                                    <input
                                                                        class="w-full px-3 border-b-2 border-t-0 border-x-0 
                                                                        border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        placeholder="First Name" type="text"
                                                                        v-model="b.firstname" />
                                                                </div>
                                                                <div class="w-full lg:mb-0 mb-2">
                                                                    <label
                                                                        class="text-[10px] text-gray-300 lg:block ">
                                                                        Middle Name
                                                                    </label>
                                                                    <input
                                                                        class="w-full px-3 border-b-2 border-t-0 border-x-0 
                                                                        border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        placeholder="Middle Name" type="text"
                                                                        v-model="b.middlename" />
                                                                </div>
                                                                <div class="w-full lg:mb-0 mb-2">
                                                                    <label
                                                                        class="text-[10px] text-gray-300 lg:block ">
                                                                        Birth Date
                                                                    </label>
                                                                    <input
                                                                        class="w-full px-3 border-b-2 border-t-0 border-x-0 
                                                                        border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        placeholder="Birth Date" type="text"
                                                                        v-model="b.birth_date" />
                                                                </div>
                                                                <div class="w-full lg:mb-0 mb-2">
                                                                    <label
                                                                        class="text-[10px] text-gray-300 lg:block ">
                                                                        Age
                                                                    </label>
                                                           
                                                                    <input
                                                                        class="w-full px-3 border-b-2 border-t-0 border-x-0 
                                                                        border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        placeholder="Age" type="text"
                                                                        v-model="b.age" />
                                                                </div>
                                                                <div class="w-full lg:mb-0 mb-2">
                                                                    <label
                                                                        class="text-[10px] text-gray-300 lg:block ">
                                                                        Civil Status
                                                                    </label>
                                                                    <input
                                                                        class="w-full px-3 border-b-2 border-t-0 border-x-0 
                                                                        border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        placeholder="Civil Status" type="text"
                                                                        v-model="b.civil_status" />
                                                                </div>
                                                            </div>
                                                            <div class="lg:flex educational-details gap-3">
                                                                <div class="w-full lg:mb-0 mb-2">
                                                                    <label
                                                                        class="text-[10px] text-gray-300 lg:block ">
                                                                        Grade or Year Level
                                                                    </label>
                                                                    <input
                                                                        class="w-full px-3 border-b-2 border-t-0 border-x-0 
                                                                        border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="b.grade_or_year_level"
                                                                        placeholder="Grade or Year Level" type="text" />
                                                                </div>
                                                                <div class="w-full lg:mb-0 mb-2">
                                                                    <label
                                                                        class="text-[10px] text-gray-300 lg:block ">
                                                                        School or Graduated From
                                                                    </label>
                                                                    <input
                                                                        class="w-full px-3 border-b-2 border-t-0 border-x-0 
                                                                        border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        placeholder="School or Graduated From"
                                                                        type="text"
                                                                        v-model="b.school_or_graduated_from" />
                                                                </div>
                                                                <div class="w-full lg:mb-0 mb-2">
                                                                    <label
                                                                        class="text-[10px] text-gray-300 lg:block ">
                                                                        Highest Education Completed
                                                                    </label>
                                                                    <input
                                                                        class="w-full px-3 border-b-2 border-t-0 border-x-0 
                                                                        border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        placeholder="Highest Education Completed"
                                                                        type="text"
                                                                        v-model="b.highest_education_completed" />
                                                                </div>
                                                                <div class="w-full lg:mb-0 mb-2">
                                                                    <label
                                                                        class="text-[10px] text-gray-300 lg:block ">
                                                                        Occupation
                                                                    </label>
                                                                    <input
                                                                        class="w-full px-3 border-b-2 border-t-0 border-x-0 
                                                                        border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="b.occupation" placeholder="Occupation"
                                                                        type="text" />
                                                                </div>
                                                                <div class="w-full lg:mb-0 mb-2">
                                                                    <label
                                                                        class="text-[10px] text-gray-300 lg:block ">
                                                                        Employer or Company
                                                                    </label>
                                                                    <input
                                                                        class="w-full px-3 border-b-2 border-t-0 border-x-0 
                                                                        border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="b.employer_or_company"
                                                                        placeholder="Employer or Company" type="text" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="flex items-center lg:static absolute top-3 right-0"
                                                            v-if="newStudentFull.siblings.length > 1">
                                                            <div class="mr-2 lg:hidden block">Remove</div>
                                                            <div class="flex items-center lg:ml-5 lg:mt-5 justify-center hover:bg-white bg-red-900 border border-red-900 hover:text-red-900 text-white rounded-full h-8 w-8 pt-2 pb-1.5 px-2.5 text-sm"
                                                                @click="removeRowSibling(b)">
                                                                <i class="fa fa-close"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="lg:ml-2">
                                                        <div class="hover:text-[#f4ca16] border border-[#f4ca16] text-white cursor-pointer w-fit mb-3 hover:bg-white bg-[#f4ca16] font-bold uppercase text-xs rounded-md px-3 py-2 text-center lg:-ml-2"
                                                            @click="addSibling">
                                                            <i class="fa fa-plus mr-1"></i> Add Sibling
                                                        </div>
                                                    </div>
                                                </div>



                                            </div>

                                        </div> -->
                                       


                                    </div>
                        </div>
                        <div>
                          <div>
                                        <div class="border-b-4 lg:px-5 py-5">
                                            <div class="lg:px-0 px-3">
                                                <p class="text-green-800 uppercase font-bold mb-3">
                                                    EDUCATIONAL INFORMATION
                                                </p>
                                                <p class="text-xs text-gray-500 mb-3">
                                                    Please add all your previous educational detail information and
                                                    double
                                                    click the tabs to fill.
                                                </p>
                                            </div>
                                            <div class="shadow pt-5 pb-2 lg:px-4 bg-green-100">
                                                <div class="mb-3 lg:flex w-full gap-5 lg:px-0 px-2">
                                                    <div class="lg:flex items-center lg:w-full cursor-pointer lg:mb-0 mb-2"
                                                        v-for="(b, i) in newStudentFull.student_educational_info.tab"
                                                        :key="i" @click="expandEducationalDetails(b)">
                                                        <span
                                                            class="justify-between flex w-full items-center px-2 py-1 h-fit whitespace-nowrap hover:bg-green-700 hover:text-white rounded-lg"
                                                            :class="b === currentEducationalTab ? 'bg-white text-green-800 font-bold border-b-4 border-green-900 border-t border-x py-1.5' : 'bg-green-900 border-4 border-green-900 text-white'">
                                                            <span class="lg:text-sm text-xs">
                                                                {{ b }}
                                                            </span>
                                                            <i class="fa fa-angle-double-right rotate-90 ml-5"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="lg:px-0 px-2" v-for="(b, i) in educationalActiveTabFilter" :key="i">
                                                    <div class="lg:flex items-end rounded-xl gap-2 mb-3 relative">
                                                        <div class="lg:w-[800px] w-full lg:mb-0 mb-1">
                                                            <label
                                                                class="text-[10px] text-gray-900 mb-1 lg:block  lg:whitespace-nowrap">
                                                                Education Level
                                                            </label>
                                                            <input
                                                                class="w-full px-3 capitalize font-bold text-green-800 border-x-0 border-t-0 border-b-2 border-green-900 shadow-lg rounded-sm h-9 text-xs text-center"
                                                                v-model="b.education_level"
                                                                placeholder="Education Level" type="text" disabled />
                                                        </div>
                                                        <div class="w-full lg:mb-0 mb-1">
                                                            <label
                                                                class="text-[10px] text-gray-900 mb-1 lg:block ">
                                                                Name of Previous School
                                                            </label>
                                                            <input
                                                                class="w-full px-3 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                v-model="b.name_of_previous_school"
                                                                placeholder="Name of Previous School" type="text" />
                                                        </div>
                                                        <div class="w-full lg:mb-0 mb-1">
                                                            <label
                                                                class="text-[10px] text-gray-900 mb-1 lg:block ">
                                                                Track or Program
                                                            </label>
                                                            <input
                                                                class="w-full px-3 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                v-model="b.track_or_program"
                                                                placeholder="Track or Program" type="text" />
                                                        </div>
                                                        <div class="w-full lg:mb-0 mb-1">
                                                            <label
                                                                class="text-[10px] text-gray-900 mb-1 lg:block ">
                                                                Highest Honors Received
                                                            </label>
                                                            <input
                                                                class="w-full px-3 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                v-model="b.highest_honors_received"
                                                                placeholder="Highest Honors Received" type="text" />
                                                        </div>
                                                        <div class="w-full lg:mb-0 mb-1">
                                                            <label
                                                                class="text-[10px] text-gray-900 mb-1 lg:block ">
                                                                City or Municipality and Province
                                                            </label>
                                                            <input
                                                                class="w-full px-3 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                v-model="b.city_or_municipality_and_province"
                                                                placeholder="City or Municipality and Province"
                                                                type="text" />
                                                        </div>
                                                        <div class="w-full lg:mb-0 mb-1">
                                                            <label
                                                                class="text-[10px] text-gray-900 mb-1 lg:block ">
                                                                Year Last Attended or Graduated
                                                            </label>
                                                            <input
                                                                class="w-full px-3 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                v-model="b.year_graduated_or_attended"
                                                                placeholder="Year Last Attended or Graduated"
                                                                type="text" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="shadow py-2 lg:px-3 px-2 mt-4 bg-green-100">
                                                <div class="lg:flex lg:py-3 py-2 gap-3">
                                                    <div class="w-full lg:mb-0 mb-3">
                                                        <label class="text-xs text-gray-700">
                                                            Learner Reference Number
                                                        </label>
                                                        <input
                                                            class="w-full px-3 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                            placeholder="Learner Reference Number" type="text"
                                                            v-model="newStudentFull.student_education_info_num_learner_reference_number" />
                                                    </div>
                                                    <div class="w-full lg:mb-0 mb-3">
                                                        <label class="text-xs text-gray-700">CHEd Award Number</label>
                                                        <input
                                                            class="w-full px-3 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                            placeholder="CHEd Award Number" type="text"
                                                            v-model="newStudentFull.student_education_info_num_ched_award_number" />
                                                    </div>
                                                    <div class="w-full lg:mb-0 mb-3">
                                                        <label class="text-xs text-gray-700">DWSD Household
                                                            Number</label>
                                                        <input
                                                            class="w-full px-3 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                            placeholder="DWSD Household Number" type="text"
                                                            v-model="newStudentFull.student_education_info_num_dswd_household_number" />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                       
                                       
                                    </div>
                        </div>

                        <div class="survey">
                          <div class="border-b-4 lg:px-10 px-3 py-5 lg:flex items-center">
                                        <p
                                            class="text-green-800 font-semibold lg:w-[150px] pt-2 text-sm lg:mr-5 lg:mb-3 mb-4">
                                            What are your Top 3 programs of choice?
                                        </p>
                                        <div class="w-full">
                                            <div class="lg:flex gap-3">
                                                <div class="w-full lg:block flex items-center lg:mb-0 mb-3">
                                                    <label class="text-xs text-gray-700 lg:ml-0 mr-2 w-[20px]">1st
                                                    
                                                    </label>
                                                    <select
                                                        v-model="newStudentFull.stud_choice_trck_prog_one_course_program"
                                                        class="w-full px-3 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs">
                                                        <option value="" disabled selected>Select Course Program
                                                        </option>
                                                        <option :value="cp" v-for="(cp, i) in programDataOnly"
                                                            :key="i">
                                                            {{ cp }}
                                                        </option>
                                                    </select>
                                                </div>
                                                <div class="w-full lg:block flex items-center lg:mb-0 mb-3">
                                                    <label class="text-xs text-gray-700 lg:ml-0 mr-2 w-[20px]">2nd
                                                    
                                                    </label>
                                                    <select
                                                        v-model="newStudentFull.stud_choice_trck_prog_two_course_program"
                                                        class="w-full px-3 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs">
                                                        <option value="" disabled selected>Select Course Program
                                                        </option>
                                                        <option :value="cp" v-for="(cp, i) in programDataOnly"
                                                            :key="i">
                                                            {{ cp }}
                                                        </option>
                                                    </select>
                                                </div>
                                                <div class="w-full lg:block flex items-center lg:mb-0 mb-3">
                                                    <label class="text-xs text-gray-700 lg:ml-0 mr-2 w-[20px]">3rd
                                                    
                                                    </label>
                                                    <select
                                                        v-model="newStudentFull.stud_choice_trck_prog_three_course_program"
                                                        class="w-full px-3 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs">
                                                        <option value="" disabled selected>Select Course Program
                                                        </option>
                                                        <option :value="cp" v-for="(cp, i) in programDataOnly"
                                                            :key="i">
                                                            {{ cp }}
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="border-b-4">
                                        <div class="lg:flex lg:w-9/12 w-11/12 mx-auto gap-40 lg:pb-0 pb-3">
                                            <div class="w-full lg:py-5 pt-3">
                                                <div class="">
                                                    <p class="font-bold text-md text-green-900 mb-2">
                                                        {{ newStudentFull.how_you_learn_about_lsu.question }}
                                                    </p>
                                                    <ul class="lg:ml-2">
                                                        <li v-for="(li, i) in newStudentFull.how_you_learn_about_lsu.list_items"
                                                            :key="i" class="flex mb-3">
                                                            <input class="mr-2" type="checkbox" v-model="li.value"
                                                                :value="li.value" />
                                                            <label class="capitalize text-xs text-green-900">
                                                                {{ li.label }}
                                                            </label>
                                                            <input v-model="li.description" placeholder="please specify"
                                                                :class="li.label === 'Others' && li.value ? '' : 'hidden'"
                                                                class="ml-3 lg:w-44 w-full px-3 capitalize border-b-2 py-1 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-[23px] text-xs" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="w-full lg:py-5 pt-3">
                                                <div class="">
                                                    <p class="font-bold text-md text-green-900 mb-2">
                                                        {{ newStudentFull.reasons_for_choosing_lsu.question }}</p>
                                                    <ul class="lg:ml-2">
                                                        <li v-for="(li, i) in newStudentFull.reasons_for_choosing_lsu.list_items"
                                                            :key="i" class="flex mb-3">
                                                            <input class="mr-2" type="checkbox" v-model="li.value"
                                                                :value="li.value" />
                                                            <label class="capitalize text-xs text-green-900">
                                                                {{ li.label }}
                                                            </label>
                                                            <input v-model="li.description" placeholder="please specify"
                                                                :class="li.label === 'Others' && li.value ? '' : 'hidden'"
                                                                class="ml-3 lg:w-44 w-full px-3 capitalize border-b-2 py-1 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-[23px] text-xs" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="shadow lg:px-8 px-3 lg:py-7 py-3">
                                        <h2
                                            class="font-bold capitalize mb-3 text-green-900 text-center border-b pb-4 leading-tight tracking-tight">
                                            Household Capacity and Access to Distance Learning
                                        </h2>
                                        <div>
                                            <ul class="lg:grid grid-cols-2 gap-10">
                                                <li v-for="(h, i) in newStudentFull.household_capacity_and_access_to_distance_learning"
                                                    :key="i" class="py-2 text-xs">
                                                    <div>
                                                        <p class="mb-3 font-bold">{{ h.question }}</p>
                                                        <ul class="lg:grid grid-cols-2 gap-2">
                                                            <li v-for="(li, i) in h.list_items" :key="i"
                                                                class="text-xs flex items-center lg:mb-0 mb-3">
                                                                <input v-model="li.value" :value="li.label"
                                                                    type="checkbox" class="mr-2" />
                                                                {{ li.label }}
                                                                <input v-model="li.description"
                                                                    placeholder="please specify"
                                                                    :class="li.label === 'Others' && li.value ? '' : 'hidden'"
                                                                    class="ml-3 lg:w-44 w-full px-3 capitalize border-b-2 py-1 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-[23px] text-xs" />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                        </div>
                      </div>
                      <div class="py-5 border-t-4">
                        <div class="justify-between flex">
                          <div @click="toggleInfo(true, false, false, false, false)" class="cursor-pointer py-1 uppercase px-4 shadow bg-green-800 
                            text-white hover:bg-white hover:text-green-800 rounded-lg mx-2">
                            <i class="fa fa-angle-double-left pr-2"></i> Prev
                          </div>
                          <div class="cursor-pointer py-1 uppercase px-4 shadow bg-green-800 
                          text-white hover:bg-white hover:text-green-800 rounded-lg mx-2" @click="toggleInfo(false, false, true, false, false)"> Next <i class="fa fa-angle-double-right pl-2"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>





                  <div class="border-t-2 border-green-700 my-5 shadow-lg" v-show="toggle.three">
                    <div>
                      <h2 class="lg:text-base text-xs px-10 uppercase py-2 font-bold bg-green-900 text-white text-center"> 
                        MEDIA RELEASE CONSENT </h2>
                      <div class="shadow lg:px-10 px-3 py-5 text-green-900">
                        <p class="text-xs">
                          {{ staticNewStudentTexts.media_release_consent.text[0] }}
                          <span class="font-bold text-green-900">
                            {{ staticNewStudentTexts.media_release_consent.text[1] }}
                          </span>
                        </p>
                        <p class="text-xs mb-3">
                          {{ staticNewStudentTexts.media_release_consent.text[2] }}
                        </p>
                        <p class="text-xs mb-3">
                          {{ staticNewStudentTexts.media_release_consent.text[3] }}
                        </p>
                        <ul class="list-disc ml-10 mb-3">
                          <li v-for="(j, i) in staticNewStudentTexts.media_release_consent.list" :key="i" class="text-xs">
                            {{ j }}
                          </li>
                        </ul>
                        <p class="text-xs mb-3">
                          {{ staticNewStudentTexts.media_release_consent.text[4] }}
                        </p>
                        <p class="text-xs mb-3">
                          {{ staticNewStudentTexts.media_release_consent.text[5] }}
                        </p>
                        <p class="text-xs mb-3">
                          {{ staticNewStudentTexts.media_release_consent.text[6] }}
                        </p>
                        <p class="text-xs mb-3">
                          {{ staticNewStudentTexts.media_release_consent.text[7] }}
                        </p>
                        <p class="text-xs mb-3">
                          {{ staticNewStudentTexts.media_release_consent.text[8] }}
                        </p>
                        <p class="text-xs mb-3">
                          {{ staticNewStudentTexts.media_release_consent.text[9] }}
                        </p>
                        <p class="text-xs mb-4 text-green-800">
                          {{ staticNewStudentTexts.media_release_consent.text[10] }}
                        </p>
                        <div class="">
                          <div class="my-3 flex items-center">
                            <input type="radio" class="mr-1.5" v-model="newStudent.media_release_consent" value="AGREE" />
                            <label class="text-xs font-bold text-green-900"> AGREE </label>
                          </div>
                          <div class="flex items-center">
                            <input type="radio" class="mr-1.5" v-model="newStudent.media_release_consent" value="DO NOT AGREE" />
                            <label class="text-xs font-bold text-green-900"> DO NOT AGREE </label>
                          </div>
                        </div>
                      </div>
                      <div class="py-5">
                        <div class="justify-between flex">
                          <div @click="toggleInfo(false, true, false, false, false)" class="cursor-pointer py-1 uppercase px-4 shadow bg-green-800 text-white hover:bg-white hover:text-green-800 rounded-lg mx-2">
                            <i class="fa fa-angle-double-left pr-2"></i> Prev
                          </div>
                          <div class="cursor-pointer py-1 uppercase px-4 shadow bg-green-800 text-white hover:bg-white hover:text-green-800 rounded-lg mx-2" @click="toggleInfo(false, false, false, true, false)"> Next <i class="fa fa-angle-double-right pl-2"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="border-t-2 border-green-700 my-5 shadow-lg" v-show="toggle.four">
                    <h2 class="lg:text-base text-xs px-10 uppercase py-2 font-bold bg-green-900 text-white text-center"> HEALTH INFORMATION </h2>
                    <div class="shadow lg:px-10 px-3 py-5 text-green-900">
                      <p class="text-xs mb-3">
                        <span class="font-bold text-green-900 mr-1">
                          {{ staticNewStudentTexts.has_health_condition.text[0] }}
                        </span>
                        <span>
                          {{ staticNewStudentTexts.has_health_condition.text[1] }}
                        </span>
                      </p>
                      <p class="text-xs mb-3">
                        {{ staticNewStudentTexts.has_health_condition.text[2] }}
                      </p>
                      <p class="text-xs mb-3">
                        {{ staticNewStudentTexts.has_health_condition.text[3] }}
                      </p>
                      <p class="text-xs mb-3">
                        {{ staticNewStudentTexts.has_health_condition.text[4] }}
                      </p>
                      <div class="my-3 flex items-center">
                        <input type="checkbox" class="mr-1.5" v-model="newStudent.has_health_condition" value="true" />
                        <label class="text-xs font-bold">
                          {{ staticNewStudentTexts.has_health_condition.text[5] }}
                        </label>
                      </div>
                    </div>
                    <div class="py-5">
                      <div class="justify-between flex">
                        <div @click="toggleInfo(false, false, true, false, false)" class="cursor-pointer py-1 uppercase px-4 shadow bg-green-800 text-white hover:bg-white hover:text-green-800 rounded-lg mx-2">
                          <i class="fa fa-angle-double-left pr-2"></i> Prev
                        </div>
                        <div class="cursor-pointer py-1 uppercase px-4 shadow bg-green-800 text-white hover:bg-white hover:text-green-800 rounded-lg mx-2" @click="toggleInfo(false, false, false, false, true)"> Next <i class="fa fa-angle-double-right pl-2"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="border-t-2 border-green-700 my-5 shadow-lg" v-show="toggle.five">
                    <div>
                      <h2 class="lg:text-base text-xs px-10 uppercase py-2 font-bold bg-green-900 text-white text-center"> CERTIFICATION </h2>
                      <div class="shadow lg:px-10 px-3 py-5 text-green-900">
                        <p class="lg:text-sm text-xs font-bold text-green-900">
                          {{ staticNewStudentTexts.hereby_certification.text[0] }}
                        </p>
                        <p class="lg:text-sm text-xs mb-3">
                          {{ staticNewStudentTexts.hereby_certification.text[1] }}
                        </p>
                        <div class="my-3 flex items-center mt-10">
                          <input type="checkbox" class="mr-2" v-model="newStudent.hereby_certification" value="yes" />
                          <label class="lg:text-sm text-xs font-bold">
                            {{ staticNewStudentTexts.hereby_certification.text[2] }}
                          </label>
                        </div>
                      </div>
                      <div class="lg:flex py-5 border-t-4 border-green-800 justify-between">
                        <div class="flex items-center lg:mb-0 mb-20">
                          <div @click="toggleInfo(false, false, false, true, false)" class="flex items-center cursor-pointer py-1 uppercase px-4 shadow bg-green-800 text-white hover:bg-white hover:text-green-800 rounded-lg mx-2 w-fit">
                            <i class="fa fa-angle-double-left pr-2 py-1"></i> Review
                          </div>
                          <div class="lg:w-full w-10/12">
                            <p class="text-green-800 lg:text-sm text-xs text-left"> Please check all your information before submitting. </p>
                          </div>
                        </div>
                        <div class="text-right">
                          <div @click="submitForm()" class="cursor-pointer py-1 uppercase px-4 shadow bg-green-800 text-white hover:bg-white hover:text-green-800 rounded-lg mx-2 w-fit mr-2 ml-auto"> Submit <i class="fa fa-paper-plane pl-2"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <div v-if="pleaseFillUpAllRequiredFields" class="my-10 text-white bg-red-800 font-bold text-center py-1 px-5 block lg:text-sm text-xs"> 
                  All fields are required information. Otherwise, type N/A if not applicable. </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="submitAndCheckEmailTab" class="lg:my-0 my-5">
          <div class="lg:px-10 px-4">
            <div class="lg:flex gap-1 rounded-4xl bg-white lg:px-14 px-3 py-1 lg:w-10/12 mx-auto lg:my-5 shadow-sm rounded-xl">
              <div class="flex items-center">
                <img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/icons/check-mark-icon-isolated-on-white-background-vector-26464923.jpg" class="lg:w-44 w-20 lg:ml-16 lg:mr-0 mx-auto lg:mt-0 mt-14" />
              </div>
              <div class="text-xl text-green-900 text-center lg:py-20 py-5 lg:w-8/12 mx-auto">
                <h1 class="font-bold text-3xl mb-10">Congratulations! </h1>
                <p class="font-light text-xs mb-10">This page confirms that your application for admission to La Salle University has been submitted. Please check your email to receive your tracking ID number in order to monitor the progress of your enrollment online in real time.</p>
                <a href="https://lsu.edu.ph/enrollment" class="bg-green-800 text-white rounded-3xl py-1.5 px-5 lg:mb-0 mb-5 mx-auto block w-fit capitalize text-xs"> Back to Main Page</a>
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