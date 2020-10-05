import React ,{Component}from 'react'
import {View,
        Text,
        TextInput,
        Image,
        Button,
        ActivityIndicator,
        ScrollView,
        StyleSheet,
        FlatList,
        TouchableHighlight,
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
                {this.renderList()}
        </View>
    }

    componentDidMount(){
        this.getMoviesByPage()
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

    //渲染电影列表的方法
    renderList=()=>{
        if(this.state.isloading){
            return <ActivityIndicator></ActivityIndicator>
        }

        return <FlatList
                data={this.state.movies}
                keyExtractor={(item,i)=>i}//解决key的问题
                renderItem={({item})=>this.renderItem(item)}//调用方法 去渲染每一页
                ItemSeparatorComponent={this.renderSeparator}//渲染分隔线的属性方法
                onEndReachedThreshold={0.5}//距离底部还有多远的时候触发加载更多的事件
                onEndReached={this.loadNextPage}//当距离不足0.5的时候触发这个方法 加载下一页数据
                >

        </FlatList>
    }


    //渲染每一项电影
    renderItem=(item)=>{
            return <TouchableHighlight underlayColor="#fff" onPress={()=>{Actions.moviedetail({id:item.id})}}>
                        <View style={{flexDirection:'row',padding:10}}>
                                    <Image source={{uri:item.images.large}} style={{width:100,height:150,marginRight:10}}></Image>
                                    <View style={{justifyContent:'space-around'}}>
                                        <Text><Text style={styles.movieTitle}>电影名称：</Text>{item.title}</Text>
                                        <Text><Text style={styles.movieTitle}>电影类型：</Text>{item.genres.join(',')}</Text>
                                        <Text><Text style={styles.movieTitle}>制作年份：</Text>{item.year}年</Text>
                                        <Text><Text style={styles.movieTitle}>豆瓣评分：</Text>{item.rating.average}分</Text>
                                    </View>
                        </View>
                </TouchableHighlight>
    }

    //渲染分隔线
    renderSeparator=()=>{
        return <View style={{borderTopColor:'#ccc',borderTopWidth:1,marginLeft:10,marginRight:10}}></View>
    }

}

const styles=StyleSheet.create({
    
})