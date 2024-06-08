import { AuthContext } from '@/components/myComponents/AuthContext';
import React, { useContext, useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const authContext = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      const response = await fetch('https://your-backend-api-url.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        authContext?.login(data.token);
      } else {
        setError(data.message);
      }
    } catch (e) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={{ width: 200, marginBottom: 10, padding: 8, borderWidth: 1 }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ width: 200, marginBottom: 10, padding: 8, borderWidth: 1 }}
      />
      {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default Login;
