import { StyleSheet, Dimensions } from "react-native"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  main: {
    alignItems: "center",
    marginTop: 24,
    height: windowHeight,
    justifyContent: "space-between"
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: windowWidth,
    paddingLeft: 16,
    paddingRight: 16
  },
  title: {
    fontSize: 30,
    fontWeight: "bold"
  },
  description:{
    fontSize: 18,
    color: "#2F80ED",
    textAlign: "center",
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 32,
    fontWeight: "bold"
  },
  inputView: {
    alignItems: "center"
  },
  input: {
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    width: 360,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    fontSize: 16,
    fontWeight: "bold"
  },
  register: {
    color: "#2F80ED",
    fontWeight: "bold"
  },
  buttonView: {
    margin: 32,
    alignItems: "center"
  },
  forgot: {
    marginTop: 16,
    fontSize: 18,
    color: "#2F80ED",
    fontWeight: "bold"
  },
  spacer: {
    flex: 0.5
  }
})