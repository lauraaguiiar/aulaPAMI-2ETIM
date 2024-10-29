import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        backgroundColor: 'orange',
        padding: 8,
    },
    titulo:{
        //fontsize: 20,
        fontSize: RFValue(20),
        color:'#fafafa',
    },
});

export default styles;
