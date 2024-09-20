import DatasetTitle from "./DatasetTitle";
import "../styles/sds.css";
import "../index.css";
import Tabs from "../tabs/Tabs";
interface SingleDatasetProps {
  data: Datasource;
  back: () => void;
}

export default function SingleDataSet({ data, back }: SingleDatasetProps) {
  return (
    <div className="dataset-body">
      <DatasetTitle title={data.name} />
      <div className="tabs-container">
        <Tabs
          overview={{ description: data.description }}
          topics={{ topics: data.topics, retentionTime: data.retentionTime }}
          schema={{ schemaId: data.schemaId }}
          apis={{ geoKeywords: data.geoKeywords }}
        />
        <button className="button" onClick={back}>
          Back
        </button>
      </div>
    </div>
  );
}
