import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: '99%',
    maxWidth: '98%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tituloText: {
    fontSize: 32,
  },
  infoText: {
    fontSize: 20,
    textAlign: 'center',
  },
  infoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  subredditText: {
    fontSize: 24,
    color: '#00F',
  },
  fs16Text: {
    fontSize: 16,
  },
  boldText: {
    fontWeight: 'bold',
  },
  light: {
    backgroundColor: '#FAFAFA',
    color: '#333',
  },
  dark: {
    backgroundColor: '#1e1e1e',
    color: '#fff',
  },
});

export default styles;
