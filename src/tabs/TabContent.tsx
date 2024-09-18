import { TabTypes } from "../models/common";
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
    case TabTypes.OVERVIEW:
      return <OverviewTab data={tabData as Overview} />;
    case TabTypes.MESSAGES:
      return <MessagesTab data={tabData as Messages} />;
    case TabTypes.SCHEMA:
      return <SchemaTab data={tabData as Schema} />;
    case TabTypes.APIS:
      return <ApisTab data={tabData as Apis} />;
    default:
      return null;
  }
}
