from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=255)
    def __str__(self):
        return self.name

class Transport(models.Model):
    name = models.CharField(max_length=255)
    price = models.IntegerField()
    image = models.ImageField(upload_to='images/%Y/%m/%d') 
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    def __str__(self):
        return self.name