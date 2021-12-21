import "./widgetLg.css";

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <th className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLa">Susan Carols</span>
          </th>
          <th className="widgetLgDate">2 Jun 2021</th>
          <th className="widgetLgAmount">$122.00</th>
          <th className="widgetLgStatus">
            <Button type="Approved" />
          </th>
        </tr>
        <tr className="widgetLgTr">
          <th className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLa">Susan Carols</span>
          </th>
          <th className="widgetLgDate">2 Jun 2021</th>
          <th className="widgetLgAmount">$122.00</th>
          <th className="widgetLgStatus">
            <Button type="Declined" />
          </th>
        </tr>
        <tr className="widgetLgTr">
          <th className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLa">Susan Carols</span>
          </th>
          <th className="widgetLgDate">2 Jun 2021</th>
          <th className="widgetLgAmount">$122.00</th>
          <th className="widgetLgStatus">
            <Button type="Pending" />
          </th>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLg;
