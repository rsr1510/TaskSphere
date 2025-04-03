import React from 'react';
import './Dashboard.css';
import { FaFire, FaClock, FaThumbsUp, FaBell } from 'react-icons/fa';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  // Sample data for charts
  const pendingTasksData = {
    labels: ['High', 'Medium', 'Low'],
    datasets: [
      {
        label: 'Number of Tasks',
        data: [12, 19, 8],
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const performanceData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Task Completion Rate',
        data: [65, 70, 68, 75, 82, 90],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
      {
        label: 'Efficiency Score',
        data: [60, 65, 70, 72, 78, 85],
        fill: false,
        borderColor: 'rgba(153, 102, 255, 1)',
        tension: 0.1,
      },
    ],
  };

  const completedWorkData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Bugs Fixed',
        data: [12, 15, 10, 8, 6, 9],
        backgroundColor: 'rgba(255, 99, 132, 0.7)',
      },
      {
        label: 'Features Developed',
        data: [8, 10, 12, 15, 20, 18],
        backgroundColor: 'rgba(54, 162, 235, 0.7)',
      },
      {
        label: 'Documents Completed',
        data: [5, 8, 7, 10, 12, 15],
        backgroundColor: 'rgba(75, 192, 192, 0.7)',
      },
    ],
  };

  const notificationsData = {
    labels: ['Mentions', 'Meeting Reminders', 'Deadlines', 'Project Updates'],
    datasets: [
      {
        data: [12, 19, 8, 15],
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  const barOptions = {
    ...chartOptions,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <div className="date-filter">
          <select>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 3 months</option>
            <option>Last 6 months</option>
            <option>Custom range</option>
          </select>
        </div>
      </div>

      <div className="stat-cards">
        <div className="stat-card">
          <div className="stat-icon high-priority">
            <FaFire />
          </div>
          <div className="stat-info">
            <h3>12</h3>
            <p>High Priority Tasks</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon medium-priority">
            <FaClock />
          </div>
          <div className="stat-info">
            <h3>19</h3>
            <p>Medium Priority Tasks</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon completed">
            <FaThumbsUp />
          </div>
          <div className="stat-info">
            <h3>42</h3>
            <p>Completed Tasks</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon notifications">
            <FaBell />
          </div>
          <div className="stat-info">
            <h3>24</h3>
            <p>Notifications</p>
          </div>
        </div>
      </div>

      <div className="chart-grid">
        <div className="chart-container">
          <h2>Pending Work Tracker</h2>
          <div className="chart-wrapper">
            <Pie data={pendingTasksData} options={chartOptions} />
          </div>
        </div>
        <div className="chart-container">
          <h2>Performance Improvement Analysis</h2>
          <div className="chart-wrapper">
            <Line data={performanceData} options={chartOptions} />
          </div>
        </div>
        <div className="chart-container">
          <h2>Completed Work Overview</h2>
          <div className="chart-wrapper">
            <Bar data={completedWorkData} options={barOptions} />
          </div>
        </div>
        <div className="chart-container">
          <h2>Notifications Dashboard</h2>
          <div className="chart-wrapper">
            <Doughnut data={notificationsData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;