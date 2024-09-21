import { TabTypes } from "../models/common";
import {Messages} from "@raft-tech/daas-kafka-view/src/App"
import OverviewTab from "./OverviewTab";
import {SchemaViewer} from "schema-viewer/src/components/SchemaViewer"
import {default as GeoBuilder} from "geo-builder/src/App";
import { TabsProps,TabKeys } from "./Tabs";

interface TabContentProps {
  activeTab: TabKeys;
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
    case TabTypes.TOPICS:{
      const data = tabData as Topics
      return (
          <Messages topics={data.topics} retentionTime={data.retentionTime}/>
    );
    }
    case TabTypes.SCHEMA: {
      const data = tabData as Schema
      return <SchemaViewer schemaId={data.schemaId}/>;
    }
    case TabTypes.APIS:
      return <GeoBuilder />;
    default:
      return null;
  }
}
