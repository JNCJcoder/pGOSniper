import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  containerLoading: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
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
    paddingHorizontal: 35,
  },
  topicCoord: {
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#F00',
    minWidth: '70%',
    maxHeight: 50,
  },
  copyButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#F00',
    minWidth: 80,
    maxHeight: 50,
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
  // Themes
  light: {
    backgroundColor: '#FFF',
    color: '#000',
  },
  dark: {
    backgroundColor: '#151515',
    color: '#7a7a7a',
  },
});

export default styles;
