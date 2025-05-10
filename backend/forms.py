from django import forms
from .models import Guide

class GuideForm(forms.ModelForm):
    class Meta:
        model = Guide
        fields = ["title", "game", "tags", "nsfw", "content", "image"]
        widgets = {
            "tags": forms.CheckboxSelectMultiple,
            "content": forms.Textarea(attrs={"rows": 5}),
        }
