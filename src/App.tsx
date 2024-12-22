import { useAtom } from "jotai";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { BeatLoader } from "react-spinners";
import * as styles from "./app.css";
import { resultAtom } from "./atom/atom";
const App = () => {
  const { register, handleSubmit } = useForm();

  const [, setLLMAtom] = useAtom(resultAtom);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const onsubmit = async (reqData: any) => {
    try {
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

      if (!response.ok) {
        const errorData = await response.json();

        throw new Error(errorData.detail[0].msg || "An error occurred.");
      }

      const data = await response.json();
      setIsLoading(false);
      setLLMAtom((prev) => ({
        ...prev,
        ...data,
      }));
      navigate("/jobPosting");
    } catch (error) {
      setIsLoading(false);
      alert(`Error`);
    }
  };

  return (
    <div className={styles.appWrapper}>
      {isLoading && <BeatLoader className={styles.loading} />}
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
