export interface Subject {
  code: string;
  name: string;
  credits: number;
  field: string;
}

export const courseSubjects: Record<string, Subject[]> = { 

  "Diploma-1": [
    { code: "CHMC121", name: "Spiritual Formation II", credits: 2, field: "SpiritualFormation_II_CHMC121" },
    { code: "GEST122", name: "English II", credits: 3, field: "English_II_GEST122" },
    { code: "BINT123", name: "NT Survey", credits: 3, field: "NTSurvey_BINT123" },
    { code: "CHMI124", name: "Children Ministry", credits: 2, field: "ChildrenMinistry_CHMI124" },
    { code: "CHED126", name: "Bible Storying", credits: 2, field: "BibleStorying_CHED126" },
    { code: "GEST127", name: "Computing in Ministry", credits: 2, field: "ComputingInMinistry_GEST127" },
    { code: "CHMC127", name: "Public Speaking", credits: 2, field: "PublicSpeaking_CHMC127" }
  ],

  "Diploma-2": [
    { code: "THES221", name: "Basic Theology II", credits: 3, field: "BasicTheology_II_THES221" },
    { code: "GEST222", name: "English IV", credits: 2, field: "English_IV_GEST222" },
    { code: "CHMI223", name: "Missionary Biography", credits: 2, field: "MissionaryBiography_CHMI223" },
    { code: "CHMC224", name: "Evangelism", credits: 2, field: "Evangelism_CHMC224" },
    { code: "CHMC225", name: "Principles of Church Growth", credits: 2, field: "PrinciplesOfChurchGrowth_CHMC225" },
    { code: "HICH226", name: "Introduction to Church History", credits: 2, field: "IntroductionToChurchHistory_HICH226" },
    { code: "CHMC227", name: "Practice Preaching", credits: 2, field: "PracticePreaching_CHMC227" }
  ],

  "BTH-1": [
    { code: "BINT321", name: "Greek I", credits: 3, field: "Greek_I_BINT321" },
    { code: "GEST322", name: "English II", credits: 3, field: "English_II_GEST322" },
    { code: "THES323", name: "Bible Doctrine II", credits: 3, field: "BibleDoctrine_II_THES323" },
    { code: "THES325", name: "Christian Evidences", credits: 3, field: "ChristianEvidences_THES325" },
    { code: "BINT327", name: "Acts of the Apostles", credits: 2, field: "ActsOfTheApostles_BINT327" },
    { code: "HICH328", name: "Baptist Distinctives", credits: 2, field: "BaptistDistinctives_HICH328" },
    { code: "CHMU325", name: "Music Appreciation", credits: 2, field: "MusicAppreciation_CHMU325" }
  ],

  "BTH-2": [ 
    { code: "BINT421", name: "Greek III", credits: 3, field: "Greek_III_BINT421" },
    { code: "GEST422", name: "English IV", credits: 3, field: "English_IV_GEST422" },
    { code: "THES422", name: "Bible Doctrine IV", credits: 3, field: "BibleDoctrine_IV_THES422" },
    { code: "CHMC424", name: "Homiletics", credits: 3, field: "Homiletics_CHMC424" },
    { code: "BINT425", name: "Prison Epistles & Thessalonians", credits: 2, field: "PrisonEpistles&Thessalonians_BINT425" },
    { code: "BIOT427", name: "OT Historical Books", credits: 2, field: "OTHistoricalBooks_BIOT427" },
    { code: "CHMC426", name: "Pastoral Leadership & Church Administration", credits: 2, field: "PastoralLeadership&ChurchAdministration_CHMC426" },
    { code: "CHMU417", name: "Biblical Principles of Church Music", credits: 3, field: "BiblicalPrinciplesOfChurchMusic_CHMU417" }
  ],

  "BTH-3": [
    { code: "BINT525", name: "Daniel & Revelation", credits: 3, field: "Daniel&Revelation_BINT525" },
    { code: "CHMC324", name: "Cults & Occult", credits: 2, field: "Cults&Occult_CHMC324" },
    { code: "BIOT522", name: "OT Prophetical Books", credits: 3, field: "OTHistoricalBooks_BIOT522" },
    { code: "CHED524", name: "Christian Ethics", credits: 3, field: "ChristianEthics_CHED524" },
    { code: "CHED521", name: "Christian Home", credits: 2, field: "ChristianHome_CHED521" },
    { code: "BINT526", name: "General Epistles & Hebrew", credits: 3, field: "GeneralEpistles&Hebrew_BINT526" }
  ],

  "MDIV-1": [
    { code: "BINT521", name: "Intermediate Greek – 2", credits: 3, field: "IntermediateGreek_II_BINT521" },
    { code: "BINT522", name: "Chronological Survey of the NT", credits: 3, field: "ChronologicalSurveyOfTheNT_BINT522" },
    { code: "BINT527", name: "Introduction to Gospels", credits: 3, field: "IntroductionToGospels_BINT527" },
    { code: "THES516", name: "Introduction to Theology", credits: 2, field: "IntroductionToTheology_THES516" },
    { code: "CHMC525", name: "Communication Theory & Practice", credits: 2, field: "CommunicationTheory&Practice_CHMC525" }
  ],

  "MDIV-2": [
    { code: "BIOT621", name: "Biblical Hebrew 2", credits: 3, field: "BiblicalHebrew_II_BIOT621" },
    { code: "BINT622", name: "Principles of Greek Exegesis", credits: 3, field: "PrinciplesOfGreekExegesis_BINT622" },
    { code: "GEST521", name: "Personality Theories", credits: 2, field: "PersonalityTheories_GEST521" },
    { code: "THES625", name: "Systematic Theology 2", credits: 3, field: "SystematicTheology_II_THES625" },
    { code: "BIOT614", name: "Old Testament Biblical Theology", credits: 3, field: "OldTestamentBiblicalTheology_BIOT614" },
    { code: "CHMI615", name: "Introduction to Missiology", credits: 2, field: "IntroductionToMissiology_CHMI615" },
    { code: "CHMM626", name: "Christian Management", credits: 2, field: "ChristianManagement_CHMM626" },
    { code: "GEST525", name: "Abnormal Human Behavior", credits: 2, field: "AbnormalHumanBehavior_GEST525" },
    { code: "CHMC526", name: "Health Counseling", credits: 2, field: "HealthCounseling_CHMC526" },
    { code: "CHMC726", name: "Expository Preaching & Worship", credits: 2, field: "ExpositoryPreachingWorship_CHMC726" }
  ],

  "MDIV-3": [
    { code: "BIOT721", name: "Hebrew Exegesis of Jonah & Ruth", credits: 3, field: "HebrewExegesisOfJonah&Ruth_BIOT721" },
    { code: "RLPH722", name: "Introduction to Philosophy", credits: 3, field: "IntroductionToPhilosophy_RLPH722" },
    { code: "CHMC721", name: "Counseling Practicum", credits: 2, field: "CounselingPracticum_CHMC721" },
    { code: "THES723", name: "Systematic Theology 4", credits: 3, field: "SystematicTheology_IV_THES723" },
    { code: "THES725", name: "Modern Theological Trends", credits: 2, field: "ModernTheologicalTrends_THES725" },
    { code: "BINT726", name: "The Dispensational Interpretation of Revelation", credits: 2, field: "TheDispensationalInterpretationOfRevelation_BINT726" },
    { code: "CHMI724", name: "Modern Missions Trends", credits: 2, field: "ModernMissionsTrends_CHMI724" },
    { code: "CHMC623", name: "Marriage & Family Counseling", credits: 2, field: "MarriageFamilyCounseling_CHMC623" },
    { code: "CHMC625", name: "Counseling Skills and Techniques", credits: 2, field: "CounselingSkillsAndTechniques_CHMC625" },
    { code: "GEST721", name: "Personality Theories" , credits: 2, field:"PersonalityTheories_GEST721" },
    { code: "GEST621", name: "Health Counselling" , credits: 2, field:"HealthCounselling_GEST621" },
    { code: "GEST723", name: "Addiction Counselling" , credits: 2, field:"AddictionCounselling_GEST723" },
    { code: "CHIM172", name: "Modern Mission Trends" , credits: 2, field:"ModernMissionTrends_CHIM172" },

  ],

  "MTH-1": [
    { code: "GEST811"	,name:"Research Methods & Thesis Writing" , credits: 2, field: "ResearchMethods&ThesisWriting_GEST811"},
    { code: "THES824"	,name:"Christology and Atonement" , credits: 3, field: "ChristologyandAtonement_THES824"},
    { code: "THESS828"	,name:"Theology Proper & Providence" , credits: 3, field: "TheologyProper&Providence_THES828"},
    { code: "CHMCC913"	,name:"Issues and Concerns in Ecclesiology Today" , credits: 3, field: "IssuesandConcernsinEcclesiologyToday_CHMC913"},
    { code: "HICH912"	,name:"Christian Thought and Philosophy" , credits: 3, field: "ChristianThoughtandPhilosophy_HICH912"},
    { code: "RLPH922"	,name:"Philosophy of Religion" , credits: 3, field: "PhilosophyofReligion_RLPH922"},
  ],

  "MTH-2": [
    { code: "THESS915"	,name:"Theological Methods" , credits: 3, field: "TheologicalMethods_THES915"},
    { code: "THESS821"	,name:"Contemporary Theology" , credits: 2, field: "ContemporaryTheology_THES821"},
    { code: "THESS816"	,name:"Apologetics" , credits: 3, field: "Apologetics_THES816"},
    { code: "Elective"	,name:"Eschatology" , credits: 3, field: "Eschatology_Elective"},
    { code: "CHMCC923"	,name:"Teaching Practicum" , credits: 2, field: "TeachingPracticum_CHMC923"},
  ]
}


