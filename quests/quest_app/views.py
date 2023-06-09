from django.shortcuts import redirect, render
from django.http import HttpResponse
from django.contrib import messages

from .forms import CreateUserForm

from .models import *
from django.contrib.auth.forms import UserCreationForm

# from .forms import CreateUserForm

# Create your views here.


def index_page(request):
    all_quests = Quest.objects.all()
    return render(request, "quest_app/index.html", {"all_quests": all_quests})


def quest1(request):
    quest = Quest.objects.get(pk=1)
    return render(request, "quest_app/quest1.html", {"quest": quest})


def quest2(request):
    quest = Quest.objects.get(pk=2)
    return render(request, "quest_app/quest2.html", {"quest": quest})


def quest3(request):
    quest = Quest.objects.get(pk=3)
    return render(request, "quest_app/quest3.html", {"quest": quest})


def questZel0(request):
    return render(request, "quest_app/questZel0.html")


def questZel1(request):
    return render(request, "quest_app/questZel1.html")


def questZel2(request):
    return render(request, "quest_app/questZel2.html")


"""
def auth(request):
    form = CreateUserForm()
    return render(request, "quest_app/auth.html", {"form": form})
"""


def auth(request):
    form = CreateUserForm()
    if request.method == "POST":
        form = CreateUserForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(
                request, "Account was created: ", form.cleaned_data.get("username")
            )
            return redirect("/quest0")
    # return render(request, "quest_app/auth.html")

    return render(request, "quest_app/auth.html", {"form": form})
