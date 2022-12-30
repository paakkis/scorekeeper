import { View, StyleSheet, Text } from 'react-native';

import styles from "../containers/PlayersContainerStyles.js"

const ToolBar = ({ clearPoints, clearAll }) => {

  return (
    <View style={styles.clearWrapper}>
        <View style={styles.clearContainer}>
            <Text style={styles.clear} onPress={clearPoints}>
            Reset
            </Text>
        </View>
        <View style={styles.clearContainer}>
            <Text style={styles.clear} onPress={clearAll}>
            Clear
            </Text>
        </View>
    </View>

  )

};


export default ToolBar