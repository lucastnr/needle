import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../../assets/colors'

export default styles = StyleSheet.create({
    main: {
        alignItems: 'center',
        marginTop: 24,
        flex: 1,
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    inputView: {
        marginBottom: 12,
        alignItems: 'center'
    },
    input: {
        backgroundColor: colors.gray,
        borderRadius: 8,
        width: 360,
        borderWidth: 1,
        borderColor: colors.darkerGray,
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 16
    },
    register: {
        color: colors.primary,
        fontWeight: 'bold'
    },
    buttonView: {
        margin: 64,
        alignItems: 'center'
    },
    forgot: {
        marginTop: 16,
        fontSize: 18,
        color: colors.primary,
        fontWeight: 'bold'
    }
})
