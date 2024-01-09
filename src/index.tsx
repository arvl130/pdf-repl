import React from "react"
import { Page, Document, renderToFile } from "@react-pdf/renderer"
import { HeaderSection } from "./sections/header"
import { TableSection } from "./sections/table"
import { FooterSection } from "./sections/footer"

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
        <HeaderSection />
        <TableSection />
        <FooterSection />
      </Page>
    </Document>
  )
}

process.stdout.write("Compiling...")
await renderToFile(<PDFDocument />, `/home/arvl/document.pdf`)
console.log(" done.")
