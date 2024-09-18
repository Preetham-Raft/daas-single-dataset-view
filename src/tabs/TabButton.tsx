interface TabButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export default function TabButton(props: TabButtonProps) {
  return (
    <button
      className={`tab ${props.isActive ? "active" : ""}`}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
}
