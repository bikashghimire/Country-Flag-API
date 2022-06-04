import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";

import TableBody from "./TableBody";
import TableHead from "./TableHead";

import useCountries from "../../custom-hooks/useCountries";

const CountryTable = () => {
  const [countries, error] = useCountries();

  if (error) {
    return <p>Something went wrong</p>;
  }

  return (
    <TableContainer>
      <Table>
        <TableHead />
        <TableBody countries={countries} />
      </Table>
    </TableContainer>
  );
};

export default CountryTable;
