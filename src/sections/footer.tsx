import React from "react"
import { Line, Polygon, Rect, Svg, Text, View } from "@react-pdf/renderer"
import { getSchoolDaysForGivenMonth } from "@/date-conversions"

function Guidelines() {
  return (
    <View>
      <Text
        style={{
          fontFamily: "Helvetica-Bold",
          marginBottom: 6,
        }}
      >
        GUIDELINES:
      </Text>
      <Text
        style={{
          marginBottom: 2,
        }}
      >
        1. The attendance shall be accomplished daily. Refer to the codes for
        checking learners&apos; attendance.
      </Text>
      <Text
        style={{
          marginBottom: 2,
        }}
      >
        2. Dates shall be written in the preceding columns beside Learner&apos;s
        Name.
      </Text>
      <View
        style={{
          marginBottom: 2,
        }}
      >
        <Text>3. To compute the following:</Text>
        <View
          style={{
            flexDirection: "row",
            gap: 3,
            marginBottom: 2,
          }}
        >
          <View
            style={{
              width: "4%",
              justifyContent: "center",
              textAlign: "right",
            }}
          >
            <Text>a.</Text>
          </View>
          <View
            style={{
              width: "41%",
              justifyContent: "center",
              textAlign: "right",
              fontFamily: "Helvetica-Oblique",
            }}
          >
            <Text>Percentage of Enrolment =</Text>
          </View>
          <View
            style={{
              flex: 1,
              textAlign: "center",
            }}
          >
            <Text
              style={{
                borderBottomWidth: 1,
              }}
            >
              Registered Learner as of the End of the Month
            </Text>
            <Text>Enrolment as of 1st Friday of June</Text>
          </View>
          <View
            style={{
              width: "6%",
              justifyContent: "center",
            }}
          >
            <Text>&times; 100 </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 3,
            marginBottom: 2,
          }}
        >
          <View
            style={{
              width: "4%",
              justifyContent: "center",
              textAlign: "right",
            }}
          >
            <Text>b.</Text>
          </View>
          <View
            style={{
              width: "41%",
              justifyContent: "center",
              textAlign: "right",
              fontFamily: "Helvetica-Oblique",
            }}
          >
            <Text>Average Daily Attendance = </Text>
          </View>
          <View
            style={{
              flex: 1,
              textAlign: "center",
            }}
          >
            <Text
              style={{
                borderBottomWidth: 1,
              }}
            >
              Total Daily Attendance
            </Text>
            <Text>Number of School Days in Reporting Month</Text>
          </View>
          <View
            style={{
              width: "6%",
              justifyContent: "center",
            }}
          ></View>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 3,
          }}
        >
          <View
            style={{
              width: "4%",
              justifyContent: "center",
              textAlign: "right",
            }}
          >
            <Text>c.</Text>
          </View>
          <View
            style={{
              width: "41%",
              justifyContent: "center",
              textAlign: "right",
              fontFamily: "Helvetica-Oblique",
            }}
          >
            <Text>Percentage of Attendance for the Month = </Text>
          </View>
          <View
            style={{
              flex: 1,
              textAlign: "center",
            }}
          >
            <Text
              style={{
                borderBottomWidth: 1,
              }}
            >
              Average Daily Attendance
            </Text>
            <Text>Registered Learner as of End of the Month</Text>
          </View>
          <View
            style={{
              width: "6%",
              justifyContent: "center",
            }}
          >
            <Text>&times; 100 </Text>
          </View>
        </View>
      </View>
      <Text
        style={{
          marginBottom: 2,
        }}
      >
        4. Every End of the month, the class adviser will submit this form to
        the office of the principal for recording of summary table into the
        School Form 4. Once signed by the principal, this form should be
        returned to the adviser.
      </Text>
      <Text
        style={{
          marginBottom: 2,
        }}
      >
        5. The adviser will extend neccessary intervention including but not
        limited to home visitation to learner/s that committed 5 consecutive
        days of absences or those with potentials of dropping out.
      </Text>
      <Text
        style={{
          marginBottom: 2,
        }}
      >
        6. Attendance performance of learner is expected to reflect in Form 137
        and Form 138 every grading period.
      </Text>
      <Text>
        * Beginning of School Year cut-off report is every 1st Friday of School
        Calendar Days
      </Text>
    </View>
  )
}

function Legend() {
  return (
    <View
      style={{
        borderWidth: 1,
        width: "40%",
        paddingHorizontal: 12,
        paddingTop: 1,
        paddingBottom: 6,
      }}
    >
      <Text
        style={{
          marginBottom: 6,
        }}
      >
        LEGEND:
      </Text>
      <View
        style={{
          flexDirection: "row",
          gap: 3,
          paddingBottom: 1,
        }}
      >
        <Svg height={6} width={6}>
          <Polygon points="0,0 6,0 0,6" fill="green" />
        </Svg>
        <Text>1st-4th Subjects - LATE</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          gap: 3,
          paddingBottom: 1,
        }}
      >
        <Svg height={6} width={6}>
          <Polygon points="6,0 6,6 0,6" fill="red" />
        </Svg>
        <Text>Last 4 Subjects - CUTTING</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          gap: 3,
        }}
      >
        <Svg height={6} width={6}>
          <Rect
            x={0}
            y={0}
            width={6}
            height={6}
            stroke="#000000"
            strokeWidth={1}
            fill="none"
          />
          <Line x1={0} y1={6} x2={6} y2={0} stroke="green" strokeWidth={1} />
        </Svg>
        <Text>Initial Late Marker</Text>
      </View>
      <View></View>
    </View>
  )
}

function LeftColumn() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Guidelines />
      <View
        style={{
          marginTop: 12,
          alignItems: "flex-end",
        }}
      >
        <Legend />
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text>School Form 2: Page 2 of </Text>
        <Text
          style={{
            width: 24,
            borderBottomWidth: 1,
          }}
        ></Text>
      </View>
    </View>
  )
}

function CenterColumn() {
  return (
    <View
      style={{
        width: "21%",
      }}
    >
      <View
        style={{
          borderWidth: 1,
        }}
      >
        <View
          style={{
            borderBottomWidth: 1,
            paddingVertical: 3,
            paddingHorizontal: 1,
            fontFamily: "Helvetica-Bold",
          }}
        >
          <Text>1. CODES FOR CHECKING ATTENDANCE</Text>
        </View>
        <View
          style={{
            paddingHorizontal: 1,
          }}
        >
          <Text
            style={{
              paddingVertical: 4,
            }}
          >
            <Text
              style={{
                fontFamily: "Helvetica-Bold",
              }}
            >
              blank
            </Text>{" "}
            - Present; (&times;) - Absent; Tardy (half shaded= Upper for Late
            Commer, Lower for Cutting Classes)
          </Text>
          <View
            style={{
              marginBottom: 2,
            }}
          >
            <Text
              style={{
                fontFamily: "Helvetica-Bold",
              }}
            >
              2. REASONS/CAUSES OF DROP-OUTS
            </Text>
            <Text
              style={{
                fontFamily: "Helvetica-Bold",
              }}
            >
              a. Domestic-Related Factors
            </Text>
            <Text>a.1. Had to take care of siblings</Text>
            <Text>a.2. Early marriage/pregnancy siblings</Text>
            <Text>a.3. Parents&apos; attitude toward schooling</Text>
            <Text>a.4. Family problems</Text>
          </View>
          <View
            style={{
              marginBottom: 2,
            }}
          >
            <Text
              style={{
                fontFamily: "Helvetica-Bold",
              }}
            >
              b. Individual-Related Factors
            </Text>
            <Text>b.1. Illness</Text>
            <Text>b.2. Overage</Text>
            <Text>b.3. Death</Text>
            <Text>b.4. Drug Abuse</Text>
            <Text>b.5. Poor academic performance</Text>
            <Text>b.6. Lack of interest/Distractions</Text>
            <Text>b.7. Hunger/Malnutrition</Text>
          </View>
          <View
            style={{
              marginBottom: 2,
            }}
          >
            <Text
              style={{
                fontFamily: "Helvetica-Bold",
              }}
            >
              c. School-Related Factors
            </Text>
            <Text>c.1. Teacher Factor</Text>
            <Text>c.2. Physical condition of classroom</Text>
            <Text>c.3. Peer influence</Text>
          </View>
          <View
            style={{
              marginBottom: 2,
            }}
          >
            <Text
              style={{
                fontFamily: "Helvetica-Bold",
              }}
            >
              d. Geographic/Environmental
            </Text>
            <Text>d.1. Distance between home and school</Text>
            <Text>d.2. Armed conflict (incl. Tribal wars & clan feuds)</Text>
            <Text>d.3. Calamities/Disasters</Text>
          </View>
          <Text
            style={{
              fontFamily: "Helvetica-Bold",
            }}
          >
            e. Financial-Related
          </Text>
          <Text>e.1. Child labor, work</Text>
          <Text
            style={{
              fontFamily: "Helvetica-Bold",
            }}
          >
            f. Others
          </Text>
        </View>
      </View>
    </View>
  )
}

function TableHead() {
  return (
    <View
      style={{
        flexDirection: "row",
        fontFamily: "Helvetica-Bold",
      }}
    >
      <View
        style={{
          width: "60%",
          borderRightWidth: 1,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            borderRightWidth: 1,
          }}
        >
          <View
            style={{
              width: "40%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Month</Text>
          </View>
          <View
            style={{
              width: "60%",
              textAlign: "center",
              justifyContent: "center",
              paddingHorizontal: 1,
            }}
          >
            <Text>SEPTEMBER</Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flex: 1,
              paddingHorizontal: 1,
              textAlign: "center",
              paddingVertical: 6,
            }}
          >
            <Text>No. of days of Classes</Text>
          </View>
          <View
            style={{
              width: "20%",
              textAlign: "center",
              justifyContent: "center",
              backgroundColor: "#91cf50",
            }}
          >
            <Text>21</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          width: "40%",
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Summary for the Month</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            borderTopWidth: 1,
          }}
        >
          <View
            style={{
              flex: 1,
              textAlign: "center",
              borderRightWidth: 1,
            }}
          >
            <Text>M</Text>
          </View>
          <View
            style={{
              flex: 1,
              textAlign: "center",
              borderRightWidth: 1,
            }}
          >
            <Text>F</Text>
          </View>
          <View
            style={{
              flex: 1,
              textAlign: "center",
            }}
          >
            <Text>TOTAL</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

type ExtendedStudent = Student & { section: Section; attendances: Attendance[] }

function TableBody({
  students,
  schoolDays,
  isoDateStr,
}: {
  students: ExtendedStudent[]
  schoolDays: string[]
  isoDateStr: string
}) {
  const maleStudents = students.filter((student) => student.gender === "MALE")
  const registeredLearnersAsOfEndOfMonthMale = maleStudents.length

  const totalDailyAttendanceMale = maleStudents.reduce((prev, curr) => {
    let count = 0
    for (const attendance of curr.attendances) {
      if (attendance.status === "PRESENT" || attendance.status === "TARDY")
        count += 1
    }

    return prev + count
  }, 0)
  const averageDailyAttendanceMale =
    totalDailyAttendanceMale / schoolDays.length
  const percentageOfAttendanceForTheMonthMale =
    (averageDailyAttendanceMale / registeredLearnersAsOfEndOfMonthMale) * 100

  const femaleStudents = students.filter(
    (student) => student.gender === "FEMALE"
  )
  const registeredLearnersAsOfEndOfMonthFemale = femaleStudents.length

  const totalDailyAttendanceFemale = femaleStudents.reduce((prev, curr) => {
    let count = 0
    for (const attendance of curr.attendances) {
      if (attendance.status === "PRESENT" || attendance.status === "TARDY")
        count += 1
    }

    return prev + count
  }, 0)
  const averageDailyAttendanceFemale =
    totalDailyAttendanceFemale / schoolDays.length
  const percentageOfAttendanceForTheMonthFemale =
    (averageDailyAttendanceFemale / registeredLearnersAsOfEndOfMonthFemale) *
    100

  return (
    <View
      style={{
        borderTopWidth: 1,
      }}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View
          style={{
            width: "60%",
            borderRightWidth: 1,
            paddingVertical: 4,
            textAlign: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Helvetica-Oblique",
            }}
          >
            * Enrolment as of (1st Friday of June)
          </Text>
        </View>
        <View
          style={{
            width: "40%",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flex: 1,
              borderRightWidth: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>19</Text>
          </View>
          <View
            style={{
              flex: 1,
              borderRightWidth: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>23</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "Helvetica-Bold",
            }}
          >
            <Text>42</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          borderTopWidth: 1,
        }}
      >
        <View
          style={{
            width: "60%",
            borderRightWidth: 1,
            paddingVertical: 4,
            textAlign: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Helvetica-Oblique",
            }}
          >
            Late Enrollment{" "}
            <Text
              style={{
                fontFamily: "Helvetica-BoldOblique",
              }}
            >
              during the month
            </Text>
          </Text>
          <Text
            style={{
              fontFamily: "Helvetica-Oblique",
            }}
          >
            (beyond cut-off)
          </Text>
        </View>
        <View
          style={{
            width: "40%",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flex: 1,
              borderRightWidth: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>?</Text>
          </View>
          <View
            style={{
              flex: 1,
              borderRightWidth: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>?</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "Helvetica-Bold",
            }}
          >
            <Text>0</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          borderTopWidth: 1,
        }}
      >
        <View
          style={{
            width: "60%",
            borderRightWidth: 1,
            paddingVertical: 4,
            textAlign: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Helvetica-Oblique",
            }}
          >
            Registered Learner as of{" "}
            <Text
              style={{
                fontFamily: "Helvetica-BoldOblique",
              }}
            >
              end of the month
            </Text>
          </Text>
        </View>
        <View
          style={{
            width: "40%",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flex: 1,
              borderRightWidth: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>19</Text>
          </View>
          <View
            style={{
              flex: 1,
              borderRightWidth: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>23</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "Helvetica-Bold",
            }}
          >
            <Text>42</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          borderTopWidth: 1,
        }}
      >
        <View
          style={{
            width: "60%",
            borderRightWidth: 1,
            paddingVertical: 4,
            textAlign: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Helvetica-Oblique",
            }}
          >
            Percentage of Enrolment as of{" "}
            <Text
              style={{
                fontFamily: "Helvetica-BoldOblique",
              }}
            >
              end of month
            </Text>
          </Text>
        </View>
        <View
          style={{
            width: "40%",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flex: 1,
              borderRightWidth: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>100</Text>
          </View>
          <View
            style={{
              flex: 1,
              borderRightWidth: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>100</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "Helvetica-Bold",
            }}
          >
            <Text>100</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          borderTopWidth: 1,
        }}
      >
        <View
          style={{
            width: "60%",
            borderRightWidth: 1,
            paddingVertical: 4,
            textAlign: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Helvetica-Oblique",
            }}
          >
            Average Daily Attendance
          </Text>
        </View>
        <View
          style={{
            width: "40%",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flex: 1,
              borderRightWidth: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>19</Text>
          </View>
          <View
            style={{
              flex: 1,
              borderRightWidth: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>21</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "Helvetica-Bold",
            }}
          >
            <Text>40</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          borderTopWidth: 1,
        }}
      >
        <View
          style={{
            width: "60%",
            borderRightWidth: 1,
            paddingVertical: 4,
            textAlign: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Helvetica-Oblique",
            }}
          >
            Percentage of Attendance for the month
          </Text>
        </View>
        <View
          style={{
            width: "40%",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flex: 1,
              borderRightWidth: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>100%</Text>
          </View>
          <View
            style={{
              flex: 1,
              borderRightWidth: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>91.30%</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "Helvetica-Bold",
            }}
          >
            <Text>95.65%</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          borderTopWidth: 1,
        }}
      >
        <View
          style={{
            width: "60%",
            borderRightWidth: 1,
            paddingVertical: 4,
            textAlign: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Helvetica-Oblique",
            }}
          >
            Number of students with 5 consecutive days of absences
          </Text>
        </View>
        <View
          style={{
            width: "40%",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flex: 1,
              borderRightWidth: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>?</Text>
          </View>
          <View
            style={{
              flex: 1,
              borderRightWidth: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>?</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "Helvetica-Bold",
            }}
          >
            <Text>0</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          fontFamily: "Helvetica-Bold",
          borderTopWidth: 1,
        }}
      >
        <View
          style={{
            width: "60%",
            borderRightWidth: 1,
            paddingVertical: 4,
            textAlign: "center",
          }}
        >
          <Text>Drop out</Text>
        </View>
        <View
          style={{
            width: "40%",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flex: 1,
              borderRightWidth: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>?</Text>
          </View>
          <View
            style={{
              flex: 1,
              borderRightWidth: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>?</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>0</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          fontFamily: "Helvetica-Bold",
          borderTopWidth: 1,
        }}
      >
        <View
          style={{
            width: "60%",
            borderRightWidth: 1,
            paddingVertical: 4,
            textAlign: "center",
          }}
        >
          <Text>Transferred out</Text>
        </View>
        <View
          style={{
            width: "40%",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flex: 1,
              borderRightWidth: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>?</Text>
          </View>
          <View
            style={{
              flex: 1,
              borderRightWidth: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>?</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>0</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          fontFamily: "Helvetica-Bold",
          borderTopWidth: 1,
        }}
      >
        <View
          style={{
            width: "60%",
            borderRightWidth: 1,
            paddingVertical: 4,
            textAlign: "center",
          }}
        >
          <Text>Transferred in</Text>
        </View>
        <View
          style={{
            width: "40%",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flex: 1,
              borderRightWidth: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>?</Text>
          </View>
          <View
            style={{
              flex: 1,
              borderRightWidth: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>?</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>0</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

function SummaryTable({
  students,
  schoolDays,
  isoDateStr,
}: {
  students: ExtendedStudent[]
  schoolDays: string[]
  isoDateStr: string
}) {
  return (
    <View
      style={{
        borderWidth: 1,
      }}
    >
      <TableHead />
      <TableBody
        students={students}
        schoolDays={schoolDays}
        isoDateStr={isoDateStr}
      />
    </View>
  )
}

function Signatures(props: { teacherName: string; schoolHeadName: string }) {
  return (
    <View
      style={{
        marginTop: 12,
      }}
    >
      <Text
        style={{
          fontFamily: "Helvetica-Oblique",
        }}
      >
        I certify that this is a true and correct report.
      </Text>
      <View
        style={{
          width: "70%",
          marginTop: 8,
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "Helvetica-Bold",
          }}
        >
          {props.teacherName}
        </Text>
        <Text
          style={{
            borderTopWidth: 1,
            paddingTop: 1,
          }}
        >
          (Signature of Teacher over Printed Name)
        </Text>
      </View>
      <Text
        style={{
          marginTop: 8,
        }}
      >
        Attested by:
      </Text>
      <View
        style={{
          width: "70%",
          marginTop: 4,
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "Helvetica-Bold",
          }}
        >
          {props.schoolHeadName}
        </Text>
        <Text
          style={{
            borderTopWidth: 1,
            paddingTop: 1,
          }}
        >
          (Signature of School Head over Printed Name)
        </Text>
      </View>
    </View>
  )
}

function RightColumn(props: {
  teacherName: string
  schoolHeadName: string
  students: ExtendedStudent[]
  schoolDays: string[]
  isoDateStr: string
}) {
  return (
    <View
      style={{
        width: "30%",
      }}
    >
      <SummaryTable
        students={props.students}
        schoolDays={props.schoolDays}
        isoDateStr={props.isoDateStr}
      />
      <Signatures
        teacherName={props.teacherName}
        schoolHeadName={props.schoolHeadName}
      />
    </View>
  )
}

export function FooterSection(props: {
  teacherName: string
  schoolHeadName: string
  students: ExtendedStudent[]
  isoDateStr: string
}) {
  const weekdays = getSchoolDaysForGivenMonth(props.isoDateStr)

  return (
    <View
      style={{
        marginTop: 12,
        flexDirection: "row",
        fontSize: 6,
        gap: 10,
      }}
    >
      <LeftColumn />
      <CenterColumn />
      <RightColumn
        teacherName={props.teacherName}
        schoolHeadName={props.schoolHeadName}
        students={props.students}
        schoolDays={weekdays}
        isoDateStr={props.isoDateStr}
      />
    </View>
  )
}
