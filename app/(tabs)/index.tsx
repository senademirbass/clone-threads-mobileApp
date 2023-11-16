import { Platform, StyleSheet, Text } from "react-native";
import * as React from "react";
import Lottie from "lottie-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RefreshControl, ScrollView } from "react-native-gesture-handler";
import { createRandomUser } from "../../utils/generate-dommy-data";
import { ThreadsContext } from "../../context/thread-context";
import ThreadsItems from "../../components/ThreadsItem";

const user = createRandomUser();
console.log(user);
export default function TabOneScreen() {
  const animationRef = React.useRef<Lottie>(null);
  const threads = React.useContext(ThreadsContext);
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          backgroundColor: "gray",
          paddingHorizontal: 10,
          paddingTop: Platform.select({ android: 30 }),
        }}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => {
              animationRef.current?.play();
            }}
            tintColor={"transparent"}
          />
        }
      >
        <Lottie
          ref={animationRef}
          source={require("../../lottie-animations/threads.json")}
          loop={false}
          autoPlay
          style={{
            width: 90,
            height: 90,
            alignSelf: "center",
          }}
        />
        {threads.map((thread) => (
          <ThreadsItems key={thread.id} {...thread} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
