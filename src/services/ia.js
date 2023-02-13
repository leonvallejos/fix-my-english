const COHERE_API_KEY = 'C1dVF3W8eKp2VJ1zCK2hEAk2CHSHJLKRfNmLpEXO'
const COHERE_API_GENERATE_URL = 'https://api.cohere.ai/generate'
const COHERE_API_DETECT_LANGUAGE_URL = 'https://api.cohere.ai/detect-language'

export async function checkIsEnglish(input){
  const data = {
    texts: [input],
  }
  const response = await fetch(COHERE_API_DETECT_LANGUAGE_URL, {
    method: 'POST',
    headers: {
      Acccept: 'application/json',
      Authorization: `BEARER ${COHERE_API_KEY}`,
      "Content-Type": 'application/json',
      "Cohere-Version": '2022-12-06',
    },
    body: JSON.stringify(data)
  }).then(res => res.json())

  const {language} = response
}



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
  const response = await fetch(COHERE_API_GENERATE_URL, {
    method: 'POST',
    headers: {
      Authorization: `BEARER ${COHERE_API_KEY}`,
      "Content-Type": 'application/json',
      "Cohere-Version": '2022-12-06',
    },
    body: JSON.stringify(data)
  }).then(res => res.json())

  const {text} = response.generations[0]

  return text
  .replace('--', '')
  .replaceAll('"', '')
  .substring(1, text.length - 3)
}




