import React, { useState } from 'react'
import {
  View,
  Image,
  Text,
  Button,
  Switch,
  Alert,
  TouchableOpacity,
} from 'react-native'
import { styles } from './styles'
import Slider from '@react-native-community/slider'
import * as Clipboard from 'expo-clipboard'

export const PasswordGenerator = () => {
  const [length, setLength] = useState(4)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false)
  const [password, setPassword] = useState('')

  const generatePassword = () => {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numbers = '0123456789'
    const specialChars = '!@#$%^&*()_+~`|}{[]:;?><,./-='

    let characterSet = letters
    if (includeNumbers) characterSet += numbers
    if (includeSpecialChars) characterSet += specialChars

    let generatedPassword = ''
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characterSet.length)
      generatedPassword += characterSet[randomIndex]
    }
    setPassword(generatedPassword)
  }

  const savePassword = async () => {
    await Clipboard.setStringAsync(password)
    Alert.alert(
      'Senha copiada!',
      'Sua senha foi salva na área de transferência.'
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/padlock.webp')}
          style={styles.lockImage}
        />
      </View>
      <Text style={styles.title}>Gerador de Senhas</Text>

      <Text style={styles.label}>Tamanho da Senha: {length}</Text>
      <Slider
        style={{ width: '100%', height: 40 }}
        minimumValue={4}
        maximumValue={16}
        step={1}
        value={length}
        onValueChange={value => setLength(value)}
        minimumTrackTintColor="#1EB1FC"
        maximumTrackTintColor="#ddd"
        thumbTintColor="#1EB1FC"
      />

      <View style={styles.option}>
        <Text>Incluir Números</Text>
        <Switch value={includeNumbers} onValueChange={setIncludeNumbers} />
      </View>

      <View style={styles.option}>
        <Text>Incluir Caracteres Especiais</Text>
        <Switch
          value={includeSpecialChars}
          onValueChange={setIncludeSpecialChars}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>

      {password ? (
        <View style={styles.passwordContainer}>
          <Text style={styles.password}>Senha Gerada:</Text>
          <Text style={styles.generatedPassword}>{password}</Text>
          <TouchableOpacity style={styles.buttonSave} onPress={savePassword}>
            <Text style={styles.buttonSaveText}>Copiar Senha</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  )
}
