import Heading from "../../components/Heading"
import Head from "next/head"
import Link from "next/link"
import { useState, useEffect } from "react"

export const getStaticProps = async () => { // для асинхронных запросов на сервере

  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await response.json()
  // const data = null

  if (!data) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      contacts: data,
    },
  }
}

const Contacts = ({ contacts }) => {
  // const [state, setState] = useState([]);

  // useEffect(() => {
  //   console.log("mount");

  //   return () => {
  //     console.log("unmount");
  //   };
  // }, []);
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text="CONTACTS list" />

      <ul>
        {contacts.map((contact) => (
          <li
            key={contact.id}
            style={{
              marginTop: "10px",
            }}
          >
            <Link href={`/contacts/${contact.id}`}>
              <a className="active">Go to {contact.name} info</a>
            </Link>
          </li>
        ))}
      </ul>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore rem
        vitae illo aperiam? Iste, enim.
      </p>
    </>
  )
}

export default Contacts
