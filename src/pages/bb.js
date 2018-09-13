'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class BbComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fromAa:''
        }
    }
    
    componentWillMount(){
        console.log('bb componentWillMount');
    }

    componentDidMount(){
        console.log('bb componentDidMount');
        let fromAa = this.props.aatobb;
        this.setState({
            fromAa
        });
        console.log('fromAa', fromAa);
        
    }

    componentWillReceiveProps(){
        console.log('bb componentWillReceiveProps');
        
    }

    shouldComponentUpdata(){
        console.log('bb shouldComponentUpdata');
        // let fromAa = this.props.aatobb;
        // this.setState({
        //     fromAa
        // });
        // console.log('fromAa', fromAa);
    }

    componentWillUpdata(){
        console.log('bb componentWillUpdata');
        // let fromAa = this.props.aatobb;
        // this.setState({
        //     fromAa
        // });
        // console.log('fromAa', fromAa);
    }

    componentDidUpdata(){
        console.log('bb componentDidUpdata');
        // let fromAa = this.props.aatobb;
        // this.setState({
        //     fromAa
        // });
        // console.log('fromAa', fromAa);

        
    }

    componentWillUnmount(){
        console.log('bb componentWillUnmount');
    }

    bbClickEventHandle(){
        console.log(typeof this.props.fromChildEvent);
        if(typeof this.props.fromChildEvent == 'function'){
            this.props.fromChildEvent('我来自于孩子');
        }
    }

    render() {
        console.log('bb render');
        return (
            <div onClick={this.bbClickEventHandle.bind(this)}>
                我是bb的内容
            </div>
        )
    }
}

export default BbComponent;