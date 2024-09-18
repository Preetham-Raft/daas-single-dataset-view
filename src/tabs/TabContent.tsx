import ApisTab from "./ApisTab";
import MessagesTab from "./MessagesTab";
import OverviewTab from "./OverviewTab";
import SchemaTab from "./SchemaTab";
import { TabsProps } from "./tabs";

interface TabContentProps {
  activeTab: string;
  tabs: TabsProps;
}

export default function TabContent({ activeTab, tabs }: TabContentProps) {
  const tabData = tabs[activeTab];

  if (!tabData) {
    return null;
  }

  switch (activeTab) {
    case "overview":
      return <OverviewTab data={tabData as Overview} />;
    case "messages":
      return <MessagesTab data={tabData as Messages} />;
    case "schema":
      return <SchemaTab data={tabData as Schema} />;
    case "apis":
      return <ApisTab data={tabData as Apis} />;
    default:
      return null;
  }
}
