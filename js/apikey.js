// Get call to AWS lambda via API Gateway (get API keys)
export async function fetchData() {
    const apiEndpoint = "https://i1e37aj3ul.execute-api.us-east-1.amazonaws.com/prod/keys";
    
    
    try {
      const response = await fetch(apiEndpoint, {
        method: 'GET',
        mode: 'cors', 
    });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }