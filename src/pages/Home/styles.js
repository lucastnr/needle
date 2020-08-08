import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../../assets/colors'

const windowWidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: windowWidth,
    paddingLeft: 16,
  },
  logo: {
      width: 120,
      height: 32
  },
  main: {
    backgroundColor: '#F0F0F0',
    width: windowWidth,
    alignItems: 'center',
    paddingTop: 80,
    flex: 1,
    justifyContent: 'space-between'
  }
})