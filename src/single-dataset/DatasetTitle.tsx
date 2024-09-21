import RaftLightSVGComponent from "../../public/[R]_light";
import "../styles/title.css";

interface DatasetTitleProps {
  title: string;
}

export default function DatasetTitle({ title }: DatasetTitleProps) {
  return (
    <header className="header">
      <RaftLightSVGComponent />
      <h1 className="title">{title}</h1>
    </header>
  );
}
