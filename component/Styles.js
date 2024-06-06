// component/Styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // WordInput styles
  WordInputContainer: {
    margin: 10,
  },
  WordInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
  },
  // MyButton styles
  ButtonContainer: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  // App styles
  AppContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  
  ImagesContainer: {
    
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    height: 400,
  },

  ImageWrapper: {
    position: 'absolute',
  },

  ImageStyle: {
    width: 300,
    height: 300,
    margin: 5,
  },

  TitleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  Title : {
    fontSize: 24,
  },

});

export default styles;
