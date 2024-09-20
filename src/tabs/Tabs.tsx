import { useState } from "react";
import TabContent from "./TabContent";
import TabButton from "./TabButton";
import "../styles/tabs.css";
import { capitalize } from "../models/common";

export interface TabsProps {
  overview?: Overview; 
  topics?: Topics; 
  schema?: Schema; 
  apis?: Apis;
  back: () => void;
}

export type TabKeys = keyof TabsProps;

export default function Tabs(props: TabsProps) {
  const [activeTab, setActiveTab] = useState<TabKeys>('overview');

  return (
    <>
      <div className="tabs">
        {Object.keys(props).filter(key => key !== 'back').map((key) => {
          const isActive = activeTab === key;
          return (
            <TabButton
              key={key}
              label={capitalize(key)}
              isActive={isActive}
              onClick={() => setActiveTab(key as TabKeys)}
            />
          );
        })}
              <button className="button" onClick={props.back}>
          Back
        </button>
      </div>
      <div className="tab-content">
        <TabContent activeTab={activeTab} tabs={props} />
      </div>
    </>
  );
}
