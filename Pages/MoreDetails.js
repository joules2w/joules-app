// import React from "react";
// import { View, StyleSheet, Text, TouchableOpacity, ImageBackground, Dimensions, ScrollView } from 'react-native';

// import Header from "./Header";
// import Footer from "./Footer";

// const MoreDetails = () => {
//     return (
//         <View style={styles.container}>
//             <ScrollView>
//             <Header />

//             <ImageBackground style={styles.background} source={require('./Images/background.png')}>
//                 <View style={{ flexDirection : 'row', width : '55%', justifyContent : 'space-between', marginRight : '8%'}}>
//                     <View style={{ flexDirection : 'column'}}>
//                 <Text style={styles.texthead01}>Interview Panel For Interactive Developer</Text>
//                 <Text style={styles.text}>Job created on 28th September 2015</Text>
//                 <Text style={styles.texthead02}>₹ 4000 per panel member</Text>
//                 </View>
//                 <TouchableOpacity style={styles.button}>
//                     <Text style={styles.text}>Assign as Panel Member</Text>
//                 </TouchableOpacity>
//                 </View>
//             </ImageBackground>

//             <Text style={styles.texthead}>Job Description</Text>
//             <Text style={styles.descriptiontext}>Interactive developer</Text>
//             <View style={styles.line} />
//             <View style={{ flexDirection : 'row', width : '75%', justifyContent : 'space-between', marginLeft : '7%', marginRight : '8%' }}>
//                 <View style={{ flexDirection : 'column' }}>
//             <Text style={styles.texthead}>Eligibility</Text>
//             <Text style={styles.descriptiontext}>Interactive developer</Text>
//             </View>
//             <View style={styles.verticleLine}></View>
//             <View style = {{ flexDirection : 'column' }}>
//                 <Text style={styles.texthead}>Skills</Text>
//                 <View style={{ flexDirection : 'row', width : '60%', justifyContent : 'space-around', marginLeft : '5%', marginRight : '5%' }}>
//                     <Text style={styles.skilltext}>JavaScript</Text>
//                     <Text style={styles.skilltext}>node.js</Text>
//                 </View>
//             </View>
//             </View>
//             <Footer />
//             </ScrollView>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container : {
//         flex : 1,
//         backgroundColor : '#fff',
//     },
//     background : {
//         height : 150,
//         width : Dimensions.get('window').width,
//         opacity : 0.5,
//     },
//     texthead01 : {
//         color : 'black',
//         fontSize : 22,
//         textAlign : 'left',
//         marginLeft : '8%',
//         marginTop : 10,
//     },
//     texthead02 : {
//         color : 'black',
//         fontSize : 18,
//         textAlign : 'left',
//         marginLeft : '8%',
//         marginRight : '8%',
//     },
//     text : {
//         color : 'black',
//         marginLeft : '8%',
//     },
//     button : {
//         backgroundColor : '#5f9ea0',
//         alignSelf : 'center',
//         marginRight : '8%',
//         borderRadius : 5,
//         height : '15%'
//     },
//     texthead : {
//         color : 'black',
//         fontSize : 20,
//         marginLeft : '10%',
//         marginTop : '10%',
//         marginRight : '10%'
//     },
//     descriptiontext : {
//         color : 'black',
//         fontSize : 15,
//         marginLeft : '10%',
//         marginRight : '10%',
//         marginTop : '2%',
//     },
//     line : {
//         borderBottomColor : 'black',
//         borderBottomWidth : 1,
//         marginLeft : '10%',
//         marginRight : '10%',
//         marginTop : '5%',
//         marginBottom : '5%'
//     },
//     verticleLine: {
//         height: '90%',
//         width: 1,
//         backgroundColor: '#909090',
//       },
//       skilltext : {
//         color : 'black',
//         backgroundColor : '#5f9ea0',
//         borderRadius : 5,
//         marginBottom : '15%'
//       }
// })

// export default MoreDetails;


import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground, Dimensions, ScrollView } from 'react-native';

import Header from "./Header";
import Footer from "./Footer";
import AssignPanelMember from './AssignPanelMember';

const MoreDetails = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />

        <ImageBackground style={styles.background} source={require('./Images/background.png')}>
          <View style={{ flexDirection: 'row', marginRight: '5%' }}>
            <View style={{ flex: 0.7 }}>
              <Text style={styles.texthead01}>Interview Panel For Interactive Developer</Text>
            </View>
            <View style={{ flex: 0.3 }}>
              <AssignPanelMember />
            </View>
          </View>
          <View style={{ flexDirection: 'column' }}>
            <Text style={styles.text}>Job created on 28th September 2015</Text>
            <Text style={styles.texthead02}>₹ 4000 per panel member</Text>
          </View>
        </ImageBackground>

        <Text style={styles.texthead}>Job Description</Text>
        <Text style={styles.descriptiontext}>Interactive developer</Text>
        <View style={styles.line} />
        <View style={{ flexDirection: 'row', width: '60%', justifyContent: 'space-between', marginLeft: '7%', marginRight: '8%' }}>
          <View style={{ flexDirection: 'column' }}>
            <Text style={styles.texthead}>Eligibility</Text>
            <Text style={styles.descriptiontext}>Interactive developer</Text>
          </View>
          <View style={styles.verticleLine}></View>
          <View style={{ flexDirection: 'column' }}>
            <Text style={styles.texthead}>Skills</Text>
            <View style={{ flexDirection: 'row', width: '60%', justifyContent: 'space-between' ,marginRight:10}}>
              <Text style={styles.skilltext}>JavaScript</Text>
              <Text style={styles.skilltext1}>node.js</Text>
            </View>
          </View>
        </View>
        <Footer />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  background: {
    height: 150,
    width: Dimensions.get('window').width,
    opacity: 0.5,
  },
  texthead01: {
    color: 'black',
    fontSize: 15,
    textAlign: 'left',
    marginLeft: '6%',
    marginTop: 10,
  },
  texthead02: {
    color: 'black',
    fontSize: 15,
    textAlign: 'left',
    marginLeft: '6%',
    // marginRight: '6%',
  },
  text: {
    color: 'black',
    marginLeft: '6%',
  },
  button: {
    backgroundColor: '#5f9ea0',
    alignSelf: 'center',
    marginRight: '8%',
    borderRadius: 5,
    height: '15%'
  },
  texthead: {
    color: 'black',
    fontSize: 20,
    marginLeft: '6%',
    marginTop: '10%',
    // marginRight : '10%'
  },
  descriptiontext: {
    color: 'black',
    // fontSize : 15,
    marginLeft: '6%',
    // marginRight : '10%',
    marginTop: '2%',
  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginLeft: '6%',
   marginRight: '10%',
    marginTop: '5%',
    marginBottom: '5%'
  },
  verticleLine: {
    height: '90%',
    width: 1,
    backgroundColor: '#909090',
    marginRight: 10,
  },
  skilltext: {
    color: 'black',
    backgroundColor: '#5f9ea0',
    borderRadius: 7.8,
    marginBottom: '15%',
    // justifyContent:'space-between',
    paddingRight:10,
    textAlign:'center'
  },
  skilltext1: {
    color: 'black',
    backgroundColor: '#5f9ea0',
    borderRadius: 7.8,
    marginBottom: '15%',
    // justifyContent:'space-between',
    paddingRight:8,

    // textAlign:'center'
  }
});

export default MoreDetails;
