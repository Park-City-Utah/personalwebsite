const { Configuration, OpenAIApi } = require("openai");
const readline = require('readline');
const fs = require("fs");
require('colors')

// Read the HTML file synchronously
const resume = fs.readFileSync('../chatbot/src/assets/ParkerFergusonResume.txt', 'utf-8');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Initialize prompt, updatable
let initialPrompt = "You are a helpful chatbot that is embedded in a personal website for Parker Ferguson. The webiste has content has job and educaiton history as well as recommendatations from previous colleagues. You will answer questions about Parker when prompted, in a promotional tone as if you are representing him for a potential job interview. The content is provided as a text file as is some linkedIn recommendations from colleagues.";

// Initialize conversation history
let conversationHistory = [
  { role: 'system', content: initialPrompt },
  { role: 'system', content: resume },
];

/**
 * Generate a response from the chatbot.
 * @param {string} userInput - The user's input to be sent to the chatbot.
 * @returns {Promise<string>} The chatbot's response to the user's input.
 */
const generateResponse = async (userInput) => {
  try {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY
    });
    const openai = new OpenAIApi(configuration);

    const messages = conversationHistory.concat({ role: 'user', content: userInput });

    // if (userInput.toLowerCase() === 'change prompt') {
    //   // Reset the conversation history and the model configuration
    //   initialPrompt = userInput;
    //   conversationHistory = [
    //     { role: 'system', content: initialPrompt }
    //   ];
    //   return "Prompt has been changed. You can start a new conversation.";
    // } else {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages,
    });

    // Update conversation history with the response
    const responseContent = completion.data.choices[0].message['content'];
    conversationHistory.push({ role: 'user', content: userInput });
    conversationHistory.push({ role: 'assistant', content: responseContent });

    return responseContent;
    // }
  } catch (error) {
    console.error("An error occurred:", error.message);
    return "Sorry, there was an error processing your request.";
  }
};

/**
 * Main function to run the interactive chatbot.
 * This function initializes the conversation and listens for user input.
 * The chatbot responds to the user until the user types "exit" to end the chat.
 */
const main = async () => {
  rl.setPrompt("You: ");
  rl.prompt();

  rl.on('line', async function (userInput) {
    if (userInput.toLowerCase() === 'exit') {
      console.log("ChatBot: Goodbye! Have a great day!");
      rl.close();
    } else {
      // Add your logic to process userInput and generate a response
      let response = await generateResponse(userInput);
      console.log(`
ChatBot: ${response}
      `.yellow);
      rl.prompt();
    }
  }).on('close', function () {
    process.exit(0);
  });
}

main();
