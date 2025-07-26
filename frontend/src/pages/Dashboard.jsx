// import React from "react";
// import Navbar2 from "../components/Navbar2";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import {
//   Lightbulb,
//   DollarSign,
//   Users,
//   Rocket,
//   PlusCircle,
//   Badge,
//   BarChart2,
// } from "lucide-react";

// const data = [
//   { month: "Feb", count: 3 },
//   { month: "Mar", count: 5 },
//   { month: "Apr", count: 2 },
//   { month: "May", count: 4 },
//   { month: "Jun", count: 6 },
//   { month: "Jul", count: 7 },
// ];

// const Dashboard = () => {
//   return (
//     <div className="flex flex-col min-h-screen bg-white">
//       <Navbar2 />

//       <main className="flex-grow p-4 sm:p-6 md:p-10 max-w-7xl mx-auto">
//         {/* <h1 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-6">
//           Dashboard
//         </h1> */}

//         {/* Top Stats */}
//         <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-7">
//           {/* Card 1 */}

//           <div className="bg-white shadow-md rounded-lg border border-gray-200 p-6 h-42 flex flex-col justify-between">
//             <div>
//               <div className="flex items-center justify-between mb-2">
//                 <h2 className="text-lg font-semibold text-gray-700">
//                   Total Pitches Made
//                 </h2>
//                 <Lightbulb className="text-yellow-500 w-5 h-5" />
//               </div>
//               <div className="text-4xl font-bold text-gray-800">24</div>
//               <p className="text-sm text-gray-500 mt-1">
//                 Across all your projects
//               </p>
//             </div>
//           </div>

//           <div className="bg-white shadow-md rounded-lg border border-gray-200 p-6 h-42 flex flex-col justify-between">
//             <div>
//               <div className="flex items-center justify-between mb-2">
//                 <h2 className="text-lg font-semibold text-gray-700">
//                   Coins Earned
//                 </h2>
//                 <DollarSign className="text-green-500 w-5 h-5" />
//               </div>
//               <div className="text-4xl font-bold text-gray-800">1200</div>
//               <p className="text-sm text-gray-500 mt-1">
//                 Rewards from successful pitches
//               </p>
//             </div>
//           </div>

//           {/* Card 3 */}

//           <div className="bg-white shadow-md rounded-lg border border-gray-200 p-6 h-42 flex flex-col justify-between">
//             <div>
//               <div className="flex items-center justify-between mb-2">
//                 <h2 className="text-lg font-semibold text-gray-700">
//                   Teams Joined
//                 </h2>
//                 <Users className="text-blue-500 w-5 h-5" />
//               </div>
//               <div className="text-4xl font-bold text-gray-800">5</div>
//               <p className="text-sm text-gray-500 mt-1">
//                 Collaborate with others
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Lower Cards Section */}
//         <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {/* Quick Actions */}

//           <div className="bg-white shadow-md rounded-lg border border-gray-200 p-5 h-82 flex flex-col">
//             {/* Header */}
//             <div className="flex items-center justify-between mb-4">
//               <h2 className="text-lg font-semibold text-gray-700">
//                 Quick Actions
//               </h2>
//               <Rocket className="text-purple-600 w-5 h-5" />
//             </div>

//             {/* Centered Button + Text */}
//             <div className="flex-1 flex flex-col items-center justify-center gap-2">
//               <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
//                 <PlusCircle className="w-5 h-5" />
//                 <span>Create New Pitch</span>
//               </button>
//               <p className="text-sm text-gray-500">
//                 Start a fresh pitch idea right away.
//               </p>
//             </div>
//           </div>

//           {/* Monthly Pitch Activity */}
//           <div className="bg-white shadow-md rounded-lg border border-gray-200 p-6 flex flex-col h-82">
//             <div className="mb-3">
//               <div className="flex items-center justify-between mb-1">
//                 <h2 className="text-lg font-semibold text-gray-700">
//                   Monthly Pitch Activity
//                 </h2>
//                 <BarChart2 className="text-blue-600 w-5 h-5" />
//               </div>
//               <p className="text-sm text-gray-500">
//                 Your pitch submissions over the last 6 months.
//               </p>
//             </div>
//             <ResponsiveContainer width="100%" height="100%">
//               <BarChart data={data}>
//                 <XAxis dataKey="month" />
//                 <YAxis
//                   allowDecimals={false}
//                   ticks={[5, 10, 15, 20]}
//                   domain={[0, 20]}
//                 />
//                 <Tooltip />
//                 <Bar dataKey="count" fill="#2563eb" radius={[4, 4, 0, 0]} />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>

//           <div className="bg-white shadow-md rounded-lg border border-gray-200 p-6 flex flex-col h-82">
//             {/* Header */}
//             <div className="flex items-center justify-between mb-4">
//               <h2 className="text-lg font-semibold text-gray-700">
//                 Current Streak
//               </h2>
//               <Badge className="text-orange-500 w-5 h-5" />
//             </div>

//             {/* Centered Text */}
//             <div className="flex-1 flex flex-col items-center justify-center gap-1">
//               <div className="text-4xl font-bold text-gray-800">3 Weeks</div>
//               <p className="text-sm text-gray-500">
//                 Consecutive active pitching
//               </p>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;


import React from "react";
import Navbar2 from "../components/Navbar2";
import RecentPitches from "./RecentPitches";
import Footer from "../components/Footer";
import Dash_Cards from "./Dash_Cards";

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Top Navigation */}
      <Navbar2 />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Dashboard Cards */}
        <section className="px-4 sm:px-6 md:px-10 pt-6">
          <Dash_Cards />
        </section>

        {/* Recent Pitches */}
        <section className="px-4 sm:px-6 md:px-10">
          <RecentPitches />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Dashboard;

