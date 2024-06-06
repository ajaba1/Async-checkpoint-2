async function iterateWithAsyncAwait(values) {
  for (const value of values) {
    console.log(value);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
}

// Example usage
const values = [1, 2, 3, 4, 5];
iterateWithAsyncAwait(values);

// Simulate an API call with a delay
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: "Fetched Data" });
    }, 2000); // Simulate a 2 second delay for the API call
  });
}

async function awaitCall() {
  try {
    console.log("Fetching data...");
    const response = await fetchData();
    console.log("Data received:", response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Example usage
awaitCall();

// Simulate an API call with a delay, with the possibility of failure
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate success or failure
      const success = Math.random() > 0.5;
      if (success) {
        resolve({ data: "Fetched Data" });
      } else {
        reject(new Error("Failed to fetch data"));
      }
    }, 2000); // Simulate a 2 second delay for the API call
  });
}

// Handling Errors with Async/Await
async function awaitCall() {
  try {
    console.log("Fetching data...");
    const response = await fetchData();
    console.log("Data received:", response.data);
  } catch (error) {
    console.error("Error fetching data. Please try again later.");
  }
}

// Example usage
awaitCall();

// Async function with a 1-second delay and a log message
async function asyncFunction1() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("Function 1 executed");
}

// Async function with a 1-second delay and a log message
async function asyncFunction2() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("Function 2 executed");
}

// Async function with a 1-second delay and a log message
async function asyncFunction3() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("Function 3 executed");
}

async function chainedAsyncFunctions() {
  await asyncFunction1();
  await asyncFunction2();
  await asyncFunction3();
}

// Example usage
chainedAsyncFunctions();

// Simulate an API call with a delay
function fetchData1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: "Fetched Data 1" });
    }, 2000); // Simulate a 2 second delay for the API call
  });
}

// Simulate another API call with a delay
function fetchData2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: "Fetched Data 2" });
    }, 3000); // Simulate a 3 second delay for the API call
  });
}

async function concurrentRequests() {
  try {
    console.log("Fetching data concurrently...");
    const [response1, response2] = await Promise.all([
      fetchData1(),
      fetchData2(),
    ]);
    console.log("Data received:", response1.data, response2.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Example usage
concurrentRequests();

// Simulate fetching data from a URL with a delay
function fetchFromUrl(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate success or failure randomly
      if (Math.random() > 0.2) {
        resolve(`Fetched data from ${url}`);
      } else {
        reject(new Error(`Failed to fetch data from ${url}`));
      }
    }, 1000); // Simulate a 1 second delay for the API call
  });
}

async function parallelCalls(urls) {
  try {
    console.log("Fetching data from URLs concurrently...");
    const fetchPromises = urls.map((url) => fetchFromUrl(url));
    const responses = await Promise.all(fetchPromises);
    console.log("Data received from all URLs:", responses);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Example usage
const urls = [
  "https://api.example.com/data1",
  "https://api.example.com/data2",
  "https://api.example.com/data3",
];
parallelCalls(urls);
