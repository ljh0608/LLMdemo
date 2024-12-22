//  <h2 className={styles.mainText}>근무조건</h2>
//   <hr className={styles.hrStyle} />

// <table>
// <tbody className={jobPostingStyles.tbodyStyle}>

//   <tr className={jobPostingStyles.trStyle}>
//     <td className={jobPostingStyles.label}>임금</td>
//     <td className={jobPostingStyles.tdFlexColumnStyle}>
//       <select
//         className={jobPostingStyles.select}
//         {...register("wage.wage_type")}
//       >
//         <option value="선택안함">선택</option>
//         <option value="일급">일급</option>
//         <option value="주급">주급</option>
//         <option value="월급">월급</option>
//       </select>
//       <>
//         <td>
//           <input
//             className={jobPostingStyles.tdInput}
//             type="text"
//             placeholder="0"
//             {...register("wage.wage_low")}
//           />
//           <span> ~ </span>
//           <input
//             className={jobPostingStyles.tdInput}
//             type="text"
//             placeholder="0"
//             {...register("wage.wage_high")}
//           />
//           <input
//             type="checkbox"
//             {...register("wage.deal")}
//             style={{ marginLeft: "8px" }}
//           />
//           <span style={{ marginLeft: "8px" }}>협의 가능</span>
//         </td>
//       </>
//       <p className={jobPostingStyles.subText}>
//         * 입금액은 '원' 단위로 입력해주세요
//       </p>

//       <td className={jobPostingStyles.tdFlexStyle}>
//         <span>상여금 별도</span>{" "}
//         <input
//           type="radio"
//           id="기본급기준"
//           value="기본급 기준"
//           {...register("wage.etc.type")}
//         />
//         <label htmlFor="기본급기준">기본급 기준</label>
//         <input
//           type="radio"
//           id="월연봉기준"
//           value="월 연봉 기준"
//           {...register("wage.etc.type")}
//         />
//         <label htmlFor="월연봉기준"> 월 연봉 기준</label>
//         <input
//           type="number"
//           className={jobPostingStyles.tdInput}
//           {...register("wage.etc.percent")}
//         />
//         <span>%</span>
//       </td>
//       <p className={jobPostingStyles.subText}>
//         * 상여금이 없는 경우 0%입력이 가능합니다.
//       </p>
//     </td>
//   </tr>

//   <tr className={jobPostingStyles.trStyle}>
//     <td className={jobPostingStyles.label}>근무 형태</td>
//     <>
//       <td className={jobPostingStyles.tdFlexStyle}>
//         <input
//           type="radio"
//           value="주 5일"
//           {...register("employment_type")}
//         />

//         <span>주 5일</span>

//         <input
//           type="radio"
//           value="주 6일"
//           {...register("employment_type")}
//         />

//         <span>주 6일</span>

//         <input
//           type="radio"
//           value="주 4일"
//           {...register("employment_type")}
//         />

//         <span>주 4일</span>

//         <input
//           type="radio"
//           value="주 3일"
//           {...register("employment_type")}
//         />

//         <span>주 3일</span>

//         <input
//           type="radio"
//           value="주 2일"
//           {...register("employment_type")}
//         />

//         <span>주 2일</span>

//         <input
//           type="radio"
//           value="주 1일"
//           {...register("employment_type")}
//         />

//         <span>주 1일</span>

//         <input
//           type="radio"
//           value="주 7일"
//           {...register("employment_type")}
//         />

//         <span>주 7일</span>
//       </td>
//       <p className={jobPostingStyles.subText}>
//         * 주 7일, 격일 근무는 근로기준법 제63조 근로시간 등
//         적용업종(농림, 수산, 축산업 등) 또는 감시, 단속적
//         근로종사자로 승인을 받은 근로자에게 적용 가능합니다.
//       </p>
//     </>
//   </tr>

//   <tr className={jobPostingStyles.trStyle}>
//     <td className={jobPostingStyles.label}>근무 시간</td>
//     <td className={jobPostingStyles.tdFlexColumnStyle}>
//       <div>
//         <span style={{ marginRight: "10px" }}>
//           주 소정 근로시간
//         </span>
//         <span>
//           1주{" "}
//           <input
//             className={jobPostingStyles.tdInput}
//             type="text"
//             placeholder="0"
//             {...register("work_hours.work_hours_per_week")}
//           />
//           시간 근무
//         </span>
//       </div>
//       <div>
//         <span style={{ marginRight: "10px" }}>근무시간</span>

//         <select
//           className={jobPostingStyles.select}
//           {...register("work_hours.start")}
//         >
//           <option value="00:00">00:00</option>
//           <option value="01:00">01:00</option>
//           <option value="02:00">02:00</option>
//           <option value="03:00">03:00</option>
//           <option value="04:00">04:00</option>
//           <option value="05:00">05:00</option>
//           <option value="06:00">06:00</option>
//           <option value="07:00">07:00</option>
//           <option value="08:00">08:00</option>
//           <option value="09:00">09:00</option>
//           <option value="10:00">10:00</option>
//           <option value="11:00">11:00</option>
//           <option value="12:00">12:00</option>
//           <option value="13:00">13:00</option>
//           <option value="14:00">14:00</option>
//           <option value="15:00">15:00</option>
//           <option value="16:00">16:00</option>
//           <option value="17:00">17:00</option>
//           <option value="18:00">18:00</option>
//           <option value="19:00">19:00</option>
//           <option value="20:00">20:00</option>
//           <option value="21:00">21:00</option>
//           <option value="22:00">22:00</option>
//           <option value="23:00">23:00</option>
//           <option value="24:00">24:00</option>
//         </select>
//         <span> ~ </span>

//         <select
//           className={jobPostingStyles.select}
//           {...register("work_hours.end")}
//         >
//           <option value="00:00">00:00</option>
//           <option value="01:00">01:00</option>
//           <option value="02:00">02:00</option>
//           <option value="03:00">03:00</option>
//           <option value="04:00">04:00</option>
//           <option value="05:00">05:00</option>
//           <option value="06:00">06:00</option>
//           <option value="07:00">07:00</option>
//           <option value="08:00">08:00</option>
//           <option value="09:00">09:00</option>
//           <option value="10:00">10:00</option>
//           <option value="11:00">11:00</option>
//           <option value="12:00">12:00</option>
//           <option value="13:00">13:00</option>
//           <option value="14:00">14:00</option>
//           <option value="15:00">15:00</option>
//           <option value="16:00">16:00</option>
//           <option value="17:00">17:00</option>
//           <option value="18:00">18:00</option>
//           <option value="19:00">19:00</option>
//           <option value="20:00">20:00</option>
//           <option value="21:00">21:00</option>
//           <option value="22:00">22:00</option>
//           <option value="23:00">23:00</option>
//           <option value="24:00">24:00</option>
//         </select>
//       </div>

//       <div>
//         <span style={{ marginRight: "10px" }}>휴게시간</span>

//         <select
//           className={jobPostingStyles.select}
//           {...register("work_hours.restTimeStart")}
//         >
//           <option value="00:00">00:00</option>
//           <option value="01:00">01:00</option>
//           <option value="02:00">02:00</option>
//           <option value="03:00">03:00</option>
//           <option value="04:00">04:00</option>
//           <option value="05:00">05:00</option>
//           <option value="06:00">06:00</option>
//           <option value="07:00">07:00</option>
//           <option value="08:00">08:00</option>
//           <option value="09:00">09:00</option>
//           <option value="10:00">10:00</option>
//           <option value="11:00">11:00</option>
//           <option value="12:00">12:00</option>
//           <option value="13:00">13:00</option>
//           <option value="14:00">14:00</option>
//           <option value="15:00">15:00</option>
//           <option value="16:00">16:00</option>
//           <option value="17:00">17:00</option>
//           <option value="18:00">18:00</option>
//           <option value="19:00">19:00</option>
//           <option value="20:00">20:00</option>
//           <option value="21:00">21:00</option>
//           <option value="22:00">22:00</option>
//           <option value="23:00">23:00</option>
//           <option value="24:00">24:00</option>
//         </select>
//         <span> ~ </span>

//         <select
//           className={jobPostingStyles.select}
//           {...register("work_hours.restTimeEnd")}
//         >
//           <option value="00:00">00:00</option>
//           <option value="01:00">01:00</option>
//           <option value="02:00">02:00</option>
//           <option value="03:00">03:00</option>
//           <option value="04:00">04:00</option>
//           <option value="05:00">05:00</option>
//           <option value="06:00">06:00</option>
//           <option value="07:00">07:00</option>
//           <option value="08:00">08:00</option>
//           <option value="09:00">09:00</option>
//           <option value="10:00">10:00</option>
//           <option value="11:00">11:00</option>
//           <option value="12:00">12:00</option>
//           <option value="13:00">13:00</option>
//           <option value="14:00">14:00</option>
//           <option value="15:00">15:00</option>
//           <option value="16:00">16:00</option>
//           <option value="17:00">17:00</option>
//           <option value="18:00">18:00</option>
//           <option value="19:00">19:00</option>
//           <option value="20:00">20:00</option>
//           <option value="21:00">21:00</option>
//           <option value="22:00">22:00</option>
//           <option value="23:00">23:00</option>
//           <option value="24:00">24:00</option>
//         </select>
//         <input
//           type="checkbox"
//           {...register("work_hours.detail")}
//           style={{ marginLeft: "5px" }}
//         />
//         <span> 근무 시간 협의 가능</span>
//       </div>

//     </td>
//   </tr>

//   <tr className={jobPostingStyles.trStyle}>
//     <td className={jobPostingStyles.label}>근무 예정지</td>
//     <td>
//       <textarea
//         className={jobPostingStyles.textarea}
//         placeholder="근무 예정지 입력"
//         {...register("place")}
//       ></textarea>
//     </td>
//   </tr>
//   <tr className={jobPostingStyles.trStyle}>
//     <td className={jobPostingStyles.label}>퇴직급여</td>
//     <>
//       <td className={jobPostingStyles.tdFlexStyle}>
//         <input
//           type="radio"
//           {...register("endPayType")}
//           value="퇴직금"
//         />
//         <span>퇴직금</span>

//         <input
//           type="radio"
//           value="퇴직연금"
//           {...register("endPayType")}
//         />
//         <span>퇴직연금</span>

//         <input
//           type="radio"
//           value="해당 없음"
//           {...register("endPayType")}
//         />

//         <span>해당 없음 (근로계약기간 1년 미만 등)</span>
//       </td>
//     </>
//   </tr>

//   <tr>
//     <td className={jobPostingStyles.label}>사회보험</td>
//     <>
//       <td className={jobPostingStyles.tdFlexStyle}>
//         <input
//           type="checkbox"
//           {...register("socialEnsurance")}
//           value="고용보험"
//         />
//         <span>고용보험</span>

//         <input
//           type="checkbox"
//           {...register("socialEnsurance")}
//           value="산재보험"
//         />
//         <span>산재보험</span>

//         <input
//           type="checkbox"
//           {...register("socialEnsurance")}
//           value="건강보험"
//         />
//         <span>건강보험</span>

//         <input
//           type="checkbox"
//           {...register("socialEnsurance")}
//           value="국민연금"
//         />
//         <span>국민연금</span>
//       </td>
//     </>
//   </tr>
// </tbody>
// </table>

// <h2 className={styles.mainText}>전형 방법</h2>
// <hr className={styles.hrStyle} />

// <table className={jobPostingStyles.table}>
//   <tbody className={jobPostingStyles.tbodyStyle}>
//     <tr className={jobPostingStyles.trStyle}>
//       <td className={jobPostingStyles.label}>전형방법</td>
//       <>
//         <td className={jobPostingStyles.tdFlexStyle}>
//           <input
//             type="checkbox"
//             {...register("recruitmentType")}
//             value={"서류"}
//           />
//           <span>서류</span>

//           <input
//             type="checkbox"
//             {...register("recruitmentType")}
//             value={"면접"}
//           />
//           <span>면접</span>

//           <input
//             type="checkbox"
//             {...register("recruitmentType")}
//             value={"필기"}
//           />
//           <span>필기</span>

//           <input
//             type="checkbox"
//             {...register("recruitmentType")}
//             value={"기타"}
//           />
//           <span>기타</span>
//         </td>
//       </>
//     </tr>

//     <tr className={jobPostingStyles.trStyle}>
//       <td className={jobPostingStyles.label}>제출 서류</td>
//       <>
//         <td className={jobPostingStyles.tdFlexStyle}>
//           <input
//             type="checkbox"
//             value={"이력서"}
//             {...register("recruitmentDocsType")}
//           />
//           <span>이력서</span>

//           <input
//             type="checkbox"
//             value={"이력서 (자사 이력서 양식)"}
//             {...register("recruitmentDocsType")}
//           />
//           <span>이력서 - 자사이력서 양식 </span>

//           <input
//             type="checkbox"
//             value={"자기소개서"}
//             {...register("recruitmentDocsType")}
//           />
//           <span>자기소개서 </span>

//           <input
//             type="checkbox"
//             value={"경력증명서"}
//             {...register("recruitmentDocsType")}
//           />
//           <span>경력증명서</span>

//           <input
//             type="checkbox"
//             value={"졸업증명서"}
//             {...register("recruitmentDocsType")}
//           />
//           <span>졸업증명서</span>

//           <input
//             type="checkbox"
//             value={"기타"}
//             {...register("recruitmentDocsType")}
//           />
//           <span>기타</span>
//         </td>
//       </>
//     </tr>
//   </tbody>
// </table>
