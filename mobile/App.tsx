import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Text } from './src/components/Text';

export default function App() {
  const [isFontLoader] = useFonts({
    'GeneralSans-400': require('./src/assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-500': require('./src/assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-600': require('./src/assets/fonts/GeneralSans-Bold.otf'),
  });

  if (!isFontLoader) {
    return null;
  }

  return (
    <View >
      <Text weight='600' size={24}>Open!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
