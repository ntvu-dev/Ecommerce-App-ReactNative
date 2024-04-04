import React, { useState } from "react";
import { StyleSheet, useWindowDimensions, View, Text } from "react-native";
import { TabView, TabBar } from "react-native-tab-view";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Profile from "./Profile";

const renderScene = ({ route }) => {
  switch (route.key) {
    case "first":
      return <Profile />;
    // case "second":
    //   return <or />;
    default:
      return null;
  }
};

export default function Tabs() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "PROFILE" },
    { key: "second", title: "ORDERS" },
  ]);

  const renderTabsBar = (props) => (
    <TabBar
      {...props}
      style={styles.tabStyle}
      indicatorStyle={{backgroundColor:Colors.black}}
      activeColor={Colors.main}
      inactiveColor={Colors.white}
      renderLabel={({ route, color }) => (
        <Text style={{color, ...styles.text}}>{route.title}</Text>
      )}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabsBar}
    />
  );
}

const styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: "black",
  },
  text: {
    fontSize: 13,
    fontWeight: "bold",
  },
});
