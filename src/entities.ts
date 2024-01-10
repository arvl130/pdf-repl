type Section = {
  id: number
  adviserId: string
  name: string
  gradeLevelId:
    | "GRADE_7"
    | "GRADE_8"
    | "GRADE_9"
    | "GRADE_10"
    | "GRADE_11"
    | "GRADE_12"
  schoolYearId: number
  passcode: string
}

type Student = {
  id: number
  gradeLevelId:
    | "GRADE_7"
    | "GRADE_8"
    | "GRADE_9"
    | "GRADE_10"
    | "GRADE_11"
    | "GRADE_12"
  firstName: string
  middleName: string | null
  lastName: string
  gender: "MALE" | "FEMALE"
  contactNumber: string
}

type SchoolYear = {
  id: number
  startDate: string
  endDate: string
  isCurrent: boolean
}

type Attendance = {
  recordDate: string
  schoolYearId: number
  quarter: "FIRST" | "SECOND" | "THIRD" | "FOURTH"
  studentId: number
  attendedAt: Date | null
  status: "PRESENT" | "ABSENT" | "TARDY" | "EXCUSED"
  remarks: string
  notify: boolean
}
