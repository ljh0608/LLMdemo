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
      experience: "",
      education: "",
      // wage_type: "",
      wage: {
        wage_type: "",
        wage_low: "",
        wage_high: "",
        deal: false,
        etc: {
          type: "",
          percent: "",
        },
      },

      employment_type: "",
      work_hours: {
        work_hours_per_week: "",
        start: "",
        end: "",
        restTimeStart: "",
        restTimeEnd: "",
        deal: false,
      },
      place: "",
      endPayType: "",
      socialEnsurance: "",
      employmentType: "",
      recruitmentType: "",
      recruitmentDocsType: "",
    },
  });

  const updateInfo = (reqData: any) => {
    setLLMAtom((prev) => ({
      ...prev,
      job_title: reqData.job_title,
      recommended_job: reqData.recommended_job,
      recommended_category: reqData.recommended_category,
      category_keywords: reqData.category_keywords,
      job_intro: reqData.job_intro,
      main_tasks: reqData.main_tasks,
      preferred_qualifications: reqData.preferred_qualifications,
    }));

    navigate("/");
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
        <h2 className={styles.mainText}>채용 공고 결과 확인</h2>
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
                  <input
                    className={jobPostingStyles.input}
                    type="text"
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
                  <input
                    className={jobPostingStyles.input}
                    type="text"
                    {...register("preferred_qualifications")}
                  />
                </td>
              </tr>
              <tr className={jobPostingStyles.trStyle}>
                <td className={jobPostingStyles.label}>경력</td>
                <td>
                  <td className={jobPostingStyles.tdFlexStyle}>
                    <label htmlFor="신입" style={{ marginLeft: "5px" }}>
                      신입
                    </label>
                    <input type="radio" id="신입" {...register("experience")} />
                    <label htmlFor="경력"> 경력</label>
                    <input type="radio" id="경력" {...register("experience")} />
                    <div>
                      <span>
                        (최소{" "}
                        <input
                          type="text"
                          className={jobPostingStyles.tdInput}
                        />{" "}
                        년{" "}
                        <input
                          type="text"
                          className={jobPostingStyles.tdInput}
                        />{" "}
                        개월) 이상
                      </span>
                    </div>
                  </td>
                </td>
              </tr>

              {/* 학력 */}
              <tr className={jobPostingStyles.trStyle}>
                <td className={jobPostingStyles.label}>학력</td>
                <td className={jobPostingStyles.tdFlexStyle}>
                  <select
                    className={jobPostingStyles.select}
                    {...register("education")}
                  >
                    <option value="required">선택</option>
                    <option value="optional">초졸이하</option>
                    <option value="optional">중졸</option>
                    <option value="optional">고졸</option>
                    <option value="optional">대졸(2~3년)</option>
                    <option value="optional">대졸(4년)</option>
                    <option value="optional">석사</option>
                    <option value="optional">박사</option>
                    <option value="optional">학력무관</option>
                  </select>
                  ~
                  <select
                    className={jobPostingStyles.select}
                    {...register("education")}
                  >
                    <option value="required">선택</option>
                    <option value="optional">초졸이하</option>
                    <option value="optional">중졸</option>
                    <option value="optional">고졸</option>
                    <option value="optional">대졸(2~3년)</option>
                    <option value="optional">대졸(4년)</option>
                    <option value="optional">석사</option>
                    <option value="optional">박사</option>
                    <option value="optional">학력무관</option>
                  </select>
                  <input
                    type="checkbox"
                    {...register("education")}
                    style={{ marginLeft: "8px" }}
                  />
                  <span style={{ marginLeft: "8px" }}>학력 무관</span>
                </td>
              </tr>
            </tbody>
          </table>
          <h2 className={styles.mainText}>근무조건</h2>
          <table>
            <tbody className={jobPostingStyles.tbodyStyle}>
              {/* 임금 */}
              <tr className={jobPostingStyles.trStyle}>
                <td className={jobPostingStyles.label}>임금</td>
                <td className={jobPostingStyles.tdFlexColumnStyle}>
                  <select
                    className={jobPostingStyles.select}
                    {...register("wage.wage_type")}
                  >
                    <option selected>선택</option>
                    <option value="optional">일급</option>
                    <option value="optional">주급</option>
                    <option value="optional">월급</option>
                    선택
                  </select>
                  <>
                    <td>
                      <input
                        className={jobPostingStyles.tdInput}
                        type="text"
                        placeholder="0"
                        {...register("wage.wage_low")}
                      />
                      <span> ~ </span>
                      <input
                        className={jobPostingStyles.tdInput}
                        type="text"
                        placeholder="0"
                        {...register("wage.wage_high")}
                      />
                      <input
                        type="checkbox"
                        {...register("wage.deal")}
                        style={{ marginLeft: "8px" }}
                      />
                      <span style={{ marginLeft: "8px" }}>협의 가능</span>
                    </td>
                  </>
                  <p className={jobPostingStyles.subText}>
                    * 입금액은 '원' 단위로 입력해주세요
                  </p>

                  <td className={jobPostingStyles.tdFlexStyle}>
                    <span>상여금 별도</span>{" "}
                    <input
                      type="radio"
                      id="기본급기준"
                      {...register("wage.etc.type")}
                    />
                    <label htmlFor="기본급기준">기본급 기준</label>
                    <input
                      type="radio"
                      id="월연봉기준"
                      {...register("wage.etc.type")}
                    />
                    <label htmlFor="월연봉기준"> 월 연봉 기준</label>
                    <input
                      type="number"
                      className={jobPostingStyles.tdInput}
                      {...register("wage.etc.percent")}
                    />
                    <span>%</span>
                  </td>
                  <p className={jobPostingStyles.subText}>
                    * 상여금이 없는 경우 0%입력이 가능합니다.
                  </p>
                </td>
              </tr>

              {/* 근무 형태 */}
              <tr className={jobPostingStyles.trStyle}>
                <td className={jobPostingStyles.label}>근무 형태</td>
                <td>
                  <td className={jobPostingStyles.tdFlexStyle}>
                    <input type="radio" {...register("employment_type")} />

                    <span>주 5일</span>

                    <input type="radio" {...register("employment_type")} />

                    <span>주 6일</span>

                    <input type="radio" {...register("employment_type")} />

                    <span>주 4일</span>

                    <input type="radio" {...register("employment_type")} />

                    <span>주 3일</span>

                    <input type="radio" {...register("employment_type")} />

                    <span>주 2일</span>

                    <input type="radio" {...register("employment_type")} />

                    <span>주 1일</span>

                    <input type="radio" {...register("employment_type")} />

                    <span>주 7일</span>
                  </td>
                  <p className={jobPostingStyles.subText}>
                    * 주 7일, 격일 근무는 근로기준법 제63조 근로시간 등
                    적용업종(농림, 수산, 축산업 등) 또는 감시, 단속적
                    근로종사자로 승인을 받은 근로자에게 적용 가능합니다.
                  </p>
                </td>
              </tr>

              {/* 근무 시간 */}
              <tr className={jobPostingStyles.trStyle}>
                <td className={jobPostingStyles.label}>근무 시간</td>
                <td className={jobPostingStyles.tdFlexColumnStyle}>
                  <div>
                    <span style={{ marginRight: "10px" }}>
                      주 소정 근로시간
                    </span>
                    <span>
                      1주{" "}
                      <input
                        className={jobPostingStyles.tdInput}
                        type="text"
                        placeholder="0"
                        {...register("work_hours.work_hours_per_week")}
                      />
                      시간 근무
                    </span>
                  </div>
                  <div>
                    <span style={{ marginRight: "10px" }}>근무시간</span>
                    <input
                      className={jobPostingStyles.tdInput}
                      type="text"
                      placeholder="0"
                      {...register("work_hours.start")}
                    />
                    <span> ~ </span>
                    <input
                      className={jobPostingStyles.tdInput}
                      type="text"
                      placeholder="0"
                      {...register("work_hours.end")}
                    />
                  </div>

                  <div>
                    <span style={{ marginRight: "10px" }}>휴게시간</span>
                    <input
                      className={jobPostingStyles.tdInput}
                      type="text"
                      placeholder="0"
                      {...register("work_hours.restTimeStart")}
                    />
                    <span> ~ </span>
                    <input
                      className={jobPostingStyles.tdInput}
                      type="text"
                      placeholder="0"
                      {...register("work_hours.restTimeEnd")}
                    />
                  </div>

                  <div>
                    <input type="checkbox" {...register("work_hours.deal")} />
                    <span>상세 시간 입력</span>
                    <span className={jobPostingStyles.subText}>
                      * 일별 근무시간이 일정하지 않은 경우, [상세시간]선택 후
                      요일별 근무시간 및 휴게시간을 입력하세요
                    </span>
                  </div>
                </td>
              </tr>

              {/* 기타 */}
              <tr className={jobPostingStyles.trStyle}>
                <td className={jobPostingStyles.label}>근무 예정지</td>
                <td>
                  <textarea
                    className={jobPostingStyles.textarea}
                    placeholder="근무 예정지 입력"
                    {...register("place")}
                  ></textarea>
                </td>
              </tr>
              <tr className={jobPostingStyles.trStyle}>
                <td className={jobPostingStyles.label}>퇴직급여</td>
                <td>
                  <td className={jobPostingStyles.tdFlexStyle}>
                    <input type="radio" {...register("employment_type")} />
                    <span>퇴직금</span>

                    <input type="radio" {...register("employment_type")} />
                    <span>퇴직연금</span>

                    <input type="radio" {...register("employment_type")} />

                    <span>해당 없음 (근로계약기간 1년 미만 등)</span>
                  </td>
                </td>
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
              <tr>
                <td className={jobPostingStyles.label}>사회보험</td>
                <td>
                  <td className={jobPostingStyles.tdFlexStyle}>
                    <input type="checkbox" {...register("socialEnsurance")} />
                    <span>고용보험</span>

                    <input type="checkbox" {...register("socialEnsurance")} />
                    <span>산재보험</span>

                    <input type="checkbox" {...register("socialEnsurance")} />
                    <span>건강보험</span>

                    <input type="checkbox" {...register("socialEnsurance")} />
                    <span>국민연금</span>
                  </td>
                </td>
              </tr>
            </tbody>
          </table>

          <h2 className={styles.mainText}>전형 방법</h2>
          <table className={jobPostingStyles.table}>
            <tbody className={jobPostingStyles.tbodyStyle}>
              <tr className={jobPostingStyles.trStyle}>
                <td className={jobPostingStyles.label}>전형방법</td>
                <td>
                  <td className={jobPostingStyles.tdFlexStyle}>
                    <input type="checkbox" {...register("recruitmentType")} />
                    <span>서류</span>

                    <input type="checkbox" {...register("recruitmentType")} />
                    <span>면접</span>

                    <input type="checkbox" {...register("recruitmentType")} />
                    <span>필기</span>

                    <input type="checkbox" {...register("recruitmentType")} />
                    <span>기타</span>
                  </td>
                </td>
              </tr>

              <tr className={jobPostingStyles.trStyle}>
                <td className={jobPostingStyles.label}>제출 서류</td>
                <td>
                  <td className={jobPostingStyles.tdFlexStyle}>
                    <input
                      type="checkbox"
                      {...register("recruitmentDocsType")}
                    />
                    <span>이력서</span>

                    <input
                      type="checkbox"
                      {...register("recruitmentDocsType")}
                    />
                    <span>이력서 - 자사이력서 양식 </span>

                    <input
                      type="checkbox"
                      {...register("recruitmentDocsType")}
                    />
                    <span>자기소개서 </span>

                    <input
                      type="checkbox"
                      {...register("recruitmentDocsType")}
                    />
                    <span>경력증명서</span>

                    <input
                      type="checkbox"
                      {...register("recruitmentDocsType")}
                    />
                    <span>졸업증명서</span>

                    <input
                      type="checkbox"
                      {...register("recruitmentDocsType")}
                    />
                    <span>기타</span>
                  </td>
                </td>
              </tr>
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
