function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-6">
          Oops! The page you are looking for does not exist.
        </p>
        <a
          href="/"
          className="inline-block bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-all"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}

export default NotFound;
