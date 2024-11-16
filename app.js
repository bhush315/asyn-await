const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
//////////////
async function iterateWithAsyncAwait(values) {
  for (let value of values) {
    await delay(1000);
    console.log(value);
  }
}

const values = ["apple", "banana", "cherry", "date"];
console.log(iterateWithAsyncAwait(values));

const simulateApiCall = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve("Fetched data from API!"), 2000)
  );
//////////////////////
async function awaitCall() {
  try {
    console.log("Fetching data...");
    const data = await simulateApiCall();
    console.log("API Response:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

console.log(awaitCall());

const simulateApiCallWithError = () =>
  new Promise((_, reject) =>
    setTimeout(() => reject("API call failed!"), 2000)
  );
//////////////////////
async function awaitCall() {
  try {
    console.log("Fetching data...");
    const data = await simulateApiCallWithError();
    console.log("API Response:", data);
  } catch (error) {
    console.error("Something went wrong, please try again later.");
    console.error("Error:", error);
  }
}

console.log(awaitCall());
