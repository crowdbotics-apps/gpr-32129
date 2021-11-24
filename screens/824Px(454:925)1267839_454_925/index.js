import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_454_926}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a78c/6b0e/7ef532450739188aad41d409732621b2"
          }}
          style={styles.ImageBackground_454_928}
        />
        <View style={styles.View_454_929}>
          <View style={styles.View_454_930} />
          <View style={styles.View_454_931} />
          <View style={styles.View_454_932} />
        </View>
        <View style={styles.View_454_944}>
          <View style={styles.View_454_945}>
            <Text style={styles.Text_454_945}>
              © 2021, GENERAL PURPOSE ROBOTS
            </Text>
          </View>
          <View style={styles.View_454_946} />
          <View style={styles.View_454_947}>
            <Text style={styles.Text_454_947}>Back to top</Text>
          </View>
        </View>
        <View style={styles.View_454_936}>
          <View style={styles.View_454_937}>
            <View style={styles.View_454_938}>
              <View style={styles.View_454_939} />
              <View style={styles.View_454_940}>
                <Text style={styles.Text_454_940}>Discord Invite</Text>
              </View>
            </View>
            <View style={styles.View_454_941}>
              <View style={styles.View_I454_941_0_1969}>
                <View style={styles.View_I454_941_0_1970}>
                  <Text style={styles.Text_I454_941_0_1970}>Discord</Text>
                </View>
                <View style={styles.View_I454_941_0_1971} />
              </View>
            </View>
            <View style={styles.View_454_942}>
              <Text style={styles.Text_454_942}>Join the Bots</Text>
            </View>
            <View style={styles.View_454_943}>
              <Text style={styles.Text_454_943}>
                Welcome to the future. Join gpRobots Discord to get the latest
                news as soon as possible.{" "}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_454_948}>
        <View style={styles.View_454_949}>
          <View style={styles.View_454_951}>
            <Text style={styles.Text_454_951}>Meet the team</Text>
          </View>
        </View>
        <View style={styles.View_454_952}>
          <View style={styles.View_454_953}>
            <View style={styles.View_454_954}>
              <View style={styles.View_454_955}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/242f/0e2f/14ddb4778b9f7fa7433fc03f8484588b"
                  }}
                  style={styles.ImageBackground_454_956}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4011/077b/b10cb8caec2f8fbf0253f545b209fd51"
                  }}
                  style={styles.ImageBackground_454_957}
                />
              </View>
              <View style={styles.View_454_958}>
                <View style={styles.View_454_959}>
                  <Text style={styles.Text_454_959}>Macrocosm</Text>
                </View>
                <View style={styles.View_454_960}>
                  <Text style={styles.Text_454_960}>NFT Artist</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_454_961}>
              <View style={styles.View_454_962}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b907/783f/ddd8949aa01ea3bbda54e3acb835a62b"
                  }}
                  style={styles.ImageBackground_454_963}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5af4/90aa/5c62541dde3fa9bb57c7c3f279aee058"
                  }}
                  style={styles.ImageBackground_454_964}
                />
              </View>
              <View style={styles.View_454_965}>
                <View style={styles.View_454_966}>
                  <View style={styles.View_454_967}>
                    <Text style={styles.Text_454_967}>Cryptofuturyst</Text>
                  </View>
                </View>
                <View style={styles.View_454_968}>
                  <Text style={styles.Text_454_968}>Developer</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_454_969}>
              <View style={styles.View_454_970}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8527/3144/0188b7a0e1d84fdfb9333c9cbc2218ce"
                  }}
                  style={styles.ImageBackground_454_971}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a64c/faef/fc233d0a944384fa28704a5c9df11406"
                  }}
                  style={styles.ImageBackground_454_972}
                />
              </View>
              <View style={styles.View_454_973}>
                <View style={styles.View_454_974}>
                  <View style={styles.View_454_975}>
                    <Text style={styles.Text_454_975}>Chelsey</Text>
                  </View>
                  <View style={styles.View_454_976}>
                    <Text style={styles.Text_454_976}>Corkery</Text>
                  </View>
                </View>
                <View style={styles.View_454_977}>
                  <Text style={styles.Text_454_977}>Developer</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_454_978}>
            <View style={styles.View_454_979}>
              <View style={styles.View_454_980}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/242f/0e2f/14ddb4778b9f7fa7433fc03f8484588b"
                  }}
                  style={styles.ImageBackground_454_981}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/59d3/c73e/073e0f354c78e769c7668bf55e8f2933"
                  }}
                  style={styles.ImageBackground_454_982}
                />
              </View>
              <View style={styles.View_454_983}>
                <View style={styles.View_454_984}>
                  <View style={styles.View_454_985}>
                    <Text style={styles.Text_454_985}>Ida</Text>
                  </View>
                  <View style={styles.View_454_986}>
                    <Text style={styles.Text_454_986}>Flatley</Text>
                  </View>
                </View>
                <View style={styles.View_454_987}>
                  <Text style={styles.Text_454_987}>Developer</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_454_988}>
              <View style={styles.View_454_989}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b907/783f/ddd8949aa01ea3bbda54e3acb835a62b"
                  }}
                  style={styles.ImageBackground_454_990}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5468/7892/c0ecfb9773ba7b23cfb445cc1a4443dd"
                  }}
                  style={styles.ImageBackground_466_488}
                />
              </View>
              <View style={styles.View_454_992}>
                <View style={styles.View_454_993}>
                  <View style={styles.View_454_994}>
                    <Text style={styles.Text_454_994}>Britney</Text>
                  </View>
                  <View style={styles.View_454_995}>
                    <Text style={styles.Text_454_995}>Barrows</Text>
                  </View>
                </View>
                <View style={styles.View_454_996}>
                  <Text style={styles.Text_454_996}>Communications</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8df9/0437/80c4c8cae21366879c4dc29addb609dc"
        }}
        style={styles.ImageBackground_454_1054}
      />
      <View style={styles.View_454_1045}>
        <View style={styles.View_454_1046}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6773/6650/d57877379843ea05be5f0ddf58fe7d64"
            }}
            style={styles.ImageBackground_454_1047}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f327/6c83/676b81a4cf25b32df17cf8f38a7cd410"
            }}
            style={styles.ImageBackground_454_1048}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b52/2a9b/06cdd165cec74028e7eababc136b3594"
            }}
            style={styles.ImageBackground_454_1049}
          />
        </View>
        <View style={styles.View_454_1050}>
          <View style={styles.View_454_1051}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98d5/f4ac/c880eddcfdba5aaeeb59466a197d3905"
              }}
              style={styles.ImageBackground_I454_1051_184_691}
            />
          </View>
          <View style={styles.View_454_1052}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d47/0a70/d45d2a760047abe8ae50ac4077c7005d"
              }}
              style={styles.ImageBackground_I454_1052_184_695}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_454_1053}>
        <View style={styles.View_454_1058}>
          <View style={styles.View_454_1060}>
            <View style={styles.View_454_1061}>
              <Text style={styles.Text_454_1061}>NFT Collection</Text>
            </View>
            <View style={styles.View_454_1062}>
              <Text style={styles.Text_454_1062}>
                8,888 General Purpose Robots need humans
              </Text>
            </View>
            <View style={styles.View_454_1063}>
              <Text style={styles.Text_454_1063}>
                General Purpose Robots is an NFT collection of general purpose,
                bi-pedal, humanoid robots. With robotics and AI technology
                developing at pace, robots will no longer be confined to science
                fiction, they’ll soon become a real part of our lives.{" "}
              </Text>
            </View>
            <View style={styles.View_454_1059}>
              <Text style={styles.Text_454_1059}>Coming Soon!</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_454_1064}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98ea/b31f/b745f1041ca076cfe30e19260f7c9551"
            }}
            style={styles.ImageBackground_454_1065}
          />
        </View>
        <View style={styles.View_454_1066}>
          <View style={styles.View_454_1067}>
            <View style={styles.View_454_1068}>
              <Text style={styles.Text_454_1068}>GENERAL PURPOSE ROBOTS</Text>
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9bd8/2ee2/3f907e8c46505759628c45941c304371"
        }}
        style={styles.ImageBackground_454_1069}
      />
      <View style={styles.View_454_1081}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f261/f476/5143470ea37ac1d381b19fbdad8320a0"
          }}
          style={styles.ImageBackground_454_1082}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df00/4275/08cdb281c3808488d4c50dbc15ec1c27"
          }}
          style={styles.ImageBackground_454_1085}
        />
        <View style={styles.View_457_480} />
        <View style={styles.View_454_1089}>
          <View style={styles.View_454_1090}>
            <Text style={styles.Text_454_1090}>The Future</Text>
          </View>
          <View style={styles.View_454_1091}>
            <Text style={styles.Text_454_1091}>Roadmap</Text>
          </View>
          <View style={styles.View_454_1092}>
            <Text style={styles.Text_454_1092}>
              This roadmap outlines our goals and the future of gpRobots. The
              objective of our NFT collection is to make each gpRobot unique
              with hundreds of materials and color palettes to explore the
              opportunity of what a future with robots presents. Where
              personality and 3D art combine, to create robots we want to live
              with.
            </Text>
          </View>
        </View>
        <View style={styles.View_454_1093}>
          <View style={styles.View_454_1094}>
            <View style={styles.View_454_1095}>
              <View style={styles.View_454_1096}>
                <Text style={styles.Text_454_1096}>01.</Text>
              </View>
              <View style={styles.View_454_1097}>
                <Text style={styles.Text_454_1097}>For the Humans</Text>
              </View>
            </View>
            <View style={styles.View_454_1098}>
              <Text style={styles.Text_454_1098}>
                Robots need humans, and we want each gpRobot to feel uniquely
                yours. We’re working on a number of different rarity criteria
                and advanced personalizations. The first drop date will be
                annouced as soon as the project’s 3D rendering and technical
                aspects have been fully realized. We also need to work hard to
                find humans on Discord and Twitter who are opportunisitic about
                a future with robots.{" "}
              </Text>
            </View>
          </View>
          <View style={styles.View_454_1099}>
            <View style={styles.View_454_1100}>
              <View style={styles.View_454_1101}>
                <Text style={styles.Text_454_1101}>02.</Text>
              </View>
              <View style={styles.View_454_1102}>
                <Text style={styles.Text_454_1102}>Better Together</Text>
              </View>
            </View>
            <View style={styles.View_454_1103}>
              <Text style={styles.Text_454_1103}>
                When 100% of the gpRobots sell out we will establish a community
                wallet with 15 ETH, list on Rarity Tools, set up a member
                exclusive merchandise sto, anddnd do giveaways for gpRobot
                holders. Join, follow, share for a chance to win a free gpRobot.{" "}
              </Text>
            </View>
          </View>
          <View style={styles.View_454_1104}>
            <View style={styles.View_454_1105}>
              <View style={styles.View_454_1106}>
                <Text style={styles.Text_454_1106}>03.</Text>
              </View>
              <View style={styles.View_454_1107}>
                <Text style={styles.Text_454_1107}>Robots need upgrades</Text>
              </View>
            </View>
            <View style={styles.View_454_1108}>
              <Text style={styles.Text_454_1108}>
                Just like the latest iPhone, robots need upgrades too! We will
                collaborate with new artists to explore new advancements in
                personal robotics. Future robots could see more human-like
                qualities, take on more complex tasks, and maybe even dance!
                Hold gpRobots in your wallet to receive future airdrops.
              </Text>
            </View>
          </View>
          <View style={styles.View_454_1109}>
            <View style={styles.View_454_1110}>
              <View style={styles.View_454_1111}>
                <Text style={styles.Text_454_1111}>04.</Text>
              </View>
              <View style={styles.View_454_1112}>
                <Text style={styles.Text_454_1112}>Into the Metaverse</Text>
              </View>
            </View>
            <View style={styles.View_454_1113}>
              <Text style={styles.Text_454_1113}>
                Our aim was to introduce something furturistic to the NFT space
                and the realm of collectibles to probe at possibilities. If this
                project is a success, gpRobots may enter the metaverse. We
                envision a future where your personalized gpRobot is your
                greatest companion.{" "}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("531%") },
  View_454_926: {
    width: wp("138%"),
    minWidth: wp("138%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-19%"),
    top: hp("447%")
  },
  ImageBackground_454_928: {
    width: wp("138%"),
    height: hp("67%"),
    minHeight: hp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%")
  },
  View_454_929: {
    width: wp("108%"),
    minWidth: wp("108%"),
    height: hp("67%"),
    minHeight: hp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("0%")
  },
  View_454_930: {
    width: wp("99%"),
    height: hp("53%"),
    minHeight: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("14%"),
    backgroundColor: "rgba(27, 27, 135, 1)"
  },
  View_454_931: {
    width: wp("108%"),
    height: hp("53%"),
    minHeight: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%"),
    backgroundColor: "rgba(32, 54, 150, 1)"
  },
  View_454_932: {
    width: wp("100%"),
    height: hp("65%"),
    minHeight: hp("65%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_454_944: {
    width: wp("95%"),
    height: hp("9%"),
    top: hp("74%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_454_945: {
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_454_945: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_946: {
    width: wp("119%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-12%"),
    backgroundColor: "rgba(216, 216, 216, 1)"
  },
  View_454_947: {
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_454_947: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_936: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("45%"),
    minHeight: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("14%")
  },
  View_454_937: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("45%"),
    minHeight: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_454_938: {
    width: wp("30%"),
    height: hp("10%"),
    top: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_454_939: {
    width: wp("29%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(76, 64, 247, 1)"
  },
  View_454_940: {
    width: wp("15%"),
    minWidth: wp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_454_940: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_941: {
    width: wp("22%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I454_941_0_1969: {
    flexGrow: 1,
    width: wp("22%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I454_941_0_1970: {
    width: wp("9%"),
    minWidth: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I454_941_0_1970: {
    color: "rgba(76, 64, 247, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I454_941_0_1971: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    backgroundColor: "rgba(76, 64, 247, 1)"
  },
  View_454_942: {
    width: wp("45%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_454_942: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 45,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4000000059604645,
    textTransform: "none"
  },
  View_454_943: {
    width: wp("81%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_454_943: {
    color: "rgba(107, 107, 107, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_948: {
    width: wp("78%"),
    height: hp("79%"),
    minHeight: hp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("361%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_949: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_951: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_454_951: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_952: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("69%"),
    minHeight: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_953: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_954: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_955: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_454_956: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_454_957: {
    width: wp("15%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_454_958: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_959: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_454_959: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_960: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_454_960: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_961: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_962: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_454_963: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_454_964: {
    width: wp("15%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_454_965: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_966: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_967: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_454_967: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_968: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_454_968: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_969: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_970: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_454_971: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_454_972: {
    width: wp("15%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_454_973: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_974: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_975: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_454_975: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_976: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_454_976: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_977: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_454_977: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_978: {
    width: wp("48%"),
    minWidth: wp("48%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("39%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_979: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_980: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_454_981: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_454_982: {
    width: wp("15%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_454_983: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_984: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_985: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_454_985: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_986: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_454_986: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_987: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_454_987: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_988: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_989: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_454_990: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_466_488: {
    width: wp("15%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_454_992: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_993: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_994: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_454_994: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_995: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_454_995: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_996: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_454_996: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_454_1054: {
    width: wp("100%"),
    height: hp("120%"),
    minHeight: hp("120%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  View_454_1045: {
    width: wp("110%"),
    minWidth: wp("110%"),
    height: hp("64%"),
    minHeight: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5%"),
    top: hp("99%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_1046: {
    width: wp("110%"),
    minWidth: wp("110%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_454_1047: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    resizeMode: "cover"
  },
  ImageBackground_454_1048: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_454_1049: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("7%"),
    resizeMode: "cover"
  },
  View_454_1050: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("59%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_1051: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I454_1051_184_691: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_454_1052: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I454_1052_184_695: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_454_1053: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("81%"),
    minHeight: hp("81%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_454_1058: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("65%"),
    minHeight: hp("65%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("17%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_1060: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("62%"),
    minHeight: hp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_1061: {
    width: wp("48%"),
    minWidth: wp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_454_1061: {
    color: "rgba(76, 64, 247, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_1062: {
    width: wp("44%"),
    minWidth: wp("44%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_454_1062: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 26,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.15000000596046448,
    textTransform: "none"
  },
  View_454_1063: {
    width: wp("46%"),
    minWidth: wp("46%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_454_1063: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_1059: {
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("50%"),
    justifyContent: "flex-start"
  },
  Text_454_1059: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_1064: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("81%"),
    minHeight: hp("81%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_454_1065: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("81%"),
    minHeight: hp("81%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 0
  },
  View_454_1066: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_1067: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_1068: {
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_454_1068: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  ImageBackground_454_1069: {
    width: wp("14%"),
    height: hp("2%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%")
  },
  View_454_1081: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("165%"),
    minHeight: hp("165%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("182%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_454_1082: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("-24%")
  },
  ImageBackground_454_1085: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("154%")
  },
  View_457_480: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("137%"),
    minHeight: hp("137%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27%"),
    backgroundColor: "rgba(27, 27, 135, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 0
  },
  View_454_1089: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_1090: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_454_1090: {
    color: "rgba(76, 64, 247, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_1091: {
    width: wp("66%"),
    minWidth: wp("66%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_454_1091: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 26,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.15000000596046448,
    textTransform: "none"
  },
  View_454_1092: {
    width: wp("83%"),
    minWidth: wp("83%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_454_1092: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_1093: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("126%"),
    minHeight: hp("126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("35%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_1094: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 244, 244, 0.801190972328186)"
  },
  View_454_1095: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_1096: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_454_1096: {
    color: "rgba(76, 64, 247, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_1097: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_454_1097: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_1098: {
    width: wp("79%"),
    minWidth: wp("79%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_454_1098: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_1099: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("34%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_1100: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_1101: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_454_1101: {
    color: "rgba(76, 64, 247, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_1102: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_454_1102: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_1103: {
    width: wp("79%"),
    minWidth: wp("79%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_454_1103: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_1104: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("65%"),
    backgroundColor: "rgba(244, 244, 244, 0.801190972328186)"
  },
  View_454_1105: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_1106: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_454_1106: {
    color: "rgba(76, 64, 247, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_1107: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_454_1107: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_1108: {
    width: wp("79%"),
    minWidth: wp("79%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_454_1108: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_1109: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("95%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_1110: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_1111: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_454_1111: {
    color: "rgba(76, 64, 247, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_1112: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_454_1112: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_1113: {
    width: wp("79%"),
    minWidth: wp("79%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_454_1113: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
