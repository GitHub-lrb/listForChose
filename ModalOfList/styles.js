/**
 * Created by robin on 2017/6/15.
 */
import{StyleSheet,Dimensions} from 'react-native'

const window = Dimensions.get('window');

var styles = StyleSheet.create({
    content: {
        width: window.width,
        height: 300
    },
    header: {
        width: window.width,
        height: 44,
        flexDirection: 'row'
    },
    button: {
        width: 60,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTitle: {
        flex: 1,
        textAlign: 'center'
    },
    cell: {
        width: window.width,
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft:15
    },
    line: {
        width: window.width,
        height: 1,
        backgroundColor: '#999999'
    }


});

module.exports = styles;
