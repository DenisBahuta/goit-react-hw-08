import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useAuth } from "../hooks/useAuth";

const Home = () => {
  const { isSignedIn } = useAuth();

  return (
    <div>
      <Helmet>
        <title>PHONE BOOK 📞📖</title>
      </Helmet>
      {isSignedIn ? (
        <Link to='/contacts' relative='path'>
          You can use your contacts
        </Link>
      ) : (
        <Link to='/login' relative='path'>
          Please log in
        </Link>
      )}
    </div>
  );
};

export default Home;
