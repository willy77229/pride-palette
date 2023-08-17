import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as PPLogo} from "../../assets/pride-palette.svg";
import { UserContext } from "../../components/contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils.js";

import "./navigation.styles.scss"

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return(
    <Fragment>
      <div className="navigation">
          <Link className="logo-container" to="/">
              <PPLogo className="logo"/>
          </Link>
          <div className="nav-links-container">
              <Link className="nav-link" to="/shop">
                  SHOP
              </Link>
              {
                currentUser ? (
                  <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
                ) : (
                  <Link className="nav-link" to="/auth">
                    SIGN IN
                  </Link>
                )
              }
              
          </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;