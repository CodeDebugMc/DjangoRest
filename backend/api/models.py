from django.db import models

# Create your models here.

class Item(models.Model):

  first_name = models.CharField(max_length=50, null=True)
  middle_name = models.CharField(max_length=50, null=True)
  last_name = models.CharField(max_length=50, null=True)
  email = models.EmailField(max_length=50, null=True)
  phone = models.IntegerField(null=True)
  address = models.CharField(max_length=50, null=True)
  zipcode = models.CharField(max_length=5, null=True)
  birthday = models.DateField(max_length=50, null=True)
  telephone = models.IntegerField(null=True)

  #NEW TO CART
  civilStatus = models.CharField(max_length=50, null=True)
  heightM = models.IntegerField(null=True)
  weightKg = models.IntegerField(null=True)
  bloodType = models.CharField(max_length=10, null=True)
  gsisIdNo = models.CharField(max_length=50, null=True)

  pagIbigIdNo = models.CharField(max_length=50, null=True)
  SSS_No = models.CharField(max_length=50, null=True)
  TIN_No = models.CharField(max_length=50, null= True)
  agencyEmployeeNo = models.CharField(max_length=50, null=True)
  citizenship = models.CharField(max_length=50, null= True)

  fatherSurName = models.CharField(max_length=50, null=True)
  fatherFirstName = models.CharField(max_length=50, null=True)
  fatherMiddleName = models.CharField(max_length=50, null=True)
  motherSurname = models.CharField(max_length=50, null=True)
  motherFirstName = models.CharField(max_length=50,null=True)
  motherMiddleName = models.CharField(max_length=50, null=True)
  #description = models.TextField()

  def __str__(self):
    return self.first_name