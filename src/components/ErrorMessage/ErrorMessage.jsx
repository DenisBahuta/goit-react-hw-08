const ErrorMessage = ({ message = "" }) => {
  return (
    <b>
      {message.length > 0
        ? message
        : "❌ Whoops, something went wrong! Please try reloading this page!"}
    </b>
  );
};

export default ErrorMessage;
