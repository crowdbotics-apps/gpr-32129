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
      <View style={styles.View_471_704}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2266/3173/6cfb744933824b18f8f585508d41cc09"
          }}
          style={styles.ImageBackground_471_705}
        />
        <View style={styles.View_471_709}>
          <View style={styles.View_471_710}>
            <View style={styles.View_471_711}>
              <Text style={styles.Text_471_711}>NFT Collection</Text>
            </View>
            <View style={styles.View_471_712}>
              <Text style={styles.Text_471_712}>
                8,888 General Purpose Robots need Humans
              </Text>
            </View>
            <View style={styles.View_471_713}>
              <Text style={styles.Text_471_713}>
                General Purpose Robots is an NFT collection of general purpose,
                bi-pedal, humanoid robots. With robotics and AI technology
                developing at pace, robots will no longer be confined to science
                fiction, they’ll soon become a real part of our lives.{" "}
              </Text>
            </View>
            <View style={styles.View_471_714}>
              <Text style={styles.Text_471_714}>Coming Soon!</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_471_715}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7234/5cfa/33edef6d18648f887aff29a221d2ed26"
            }}
            style={styles.ImageBackground_471_716}
          />
        </View>
        <View style={styles.View_471_717}>
          <View style={styles.View_471_718}>
            <Text style={styles.Text_471_718}>GENERAL PURPOSE ROBOTS</Text>
          </View>
          <View style={styles.View_471_719}>
            <View style={styles.View_471_720}>
              <View style={styles.View_471_721}>
                <Text style={styles.Text_471_721}>Twitter</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94fd/7e24/6aa49283879bb2de3eeb7956e49a5b25"
                }}
                style={styles.ImageBackground_471_722}
              />
            </View>
            <View style={styles.View_471_723}>
              <View style={styles.View_471_724}>
                <Text style={styles.Text_471_724}>Discord</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc77/ac50/17420a9456d2bd76329f6da154b8d517"
                }}
                style={styles.ImageBackground_471_725}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_471_726}>
        <View style={styles.View_471_727}>
          <View style={styles.View_471_728}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7deb/651b/6e5c84c03789204a33da0a53ea44f1f0"
              }}
              style={styles.ImageBackground_471_729}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f488/55aa/acfce04cab9834b50000a7164a801d1e"
              }}
              style={styles.ImageBackground_471_730}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acce/8c38/55e72f3ac9410bc68649155128fb4ed4"
              }}
              style={styles.ImageBackground_471_731}
            />
          </View>
          <View style={styles.View_471_732}>
            <View style={styles.View_471_733}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98d5/f4ac/c880eddcfdba5aaeeb59466a197d3905"
                }}
                style={styles.ImageBackground_I471_733_184_691}
              />
            </View>
            <View style={styles.View_471_734}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d47/0a70/d45d2a760047abe8ae50ac4077c7005d"
                }}
                style={styles.ImageBackground_I471_734_184_695}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_471_735}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bcfb/b601/b391a1fa844d127f8c20c47d2c1063e9"
          }}
          style={styles.ImageBackground_471_736}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bcfb/b601/b391a1fa844d127f8c20c47d2c1063e9"
          }}
          style={styles.ImageBackground_471_739}
        />
        <View style={styles.View_471_742} />
        <View style={styles.View_471_743}>
          <View style={styles.View_471_744}>
            <View style={styles.View_471_745}>
              <View style={styles.View_471_746}>
                <Text style={styles.Text_471_746}>01.</Text>
              </View>
              <View style={styles.View_471_747}>
                <Text style={styles.Text_471_747}>For the Humans</Text>
              </View>
            </View>
            <View style={styles.View_471_748}>
              <Text style={styles.Text_471_748}>
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
          <View style={styles.View_471_749}>
            <View style={styles.View_471_750}>
              <View style={styles.View_471_751}>
                <Text style={styles.Text_471_751}>02.</Text>
              </View>
              <View style={styles.View_471_752}>
                <Text style={styles.Text_471_752}>Better together</Text>
              </View>
            </View>
            <View style={styles.View_471_753}>
              <Text style={styles.Text_471_753}>
                When 100% of the gpRobots sell out we will establish a community
                wallet with 15 ETH, list on Rarity Tools, set up a member
                exclusive merchandise store, and do giveaways for gpRobot
                holders. Join, follow, share for a chance to win a free gpRobot.{" "}
              </Text>
            </View>
          </View>
          <View style={styles.View_471_754}>
            <View style={styles.View_471_755}>
              <View style={styles.View_471_756}>
                <Text style={styles.Text_471_756}>03.</Text>
              </View>
              <View style={styles.View_471_757}>
                <Text style={styles.Text_471_757}>Robots need upgrades</Text>
              </View>
            </View>
            <View style={styles.View_471_758}>
              <Text style={styles.Text_471_758}>
                Just like the latest iPhone, robots need upgrades too. We will
                collaborate with new artists to explore new advancements in
                personal robotics. Future robots could see more human-like
                qualities, take on more complex task, andd maybe even dance!
                Hold gpRobots in your wallet to receive future airdrops.
              </Text>
            </View>
          </View>
          <View style={styles.View_471_759}>
            <View style={styles.View_471_760}>
              <View style={styles.View_471_761}>
                <Text style={styles.Text_471_761}>04.</Text>
              </View>
              <View style={styles.View_471_762}>
                <Text style={styles.Text_471_762}>Into the Metaverse</Text>
              </View>
            </View>
            <View style={styles.View_471_763}>
              <Text style={styles.Text_471_763}>
                Our aim was to introduce something furturistic to the NFT space
                and the realm of collectibles to probe at possibilities. If this
                project is a success, gpRobots may enter the metaverse. We
                envision a future where your personalized gpRobot is your
                greatest companion.{" "}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_471_764}>
          <View style={styles.View_471_765}>
            <Text style={styles.Text_471_765}>The Future</Text>
          </View>
          <View style={styles.View_471_766}>
            <Text style={styles.Text_471_766}>Roadmap</Text>
          </View>
          <View style={styles.View_471_767}>
            <Text style={styles.Text_471_767}>
              The objective of our NFT collection is to combine personality and
              3D art, to create robots we want to live with. With hundreds of
              materials, color palettes and personalizations, each gpRobot is
              uniquely yours. Here’s a preview of the future for gpRobots.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_471_768}>
        <View style={styles.View_471_769}>
          <View style={styles.View_471_770}>
            <Text style={styles.Text_471_770}>Meet the team</Text>
          </View>
          <View style={styles.View_471_771}>
            <View style={styles.View_471_772}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d792/1063/ad890078a5d1925522e6ebcf9cd52ab0"
                }}
                style={styles.ImageBackground_471_773}
              />
              <View style={styles.View_471_774}>
                <Text style={styles.Text_471_774}>Macrocosm</Text>
              </View>
              <View style={styles.View_471_775}>
                <Text style={styles.Text_471_775}>Creator</Text>
              </View>
            </View>
            <View style={styles.View_471_776}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b954/18f2/23357aa474f2e97e93d03fc462c829a2"
                }}
                style={styles.ImageBackground_471_777}
              />
              <View style={styles.View_471_778}>
                <Text style={styles.Text_471_778}>Cryptofuturyst</Text>
              </View>
              <View style={styles.View_471_779}>
                <Text style={styles.Text_471_779}>Creator</Text>
              </View>
            </View>
            <View style={styles.View_471_780}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5df1/5a7b/f2ce6cdaf5436a487eec7997b1fb756a"
                }}
                style={styles.ImageBackground_471_781}
              />
              <View style={styles.View_471_782}>
                <Text style={styles.Text_471_782}>Corkery</Text>
              </View>
              <View style={styles.View_471_783}>
                <Text style={styles.Text_471_783}>Developer</Text>
              </View>
            </View>
            <View style={styles.View_471_784}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f95c/43d5/52ba992501b144e801051a7481e96964"
                }}
                style={styles.ImageBackground_471_785}
              />
              <View style={styles.View_471_786}>
                <Text style={styles.Text_471_786}>Barrows</Text>
              </View>
              <View style={styles.View_471_787}>
                <Text style={styles.Text_471_787}>Developer</Text>
              </View>
            </View>
            <View style={styles.View_471_788}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e3da/ffb3/3ac8bc8c37a39bc31d3ae2ce229c5679"
                }}
                style={styles.ImageBackground_471_789}
              />
              <View style={styles.View_471_790}>
                <Text style={styles.Text_471_790}>Flatley</Text>
              </View>
              <View style={styles.View_471_791}>
                <Text style={styles.Text_471_791}>Developer</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_471_792}>
        <View style={styles.View_471_793}>
          <View style={styles.View_471_794}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2107/a1f8/6290048b7505afbe3c5229836d774f23"
              }}
              style={styles.ImageBackground_471_795}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b41/85c4/c8e6d2e937de59039fa4d6040e98490b"
              }}
              style={styles.ImageBackground_471_796}
            />
            <View style={styles.View_471_797}>
              <View style={styles.View_471_798} />
              <View style={styles.View_471_799} />
              <View style={styles.View_471_800} />
            </View>
            <View style={styles.View_471_801}>
              <View style={styles.View_471_802} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ed0/bfe1/06661829ea318f980290ba2c1704e4e0"
                }}
                style={styles.ImageBackground_471_803}
              />
            </View>
          </View>
          <View style={styles.View_471_804}>
            <View style={styles.View_471_805}>
              <Text style={styles.Text_471_805}>
                © 2021, GENERAL PURPOSE ROBOTS
              </Text>
            </View>
            <View style={styles.View_471_806} />
            <View style={styles.View_471_807}>
              <Text style={styles.Text_471_807}>Back to top</Text>
            </View>
          </View>
          <View style={styles.View_471_808}>
            <View style={styles.View_471_809}>
              <View style={styles.View_471_810} />
              <View style={styles.View_471_811}>
                <Text style={styles.Text_471_811}>Discord Invite</Text>
              </View>
            </View>
            <View style={styles.View_471_812}>
              <View style={styles.View_471_813}>
                <View style={styles.View_I471_813_0_1969}>
                  <View style={styles.View_I471_813_0_1970}>
                    <Text style={styles.Text_I471_813_0_1970}>Discord</Text>
                  </View>
                  <View style={styles.View_I471_813_0_1971} />
                </View>
              </View>
              <View style={styles.View_471_814}>
                <Text style={styles.Text_471_814}>Join the Bots</Text>
              </View>
              <View style={styles.View_471_815}>
                <Text style={styles.Text_471_815}>
                  Welcome to the future. Join gpRobots Discord to get the latest
                  news as soon as possible.{" "}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("725%") },
  View_471_704: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("140%"),
    minHeight: hp("140%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_471_705: {
    width: wp("100%"),
    height: hp("137%"),
    minHeight: hp("137%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27%")
  },
  View_471_709: {
    width: wp("47%"),
    height: hp("64%"),
    top: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_471_710: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("69%"),
    minHeight: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_471_711: {
    width: wp("35%"),
    minWidth: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_471_711: {
    color: "rgba(76, 64, 247, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_712: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_471_712: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 45,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4000000059604645,
    textTransform: "none"
  },
  View_471_713: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("40%"),
    justifyContent: "flex-start"
  },
  Text_471_713: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_714: {
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("65%"),
    justifyContent: "flex-start"
  },
  Text_471_714: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_715: {
    width: wp("40%"),
    height: hp("140%"),
    minHeight: hp("140%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_471_716: {
    width: wp("66%"),
    height: hp("140%"),
    minHeight: hp("140%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-13%"),
    top: hp("0%"),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 0
  },
  View_471_717: {
    width: wp("55%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_471_718: {
    width: wp("25%"),
    minWidth: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_471_718: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_471_719: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_471_720: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_471_721: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_471_721: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_471_722: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_471_723: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_471_724: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_471_724: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_471_725: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_471_726: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("161%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_471_727: {
    width: wp("124%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-12%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_471_728: {
    width: wp("120%"),
    minWidth: wp("120%"),
    height: hp("68%"),
    minHeight: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_471_729: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("55%"),
    minHeight: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    resizeMode: "cover"
  },
  ImageBackground_471_730: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("68%"),
    minHeight: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_471_731: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("55%"),
    minHeight: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("7%"),
    resizeMode: "cover"
  },
  View_471_732: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("77%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_471_733: {
    width: wp("3%"),
    minWidth: wp("3%"),
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
  ImageBackground_I471_733_184_691: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_471_734: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I471_734_184_695: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_471_735: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("218%"),
    minHeight: hp("218%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("266%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_471_736: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("121%"),
    top: hp("13%")
  },
  ImageBackground_471_739: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("123%"),
    top: hp("105%")
  },
  View_471_742: {
    width: wp("7%"),
    height: hp("177%"),
    minHeight: hp("177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38%"),
    backgroundColor: "rgba(27, 27, 135, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 0
  },
  View_471_743: {
    width: wp("78%"),
    height: hp("169%"),
    minHeight: hp("169%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("41%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_471_744: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 244, 244, 0.801190972328186)"
  },
  View_471_745: {
    width: wp("53%"),
    minWidth: wp("53%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_471_746: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_471_746: {
    color: "rgba(76, 64, 247, 1)",
    fontSize: 26,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.15000000596046448,
    textTransform: "none"
  },
  View_471_747: {
    width: wp("48%"),
    minWidth: wp("48%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_471_747: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 34,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.10000000149011612,
    textTransform: "none"
  },
  View_471_748: {
    width: wp("71%"),
    minWidth: wp("71%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_471_748: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_749: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("48%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_471_750: {
    width: wp("53%"),
    minWidth: wp("53%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_471_751: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_471_751: {
    color: "rgba(76, 64, 247, 1)",
    fontSize: 26,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.15000000596046448,
    textTransform: "none"
  },
  View_471_752: {
    width: wp("48%"),
    minWidth: wp("48%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_471_752: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 34,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.10000000149011612,
    textTransform: "none"
  },
  View_471_753: {
    width: wp("71%"),
    minWidth: wp("71%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_471_753: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_754: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("44%"),
    minHeight: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("87%"),
    backgroundColor: "rgba(244, 244, 244, 0.801190972328186)"
  },
  View_471_755: {
    width: wp("53%"),
    minWidth: wp("53%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_471_756: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_471_756: {
    color: "rgba(76, 64, 247, 1)",
    fontSize: 26,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.15000000596046448,
    textTransform: "none"
  },
  View_471_757: {
    width: wp("48%"),
    minWidth: wp("48%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_471_757: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 34,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.10000000149011612,
    textTransform: "none"
  },
  View_471_758: {
    width: wp("71%"),
    minWidth: wp("71%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_471_758: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_759: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("44%"),
    minHeight: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("131%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_471_760: {
    width: wp("53%"),
    minWidth: wp("53%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_471_761: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_471_761: {
    color: "rgba(76, 64, 247, 1)",
    fontSize: 26,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.15000000596046448,
    textTransform: "none"
  },
  View_471_762: {
    width: wp("48%"),
    minWidth: wp("48%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_471_762: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 34,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.10000000149011612,
    textTransform: "none"
  },
  View_471_763: {
    width: wp("71%"),
    minWidth: wp("71%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_471_763: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_764: {
    width: wp("72%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_471_765: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_471_765: {
    color: "rgba(76, 64, 247, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_766: {
    width: wp("48%"),
    minWidth: wp("48%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_471_766: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 45,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.4000000059604645,
    textTransform: "none"
  },
  View_471_767: {
    width: wp("72%"),
    minWidth: wp("72%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_471_767: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_768: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("37%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("504%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_471_769: {
    width: wp("97%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_471_770: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_471_770: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_771: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_471_772: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_471_773: {
    width: wp("11%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_471_774: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_471_774: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_775: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_471_775: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_776: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_471_777: {
    width: wp("11%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_471_778: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_471_778: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_779: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_471_779: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_780: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_471_781: {
    width: wp("11%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_471_782: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_471_782: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_783: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_471_783: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_784: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_471_785: {
    width: wp("11%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_471_786: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_471_786: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_787: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_471_787: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_788: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_471_789: {
    width: wp("11%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_471_790: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("18%"),
    justifyContent: "center"
  },
  Text_471_790: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_791: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_471_791: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_792: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("164%"),
    minHeight: hp("164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("561%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_471_793: {
    width: wp("167%"),
    minWidth: wp("167%"),
    height: hp("174%"),
    minHeight: hp("174%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-33%"),
    top: hp("-10%")
  },
  View_471_794: {
    width: wp("167%"),
    minWidth: wp("167%"),
    height: hp("174%"),
    minHeight: hp("174%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_471_795: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("102%"),
    minHeight: hp("102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("10%")
  },
  ImageBackground_471_796: {
    width: wp("167%"),
    height: hp("174%"),
    minHeight: hp("174%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_471_797: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("130%"),
    minHeight: hp("130%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("10%")
  },
  View_471_798: {
    flexGrow: 1,
    width: wp("60%"),
    height: hp("92%"),
    minHeight: hp("92%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("38%"),
    backgroundColor: "rgba(27, 27, 135, 1)"
  },
  View_471_799: {
    flexGrow: 1,
    width: wp("72%"),
    height: hp("92%"),
    minHeight: hp("92%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("37%"),
    backgroundColor: "rgba(32, 54, 150, 1)"
  },
  View_471_800: {
    flexGrow: 1,
    width: wp("90%"),
    height: hp("127%"),
    minHeight: hp("127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_471_801: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("127%"),
    minHeight: hp("127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("10%")
  },
  View_471_802: {
    width: wp("90%"),
    height: hp("127%"),
    minHeight: hp("127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_471_803: {
    width: wp("90%"),
    height: hp("127%"),
    minHeight: hp("127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_471_804: {
    width: wp("92%"),
    height: hp("9%"),
    top: hp("153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_471_805: {
    width: wp("32%"),
    minWidth: wp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_471_805: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_806: {
    width: wp("92%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)"
  },
  View_471_807: {
    width: wp("11%"),
    minWidth: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_471_807: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_808: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("50%")
  },
  View_471_809: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("43%")
  },
  View_471_810: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(76, 64, 247, 1)"
  },
  View_471_811: {
    width: wp("11%"),
    minWidth: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_471_811: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_812: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_471_813: {
    width: wp("21%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I471_813_0_1969: {
    flexGrow: 1,
    width: wp("21%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I471_813_0_1970: {
    width: wp("7%"),
    minWidth: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I471_813_0_1970: {
    color: "rgba(76, 64, 247, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I471_813_0_1971: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(76, 64, 247, 1)"
  },
  View_471_814: {
    width: wp("42%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_471_814: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 45,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4000000059604645,
    textTransform: "none"
  },
  View_471_815: {
    width: wp("36%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26%"),
    justifyContent: "flex-start"
  },
  Text_471_815: {
    color: "rgba(107, 107, 107, 1)",
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
