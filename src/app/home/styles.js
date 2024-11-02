import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#DCDCDC',
  },
  imageContainer:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  lockImage: {
    resizeMode: 'contain',
    borderRadius: 50,
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#4F4F4F',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    color: '#4F4F4F',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#2E8B57',
    width: '100%',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonSave: {
    marginTop: 20,
    backgroundColor: '#9932CC',
    width: '50%',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonSaveText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  passwordContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  password: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  generatedPassword: {
    fontSize: 20,
    color: 'blue',
    marginTop: 10,
    marginBottom: 10,
  },
})
