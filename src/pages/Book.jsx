import { useParams } from "react-router-dom";

const Book = () => {
  const { id } = useParams();
  return <div style={{ color: "red" }}>Book {id}</div>;
};

export default Book;
