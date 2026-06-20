import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  ArrowDown,
  ArrowUp,
  MoreVertical,
  Package,
  ShoppingCart,
  Users,
} from "lucide-react";

const monthlySales = [
  { month: "Jan", sales: 155 },
  { month: "Feb", sales: 378 },
  { month: "Mar", sales: 190 },
  { month: "Apr", sales: 285 },
  { month: "May", sales: 175 },
  { month: "Jun", sales: 184 },
  { month: "Jul", sales: 278 },
  { month: "Aug", sales: 98 },
  { month: "Sep", sales: 205 },
  { month: "Oct", sales: 382 },
  { month: "Nov", sales: 266 },
  { month: "Dec", sales: 102 },
];

const statistics = [
  { day: "Mon", revenue: 142, orders: 98 },
  { day: "Tue", revenue: 188, orders: 132 },
  { day: "Wed", revenue: 174, orders: 120 },
  { day: "Thu", revenue: 245, orders: 162 },
  { day: "Fri", revenue: 225, orders: 148 },
  { day: "Sat", revenue: 280, orders: 176 },
  { day: "Sun", revenue: 238, orders: 151 },
];

const topProducts = [
  { name: "Lounge Deep Sofa", category: "Living room", sales: 312, stock: 44 },
  { name: "Curved Back Chair", category: "Dining", sales: 226, stock: 31 },
  { name: "Janod Rainbow Toy", category: "Kids", sales: 188, stock: 52 },
];

function IndexDashboard() {
  return (
    <div className="dashboard-page">
      <section className="stats-grid">
        <article className="metric-card">
          <span className="metric-icon">
            <Users size={23} />
          </span>
          <p>Customers</p>
          <div className="metric-row">
            <h2>3,782</h2>
            <span className="trend trend-up">
              <ArrowUp size={15} />11.01%
            </span>
          </div>
        </article>

        <article className="metric-card">
          <span className="metric-icon">
            <ShoppingCart size={23} />
          </span>
          <p>Orders</p>
          <div className="metric-row">
            <h2>5,359</h2>
            <span className="trend trend-down">
              <ArrowDown size={15} />9.05%
            </span>
          </div>
        </article>

        <article className="target-card">
          <div className="card-heading">
            <div>
              <h2>Monthly Target</h2>
              <p>Target you've set for each month</p>
            </div>
            <MoreVertical size={22} />
          </div>
          <div className="gauge-wrap">
            <div className="gauge">
              <span>75.55%</span>
              <small>+10%</small>
            </div>
          </div>
          <p className="target-copy">
            You earn $3287 today, it's higher than last month. Keep up your good
            work!
          </p>
          <div className="target-summary">
            <span>
              Target<strong>$20K</strong>
            </span>
            <span>
              Revenue<strong>$20K</strong>
            </span>
            <span>
              Today<strong>$20K</strong>
            </span>
          </div>
        </article>
      </section>

      <section className="dashboard-grid">
        <article className="panel-card sales-panel">
          <div className="card-heading">
            <h2>Monthly Sales</h2>
            <MoreVertical size={22} />
          </div>
          <div className="chart-area">
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={monthlySales}>
                <CartesianGrid vertical={false} stroke="#edf2f7" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip cursor={{ fill: "#f5f7ff" }} />
                <Bar dataKey="sales" radius={[8, 8, 0, 0]} barSize={18}>
                  {monthlySales.map((entry) => (
                    <Cell key={entry.month} fill="#465fff" />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </article>

        <article className="panel-card">
          <div className="card-heading">
            <div>
              <h2>Statistics</h2>
              <p>Revenue and order movement this week</p>
            </div>
            <div className="period-tabs">
              <button type="button" className="active">Monthly</button>
              <button type="button">Quarterly</button>
              <button type="button">Annually</button>
            </div>
          </div>
          <div className="chart-area">
            <ResponsiveContainer width="100%" height={245}>
              <LineChart data={statistics}>
                <CartesianGrid vertical={false} stroke="#edf2f7" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#465fff"
                  strokeWidth={3}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="orders"
                  stroke="#12b76a"
                  strokeWidth={3}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </article>

        <article className="panel-card products-panel">
          <div className="card-heading">
            <div>
              <h2>Top Products</h2>
              <p>Best sellers in your store</p>
            </div>
            <Package size={22} />
          </div>
          <div className="admin-table">
            {topProducts.map((product) => (
              <div className="admin-table-row" key={product.name}>
                <span>
                  <strong>{product.name}</strong>
                  <small>{product.category}</small>
                </span>
                <span>{product.sales} sales</span>
                <span>{product.stock} stock</span>
              </div>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}

export default IndexDashboard;
