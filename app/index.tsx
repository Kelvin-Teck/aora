
import { StatusBar } from "expo-status-bar";
import { StyleSheet,Text, View } from "react-native";
import { Link } from "expo-router";

export default function App(){
   return (
    <View style={styles.container}>
      <Text style={{color: 'blue'}}>Aora ui!</Text>
      <StatusBar style="auto"/>
      <Link href='/profile' style={{color: 'blue'}}>Go to Profile</Link>
    </View>
   );
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center'
  },
});