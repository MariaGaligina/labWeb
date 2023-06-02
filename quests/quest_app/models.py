from django.db import models


class Quest(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    count_members = models.CharField(max_length=7)
    splashsqreen = models.ImageField(upload_to="splashscreens/")
    icon_people = models.ImageField(upload_to="icon/people/")
    icon_type_quest = models.ImageField(upload_to="icon/type_quest/")
    type_quest = models.CharField(max_length=30)
    city = models.CharField(max_length=50)
    subway = models.CharField(max_length=50)
    raiting = models.IntegerField(default=0)
    is_published = models.BooleanField(default=True)
