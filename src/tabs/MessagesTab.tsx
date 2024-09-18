export default function MessagesTab({ data }: { data: Messages }) {
  return <>{JSON.stringify(data.messages)}</>;
}
