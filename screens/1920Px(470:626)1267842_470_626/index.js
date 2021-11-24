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
      <View style={styles.View_471_825} />
      <View style={styles.View_470_627}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07fd/7019/c0b537702689afd99b03c38fc6307ed3"
          }}
          style={styles.ImageBackground_470_628}
        />
        <View style={styles.View_470_632}>
          <View style={styles.View_470_633}>
            <View style={styles.View_470_634}>
              <Text style={styles.Text_470_634}>NFT Collection</Text>
            </View>
            <View style={styles.View_470_635}>
              <Text style={styles.Text_470_635}>
                8,888 General Purpose Robots need Humans
              </Text>
            </View>
            <View style={styles.View_470_636}>
              <Text style={styles.Text_470_636}>
                General Purpose Robots is an NFT collection of general purpose,
                bi-pedal, humanoid robots. With robotics and AI technology
                developing at pace, robots will no longer be confined to science
                fiction, they’ll soon become a real part of our lives.{" "}
              </Text>
            </View>
            <View style={styles.View_470_637}>
              <Text style={styles.Text_470_637}>Coming Soon!</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_470_638}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7234/5cfa/33edef6d18648f887aff29a221d2ed26"
            }}
            style={styles.ImageBackground_470_639}
          />
        </View>
        <View style={styles.View_470_640}>
          <View style={styles.View_470_641}>
            <Text style={styles.Text_470_641}>GENERAL PURPOSE ROBOTS</Text>
          </View>
          <View style={styles.View_470_642}>
            <View style={styles.View_470_643}>
              <View style={styles.View_470_644}>
                <Text style={styles.Text_470_644}>Twitter</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94fd/7e24/6aa49283879bb2de3eeb7956e49a5b25"
                }}
                style={styles.ImageBackground_470_645}
              />
            </View>
            <View style={styles.View_470_646}>
              <View style={styles.View_470_647}>
                <Text style={styles.Text_470_647}>Discord</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc77/ac50/17420a9456d2bd76329f6da154b8d517"
                }}
                style={styles.ImageBackground_470_648}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_470_649}>
        <View style={styles.View_470_650}>
          <View style={styles.View_470_651}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7deb/651b/6e5c84c03789204a33da0a53ea44f1f0"
              }}
              style={styles.ImageBackground_470_652}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f488/55aa/acfce04cab9834b50000a7164a801d1e"
              }}
              style={styles.ImageBackground_470_653}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acce/8c38/55e72f3ac9410bc68649155128fb4ed4"
              }}
              style={styles.ImageBackground_470_654}
            />
          </View>
          <View style={styles.View_470_655}>
            <View style={styles.View_470_656}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98d5/f4ac/c880eddcfdba5aaeeb59466a197d3905"
                }}
                style={styles.ImageBackground_I470_656_184_691}
              />
            </View>
            <View style={styles.View_470_657}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d47/0a70/d45d2a760047abe8ae50ac4077c7005d"
                }}
                style={styles.ImageBackground_I470_657_184_695}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_470_658}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ed5/0863/b9809d046324ed456f50ca62dae1d417"
          }}
          style={styles.ImageBackground_470_659}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ed5/0863/b9809d046324ed456f50ca62dae1d417"
          }}
          style={styles.ImageBackground_470_662}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/219f/732b/47aa3b85318678521918eb161aefe044"
          }}
          style={styles.ImageBackground_470_665}
        />
        <View style={styles.View_470_666}>
          <View style={styles.View_470_667}>
            <View style={styles.View_470_668}>
              <View style={styles.View_470_669}>
                <Text style={styles.Text_470_669}>01.</Text>
              </View>
              <View style={styles.View_470_670}>
                <Text style={styles.Text_470_670}>For the Humans</Text>
              </View>
            </View>
            <View style={styles.View_470_671}>
              <Text style={styles.Text_470_671}>
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
          <View style={styles.View_470_672}>
            <View style={styles.View_470_673}>
              <View style={styles.View_470_674}>
                <Text style={styles.Text_470_674}>02.</Text>
              </View>
              <View style={styles.View_470_675}>
                <Text style={styles.Text_470_675}>Better together</Text>
              </View>
            </View>
            <View style={styles.View_470_676}>
              <Text style={styles.Text_470_676}>
                When 100% of the gpRobots sell out we will establish a community
                wallet with 15 ETH, list on Rarity Tools, set up a member
                exclusive merchandise store, and do giveaways for gpRobot
                holders. Join, follow, share for a chance to win a free gpRobot.{" "}
              </Text>
            </View>
          </View>
          <View style={styles.View_470_677}>
            <View style={styles.View_470_678}>
              <View style={styles.View_470_679}>
                <Text style={styles.Text_470_679}>03.</Text>
              </View>
              <View style={styles.View_470_680}>
                <Text style={styles.Text_470_680}>Robots need upgrades</Text>
              </View>
            </View>
            <View style={styles.View_470_681}>
              <Text style={styles.Text_470_681}>
                Just like the latest iPhone, robots need upgrades too. We will
                collaborate with new artists to explore new advancements in
                personal robotics. Future robots could see more human-like
                qualities, take on more complex tasks, and maybe even dance!
                Hold gpRobots in your wallet to receive future airdrops.
              </Text>
            </View>
          </View>
          <View style={styles.View_470_682}>
            <View style={styles.View_470_683}>
              <View style={styles.View_470_684}>
                <Text style={styles.Text_470_684}>04.</Text>
              </View>
              <View style={styles.View_470_685}>
                <Text style={styles.Text_470_685}>Into the Metaverse</Text>
              </View>
            </View>
            <View style={styles.View_470_686}>
              <Text style={styles.Text_470_686}>
                Our aim was to introduce something futuristic to the NFT space
                and the realm of collectibles to probe at possibilities. If this
                project is a success, gpRobots may enter the metaverse. We
                envision a future where your personalized gpRobot is your
                greatest companion.{" "}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_470_687}>
          <View style={styles.View_470_688}>
            <Text style={styles.Text_470_688}>The Future</Text>
          </View>
          <View style={styles.View_470_689}>
            <Text style={styles.Text_470_689}>Roadmap</Text>
          </View>
          <View style={styles.View_470_690}>
            <Text style={styles.Text_470_690}>
              The objective of our NFT collection is to combine personality and
              3D art, to create robots we want to live with. With hundreds of
              materials, color palettes and personalizations, each gpRobot is
              uniquely yours. Here’s a preview of the future for gpRobots.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_470_691}>
        <View style={styles.View_470_692}>
          <View style={styles.View_470_693}>
            <Text style={styles.Text_470_693}>Meet the team</Text>
          </View>
          <View style={styles.View_470_694}>
            <View style={styles.View_470_695}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d792/1063/ad890078a5d1925522e6ebcf9cd52ab0"
                }}
                style={styles.ImageBackground_470_696}
              />
              <View style={styles.View_470_697}>
                <Text style={styles.Text_470_697}>Macrocosm</Text>
              </View>
              <View style={styles.View_470_698}>
                <Text style={styles.Text_470_698}>Creator</Text>
              </View>
            </View>
            <View style={styles.View_470_699}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b954/18f2/23357aa474f2e97e93d03fc462c829a2"
                }}
                style={styles.ImageBackground_470_700}
              />
              <View style={styles.View_470_701}>
                <Text style={styles.Text_470_701}>Cryptofuturyst</Text>
              </View>
              <View style={styles.View_470_702}>
                <Text style={styles.Text_470_702}>Creator</Text>
              </View>
            </View>
            <View style={styles.View_470_703}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5df1/5a7b/f2ce6cdaf5436a487eec7997b1fb756a"
                }}
                style={styles.ImageBackground_470_704}
              />
              <View style={styles.View_470_705}>
                <Text style={styles.Text_470_705}>Corkery</Text>
              </View>
              <View style={styles.View_470_706}>
                <Text style={styles.Text_470_706}>Developer</Text>
              </View>
            </View>
            <View style={styles.View_470_707}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f95c/43d5/52ba992501b144e801051a7481e96964"
                }}
                style={styles.ImageBackground_470_708}
              />
              <View style={styles.View_470_709}>
                <Text style={styles.Text_470_709}>Barrows</Text>
              </View>
              <View style={styles.View_470_710}>
                <Text style={styles.Text_470_710}>Developer</Text>
              </View>
            </View>
            <View style={styles.View_470_711}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e3da/ffb3/3ac8bc8c37a39bc31d3ae2ce229c5679"
                }}
                style={styles.ImageBackground_470_712}
              />
              <View style={styles.View_470_713}>
                <Text style={styles.Text_470_713}>Flatley</Text>
              </View>
              <View style={styles.View_470_714}>
                <Text style={styles.Text_470_714}>Developer</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_470_715}>
        <View style={styles.View_470_716}>
          <View style={styles.View_470_717}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2107/a1f8/6290048b7505afbe3c5229836d774f23"
              }}
              style={styles.ImageBackground_470_718}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b41/85c4/c8e6d2e937de59039fa4d6040e98490b"
              }}
              style={styles.ImageBackground_470_719}
            />
            <View style={styles.View_470_720}>
              <View style={styles.View_470_721} />
              <View style={styles.View_470_722} />
              <View style={styles.View_470_723} />
            </View>
            <View style={styles.View_470_724}>
              <View style={styles.View_470_725} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4967/34d2/ac4caf513da1247ee4b145cc420fce88"
                }}
                style={styles.ImageBackground_470_726}
              />
            </View>
          </View>
          <View style={styles.View_470_727}>
            <View style={styles.View_470_728}>
              <Text style={styles.Text_470_728}>
                © 2021, GENERAL PURPOSE ROBOTS
              </Text>
            </View>
            <View style={styles.View_470_729} />
            <View style={styles.View_470_730}>
              <Text style={styles.Text_470_730}>Back to top</Text>
            </View>
          </View>
          <View style={styles.View_470_731}>
            <View style={styles.View_470_732}>
              <View style={styles.View_470_733} />
              <View style={styles.View_470_734}>
                <Text style={styles.Text_470_734}>Discord Invite</Text>
              </View>
            </View>
            <View style={styles.View_470_735}>
              <View style={styles.View_470_736}>
                <View style={styles.View_I470_736_0_1969}>
                  <View style={styles.View_I470_736_0_1970}>
                    <Text style={styles.Text_I470_736_0_1970}>Discord</Text>
                  </View>
                  <View style={styles.View_I470_736_0_1971} />
                </View>
              </View>
              <View style={styles.View_470_737}>
                <Text style={styles.Text_470_737}>Join the Bots</Text>
              </View>
              <View style={styles.View_470_738}>
                <Text style={styles.Text_470_738}>
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
  View_2: { height: hp("745%") },
  View_471_825: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("744%"),
    minHeight: hp("744%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_470_627: {
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
  ImageBackground_470_628: {
    width: wp("100%"),
    height: hp("137%"),
    minHeight: hp("137%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27%")
  },
  View_470_632: {
    width: wp("47%"),
    height: hp("64%"),
    top: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_470_633: {
    flexGrow: 1,
    width: wp("47%"),
    height: hp("54%"),
    minHeight: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_470_634: {
    width: wp("21%"),
    minWidth: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_470_634: {
    color: "rgba(76, 64, 247, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_470_635: {
    width: wp("47%"),
    minWidth: wp("47%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_470_635: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 58,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_470_636: {
    width: wp("47%"),
    minWidth: wp("47%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("34%"),
    justifyContent: "flex-start"
  },
  Text_470_636: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_470_637: {
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("50%"),
    justifyContent: "flex-start"
  },
  Text_470_637: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_470_638: {
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
  ImageBackground_470_639: {
    width: wp("40%"),
    height: hp("140%"),
    minHeight: hp("140%"),
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
  View_470_640: {
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
  View_470_641: {
    width: wp("15%"),
    minWidth: wp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_470_641: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_470_642: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_470_643: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_470_644: {
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_470_644: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_470_645: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_470_646: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_470_647: {
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_470_647: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_470_648: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_470_649: {
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
  View_470_650: {
    width: wp("74%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_470_651: {
    width: wp("74%"),
    minWidth: wp("74%"),
    height: hp("68%"),
    minHeight: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_470_652: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("55%"),
    minHeight: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    resizeMode: "cover"
  },
  ImageBackground_470_653: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("68%"),
    minHeight: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_470_654: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("55%"),
    minHeight: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("7%"),
    resizeMode: "cover"
  },
  View_470_655: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("79%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_470_656: {
    width: wp("2%"),
    minWidth: wp("2%"),
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
  ImageBackground_I470_656_184_691: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_470_657: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I470_657_184_695: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_470_658: {
    width: wp("100%"),
    height: hp("230%"),
    minHeight: hp("230%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("266%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_470_659: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("13%")
  },
  ImageBackground_470_662: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("105%")
  },
  ImageBackground_470_665: {
    width: wp("8%"),
    height: hp("199%"),
    minHeight: hp("199%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31%")
  },
  View_470_666: {
    width: wp("64%"),
    height: hp("184%"),
    minHeight: hp("184%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("46%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_470_667: {
    width: wp("64%"),
    minWidth: wp("64%"),
    height: hp("49%"),
    minHeight: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 244, 244, 0.801190972328186)"
  },
  View_470_668: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_470_669: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_470_669: {
    color: "rgba(76, 64, 247, 1)",
    fontSize: 26,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.15000000596046448,
    textTransform: "none"
  },
  View_470_670: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_470_670: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 34,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.10000000149011612,
    textTransform: "none"
  },
  View_470_671: {
    width: wp("56%"),
    minWidth: wp("56%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("21%"),
    justifyContent: "flex-start"
  },
  Text_470_671: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_470_672: {
    width: wp("64%"),
    minWidth: wp("64%"),
    height: hp("45%"),
    minHeight: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("49%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_470_673: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_470_674: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_470_674: {
    color: "rgba(76, 64, 247, 1)",
    fontSize: 26,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.15000000596046448,
    textTransform: "none"
  },
  View_470_675: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_470_675: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 34,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.10000000149011612,
    textTransform: "none"
  },
  View_470_676: {
    width: wp("56%"),
    minWidth: wp("56%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("21%"),
    justifyContent: "flex-start"
  },
  Text_470_676: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_470_677: {
    width: wp("64%"),
    minWidth: wp("64%"),
    height: hp("45%"),
    minHeight: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("94%"),
    backgroundColor: "rgba(244, 244, 244, 0.801190972328186)"
  },
  View_470_678: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_470_679: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_470_679: {
    color: "rgba(76, 64, 247, 1)",
    fontSize: 26,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.15000000596046448,
    textTransform: "none"
  },
  View_470_680: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_470_680: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 34,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.10000000149011612,
    textTransform: "none"
  },
  View_470_681: {
    width: wp("56%"),
    minWidth: wp("56%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("21%"),
    justifyContent: "flex-start"
  },
  Text_470_681: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_470_682: {
    width: wp("64%"),
    minWidth: wp("64%"),
    height: hp("45%"),
    minHeight: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("139%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_470_683: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_470_684: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_470_684: {
    color: "rgba(76, 64, 247, 1)",
    fontSize: 26,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.15000000596046448,
    textTransform: "none"
  },
  View_470_685: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_470_685: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 34,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.10000000149011612,
    textTransform: "none"
  },
  View_470_686: {
    width: wp("56%"),
    minWidth: wp("56%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("21%"),
    justifyContent: "flex-start"
  },
  Text_470_686: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_470_687: {
    width: wp("43%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_470_688: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_470_688: {
    color: "rgba(76, 64, 247, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_470_689: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_470_689: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 45,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.4000000059604645,
    textTransform: "none"
  },
  View_470_690: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_470_690: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_470_691: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("37%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("513%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_470_692: {
    width: wp("58%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_470_693: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_470_693: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_470_694: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_470_695: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_470_696: {
    width: wp("7%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_470_697: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_470_697: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_470_698: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_470_698: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_470_699: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_470_700: {
    width: wp("7%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_470_701: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_470_701: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_470_702: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_470_702: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_470_703: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_470_704: {
    width: wp("7%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_470_705: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_470_705: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_470_706: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_470_706: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_470_707: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_470_708: {
    width: wp("7%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_470_709: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_470_709: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_470_710: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_470_710: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_470_711: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_470_712: {
    width: wp("7%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_470_713: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("18%"),
    justifyContent: "center"
  },
  Text_470_713: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_470_714: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_470_714: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_470_715: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("174%"),
    minHeight: hp("174%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("570%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_470_716: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("174%"),
    minHeight: hp("174%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_470_717: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("174%"),
    minHeight: hp("174%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_470_718: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("102%"),
    minHeight: hp("102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%")
  },
  ImageBackground_470_719: {
    width: wp("100%"),
    height: hp("174%"),
    minHeight: hp("174%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_470_720: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("130%"),
    minHeight: hp("130%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("10%")
  },
  View_470_721: {
    flexGrow: 1,
    width: wp("72%"),
    height: hp("92%"),
    minHeight: hp("92%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("38%"),
    backgroundColor: "rgba(27, 27, 135, 1)"
  },
  View_470_722: {
    flexGrow: 1,
    width: wp("78%"),
    height: hp("92%"),
    minHeight: hp("92%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("37%"),
    backgroundColor: "rgba(32, 54, 150, 1)"
  },
  View_470_723: {
    flexGrow: 1,
    width: wp("81%"),
    height: hp("127%"),
    minHeight: hp("127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_470_724: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("127%"),
    minHeight: hp("127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("10%")
  },
  View_470_725: {
    width: wp("81%"),
    height: hp("127%"),
    minHeight: hp("127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_470_726: {
    width: wp("81%"),
    height: hp("127%"),
    minHeight: hp("127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_470_727: {
    width: wp("92%"),
    height: hp("9%"),
    top: hp("153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_470_728: {
    width: wp("19%"),
    minWidth: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_470_728: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_470_729: {
    width: wp("92%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)"
  },
  View_470_730: {
    width: wp("6%"),
    minWidth: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_470_730: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_470_731: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("50%")
  },
  View_470_732: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("43%")
  },
  View_470_733: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(76, 64, 247, 1)"
  },
  View_470_734: {
    width: wp("6%"),
    minWidth: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_470_734: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_470_735: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_470_736: {
    width: wp("13%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I470_736_0_1969: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I470_736_0_1970: {
    width: wp("4%"),
    minWidth: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I470_736_0_1970: {
    color: "rgba(76, 64, 247, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I470_736_0_1971: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(76, 64, 247, 1)"
  },
  View_470_737: {
    width: wp("25%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_470_737: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 58,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_470_738: {
    width: wp("25%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26%"),
    justifyContent: "flex-start"
  },
  Text_470_738: {
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
