import React from "react";
import "./boxdata.scss";

interface Props {
  icon: any;
  title: string;
  note: string;
}

const BoxData: React.FC<Props> = (props) => {
  return (
    <div className="box-data">
      <div className="box-data__avatar">{props.icon}</div>
      <div className="box-data__wrapper">
        <div className="title">{props.title}</div>
        <div className="note">{props.note}</div>
      </div>
    </div>
  );
};

export default BoxData;
