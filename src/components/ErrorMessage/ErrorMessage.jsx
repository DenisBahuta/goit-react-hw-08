import css from "./ErrorMessage.module.css";

const ErrorMessage = ({ message = "" }) => {
  return (
    <div className={css.errorText}>
      <b>
        {message.length > 0
          ? message
          : "❌ Whoops, something went wrong! Please try reloading this page!"}
      </b>
    </div>
  );
};

export default ErrorMessage;
