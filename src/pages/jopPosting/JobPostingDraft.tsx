import { useAtom } from "jotai";
import { resultAtom } from "../../atom/atom";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import * as styles from "./../../app.css";
import * as jobPostingStyles from "./jobpostring.css";
const JobPostingDraft = () => {
  const [LLMAtom, setLLMAtom] = useAtom(resultAtom);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      job_title: LLMAtom.job_title,
      recommended_job: LLMAtom.recommended_job,
      recommended_category: LLMAtom.recommended_category,
      category_keywords: LLMAtom.category_keywords,
      job_intro: LLMAtom.job_intro,
      main_tasks: LLMAtom.main_tasks,
      preferred_qualifications: LLMAtom.preferred_qualifications,
      //이후 추가

      education1: LLMAtom.education1,
      education2: LLMAtom.education2,
      education3: LLMAtom.education3,

      wage: {
        wage_type: LLMAtom.wage.wage_type && "",
        wage_low: LLMAtom.wage.wage_low && "",
        wage_high: LLMAtom.wage.wage_high && "",
        deal: LLMAtom.wage.deal && "",
        etc: {
          type: LLMAtom.wage.etc.type && "",
          percent: LLMAtom.wage.etc.percent && "",
        },
      },

      experience: LLMAtom.experience,
      expStart: LLMAtom.expStart,
      expEnd: LLMAtom.expEnd,
      employment_type: LLMAtom.employment_type,
      work_hours: {
        work_hours_per_week: LLMAtom.work_hours.work_hours_per_week,
        start: LLMAtom.work_hours.start,
        end: LLMAtom.work_hours.end,
        restTimeStart: LLMAtom.work_hours.restTimeStart,
        restTimeEnd: LLMAtom.work_hours.restTimeEnd,
        deal: LLMAtom.work_hours.deal,
        detail: LLMAtom.work_hours.detail,
      },
      place: LLMAtom.place,
      endPayType: LLMAtom.endPayType,
      socialEnsurance: LLMAtom.socialEnsurance,

      recruitmentType: LLMAtom.recruitmentType,
      recruitmentDocsType: LLMAtom.recruitmentDocsType,
    },
  });

  const updateInfo = (reqData: any) => {
    console.log(reqData);

    setLLMAtom((prev) => ({
      ...prev,
      job_title: reqData.job_title,
      recommended_job: reqData.recommended_job,
      recommended_category: reqData.recommended_category,
      category_keywords: reqData.category_keywords,
      job_intro: reqData.job_intro,
      main_tasks: reqData.main_tasks,
      preferred_qualifications: reqData.preferred_qualifications,

      experience: reqData.experience,
      expStart: reqData.expStart,
      expEnd: reqData.expEnd,
      education1: reqData.education1,
      education2: reqData.education2,
      // wage_type: "",
      wage: {
        wage_type: reqData.wage.wage_type,
        wage_low: reqData.wage.wage_low,
        wage_high: reqData.wage.wage_high,
        deal: reqData.wage.deal,
        etc: {
          type: reqData.wage.etc.type,
          percent: reqData.wage.etc.percent,
        },
      },

      employment_type: reqData.employment_type,

      work_hours: {
        work_hours_per_week: reqData.work_hours.work_hours_per_week,
        start: reqData.work_hours.start,
        end: reqData.work_hours.end,
        restTimeStart: reqData.work_hours.restTimeStart,
        restTimeEnd: reqData.work_hours.restTimeEnd,
        deal: reqData.work_hours.deal,
        detail: reqData.work_hours.detail,
      },
      place: reqData.place,
      endPayType: reqData.endPayType,
      socialEnsurance: reqData.socialEnsurance,
      employmentType: reqData.employmentType,
      recruitmentType: reqData.recruitmentType,
      recruitmentDocsType: reqData.recruitmentDocsType,
    }));

    navigate("/preview");
  };

  return (
    <div className={styles.appWrapper}>
      <nav className={styles.navWrapper}>
        <h2>메뉴</h2>
        <ul className={styles.navList}>
          <li className={styles.navItem} onClick={() => navigate("/")}>
            공고입력
          </li>
          <li
            className={styles.navItem}
            style={{ fontWeight: "600" }}
            onClick={() => navigate("/jobPosting")}
          >
            생성결과
          </li>
          <li className={styles.navItem} onClick={() => navigate("/preview")}>
            미리보기
          </li>
        </ul>
      </nav>
      <div>
        <h2 className={styles.mainText}>생성 결과</h2>
        <hr className={styles.hrStyle} />

        <form
          className={jobPostingStyles.formWrapper}
          onSubmit={handleSubmit((reqData) => updateInfo(reqData))}
        >
          <table className={jobPostingStyles.table}>
            <tbody className={jobPostingStyles.tbodyStyle}>
              <tr className={jobPostingStyles.trStyle}>
                <td className={jobPostingStyles.label}>채용 제목</td>
                <td>
                  <input
                    className={jobPostingStyles.input}
                    type="text"
                    {...register("job_title")}
                  />
                </td>
              </tr>
              <tr className={jobPostingStyles.trStyle}>
                <td className={jobPostingStyles.label}>추천 직무</td>
                <td>
                  <input
                    className={jobPostingStyles.input}
                    type="text"
                    {...register("recommended_job")}
                  />
                </td>
              </tr>
              <tr className={jobPostingStyles.trStyle}>
                <td className={jobPostingStyles.label}>추천 직종</td>
                <td>
                  <input
                    className={jobPostingStyles.input}
                    type="text"
                    {...register("recommended_category")}
                  />
                </td>
              </tr>

              <tr className={jobPostingStyles.trStyle}>
                <td className={jobPostingStyles.label}>직종 키워드</td>
                <td>
                  <input
                    className={jobPostingStyles.input}
                    type="text"
                    {...register("category_keywords")}
                  />
                </td>
              </tr>
              <tr className={jobPostingStyles.trStyle}>
                <td className={jobPostingStyles.label}>직무 소개</td>
                <td>
                  <textarea
                    className={jobPostingStyles.textarea}
                    {...register("job_intro")}
                  ></textarea>
                </td>
              </tr>
              <tr className={jobPostingStyles.trStyle}>
                <td className={jobPostingStyles.label}>주요 업무</td>
                <td>
                  <textarea
                    className={jobPostingStyles.textarea}
                    {...register("main_tasks")}
                  />
                </td>
              </tr>
              <tr
                className={jobPostingStyles.trStyle}
                // style={{ borderBottom: "none" }}
              >
                <td className={jobPostingStyles.label}>AI추천 우대사항</td>
                <td>
                  <textarea
                    className={jobPostingStyles.textarea}
                    {...register("preferred_qualifications")}
                  />
                </td>
              </tr>
              {/* <tr className={jobPostingStyles.trStyle}>
                <td className={jobPostingStyles.label}>경력</td>

                <td className={jobPostingStyles.tdFlexColumnStyle}>
                  <div className={jobPostingStyles.exprience}>
                    <input
                      type="radio"
                      id="신입"
                      value="신입"
                      {...register("experience")}
                    />
                    <label htmlFor="신입">신입</label>
                  </div>
                  <div className={jobPostingStyles.exprience}>
                    <input
                      type="radio"
                      id="경력"
                      value="경력"
                      {...register("experience")}
                    />
                    <label htmlFor="경력"> 경력</label>
                    <div>
                      <span>
                        (최소{" "}
                        <input
                          type="text"
                          className={jobPostingStyles.tdInput}
                          {...register("expStart")}
                        />{" "}
                        년{" "}
                        <input
                          type="text"
                          className={jobPostingStyles.tdInput}
                          {...register("expEnd")}
                        />{" "}
                        개월) 이상
                      </span>
                    </div>
                  </div>
                </td>
              </tr>

    
              <tr className={jobPostingStyles.trStyle}>
                <td className={jobPostingStyles.label}>학력</td>
                <td className={jobPostingStyles.tdFlexStyle}>
                  <select
                    className={jobPostingStyles.select}
                    {...register("education1")}
                  >
                    <option value="required">선택</option>
                    <option value="초졸이하">초졸이하</option>
                    <option value="중졸">중졸</option>
                    <option value="고졸">고졸</option>
                    <option value="대졸(2~3년)">대졸(2~3년)</option>
                    <option value="대졸(4년)">대졸(4년)</option>
                    <option value="석사">석사</option>
                    <option value="박사">박사</option>
                  </select>
                  ~
                  <select
                    className={jobPostingStyles.select}
                    {...register("education2")}
                  >
                    <option value="선택">선택</option>
                    <option value="초졸이하">초졸이하</option>
                    <option value="중졸">중졸</option>
                    <option value="고졸">고졸</option>
                    <option value="대졸(2~3년)">대졸(2~3년)</option>
                    <option value="대졸(4년)">대졸(4년)</option>
                    <option value="석사">석사</option>
                    <option value="박사">박사</option>
                  </select>
                  <input
                    type="checkbox"
                    {...register("education3")}
                    style={{ marginLeft: "8px" }}
                  />
                  <span style={{ marginLeft: "8px" }}>학력 무관</span>
                </td>
              </tr> */}
            </tbody>
          </table>

          <button className={jobPostingStyles.btnStyle} type="submit">
            미리보기
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobPostingDraft;
