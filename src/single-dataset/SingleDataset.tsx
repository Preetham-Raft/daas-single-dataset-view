import DatasetTitle from "./DatasetTitle";
import "../styles/sds.css";
import Tabs from "../tabs/tabs";

interface SingleDatasetProps {
  data: Datasource;
}

export default function SingleDataSet(props: SingleDatasetProps) {
  return (
    <div className="dataset-body">
      <DatasetTitle title={props.data.name} />
      <Tabs
        overview={{ description: props.data.description }}
        messages={{ messages: props.data.messages }}
        schema={{ schemaId: props.data.schemaId }}
        apis={{geoKeywords: props.data.geoKeywords }}
      />
    </div>
  );
}
