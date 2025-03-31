from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('api/products', views.products, name='products'),
    path('api/products/<int:id>', views.product, name='product'),
    path('api/categories', views.categories, name='categories'),
    path('api/categories/<int:id>', views.category, name='category'),
    path('api/categories/<int:id>/products', views.products, name='category-products'),
]