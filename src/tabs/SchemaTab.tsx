export default function SchemaTab({ data }: { data: Schema }) {
  return <>{JSON.stringify(data.schema)}</>;
}
