import { StyleSheet, Dimensions } from "react-native"

export default styles = StyleSheet.create({
    main: {
        alignItems: "center",
        marginTop: 24,
        flex: 1,
        justifyContent: "space-between"
    },
    title: {
        fontSize: 30,
        fontWeight: "bold"
    },
    inputView: {
        marginBottom: 12,
        alignItems: "center"
    },
    input: {
        backgroundColor: "#F6F6F6",
        borderRadius: 8,
        width: 360,
        borderWidth: 1,
        borderColor: "#E8E8E8",
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 16
    },
    register: {
        color: "#2F80ED",
        fontWeight: "bold"
    },
    buttonView: {
        margin: 64,
        alignItems: "center"
    },
    forgot: {
        marginTop: 16,
        fontSize: 18,
        color: "#2F80ED",
        fontWeight: "bold"
    }
})
