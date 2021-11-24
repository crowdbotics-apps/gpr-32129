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
      <View style={styles.View_443_690}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c24/724a/b8ef393772aafbae9150cd8c6998bb7f"
          }}
          style={styles.ImageBackground_443_686}
        />
      </View>
      <View style={styles.View_443_691}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a08/4862/f5ed35a752b1f04c9a254e5c871e6522"
          }}
          style={styles.ImageBackground_443_692}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a1a5/a579/319860f2487d3f6ef31bbb0525da4ecb"
        }}
        style={styles.ImageBackground_443_693}
      />
      <View style={styles.View_425_467}>
        <View style={styles.View_425_468}>
          <View style={styles.View_425_469}>
            <Text style={styles.Text_425_469}>
              8,888 General Purpose Robots need Humans
            </Text>
          </View>
          <View style={styles.View_443_685}>
            <Text style={styles.Text_443_685}>NFT Collection</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_425_458}>
        <View style={styles.View_425_486}>
          <View style={styles.View_425_487}>
            <View style={styles.View_425_488}>
              <Text style={styles.Text_425_488}>GENERAL PURPOSE ROBOTS</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_443_704}>
        <View style={styles.View_443_701}>
          <Text style={styles.Text_443_701}>
            General Purpose Robots is an NFT collection of general purpose,
            bi-pedal, humanoid robots. With robotics and AI technology
            developing at pace, robots will no longer be confined to science
            fiction, they’ll soon become a real part of our lives.{" "}
          </Text>
        </View>
        <View style={styles.View_443_700}>
          <Text style={styles.Text_443_700}>Coming Soon!</Text>
        </View>
      </View>
      <View style={styles.View_443_705}>
        <View style={styles.View_443_706}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b4f/ad0d/542c3a4cf15a6f119a82fef63cb5a81d"
            }}
            style={styles.ImageBackground_443_707}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/956d/b9ed/5c015c63133502116c7f74865bc15335"
            }}
            style={styles.ImageBackground_443_708}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d1f1/3077/6ceda6089cdc003bc663038d674b8454"
            }}
            style={styles.ImageBackground_443_709}
          />
        </View>
      </View>
      <View style={styles.View_443_719}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bcfb/b601/b391a1fa844d127f8c20c47d2c1063e9"
          }}
          style={styles.ImageBackground_443_778}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee8d/e8f5/af162b73313ebfc702673217cf84aecd"
          }}
          style={styles.ImageBackground_443_777}
        />
        <View style={styles.View_443_726} />
        <View style={styles.View_443_753}>
          <View style={styles.View_443_754}>
            <Text style={styles.Text_443_754}>The Future</Text>
          </View>
          <View style={styles.View_443_755}>
            <Text style={styles.Text_443_755}>Roadmap</Text>
          </View>
          <View style={styles.View_443_756}>
            <Text style={styles.Text_443_756}>
              This roadmap outlines our goals and the future of gpRobots.The
              objective of our NFT collection is to make each gpRobot unique
              with hundreds of materials and color palettes to explore the
              opportunity of what a future with robots presents. Where
              personality and 3D art combine, to create robots we want to live
              with.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_443_727}>
        <View style={styles.View_443_728}>
          <View style={styles.View_443_729}>
            <View style={styles.View_443_730}>
              <Text style={styles.Text_443_730}>01.</Text>
            </View>
            <View style={styles.View_443_731}>
              <Text style={styles.Text_443_731}>For the Humans</Text>
            </View>
          </View>
          <View style={styles.View_443_732}>
            <Text style={styles.Text_443_732}>
              Robots need humans, and we want each gpRobot to feel uniquely
              yours. We’re working on a number of different rarity criteria and
              advanced personalizations. The first drop date will be annouced as
              soon as the project’s 3D rendering and technical aspects have been
              fully realized. We also need to work hard to find humans on
              Discord and Twitter who are opportunisitic about a future with
              robots.{" "}
            </Text>
          </View>
        </View>
        <View style={styles.View_443_757}>
          <View style={styles.View_443_758}>
            <View style={styles.View_443_759}>
              <Text style={styles.Text_443_759}>02.</Text>
            </View>
            <View style={styles.View_443_760}>
              <Text style={styles.Text_443_760}>Better Together</Text>
            </View>
          </View>
          <View style={styles.View_443_761}>
            <Text style={styles.Text_443_761}>
              When 100% of the gpRobots sell out we will establish a community
              wallet with 15 ETH, list on Rarity Tools, set up a member
              exclusive merchandise store, and do giveaways for gpRobot holders.
              Join, follow, share for a chance to win a free gpRobot.{" "}
            </Text>
          </View>
        </View>
        <View style={styles.View_443_762}>
          <View style={styles.View_443_763}>
            <View style={styles.View_443_764}>
              <Text style={styles.Text_443_764}>03.</Text>
            </View>
            <View style={styles.View_443_765}>
              <Text style={styles.Text_443_765}>Robots need upgrades</Text>
            </View>
          </View>
          <View style={styles.View_443_766}>
            <Text style={styles.Text_443_766}>
              Just like the latest iPhone, robots need upgrades too! We will
              collaborate with new artists to explore new advancements in
              personal robotics. Future robots could see more human-like
              qualities, take on more complex tasks and maybe even dance! Hold
              gpRobots in your wallet to receive future airdrops.
            </Text>
          </View>
        </View>
        <View style={styles.View_443_767}>
          <View style={styles.View_443_768}>
            <View style={styles.View_443_769}>
              <Text style={styles.Text_443_769}>04.</Text>
            </View>
            <View style={styles.View_443_770}>
              <Text style={styles.Text_443_770}>Into the Metaverse</Text>
            </View>
          </View>
          <View style={styles.View_443_771}>
            <Text style={styles.Text_443_771}>
              Our aim was to introduce something furturistic to the NFT space
              and the realm of collectibles to probe at possibilities. If this
              project is a success, gpRobots may enter the metaverse. We
              envision a future where your personalized gpRobot is your greatest
              companion.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_443_779}>
        <View style={styles.View_443_782}>
          <Text style={styles.Text_443_782}>Meet the team</Text>
        </View>
        <View style={styles.View_443_783}>
          <View style={styles.View_443_784}>
            <View style={styles.View_443_785}>
              <View style={styles.View_443_786}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/242f/0e2f/14ddb4778b9f7fa7433fc03f8484588b"
                  }}
                  style={styles.ImageBackground_443_787}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4011/077b/b10cb8caec2f8fbf0253f545b209fd51"
                  }}
                  style={styles.ImageBackground_443_788}
                />
              </View>
              <View style={styles.View_443_789}>
                <View style={styles.View_443_790}>
                  <Text style={styles.Text_443_790}>Macrocosm</Text>
                </View>
                <View style={styles.View_443_791}>
                  <Text style={styles.Text_443_791}>NFT Artist</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_443_792}>
              <View style={styles.View_443_793}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b907/783f/ddd8949aa01ea3bbda54e3acb835a62b"
                  }}
                  style={styles.ImageBackground_443_794}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5af4/90aa/5c62541dde3fa9bb57c7c3f279aee058"
                  }}
                  style={styles.ImageBackground_443_795}
                />
              </View>
              <View style={styles.View_443_796}>
                <View style={styles.View_443_797}>
                  <View style={styles.View_443_798}>
                    <Text style={styles.Text_443_798}>Cryptofuturyst</Text>
                  </View>
                </View>
                <View style={styles.View_443_799}>
                  <Text style={styles.Text_443_799}>Developer</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_443_800}>
              <View style={styles.View_443_801}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8527/3144/0188b7a0e1d84fdfb9333c9cbc2218ce"
                  }}
                  style={styles.ImageBackground_443_802}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a64c/faef/fc233d0a944384fa28704a5c9df11406"
                  }}
                  style={styles.ImageBackground_443_803}
                />
              </View>
              <View style={styles.View_443_804}>
                <View style={styles.View_443_805}>
                  <View style={styles.View_443_806}>
                    <Text style={styles.Text_443_806}>Chelsey</Text>
                  </View>
                  <View style={styles.View_443_807}>
                    <Text style={styles.Text_443_807}>Corkery</Text>
                  </View>
                </View>
                <View style={styles.View_443_808}>
                  <Text style={styles.Text_443_808}>Developer</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_443_809}>
            <View style={styles.View_443_810}>
              <View style={styles.View_443_811}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/242f/0e2f/14ddb4778b9f7fa7433fc03f8484588b"
                  }}
                  style={styles.ImageBackground_443_812}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/59d3/c73e/073e0f354c78e769c7668bf55e8f2933"
                  }}
                  style={styles.ImageBackground_443_813}
                />
              </View>
              <View style={styles.View_443_814}>
                <View style={styles.View_443_815}>
                  <View style={styles.View_443_816}>
                    <Text style={styles.Text_443_816}>Ida</Text>
                  </View>
                  <View style={styles.View_443_817}>
                    <Text style={styles.Text_443_817}>Flatley</Text>
                  </View>
                </View>
                <View style={styles.View_443_818}>
                  <Text style={styles.Text_443_818}>Developer</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_443_819}>
              <View style={styles.View_443_820}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b907/783f/ddd8949aa01ea3bbda54e3acb835a62b"
                  }}
                  style={styles.ImageBackground_443_821}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5468/7892/c0ecfb9773ba7b23cfb445cc1a4443dd"
                  }}
                  style={styles.ImageBackground_466_489}
                />
              </View>
              <View style={styles.View_443_823}>
                <View style={styles.View_443_824}>
                  <View style={styles.View_443_825}>
                    <Text style={styles.Text_443_825}>Britney</Text>
                  </View>
                  <View style={styles.View_443_826}>
                    <Text style={styles.Text_443_826}>Barrows</Text>
                  </View>
                </View>
                <View style={styles.View_443_827}>
                  <Text style={styles.Text_443_827}>Communications</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_443_1011}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7615/8746/2e465fc8051f0c6eb8d154bd7b93b187"
          }}
          style={styles.ImageBackground_443_1012}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9cb1/584c/212a4df5cf6a52260f9d161c0c41d4e2"
          }}
          style={styles.ImageBackground_443_1013}
        />
        <View style={styles.View_443_1027}>
          <View style={styles.View_443_1040}>
            <Text style={styles.Text_443_1040}>
              © 2021, GENERAL PURPOSE ROBOTS
            </Text>
          </View>
          <View style={styles.View_443_1030}>
            <Text style={styles.Text_443_1030}>Back to top</Text>
          </View>
        </View>
        <View style={styles.View_443_1021}>
          <View style={styles.View_443_1048}>
            <View style={styles.View_443_1049} />
            <View style={styles.View_443_1050}>
              <Text style={styles.Text_443_1050}>Discord Invite</Text>
            </View>
          </View>
          <View style={styles.View_443_1026}>
            <Text style={styles.Text_443_1026}>
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
  View_2: { height: hp("707%") },
  View_443_690: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("50%"),
    minHeight: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("70%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_443_686: {
    width: wp("152%"),
    minWidth: wp("152%"),
    height: hp("62%"),
    minHeight: hp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-47%"),
    top: hp("0%")
  },
  View_443_691: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("58%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_443_692: {
    width: wp("133%"),
    minWidth: wp("133%"),
    height: hp("140%"),
    minHeight: hp("140%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-43%"),
    top: hp("0%")
  },
  ImageBackground_443_693: {
    width: wp("18%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%")
  },
  View_425_467: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("26%")
  },
  View_425_468: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_425_469: {
    width: wp("63%"),
    minWidth: wp("63%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_425_469: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 26,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.15000000596046448,
    textTransform: "none"
  },
  View_443_685: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_443_685: {
    color: "rgba(76, 64, 247, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_425_458: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("12%")
  },
  View_425_486: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_425_487: {
    width: wp("103%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_425_488: {
    width: wp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_425_488: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_443_704: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("147%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_443_701: {
    width: wp("73%"),
    minWidth: wp("73%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_443_701: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_443_700: {
    width: wp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("37%"),
    justifyContent: "flex-start"
  },
  Text_443_700: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_443_705: {
    width: wp("167%"),
    minWidth: wp("167%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-39%"),
    top: hp("200%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_443_706: {
    width: wp("167%"),
    minWidth: wp("167%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_443_707: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    resizeMode: "cover"
  },
  ImageBackground_443_708: {
    width: wp("58%"),
    minWidth: wp("58%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_443_709: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("120%"),
    top: hp("3%"),
    resizeMode: "cover"
  },
  View_443_719: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("188%"),
    minHeight: hp("188%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("249%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_443_778: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("8%")
  },
  ImageBackground_443_777: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("131%")
  },
  View_443_726: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("198%"),
    minHeight: hp("198%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("46%"),
    backgroundColor: "rgba(27, 27, 135, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 0
  },
  View_443_753: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_443_754: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_443_754: {
    color: "rgba(76, 64, 247, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_443_755: {
    width: wp("82%"),
    minWidth: wp("82%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_443_755: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 26,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.15000000596046448,
    textTransform: "none"
  },
  View_443_756: {
    width: wp("83%"),
    minWidth: wp("83%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_443_756: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_443_727: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("197%"),
    minHeight: hp("197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("296%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_443_728: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("54%"),
    minHeight: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 244, 244, 0.801190972328186)"
  },
  View_443_729: {
    width: wp("69%"),
    minWidth: wp("69%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_443_730: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_443_730: {
    color: "rgba(76, 64, 247, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_443_731: {
    width: wp("59%"),
    minWidth: wp("59%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_443_731: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_443_732: {
    width: wp("80%"),
    minWidth: wp("80%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_443_732: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_443_757: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("54%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_443_758: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_443_759: {
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
  Text_443_759: {
    color: "rgba(76, 64, 247, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_443_760: {
    width: wp("59%"),
    minWidth: wp("59%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_443_760: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_443_761: {
    width: wp("72%"),
    minWidth: wp("72%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_443_761: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_443_762: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("54%"),
    minHeight: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("96%"),
    backgroundColor: "rgba(244, 244, 244, 0.801190972328186)"
  },
  View_443_763: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_443_764: {
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
  Text_443_764: {
    color: "rgba(76, 64, 247, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_443_765: {
    width: wp("65%"),
    minWidth: wp("65%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_443_765: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_443_766: {
    width: wp("80%"),
    minWidth: wp("80%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_443_766: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_443_767: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("46%"),
    minHeight: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("150%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_443_768: {
    width: wp("71%"),
    minWidth: wp("71%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_443_769: {
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
  Text_443_769: {
    color: "rgba(76, 64, 247, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_443_770: {
    width: wp("59%"),
    minWidth: wp("59%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_443_770: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_443_771: {
    width: wp("72%"),
    minWidth: wp("72%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_443_771: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_443_779: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("111%"),
    minHeight: hp("111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("505%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_443_782: {
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
  Text_443_782: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_443_783: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("102%"),
    minHeight: hp("102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_443_784: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("102%"),
    minHeight: hp("102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_443_785: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_443_786: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_443_787: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_443_788: {
    width: wp("30%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_443_789: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_443_790: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_443_790: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_443_791: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_443_791: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_443_792: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_443_793: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_443_794: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_443_795: {
    width: wp("30%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_443_796: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_443_797: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_443_798: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_443_798: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_443_799: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_443_799: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_443_800: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("72%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_443_801: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_443_802: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_443_803: {
    width: wp("30%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_443_804: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_443_805: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_443_806: {
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
  Text_443_806: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_443_807: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_443_807: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_443_808: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_443_808: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_443_809: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("66%"),
    minHeight: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_443_810: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_443_811: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_443_812: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_443_813: {
    width: wp("30%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_443_814: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_443_815: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_443_816: {
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
  Text_443_816: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_443_817: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_443_817: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_443_818: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_443_818: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_443_819: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_443_820: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_443_821: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_466_489: {
    width: wp("30%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_443_823: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_443_824: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_443_825: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_443_825: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_443_826: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_443_826: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_443_827: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_443_827: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_443_1011: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("80%"),
    minHeight: hp("80%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("627%")
  },
  ImageBackground_443_1012: {
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
  ImageBackground_443_1013: {
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
  View_443_1027: {
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
  View_443_1040: {
    width: wp("72%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_443_1040: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_443_1030: {
    width: wp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_443_1030: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_443_1021: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("8%")
  },
  View_443_1048: {
    width: wp("54%"),
    height: hp("10%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_443_1049: {
    width: wp("54%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(76, 64, 247, 1)"
  },
  View_443_1050: {
    width: wp("29%"),
    minWidth: wp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_443_1050: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_443_1026: {
    width: wp("82%"),
    minWidth: wp("82%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_443_1026: {
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
