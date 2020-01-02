import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 10,
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
    borderRadius: 0,
    borderWidth: 3,
    borderColor: '#F00',
    minWidth: '70%',
  },
  copyButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 1,
    borderWidth: 2,
    borderColor: '#F00',
    maxWidth: 100,
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
});

export default styles;
