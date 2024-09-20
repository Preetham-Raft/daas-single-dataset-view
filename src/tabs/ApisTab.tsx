export default function ApisTab({ data }: { data: Apis }) {
  return <>{JSON.stringify(data.geoKeywords)}</>;
}
