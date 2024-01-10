import React from "react"
import { Page, Document, renderToFile } from "@react-pdf/renderer"
import { HeaderSection } from "./sections/header"
import { TableSection } from "./sections/table"
import { FooterSection } from "./sections/footer"

const students = [
  {
    id: 1001,
    firstName: "Matt",
    lastName: "Gozo",
    gender: "MALE" as const,
    gradeLevelId: "GRADE_10" as const,
    contactNumber: "+639123456789",
    middleName: null,
    section: {
      id: 1,
      adviserId: "3pmyr5lChChhas4dU659a31ne7H3",
      name: "Pythagoras",
      gradeLevelId: "GRADE_10" as const,
      schoolYearId: 1,
      passcode: "0000",
    },
    attendances: [
      {
        recordDate: "2024-01-03T00:00:00.000+08:00",
        schoolYearId: 1,
        quarter: "FIRST" as const,
        studentId: 1001,
        attendedAt: null,
        notify: true,
        remarks: "",
        status: "ABSENT" as const,
      },
    ],
  },
]

function PDFDocument() {
  return (
    <Document>
      <Page
        size="LETTER"
        style={{
          padding: 12,
          fontSize: 8,
        }}
      >
        <HeaderSection
          schoolId="123-123"
          schoolName="PARANAQUE SCIENCE HIGH SCHOOL"
          schoolYear="2023-2024"
          month="SEPTEMBER"
          gradeLevel="TEN"
          section="ARCHIMEDES"
        />
        <TableSection students={students} dateStr="2024-01-01" />
        <FooterSection
          teacherName="MR. ROMART M. MANLIQUEZ"
          schoolHeadName="RUEL A. GRAFIL"
          students={students}
          isoDateStr="2024-01-01"
        />
      </Page>
    </Document>
  )
}

process.stdout.write("Compiling...")
await renderToFile(<PDFDocument />, `/home/arvl/document.pdf`)
console.log(" done.")
