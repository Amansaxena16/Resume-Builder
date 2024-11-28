from django.db import models

class User(models.Model):
    userID = models.IntegerField()
    name = models.CharField(max_length=20)
    jobTitle = models.CharField(max_length=20)
    contact = models.IntegerField()
    email = models.EmailField(max_length=50)
    time_date = models.DateTimeField()
    
    
class LoginUser(models.Model):
    userID = models.IntegerField()
    loginUserName = models.IntegerField()
    loginEmail = models.EmailField(max_length=50)
    