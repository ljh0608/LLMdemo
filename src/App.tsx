import { useForm } from "react-hook-form";
import * as styles from "./app.css";
const App = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className={styles.appWrapper}>
      <nav className={styles.navWrapper}>
        <h2>메뉴</h2>
        <ul className={styles.navList}>
          <li className={styles.navItem}>검색</li>
          <li className={styles.navItem}>미리보기</li>
          <li className={styles.navItem}>결과 확인</li>
        </ul>
      </nav>
      <div>
        <h2 className={styles.mainText}>채용 공고 입력</h2>
        <hr className={styles.hrStyle} />

        <form
          className={styles.formWrapper}
          onSubmit={handleSubmit((data) => onSubmit(data))}
        >
          <ul>
            <li className={styles.inputWrapper}>
              <label htmlFor="" className={styles.labelStyle}>
                사업자 등록번호
              </label>{" "}
              <input type="text" className={styles.inputStyle} />
            </li>
            <li className={styles.inputWrapper}>
              <label htmlFor="" className={styles.labelStyle}>
                {" "}
                직무 내용
              </label>{" "}
              <input type="text" className={styles.inputStyle} />
            </li>
            <li className={styles.inputWrapper}>
              <label htmlFor="" className={styles.labelStyle}>
                {" "}
                회사 소개
              </label>{" "}
              <input type="text" className={styles.inputStyle} />
            </li>
          </ul>
          <button className={styles.btnStyle} onClick={onSubmit}>
            등록
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
