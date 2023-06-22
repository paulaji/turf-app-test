import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    footerContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      backgroundColor: '#009900',
    },
    footerButton: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  export default styles;