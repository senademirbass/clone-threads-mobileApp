import * as React from "react";
import { Thread } from "../types/threads";
import { StyleSheet, View, useColorScheme } from "react-native";
import { Text } from "./Themed";
import { Ionicons, AntDesign, Feather, FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { timeAgo } from "../utils/time-ago";
import { Image } from "expo-image";
export default function ThreadsItems(thread: Thread): JSX.Element {
  return (
    <View>
      <View style={{ gap: 10 }}>
        <PostHeading
          name={thread.author.name}
          createdAt={thread.createdAt}
          verified={thread.author.verified}
        />
        <Text>{thread.content}</Text>
        {thread.image && (
          <Image
            source={thread.image}
            style={{ width: "100%", minHeight: 300, borderRadius: 10 }}
            contentFit="cover"
            transition={200}
          />
        )}
        <BottomIcons />
        <PostFooter replies={thread.repliesCount} likes={thread.likesCount} />
      </View>
    </View>
  );
}

/*function PostLeftSide(thread: Thread) {
  const currentTheme = useColorScheme();
  const borderColor = currentTheme === "light" ? "#00000020" : "#ffffff20";

  return (
    <View style={{ justifyContent: "space-between" }}>
      <Image
        source={thread.author.photo}
        style={styles.image}
        contentFit="cover"
        transition={500}
      />
      <View
        style={{
          borderWidth: 1,
          alignSelf: "center",
          borderColor: borderColor,
          flexGrow: 1,
        }}
      />
      <View
        style={{ width: 20, alignItems: "center", alignSelf: "center", gap: 3 }}
      />
      {[1, 2, 3].map((index) => (
        <Image
          key={index}
          //@ts-ignore
          source={thread.replies[index - 1]?.author.photo}
          style={{ width: index * 7, height: index * 7, borderRadius: 15 }}
          contentFit="cover"
          transition={500}
        />
      ))}{" "}
      {/*Bu kod parçası, bir dizi
       oluşturur ve her elemanını bir <Image> bileşeni ile eşleştirir. 
       Bu elemanlar, thread.replies dizisinin belirli bir indeksine karşılık gelir. 
       Her <Image> bileşeni, thread.replies dizisindeki belirli bir elemanın 
      (author.photo) fotoğrafını gösterir. }
    </View>
  );
}*/

function PostHeading({
  name,
  createdAt,
  verified,
}: {
  name: string;
  createdAt: string;
  verified: boolean;
}) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flexGrow: 1,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <Text style={{ fontWeight: "300", color: "black" }}>{name}</Text>
        {verified && (
          <MaterialIcons name="verified" size={12} color={"black"} />
        )}
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <Text style={{ color: "black" }}>{timeAgo(createdAt)}</Text>
        <Feather name="more-horizontal" size={12} color={"black"} />
      </View>
    </View>
  );
}

function PostFooter({ replies, likes }: { replies: number; likes: number }) {
  return (
    <Text style={{ color: "white" }}>
      {replies} replies | {likes} likes{" "}
    </Text>
  );
}

function BottomIcons() {
  const iconSize = 20;
  const currentTheme = useColorScheme();
  const iconColor = currentTheme === "dark" ? "white" : "black";
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
      <FontAwesome name="heart-o" size={iconSize} color={iconColor} />
      <Ionicons name="chatbubble-outline" size={iconSize} color={iconColor} />
      <AntDesign name="retweet" size={iconSize} color={iconColor} />
      <Feather name="send" size={iconSize} color={iconColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 6,
    paddingBottom: 30,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
