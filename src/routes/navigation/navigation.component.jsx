import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as PPLogo} from "../../assets/pride-palette.svg";
import { UserContext } from "../../components/contexts/user.context";
import { CartContext, CartProvider } from "../../components/contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils.js";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import "./navigation.styles.scss"

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

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
              <CartIcon />
          </div>
          {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;