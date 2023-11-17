import * as React from "react";
import { Thread } from "../types/Thread";
import { View, useColorScheme } from "react-native";
import { Text } from "./Themed";
import {
  Ionicons,
  AntDesign,
  Feather,
  FontAwesome,
  MaterialIcons,
} from "@expo/vector-icons";
import { timeAgo } from "../utils/time-ago";
import { Image } from "expo-image";
import styles from "../style/style";
import SendFriends from "./SendFriends";
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
          <Image style={styles.postImage} source={thread.image} />
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
    <View style={styles.iconList}>
      <View style={styles.iconItem}>
        <Text style={styles.iconText}>{name}</Text>
        {verified && (
          <MaterialIcons name="verified" size={12} color={"black"} />
        )}
      </View>
      <View style={styles.iconItem}>
        <Text style={styles.iconText}>{timeAgo(createdAt)}</Text>
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

  const [isVisible, setIsVisible] = React.useState(false);
  const [isLike, setIsLike] = React.useState(false);
  const friends = [
    "Sena Demirbas",
    "Duygu Aran",
    "Büsra Arıgün",
    "Ebubekir Demiray",
    "Doğukan Yıldız",
  ];

  const openModal = () => {
    setIsVisible(true);
  };

  const closeModal = () => {
    setIsVisible(false);
  };

  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
      <FontAwesome
        name="heart-o"
        size={iconSize}
        onPress={() => setIsLike((isLike) => !isLike)}
        color={isLike ? "red" : "white"}
      />
      <Ionicons name="chatbubble-outline" size={iconSize} color={iconColor} />
      <AntDesign name="retweet" size={iconSize} color={iconColor} />
      <Feather
        name="send"
        size={iconSize}
        color={iconColor}
        onPress={openModal}
      />
      <SendFriends
        isVisible={isVisible}
        onClose={closeModal}
        friends={friends}
      />
    </View>
  );
}
