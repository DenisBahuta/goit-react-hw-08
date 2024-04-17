import css from "./ErrorMessage.module.css";

function ErrorMessage({ message = "" }) {
  return (
    <div className={css.errorText}>
      <b>
        {message.length > 0
          ? message
          : "❌ Oops, something went wrong! Please try reloading this page!"}
      </b>
    </div>
  );
}

export default ErrorMessage;
