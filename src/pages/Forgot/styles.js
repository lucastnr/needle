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
    textAlign: 'center',
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 24,
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