import React from "react"
import { Text, View } from "@react-pdf/renderer"

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

function StudentRecord({ isLast }: { isLast: boolean }) {
  return (
    <View
      style={{
        fontSize: 6,
        flexDirection: "row",
        borderBottomWidth: isLast ? undefined : 1,
      }}
    >
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
          {[...Array(25)].map((_, index) => (
            <View
              key={index + 1}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                borderRightWidth: index + 1 === 25 ? undefined : 1,
              }}
            >
              <Text>?</Text>
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
            <Text style={{}}>???</Text>
          </View>
          <View
            style={{
              width: "50%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>???</Text>
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
        <Text>???</Text>
      </View>
    </View>
  )
}

function StudentSummary({
  isLast,
  summaryFor,
}: {
  summaryFor: string
  isLast: boolean
}) {
  return (
    <View
      style={{
        fontSize: 6,
        flexDirection: "row",
        borderBottomWidth: isLast ? undefined : 1,
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
          <Text>&lt;&#x2013; {summaryFor} | Total Per Day</Text>
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
          {[...Array(25)].map((_, index) => (
            <View
              key={index + 1}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                borderRightWidth: index + 1 === 25 ? undefined : 1,
              }}
            >
              <Text>?</Text>
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
            <Text style={{}}>???</Text>
          </View>
          <View
            style={{
              width: "50%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>???</Text>
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
        <Text>???</Text>
      </View>
    </View>
  )
}

function Body() {
  return (
    <>
      <StudentRecord isLast={false} />
      <StudentRecord isLast={false} />
      <StudentRecord isLast={false} />
      <StudentRecord isLast={false} />
      <StudentRecord isLast={false} />
      <StudentRecord isLast={false} />
      <StudentRecord isLast={false} />
      <StudentRecord isLast={false} />
      <StudentRecord isLast={false} />
      <StudentRecord isLast={false} />
      <StudentRecord isLast={false} />
      <StudentRecord isLast={false} />
      <StudentSummary summaryFor="Male" isLast={false} />
      <StudentRecord isLast={false} />
      <StudentRecord isLast={false} />
      <StudentRecord isLast={false} />
      <StudentRecord isLast={false} />
      <StudentRecord isLast={false} />
      <StudentRecord isLast={false} />
      <StudentRecord isLast={false} />
      <StudentRecord isLast={false} />
      <StudentRecord isLast={false} />
      <StudentRecord isLast={false} />
      <StudentRecord isLast={false} />
      <StudentRecord isLast={false} />
      <StudentSummary summaryFor="Female" isLast={false} />
      <StudentSummary summaryFor="Combined" isLast={true} />
    </>
  )
}

export function TableSection() {
  return (
    <View
      style={{
        borderWidth: 1,
        marginTop: 12,
      }}
    >
      <Head />
      <Body />
    </View>
  )
}
