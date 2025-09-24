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
    { code: "THES311", name: "Spiritual Formation (CW)", credits: 1, field: "SpiritualFormation(CW)THES311" },
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
  { code: "THES517", name: "Dispensations", credits: 2, field: "Dispensations_THES517" },
  { code: "CHMC517", name: "Cross Culture Missions", credits: 3, field: "CrossCultureMissions_CHMC517" }
],

"MDIV-1": [
  
  { code: "BINT511", name: "Elementary Greek I", credits: 3, field: "ElementaryGreek_I_BINT511" },
  { code: "BIOT611", name: "Historical Survey of the OT", credits: 3, field: "HistoricalSurveyOfTheOT_BIOT611" },
  { code: "BIOT512", name: "Dispensations", credits: 2, field: "Dispensations_BIOT512" },
  { code: "RLPH514", name: "Modern Religious & Secular Movements", credits: 2, field: "ModernReligious&SecularMovements_RLPH514" },
  { code: "RLPH515", name: "World Religions", credits: 2, field: "WorldReligions_RLPH515" },
  { code: "THES523", name: "Christian Ethics", credits: 2, field: "ChristianEthics_THES523" }
],

"MDIV-2": [
  { code: "BIOT611", name: "Biblical Hebrew I", credits: 3, field: "BiblicalHebrew_I_BIOT611" },
  { code: "BINT612", name: "Greek Syntax", credits: 3, field: "GreekSyntax_BINT612" },
  { code: "HICH625", name: "Advanced Church History", credits: 3, field: "AdvancedChurchHistory_HICH625" },
  { code: "GEST612", name: "Research Method & Thesis Writing", credits: 1, field: "ResearchMethod&ThesisWriting_GEST612" },
  { code: "THES712", name: "Advanced Hermeneutics", credits: 2, field: "AdvancedHermeneutics_THES712" },
  { code: "THES625", name: "Systematic Theology I", credits: 3, field: "SystematicTheology_I_THES625" },

  { code: "CHMA612", name: "Apologetics", credits: 3, field: "Apologetics_CHMA612" },
]
};

// mdiv2	

// BiblicalHebrew_I_BIOT611	
// AdvancedChurchHistory_HICH625	
// GreekSyntax_BINT612	
// ResearchMethod&ThesisWriting_GEST612	
// AdvancedHermeneutics_THES712	
// SystematicTheology_I_THES625	
// Apologetics_CHMA612


// ResearchMethod_GEST511	
// SystematicTheology_I_THES512	
// GeneralPsychology_GEST513	
// OldTestamentBilicalTheology_BIOT514	
// BiblicalFoundationsofCounselling_CHMC515	
// HumanGrowth&Development_GEST516

// credits

// Biblical Hebrew I	3
// Greek  Syntax	3
// Advance Church History	3	
// Research Method & Thesis Writing	1
// Advanced Hermeneutics	2
// Sytematic Theology (Bible & Theo. Prop)	3
	
// GEST 513 General Psychology	2
// GEST 516 Human Growth & Development 	2
// CHMC  515 Biblical Foundation of Counselling 	3


// mdiv3

// HebrewSyntaxBIOT711	
// GreekExegesisofRomans_BINT712	
// AsianChristianTheology_THES714	
// SystematicTheology_III_THES625	
// NewTestamentBiblicalTheology_BINT624	
// ModernMissionTrends_CHMI72
// PastoralTheology	
// ChurchMinistries	
	

// IntroductiontoPhilosophy_CHMC611	
// CounselingTheory_CHMC612	
// SystematicTheology_III_THES612	
// PremaritalCounseling_CHMC613	
// AdditionCounseling_CHNC615



// credits

// Modern Mission Trends	2	
// Church Ministries	2
// Pastoral Theology	2
// Asian Christian Theology	2
// Greek Exegesis of Romans	3
// New Testament Biblical Theology	3
// Systematic Theology 3	3
// Hebrew Syntax	3

// CHMC 613 Premarital Counseling	3
// Introduction to Philosophy ( CHMC 611)	2
// CHMC  615 Addiction Counseling	3
// Counselling Theory CHMC 612	3



// mth2

// ResearchMethod&ThesisWriting_GEST811
// Soteriology_THES812	
// AdvancedChristianCounseling_CHMC815	
// BiblicalTheologyofMissions_CHMI815	
// Apologetics_THES816	
// Reading&IntergratedPaper_Elective

// credits
	
// Research Method & Thesis Writing	2
// Christian Thought and Philosophy 	3
// Theology Proper & Providence	3
// Christology and Atonement 	3


// mth3

// Dispensationlism_THES911	
// HistoryofChristianThoughtandPhilosophy_HICH912	
// IssuesandConcernsinEcclesiologyTodayCHMC913	
// TheologicalMethods_THES915	
// BiblicalEthics_THES916
	
// credits

// Theological Methods	3
// Contemporary Theology	2
// Eschatology	3
// Apologetics	3