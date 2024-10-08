import { useState } from "react";
import TabContent from "./TabContent";
import TabButton from "./TabButton";
import "../styles/tabs.css";
import { capitalize } from "../models/common";

export interface TabsProps {
  [key: string]: Overview | Messages | Schema | Apis | undefined;
}

export default function Tabs(props: TabsProps) {
  const [activeTab, setActiveTab] = useState(Object.keys(props)[0]);

  return (
    <div className="tabs-container">
      <div className="tabs">
        {Object.keys(props).map((key) => {
          const isActive = activeTab === key;
          return (
            <TabButton
              key={key}
              label={capitalize(key)}
              isActive={isActive}
              onClick={() => setActiveTab(key)}
            />
          );
        })}
      </div>
      <div className="tab-content">
        <TabContent activeTab={activeTab} tabs={props} />
      </div>
    </div>
  );
}
