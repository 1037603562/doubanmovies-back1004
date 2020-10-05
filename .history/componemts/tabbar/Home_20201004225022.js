import React ,{Component}from 'react'
import {View,
        Text,
        StyleSheet,
        Image,
        TouchableHighlight
} from 'react-native'

//导入轮播图组件
import Swiper from 'react-native-swiper'



export default class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            lunbotu:[]//轮播图数组
        }
    }

    componentDidMount(){
    fetch('http://api.cms.liulongbin.top/api/getlunbo')
        .then(response => response.json())
        .then(data => {
            //console.warn(JSON.stringify(data,null,'  '));
            this.setState({
                lunbotu:data.message
            })
        })
}

    render(){
        return <View>
                     {/* 轮播图结构 */}
                     {/* 在轮播图swiper组件外边套一个view 设置一个高度 */}
                     <View style={{height:220}}>
                        <Swiper style={styles.wrapper} showsButtons={true} autoplay={true} loop={true}>
                           {this.state.lunbotu.map((item,i)=>{
                               return  <View key={i}>
                                            <Image source={{uri:item.img}} style={{width:'100%',height:'100%'}}></Image>
                                        </View>
                           })}
                            
                        </Swiper>
                     </View>

                           {/* 六宫格 */}
                     <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                            <View style={styles.box}>
                                  <Image source={require('../../images/menu1.png')} style={{width:60,height:60}}></Image>
                                  <Text>新闻资讯</Text>
                              </View>

                              <View style={styles.box}>
                                  <Image source={require('../../images/menu2.png')} style={{width:60,height:60}}></Image>
                                  <Text>图片分享1</Text>
                              </View>

                              <View style={styles.box}>
                                  <Image source={require('../../images/menu3.png')} style={{width:60,height:60}}></Image>
                                  <Text>商品购买</Text>
                              </View>

                              <View style={styles.box}>
                                  <Image source={require('../../images/menu4.png')} style={{width:60,height:60}}></Image>
                                  <Text>留言反馈</Text>
                              </View>
                            
                              <TouchableHighlight underlayColor="#fff">
                                    <View style={styles.box}>
                                        <Image source={require('../../images/menu5.png')} style={{width:60,height:60}}></Image>
                                        <Text>热映电影</Text>
                                    </View>
                              </TouchableHighlight>
                             

                              <View style={styles.box}>
                                  <Image source={require('../../images/menu6.png')} style={{width:60,height:60}}></Image>
                                  <Text>联系我们</Text>
                              </View>
                     </View>
        </View>
    }
}

const styles = StyleSheet.create({
   box:{
     width:'33.33%',
     alignItems:"center",
     marginTop:15   
   }
  })