// Imagine you have two components that both need to fetch data from an API and manage loading and error states. Without custom hooks, you might have something like this:

////////////////////////////////  code without custom hooks
function UserProfile() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.example.com/user")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return <div>{data.name}</div>;
}

function ProductList() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.example.com/products")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <ul>
      {data.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}

//   Notice how both components have very similar logic for fetching data, managing loading state, and handling errors. This is where we can extract this common logic into a custom hook:

////////////////////////////////  code using custom hooks

function useFetch(url) {
  ////custom hook that reusable logic for fetching data, managing loading state, and handling errors
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

//   Now, we can simplify our components:

function UserProfile() {
  const { data, loading, error } = useFetch("https://api.example.com/user");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return <div>{data.name}</div>;
}

function ProductList() {
  const { data, loading, error } = useFetch("https://api.example.com/products");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <ul>
      {data.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}

//By extracting the fetching logic into a custom hook (useFetch), we've:

// 1.)Reduced repetition in our components
// 2.)Made our components cleaner and more focused on rendering
// 3.)Created a reusable piece of logic that can be used across our entire application

// This is what we mean by "extracting component logic into reusable functions." The custom hook becomes a reusable function that encapsulates a specific piece of logic, making our components simpler and our code more modular.
