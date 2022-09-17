from dataclasses import fields
from pyexpat import model
from rest_framework import serializers
from django.contrib.auth.models import User
from main.models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'