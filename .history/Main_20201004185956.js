import React ,{Component}from 'react'
import {View,
        Text,
        TextInput,
        Image,
        Button,
        ActivityIndicator,
        ScrollView,
        StyleSheet,
} from 'react-native'

//导入路由相关组件
//Router:相当于HsahRouter,全局只用一次就行了
//Stack:这是一个分组的容器，不表示具体的路由，专门用来给路由分组的
//Scene:表示一个具体的路由规则，类似Route,
 import {Router,Stack,Scene} from 'react-native-router-flux'


 //导入app组件
import App from './App.js'



export default class Main extends Component{
    constructor(props){
        super(props)
        this.state={
           
        }
    }


    render(){
        return <View>
                <Text>Main组件</Text>
        </View>
    }
}

const styles=StyleSheet.create({
    
})