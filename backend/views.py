from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login
from django.contrib.auth.decorators import login_required
from rest_framework.decorators import api_view
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.response import Response
from .models import Guide
from .forms import GuideForm
from .serializers import GuideSerializer


@api_view(['GET'])
def guide_list(request):
    guides = Guide.objects.all().order_by("-id")
    paginator = LimitOffsetPagination()
    paginated_guides = paginator.paginate_queryset(guides, request)
    serializer = GuideSerializer(paginated_guides, many=True)
    return paginator.get_paginated_response(serializer.data)


def home(request):
    return render (request, 'home.html')


def new_guide(request):
    if request.method == "POST":
        form = GuideForm(request.POST, request.FILES)
        if form.is_valid():
            guide = form.save(commit=False)
            guide.author = request.user
            guide.save()
            form.save_m2m()  # For tags
            return redirect("home")  # or wherever you want
    else:
        form = GuideForm()

    return render(request, "new_guide.html", {"form": form})


@login_required
def register(request):
    if request.method == "POST":
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect("home")
    else:
        form = UserCreationForm()
    return render(request, "register.html", {"form": form})