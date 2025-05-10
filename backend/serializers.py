from rest_framework import serializers
from .models import Guide, Game, Tag

class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = ['id', 'name']

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['id', 'name']

class GuideSerializer(serializers.ModelSerializer):
    game = GameSerializer()
    tags = TagSerializer(many=True)

    class Meta:
        model = Guide
        fields = '__all__'
