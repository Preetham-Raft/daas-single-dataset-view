interface Datasource {
  id: string;
  name: string;
  acronym: string;
  description: string;
  stewardOrganization: string;
  stewardName: string;
  stewardEmail: string;
  schemaId: string;
  retentionTime: int;
  topics: string[];
  geoKeywords: string[];
}
