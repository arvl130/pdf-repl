import React, { useMemo } from "react"
import { Polygon, Svg, Text, View } from "@react-pdf/renderer"
import {
  getCountOfWeekDaysToSkipFromGivenMonth,
  getSchoolDaysForGivenMonth,
} from "@/date-conversions"

function Head() {
  return (
    <View
      style={{
        fontSize: 6,
        flexDirection: "row",
        borderBottomWidth: 1,
      }}
    >
      <View
        style={{
          width: "20%",
          fontFamily: "Helvetica-Bold",
          borderRightWidth: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            textAlign: "center",
          }}
        >
          LEARNER'S NAME
        </Text>
        <Text>(Last Name, First Name, Middle Name)</Text>
      </View>
      <View
        style={{
          flex: 1,
          fontFamily: "Helvetica-Bold",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            paddingVertical: 1,
          }}
        >
          <Text
            style={{
              textAlign: "center",
            }}
          >
            (1st row for date, 2nd row for Day: M, T, W, TH, F)
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            borderTopWidth: 1,
          }}
        >
          {[...Array(25)].map((_, index) => (
            <View
              key={index + 1}
              style={{
                flex: 1,
                textAlign: "center",
                borderRightWidth: index + 1 === 25 ? undefined : 1,
              }}
            >
              <Text>{index + 1}</Text>
            </View>
          ))}
        </View>
        <View
          style={{
            flexDirection: "row",
            borderTopWidth: 1,
          }}
        >
          {[...Array(25)].map((_, index) => (
            <View
              key={index + 1}
              style={{
                flex: 1,
                textAlign: "center",
                paddingTop: 3,
                paddingBottom: 3,
                borderRightWidth: index + 1 === 25 ? undefined : 1,
              }}
            >
              {(index + 1) % 5 === 1 && (
                <Text
                  style={{
                    transform: "rotate(270deg)",
                  }}
                >
                  M
                </Text>
              )}
              {(index + 1) % 5 === 2 && (
                <Text
                  style={{
                    transform: "rotate(270deg)",
                  }}
                >
                  T
                </Text>
              )}
              {(index + 1) % 5 === 3 && (
                <Text
                  style={{
                    transform: "rotate(270deg)",
                  }}
                >
                  W
                </Text>
              )}
              {(index + 1) % 5 === 4 && (
                <Text
                  style={{
                    transform: "rotate(270deg)",
                  }}
                >
                  TH
                </Text>
              )}
              {(index + 1) % 5 === 0 && (
                <Text
                  style={{
                    transform: "rotate(270deg)",
                  }}
                >
                  F
                </Text>
              )}
            </View>
          ))}
        </View>
      </View>
      <View
        style={{
          width: "12%",
          borderLeftWidth: 1,
          borderRightWidth: 1,
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            fontFamily: "Helvetica-Bold",
            textAlign: "center",
          }}
        >
          <Text>Total for the Month</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            borderTopWidth: 1,
          }}
        >
          <View
            style={{
              width: "50%",
              borderRightWidth: 1,
              textAlign: "center",
              paddingVertical: 2,
            }}
          >
            <Text>ABSENT</Text>
          </View>
          <View
            style={{
              width: "50%",
              textAlign: "center",
              paddingVertical: 2,
            }}
          >
            <Text>TARDY</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          width: "15%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            textAlign: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Helvetica-Bold",
            }}
          >
            REMARK/S
          </Text>
        </View>
        <View
          style={{
            fontSize: 5,
            textAlign: "center",
          }}
        >
          <Text>
            (if{" "}
            <Text
              style={{
                fontFamily: "Helvetica-Bold",
              }}
            >
              DROPPED OUT
            </Text>
            , state reason, please refer to legend number 2. if{" "}
            <Text
              style={{
                fontFamily: "Helvetica-Bold",
              }}
            >
              TRANSFERRED OUT
            </Text>
            , write the name of school.)
          </Text>
        </View>
      </View>
    </View>
  )
}

type ExtendedStudent = Student & { section: Section; attendances: Attendance[] }

function isAbsentOnGivenDay(student: ExtendedStudent, givenDay: string) {
  return student.attendances.some(
    (attendance) =>
      attendance.recordDate === givenDay && attendance.status === "ABSENT"
  )
}

function StudentRecord(props: {
  student: ExtendedStudent
  isLast: boolean
  daysToSkip: number
  weekdays: string[]
  daysToPad: number
}) {
  return (
    <View
      style={{
        fontSize: 6,
        flexDirection: "row",
        borderBottomWidth: props.isLast ? undefined : 1,
      }}
    >
      {/* Learner Name */}
      <View
        style={{
          width: "20%",
          borderRightWidth: 1,
          flexDirection: "row",
          gap: 3,
        }}
      >
        <View
          style={{
            width: "10%",
            textAlign: "right",
            borderRightWidth: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>24</Text>
        </View>
        <View
          style={{
            flex: 1,
            paddingVertical: 2,
          }}
        >
          <Text>Dela Cruz, Juan G.</Text>
        </View>
      </View>
      {/* Weekdays */}
      <View
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            flex: 1,
          }}
        >
          {[...Array(props.daysToSkip)].map((_, index) => (
            <View
              key={index + 1}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                borderRightWidth: 1,
              }}
            >
              <Text></Text>
            </View>
          ))}
          {props.weekdays.map((weekday, index) => (
            <View
              key={weekday}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                // Shade the first two days orange.
                backgroundColor: index < 2 ? "#ffbf00" : undefined,
                // If we have days padding on the right,
                // then we should always have a border-right for them.
                // Otherwise, only have a border-right if we are *not*
                // the last weekday of the month.
                borderRightWidth:
                  props.daysToPad > 0
                    ? 1
                    : index + 1 === props.weekdays.length
                    ? undefined
                    : 1,
              }}
            >
              {isAbsentOnGivenDay(props.student, weekday) && (
                <Text>&times;</Text>
              )}
              {/* <Svg height={11} width={12}>
                <Polygon points="0,0 12,0 0,11" fill="green" />
              </Svg> */}
            </View>
          ))}
          {[...Array(props.daysToPad)].map((_, index) => (
            <View
              key={index + 1}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                borderRightWidth: index + 1 === props.daysToPad ? undefined : 1,
              }}
            >
              <Text></Text>
            </View>
          ))}
        </View>
      </View>
      {/* Absent/Tardy */}
      <View
        style={{
          width: "12%",
          borderLeftWidth: 1,
          borderRightWidth: 1,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            flex: 1,
          }}
        >
          <View
            style={{
              width: "50%",
              borderRightWidth: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{}}>
              {
                props.student.attendances.filter(
                  (attendance) => attendance.status === "ABSENT"
                ).length
              }
            </Text>
          </View>
          <View
            style={{
              width: "50%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>
              {
                props.student.attendances.filter(
                  (attendance) => attendance.status === "TARDY"
                ).length
              }
            </Text>
          </View>
        </View>
      </View>
      {/* Remarks */}
      <View
        style={{
          width: "15%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text></Text>
      </View>
    </View>
  )
}

function getTotalAttendedForGivenDate(
  students: ExtendedStudent[],
  givenDateStr: string
) {
  let count = 0

  for (const student of students) {
    if (
      student.attendances.some(
        (attendance) =>
          attendance.recordDate === givenDateStr &&
          (attendance.status === "PRESENT" || attendance.status === "TARDY")
      )
    )
      count++
  }

  return count
}

function StudentSummary(props: {
  students: ExtendedStudent[]
  summaryFor: string
  isLast: boolean
  daysToSkip: number
  weekdays: string[]
  daysToPad: number
}) {
  const totalAbsent = useMemo(() => {
    let count = 0

    for (const student of props.students) {
      count += student.attendances.filter(
        (attendance) => attendance.status === "ABSENT"
      ).length
    }

    return count
  }, [props.students])

  const totalTardy = useMemo(() => {
    let count = 0

    for (const student of props.students) {
      count += student.attendances.filter(
        (attendance) => attendance.status === "TARDY"
      ).length
    }

    return count
  }, [props.students])

  return (
    <View
      style={{
        fontSize: 6,
        flexDirection: "row",
        borderBottomWidth: props.isLast ? undefined : 1,
      }}
    >
      <View
        style={{
          width: "20%",
          fontFamily: "Helvetica-Bold",
          borderRightWidth: 1,
          flexDirection: "row",
          gap: 3,
        }}
      >
        <View
          style={{
            width: "10%",
            textAlign: "right",
            borderRightWidth: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>24</Text>
        </View>
        <View
          style={{
            flex: 1,
            paddingVertical: 2,
          }}
        >
          <Text>&lt;&#x2013; {props.summaryFor} | Total Per Day</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            flex: 1,
          }}
        >
          {[...Array(props.daysToSkip)].map((_, index) => (
            <View
              key={index + 1}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                borderRightWidth: 1,
              }}
            >
              <Text></Text>
            </View>
          ))}
          {props.weekdays.map((weekday, index) => (
            <View
              key={weekday}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                // Shade the first two days orange.
                backgroundColor: index < 2 ? "#ffbf00" : undefined,
                // If we have days padding on the right,
                // then we should always have a border-right for them.
                // Otherwise, only have a border-right if we are *not*
                // the last weekday of the month.
                borderRightWidth:
                  props.daysToPad > 0
                    ? 1
                    : index + 1 === props.weekdays.length
                    ? undefined
                    : 1,
              }}
            >
              <Text>
                {getTotalAttendedForGivenDate(props.students, weekday)}
              </Text>
            </View>
          ))}
          {[...Array(props.daysToPad)].map((_, index) => (
            <View
              key={index + 1}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                borderRightWidth: index + 1 === props.daysToPad ? undefined : 1,
              }}
            >
              <Text></Text>
            </View>
          ))}
        </View>
      </View>
      <View
        style={{
          width: "12%",
          borderLeftWidth: 1,
          borderRightWidth: 1,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            flex: 1,
          }}
        >
          <View
            style={{
              width: "50%",
              borderRightWidth: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>{totalAbsent}</Text>
          </View>
          <View
            style={{
              width: "50%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>{totalTardy}</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          width: "15%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text></Text>
      </View>
    </View>
  )
}

function Body(props: {
  students: ExtendedStudent[]
  daysToSkip: number
  weekdays: string[]
  daysToPad: number
}) {
  return (
    <>
      <StudentRecord
        student={props.students[0]}
        daysToSkip={props.daysToSkip}
        weekdays={props.weekdays}
        daysToPad={props.daysToPad}
        isLast={false}
      />
      <StudentRecord
        student={props.students[0]}
        daysToSkip={props.daysToSkip}
        weekdays={props.weekdays}
        daysToPad={props.daysToPad}
        isLast={false}
      />
      <StudentRecord
        student={props.students[0]}
        daysToSkip={props.daysToSkip}
        weekdays={props.weekdays}
        daysToPad={props.daysToPad}
        isLast={false}
      />
      <StudentRecord
        student={props.students[0]}
        daysToSkip={props.daysToSkip}
        weekdays={props.weekdays}
        daysToPad={props.daysToPad}
        isLast={false}
      />
      <StudentRecord
        student={props.students[0]}
        daysToSkip={props.daysToSkip}
        weekdays={props.weekdays}
        daysToPad={props.daysToPad}
        isLast={false}
      />
      <StudentRecord
        student={props.students[0]}
        daysToSkip={props.daysToSkip}
        weekdays={props.weekdays}
        daysToPad={props.daysToPad}
        isLast={false}
      />
      <StudentRecord
        student={props.students[0]}
        daysToSkip={props.daysToSkip}
        weekdays={props.weekdays}
        daysToPad={props.daysToPad}
        isLast={false}
      />
      <StudentRecord
        student={props.students[0]}
        daysToSkip={props.daysToSkip}
        weekdays={props.weekdays}
        daysToPad={props.daysToPad}
        isLast={false}
      />
      <StudentRecord
        student={props.students[0]}
        daysToSkip={props.daysToSkip}
        weekdays={props.weekdays}
        daysToPad={props.daysToPad}
        isLast={false}
      />
      <StudentRecord
        student={props.students[0]}
        daysToSkip={props.daysToSkip}
        weekdays={props.weekdays}
        daysToPad={props.daysToPad}
        isLast={false}
      />
      <StudentRecord
        student={props.students[0]}
        daysToSkip={props.daysToSkip}
        weekdays={props.weekdays}
        daysToPad={props.daysToPad}
        isLast={false}
      />
      <StudentRecord
        student={props.students[0]}
        daysToSkip={props.daysToSkip}
        weekdays={props.weekdays}
        daysToPad={props.daysToPad}
        isLast={false}
      />
      <StudentSummary
        students={props.students}
        summaryFor="Male"
        daysToSkip={props.daysToSkip}
        weekdays={props.weekdays}
        daysToPad={props.daysToPad}
        isLast={false}
      />
      <StudentRecord
        student={props.students[0]}
        daysToSkip={props.daysToSkip}
        weekdays={props.weekdays}
        daysToPad={props.daysToPad}
        isLast={false}
      />
      <StudentRecord
        student={props.students[0]}
        daysToSkip={props.daysToSkip}
        weekdays={props.weekdays}
        daysToPad={props.daysToPad}
        isLast={false}
      />
      <StudentRecord
        student={props.students[0]}
        daysToSkip={props.daysToSkip}
        weekdays={props.weekdays}
        daysToPad={props.daysToPad}
        isLast={false}
      />
      <StudentRecord
        student={props.students[0]}
        daysToSkip={props.daysToSkip}
        weekdays={props.weekdays}
        daysToPad={props.daysToPad}
        isLast={false}
      />
      <StudentRecord
        student={props.students[0]}
        daysToSkip={props.daysToSkip}
        weekdays={props.weekdays}
        daysToPad={props.daysToPad}
        isLast={false}
      />
      <StudentRecord
        student={props.students[0]}
        daysToSkip={props.daysToSkip}
        weekdays={props.weekdays}
        daysToPad={props.daysToPad}
        isLast={false}
      />
      <StudentRecord
        student={props.students[0]}
        daysToSkip={props.daysToSkip}
        weekdays={props.weekdays}
        daysToPad={props.daysToPad}
        isLast={false}
      />
      <StudentRecord
        student={props.students[0]}
        daysToSkip={props.daysToSkip}
        weekdays={props.weekdays}
        daysToPad={props.daysToPad}
        isLast={false}
      />
      <StudentRecord
        student={props.students[0]}
        daysToSkip={props.daysToSkip}
        weekdays={props.weekdays}
        daysToPad={props.daysToPad}
        isLast={false}
      />
      <StudentRecord
        student={props.students[0]}
        daysToSkip={props.daysToSkip}
        weekdays={props.weekdays}
        daysToPad={props.daysToPad}
        isLast={false}
      />
      <StudentRecord
        student={props.students[0]}
        daysToSkip={props.daysToSkip}
        weekdays={props.weekdays}
        daysToPad={props.daysToPad}
        isLast={false}
      />
      <StudentRecord
        student={props.students[0]}
        daysToSkip={props.daysToSkip}
        weekdays={props.weekdays}
        daysToPad={props.daysToPad}
        isLast={false}
      />
      <StudentSummary
        students={props.students}
        summaryFor="Female"
        daysToSkip={props.daysToSkip}
        weekdays={props.weekdays}
        daysToPad={props.daysToPad}
        isLast={false}
      />
      <StudentSummary
        students={props.students}
        summaryFor="Combined"
        daysToSkip={props.daysToSkip}
        weekdays={props.weekdays}
        daysToPad={props.daysToPad}
        isLast={true}
      />
    </>
  )
}

export function TableSection(props: {
  dateStr: string
  students: ExtendedStudent[]
}) {
  const countOfDaysToSkip = getCountOfWeekDaysToSkipFromGivenMonth(
    props.dateStr
  )
  const weekdays = getSchoolDaysForGivenMonth(props.dateStr)
  const countOfDaysToPad = 25 - (weekdays.length + countOfDaysToSkip)

  return (
    <View
      style={{
        borderWidth: 1,
        marginTop: 12,
      }}
    >
      <Head />
      <Body
        students={props.students}
        daysToSkip={countOfDaysToSkip}
        weekdays={weekdays}
        daysToPad={countOfDaysToPad}
      />
    </View>
  )
}
