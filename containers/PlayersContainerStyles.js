import { StyleSheet } from "react-native";

export default StyleSheet.create({
  headerWrapper: {
    height: 100,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    borderStyle: "solid",
    paddingBottom: 20,
    position: "relative",
    backgroundColor: "#fff"
  },
  headerText: {
    fontSize: 30,
    color: "#424242",
  },
  listItemTextName: {
    paddingLeft: 15,
    fontSize: 22,
    color: "#424242",
    textAlign: "left",
    alignItems: "center",
    justifyContent: "center"
  },
  listItemTextPoints: {
    paddingLeft: 15,
    fontSize: 16,
    color: "#424242"
  },
  listItem: {
    paddingLeft: 5,
    height: 100,
    fontSize: 20,
    alignContent: "center",
    justifyContent: "center",
    display: "flex",
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,

  },
  listItem1: {
    borderLeftColor: "rgba(240, 21, 20, 1)",
    borderLeftWidth: 10
  },
  listItem2: {
    borderLeftColor: "rgba(0, 111, 190, 1)",
    borderLeftWidth: 10
  },
  listItem3: {
    borderLeftColor: "rgba(77, 168, 62, 1)",
    borderLeftWidth: 10
  },
  listItem4: {
    borderLeftColor: "rgba(255, 221, 0, 1)",
    borderLeftWidth: 10
  },
  delete: {
    fontSize: 12
  },
  inputName: {
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    textAlign: "center",
    borderRadius: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#424242",
    color: "#424242"
    
  },
  inputNumber: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    width: 90,
    position: "absolute",
    right: 50,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    borderStyle: "solid",
    color: "#424242"
  },
  clear: {
    borderColor: "#CCC",
    textAlign: "center",
    borderWidth: 1,
    width: "70%",
    lineHeight: 40,
    borderRadius: 4,
    color: "#424242"
  },
  clearWrapper: {
    textAlign: "center",
    alignItems: "stretch",
    flexDirection: "row",
    height: 60,
    width: "100%",
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20
  },
  clearContainer: { flex: 1, alignItems: "center" }
});