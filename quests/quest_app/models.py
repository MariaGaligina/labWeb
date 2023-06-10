from django.db import models
from django.contrib.auth.models import User


class Quest(models.Model):
    title = models.CharField(max_length=200)
    short_description = models.TextField(blank=True)
    full_description = models.TextField(blank=True)
    count_members = models.CharField(max_length=7)
    splashsqreen = models.ImageField(upload_to="splashscreens/")
    icon_people = models.ImageField(upload_to="icon/people/")
    icon_type_quest = models.ImageField(upload_to="icon/type_quest/")
    type_quest = models.CharField(max_length=30)
    city = models.CharField(max_length=50)
    subway = models.CharField(max_length=50)
    #    raiting = models.IntegerField(default=0)
    is_published = models.BooleanField(default=True)
    age_limit = models.CharField(max_length=3)
    time = models.IntegerField(default=60)
    cost = models.IntegerField(default=4000)
    addition = models.CharField(max_length=200)
    likes = models.ManyToManyField(
        User, related_name="blog_post", default=None, blank=True
    )

    def num_likes(self):
        return self.likes.all().count()


LIKE_CHOICES = (
    ("Like", "Like"),
    ("Unlike", "Unlike"),
)


class QuestNew(models.Model):
    title1 = models.CharField(max_length=200)
    short_description1 = models.TextField(blank=True)
    full_description1 = models.TextField(blank=True)
    count_members1 = models.CharField(max_length=7)
    splashsqreen1 = models.ImageField(upload_to="splashscreens/")
    icon_people1 = models.ImageField(upload_to="icon/people/")
    icon_type_quest1 = models.ImageField(upload_to="icon/type_quest/")
    type_quest1 = models.CharField(max_length=30)
    city1 = models.CharField(max_length=50)
    subway1 = models.CharField(max_length=50)
    #    raiting = models.IntegerField(default=0)
    is_published1 = models.BooleanField(default=True)
    age_limit1 = models.CharField(max_length=3)
    time1 = models.IntegerField(default=60)
    cost1 = models.IntegerField(default=4000)
    addition1 = models.CharField(max_length=200)
    likes1 = models.ManyToManyField(
        User, related_name="blog_post1", default=None, blank=True
    )

    def num_likes(self):
        return self.likes.all().count()


class Like(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Quest, on_delete=models.CASCADE)
    value = models.CharField(choices=LIKE_CHOICES, max_length=8)

    def str(self):
        return f"{self.user}-{self.post}-{self.value}"
