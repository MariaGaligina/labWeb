from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def index_page(request):
    return render(request, 'quest_app/index.html')

def quest0(request):
    return render(request, 'quest_app/quest0.html')

def quest1(request):
    return render(request, 'quest_app/quest1.html')

def quest2(request):
    return render(request, 'quest_app/quest2.html')

def questZel0(request):
    return render(request, 'quest_app/questZel0.html')

def questZel1(request):
    return render(request, 'quest_app/questZel1.html')

def questZel2(request):
    return render(request, 'quest_app/questZel2.html')

def auth(request):
    return render(request, 'quest_app/auth.html')

