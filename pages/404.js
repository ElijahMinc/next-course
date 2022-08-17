import { useEffect } from "react";
import { useRouter } from "next/router";
import Heading from "../components/Heading";

const Error = () => {
  const router = useRouter();
  
  useEffect(() => {
   setTimeout(() => {
      router.push('/')
   }, 2000)
  }, [])
  return (
    <>
      <Heading tag="h2" text="Error: 404" />

      <p>Something is going wrong...</p>
    </>
  );
};

export default Error;
