import { ToastContainer } from "react-toastify";
import { GetAllOrders } from "../../utils/getOrders";

function Orders() {
  const { items } = GetAllOrders();

  return (
    <section className="page-panel">
      <ToastContainer />

      <div className="page-header">
        <div>
          <h1>Orders</h1>
          <p>
            Track customer purchases, payment totals, and fulfillment status.
          </p>
        </div>

        <button type="button">Export</button>
      </div>

      <div className="admin-table full">
        <div className="admin-table-row table-head">
          <span>Order</span>
          <span>Customer</span>
          <span>Product</span>
          <span>Total</span>
          <span>Status</span>
        </div>

        {items.map((orders) => (
          <div className="admin-table-row" key={orders._id}>
            <span>
              <strong>{orders.orderNumber}</strong>
            </span>

            <span>{orders.customer}</span>

            <span>{orders.product}</span>

            <span>{orders.total}</span>

            <span>
              <em className={`status-pill ${orders.status.toLowerCase()}`}>
                {orders.status}
              </em>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Orders;