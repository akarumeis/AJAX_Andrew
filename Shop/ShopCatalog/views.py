from django.shortcuts import render
from .models import *
from django.http import JsonResponse

# Create your views here.


def show_catalog(request):

    all_categories = Category.objects.all()
    all_transports = Transport.objects.all()
    context = {'all_categories': all_categories,
               'all_transports': all_transports}

    return render(request, 'index.html', context=context)

# Функція, яка приймає запит від клієнта
def get_category(request):
    # Отримуємо категорію транспорту з запиту
    category = request.GET.get('category')
    # Фільтруємо список транспорту за категорією та отримуємо значення полів
    filtered_transport = Transport.objects.filter(
        category__name=category).values()
    # Перетворюємо результат у список
    filtered_transport = list(filtered_transport)
    # Повертаємо результат у форматі JSON
    return JsonResponse({'filtered_transport': filtered_transport})
