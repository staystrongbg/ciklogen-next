const TestChildren = (props) => {
  console.log(props);
  return (
    <div>
      <p>{props.children}</p>
    </div>
  );
};

export default TestChildren;
