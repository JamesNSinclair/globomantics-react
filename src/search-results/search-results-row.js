import { useNavigate as useHistory } from "react-router-dom";
import "./search-results.css";

const SearchResultsRow = ({ house }) => {
  const history = useHistory();

  const setActive = () => {
    history(`/house/${house.id}`);
  };

  return (
    <tr onClick={setActive}>
      <td>{house.address}</td>
      <td>{house.price}</td>
      <td>{house.likes}</td>
    </tr>
  );
};

export default SearchResultsRow;
