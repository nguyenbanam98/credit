import { createContext, useState, useEffect} from "react";
import * as firebase from "firebase";


export const DataContext = createContext({});

const useDataContext = () => {
  const [user, setUser] = useState({});

  const getUserAuth = () => {
    useEffect(() => {
      const getUser = async () => {
        const uid = firebase.auth().currentUser.uid;

        const snapshot = await firebase
          .firestore()
          .collection("users")
          .doc(uid)
          .get();

        if (snapshot.exists) {
          setUser(snapshot.data());
        }
      };

      getUser();
    }, [setUser]);
  };

  return {
    user,
    getUserAuth,
  };
};

export default useDataContext;
