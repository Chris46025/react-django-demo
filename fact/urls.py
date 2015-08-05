from django.conf.urls import patterns, include, url
from . import views
from rest_framework.urlpatterns import format_suffix_patterns


urlpatterns = patterns ('',
				url(r'^$', 'fact.views.index'),
				url(r'^(?P<fact_id>\d+)/$', 'fact.views.detail'),
				url(r'^api/(?P<pk>[0-9]+)/$', views.FactDetail.as_view()),
				)

urlpatterns = format_suffix_patterns(urlpatterns)