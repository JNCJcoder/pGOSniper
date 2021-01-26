import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 0,
    paddingHorizontal: 10,
  },
  sobreText: {
    color: '#FFF',
  },
  topicContainer: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#DDD',
    padding: 15,
    marginBottom: 15,
  },
  topicAuthor: {
    fontSize: 12,
  },
  topicDescription: {
    textAlign: 'center',
    marginTop: 5,
    lineHeight: 24,
  },
  coordsContainer: {
    justifyContent: 'center',
    paddingTop: 5,
  },
  topicCoord: {
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#F00',
    minWidth: '70%',
  },
  copyButton: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#F00',
  },
  copyButtonText: {
    color: '#F00',
  },
  boldText: {
    fontWeight: 'bold',
  },
  fs16Text: {
    fontSize: 16,
  },
  fs18Text: {
    fontSize: 18,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  light: {
    backgroundColor: '#F5F5F5',
    color: '#212121',
  },
  dark: {
    backgroundColor: '#121212',
    color: '#E0E0E0',
  },
});

export default styles;
