import { useEffect, useState, useCallback } from "react";
import axios from "axios";

export const useAllCountries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCountries = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
      );
      setCountries(response.data.countries);
      setError(null); // Clear any existing errors
    } catch (err: any) {
      setError(err);
      setCountries([]); // Clear any existing data
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  return { countries, loading, error };
};
