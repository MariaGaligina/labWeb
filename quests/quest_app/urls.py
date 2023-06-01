from django.urls import path
from . import views
from .views import *

urlpatterns=[
    path('',index_page),
    path('quest0', views.quest0),
    path('quest1', views.quest1),
    path('quest2', views.quest2),
    path('questZel0', views.questZel0),
    path('questZel1', views.questZel1),
    path('questZel2', views.questZel2),
    path('auth', views.auth),
]