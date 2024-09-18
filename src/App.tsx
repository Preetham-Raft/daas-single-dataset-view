import SingleDataSet from "./single-dataset/SingleDataSet";

function App() {
  const fakeDatasource: Datasource = {
    id: "ds",
    name: "Weather",
    acronym: "WEA",
    description: "This is the weather app lol",
    stewardOrganization: "Weather LLC",
    stewardName: "Weather Rain",
    stewardEmail: "Weather.gov",
  };

  return <SingleDataSet data={fakeDatasource} />;
}

export default App;
