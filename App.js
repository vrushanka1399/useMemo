import React, { useState, useCallback, useMemo } from "react";
import DemoList from "./components/Demo/DemoList";
import Button from "./components/UI/Button";

function App() {
  const [isDescending, setIsDescending] = useState(false);

  // This array will NOT be recreated on every render
  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  // Toggle sort order (memoized)
  const toggleSortHandler = useCallback(() => {
    setIsDescending(prev => !prev);
  }, []);

  // Memoized sorted list based on isDescending
  const sortedList = useMemo(() => {
    console.log("Sorting only when needed...");
    const sorted = [...listItems].sort((a, b) =>
      isDescending ? b - a : a - b
    );
    return sorted;
  }, [isDescending, listItems]);

  return (
    <div className="app">
      <DemoList title="My List" items={sortedList} />

      <Button onClick={toggleSortHandler}>
        {isDescending ? "Change to Ascending Order" : "Change to Descending Order"}
      </Button>
    </div>
  );
}

export default App;
