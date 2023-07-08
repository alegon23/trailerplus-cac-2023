import { toast } from "react-hot-toast";
import { useAuth } from "../../../core/auth/hooks/useAuth";
import { AUTH_LOGIN, authKey } from "../../../core/auth/reducers/authReducer";
import {
  getUsers,
  saveUserInDB,
  signInWithEmail,
  signInWithGoogle,
  signUpWithEmail,
} from "../../../services/firebase.service";

const useLogin = () => {
  const { dispatch: dispatchAuth } = useAuth();

  const saveInStorage = async (res, saveInDB = true) => {
    localStorage.setItem(
      authKey,
      JSON.stringify({
        isAuth: true,
        user: res.user,
      })
    );
    if (!saveInDB) return;

    const users = await getUsers();
    const isRegistered = users.find((user) => user.id === res.user.uid);

    if (!isRegistered) saveUserInDB(res.user);
  };

  const signInGoogle = async () => {
    try {
      const res = await signInWithGoogle();

      if (!res) return;

      saveInStorage(res);

      dispatchAuth({
        type: AUTH_LOGIN,
        payload: res.user,
      });
      toast.success("Bienvenido!");

    } catch (error) {
      console.log("error: ", error);
      toast.error("Ocurrio un error")
      return;
    }
  };

  const signUpEmail = async (values, actions) => {
    try {
      if (!values) return;

      const res = await signUpWithEmail(values.email, values.password);

      if (!res) return;

      saveInStorage(res);

      dispatchAuth({
        type: AUTH_LOGIN,
        payload: res.user,
      });
      toast.success("Bienvenido!")
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("El correo ya esta en uso")
        console.log("El correo ya esta en uso");
        return;
      }

      if (error.code === "auth/invalid-email") {
        toast.error("El correo no es valido")
        console.log("El correo no es valido");
        return;
      }
    }
  };

  const signInEmail = async (values, actions) => {
    try {
      if (!values) return;

      const res = await signInWithEmail(values.email, values.password);

      if (!res) return;

      saveInStorage(res, false);

      dispatchAuth({
        type: AUTH_LOGIN,
        payload: res.user,
      });

      toast.success("Bienvenido!")
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        toast.error("El usuario no existe")
        console.log("El usuario no existe");
        return;
      }

      if (error.code === "auth/wrong-password") {
        toast.error("La contraseña es incorrecta")
        console.log("La contraseña es incorrecta");
        return;
      }
    }
  };

  return { signInEmail, signInGoogle, signUpEmail };
};

export default useLogin;
