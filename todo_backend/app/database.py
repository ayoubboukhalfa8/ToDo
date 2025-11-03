from tortoise import Tortoise

async def init_db():
    await Tortoise.init(
        db_url="mysql://root:1234@localhost:3306/todo_list",
        modules={"models": ["app.models"]}
    )
    await Tortoise.generate_schemas()
