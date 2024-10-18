import { useState, useEffect } from "react";
import { useAuth } from "../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinners from "../../Atoms/Spinners";

export default function AdminRoute() {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();
 

  useEffect(() => {
    const authCheck = async () => {
      const headers = {
        Authorization: `Bearer ${auth.token}`,
      };
      const res = await axios.get("/api/v1/auth/admin-auth", { headers });
      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
      
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Spinners />;
}
