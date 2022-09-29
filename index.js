// const Box = (props) => {
//   //  Write your code here.
//   const { className, text } = props;
//   return <div className={className}>{text}</div>;
// };

// const element = (
//   <div className="bg-container">
//     <h1 className="heading">Boxes</h1>
//     <div className="card-container">
//       <Box className="small-box" text="Small" />
//       <Box className="medium-box" text="Medium" />
//       <Box className="large-box" text="Large" />
//     </div>
//   </div>
// );

// ReactDOM.render(element, document.getElementById("root"));

const Box = (props) => {
  const { text, className } = props;

  return (
    <div className={`box ${className}`}>
      <p className="box-title">{text}</p>
    </div>
  );
};

const element = (
  <div className="boxes-app-container">
    <h1 className="heading">Boxes</h1>
    <div className="boxes-container">
      <Box text="Small" className="small-box" />
      <Box text="Medium" className="medium-box" />
      <Box text="Large" className="large-box" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
