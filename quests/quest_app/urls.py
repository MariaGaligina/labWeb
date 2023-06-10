from django.urls import path
from . import views
from .views import *

urlpatterns = [
    path("", index_page),
    path("quest1", views.quest1),
    path("quest2", views.quest2),
    path("quest3", views.quest3),
    path("questZel0", views.questZel0),
    path("questZel1", views.questZel1),
    path("questZel2", views.questZel2),
    path("auth", views.auth),
    path("liked/", views.like_unlike_post, name="like-post-view"),
]
