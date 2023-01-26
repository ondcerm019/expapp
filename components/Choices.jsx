import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { ROCK, PAPER, SCISSORS } from "../App";

export const Choices = ({choice, setChoice}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={e => {setChoice ? setChoice(ROCK) : null}}>
                <Image style={[styles.icon, {backgroundColor: choice == ROCK ? "yellow" : "transparent"}]} source={require("../assets/adaptive-icon.png")} />
            </TouchableOpacity>
            <TouchableOpacity onPress={e => {setChoice ? setChoice(PAPER) : null}}>
                <Image style={[styles.icon, {backgroundColor: choice == PAPER ? "yellow" : "transparent"}]} source={require("../assets/icon.png")} />
            </TouchableOpacity>
            <TouchableOpacity onPress={e => {setChoice ? setChoice(SCISSORS) : null}}>
                <Image style={[styles.icon, {backgroundColor: choice == SCISSORS ? "yellow" : "transparent"}]} source={require("../assets/splash.png")} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    icon: {
        width: 100,
        height: 100,
        margin: 10,
        backgroundColor: "orange"
    }
});

export default Choices;