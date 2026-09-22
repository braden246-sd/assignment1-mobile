import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style = {styles.header}>
        
        <Image source = {{uri: 'https://picsum.photos/50'}}
        style = {styles.profilePic}/>

        <View style = {styles.names}>
        <Text style = {styles.username}>ootd_everyday</Text>
        <Text style = {styles.via}>via frenchie_fry</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  via: {
    fontSize: 14,
    paddingLeft: 10,
  },
  names: {
    flexDirection: 'column',
  }
});
