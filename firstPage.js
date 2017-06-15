/**
 * Created by robin on 2017/6/6.
 */

import React,{Component} from 'react';
import {
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import ModalList from './ModalOfList'
export default class FirstPage extends Component {

    dataSource = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15'];

    render() {
        return (
            <View style={[this.props.style,{justifyContent:'center',alignItems:'center'}]}>
                <TouchableOpacity onPress={this.showModal}
                style = {{width:200,height:40}}><Text>打开</Text></TouchableOpacity>
                <ModalList dataSource={this.dataSource} ref = 'modal' multi = {true}
                    onFinish = {this._onFinish}
                />
            </View>
        );
    }

    showModal = ()=>{
        this.refs.modal.show();
    };

    _onFinish  = (values)=>{
        console.log('chosed item:',values)
    };
}


