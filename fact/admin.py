from django.contrib import admin
from models import Fact

# Register your models here.
class FactAdmin(admin.ModelAdmin):
	list_display = ('subject',)
	search_fields = ['subject']

admin.site.register(Fact, FactAdmin)