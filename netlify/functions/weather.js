const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const handler = async (event) => {
  const { city } = event.queryStringParameters;

  const response = await fetch(apiUrl + city + `&appid=${process.env.API_KEY}`);

  const data = await response.json();
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};

module.exports = { handler };
