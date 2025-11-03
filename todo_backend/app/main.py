from fastapi import FastAPI
from tortoise.contrib.fastapi import register_tortoise
from fastapi.middleware.cors import CORSMiddleware
from app.routers import tasks

app = FastAPI(title="To-Do Backend")

# Allow CORS for frontend (Next.js at localhost:3000)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(tasks.router)

@app.get("/")
async def root():
    return {"message": "To-Do List API is running"}

register_tortoise(
    app,
    db_url="mysql://root:1234@localhost:3306/todo_list",
    modules={"models": ["app.models"]},
    generate_schemas=True,
    add_exception_handlers=True,
)
