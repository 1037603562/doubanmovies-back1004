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
import MovieList from './componemts/movie/MovieList.js'


export default class Main extends Component{
    constructor(props){
        super(props)
        this.state={
           
        }
    }


    render(){
        return <Router>
                    <Stack key="root">
                        {/* 注意：所有的路由规则都用过写到这里 */}
                        {/* 第一个Scene就是默认要展示的首页 */}
                        {/* key属性 表示路由的规则名称 将来可以使用这个key 进行编程式导航，每一个路由规则
                            都应该提供一个唯一的key,key不能重复 */}
                        <Scene key="app" component={App} title="" hideNavBar={true}/>
                        {/* 下面是电影列表的路由规则 */}
                        <Scene key="movielist" component={MovieList} title="热映电影列表"/>

                        <Scene key="moviedetail" component={MovieDetail} title="电影详情"/>
                    </Stack>
                </Router>
    }
}

const styles=StyleSheet.create({
    
})