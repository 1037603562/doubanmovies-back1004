//Main才是项目的根组件
import React ,{Component}from 'react'
import {View,
        Text,
        Image,
        ActivityIndicator,
        FlatList,
        StyleSheet,
        ScrollView,
} from 'react-native'


export default class MovieDetail extends Component{
    constructor(props){
        super(props)
        this.state={
            movieInfo:{},//电影详情信息
            isloading:true,
        }
    }
componentDidMount(){
    fetch('http://t.yushu.im/v2/movie/subject/'+this.props.id)
    .then(res=>res.json())
    .then(data=>{
        this.setState({
            movieInfo:data,
            isloading:false
        })
    })
}
    render(){
        return <View>
                   {this.renderInfo()}
                </View>
    }
   
  renderInfo=()=>{
      if(this.state.isloading){
          return <ActivityIndicator size="large" color="red"></ActivityIndicator>
      }
      return <ScrollView>
                    <View style={{padding:8}}>
                         <Text style={{fontSize:25,textAlign:'center',marginTop:20,marginBottom:20}}>{this.state.movieInfo.title}</Text>
                                
                         <View style={{alignItems:"center"}}>
                            <Image source={{uri:this.state.movieInfo.images.large}} style={{width:200,height:280}}></Image>
                         </View>

                        <Text style={{lineHeight:30,marginTop:20}}>{this.state.movieInfo.summary}</Text>
                    </View>
            </ScrollView>
      
  }
}

const styles= StyleSheet.create({
    
})