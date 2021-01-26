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
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'transparent',
    padding: 15,
    marginTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2
  },
  topicAuthor: {
    fontSize: 12,
  },
  topicDescription: {
    textAlign: 'center',
    marginTop: 5,
    lineHeight: 24,
    padding: 25,
  },
  coordsContainer: {
    justifyContent: 'center',
    paddingTop: 5,
    paddingHorizontal: 35,
  },
  topicCoord: {
    borderRadius: 12,
    borderWidth: 3,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderColor: '#F00',
    minWidth: '70%',
    maxHeight: 50,
    paddingHorizontal: 15,
  },
  copyButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 2,
    borderLeftWidth: 0,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderColor: '#F00',
    backgroundColor: '#F00',
    minWidth: 80,
    maxHeight: 50,
  },
  copyButtonText: {
    color: '#FFF',
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
    backgroundColor: '#FFFFFF',
    color: '#212121',
  },
  dark: {
    backgroundColor: '#1E1E1E',
    color: '#E0E0E0',
  },
});

export default styles;
