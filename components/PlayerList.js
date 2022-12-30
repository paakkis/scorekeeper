import { View, StyleSheet, Text } from 'react-native';
import { Button, IconButton, TextInput, MD3Colors } from 'react-native-paper';
import Input from "../components/Input";
import styles from "../containers/PlayersContainerStyles.js"

const PlayerList = ({ players, getListItemStyle, addPoints, increasePoints, decreasePoints, removePlayer }) => {

  return (
  <View style={{ backgroundColor: "#fff", display: "flex", flexDirection: "column", justifyContent: "center"}}>
    {players.map((player, index) => {
        return (
        <View style={[styles.listItem, getListItemStyle(index)]} key={index}>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center"}}>
                <IconButton
                        mode='contained'
                        iconColor={MD3Colors.tertiary100}
                        icon="delete"
                        
                        size={20}
                        onPress={() => removePlayer(index)}
                        style={{alignItems: 'center', margin: 'auto', alignContent: 'center', justifyContent: 'center', backgroundColor: "#333333"}}
                />
                <View style={{flex: 1}}>

                    <Text style={styles.listItemTextName}>
                        {player.name}
                    </Text>
                </View>
                <View>
                    <IconButton
                            icon="minus"
                            size={30}
                            onPress={() => decreasePoints(index)}
                            style={{justifyContent: 'center', margin: 'auto'}}
                    />
                </View>
                <View style={{ alignItems: "flex-end"}}>
                    <Text style={{fontSize: 40}}>
                        {player.points}
                    </Text>
                </View>
                <View style={{ alignItems: "flex-end"}}>
                    <IconButton
                            icon="plus"
                            size={30}
                            onPress={() => increasePoints(index)}
                            style={{justifyContent: 'center', margin: 'auto'}}
                        />
                </View>
            </View>
        </View>        
        )
    })}
  
  </View>

  )

};


export default PlayerList