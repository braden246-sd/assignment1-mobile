import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [liked, setLiked] = useState(false);

  function handleliked() {
    console.log("liked");
    setLiked(true);
    setTimeout(() => setLiked(false), 5000);
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerBar}>
        <Text style={styles.headerTitle}> OOTD_EVERYDAY </Text>
        <Text style={styles.headerPosts}>Posts</Text>
      </View>

      <View style={styles.header}>
        <Image
          source={{ uri: "https://picsum.photos/50" }}
          style={styles.profilePic}
        />

        <View style={styles.names}>
          <Text style={styles.username}>ootd_everyday</Text>
          <Text style={styles.via}>via frenchie_fry</Text>
          <Text style={styles.dots}>...</Text>
        </View>
      </View>

      <Image
        source={{ uri: "https://picsum.photos/450" }} //random image that is 450x450
        style={styles.mainImage}
      />

      {/* nav bar */}
      <View style={styles.bottomBar}>
        <Pressable
          onPress={handleliked}
          accessibilityRole="button"
          style={({ pressed }) => [
            styles.likeButton,
            pressed && styles.likeButtonPressed,
          ]}
        >
          <Image
            source={require("../../assets/images/tabIcons/like.png")}
            style={styles.icons}
          />
        </Pressable>

        <Image
          source={require("../../assets/images/tabIcons/comment.png")}
          style={styles.icons}
        />

        <Image
          source={require("../../assets/images/tabIcons/send.png")}
          style={styles.icons}
        />

        <Image
          source={require("../../assets/images/tabIcons/save.png")}
          style={[styles.icons, { marginLeft: 260 }]}
        />
      </View>

      <View style={styles.bottomBarIcons}>
        <Image
          source={require("../../assets/images/tabIcons/homeimg.png")}
          style={[styles.icons,{marginLeft:50}]}
        />
        <Image
          source={require("../../assets/images/tabIcons/search.png")}
          style={styles.icons}
        />
        <Image
          source={require("../../assets/images/tabIcons/reel.png")}
          style={styles.icons}
        />
        <Image
          source={require("../../assets/images/tabIcons/profile.png")}
          style={[styles.icons,{marginRight:50}]}

        />
      </View>
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

  icons: {
    height: 30,
    width: 30,
    gap: 15,
  },

  headerBar: {
    backgroundColor: "#ffffff",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    marginTop: 50,
    borderBottomColor: '#ddd',
    alignItems: 'center',
  },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    gap: 15,
  },

  bottomBarIcons: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between", // fills width, spaces icons apart
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },

  headerPosts: {
    fontWeight: "bold",
    fontSize: 15,
  },
  headerTitle: {
    color: "grey",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 0,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#fff7f7",
    backgroundColor: "#fff",
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginRight: 10,
  },
  username: {
    fontWeight: "bold",
    paddingLeft: 10,
  },
  via: {
    fontSize: 14,
    paddingLeft: 10,
  },
  names: {
    flexDirection: "column",
  },

  likeButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },

  likeButtonPressed: {
    backgroundColor: "red",
    opacity: 0.8,
    transform: [{ scale: 0.9 }],
  },
});
