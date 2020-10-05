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





export default class MovieList extends Component{
    constructor(props){
        super(props)
        this.state={
                movies:[],//电影列表数据
                pageSize:15,//每页显示条数
                nowPage:1,//当前页面值
                totalPage:0,//总页数
                isloading:true//是否正在加载数据
        }
    }


    render(){
        return <View>
            <Text>MovieList</Text>
        </View>
    }

    componentDidMount(){
        this.getMoviesByPage
    }


    //获取电影列表数据
    getMoviesByPage=()=>{
        const start=(this.state.nowPage-1)*this.state.pageSize
        const url=`http://t.yushu.im/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b?start=${start}&count=${this.state.pageSize}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            this.setState({
                isloading:false,
                totalPage:Math.ceil(data.totalPage/this.state.pageSize),
                movies:this.state.movies.concat(data.subjects)
            })
        })
    }
}

const styles=StyleSheet.create({
    
})