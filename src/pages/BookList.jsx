import { Link } from "react-router-dom";

const BookList = () => {
  return (
    <>
      <div>Book List</div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          background: "green",
          color: "orange",
        }}
      >
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to="/books/1"
        >
          Book 1
        </Link>
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to="/books/2"
        >
          Book 2
        </Link>
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to="/books/new"
        >
          New Book
        </Link>
      </div>
    </>
  );
};

export default BookList;
