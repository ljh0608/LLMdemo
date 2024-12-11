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
      jobTitle: LLMAtom[0].job_title,
      recommended_job: LLMAtom[0].recommended_job,
      recommended_category: LLMAtom[0].recommended_category,
      category_keywords: LLMAtom[0].category_keywords,
      job_intro: LLMAtom[0].job_intro,
      main_tasks: LLMAtom[0].main_tasks,
      preferred_qualifications: LLMAtom[0].preferred_qualifications,
    },
  });

  const updateInfo = (reqData: any) => {
    console.log("update");
  };

  return (
    <div className={styles.appWrapper}>
      <nav className={styles.navWrapper}>
        <h2>메뉴</h2>
        <ul className={styles.navList}>
          <li className={styles.navItem} onClick={() => navigate("/")}>
            검색
          </li>
          <li className={styles.navItem} onClick={() => navigate("/preview")}>
            미리보기
          </li>
          <li
            className={styles.navItem}
            onClick={() => navigate("/jobPosting")}
          >
            결과 확인
          </li>
        </ul>
      </nav>
      <div>
        <h2 className={styles.mainText}>채용 공고 결과 확인</h2>
        <hr className={styles.hrStyle} />

        <form
          className={jobPostingStyles.formWrapper}
          onSubmit={handleSubmit((reqData) => updateInfo(reqData))}
        >
          <table className={jobPostingStyles.table}>
            <tbody>
              <tr className={jobPostingStyles.trStyle}>
                <td className={jobPostingStyles.label}>채용 제목</td>
                <td>
                  <input
                    className={jobPostingStyles.input}
                    type="text"
                    {...register("jobTitle")}
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
                  <input
                    className={jobPostingStyles.input}
                    type="text"
                    {...register("main_tasks")}
                  />
                </td>
              </tr>
              <tr
                className={jobPostingStyles.trStyle}
                style={{ borderBottom: "none" }}
              >
                <td className={jobPostingStyles.label}>AI추천 우대사항</td>
                <td>
                  <input
                    className={jobPostingStyles.input}
                    type="text"
                    {...register("preferred_qualifications")}
                  />
                </td>

                {/* <td>
                  <select className={jobPostingStyles.select}>
                    <option value="highschool">고졸</option>
                    <option value="university">대학교</option>
                  </select>
                </td> */}
              </tr>
              {/*  <tr>
                <td className={jobPostingStyles.label}>자격여부</td>
                <td>
                  <select className={jobPostingStyles.select}>
                    <option value="required">필수</option>
                    <option value="optional">우대</option>
                  </select>
                </td>
              </tr> */}
            </tbody>
          </table>
          <button className={jobPostingStyles.btnStyle} type="submit">
            수정
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobPostingDraft;
