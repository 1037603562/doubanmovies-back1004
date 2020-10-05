import React ,{Component}from 'react'
import {View,
        Text,
        ScrollView,
        Image,
        ActivityIndicator,
        Button,
} from 'react-native'




export default class Search extends Component{
    constructor(props){
        super(props)
        this.state={}
    }


    render(){
        return <View>
                   {/* <Text>这是search</Text> */}
                   <ScrollView>
                             {/* <Text>这是我第一个app</Text> */}
                            {/* <TextInput  style={{ height: 40, borderColor: 'gray', borderWidth: 1 ,}} secureTextEntry={true}></TextInput> */}
                            <Image style={{width:400,height:600}} source={require('../../images/mn.jpg')}></Image>
                            <Image style={{width:400,height:600,marginTop:20}} source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600789278716&di=1fffeb9fdd6a294e7da08337d53d4033&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fpic%2F6%2Ff1%2F3b87844441.jpg'}}></Image>
                            <Image style={{width:400,height:600,marginTop:20}} source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600789278710&di=68172f622b91e84b8c9dba9bb5f4d9a3&imgtype=0&src=http%3A%2F%2Fpic.jj20.com%2Fup%2Fallimg%2Fmn01%2F041919144224%2F1Z419144224-4.jpg'}}></Image>
                            <Image style={{width:400,height:600,marginTop:20}} source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600789278710&di=eee7777692ccd9cbf564074b1b8d0731&imgtype=0&src=http%3A%2F%2Fimg.mm4000.com%2Ffile%2Fb%2F97%2Fa3affbdf94_800.jpg'}}></Image>
                            
                            <ActivityIndicator size="large" color="#00ff00"></ActivityIndicator>
                            <Button title="haoda" onPress={()=>{console.warn('111')}}></Button>
                   </ScrollView>
        </View>
    }
}