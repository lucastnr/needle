import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../../assets/colors'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    paddingTop: 12,
    height: windowHeight-32,
    justifyContent: 'space-between'
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: windowWidth,
    paddingLeft: 16,
    paddingRight: 16
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  inputView: {
    marginBottom: 12,
    alignItems: 'center'
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    width: windowWidth,
    marginLeft: 32
  },
  input: {
    backgroundColor: colors.gray,
    borderRadius: 8,
    width: 360,
    borderWidth: 1,
    borderColor: colors.darkerGray,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4
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
