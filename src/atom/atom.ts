import { atom } from "jotai";

export const resultAtom = atom({
  job_title: "AI 프로젝트 매니저",
  recommended_occupation_main: "AI 엔지니어",
  recommended_occupation_sub: "경영관리직, 인사관리직, 경영지원직",
  recommended_job: "소프트웨어 개발, 조직관리, 일정조율",
  job_intro: "AI 프로젝트를 주도할 역동적인 팀에 합류하세요.",
  main_tasks: "AI 프로젝트 생애 주기 관리. 다기능 팀과의 협력 조정.",
  preferred_qualifications:
    "Python 및 머신러닝 라이브러리 경험. 뛰어난 의사소통 능력.",
  search_keywords: "AI, 머신러닝, 파이썬",

  recommended_category: "소프트웨어 개발",
  category_keywords: "AI, 머신러닝, 파이썬",

  education1: "-",
  education2: "-",
  education3: false,
  // wage_type: "",
  wage: {
    wage_type: "-",
    wage_low: "-",
    wage_high: "-",
    deal: false,
    etc: {
      type: "-",
      percent: "-",
    },
  },
  experience: "경력",
  expStart: "-",
  expEnd: "-",
  employment_type: "-",
  work_hours: {
    work_hours_per_week: "-",
    start: "-",
    end: "-",
    restTimeStart: "-",
    restTimeEnd: "-",
    deal: false,
    detail: false,
  },
  place: "-",
  endPayType: "-",
  socialEnsurance: [],

  recruitmentType: [],
  recruitmentDocsType: [],
});

//직무내용 10자이상
