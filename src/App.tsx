import { useAtom } from "jotai";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { BeatLoader } from "react-spinners";
import * as styles from "./app.css";
import { resultAtom } from "./atom/atom";
const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [LLMAtom, setLLMAtom] = useAtom(resultAtom);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const onsubmit = async (reqData: any) => {
    // console.log(errors);
    // if (Object.keys(errors).length > 0) {
    //   console.log(errors);
    //   const errorMessages = Object.values(errors)
    //     .map((error) => error?.message)
    //     .filter(Boolean)
    //     .join("\n");
    //   alert(`유효성 검사 오류:\n${errorMessages}`);
    //   return;
    // }
    // console.log(reqData);
    // alert("onSubmit 실행");
    // try {
    setIsLoading(true);
    const response = await fetch(
      "http://222.109.225.98:7878/generate-job-posting",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reqData),
      }
    );

    // if (!response.ok) {
    //   // console.log(response.body);
    //   // console.log(response);
    //   throw new Error("API request failed");
    // }

    const data = await response.json();

    const errorDetails = await response.json().catch(() => null); // Try to parse error details, fallback to null

    if (errorDetails?.detail && Array.isArray(errorDetails.detail)) {
      const detailedMessages = errorDetails.detail
        .map((err: any) => `\u2022 ${err.msg}`) // Format as bullet points
        .join("\n");

      throw new Error(`${detailedMessages}`);
    }
    setIsLoading(false);

    console.log(data);
    // setLLMAtom(data);
    setLLMAtom((prev) => ({
      ...prev,
      ...data,
      // job_title: reqData.job_title,
      // recommended_job: reqData.recommended_job,
      // recommended_category: reqData.recommended_category,
      // category_keywords: reqData.category_keywords,
      // job_intro: reqData.job_intro,
      // main_tasks: reqData.main_tasks,
      // preferred_qualifications: reqData.preferred_qualifications,

      // experience: reqData.experience,
      // expStart: reqData.expStart,
      // expEnd: reqData.expEnd,
      // education1: reqData.education1,
      // education2: reqData.education2,
      // // wage_type: "",
      // wage: {
      //   wage_type: reqData.wage.wage_type,
      //   wage_low: reqData.wage.wage_low,
      //   wage_high: reqData.wage.wage_high,
      //   deal: reqData.wage.deal,
      //   etc: {
      //     type: reqData.wage.etc.type,
      //     percent: reqData.wage.etc.percent,
      //   },
      // },

      // employment_type: reqData.employment_type,

      // work_hours: {
      //   work_hours_per_week: reqData.work_hours.work_hours_per_week,
      //   start: reqData.work_hours.start,
      //   end: reqData.work_hours.end,
      //   restTimeStart: reqData.work_hours.restTimeStart,
      //   restTimeEnd: reqData.work_hours.restTimeEnd,
      //   deal: reqData.work_hours.deal,
      //   detail: reqData.work_hours.detail,
      // },
      // place: reqData.place,
      // endPayType: reqData.endPayType,
      // socialEnsurance: reqData.socialEnsurance,
      // employmentType: reqData.employmentType,
      // recruitmentType: reqData.recruitmentType,
      // recruitmentDocsType: reqData.recruitmentDocsType,
    }));
    navigate("/jobPosting");
    // } catch (error) {
    //   alert(error);
    //   // console.log(error);
    //   // console.log("에러핸들링" + JSON.stringify(error));
    // }
  };

  if (isLoading)
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <h2>잠시만 기다려주세요</h2>
        <BeatLoader />
      </div>
    );

  return (
    <div className={styles.appWrapper}>
      <nav className={styles.navWrapper}>
        <h2>메뉴</h2>
        <ul className={styles.navList}>
          <li
            className={styles.navItem}
            style={{ fontWeight: "600" }}
            onClick={() => navigate("/")}
          >
            공고입력
          </li>
          <li
            className={styles.navItem}
            onClick={() => navigate("/jobPosting")}
          >
            초안수정
          </li>
          <li className={styles.navItem} onClick={() => navigate("/preview")}>
            미리보기
          </li>
        </ul>
      </nav>
      <div>
        <h2 className={styles.mainText}>공고입력</h2>
        <hr className={styles.hrStyle} />

        <form
          className={styles.formStyle}
          onSubmit={handleSubmit((reqData) => onsubmit(reqData))}
        >
          <ul className={styles.formWrapper}>
            <li className={styles.inputWrapper}>
              <label htmlFor="" className={styles.labelStyle}>
                사업자 등록번호
              </label>{" "}
              <input
                type="text"
                className={styles.inputStyle}
                {...register(
                  "business_registration_number"
                  // {
                  // required: "This field is required", // 필수 항목
                  // pattern: {
                  //   value: /^\d{3}-\d{2}-\d{5}$/, // 정규 표현식
                  //   message: "Invalid ID format, must be ***-**-*****", // 오류 메시지
                  // },  }
                )}
              />
            </li>
            <li className={styles.inputWrapper}>
              <label htmlFor="" className={styles.labelStyle}>
                {" "}
                직무 내용
              </label>{" "}
              <input
                type="text"
                className={styles.inputStyle}
                {...register("job_description")}
              />
            </li>
            <li className={styles.inputWrapper}>
              <label htmlFor="" className={styles.labelStyle}>
                {" "}
                회사 소개 (선택)
              </label>{" "}
              <input
                type="text"
                className={styles.inputStyle}
                {...register("company_intro")}
              />
            </li>
          </ul>
          <button className={styles.btnStyle} type="submit">
            AI 구인공고 초안 작성
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
