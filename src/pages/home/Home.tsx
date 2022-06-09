import LocalMallIcon from "@mui/icons-material/LocalMall";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import React, { useCallback } from "react";
import Chart from "react-apexcharts";
import DataList from "../../assets/top-customers.json";
import BoxData from "../../components/boxdata/BoxData";
import Table from "./../../components/table/Table";
import "./home.scss";

const data = {
  options: {
    chart: {
      id: "chart dashboard",
    },
    xaxis: {
      categories: [1, 2, 3, 4, 5, 6, 7],
    },
  },
  series: [
    {
      name: "Online customer",
      data: [30, 40, 35, 50, 49, 60],
    },

    {
      name: "Store customer",
      data: [10, 18, 22, 43, 36, 55],
    },
  ],
};

const boxData = [
  {
    icon: <LocalMallIcon />,
    title: "1,9995",
    note: "total sales",
  },
  {
    icon: <ShoppingCartIcon />,
    title: "2,001",
    note: "daily visits",
  },
  {
    icon: <MonetizationOnIcon />,
    title: "2,6322",
    note: "total income",
  },
  {
    icon: <TextSnippetIcon />,
    title: "1,1771",
    note: "total orders",
  },
];

const latestOrders = {
  header: ["order id", "user", "total price", "date", "status"],
  body: [
    {
      id: "#OD1711",
      user: "john doe",
      date: "17 Jun 2021",
      price: "$900",
      status: "shipping",
    },
    {
      id: "#OD1712",
      user: "frank iva",
      date: "1 Jun 2021",
      price: "$400",
      status: "paid",
    },
    {
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      price: "$200",
      status: "pending",
    },
    {
      id: "#OD1712",
      user: "frank iva",
      date: "1 Jun 2021",
      price: "$400",
      status: "paid",
    },
    {
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      price: "$200",
      status: "refund",
    },
  ],
};

const Home = () => {
  const renderBodyOrder = useCallback(() => {
    return latestOrders.body.slice(0, 5).map((item, index) => {
      return (
        <tr key={index}>
          <td> {item.id}</td>
          <td> {item.user}</td>
          <td> {item.date}</td>
          <td> {item.price}</td>
          <td> {item.status}</td>
        </tr>
      );
    });
  }, []);

  const renderBodyCustomer = useCallback(() => {
    return DataList.slice(0, 5).map((item, index) => {
      return (
        <tr key={index}>
          <td> {item.name}</td>
          <td> {item.total_orders}</td>
          <td> {item.total_spend}</td>
        </tr>
      );
    });
  }, []);

  return (
    <div className="dashboard">
      <h2 className="dashboard-title">Dashboard</h2>
      <div className="dashboard-wrapper row">
        <div className="col-6 row ">
          {boxData.map((item, index) => (
            <div className="col-6 box-content" key={index}>
              <BoxData icon={item.icon} title={item.title} note={item.note} />
            </div>
          ))}
        </div>
        <div className="col-6 chart-col">
          <div className="chart-col-wrapper">
            <Chart
              options={data.options}
              series={data.series}
              type="line"
              height={300}
            />
          </div>
        </div>
      </div>
      <div className="row flex">
        <div className="col-5">
          <Table
            tableHead={["User", "Total orders", "Total Spending"]}
            renderBody={renderBodyCustomer}
            title="Top Customer"
          />
        </div>

        <div className="col-7">
          <Table
            tableHead={["Order id", "User", "Total price", "Date", "Status"]}
            renderBody={renderBodyOrder}
            title="Laster Orders"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
