import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [tours, setTours] = useState([]);
  let errorText = "";

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (e) {
      setLoading(false);
      setError(true);
      errorText = e.toString();
      console.log(errorText);
    }
    console.log(tours);
  };

  // use effect
  useEffect(() => {
    fetchTours();
  }, []);

  // if loading
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  // if error
  if (error) {
    return (
      <main>
        <h2>There is following error detected: {errorText}</h2>
      </main>
    );
  }
  // default return
  return (
    <main>
      <Tours tours={tours} />
    </main>
  );
}

export default App;
