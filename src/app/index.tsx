import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style = {styles.headerBar}>
        <Text style = {styles.headerTitle}> OOTD_EVERYDAY </Text>
        <Text style = {styles.headerPosts}>Posts</Text>
      </View>
      <View style = {styles.header}>
        
        <Image source = {{uri: 'https://picsum.photos/50'}} 
        style = {styles.profilePic}/>

        <View style = {styles.names}>
        <Text style = {styles.username}>ootd_everyday</Text>
        <Text style = {styles.via}>via frenchie_fry39</Text>
        
        </View>
      </View>

      <Image source = {{uri: 'https://picsum.photos/450'}} //random image that is 450x450
      style = {styles.mainImage}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  mainImage: {
    height: 450,
    width: 450,

  },
  headerBar: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
  },
  bottomBar: {
    
  },
  headerPosts: {
    fontWeight: 'bold',
    fontSize: 15,

  },
  headerTitle: {
    color: 'grey',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 10,
    paddingTop: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#fff7f7',
    backgroundColor: '#fff',
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
