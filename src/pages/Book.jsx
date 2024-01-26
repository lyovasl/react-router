import { useOutletContext, useParams } from "react-router-dom";

const Book = () => {
  const { id } = useParams();
  const obj = useOutletContext();

  return (
    <div style={{ color: "red" }}>
      Book {id} {obj.hello}
    </div>
  );
};

export default Book;
