"use client";

import { useContext } from "react";
import { AuthContext } from "../context/ContextProvider";

export default function UserPage() {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex flex-col space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Welcome, {user}!</h1>
        <div className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">
          User Dashboard
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Profile Overview</h2>
          <div className="space-y-3">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
              <div>
                <p className="font-medium">{user}</p>
                <p className="text-sm text-gray-500">Standard User</p>
              </div>
            </div>
            <div className="pt-4">
              <p className="text-sm text-gray-600">
                Last login: Today at 9:30 AM
              </p>
              <p className="text-sm text-gray-600">Member since: Jan 2024</p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-gray-600">Logged in</p>
              <span className="text-sm text-gray-500">2 hours ago</span>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-gray-600">Profile updated</p>
              <span className="text-sm text-gray-500">Yesterday</span>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-gray-600">Password changed</p>
              <span className="text-sm text-gray-500">3 days ago</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
            <span className="block text-blue-700 font-medium">
              Edit Profile
            </span>
          </button>
          <button className="p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
            <span className="block text-green-700 font-medium">Messages</span>
          </button>
          <button className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
            <span className="block text-purple-700 font-medium">Settings</span>
          </button>
          <button className="p-4 bg-red-50 hover:bg-red-100 rounded-lg transition-colors">
            <span className="block text-red-700 font-medium">Help</span>
          </button>
        </div>
      </div>
    </div>
  );
}
