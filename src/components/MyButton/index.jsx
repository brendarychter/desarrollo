// eslint-disable-next-line react/prop-types
const MyButton = ({text, action, style} ) => { // componentes, siempre va la primer letra en mayuscula
    return (
      <button onClick={action} style={style}>{text}</button>
    );
  }

  const MyButtonAlert = ({text, alert, style} ) => { // componentes, siempre va la primer letra en mayuscula
    return (
      <button onClick={alert} style={style}>{text}</button>
    );
  }
export default (MyButton, MyButtonAlert);