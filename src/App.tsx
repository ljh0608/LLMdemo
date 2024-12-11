import { useAtom } from "jotai";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import * as styles from "./app.css";
import { resultAtom } from "./atom/atom";
const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [LLMAtom, setLLMAtom] = useAtom(resultAtom);
  console.log(LLMAtom);
  const navigate = useNavigate();
  const onSubmit = async (reqData: any) => {
    console.log(reqData);
    try {
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
        throw new Error("API request failed");
      }

      const data = await response.json();
      console.log(data);
      setLLMAtom(data);
      navigate("/jobPosting");
    } catch (error) {
      console.log("error");
    } finally {
      // setLoading(false);
    }
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
        <h2 className={styles.mainText}>AI 구인공고 작성지원</h2>
        <hr className={styles.hrStyle} />

        <form
          className={styles.formStyle}
          onSubmit={handleSubmit((reqData) => onSubmit(reqData))}
        >
          <ul className={styles.formWrapper}>
            <li className={styles.inputWrapper}>
              <label htmlFor="" className={styles.labelStyle}>
                사업자 등록번호
              </label>{" "}
              <input
                type="text"
                className={styles.inputStyle}
                {...register("business_registration_number", {
                  required: "This field is required", // 필수 항목
                  pattern: {
                    value: /^\d{3}-\d{2}-\d{5}$/, // 정규 표현식
                    message: "Invalid ID format, must be ***-**-*****", // 오류 메시지
                  },
                })}
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
                {...register("job_description", { required: true })}
              />
            </li>
            <li className={styles.inputWrapper}>
              <label htmlFor="" className={styles.labelStyle}>
                {" "}
                회사 소개
              </label>{" "}
              <input
                type="text"
                className={styles.inputStyle}
                {...register("company_intro", { required: true })}
              />
            </li>
          </ul>
          <button className={styles.btnStyle} type="submit">
            등록
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
