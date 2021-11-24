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
      <View style={styles.View_454_619}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c24/724a/b8ef393772aafbae9150cd8c6998bb7f"
          }}
          style={styles.ImageBackground_454_620}
        />
      </View>
      <View style={styles.View_454_624}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a08/4862/f5ed35a752b1f04c9a254e5c871e6522"
          }}
          style={styles.ImageBackground_454_625}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a1a5/a579/319860f2487d3f6ef31bbb0525da4ecb"
        }}
        style={styles.ImageBackground_454_626}
      />
      <View style={styles.View_454_633}>
        <View style={styles.View_454_634}>
          <View style={styles.View_454_635}>
            <Text style={styles.Text_454_635}>
              8,888 General Purpose Robots need Humans
            </Text>
          </View>
          <View style={styles.View_454_636}>
            <Text style={styles.Text_454_636}>NFT Collection</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_454_637}>
        <View style={styles.View_454_638}>
          <View style={styles.View_454_639}>
            <View style={styles.View_454_640}>
              <Text style={styles.Text_454_640}>GENERAL PURPOSE ROBOTS</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_454_641}>
        <View style={styles.View_454_642}>
          <Text style={styles.Text_454_642}>
            General Purpose Robots is an NFT collection of general purpose,
            bi-pedal, humanoid robots. With robotics and AI technology
            developing at pace, robots will no longer be confined to science
            fiction, they’ll soon become a real part of our lives.{" "}
          </Text>
        </View>
        <View style={styles.View_454_643}>
          <Text style={styles.Text_454_643}>Coming Soon!</Text>
        </View>
      </View>
      <View style={styles.View_454_644}>
        <View style={styles.View_454_645}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b4f/ad0d/542c3a4cf15a6f119a82fef63cb5a81d"
            }}
            style={styles.ImageBackground_454_646}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/956d/b9ed/5c015c63133502116c7f74865bc15335"
            }}
            style={styles.ImageBackground_454_647}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d1f1/3077/6ceda6089cdc003bc663038d674b8454"
            }}
            style={styles.ImageBackground_454_648}
          />
        </View>
      </View>
      <View style={styles.View_454_652}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ed5/0863/b9809d046324ed456f50ca62dae1d417"
          }}
          style={styles.ImageBackground_454_653}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee8d/e8f5/af162b73313ebfc702673217cf84aecd"
          }}
          style={styles.ImageBackground_454_656}
        />
        <View style={styles.View_454_659} />
        <View style={styles.View_454_660}>
          <View style={styles.View_454_661}>
            <Text style={styles.Text_454_661}>The Future</Text>
          </View>
          <View style={styles.View_454_662}>
            <Text style={styles.Text_454_662}>Roadmap</Text>
          </View>
          <View style={styles.View_454_663}>
            <Text style={styles.Text_454_663}>
              This roadmap outlines our goals and the future of gpRobots. The
              objective of our NFT collection is to make each gpRobot unique
              with hundreds of materials and color palettes to explore the
              opportunity of what a future with robots presents. Where
              personality and 3D art combine, to create robots we want to live
              with.
            </Text>
          </View>
        </View>
        <View style={styles.View_454_664}>
          <View style={styles.View_454_665}>
            <View style={styles.View_454_666}>
              <View style={styles.View_454_667}>
                <Text style={styles.Text_454_667}>01.</Text>
              </View>
              <View style={styles.View_454_668}>
                <Text style={styles.Text_454_668}>For the Humans</Text>
              </View>
            </View>
            <View style={styles.View_454_669}>
              <Text style={styles.Text_454_669}>
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
          <View style={styles.View_454_670}>
            <View style={styles.View_454_671}>
              <View style={styles.View_454_672}>
                <Text style={styles.Text_454_672}>02.</Text>
              </View>
              <View style={styles.View_454_673}>
                <Text style={styles.Text_454_673}>Better Together</Text>
              </View>
            </View>
            <View style={styles.View_454_674}>
              <Text style={styles.Text_454_674}>
                When 100% of the gpRobots sell out we will establish a community
                wallet with 15 ETH, list on Rarity Tools, set up a member
                exclusive merchandise store, and do giveaways for gpRobot
                holders. Join, follow, share for a chance to win a free gpRobot.{" "}
              </Text>
            </View>
          </View>
          <View style={styles.View_454_675}>
            <View style={styles.View_454_676}>
              <View style={styles.View_454_677}>
                <Text style={styles.Text_454_677}>03.</Text>
              </View>
              <View style={styles.View_454_678}>
                <Text style={styles.Text_454_678}>Robots need upgrades</Text>
              </View>
            </View>
            <View style={styles.View_454_679}>
              <Text style={styles.Text_454_679}>
                Just like the latest iPhone, robots need upgrades too! We will
                collaborate with new artists to explore new advancements in
                personal robotics. Future robots could see more human-like
                qualities, take on more complex tasks and maybe even dance! Hold
                gpRobots in your wallet to receive future airdrops.
              </Text>
            </View>
          </View>
          <View style={styles.View_454_680}>
            <View style={styles.View_454_681}>
              <View style={styles.View_454_682}>
                <Text style={styles.Text_454_682}>01.</Text>
              </View>
              <View style={styles.View_454_683}>
                <Text style={styles.Text_454_683}>Roadmap</Text>
              </View>
            </View>
            <View style={styles.View_454_684}>
              <Text style={styles.Text_454_684}>
                Our aim was to introduce something furturistic to the NFT space
                and the realm of collectibles to probe at possibilities. If this
                project is a success, gpRobots may enter the metaverse. We
                envision a future where your personalized gpRobot is your
                greatest companion.
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_454_690}>
        <View style={styles.View_454_691}>
          <Text style={styles.Text_454_691}>Meet the team</Text>
        </View>
        <View style={styles.View_454_692}>
          <View style={styles.View_454_693}>
            <View style={styles.View_454_694}>
              <View style={styles.View_454_695}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/242f/0e2f/14ddb4778b9f7fa7433fc03f8484588b"
                  }}
                  style={styles.ImageBackground_454_696}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4011/077b/b10cb8caec2f8fbf0253f545b209fd51"
                  }}
                  style={styles.ImageBackground_454_697}
                />
              </View>
              <View style={styles.View_454_698}>
                <View style={styles.View_454_699}>
                  <Text style={styles.Text_454_699}>Macrocosm</Text>
                </View>
                <View style={styles.View_454_700}>
                  <Text style={styles.Text_454_700}>NFT Artist</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_454_701}>
              <View style={styles.View_454_702}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b907/783f/ddd8949aa01ea3bbda54e3acb835a62b"
                  }}
                  style={styles.ImageBackground_454_703}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5af4/90aa/5c62541dde3fa9bb57c7c3f279aee058"
                  }}
                  style={styles.ImageBackground_454_704}
                />
              </View>
              <View style={styles.View_454_705}>
                <View style={styles.View_454_706}>
                  <View style={styles.View_454_707}>
                    <Text style={styles.Text_454_707}>Cryptofuturyst</Text>
                  </View>
                </View>
                <View style={styles.View_454_708}>
                  <Text style={styles.Text_454_708}>Developer</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_454_709}>
              <View style={styles.View_454_710}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8527/3144/0188b7a0e1d84fdfb9333c9cbc2218ce"
                  }}
                  style={styles.ImageBackground_454_711}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a64c/faef/fc233d0a944384fa28704a5c9df11406"
                  }}
                  style={styles.ImageBackground_454_712}
                />
              </View>
              <View style={styles.View_454_713}>
                <View style={styles.View_454_714}>
                  <View style={styles.View_454_715}>
                    <Text style={styles.Text_454_715}>Chelsey</Text>
                  </View>
                  <View style={styles.View_454_716}>
                    <Text style={styles.Text_454_716}>Corkery</Text>
                  </View>
                </View>
                <View style={styles.View_454_717}>
                  <Text style={styles.Text_454_717}>Developer</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_454_718}>
            <View style={styles.View_454_719}>
              <View style={styles.View_454_720}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/242f/0e2f/14ddb4778b9f7fa7433fc03f8484588b"
                  }}
                  style={styles.ImageBackground_454_721}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/59d3/c73e/073e0f354c78e769c7668bf55e8f2933"
                  }}
                  style={styles.ImageBackground_454_722}
                />
              </View>
              <View style={styles.View_454_723}>
                <View style={styles.View_454_724}>
                  <View style={styles.View_454_725}>
                    <Text style={styles.Text_454_725}>Ida</Text>
                  </View>
                  <View style={styles.View_454_726}>
                    <Text style={styles.Text_454_726}>Flatley</Text>
                  </View>
                </View>
                <View style={styles.View_454_727}>
                  <Text style={styles.Text_454_727}>Developer</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_454_728}>
              <View style={styles.View_454_729}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b907/783f/ddd8949aa01ea3bbda54e3acb835a62b"
                  }}
                  style={styles.ImageBackground_454_730}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5468/7892/c0ecfb9773ba7b23cfb445cc1a4443dd"
                  }}
                  style={styles.ImageBackground_466_490}
                />
              </View>
              <View style={styles.View_454_732}>
                <View style={styles.View_454_733}>
                  <View style={styles.View_454_734}>
                    <Text style={styles.Text_454_734}>Britney</Text>
                  </View>
                  <View style={styles.View_454_735}>
                    <Text style={styles.Text_454_735}>Barrows</Text>
                  </View>
                </View>
                <View style={styles.View_454_736}>
                  <Text style={styles.Text_454_736}>Communications</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_454_747}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce67/f292/4dc4463da838ccb56763e6eedaa2fc73"
          }}
          style={styles.ImageBackground_454_748}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0ceb/6a6e/ea99cc0e20222a67c5033711458d6a30"
          }}
          style={styles.ImageBackground_454_749}
        />
        <View style={styles.View_454_756}>
          <View style={styles.View_454_757}>
            <Text style={styles.Text_454_757}>
              © 2021, GENERAL PURPOSE ROBOTS
            </Text>
          </View>
          <View style={styles.View_454_758}>
            <Text style={styles.Text_454_758}>Back to top</Text>
          </View>
        </View>
        <View style={styles.View_454_750}>
          <View style={styles.View_454_752}>
            <View style={styles.View_454_753} />
            <View style={styles.View_454_754}>
              <Text style={styles.Text_454_754}>Discord Invite</Text>
            </View>
          </View>
          <View style={styles.View_454_755}>
            <Text style={styles.Text_454_755}>
              Welcome to the future. Join gpRobots Discord to get the latest
              news as soon as possible.{" "}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("731%") },
  View_454_619: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("50%"),
    minHeight: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("70%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_454_620: {
    width: wp("173%"),
    minWidth: wp("173%"),
    height: hp("62%"),
    minHeight: hp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-54%"),
    top: hp("0%")
  },
  View_454_624: {
    flexGrow: 1,
    width: wp("89%"),
    height: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("58%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_454_625: {
    width: wp("152%"),
    minWidth: wp("152%"),
    height: hp("140%"),
    minHeight: hp("140%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-63%"),
    top: hp("0%")
  },
  ImageBackground_454_626: {
    width: wp("20%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%")
  },
  View_454_633: {
    width: wp("71%"),
    minWidth: wp("71%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("26%")
  },
  View_454_634: {
    width: wp("71%"),
    minWidth: wp("71%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_454_635: {
    width: wp("71%"),
    minWidth: wp("71%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_454_635: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 26,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.15000000596046448,
    textTransform: "none"
  },
  View_454_636: {
    width: wp("36%"),
    minWidth: wp("36%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_454_636: {
    color: "rgba(76, 64, 247, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_637: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("12%")
  },
  View_454_638: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_639: {
    width: wp("118%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_454_640: {
    width: wp("78%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_454_640: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_454_641: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("147%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_642: {
    width: wp("83%"),
    minWidth: wp("83%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_454_642: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_643: {
    width: wp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("37%"),
    justifyContent: "flex-start"
  },
  Text_454_643: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_644: {
    width: wp("190%"),
    minWidth: wp("190%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-45%"),
    top: hp("200%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_645: {
    width: wp("190%"),
    minWidth: wp("190%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_454_646: {
    width: wp("53%"),
    minWidth: wp("53%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    resizeMode: "cover"
  },
  ImageBackground_454_647: {
    width: wp("67%"),
    minWidth: wp("67%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_454_648: {
    width: wp("53%"),
    minWidth: wp("53%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("137%"),
    top: hp("3%"),
    resizeMode: "cover"
  },
  View_454_652: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("269%"),
    minHeight: hp("269%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("249%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_454_653: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("8%")
  },
  ImageBackground_454_656: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("131%")
  },
  View_454_659: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("216%"),
    minHeight: hp("216%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("53%"),
    backgroundColor: "rgba(27, 27, 135, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 0
  },
  View_454_660: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_661: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_454_661: {
    color: "rgba(76, 64, 247, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_662: {
    width: wp("146%"),
    minWidth: wp("146%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_454_662: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 26,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.15000000596046448,
    textTransform: "none"
  },
  View_454_663: {
    width: wp("83%"),
    minWidth: wp("83%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_454_663: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_664: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("194%"),
    minHeight: hp("194%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("54%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_665: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("58%"),
    minHeight: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 244, 244, 0.801190972328186)"
  },
  View_454_666: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_667: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_454_667: {
    color: "rgba(76, 64, 247, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_668: {
    width: wp("68%"),
    minWidth: wp("68%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_454_668: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_669: {
    width: wp("84%"),
    minWidth: wp("84%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_454_669: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_670: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("58%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_671: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_672: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_454_672: {
    color: "rgba(76, 64, 247, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_673: {
    width: wp("68%"),
    minWidth: wp("68%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_454_673: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_674: {
    width: wp("84%"),
    minWidth: wp("84%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_454_674: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_675: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("60%"),
    minHeight: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("99%"),
    backgroundColor: "rgba(244, 244, 244, 0.801190972328186)"
  },
  View_454_676: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_677: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_454_677: {
    color: "rgba(76, 64, 247, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_678: {
    width: wp("74%"),
    minWidth: wp("74%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_454_678: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_679: {
    width: wp("84%"),
    minWidth: wp("84%"),
    minHeight: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_454_679: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_680: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("159%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_681: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_682: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_454_682: {
    color: "rgba(76, 64, 247, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_683: {
    width: wp("68%"),
    minWidth: wp("68%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_454_683: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_684: {
    width: wp("84%"),
    minWidth: wp("84%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_454_684: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_690: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("111%"),
    minHeight: hp("111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("533%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_691: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_454_691: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_692: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("102%"),
    minHeight: hp("102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_693: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("102%"),
    minHeight: hp("102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_694: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_695: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_454_696: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_454_697: {
    width: wp("34%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_454_698: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_699: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_454_699: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_700: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_454_700: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_701: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_702: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_454_703: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_454_704: {
    width: wp("34%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_454_705: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_706: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_707: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_454_707: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_708: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_454_708: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_709: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("72%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_710: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_454_711: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_454_712: {
    width: wp("34%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_454_713: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_714: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_715: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_454_715: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_716: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_454_716: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_717: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_454_717: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_718: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("66%"),
    minHeight: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_719: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_720: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_454_721: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_454_722: {
    width: wp("34%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_454_723: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_724: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_725: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_454_725: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_726: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_454_726: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_727: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_454_727: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_728: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_729: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_454_730: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_466_490: {
    width: wp("34%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_454_732: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_733: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_734: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_454_734: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_735: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_454_735: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_736: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_454_736: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_747: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("80%"),
    minHeight: hp("80%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("651%")
  },
  ImageBackground_454_748: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_454_749: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28%")
  },
  View_454_756: {
    width: wp("77%"),
    height: hp("14%"),
    top: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_454_757: {
    width: wp("72%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_454_757: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_758: {
    width: wp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_454_758: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_750: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("8%")
  },
  View_454_752: {
    width: wp("65%"),
    height: hp("10%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_454_753: {
    width: wp("65%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(76, 64, 247, 1)"
  },
  View_454_754: {
    width: wp("33%"),
    minWidth: wp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_454_754: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_454_755: {
    width: wp("83%"),
    minWidth: wp("83%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_454_755: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
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
