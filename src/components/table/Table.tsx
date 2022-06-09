import React, { ReactNode } from "react";
import "./table.scss";

interface Props {
  tableHead: string[];
  renderBody: () => ReactNode;
  title: string;
}

const Table: React.FC<Props> = (props) => {
  return (
    <div className="table">
      <div className="table-title">{props.title}</div>
      <table>
        <thead>
          <tr>
            {props.tableHead.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>{props.renderBody()}</tbody>
      </table>

      <div className="table-view">view all</div>
    </div>
  );
};

interface Customer {
  tableHead: string[];
  renderBody: () => ReactNode;
  viewCount: number;
  currentPage: number;
  totalPage: number[];
  onChangePage: (page: number) => void;
}

const TableCustomer: React.FC<Customer> = (props) => {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            {props.tableHead.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>{props.renderBody()}</tbody>
      </table>
      <ul className="pagination">
        {props.totalPage.map((item, index) => (
          <li
            className={`${props.currentPage === item ? "active" : ""}`}
            key={index}
            onClick={() => props.onChangePage(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Table;
export { TableCustomer };
