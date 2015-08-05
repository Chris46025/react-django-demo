from django.db import models


# Create your models here.
class Fact(models.Model):
	subject = models.CharField(max_length="100", null=False, blank=False)
	content = models.CharField(max_length="200", null=False, blank=False)
	image = models.ImageField(upload_to="images/")