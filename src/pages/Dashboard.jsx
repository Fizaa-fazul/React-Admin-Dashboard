
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";

function Dashboard(){
    const users = [
  { name: "Ali", email: "ali@gmail.com", status: "Active", role: "Admin" },
  { name: "Sara", email: "sara@gmail.com", status: "Inactive", role: "User" }
];

const revenueData = [
    {month: "Jan", revenue: 4000},
    {month: "Feb", revenue: 5000},
    {month: "Mar", revenue: 6500},
    {month: "Apr", revenue: 4500},
    {month: "May", revenue: 7000},
    {month: "Jun", revenue: 3800},

];
    
    return(
        <div className="p-4 md:p-6 bg-gray-200 flex-1 overflow-y-auto space-y-6">

          
            <h1 className="text-4xl font-bold text-gray-800">Welcome Back, Admin</h1>
            <p className="text-sm text-gray-500 mb-8 mt-2">Monitor your business performance</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition ">
                    <h1 className="text-sm font-semibold text-gray-500">Revenue</h1>
                    <p className="text-lg font-bold mt-1">$12,450</p>
                    <p className="text-sm text-blue-600">+8% this month</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
                      <h1 className="text-sm font-semibold text-gray-500">Users</h1>
                    <p className="text-lg font-bold mt-1">1,284</p>
                    <p className="text-sm text-blue-600">+12 new today</p>

                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
                      <h1 className="text-sm font-semibold text-gray-500">Sales</h1>
                    <p className="text-lg font-bold mt-1">324</p>
                    <p className="text-sm text-blue-600">+5% this week</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
                      <h1 className="text-sm font-semibold text-gray-500">Growth</h1>
                    <p className="text-lg font-bold mt-1">18%</p>
                    <p className="text-sm text-blue-600">steady increase</p>
                </div>
            </div>
           
           <div className="bg-white p-4 md:p-8 rounded-xl shadow-md mt-4">
    
    <h1 className="font-bold text-2xl md:text-4xl text-gray-800 mb-4">
        Recent Users
    </h1>

    <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] text-sm md:text-base">
            <thead className="sticky top-0 bg-white">
                <tr className="text-left border-b">
                    <th className="p-3">Name</th>
                    <th className="p-3">Email</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Role</th>
                </tr>
            </thead>

            <tbody>
                {users.map((user, index) => (
                    <tr key={index} className="border-b hover:bg-gray-100 transition">
                        <td className="p-3">{user.name}</td>
                        <td className="p-3">{user.email}</td>
                        <td className="p-3">
                            <span
                                className={`px-3 py-1 text-sm rounded-full font-bold ${
                                    user.status === "Active"
                                        ? "bg-green-100 text-green-600"
                                        : "bg-red-100 text-red-600"
                                }`}
                            >
                                {user.status}
                            </span>
                        </td>
                        <td className="p-3">{user.role}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>

</div>

<div className="bg-white rounded-xl shadow-md p-6 mt-6">
    <h2 className="text-xl font-bold text-gray-800 mb-4" >Revenue Overview</h2>
    <div className="w-full h-56 sm:h-64 md:h-72">
        <ResponsiveContainer  width="100%" height= "100%" >
            <LineChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month"/>
            <YAxis/>
            <Tooltip/>
            <Line
            type="monotone"
            dataKey= "revenue"
            stroke="#2563eb"
            strokeWidth={3}
            dot = {{ r:5 }}
            />
            </LineChart>

        </ResponsiveContainer>
    </div>

</div>
        </div>
    )
}
export default Dashboard;