import React, { useContext } from 'react';
import { View, Button, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { AuthContext } from '@/components/myComponents/AuthContext';

const Home: React.FC = () => {
  const authContext = useContext(AuthContext);
  const router = useRouter();

  const handleLogout = () => {
    if (authContext) {
      authContext.logout();
      router.push('/login');
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
      <Text>Welcome to the Home Page!</Text>
      <Button title="Sign Out" onPress={handleLogout} />
    </View>
  );
};

export default Home;
