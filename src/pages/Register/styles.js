import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../../assets/colors'

const windowWidth = Dimensions.get('window').width;

export default styles = StyleSheet.create({
  main: {
    alignItems: 'center'
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: windowWidth,
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 12
  },
  logo: {
    width: 120,
    height: 32
  },
  inputView: {
    marginTop: 32,
    alignItems: 'center'
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
    width: windowWidth,
    marginLeft: 40,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: colors.gray,
    borderRadius: 8,
    width: 360,
    borderWidth: 1,
    borderColor: colors.darkerGray,
    fontSize: 16,
    marginBottom: 24,
    fontFamily: 'Helvetica Neue Bold'
  },
  buttonView: {
    marginBottom: 12,
    alignItems: 'center'
  },
  forgot: {
    marginTop: 16,
    fontSize: 18,
    color: colors.primary,
    fontWeight: 'bold'
  }
})
