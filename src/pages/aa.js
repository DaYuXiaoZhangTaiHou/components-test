'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Bb from './bb';

class AaComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           aacomponentDidMount:''
        }
    }
    //只调用一次, 在客户端与服务端都执行,  在初始化渲染之前被调用
    componentWillMount() {
        console.log('aa componentWillMount');
    }

    //只调用一次, 在客户端执行，不在服务端执行,  初始化渲染之后被调用
    //使用 setTimeout 或 setInterval, Ajax 请求等这些操作，均在这个方法内。
    componentDidMount(){
        console.log('aa componentDidMount');
        // this.setState({
        //     aacomponentDidMount: 'aa componentDidMount setState'
        // });
        // console.log('aa componentDidMount  setState after');
    }


    //组件收到新的 props 时被调用。不会在初始化渲染被调用。
    //在这个函数里调用 this.setState()不会触发任何额外的渲染
    //如果需要实现一个对 state 变化相应的操作，使用 componentWillUpdate
    componentWillReceiveProps(){
        console.log('aa componentWillReceiveProps');
    }

    //当新的 props 或者 state 被收到，在渲染前被调用。不会在初始化渲染时被调用。

    shouldComponentUpdata(){
        console.log('aa shouldComponentUpdata');
    }

    //当新的 props 或者 state 被收到，在渲染前被立即调用。不会在初始化渲染被调用
    //不能在这个方法里使用 this.setState()。
    componentWillUpdata(){
        console.log('aa componentWillUpdata');
    }

    //在组件的更新被更新到 DOM 后立即被调用。不会在初始化渲染被调用
    componentDidupdate(){
        console.log('aa componentDidupdate');
    }

    //在组件卸载前被调用，主要用来执行一些组件的清理工作。
    componentWillUnmount(){
        console.log('aa componentWillUnmount');
    }

    fromChildEventHandle(event){
        console.log('event', event);
    }
    
    render() {
        console.log('aa render');
        return (
            <div>
                aa的内容
                <Bb aatobb='我是从AA组件传递过来的' fromChildEvent={this.fromChildEventHandle}></Bb>
            </div>
        )
    }
}

export default AaComponent;