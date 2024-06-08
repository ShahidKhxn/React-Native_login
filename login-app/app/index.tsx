import React, { useContext, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { AuthContext } from '@/components/myComponents/AuthContext';

export default function Index() {
  const authContext = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (authContext) {
      if (authContext.isAuthenticated) {
        router.push('/home');
      } else {
        router.push('/login');
      }
    }
  }, [authContext]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ActivityIndicator size="large" />
    </View>
  );
}
