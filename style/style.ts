import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  postImage: {
    width: "100%",
    minHeight: 200,
    borderRadius: 10,
    transitionDuration: 200,
  },
  container: {
    flexDirection: "row",
    gap: 6,
    paddingBottom: 30,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  iconList: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexGrow: 1,
  },
  iconItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  iconText: {
    fontWeight: "300",
    color: "black",
  },
  friendsList: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  friendsItem: {
    padding: 20,
    borderRadius: 10,
  },
  closeButton: {
    marginLeft: 200,
  },
  nameList: {
    display: "flex",
    borderColor: "gray",
    fontSize: 40,
  },
  modalTitle: {
    display: "flex",
    fontSize: 50,
    color: "gray",
    fontWeight: "300",
  },
});

export default styles;
