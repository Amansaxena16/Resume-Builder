import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useUser } from "@clerk/clerk-react";

function Navbar() {

    const { isSignedIn, isLoaded } = useUser(); // Check if the user is signed in
    const targetPath = isSignedIn && isLoaded ? "/resume" : "/signIn";

    return (
      <>
        <div className="logo flex justify-between shadow-md py-3 px-5">
          <img src="/logo.svg" width={100} height={100} />
          <Link to={targetPath}>
            <Button>Get Started</Button>
          </Link>
        </div>
      </>
    );
  };

export default Navbar;
