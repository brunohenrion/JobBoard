import Title from "./Title";
import Paragraph from "./Paragraph";

const Job = (props) => {
  return (
    <section className={props.name}>
      <Title name={props.title} />

      <Paragraph
        contractType={props.nameT}
        country={props.nameC}
        city={props.nameCi}
      />
    </section>
  );
};

export default Job;
