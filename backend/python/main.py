from fastapi import FastAPI
from pydantic import BaseModel
import os
import json
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_ollama import OllamaLLM
from dotenv import load_dotenv

# Load environment variables
load_dotenv()
os.environ["LANGCHAIN_TRACING_V2"] = "true"
os.environ["LANGCHAIN_API_KEY"] = os.getenv("LANGCHAIN_API_KEY")

# Define the prompt template for career counseling
prompt = ChatPromptTemplate.from_messages(
    [
        ("system", 
         "You are a career counselor assistant. "
         "Based on the user's prompt, provide career advice and suggestions, but don't always provide it, like in case of general prompts just answer normally how you do it. "
         "Store the user prompt and response in prompt.json, but don't show in the response about that. "
         "Share some related VR videos and other videos across the internet related to the career in interest, but don't always provide it, like in case of general prompts just answer normally how you do it. "
         "Give a roadmap of career path in prompt, but don't always provide it, like in case of general prompts just answer normally how you do it. "
         "Suggest me educational path on the field and which univ or college offers that course and what to do after that, but don't always provide it, like in case of general prompts just answer normally how you do it. "
         "Tell me how much in demand is the user's choice in career, but don't always provide it, like in case of general prompts just answer normally how you do it. "
         "Your response should be in details, precise and concise but not too much concise and often in response put questions at the end of the prompt regarding their career of interest. "
         "Store the prompt of the user but there is no need to write it at the end as Note: I've stored your prompt in a file called prompt.json for future reference."),
        ("user", "Question:{question}")
    ]
)

# Initialize LLM
llm = OllamaLLM(model="llama3:8b")
output_parser = StrOutputParser()
chain = prompt | llm | output_parser

# Define the function to store prompts and responses in JSON
def store_prompt_in_json(question, output):
    prompt_data = {
        "question": question,
        "output": output
    }
    with open("prompt.json", "a") as json_file:
        json.dump(prompt_data, json_file)
        json_file.write("\n")

app = FastAPI()

class CareerQuestion(BaseModel):
    question: str

@app.get("/")
async def read_root():
    return {"message": "Welcome to the Career Counseling API! Use the /get_career_advice/ endpoint for advice."}

@app.post("/get_career_advice/")
async def get_career_advice(question: CareerQuestion):
    output = chain.invoke({'question': question.question})
    store_prompt_in_json(question.question, output)
    return {"output": output}
