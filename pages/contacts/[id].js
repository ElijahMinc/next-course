import Heading from "../../components/Heading"
import ContactInfo from "../../components/ContactInfo"

export const getServerSideProps = async (context) => {
  console.log("context", context)
  const { id } = context.params
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  )
  const data = await response.json()
  // const data = null

  if (!data) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      contact: data,
    },
  }
}

const Contact = ({ contact }) => {
  const { name, email, phone } = contact

  return (
    <>
      <Heading text="Users:" />
      <ContactInfo {...{ name, email, phone }} />
    </>
  )
}

export default Contact
