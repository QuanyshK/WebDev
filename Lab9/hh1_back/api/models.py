from django.db import models

# Create your models here.
class Company(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    city = models.CharField(max_length=200)
    address = models.TextField()
    def __str__(self):
        return self.name
class Vacancy(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    description = models.TextField()
    salary = models.FloatField(default=0)
    company = models.ForeignKey(Company, on_delete=models.SET_NULL, null=True, blank= True)
    def __str__(self):
        return self.name
    