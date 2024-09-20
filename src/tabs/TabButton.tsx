interface TabButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export default function TabButton({
  label,
  isActive,
  onClick,
}: TabButtonProps) {
  return (
    <button className={`tab ${isActive ? "active" : ""}`} onClick={onClick}>
      {label}
    </button>
  );
}
