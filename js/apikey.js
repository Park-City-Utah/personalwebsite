// Get call to AWS lambda via API Gateway (get API keys)
export async function fetchData() {
    // Replace with your actual API Gateway endpoint URL
    const apiEndpoint = "https://pa3eqpuwwa.execute-api.us-east-1.amazonaws.com/prod/";

    try {
      const response = await fetch(apiEndpoint);
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      //console.log(data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
    return data;
  }