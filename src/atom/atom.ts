import { atom } from "jotai";

export const resultAtom = atom([
  {
    job_title: "AI 프로젝트 매니저",
    recommended_job: "AI 엔지니어",
    recommended_category: "소프트웨어 개발",
    category_keywords: ["AI", "머신러닝", "파이썬"],
    job_intro: "AI 프로젝트를 주도할 역동적인 팀에 합류하세요.",
    main_tasks: ["AI 프로젝트 생애 주기 관리.", "다기능 팀과의 협력 조정."],
    preferred_qualifications: [
      "Python 및 머신러닝 라이브러리 경험.",
      "뛰어난 의사소통 능력.",
    ],
  },
]);
