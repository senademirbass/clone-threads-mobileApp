import React from "react";
import { View, Modal, Text, TouchableOpacity } from "react-native";
import { Friends } from "../types/Friends";
import styles from "../style/style";
import { AntDesign } from "@expo/vector-icons";

const SendFriends: React.FC<Friends> = ({ isVisible, onClose, friends }) => {
  return (
    <Modal visible={isVisible} animationType="slide" transparent>
      <View style={styles.friendsList}>
        <AntDesign
          style={styles.closeButton}
          name="closecircle"
          size={40}
          color="black"
          onPress={onClose}
        />
        <View>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.modalTitle}>
              <Text>Choose a friend</Text>
            </Text>
          </TouchableOpacity>
          {friends.map((friend, index) => (
            <Text key={index}>
              <AntDesign name="user" size={40} color="black" />
              <Text style={styles.nameList}> {friend}</Text>
            </Text>
          ))}
        </View>
      </View>
    </Modal>
  );
};

export default SendFriends;
