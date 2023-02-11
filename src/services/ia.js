import cohere from "cohere-ai";

cohere.init('C1dVF3W8eKp2VJ1zCK2hEAk2CHSHJLKRfNmLpEXO');

// fix function
export async function fixMyEnglish(input){
  const response = await cohere.generate({
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
  })
  return response.body.generations[0].text
}




