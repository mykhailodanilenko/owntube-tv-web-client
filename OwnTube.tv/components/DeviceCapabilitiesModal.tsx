import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { Modal, Pressable, StyleSheet } from "react-native";
import { useState } from "react";
import { colors } from "../colors";
import { DeviceCapabilities } from "./DeviceCapabilities";

export const DeviceCapabilitiesModal = () => {
  const { colors } = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible((prevState) => !prevState);
  };

  return (
    <>
      <Pressable onPress={toggleModal}>
        <Ionicons size={24} color={colors.primary} name="information-circle" />
      </Pressable>
      <Modal style={styles.modal} transparent={true} visible={modalVisible} onRequestClose={toggleModal}>
        <Pressable style={styles.showModalBtn} onPress={toggleModal}>
          <DeviceCapabilities />
        </Pressable>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modal: { height: "100%" },
  showModalBtn: {
    alignItems: "center",
    backgroundColor: colors._50percentBlackTint,
    flex: 1,
    justifyContent: "center",
  },
});
