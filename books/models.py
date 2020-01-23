from django.db import models

# Create your models here.

class Book(models.Model):
    title = models.CharField(max_length=50, unique=True)
    description = models.TextField()

    def __str__(self):
        return self.title
