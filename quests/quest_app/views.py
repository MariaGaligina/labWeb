from django.shortcuts import render
from django.http import HttpResponse

from .models import *

# Create your views here.


def index_page(request):
    all_quests = Quest.objects.all()
    return render(request, "quest_app/index.html", {"all_quests": all_quests})


def quest0(request):
    quest = Quest.objects.filter(id=1)
    return render(
        request, "quest_app/quest0.html", {"quest": quest, "title": "Алхимик"}
    )


def quest1(request):
    return render(request, "quest_app/quest1.html")


def quest2(request):
    return render(request, "quest_app/quest2.html")


def questZel0(request):
    return render(request, "quest_app/questZel0.html")


def questZel1(request):
    return render(request, "quest_app/questZel1.html")


def questZel2(request):
    return render(request, "quest_app/questZel2.html")


def auth(request):
    return render(request, "quest_app/auth.html")
