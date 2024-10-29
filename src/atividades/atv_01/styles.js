import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        backgroundColor: '#73ceff',
        padding: 8,
    },
    titulo:{
        //fontsize: 20,
        fontSize: RFValue(22),
        color:'#fafafa',
        fontWeight:'bold',
        marginTop:8,
    },
    texto:{
        //fontsize: 20,
        fontSize: RFValue(22),
        color:'#07428f',
        marginTop:8,
    },

});

export default styles;
