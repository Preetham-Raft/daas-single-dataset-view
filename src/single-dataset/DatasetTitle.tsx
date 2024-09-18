import RaftLightSVGComponent from "../../public/[R]_light";
import "../styles/title.css";

interface DatasetTitleProps {
  title: string;
}

export default function DatasetTitle(props: DatasetTitleProps) {
  return (
    <header className="header">
      <RaftLightSVGComponent />
      <h1 className="title">{props.title}</h1>
    </header>
  );
}
