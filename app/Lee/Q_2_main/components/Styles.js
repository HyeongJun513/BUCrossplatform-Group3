// Styles.js
import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  header: {
    fontSize: 40,
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  imageContainer: {
    alignItems: 'center',
    margin: 10,
  },
  imageStyle: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  wordInputContainer: {
    margin: 5,
  },
  wordInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    width: 100,
  },
  pageButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 40,
    marginTop: 20,
  },
  buttonContainer: {
    margin: 5,
  }
});

export default Styles;
