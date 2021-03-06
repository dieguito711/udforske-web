import { Container as NavContainer } from "./styled";
import Link from "next/link";
import { useAuth } from "lib/useUser";
const Nav = ({ children }) => {
  const auth = useAuth();
  return (
    <>
      <NavContainer>
        <li>
          <Link href="/">
            <a>home</a>
          </Link>
        </li>
        <li>
          <Link href="/mapa">
          <div className='tooltip'>
            <a>mapa</a>
            {/* <span className="tooltiptext">Próximamente</span> */}
            </div>
          </Link>
        </li>
        <li>
          <Link href="/series">
            <a>series</a>
          </Link>
        </li>
        <li>
          {/* <Link href="/shop"> */}
          <div className='tooltip'>
            <a>tienda</a>
            <span className="tooltiptext">Próximamente</span>
            </div>
          {/* </Link> */}
        </li>
        <li>
          <Link href="https://instagram.com/udforske_">
            <a target="_blank">instagram</a>
          </Link>
        </li>
        <div className="separador"></div>
        {!auth.user ? (
          <>
            <li>
              <Link href="/login">
                <a>login</a>
              </Link>
            </li>
            <li>
              <Link href="signup">
                <a>signup</a>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/dashboard">
                <a>dashboard</a>
              </Link>
            </li>
            <li>
              <a onClick={() => auth.logout()}>logout</a>
            </li>
          </>
        )}
        <img className='ico' src="https://firebasestorage.googleapis.com/v0/b/udforske-f73ff.appspot.com/o/general%2Fiso_blanco.svg?alt=media&token=07614c99-6e7e-490e-947f-8bc5cf769db0"/>
      </NavContainer>
    </>
  );
};

export default Nav;
