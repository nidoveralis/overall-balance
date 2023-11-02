from django.urls import path
from . import views

urlpatterns = [
  path('overall_balance_get/', views.get_overall_balance_get, name='overall_balance_get',)
]