import {
  Navbar,
  Image,
  Text,
  useTheme,
  Popover,
  Button,
  Avatar,
} from "@nextui-org/react";
import React from "react";
import logoSrc from "../../assets/cinema.png";
import { Link } from "react-router-dom";
import { useAuth } from "../../core/auth/hooks/useAuth";
import { signOut } from "../../services/firebase.service";
import { AUTH_LOGOUT } from "../../core/auth/reducers/authReducer";
import userAnon from "../../assets/user_anon.png";

const Nav = () => {
  const { theme } = useTheme();
  const { state, dispatch } = useAuth();

  const handleLogout = async () => {
    await signOut();

    localStorage.clear();

    dispatch({
      type: AUTH_LOGOUT,
    });
  };

  const routes = [
    {
      name: "Inicio",
      path: "/",
    },
    {
      name: "Series",
      path: "/series",
    },
    {
      name: "Peliculas",
      path: "/movies",
    },
    {
      name: "Mis Favoritos",
      path: "/favorites"
    },
  ];

  return (
    <Navbar width="100vw" color="secondary">
      <Navbar.Brand>
        <Image
          src={logoSrc}
          width={70}
          height={70}
          objectFit="contain"
          alt="Trailer+"
        ></Image>
        <Text
          weight="bold"
          h2
          css={{
            textGradient: "45deg, $blue600 -20%, $pink600 50%",
            marginLeft: "15px",
            marginBottom: "0px",
          }}
        >
          Trailer+
        </Text>
      </Navbar.Brand>
      <Navbar.Content>
        {state.isAuth &&
          routes.map((link) => (
            <Navbar.Item key={link.name}>
              <Link to={link.path}>
                <Text>{link.name}</Text>
              </Link>
            </Navbar.Item>
          ))}
        <Navbar.Item>
          {state.user ? (
            <Text color="#ff4ecd">
              {state.user.displayName || state.user.email}
            </Text>
          ) : (
            <Text color="#ff4ecd">Identifícate</Text>
          )}
        </Navbar.Item>
        <Navbar.Item>
          {state.user ? (
            <Popover>
              <Popover.Trigger color="#ff4ecd">
                {state.user.photoURL ? (
                  <Avatar src={state.user.photoURL} size="lg" />
                ) : (
                  <Avatar
                    text={state.user.displayName || state.user.email}
                    size="lg"
                    css={{
                      background:
                        "linear-gradient(219deg, rgba(63,94,251,1) 0%, rgba(252,70,107,0.9332107843137255) 100%);",
                    }}
                  />
                )}
              </Popover.Trigger>
              <Popover.Content css={{ background: "transparent" }}>
                <Button onPress={handleLogout} color="error" size="sm">
                  Cerrar Sesion
                </Button>
              </Popover.Content>
            </Popover>
          ) : (
            <Avatar src={userAnon}></Avatar>
          )}
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};

export default Nav;
