from fastapi import APIRouter, HTTPException
from app.models import Task
from app.schemas import TaskCreate, TaskOut

router = APIRouter(prefix="/tasks", tags=["Tasks"])

@router.get("/", response_model=list[TaskOut])
async def get_tasks():
    tasks = await Task.all()  # get all tasks, including deleted
    return tasks

@router.post("/", response_model=TaskOut)
async def add_task(task: TaskCreate):
    new_task = await Task.create(**task.dict())
    return new_task

@router.put("/{task_id}", response_model=TaskOut)
async def update_task(task_id: int, task: TaskCreate):
    t = await Task.get(id=task_id)
    t.title = task.title
    t.updated = 1
    await t.save()
    return t

@router.delete("/{task_id}")
async def delete_task(task_id: int):
    t = await Task.get(id=task_id)
    t.deleted = 1
    await t.save()
    return {"ok": True}

