import React from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  //   const expenseDate = new Date(2023, 4, 2);
  //   const expenseTitle = "Car Insurance";
  //   const expenseAmount = 294.67;
  //const [title, setTitle] = useState(props.title);

  //const clickHandler = () => {
  //  setTitle("Updated!!");
  //};

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/*<button onClick={clickHandler}>Change Title</button>*/}
      </Card>
    </li>
  );
};
//we can have only one root element
export default ExpenseItem;
