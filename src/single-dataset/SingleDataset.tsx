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
        messages={{ messages: ["fake", "weather"] }}
        schema={{ schema: { name: "name" } }}
        apis={{ name: props.data.name }}
      />
    </div>
  );
}
