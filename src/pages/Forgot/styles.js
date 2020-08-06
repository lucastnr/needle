import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../../assets/colors'

const windowWidth = Dimensions.get('window').width;

export default styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    marginTop: 24,
    flex: 1,
    justifyContent: 'space-between'
  },
  description:{
    fontSize: 24,
    color: colors.primary,
    textAlign: 'center',
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 32,
    fontWeight: 'bold'
  },
  inputView: {
    alignItems: 'center'
  },
  input: {
    backgroundColor: colors.gray,
    borderRadius: 8,
    width: windowWidth - 40,
    borderWidth: 1,
    borderColor: colors.darkerGray,
    fontSize: 16,
    fontFamily: 'Helvetica Neue Bold'
  },
  modalView: {
    height: 64,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalText: {
    fontSize: 24,
    color: colors.gray2,
    textAlign: 'center',
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 32,
    fontWeight: 'bold'
  },
  buttonView: {
    alignItems: 'center',
    margin: 96
  },
  forgot: {
    marginTop: 16,
    fontSize: 18,
    color: colors.gray,
    fontFamily: 'Helvetica Neue Bold'
  },
  spacer: {
    flex: 0.5
  }
})