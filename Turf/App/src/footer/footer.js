import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '.footer/footer.style';

const FooterBar = () => {
  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity style={styles.footerButton}>
      </TouchableOpacity>

      <TouchableOpacity style={styles.footerButton}>
      </TouchableOpacity>

    </View>
  );
};

export default FooterBar;
