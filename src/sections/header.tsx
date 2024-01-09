import React from "react"
import { Image, Text, View } from "@react-pdf/renderer"

export function HeaderSection() {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          marginBottom: 12,
        }}
      >
        <View
          style={{
            width: "20%",
            alignItems: "flex-end",
          }}
        >
          <Image
            style={{
              height: 44,
              width: 44,
            }}
            src="https://identiparsci.vercel.app/_next/image?url=%2Fassets%2Flogos%2Fdeped-seal.png&w=96&q=75"
          />
        </View>
        <View
          style={{
            width: "60%",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Helvetica-Bold",
              fontSize: 9,
            }}
          >
            School Form (SF2) Daily Attendance Report of Learners
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 6,
              fontFamily: "Helvetica-Oblique",
            }}
          >
            (This replaced Form 1, Form 2 & STS Form 4 Absenteeism and Dropout
            Profile)
          </Text>
        </View>
        <View
          style={{
            width: "20%",
          }}
        >
          <Image
            style={{
              height: 44,
              width: 96,
            }}
            src="https://identiparsci.vercel.app/_next/image?url=%2Fassets%2Flogos%2Fdeped-logo.png&w=256&q=75"
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          gap: 12,
        }}
      >
        <View
          style={{
            width: "50%",
            flexDirection: "row",
            gap: 4,
          }}
        >
          <View
            style={{
              width: "30%",
            }}
          >
            <View
              style={{
                textAlign: "right",
                borderColor: "white",
                borderWidth: 1,
                marginBottom: 3,
                paddingVertical: 4,
              }}
            >
              <Text>School ID</Text>
            </View>
            <View
              style={{
                textAlign: "right",
                borderColor: "white",
                borderWidth: 1,
                paddingVertical: 4,
              }}
            >
              <Text>Name of School</Text>
            </View>
          </View>

          <View
            style={{
              width: "70%",
            }}
          >
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  borderWidth: 1,
                  marginBottom: 3,
                  paddingVertical: 4,
                  paddingHorizontal: 5,
                  fontFamily: "Helvetica-BoldOblique",
                }}
              >
                <Text>123-123</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  textAlign: "right",
                  borderColor: "white",
                  borderWidth: 1,
                  marginBottom: 3,
                  paddingVertical: 4,
                  paddingHorizontal: 5,
                }}
              >
                <Text>School Year</Text>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  marginBottom: 3,
                  paddingVertical: 4,
                  paddingHorizontal: 5,
                  fontFamily: "Helvetica-BoldOblique",
                }}
              >
                <Text>2023-2024</Text>
              </View>
            </View>
            <View
              style={{
                borderWidth: 1,
                paddingVertical: 4,
                paddingHorizontal: 5,
                fontFamily: "Helvetica-BoldOblique",
              }}
            >
              <Text>PARANAQUE SCIENCE HIGH SCHOOL</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            width: "50%",
            flexDirection: "row",
            gap: 3,
          }}
        >
          <View
            style={{
              flex: 1,
            }}
          >
            <View
              style={{
                borderColor: "white",
                borderWidth: 1,
                marginBottom: 3,
                paddingVertical: 4,
                textAlign: "right",
              }}
            >
              <Text>Report for the Month of</Text>
            </View>
            <View
              style={{
                borderColor: "white",
                borderWidth: 1,
                paddingVertical: 4,
                textAlign: "right",
              }}
            >
              <Text>Grade Level</Text>
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
              }}
            >
              <View
                style={{
                  borderWidth: 1,
                  marginBottom: 3,
                  paddingVertical: 4,
                  paddingHorizontal: 5,
                  fontFamily: "Helvetica-BoldOblique",
                }}
              >
                <Text>SEPTEMBER</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  borderWidth: 1,
                  paddingVertical: 4,
                  paddingHorizontal: 5,
                  fontFamily: "Helvetica-BoldOblique",
                }}
              >
                <Text>TEN</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  borderColor: "white",
                  borderWidth: 1,
                  paddingVertical: 4,
                  textAlign: "right",
                }}
              >
                <Text>Section</Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "flex-end",
            }}
          >
            <View
              style={{
                borderWidth: 1,
                paddingVertical: 4,
                paddingHorizontal: 5,
                fontFamily: "Helvetica-BoldOblique",
              }}
            >
              <Text>ARCHIMEDES</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}
