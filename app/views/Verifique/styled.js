import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(0, 173, 152)',
    //backgroundColor: 'rgb(245, 247, 249)',
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginHorizontal: '2.5%',
    flex: 1,
    padding: 10,
  },
  titulo: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 36,
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#FFF',
    marginBottom: 30,
    borderRadius: 3,
    padding: 5,
    paddingLeft:10
  },
  buttom: {
    backgroundColor: '#363d4f',
    color: 'white',
    borderRadius: 4,
    fontWeight: 'bold',
    borderWidth: 0
    
  },
});

export default globalStyles;
