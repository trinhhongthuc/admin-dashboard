import React, { useCallback, useEffect, useMemo, useState } from "react";
import DataList from "../../assets/top-customers.json";
import { TableCustomer } from "./../../components/table/Table";
import "./ticker.scss";

const PAGE_COUNT = 10;

interface Customer {
  id: number;
  name: string;
  email: string;
  location: string;
  phone: string;
  total_spend: string;
  total_orders: number;
}

const Ticker = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [dataList, setDataList] = useState<Customer[]>([]);

  const renderBodyOrder = useCallback(() => {
    return dataList.map((item, index) => {
      return (
        <tr key={index}>
          <td> {item.id}</td>

          <td> {item.name}</td>
          <td> {item.email}</td>
          <td> {item.phone}</td>
          <td> {item.total_orders}</td>
          <td> {item.total_spend}</td>
          <td> {item.location}</td>
        </tr>
      );
    });
  }, [dataList]);

  useEffect(() => {
    setDataList(DataList.slice(0, PAGE_COUNT));
  }, []);

  const totalPage = useMemo(() => {
    const page = Math.floor(DataList.length / PAGE_COUNT);
    let listItemPage = [];

    for (let index = 1; index <= page; index++) {
      listItemPage.push(index);
    }
    return listItemPage;
  }, []);

  const handleChangeCurrentPage = (page: number) => {
    setCurrentPage(page);
    setDataList(
      DataList.slice(page * PAGE_COUNT - PAGE_COUNT, page * PAGE_COUNT)
    );
  };

  return (
    <div className="ticker">
      <div className="ticker-title row">Customer</div>
      <div className="row">
        <div className="col-12">
          <TableCustomer
            tableHead={[
              "",
              "Name",
              "Email",
              "Phone",
              "Total orders",
              "Total spend",
              "Location",
            ]}
            renderBody={renderBodyOrder}
            viewCount={PAGE_COUNT}
            currentPage={currentPage}
            totalPage={totalPage}
            onChangePage={handleChangeCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Ticker;
