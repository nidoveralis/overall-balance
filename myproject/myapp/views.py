from django.shortcuts import render
from django.http import HttpResponse

def get_overall_balance(request):
  balance = 124.0000000022701
  data = { 'overall_balance': overall_balance}
  return JsonResponse(data)
