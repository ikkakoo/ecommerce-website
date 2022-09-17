from re import S
from django.contrib import admin
from main.models import Product, Order, ShippingAddress, OrderItem, Review

# Register your models here.
admin.site.register(Product)
admin.site.register(Review)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(ShippingAddress)
