import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

const RootLayout = () => {
  
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false}} />
    </Stack>
  );
}

export default RootLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
