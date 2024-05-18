import { StyleSheet, Text, View, Image,Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <View style={{flex: 1,}}>
      <View style= {{flex:1, flexDirection: 'row'}}>
      <View style= {{flex:1, flexDirection: 'column'}}>
      <View style= {{flex: 1, backgroundColor: 'black'}}></View>
      <View style= {{flex: 1, backgroundColor: 'pink'}}></View>
    </View>
    <View style={{flex:1, flexDirection: 'column'}}>
      <View style= {{flex: 1, flexDirection: 'row'}}>
      <View style={{flex: 1, backgroundColor: 'blue'}}></View>
      <View style= {{flex: 1, backgroundColor: 'green'}}></View>
    </View>
    </View>
    </View>
    <View style={{flex: 1, backgroundColor: 'yellow'}}></View>
    </View>
  );
}



