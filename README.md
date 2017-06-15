# listForChose

chose a item from list that included in modal View

ModalOfList.PropTypes = {
    leftButton: React.PropTypes.string, //左侧按钮文本
    rightButton: React.PropTypes.string,//右侧按钮文本
    buttonStyle: React.PropTypes.object,//按钮风格
    dataSource: React.PropTypes.array, //items for chose
    onFinish: React.PropTypes.func, //点击右侧按钮的事件
    multi: React.PropTypes.bool, //多选，单选
    title: React.PropTypes.string //中间的标题
};
