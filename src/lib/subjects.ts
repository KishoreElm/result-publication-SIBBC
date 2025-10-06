export interface Subject {
  code: string;
  name: string;
  credits: number;
  field: string;
}

export const courseSubjects: Record<string, Subject[]> = { 
"Diploma-1": [
    { code: "CHMC111", name: "Spiritual Formation I", credits: 2, field: "SpiritualFormation_I_CHMC111" },
    { code: "GEST112", name: "English I", credits: 3, field: "English_I_GEST112" },
    { code: "BIOT113", name: "Old Testament Survey", credits: 3, field: "OldTestamentSurvey_BIOT113" },
    { code: "BINT114", name: "Life of Christ", credits: 2, field: "LifeOfChrist_BINT114" },
    { code: "CHED115", name: "Study Methods", credits: 2, field: "StudyMethods_CHED115" },
    { code: "RLPH125", name: "World Religions", credits: 2, field: "WorldReligions_RLPH125" },
    { code: "GEST117", name: "Computing in Ministry", credits: 2, field: "ComputingInMinistry_GEST117" },
  ],
  "Diploma-2": [
    { code: "THES211", name: "Basic Theology I", credits: 3, field: "BasicTheology_I_THES211" },
    { code: "GEST212", name: "English III", credits: 3, field: "English_III_GEST212" },
    { code: "CHMC213", name: "Church Ministries", credits: 2, field: "ChurchMinistries_CHMC213" },
    { code: "THES214", name: "Bible Interpretation", credits: 2, field: "BibleInterpretation_THES214" },
    { code: "HICH215", name: "History of Israel", credits: 2, field: "HistoryOfIsrael_HICH215" },
    { code: "GEST216", name: "Christian Stewardship", credits: 2, field: "ChristianStewardship_GEST216" },
    { code: "CHMU217", name: "Worship & Church Music", credits: 2, field: "Worship&ChurchMusic_CHMU217" },
  ],
  "BTH-1": [
    { code: "THES311", name: "Spiritual Formation (CW)", credits: 1, field: "SpiritualFormation_THES311" },
    { code: "GEST312", name: "English I", credits: 3, field: "English_I_GEST312" },
    { code: "THES313", name: "Bible Doctrine I", credits: 3, field: "BibleDoctrine_I_THES313" },
    { code: "RLPH314", name: "Major Religions", credits: 2, field: "MajorReligions_RLPH314" },
    { code: "BIOT315", name: "Pentateuch", credits: 3, field: "Pentateuch_BIOT315" },
    { code: "BINT317", name: "Gospels", credits: 3, field: "Gospels_BINT317" },
    { code: "CHMC318", name: "Bible Manners & Geography", credits: 2, field: "BibleManners&BibleGeography_CHMC318" },
    { code: "GEST419", name: "Academic Writing", credits: 1, field: "AcademicWriting_GEST419" },
  ],
  "BTH-2": [
    { code: "BINT412", name: "Greek II", credits: 3, field: "GreekII_BINT412" },
    { code: "GEST412", name: "English III", credits: 3, field: "English_III_GEST412" },
    { code: "THES413", name: "Bible Doctrine III", credits: 3, field: "BibleDoctrine_III_THES413" },
    { code: "HICH414", name: "Church History", credits: 3, field: "ChurchHistory_HICH414" },
    { code: "THES415", name: "Biblical Hermeneutics", credits: 3, field: "BiblicalHermeneutics_THES415" },
    { code: "BINT418", name: "Romans & Galatians", credits: 2, field: "Romans&Galatians_BINT418" },
    { code: "CHMI417", name: "Introduction to Missions", credits: 2, field: "IntroductionToMissions_CHMI417" },
    { code: "GEST416", name: "Introduction to Psychology", credits: 3, field: "IntroductionToPsychology_GEST416" }
],
"BTH-3": [
  { code: "BINT512", name: "Greek IV", credits: 3, field: "Greek_IV_BINT512" },
  { code: "BINT513", name: "Pastoral Epistles", credits: 2, field: "PastoralEpistles_BINT513" },
  { code: "BINT516", name: "1 & 2 Corinthians", credits: 3, field: "1&2Corinthians_BINT516" },
  { code: "CHED521", name: "Christian Home", credits: 2, field: "ChristianHome_CHED521" },
  { code: "CHMC515", name: "Pastoral & Counselling", credits: 2, field: "Pastoral&Counselling_CHMC515" },
  { code: "HICH514", name: "South Asian Church History", credits: 3, field: "SouthAsianChurchHistory_HICH514" },
  { code: "THES519", name: "Dispensations", credits: 2, field: "Dispensations_THES519" },
  { code: "CHMC517", name: "Cross Culture Missions", credits: 3, field: "CrossCultureMissions_CHMC517" }
],

"MDIV-1": [
  
  { code: "BINT511", name: "Elementary Greek I", credits: 3, field: "ElementaryGreek_I_BINT511" },
  { code: "RLPH515", name: "World Religions", credits: 2, field: "WorldReligions_RLPH515" },
  { code: "BIOT512", name: "Dispensations", credits: 2, field: "Dispensations_BIOT512" },
  { code: "RLPH514", name: "Modern Religious & Secular Movements", credits: 2, field: "ModernReligious&SecularMovements_RLPH514" },
  { code: "THES523", name: "Christian Ethics", credits: 2, field: "ChristianEthics_THES523" },
  { code: "BIOT512", name: "Historical Survey of the OT", credits: 3, field: "HistoricalSurveyOfTheOT_BIOT512" },
],

"MDIV-2": [
  { code: "BIOT611", name: "Biblical Hebrew I", credits: 3, field: "BiblicalHebrew_I_BIOT611" },
  { code: "BINT612", name: "Greek Syntax", credits: 3, field: "GreekSyntax_BINT612" },
  { code: "HICH625", name: "Advanced Church History", credits: 3, field: "AdvancedChurchHistory_HICH625" },
  { code: "GEST612", name: "Research Method & Thesis Writing", credits: 1, field: "ResearchMethod&ThesisWriting_GEST612" },
  { code: "THES716", name: "Advanced Hermeneutics", credits: 2, field: "AdvancedHermeneutics_THES716" },
  { code: "THES625", name: "Systematic Theology I", credits: 3, field: "SystematicTheology_I_THES625" },
  { code: "CHMA612", name: "Apologetics", credits: 3, field: "Apologetics_CHMA612" },
  { code: "GEST513", name: "General Psychology", credits: 2, field: "GeneralPsychology_GEST513" },
  { code: "GESTT516", name: "Human Growth & Development", credits: 2, field: "HumanGrowth&Development_GESTT516" },
  { code: "CHMC515", name: "Biblical Foundations of Counseling", credits: 3, field: "BiblicalFoundationsofCounseling_CHMCC515" },

],
"MDIV-3": [
  { code: "BIOT711", name: "Hebrew Syntax", credits: 3, field: "HebrewSyntax_BIOT711" },
  { code: "BINT712", name: "Greek Exegesis of Romans", credits: 3, field: "GreekExegesisofRomans_BINTT712" },
  { code: "THES714", name: "Asian Christian Theology", credits: 2, field: "AsianChristianTheology_THESS714" },
  { code: "THES625", name: "Systematic Theology 3", credits: 3, field: "SystematicTheology_III_THESS625" },
  { code: "BINT624", name: "New Testament Biblical Theology", credits: 3, field: "NewTestamentBiblicalTheology_BINTT624" },
  { code: "CHMI72", name: "Modern Mission Trends", credits: 2, field: "ModernMissionTrends_CHMI72" },
  { code: "CHMC724", name: "Church Ministries", credits: 2, field: "ChurchMinistries_CHMC724" },
  { code: "CHMC725", name: "Pastoral Theology", credits: 2, field: "PastoralTheology_CHMCC725" },
  { code: "CHMC611", name: "Introduction to Philosophy", credits: 3, field: "IntroductiontoPhilosophy_CHMCC611" },
  { code: "CHMC612", name: "Counseling Theory", credits: 2, field: "CounselingTheory_CHMCC612" },
  { code: "CHMC613", name: "Premarital Counseling", credits: 2, field: "PremaritalCounseling_CHMC613" },
  { code: "CHNC615", name: "Addiction Counseling", credits: 2, field: "AddictionCounseling_CHNC615" }

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


