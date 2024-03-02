// 사용자 목록을 가져오는 API입니다.
// Response JSON
// [
//   {
//     "id": "사용자ID",
//     "name": "이름",
//     "email": "이메일@도메인",
//     "role": "역할ID",
//     "status": "상태ID",
//     "lastLogin": "마지막로그인일시",
//   },
//   ...
// ]
export const getUsers = () => fetch('/data/users.json')
  .then((res) => res.json())

// 권한을 가져오는 API입니다.
// Response JSON
// [
//   {
//     "id": "권한ID",
//     "name": "권한명",
//   },
//   ...
// ]
export const getRoles = () => fetch('/data/roles.json').then((res) => res.json())

// Statuses를 가져오는 API입니다.
// Response JSON
// [
//   {
//     "id": "상태ID",
//     "name": "상태명",
//     "color": "색상",
//   },
//   ...
// ]
export const getStatuses = () => fetch('/data/statuses.json').then((res) => res.json())

// 사용자를 추가하는 API입니다.
// 1초 뒤에 성공 혹은 실패를 반환하는 Promise를 반환합니다.
// 일정 확률로 실패할 수 있습니다.
// 모든 입력이 유효하지 않으면 반드시 실패합니다.
// Request JSON
// {
//   "name": "이름",
//   "email": "이메일@도메인",
//   "role": "역할ID",
// }
export const postUser = (user) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!user || !(typeof user.name === "string" && user.name.trim() !== "") || !(typeof user.email === "string" && user.email.trim() !== "") || typeof user.role !== "number") {
        reject("응답 형식이 잘못되었습니다.")
        return
      }
      const error = Math.random() > 0.8
      if (error) {
        reject("일정 확률로 실패합니다.")
      } else {
        resolve("사용자 추가에 성공했습니다.")
      }
    }, 1000)
  })
}