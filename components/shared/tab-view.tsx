import React, { useRef, useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import PagerView from "react-native-pager-view";

interface Tab {
  key: string;
  title: string;
  content: React.ReactNode;
}

interface TabPagerViewProps {
  tabs: Tab[];
  activeColor?: string;
  inactiveColor?: string;
}

const TabPagerView: React.FC<TabPagerViewProps> = ({
  tabs,
  activeColor = "blue-500",
  inactiveColor = "gray-700",
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const windowWidth = useWindowDimensions().width;
  const pagerRef = useRef<PagerView>(null);

  const handlePageSelected = (e: any) => {
    setActiveTab(e.nativeEvent.position);
  };

  return (
    <View className="flex-1">
      <View className="flex-row bg-gray-100">
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={tab.key}
            className={`py-4 items-center ${
              activeTab === index ? `border-b-2 border-${activeColor}` : ""
            }`}
            style={{ width: windowWidth / tabs.length }}
            onPress={() => {
              setActiveTab(index);
              pagerRef.current?.setPage(index);
            }}
          >
            <Text
              className={`${
                activeTab === index
                  ? `text-${activeColor} font-bold`
                  : `text-${inactiveColor}`
              }`}
            >
              {tab.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <PagerView
        className="flex-1"
        initialPage={0}
        onPageSelected={handlePageSelected}
        ref={pagerRef}
      >
        {tabs.map((tab, index) => (
          <View key={tab.key} className="flex-1">
            {tab.content}
          </View>
        ))}
      </PagerView>
    </View>
  );
};

export default TabPagerView;
