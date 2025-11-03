from pydantic import BaseModel

class TaskCreate(BaseModel):
    title: str

class TaskOut(BaseModel):
    id: int
    title: str
    deleted: bool
    updated: bool

    class Config:
        orm_mode = True
