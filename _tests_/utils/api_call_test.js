// import fetching_API from "../../src/utils/api-call";
const api_call = require("../../src/utils/api_call");
const data = require("../mocks/data.json");

test("Should return correctly formatted JSON response", () => {
	let expectedRes = data.entry;
   let actualRes = api_call.fetching_API();
	expect(actualRes).toBe(expectedRes);
});