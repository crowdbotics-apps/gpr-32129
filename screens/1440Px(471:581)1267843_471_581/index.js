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
      <View style={styles.View_471_582}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d228/6682/8911fe89edc49af7cbce478f62f4dcd9"
          }}
          style={styles.ImageBackground_471_583}
        />
        <View style={styles.View_471_587}>
          <View style={styles.View_471_588}>
            <View style={styles.View_471_589}>
              <Text style={styles.Text_471_589}>NFT Collection</Text>
            </View>
            <View style={styles.View_471_590}>
              <Text style={styles.Text_471_590}>
                8,888 General Purpose Robots need Humans
              </Text>
            </View>
            <View style={styles.View_471_591}>
              <Text style={styles.Text_471_591}>
                General Purpose Robots is an NFT collection of general purpose,
                bi-pedal, humanoid robots. With robotics and AI technology
                developing at pace, robots will no longer be confined to science
                fiction, they’ll soon become a real part of our lives.{" "}
              </Text>
            </View>
            <View style={styles.View_471_592}>
              <Text style={styles.Text_471_592}>Coming Soon!</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_471_593}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7234/5cfa/33edef6d18648f887aff29a221d2ed26"
            }}
            style={styles.ImageBackground_471_594}
          />
        </View>
        <View style={styles.View_471_595}>
          <View style={styles.View_471_596}>
            <Text style={styles.Text_471_596}>GENERAL PURPOSE ROBOTS</Text>
          </View>
          <View style={styles.View_471_597}>
            <View style={styles.View_471_598}>
              <View style={styles.View_471_599}>
                <Text style={styles.Text_471_599}>Twitter</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94fd/7e24/6aa49283879bb2de3eeb7956e49a5b25"
                }}
                style={styles.ImageBackground_471_600}
              />
            </View>
            <View style={styles.View_471_601}>
              <View style={styles.View_471_602}>
                <Text style={styles.Text_471_602}>Discord</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc77/ac50/17420a9456d2bd76329f6da154b8d517"
                }}
                style={styles.ImageBackground_471_603}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_471_604}>
        <View style={styles.View_471_605}>
          <View style={styles.View_471_606}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7deb/651b/6e5c84c03789204a33da0a53ea44f1f0"
              }}
              style={styles.ImageBackground_471_607}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f488/55aa/acfce04cab9834b50000a7164a801d1e"
              }}
              style={styles.ImageBackground_471_608}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acce/8c38/55e72f3ac9410bc68649155128fb4ed4"
              }}
              style={styles.ImageBackground_471_609}
            />
          </View>
          <View style={styles.View_471_610}>
            <View style={styles.View_471_611}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98d5/f4ac/c880eddcfdba5aaeeb59466a197d3905"
                }}
                style={styles.ImageBackground_I471_611_184_691}
              />
            </View>
            <View style={styles.View_471_612}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d47/0a70/d45d2a760047abe8ae50ac4077c7005d"
                }}
                style={styles.ImageBackground_I471_612_184_695}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_471_613}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ed5/0863/b9809d046324ed456f50ca62dae1d417"
          }}
          style={styles.ImageBackground_471_614}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ed5/0863/b9809d046324ed456f50ca62dae1d417"
          }}
          style={styles.ImageBackground_471_617}
        />
        <View style={styles.View_471_620} />
        <View style={styles.View_471_621}>
          <View style={styles.View_471_622}>
            <View style={styles.View_471_623}>
              <View style={styles.View_471_624}>
                <Text style={styles.Text_471_624}>01.</Text>
              </View>
              <View style={styles.View_471_625}>
                <Text style={styles.Text_471_625}>For the Humans</Text>
              </View>
            </View>
            <View style={styles.View_471_626}>
              <Text style={styles.Text_471_626}>
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
          <View style={styles.View_471_627}>
            <View style={styles.View_471_628}>
              <View style={styles.View_471_629}>
                <Text style={styles.Text_471_629}>02.</Text>
              </View>
              <View style={styles.View_471_630}>
                <Text style={styles.Text_471_630}>Better together</Text>
              </View>
            </View>
            <View style={styles.View_471_631}>
              <Text style={styles.Text_471_631}>
                When 100% of the gpRobots sell out we will establish a community
                wallet with 15 ETH, list on Rarity Tools, set up a member
                exclusive merchandise store, and do giveaways for gpRobot
                holders. Join, follow, share for a chance to win a free gpRobot.{" "}
              </Text>
            </View>
          </View>
          <View style={styles.View_471_632}>
            <View style={styles.View_471_633}>
              <View style={styles.View_471_634}>
                <Text style={styles.Text_471_634}>03.</Text>
              </View>
              <View style={styles.View_471_635}>
                <Text style={styles.Text_471_635}>Robots need upgrades</Text>
              </View>
            </View>
            <View style={styles.View_471_636}>
              <Text style={styles.Text_471_636}>
                Just like the latest iPhone, robots need upgrades too. We will
                collaborate with new artists to explore new advancements in
                personal robotics. Future robots could see more human-like
                qualities, take on more complex tasks, and maybe even dance!
                Hold gpRobots in your wallet to receive future airdrops.
              </Text>
            </View>
          </View>
          <View style={styles.View_471_637}>
            <View style={styles.View_471_638}>
              <View style={styles.View_471_639}>
                <Text style={styles.Text_471_639}>04.</Text>
              </View>
              <View style={styles.View_471_640}>
                <Text style={styles.Text_471_640}>Into the Metaverse</Text>
              </View>
            </View>
            <View style={styles.View_471_641}>
              <Text style={styles.Text_471_641}>
                Our aim was to introduce something furturistic to the NFT space
                and the realm of collectibles to probe at possibilities. If this
                project is a success, gpRobots may enter the metaverse. We
                envision a future where your personalized gpRobot is your
                greatest companion.{" "}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_471_642}>
          <View style={styles.View_471_643}>
            <Text style={styles.Text_471_643}>The Future</Text>
          </View>
          <View style={styles.View_471_644}>
            <Text style={styles.Text_471_644}>Roadmap</Text>
          </View>
          <View style={styles.View_471_645}>
            <Text style={styles.Text_471_645}>
              The objective of our NFT collection is to combine personality and
              3D art, to create robots we want to live with. With hundreds of
              materials, color palettes and personalizations, each gpRobot is
              uniquely yours. Here’s a preview of the future for gpRobots.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_471_646}>
        <View style={styles.View_471_647}>
          <View style={styles.View_471_648}>
            <Text style={styles.Text_471_648}>Meet the team</Text>
          </View>
          <View style={styles.View_471_649}>
            <View style={styles.View_471_650}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d792/1063/ad890078a5d1925522e6ebcf9cd52ab0"
                }}
                style={styles.ImageBackground_471_651}
              />
              <View style={styles.View_471_652}>
                <Text style={styles.Text_471_652}>Macrocosm</Text>
              </View>
              <View style={styles.View_471_653}>
                <Text style={styles.Text_471_653}>Creator</Text>
              </View>
            </View>
            <View style={styles.View_471_654}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b954/18f2/23357aa474f2e97e93d03fc462c829a2"
                }}
                style={styles.ImageBackground_471_655}
              />
              <View style={styles.View_471_656}>
                <Text style={styles.Text_471_656}>Cryptofuturyst</Text>
              </View>
              <View style={styles.View_471_657}>
                <Text style={styles.Text_471_657}>Creator</Text>
              </View>
            </View>
            <View style={styles.View_471_658}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5df1/5a7b/f2ce6cdaf5436a487eec7997b1fb756a"
                }}
                style={styles.ImageBackground_471_659}
              />
              <View style={styles.View_471_660}>
                <Text style={styles.Text_471_660}>Corkery</Text>
              </View>
              <View style={styles.View_471_661}>
                <Text style={styles.Text_471_661}>Developer</Text>
              </View>
            </View>
            <View style={styles.View_471_662}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f95c/43d5/52ba992501b144e801051a7481e96964"
                }}
                style={styles.ImageBackground_471_663}
              />
              <View style={styles.View_471_664}>
                <Text style={styles.Text_471_664}>Barrows</Text>
              </View>
              <View style={styles.View_471_665}>
                <Text style={styles.Text_471_665}>Developer</Text>
              </View>
            </View>
            <View style={styles.View_471_666}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e3da/ffb3/3ac8bc8c37a39bc31d3ae2ce229c5679"
                }}
                style={styles.ImageBackground_471_667}
              />
              <View style={styles.View_471_668}>
                <Text style={styles.Text_471_668}>Flatley</Text>
              </View>
              <View style={styles.View_471_669}>
                <Text style={styles.Text_471_669}>Developer</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_471_670}>
        <View style={styles.View_471_671}>
          <View style={styles.View_471_672}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2107/a1f8/6290048b7505afbe3c5229836d774f23"
              }}
              style={styles.ImageBackground_471_673}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b41/85c4/c8e6d2e937de59039fa4d6040e98490b"
              }}
              style={styles.ImageBackground_471_674}
            />
            <View style={styles.View_471_675}>
              <View style={styles.View_471_676} />
              <View style={styles.View_471_677} />
              <View style={styles.View_471_678} />
            </View>
            <View style={styles.View_471_679}>
              <View style={styles.View_471_680} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50de/e3bd/ddca685b70ed831bef5d6d0fd705a088"
                }}
                style={styles.ImageBackground_471_681}
              />
            </View>
          </View>
          <View style={styles.View_471_682}>
            <View style={styles.View_471_683}>
              <Text style={styles.Text_471_683}>
                © 2021, GENERAL PURPOSE ROBOTS
              </Text>
            </View>
            <View style={styles.View_471_684} />
            <View style={styles.View_471_685}>
              <Text style={styles.Text_471_685}>Back to top</Text>
            </View>
          </View>
          <View style={styles.View_471_686}>
            <View style={styles.View_471_687}>
              <View style={styles.View_471_688} />
              <View style={styles.View_471_689}>
                <Text style={styles.Text_471_689}>Discord Invite</Text>
              </View>
            </View>
            <View style={styles.View_471_690}>
              <View style={styles.View_471_691}>
                <View style={styles.View_I471_691_0_1969}>
                  <View style={styles.View_I471_691_0_1970}>
                    <Text style={styles.Text_I471_691_0_1970}>Discord</Text>
                  </View>
                  <View style={styles.View_I471_691_0_1971} />
                </View>
              </View>
              <View style={styles.View_471_692}>
                <Text style={styles.Text_471_692}>Join the Bots</Text>
              </View>
              <View style={styles.View_471_693}>
                <Text style={styles.Text_471_693}>
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
  View_2: { height: hp("733%") },
  View_471_582: {
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
  ImageBackground_471_583: {
    width: wp("100%"),
    height: hp("137%"),
    minHeight: hp("137%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27%")
  },
  View_471_587: {
    width: wp("47%"),
    height: hp("64%"),
    top: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_471_588: {
    flexGrow: 1,
    width: wp("47%"),
    height: hp("74%"),
    minHeight: hp("74%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_471_589: {
    width: wp("33%"),
    minWidth: wp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_471_589: {
    color: "rgba(76, 64, 247, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_590: {
    width: wp("47%"),
    minWidth: wp("47%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_471_590: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 58,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_471_591: {
    width: wp("47%"),
    minWidth: wp("47%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("45%"),
    justifyContent: "flex-start"
  },
  Text_471_591: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_592: {
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("70%"),
    justifyContent: "flex-start"
  },
  Text_471_592: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_593: {
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
  ImageBackground_471_594: {
    width: wp("64%"),
    height: hp("140%"),
    minHeight: hp("140%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-12%"),
    top: hp("0%"),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 0
  },
  View_471_595: {
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
  View_471_596: {
    width: wp("24%"),
    minWidth: wp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_471_596: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_471_597: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_471_598: {
    width: wp("8%"),
    minWidth: wp("8%"),
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
  View_471_599: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_471_599: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_471_600: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_471_601: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_471_602: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_471_602: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_471_603: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_471_604: {
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
  View_471_605: {
    width: wp("119%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-10%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_471_606: {
    width: wp("119%"),
    minWidth: wp("119%"),
    height: hp("68%"),
    minHeight: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_471_607: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("55%"),
    minHeight: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    resizeMode: "cover"
  },
  ImageBackground_471_608: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("68%"),
    minHeight: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_471_609: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("55%"),
    minHeight: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("7%"),
    resizeMode: "cover"
  },
  View_471_610: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("79%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_471_611: {
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
  ImageBackground_I471_611_184_691: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_471_612: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I471_612_184_695: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_471_613: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("231%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("266%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_471_614: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("117%"),
    top: hp("13%")
  },
  ImageBackground_471_617: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("118%"),
    top: hp("105%")
  },
  View_471_620: {
    width: wp("8%"),
    height: hp("200%"),
    minHeight: hp("200%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31%"),
    backgroundColor: "rgba(27, 27, 135, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 0
  },
  View_471_621: {
    width: wp("77%"),
    height: hp("197%"),
    minHeight: hp("197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("48%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_471_622: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("54%"),
    minHeight: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 244, 244, 0.801190972328186)"
  },
  View_471_623: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_471_624: {
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
  Text_471_624: {
    color: "rgba(76, 64, 247, 1)",
    fontSize: 26,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.15000000596046448,
    textTransform: "none"
  },
  View_471_625: {
    width: wp("46%"),
    minWidth: wp("46%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_471_625: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 34,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.10000000149011612,
    textTransform: "none"
  },
  View_471_626: {
    width: wp("64%"),
    minWidth: wp("64%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("21%"),
    justifyContent: "flex-start"
  },
  Text_471_626: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_627: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("45%"),
    minHeight: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("54%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_471_628: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_471_629: {
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
  Text_471_629: {
    color: "rgba(76, 64, 247, 1)",
    fontSize: 26,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.15000000596046448,
    textTransform: "none"
  },
  View_471_630: {
    width: wp("46%"),
    minWidth: wp("46%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_471_630: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 34,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.10000000149011612,
    textTransform: "none"
  },
  View_471_631: {
    width: wp("64%"),
    minWidth: wp("64%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("21%"),
    justifyContent: "flex-start"
  },
  Text_471_631: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_632: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("49%"),
    minHeight: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("98%"),
    backgroundColor: "rgba(244, 244, 244, 0.801190972328186)"
  },
  View_471_633: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_471_634: {
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
  Text_471_634: {
    color: "rgba(76, 64, 247, 1)",
    fontSize: 26,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.15000000596046448,
    textTransform: "none"
  },
  View_471_635: {
    width: wp("46%"),
    minWidth: wp("46%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_471_635: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 34,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.10000000149011612,
    textTransform: "none"
  },
  View_471_636: {
    width: wp("64%"),
    minWidth: wp("64%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("21%"),
    justifyContent: "flex-start"
  },
  Text_471_636: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_637: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("49%"),
    minHeight: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("148%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_471_638: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_471_639: {
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
  Text_471_639: {
    color: "rgba(76, 64, 247, 1)",
    fontSize: 26,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.15000000596046448,
    textTransform: "none"
  },
  View_471_640: {
    width: wp("46%"),
    minWidth: wp("46%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_471_640: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 34,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.10000000149011612,
    textTransform: "none"
  },
  View_471_641: {
    width: wp("64%"),
    minWidth: wp("64%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("21%"),
    justifyContent: "flex-start"
  },
  Text_471_641: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_642: {
    width: wp("69%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_471_643: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_471_643: {
    color: "rgba(76, 64, 247, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_644: {
    width: wp("46%"),
    minWidth: wp("46%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_471_644: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 45,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.4000000059604645,
    textTransform: "none"
  },
  View_471_645: {
    width: wp("69%"),
    minWidth: wp("69%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_471_645: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_646: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("513%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_471_647: {
    width: wp("93%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_471_648: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_471_648: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_649: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_471_650: {
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
  ImageBackground_471_651: {
    width: wp("11%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_471_652: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_471_652: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_653: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_471_653: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_654: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_471_655: {
    width: wp("11%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_471_656: {
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
  Text_471_656: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_657: {
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
  Text_471_657: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_658: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_471_659: {
    width: wp("11%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_471_660: {
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
  Text_471_660: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_661: {
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
  Text_471_661: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_662: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_471_663: {
    width: wp("11%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_471_664: {
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
  Text_471_664: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_665: {
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
  Text_471_665: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_666: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_471_667: {
    width: wp("11%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_471_668: {
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
  Text_471_668: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_669: {
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
  Text_471_669: {
    color: "rgba(39, 46, 53, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_670: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("164%"),
    minHeight: hp("164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("570%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_471_671: {
    width: wp("161%"),
    minWidth: wp("161%"),
    height: hp("174%"),
    minHeight: hp("174%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-30%"),
    top: hp("-10%")
  },
  View_471_672: {
    width: wp("161%"),
    minWidth: wp("161%"),
    height: hp("174%"),
    minHeight: hp("174%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_471_673: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("102%"),
    minHeight: hp("102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("10%")
  },
  ImageBackground_471_674: {
    width: wp("161%"),
    height: hp("174%"),
    minHeight: hp("174%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_471_675: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("130%"),
    minHeight: hp("130%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("10%")
  },
  View_471_676: {
    flexGrow: 1,
    width: wp("56%"),
    height: hp("92%"),
    minHeight: hp("92%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("38%"),
    backgroundColor: "rgba(27, 27, 135, 1)"
  },
  View_471_677: {
    flexGrow: 1,
    width: wp("66%"),
    height: hp("92%"),
    minHeight: hp("92%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("37%"),
    backgroundColor: "rgba(32, 54, 150, 1)"
  },
  View_471_678: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("127%"),
    minHeight: hp("127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_471_679: {
    width: wp("94%"),
    minWidth: wp("94%"),
    height: hp("127%"),
    minHeight: hp("127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("10%")
  },
  View_471_680: {
    width: wp("94%"),
    height: hp("127%"),
    minHeight: hp("127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_471_681: {
    width: wp("94%"),
    height: hp("127%"),
    minHeight: hp("127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_471_682: {
    width: wp("92%"),
    height: hp("9%"),
    top: hp("153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_471_683: {
    width: wp("31%"),
    minWidth: wp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_471_683: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_684: {
    width: wp("92%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)"
  },
  View_471_685: {
    width: wp("10%"),
    minWidth: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_471_685: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_686: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("50%")
  },
  View_471_687: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("43%")
  },
  View_471_688: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(76, 64, 247, 1)"
  },
  View_471_689: {
    width: wp("10%"),
    minWidth: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_471_689: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_471_690: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_471_691: {
    width: wp("20%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I471_691_0_1969: {
    flexGrow: 1,
    width: wp("20%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I471_691_0_1970: {
    width: wp("7%"),
    minWidth: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I471_691_0_1970: {
    color: "rgba(76, 64, 247, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I471_691_0_1971: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(76, 64, 247, 1)"
  },
  View_471_692: {
    width: wp("40%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_471_692: {
    color: "rgba(64, 64, 63, 1)",
    fontSize: 58,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_471_693: {
    width: wp("40%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26%"),
    justifyContent: "flex-start"
  },
  Text_471_693: {
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
