import { Input } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useState, useContext } from "react";
import SearchContext from "../../context/SearchContext";
import styles from "./styles.module.css";

const Header = () => {
  const [value, setValue] = useState("");
  const { setSearch } = useContext(SearchContext);
  const handleSubmit = () => {
    setSearch(value);
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className={styles.header}>
      <Input
        placeholder={"Kitap İsmi"}
        width={"25vw"}
        onChange={handleChange}
      />
      <Button
        colorScheme={"teal"}
        variant={"outline"}
        onClick={() => handleSubmit()}
      >
        Search
      </Button>
    </div>
  );
};

export default Header;
