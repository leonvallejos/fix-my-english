import cohere from "cohere-ai";

cohere.init('mJ9GVG9lcV8i07TJYOuQjqfcw4JB2y1CmirFXdX1');


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
    Incorrect sample: "${input}"`,
  })
}



