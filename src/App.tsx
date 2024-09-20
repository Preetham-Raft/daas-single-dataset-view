import SingleDataSet from "./single-dataset/SingleDataset";

function App() {
  const fakeDatasource: Datasource = {
    id: "ds",
    name: "Weather",
    acronym: "WEA",
    description: "This is the weather app lol",
    stewardOrganization: "Weather LLC",
    stewardName: "Weather Rain",
    stewardEmail: "Weather.gov",
    topics: ["topic"],
    retentionTime: 10,
    schemaId: "fakeUUID",
    geoKeywords: ["keyword1", "keyword2"],
  };

  return <SingleDataSet data={fakeDatasource} back={() => {}} />;
}

export default App;
