import { useMemo, useState } from "react";

//Components
import DataSetCard from "./DataSetCard";
import Pagination from "./Pagination";

import data from "../utils/testDataPagination.json";

let pageSize = 9;

const DataSetCardsContainer = ({ dataSets, length = 6 }) => {
  //Limits the amount of cards we output with the components
  const slicedData = dataSets?.slice(0, length);

  const [currentPage, setCurrentPage] = useState(1);

  //=================================================
  //Use in case pagination is not done in the back end
  //Pass in the whole data received and it will take care of displaying
  //the right data.

  // const currentTableData = useMemo(() => {
  //   const firstPageIndex = (currentPage - 1) * pageSize;
  //   const lastPageIndex = firstPageIndex + pageSize;
  //   return data.slice(firstPageIndex, lastPageIndex);
  // }, [currentPage]);

  //=================================================

  return (
    <div className="dataSetCardsContainer">
      {slicedData?.map((dataSet, index) => (
        <DataSetCard dataSet={dataSet} key={dataSet.id} />
      ))}

      <Pagination
        className="paginationBar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={pageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default DataSetCardsContainer;
