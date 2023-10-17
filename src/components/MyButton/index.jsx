// eslint-disable-next-line react/prop-types
const MyButton = ({text, action, color} ) => { // componentes, siempre va la primer letra en mayuscula
    return (
      <button onClick={action} style={{ backgroundColor: color }}>{text}</button>
    );
  }

  // const MyButtonAlert = ({text, alert, style} ) => { // componentes, siempre va la primer letra en mayuscula
  //   return (
  //     <button onClick={alert} style={style}>{text}</button>
  //   );
  // }
export default MyButton;