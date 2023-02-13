const COHERE_API_KEY = 'C1dVF3W8eKp2VJ1zCK2hEAk2CHSHJLKRfNmLpEXO'
const COHERE_API_GENERATE_URL = 'https://api.cohere.ai/generate'

/* 
curl --location --request POST 'https://api.cohere.ai/generate' \
  --header 'Authorization: BEARER C1dVF3W8eKp2VJ1zCK2hEAk2CHSHJLKRfNmLpEXO' \
  --header 'Content-Type: application/json' \
  --header 'Cohere-Version: 2022-12-06' \
  --data-raw '{
      "model": "xlarge",
      "prompt": "{prompt}",
      "max_tokens": 100,
      "temperature": 0.8,
      "k": 1,
      "p": 0.75,
      "frequency_penalty": 0,
      "presence_penalty": 0,
      "stop_sequences": [],
      "return_likelihoods": "NONE"
    }'
*/



// fix function
export async function fixMyEnglish(input){
  const data = {
    model: 'xlarge',
    prompt: `This is a speel checker generator. 
  --
  Incorrect sample: "I are good!"
  Correct sample: "I am good!"
  --
  Incorrect sample: "I have 22 years old."
  Correct sample: "I am 22 years old."
  --
  Incorrect sample: "I done't can know"
  Correct sample: "I don't know"
  --
  Incorrect sample: "${input}"
  Correct sample:`,
      max_tokens: 40,
      temperature: 0.3,
      k: 0,
      p: 1,
      frequency_penalty: 0,
      stop_sequences: ['--'],
      return_likelihoods: 'NONE'
  }
  const response = fetch(COHERE_API_GENERATE_URL, {
    method: 'POST',
    headers: {
      Authorization: `BEARER ${COHERE_API_KEY}`,
      ContentType: 'application/json',
      CohereVersion: '2022-12-06',
      
    }
  })
  const response = await cohere.generate()
  return response.body.generations[0].text
}




