from django.db import models


# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.FloatField(max_length=14)
    description = models.TextField()
    count = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)


class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
