import { StyleSheet } from "react-native";


const Styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 20,
    },
    quizExplainContainer: {
      width: '100%',
      padding: 10,
      borderBottomWidth: 1,
      alignItems: 'center',
    },
    quizExplainText: {
      fontSize: 18,
    },
    image: {
        width: 550,
        height: 550,
        margin: 40,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
    },
    scrollViewContainer: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding:20,
    },
  });

  export default Styles;