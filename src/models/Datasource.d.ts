interface Datasource {
  id: string;
  name: string;
  acronym: string;
  description: string;
  stewardOrganization: string;
  stewardName: string;
  stewardEmail: string;
  schemaId: string,
  messages: Topics[],
  geoKeywords: string[]
}
