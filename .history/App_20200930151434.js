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

import TabNavigator from 'react-native-tab-navigator';
import Home from './componemts/tabbar/Home.js'
import Me from './componemts/tabbar/Me.js'
import Shopcar from './componemts/tabbar/Shopcar.js'
import Search from './componemts/tabbar/Search.js'

//徽标组件
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends Component{
    constructor(props){
        super(props)
        this.state={
            selectedTab:'home'
        }
    }


    render(){
        return <View style={styles.container}>
                 
                      
                             <TabNavigator>
                                <TabNavigator.Item
                                     title="首页"
                                    selected={this.state.selectedTab === 'home'}
                                    renderIcon={() =><Icon name="home" size={25} color="gray" />}//未选中状态下展示的图标
                                    renderSelectedIcon={() => <Icon name="home" size={25} color="#0079FF" />}//选中状态下展示的图标
                                    //  badgeText="1"
                                    onPress={() => this.setState({ selectedTab: 'home' })}
                                    >
                                    <Home></Home>
                                </TabNavigator.Item>

                                {/* 搜索 */}
                                <TabNavigator.Item
                                     title="美图12"
                                    selected={this.state.selectedTab === 'search'}
                                    renderIcon={() => <Icon name="search" size={25} color="gray" />}
                                    renderSelectedIcon={() => <Icon name="search" size={25} color="#0079FF" />}
                                    // badgeText="1"
                                    onPress={() => this.setState({ selectedTab: 'search' })}
                                    >
                                    <Search></Search>
                                </TabNavigator.Item>

                                <TabNavigator.Item
                                     title="购物车"
                                    selected={this.state.selectedTab === 'shopcar'}
                                    renderIcon={() => <Icon name="shopping-cart" size={25} color="gray" />}
                                    renderSelectedIcon={() => <Icon name="shopping-cart" size={25} color="#0079FF" />}
                                    // badgeText="1"
                                    onPress={() => this.setState({ selectedTab: 'shopcar' })}
                                    >
                                    <Shopcar></Shopcar>
                                </TabNavigator.Item>

                                {/* 我 */}
                                <TabNavigator.Item
                                     title="我的"
                                     selected={this.state.selectedTab === 'me'}
                                     renderIcon={() => <Icon name="user" size={25} color="gray" />}
                                     renderSelectedIcon={() => <Icon name="user-o" size={25} color="#0079FF" />}
                                    // badgeText="1"
                                     onPress={() => this.setState({ selectedTab: 'me' })}
                                    >
                                  <Me></Me>
                                </TabNavigator.Item>
                               
                                </TabNavigator>
                   
        </View>
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1
    }
})