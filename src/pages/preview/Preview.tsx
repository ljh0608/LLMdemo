import { useAtom } from "jotai";
import { resultAtom } from "../../atom/atom.ts";
import * as styles from "./styles.css.ts";

const Preview = () => {
  const [data, setData] = useAtom(resultAtom);
  console.log(data);
  return (
    <div className={styles.wrapper}>
      <h2 style={{ marginTop: "60px" }}> {data.job_title}</h2>

      <div className={styles.jobDescription}>
        <h2 className={styles.jdTitle}>직무내용</h2>
        <p style={{ margin: "0 20px" }}>{data.job_intro}</p>

        <table className={styles.table}>
          <thead>
            <tr className={styles.tableRow}>
              <th className={`${styles.tableHeader} ${styles.tableInner}`}>
                추천 직무
              </th>
              <th className={`${styles.tableHeader} ${styles.tableInner}`}>
                추천 직종
              </th>
              <th className={styles.tableHeader}>직종 키워드</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.tableRow}>
              <td className={`${styles.tableCell} ${styles.tableInner}`}>
                {data.recommended_job}
              </td>
              <td className={`${styles.tableCell} ${styles.tableInner}`}>
                {data.recommended_category}
              </td>
              <td className={styles.tableCell}> {data.category_keywords}</td>
            </tr>
          </tbody>
        </table>

        <table className={styles.table}>
          <thead>
            <tr className={styles.tableRow}>
              <th className={`${styles.tableHeader} ${styles.tableInner}`}>
                주요업무
              </th>
              <th className={styles.tableHeader}>AI추천 우대사항</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.tableRow}>
              <td className={`${styles.tableCell} ${styles.tableInner}`}>
                {data.main_tasks}
              </td>
              <td className={styles.tableCell}>
                {data.preferred_qualifications}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.container}>
        {/* 지원자격 */}
        <div className={styles.section}>
          <div className={styles.title}>지원자격</div>
          <div className={styles.row}>
            <span className={styles.label}>경력 구분</span>
            {data.experience === "신입" ? (
              <span>{data.experience}</span>
            ) : (
              <span>
                {data.experience} - {data.expStart}년 {data.expEnd}개월 이상
              </span>
            )}
          </div>
          <div className={styles.row}>
            <span className={styles.label}>학력</span>
            <span>
              {data.education3 ? (
                <span>
                  {" "}
                  {data.education1} ~ {data.education2}
                </span>
              ) : (
                <span>학력 무관 </span>
              )}
            </span>
          </div>
        </div>

        {/* 근무조건 */}
        <div className={styles.section}>
          <div className={styles.title}>전형방법</div>
          <div className={styles.row}>
            <span className={styles.label}>전형방법</span>
            <span>
              {data.recruitmentType.map((item, index) => (
                <span>
                  {item}
                  {index < data.recruitmentType.length - 1 && " / "}
                </span>
              ))}
            </span>
          </div>
          <div className={styles.row}>
            <span className={styles.label}>제출 서류</span>{" "}
            <span>
              {data.recruitmentDocsType.map((item, index) => (
                <span>
                  {item}
                  {index < data.recruitmentDocsType.length - 1 && " / "}
                </span>
              ))}
            </span>
          </div>
        </div>

        {/* 근무조건  */}
        <div className={styles.section}>
          <div className={styles.title}>근무조건</div>
          <div className={styles.row}>
            <span className={styles.label}>임금</span>
            <span>
              <span>
                {data.wage.wage_type} / {data.wage.wage_low} ~{" "}
                {data.wage.wage_high}{" "}
              </span>
              {data.wage.deal ? (
                <span> / 협의 가능</span>
              ) : (
                <span> / 협의 불가</span>
              )}
            </span>
          </div>

          <div className={styles.row}>
            <span className={styles.label}></span>
            <span>
              {" "}
              {data.wage.etc.type} / 상여금 : {data.wage.etc.percent} %
            </span>
          </div>
          <div className={styles.row}>
            <span className={styles.label}>근무형태</span>
            <span> {data.employment_type}</span>
          </div>

          <div className={styles.row}>
            <span className={styles.label}>근무예정지</span>
            <span> {data.place}</span>
          </div>
        </div>

        {/* 근무조건 이어서 */}
        <div className={styles.section}>
          <div className={styles.title}></div>
          <div className={styles.row}>
            <span className={styles.label}>근무 시간</span>
            <span>주 {data.work_hours.work_hours_per_week} 시간 근무 </span>
            {data.work_hours.deal ? <span> / 근무시간 협의 가능 </span> : <></>}
          </div>

          {data.work_hours.detail ? (
            <div className={styles.row}>
              <span className={styles.label}>상세 시간</span>
              <span>
                <span>
                  근무시간 : {data.work_hours.start} ~ {data.work_hours.end}{" "}
                </span>
                <span>
                  휴게시간 : {data.work_hours.restTimeStart} ~{" "}
                  {data.work_hours.restTimeEnd}{" "}
                </span>
              </span>
            </div>
          ) : (
            <></>
          )}

          <div className={styles.row}>
            <span className={styles.label}>사회 보험</span>
            <span>
              {data.socialEnsurance.map((item, index) => (
                <span>
                  {item}
                  {index < data.socialEnsurance.length - 1 && " / "}
                </span>
              ))}
            </span>
          </div>

          <div className={styles.row}>
            <span className={styles.label}>퇴직급여</span>

            <span> {data.endPayType}</span>
          </div>
        </div>
      </div>

      {/*  AI 출력부분     */}
      {/* <div className={styles.section}>
        <div className={styles.title}></div>
        <div className={styles.row}>
          <span className={styles.label}>근무 시간</span>
     
        </div>

        <div className={styles.row}>
          <span className={styles.label}>사회 보험</span>
          <span> {data.socialEnsurance}</span>
        </div>

        <div className={styles.row}>
          <span className={styles.label}>퇴직급여</span>
          <span> {data.endPayType}</span>
        </div>
      </div> */}
      {/* Actions */}
      <div className={styles.actions}>
        <button className={styles.button}>채용정보이력</button>
        <button className={styles.button}>관심기업등록</button>
        <button className={styles.button}>열람차단</button>
      </div>
    </div>
  );
};

export default Preview;
