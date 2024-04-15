from .models import Company,Vacancy
from rest_framework import generics
from .serializer import CompanySerializer, VacancySerializer
# Create your views here.


class CompanyViewSet(generics.ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class VacancyViewSet(generics.ListCreateAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

class TopTenVacanciesListView(generics.ListAPIView):

    serializer_class = VacancySerializer
    def get_queryset(self):
        top_vacancies = Vacancy.objects.order_by('-salary')[:10]
        return top_vacancies

class CompanyVacancyListView(generics.ListAPIView):

    serializer_class = VacancySerializer

    def get_queryset(self):
        company_id = self.kwargs['company']
        return Vacancy.objects.filter(company_id=company_id)