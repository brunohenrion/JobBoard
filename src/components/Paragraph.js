const Paragraph = (props) => {
  return (
    <div>
      <p>
        {props.contractType} - {props.country}- {props.city}
      </p>
    </div>
  );
};

export default Paragraph;
