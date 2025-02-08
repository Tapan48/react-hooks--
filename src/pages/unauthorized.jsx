"use client";

export default function UnauthorizedPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh]">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          Unauthorized Access
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Sorry, you don't have permission to access this page.
        </p>
        <a
          href="/login"
          className="inline-block bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Back to Login
        </a>
      </div>
    </div>
  );
}
