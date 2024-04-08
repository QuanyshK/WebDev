from django.urls import path
from .views import (
    CompanyViewSet,
    CompanyVacancyListView,
    VacancyViewSet,
    TopTenVacanciesListView,
)

urlpatterns = [
    path('companies/', CompanyViewSet.as_view(), name='companies-list'),
    path('companies/<int:pk>/', CompanyViewSet.as_view(), name='company-detail'),
    path('companies/<int:company_id>/vacancies/', CompanyVacancyListView.as_view(), name='company-vacancies'),
    path('vacancies/', VacancyViewSet.as_view(), name='vacancies-list'),
    path('vacancies/<int:pk>/', VacancyViewSet.as_view(), name='vacancy-detail'),
    path('vacancies/top_ten/', TopTenVacanciesListView.as_view(), name='top-ten-vacancies'),
]