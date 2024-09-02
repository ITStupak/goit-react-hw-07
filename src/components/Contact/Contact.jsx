import { FaUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import { selectIsLoading } from "../../redux/contactsSlice";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <ul className={css["card-items"]}>
        <li className={css["card-item"]}>
          <FaUser />
          &nbsp;
          {name}
        </li>
        <li className={css["card-item"]}>
          <FaPhone />
          &nbsp;
          {number}
        </li>
      </ul>
      <button
        disabled={isLoading}
        type="button"
        className={css["card-btn"]}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete&nbsp;❌
      </button>
    </>
  );
};
export default Contact;
