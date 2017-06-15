/**
 * Created by robin on 2017/6/15.
 */

import React,{Component} from 'react';
import {
    Text,
    TouchableOpacity,
    FlatList,
    View
} from 'react-native';

import {observable, computed, action} from 'mobx';

import {observer} from 'mobx-react/native';

import ModalBox from 'react-native-modalbox';

import styles from './styles';

var chosedItem = observable([]);

@observer
class RenderRow extends Component{

    @computed get chosedState(){
        return chosedItem.indexOf(this.props.name) >= 0;
    }

   @action choseItem  = ()=>{
        let index = chosedItem.indexOf(this.props.name);
       if (index >= 0){
           chosedItem.splice(index, 1);
       }else{
           if (!this.props.multi){
               chosedItem.splice(0, 1);
           }
           chosedItem.push(this.props.name);
       }
    };

    render(){
        return (
            <TouchableOpacity style = {styles.cell} onPress={this.choseItem}>
                <Text style = {{color:this.chosedState?'red':'black'}}>{this.props.name}</Text>
            </TouchableOpacity>
        )
    }
}

export default class ModalOfList extends Component {

    isFinish = false;

    render() {
        console.log(this.props.dataSource);
        return (
            <ModalBox style = {styles.content} ref = 'modal' position = 'bottom'  swipeToClose = {false}
                      onOpened = {this._onOpened}
            onClosed = {this._onClosed}>
                <View style={styles.header}>
                    <TouchableOpacity style={[styles.button, this.props.buttonStyle]}
                                      onPress={this._leftButton}><Text>{this.props.leftButton}</Text></TouchableOpacity>
                    <Text style={styles.headerTitle}>{this.props.title}</Text>
                    <TouchableOpacity style={[styles.button, this.props.buttonStyle]}
                                      onPress={this._rightButton}><Text>{this.props.rightButton}</Text></TouchableOpacity>
                </View>
                <FlatList
                    data = {this.props.dataSource}
                    renderItem = {({item,index})=><RenderRow name = {item} multi = {this.props.multi}/>}
                    keyExtractor = {(item, index) => index}
                    ItemSeparatorComponent = {this._ItemSeparatorComponent}
                    removeClippedSubviews = {false}
                />
            </ModalBox>
        )
    }

    _ItemSeparatorComponent = ()=>{
        return <View style = {styles.line}/>
    };

    show(){
        this.refs.modal.open();
    }

    _leftButton = ()=>{
        this.refs.modal.close();
    };

    _rightButton = ()=>{
        this.isFinish = true;
        this.refs.modal.close();
    };

    _onOpened = ()=>{
        this.isFinish = false;
    }

    _onClosed = ()=> {
        if (this.isFinish && this.props.onFinish != undefined){
            this.props.onFinish(chosedItem.slice());
        }
    }

}

ModalOfList.PropTypes = {
    leftButton: React.PropTypes.string,
    rightButton: React.PropTypes.string,
    buttonStyle: React.PropTypes.object,
    dataSource: React.PropTypes.array,
    onFinish: React.PropTypes.func,
    multi: React.PropTypes.bool,
    title: React.PropTypes.string
};

ModalOfList.defaultProps = {
    leftButton:'取消',
    rightButton:'确定',
    title: '',
    dataSource: [],
    onFinish: undefined,
    multi: false,
    buttonStyle:null
};