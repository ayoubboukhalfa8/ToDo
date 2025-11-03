from tortoise.models import Model
from tortoise import fields

class Task(Model):
    id = fields.IntField(pk=True)
    title = fields.CharField(max_length=255)
    deleted = fields.IntField(default=0)
    updated = fields.IntField(default=0)
